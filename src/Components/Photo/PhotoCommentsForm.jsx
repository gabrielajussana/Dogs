import React from 'react';
import useFetch from '../../Hooks/useFetch';
import { COMMENT_POST } from '../../api';
import PropTypes from 'prop-types';
import Error from '../../Helper/Error';
import styles from './PhotoCommentsForm.module.css';
import {ReactComponent as Enviar} from '../../Assets/enviar.svg';

const PhotoCommentsForm = ({id, setComments}) => {  
  const [comment, setComment] = React.useState('');
  const {request, error} = useFetch();

  async function handleSubmit(event){
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, {comment})
    const { response, json }= await request(url, options);
    if(response.ok) {
        setComment('');
        setComments((comments) => [...comments, json]) 
    } 
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <textarea 
        id="comment"
        name="comment"
        value={comment} 
        placeholder="Comente..."
        className={styles.textarea}
        onChange={({target}) => setComment(target.value)}  
      />
      <button className={styles.button}>
        <Enviar />
      </button>
      <Error error={error} />
    </form>
  )
}

PhotoCommentsForm.propTypes = {
    id: PropTypes.node.isRequired,
    setComments: PropTypes.node.isRequired,
}

export default PhotoCommentsForm;
