import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedPhotosItem.module.css';

const FeedPhotoItem = ({ photo, setModalPhoto }) => {
  function handleClick() {
    setModalPhoto(photo);
  }
  
  return (
    <li className={styles.photo} onClick={handleClick}>
        <img src={photo.src} alt={photo.title} />
        <span className={styles.vizualizacao}>{photo.acessos}</span>
    </li>
  )
}

FeedPhotoItem.propTypes = {
    photo: PropTypes.node.isRequired,
    setModalPhoto: PropTypes.node.isRequired
  };
  

export default FeedPhotoItem;
