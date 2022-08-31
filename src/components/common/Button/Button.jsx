import './Button.scss';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Button = ({
  type = 'button',
  classExtra,
  disabled = false,
  children,
  onClick,
}) => {
  const buttonClasses = classNames('button', classExtra);

  return (
    <button
      className={buttonClasses}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  classExtra: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
