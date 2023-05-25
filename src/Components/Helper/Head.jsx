import React from 'react';
import PropTypes from 'prop-types';

const Head = (props) => {
    React.useEffect(() => {
        document.title = props.title + ' | Dogs';
        document.querySelector("meta[name='description']")
        .setAttribute
    },[props])
  return (
    <>
      
    </>
  )
}

Head.propTypes = {
    props: PropTypes.array,
    title: PropTypes.string
}

export default Head
