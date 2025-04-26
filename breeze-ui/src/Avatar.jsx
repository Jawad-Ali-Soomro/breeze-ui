import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import '../styles/Avatar.css'; 

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
  return (
    <div className={`avatar-container ${className}`} {...props}>
      <div className={`avatar ${size} ${shape}`}>
        {src ? (
          <img src={src} alt={alt} className="avatar-image" />
        ) : (
          <div className="avatar-icon">{icon}</div>
        )}
      </div>
      {status && <span className={`status ${status}`}></span>}
    </div>
  );
};

export default Avatar;