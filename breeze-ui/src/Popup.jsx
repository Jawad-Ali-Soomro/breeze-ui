import React from "react";
import PropTypes from "prop-types";

const Popup = ({
  onClose,
  padding = "30px",
  background = "#111111",
  color = "#333333",
  children,
}) => {
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fullscreen-popup"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        minHeight: "100vh",
        height: "100vh",
        zIndex: 10000,
        background: "rgba(0,0,0,.3)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClose}
    >
      <div
        className="popup-content"
        onClick={handleContentClick}
        style={{
          padding,
          background,
          color,
        }}
      >
        {children}
      </div>
    </div>
  );
};

Popup.propTypes = {
  onClose: PropTypes.func.isRequired,
  padding: PropTypes.string,
  background: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Popup;
