import './Input.scss';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const Input = ({
  type = 'text',
  name,
  value = '',
  placeholder = '',
  required,
  minLength,
  maxLength = 255,
  min,
  onInput,
  onChange,
  onBlur,
  classExtra,
  textarea = false,
  errors,
} = props) => {
  const InputTag = textarea ? 'textarea' : 'input';
  const errorMessage = errors[name];
  const [isFocus, setIsFocus] = useState(false);

  const inputClasses = classNames('input', classExtra, {
    'input--required': required,
    'input--error': errorMessage,
    'input--focus': isFocus,
  });
  const textareaClass = classNames({
    'input__input--textarea': textarea,
  });

  const handleFocus = () => {
    setIsFocus(!isFocus);
  };

  return (
    <div className={inputClasses}>
      <label className='input__label'>
        {name}
        <InputTag
          className={`input__input ${textareaClass}`}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          required={required}
          minLength={minLength}
          maxLength={maxLength}
          min={min}
          onInput={onInput}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={handleFocus}
        />
      </label>
      {errorMessage && <span className='input__message'>{errorMessage}</span>}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.any,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  minLength: PropTypes.string,
  maxLength: PropTypes.string,
  min: PropTypes.string,
  onInput: PropTypes.func,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  classExtra: PropTypes.string,
  textarea: PropTypes.bool,
  errors: PropTypes.object,
};

export default Input;
