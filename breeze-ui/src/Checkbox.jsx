import React, { useRef, useEffect } from "react";

/**
 * A customizable checkbox component that supports indeterminate, checked, and disabled states.
 * 
 * @param {Object} props - The properties for the Checkbox component.
 * @param {string} props.id - The unique identifier for the checkbox.
 * @param {string} props.label - The label text for the checkbox.
 * @param {boolean} [props.checked=false] - Indicates whether the checkbox is checked.
 * @param {function} [props.onChange] - A callback function triggered when the checkbox state changes.
 * @param {boolean} [props.disabled=false] - Indicates whether the checkbox is disabled.
 * @param {boolean} [props.indeterminate=false] - Sets the checkbox to an indeterminate state.
 * @param {string} [props.className=""] - Custom CSS class to be applied to the checkbox container.
 * @param {Object} [props.style] - Additional inline styles.
 * 
 * @returns {JSX.Element} The rendered Checkbox component.
 */
const Checkbox = ({
  id,
  label,
  checked = false,
  onChange,
  disabled = false,
  indeterminate = false,
  className = "",
  ...props
}) => {
  const checkboxRef = useRef(null);

  // Set the checkbox to indeterminate state when the component mounts or indeterminate changes
  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  // Handle the checkbox state change
  const handleChange = (e) => {
    if (onChange) {
      onChange(e.target.checked);
    }
  };

  // Styles object for custom checkbox styles
  const styles = {
    container: {
      display: 'inline-block',
      position: 'relative',
      margin: '8px 0',
      userSelect: 'none'
    },
    input: {
      position: 'absolute',
      opacity: 0,
      height: 0,
      width: 0
    },
    label: {
      display: 'flex',
      alignItems: 'center',
      cursor: disabled ? 'not-allowed' : 'pointer'
    },
    customCheckbox: {
      position: 'relative',
      display: 'inline-block',
      width: '18px',
      height: '18px',
      backgroundColor: '#fff',
      border: '2px solid #64748b',
      borderRadius: '4px',
      transition: 'all 0.2s',
      ...(checked && {
        backgroundColor: '#3b82f6',
        borderColor: '#3b82f6'
      }),
      ...(indeterminate && {
        backgroundColor: '#3b82f6',
        borderColor: '#3b82f6'
      }),
      ...(disabled && {
        backgroundColor: '#e2e8f0',
        borderColor: '#cbd5e0'
      }),
      ...(disabled && checked && {
        backgroundColor: '#cbd5e0',
        borderColor: '#cbd5e0'
      }),
      ...(disabled && indeterminate && {
        backgroundColor: '#cbd5e0',
        borderColor: '#cbd5e0'
      })
    },
    checkmark: {
      position: 'absolute',
      display: checked ? 'block' : 'none',
      left: '5px',
      top: '1px',
      width: '5px',
      height: '10px',
      border: 'solid white',
      borderWidth: '0 2px 2px 0',
      transform: 'rotate(45deg)',
      ...(indeterminate && {
        left: '3px',
        top: '6px',
        width: '10px',
        height: '2px',
        transform: 'none',
        borderWidth: '0 0 2px 0'
      })
    },
    text: {
      marginLeft: '8px',
      color: disabled ? '#94a3b8' : '#334155'
    },
    focusStyle: {
      boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.2)'
    }
  };

  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <div style={styles.container} className={className}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        ref={checkboxRef}
        style={styles.input}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
      <label htmlFor={id} style={styles.label}>
        <div style={{
          ...styles.customCheckbox,
          ...(!disabled && !checked && !indeterminate && {
            ':hover': {
              borderColor: '#3b82f6'
            }
          }),
          ...(isFocused && styles.focusStyle)
        }}>
          <div style={styles.checkmark} />
        </div>
        {label && <span style={styles.text}>{label}</span>}
      </label>
    </div>
  );
};

export default Checkbox;
