import React from "react";

/**
 * A full-screen popup component with customizable styling
 * @param {Object} props
 * @param {Function} props.onClose - Callback function when popup is closed (by clicking outside)
 * @param {string} [props.padding="30px"] - Padding for the popup content
 * @param {string} [props.background="#111111"] - Background color of the popup content
 * @param {string} [props.color="#333333"] - Text color of the popup content
 * @param {React.ReactNode} props.children - Content to be displayed inside the popup
 */
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