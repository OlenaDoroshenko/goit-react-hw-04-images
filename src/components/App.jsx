import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import { fetchPicturesByQuery } from '../api/api.js';

const App = () => {
  const [pictures, setPictures] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState(null);

  useEffect(() => {
    if (!query) {
      return;
    }
    setIsLoading(true);

    fetchPicturesByQuery(query, page)
      .then(pictures => {
        if (pictures.length === 0) {
          setError('Nothing found =(');
          setIsLoading(false);
          return;
        }
        setPictures(p => [...p, ...pictures]);
        setIsLoading(false);
      })
      .catch(error => {
        setError('Failed to load =(');
        setIsLoading(false);
      });
  }, [query, page]);

  const loadMore = () => {
    setPage(p => p + 1);
  };

  const handleSubmit = query => {
    setPictures([]);
    setIsLoading(false);
    setError(null);
    setPage(1);
    setQuery(query);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {error && <p>{error}</p>}
      {pictures.length > 0 && <ImageGallery pictures={pictures} />}
      {isLoading && <Loader />}
      {pictures.length >= 12 && <Button onClick={loadMore}>Load more</Button>}
    </>
  );
};

export default App;
