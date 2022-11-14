import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';

const ImageGalleryItem = ({ url, largeImageURL }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <li className={css.ImageGalleryItem} onClick={toggleModal}>
      <img src={url} alt="" className={css.ImageGalleryItemImage} />
      {isModalOpen && (
        <Modal onClick={toggleModal} largeImageURL={largeImageURL} />
      )}
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
};
