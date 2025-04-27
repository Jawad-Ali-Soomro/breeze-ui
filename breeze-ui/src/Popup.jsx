import React from "react";

const Popup = ({
  onClose,
  padding = "30px",
  background = "#111111",
  color = "#333333",
  children,
}) => {
  // Safe handler for content clicks
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

export default Popup;
