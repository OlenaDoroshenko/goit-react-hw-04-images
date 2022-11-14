import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({pictures}) => <ul className={css.Gallery}>
    {pictures.map(({id,webformatURL, largeImageURL }) => (
    <ImageGalleryItem key={id} url={webformatURL} largeImageURL={largeImageURL}/>
    ))}
</ul>;

export default ImageGallery;

ImageGallery.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
    })).isRequired,
}
