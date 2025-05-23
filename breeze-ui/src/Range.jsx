import React from 'react';

const Range = ({
  min = 0,
  max = 100,
  value = 50,
  step = 1,
  thumbColor = '#4a90e2',
  barColor = '#ddd',
  onChange,
  className = '',
  style,
}) => {
  const handleChange = (e) => {
    const newValue = parseFloat(e.target.value);
    onChange?.(newValue);
  };

  return (
    <div style={{ position: 'relative', width: '100%', ...style }}>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        step={step}
        onChange={handleChange}
        className={`breeze-range-input ${className}`}
        style={{
          WebkitAppearance: 'none',
          width: '100%',
          height: '6px',
          borderRadius: '3px',
          background: barColor,
          outline: 'none',
        }}
      />
    </div>
  );
};

export default Range;