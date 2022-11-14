import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({pictures, onClick}) => <ul className={css.Gallery}>
    {pictures.map(({id,webformatURL, largeImageURL }) => (
    <ImageGalleryItem key={id} url={webformatURL} onClick={onClick} largeImageURL={largeImageURL}/>
    ))}
</ul>;

export default ImageGallery;

ImageGallery.propTypes = {
    onclick: PropTypes.func.isRequired,
    pictures: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        webformatURL: PropTypes.string.isRequired,
    })).isRequired,
}
