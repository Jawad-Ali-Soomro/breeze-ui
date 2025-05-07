import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * A customizable input component with support for icons, error states, and more
 * @param {Object} props
 */
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
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const styles = {
    container: {
      fontFamily: "'Segoe UI', sans-serif",
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    },
    wrapper: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      borderRadius: '6px',
      transition: 'all 0.2s',
      border: '1px solid rgb(226, 232, 240)',
      width: '300px',
      opacity: disabled ? 0.6 : 1,
      cursor: disabled ? 'not-allowed' : 'text',
      ...(isFocused && {
        borderColor: '#80808090',
        boxShadow: '0 0 0 2px #80808054'
      })
    },
    input: {
      flex: 1,
      padding: '8px 12px',
      fontSize: '14px',
      border: 'none',
      outline: 'none',
      background: 'transparent',
      color: error ? '#ef4444' : 'inherit'
    },
    icon: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 8px',
      color: '#777'
    },
    errorMessage: {
      fontSize: '12px',
      marginTop: '4px',
      color: '#ef4444'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        {iconLeft && <span style={{ ...styles.icon, marginRight: '4px' }}>{iconLeft}</span>}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={styles.input}
          className={className}
          {...rest}
        />
        {iconRight && <span style={{ ...styles.icon, marginLeft: '4px' }}>{iconRight}</span>}
      </div>
      {typeof error === 'string' && error && (
        <p style={styles.errorMessage}>{error}</p>
      )}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ]),
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
  className: PropTypes.string
};

export default Input;
