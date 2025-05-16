import React from 'react';
import PropTypes from 'prop-types';

const CTAButton = ({ text, onClick, className = '', type = 'button', disabled = false, icon }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center px-3 py-2 bg-primary text-black rounded-full hover:bg-primary/90 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {text}
      {icon && <span className="mr-2">{icon}</span>}
    </button>
  );
};

CTAButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
  icon: PropTypes.element,
};

export default CTAButton;
