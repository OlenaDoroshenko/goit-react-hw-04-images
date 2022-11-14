import css from './Modal.module.css';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const Modal = ({onClick, largeImageURL}) => {

  useEffect(()=>{

    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClick();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };    
  },[onClick]);


  const handleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      onClick();
    }
  };

    return (
      <div className={css.Overlay} onClick={handleOverlayClick}>
        <div className={css.Modal}>
          <img src={largeImageURL} alt="" />
        </div>
      </div>
    );
  
}

export default Modal;

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
}