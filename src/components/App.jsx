import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import { fetchPicturesByQuery } from '../api/api.js';

export default class App extends Component {
  state = {
    pictures: [],
    isLoading: false,
    error: null,
    page: 1,
    query: '',
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    ) {
      this.fetchByQuery();
    }
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleSubmit = query => {
    this.setState({
      pictures: [],
      isLoading: false,
      error: null,
      page: 1,
      query,
    });
  };

  fetchByQuery = async () => {
    try {
      this.setState({ isLoading: !this.state.isLoading });
      const pictures = await fetchPicturesByQuery(
        this.state.query,
        this.state.page
      ); 

      if(pictures.length === 0){
        this.setState({
          error: 'Nothing found =('
        });
        return;
      }

      this.setState(prevState => ({
        pictures: [...prevState.pictures, ...pictures],
      }));
    } catch {
      this.setState({
        error: 'Failed to load =(',
      });
    } finally {
      this.setState({ isLoading: !this.state.isLoading });
    }
  };

  render() {
    const {error, pictures, isLoading} = this.state;
    return (
      <>
        <SearchBar onSubmit={this.handleSubmit} />
        {error && <p>{error}</p>}
        {pictures.length > 0 && (
          <ImageGallery pictures={pictures} onClick={this.toggleModal}/>
        )}
        {isLoading && <Loader />}
        {pictures.length >= 12 && <Button onClick={this.loadMore}>Load more</Button>}
      </>
    );
  }
}
