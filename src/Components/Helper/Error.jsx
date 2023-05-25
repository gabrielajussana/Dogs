import React from 'react';
import PropTypes from 'prop-types';

const Error = ({error}) => {
  if(!error) return null;
  return (
    <p style={{color: '#f31', margin: '1rem 0'}}>
      {error}
    </p>
  )
}

Error.propTypes = {
    error: PropTypes.string,
  };

export default Error;
