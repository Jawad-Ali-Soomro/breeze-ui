import React from "react";
import "../styles/Checkbox.css";

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
  const handleChange = (e) => {
    if (onChange) {
      onChange(e.target.checked);
    }
  };

  return (
    <div className={`checkbox-container ${className}`}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        ref={(el) => {
          if (el) {
            el.indeterminate = indeterminate;
          }
        }}
        className="checkbox-input"
        {...props}
      />
      <label htmlFor={id} className="checkbox-label">
        <span className="checkbox-custom"></span>
        {label && <span className="checkbox-text">{label}</span>}
      </label>
    </div>
  );
};

export default Checkbox;
