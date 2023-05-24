import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedPhotosItem.module.css';
import Image from '../../Helper/Image';

const FeedPhotoItem = ({ photo, setModalPhoto }) => {
  function handleClick() {
    setModalPhoto(photo);
  }
  
  return (
    <li className={styles.photo} onClick={handleClick}>
        <Image src={photo.src} alt={photo.title}/>
        <span className={styles.vizualizacao}>{photo.acessos}</span>
    </li>
  )
}

FeedPhotoItem.propTypes = {
    photo: PropTypes.node.isRequired,
    setModalPhoto: PropTypes.func
  };
  

export default FeedPhotoItem;
