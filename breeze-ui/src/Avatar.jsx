import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';
const Avatar = ({
  src,
  alt = "User Avatar",
  size = "md",
  shape = "circle",
  icon = <FaUserAlt />,
  status = null,
  className = "",
  ...props
}) => {
  const sizeStyles = {
    xs: { width: '24px', height: '24px', fontSize: '10px' },
    sm: { width: '32px', height: '32px', fontSize: '12px' },
    md: { width: '48px', height: '48px', fontSize: '16px' },
    lg: { width: '64px', height: '64px', fontSize: '20px' },
    xl: { width: '80px', height: '80px', fontSize: '24px' },
  };

  const shapeStyles = {
    circle: { borderRadius: '50%' },
    square: { borderRadius: '4px' },
    rounded: { borderRadius: '12px' },
  };

  const containerStyle = {
    position: 'relative',
    display: 'inline-block',
  };

  const avatarStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e2e8f0',
    overflow: 'hidden',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    ...sizeStyles[size],
    ...shapeStyles[shape],
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const iconStyle = {
    display: 'flex',
    color: '#64748b',
    fontSize: sizeStyles[size]?.fontSize,
  };

  const statusColors = {
    online: '#22c55e',
    offline: '#94a3b8',
    busy: '#ef4444',
    away: '#f59e0b',
  };

  const statusStyle = {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    border: '2px solid white',
    backgroundColor: statusColors[status],
  };

  return (
    <div style={containerStyle} className={className} {...props}>
      <div style={avatarStyle}>
        {src ? (
          <img src={src} alt={alt} style={imageStyle} />
        ) : (
          <div style={iconStyle}>{icon}</div>
        )}
      </div>
      {status && <span style={statusStyle}></span>}
    </div>
  );
};


Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  shape: PropTypes.oneOf(["circle", "square", "rounded"]),
  icon: PropTypes.node,
  status: PropTypes.oneOf(["online", "offline", "busy", "away", null]),
  className: PropTypes.string,
};


export default Avatar;
