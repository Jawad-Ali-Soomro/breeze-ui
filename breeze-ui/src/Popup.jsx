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
    <div onClick={() => onClose()} className="main-popup-container">
      <div
        className="main-popup-wrapper"
        onClick={(e) => e.stopPropagation()}
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
