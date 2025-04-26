import React from 'react';
import '../styles/Input.css'

const Input = ({
  type = "text",
  placeholder = "",
  value = "",
  onChange = () => {},
  disabled = false,
  error = false,
  iconLeft = null,
  iconRight = null,
  className = "",
  ...props
}) => {
  return (
    <div className={`input-container ${error ? 'error' : ''} ${disabled ? 'disabled' : ''}`}>
      <div className="input-wrapper">
        {iconLeft && <span className="input-icon left">{iconLeft}</span>}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`base-input ${className}`}
          {...props}
        />
        {iconRight && <span className="input-icon right">{iconRight}</span>}
      </div>
      {typeof error === 'string' && error && (
        <p className="error-message">{error}</p>
      )}
    </div>
  );
};

export default Input;