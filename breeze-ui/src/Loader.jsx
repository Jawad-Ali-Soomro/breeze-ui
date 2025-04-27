import React from 'react';

/**
 * A customizable loading indicator component with multiple variants
 * @param {Object} props
 * @param {'spinner'|'dots'|'bar'|'progress'} [props.variant='spinner'] - Type of loader to display
 * @param {'small'|'medium'|'large'|'xlarge'} [props.size='medium'] - Size of the loader
 * @param {string} [props.color='#3b82f6'] - Color of the loader in hex format
 * @param {'slow'|'normal'|'fast'} [props.speed='normal'] - Animation speed
 */
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

  /**
   * Converts hex color to RGB format
   * @param {string} hex - Color in hex format (e.g. '#3b82f6')
   * @returns {string} RGB color string (e.g. '59, 130, 246')
   */
  function hexToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r}, ${g}, ${b}`;
  }

  // Animation styles
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

  /**
   * Renders the appropriate loader variant based on props
   * @returns {React.ReactNode} The loader component
   */
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

export default Loader;