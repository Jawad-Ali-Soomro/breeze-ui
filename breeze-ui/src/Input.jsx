import React from 'react';

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
  // Styles object
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
      border: '1px solid #ddd',
      borderRadius: '6px',
      transition: 'all 0.2s',
      width: '300px',
      ...(error && { borderColor: '#ef4444' }),
      ...(disabled && { opacity: 0.6, cursor: 'not-allowed' })
    },
    wrapperFocus: {
      borderColor: '#80808090',
      boxShadow: '0 0 0 2px #80808054'
    },
    input: {
      width: '100%',
      padding: '8px 12px',
      fontSize: '14px',
      border: 'none',
      outline: 'none',
      background: 'transparent',
      ...(error && { color: '#ef4444' }),
      ...(iconLeft && { paddingLeft: '4px' })
    },
    icon: {
      display: 'flex',
      padding: '0 8px',
      color: '#777'
    },
    errorMessage: {
      fontSize: '12px',
      marginTop: '4px',
      color: '#ef4444'
    }
  };

  // Handle focus state
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <div style={styles.container}>
      <div 
        style={{
          ...styles.wrapper,
          ...(isFocused && styles.wrapperFocus)
        }}
      >
        {iconLeft && <span style={{ ...styles.icon, marginRight: '4px' }}>{iconLeft}</span>}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          style={styles.input}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={className}
          {...props}
        />
        {iconRight && <span style={{ ...styles.icon, marginLeft: '4px' }}>{iconRight}</span>}
      </div>
      {typeof error === 'string' && error && (
        <p style={styles.errorMessage}>{error}</p>
      )}
    </div>
  );
};

export default Input;