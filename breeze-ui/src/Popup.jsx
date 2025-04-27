import React from "react";
import "../styles/Popup.css";

const Popup = ({
  onClose,
  padding = "30px",
  background = "white",
  color,
  children,
}) => {
  return (
    <div className="fullscreen-popup-container">
      <div 
        className="popup-overlay" 
        onClick={onClose}
      />
      
      <div
        className="popup-content-wrapper"
        style={{
          padding: padding,
          background: background,
          color: color,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Popup;