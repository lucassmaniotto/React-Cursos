import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

export default function Button({ type, children, onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => {},
};
