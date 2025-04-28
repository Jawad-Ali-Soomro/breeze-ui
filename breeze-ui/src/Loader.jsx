import React from 'react';
import PropTypes from 'prop-types';

const Loader = ({
  variant = 'spinner',
  size = 'medium',
  color = '#3b82f6',
  speed = 'normal',
}) => {
  const sizeMap = {
    small: 16,
    medium: 24,
    large: 32,
    xlarge: 48
  };

  const speedMap = {
    slow: 1.5,
    normal: 1,
    fast: 0.6
  };

  const baseStyles = {
    display: 'inline-block',
    position: 'relative',
    verticalAlign: 'middle'
  };

  const variantStyles = {
    spinner: {
      width: sizeMap[size],
      height: sizeMap[size],
      borderRadius: '50%',
      border: `3px solid rgba(${hexToRgb(color)}, 0.2)`,
      borderTopColor: color,
      animation: `spin ${speedMap[speed]}s linear infinite`
    },
    dots: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: sizeMap[size] / 4,
      height: sizeMap[size]
    },
    bar: {
      width: sizeMap[size] * 3,
      height: sizeMap[size] / 3,
      backgroundColor: `rgba(${hexToRgb(color)}, 0.2)`,
      position: 'relative',
      overflow: 'hidden'
    },
    progress: {
      width: sizeMap[size] * 3,
      height: sizeMap[size] / 3,
      backgroundColor: `rgba(${hexToRgb(color)}, 0.2)`,
      position: 'relative',
      borderRadius: sizeMap[size] / 6
    }
  };

  function hexToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r}, ${g}, ${b}`;
  }

  const animationStyles = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-${sizeMap[size] / 2}px); }
    }
    @keyframes slide {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
    @keyframes progress {
      0% { width: 0%; }
      100% { width: 100%; }
    }
  `;

  const renderVariant = () => {
    switch (variant) {
      case 'spinner':
        return <div style={{ ...baseStyles, ...variantStyles.spinner }} />;
      case 'dots':
        return (
          <div style={{ ...baseStyles, ...variantStyles.dots }}>
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                style={{
                  width: sizeMap[size] / 3,
                  height: sizeMap[size] / 3,
                  borderRadius: '50%',
                  backgroundColor: color,
                  animation: `bounce ${speedMap[speed]}s infinite ${i * 0.2}s`
                }}
              />
            ))}
          </div>
        );
      case 'bar':
        return (
          <div style={{ ...baseStyles, ...variantStyles.bar }}>
            <div
              style={{
                position: 'absolute',
                height: '100%',
                width: '30%',
                backgroundColor: color,
                animation: `slide ${speedMap[speed]}s infinite ease-in-out`
              }}
            />
          </div>
        );
      case 'progress':
        return (
          <div style={{ ...baseStyles, ...variantStyles.progress }}>
            <div
              style={{
                position: 'absolute',
                height: '100%',
                width: '0%',
                backgroundColor: color,
                borderRadius: sizeMap[size] / 6,
                animation: `progress ${speedMap[speed] * 2}s infinite ease-in-out`
              }}
            />
          </div>
        );
      default:
        return <div style={{ ...baseStyles, ...variantStyles.spinner }} />;
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <style>{animationStyles}</style>
      {renderVariant()}
    </div>
  );
};

Loader.propTypes = {
  variant: PropTypes.oneOf(['spinner', 'dots', 'bar', 'progress']),
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
  color: PropTypes.string,
  speed: PropTypes.oneOf(['slow', 'normal', 'fast']),
};

export default Loader;
