import React from 'react';
import PropTypes from 'prop-types';

import './Input.css';

export default function Input({ type, onChange }) {
  return (
    <input
      type={type}
      onChange={onChange}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  onChange: () => {},
};
