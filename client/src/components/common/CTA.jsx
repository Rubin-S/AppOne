import React from "react";
import PropTypes from "prop-types";

const CTAButton = ({
  text,
  onClick,
  className = "",
  type = "button",
  disabled = false,
  icon,
  iconPosition = "right",
  ariaLabel,
  title,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel || text}
      title={title || text}
      className={`
        inline-flex items-center justify-center gap-2
        px-4 py-2 rounded-full
        bg-primary text-white font-semibold
        hover:bg-primary/90 transition duration-300
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {iconPosition === "left" && icon && <span>{icon}</span>}
      <span>{text}</span>
      {iconPosition === "right" && icon && <span>{icon}</span>}
    </button>
  );
};

CTAButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  disabled: PropTypes.bool,
  icon: PropTypes.element,
  iconPosition: PropTypes.oneOf(["left", "right"]),
  ariaLabel: PropTypes.string,
  title: PropTypes.string,
};

export default CTAButton;
