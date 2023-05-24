import React from 'react';
import styles from './PhotoContent.module.css';
import PropTypes  from 'prop-types';
import { Link } from 'react-router-dom';
import PhotoComments from './PhotoComments';
import { UserContext } from '../../UserContext';
import PhotoDelete from './PhotoDelete';

const PhotoContent = ({ data }) => {

 const { photo, comments } = data;
 const user = React.useContext(UserContext);

  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.details}>
          <div>
              <p>
                  {user.data && user.data.username === photo.author ? (<PhotoDelete id={photo.id}/>
                  ) : (
                    <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
                  )}
                  <span className={styles.vizualizacoes}>{photo.acessos}</span>
              </p>
              <h1 className="title">
                  <Link to={`/photo/${photo.id}`}>{photo.title}</Link>
              </h1>
              <ul className={styles.attributes}>
                  <li>{photo.peso} kg</li>
                  {photo.idade === 1 ? 
                  ( 
                      <li>{photo.idade} ano</li>
                  ) : (
                      <li>{photo.idade} anos</li>
                  )}
              </ul> 
          </div>
          <PhotoComments id={photo.id} comments={comments}/>
       </div>
    </div>
  )
}

PhotoContent.propTypes = {
  data: PropTypes.node.isRequired,
};

export default PhotoContent
