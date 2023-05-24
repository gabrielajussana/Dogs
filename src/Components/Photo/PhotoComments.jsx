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
    <ul ref={commentsSection} className={styles.comment}>
      {comments.map(comment => <li key={comment.id}>
        <b>{comment.comment_author}: </b>
        <span>{comment.comment_content}</span>
      </li>
      )}
    </ul>
    {login && <PhotoCommentsForm id={props.id} setComments={setComments}/> }
   </>
  )
}

PhotoComments.propTypes = {
  props: PropTypes.node.isRequired,
  id: PropTypes.node.isRequired,
  comments: PropTypes.node.isRequired,
}

export default PhotoComments
