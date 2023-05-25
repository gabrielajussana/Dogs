import React from 'react';
import PropTypes from 'prop-types';
import { UserContext } from '../../UserContext';
import PhotoCommentsForm from './PhotoCommentsForm';
import styles from './PhotoComments.module.css';

const PhotoComments = (props) => {
  const [comments, setComments] = React.useState(() => props.comments)
  const { login } = React.useContext(UserContext);
  const commentsSection = React.useRef(null);

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeigth;
  }, [comments])

  return (
   <>
    <ul ref={commentsSection} className={`${styles.comment} ${props.single ? styles.single : ''}`}>
      {comments.map(comment => 
        <li key={comment.id}>
          <b>{comment.comment_author}: </b>
          <span>{comment.comment_content}</span>
        </li>
      )}
    </ul>
    {login && <PhotoCommentsForm 
      single={props.single} 
      id={props.id} 
      setComments={setComments}/> }
   </>
  )
}

PhotoComments.propTypes = {
  props: PropTypes.array,
  id: PropTypes.number,
  comments: PropTypes.array,
  single: PropTypes.bool
}

export default PhotoComments
