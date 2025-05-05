import React from "react";
import PropTypes from "prop-types";

const Card = ({
  title,
  content,
  icon,
  footer,
  image,
  variant = "primary",
  shadow = true,
  rounded = true,
}) => {
  const cardStyle = {
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    jusContent: "center",
    alignItems: "center",
    boxShadow: shadow ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none",
    borderRadius: rounded ? "8px" : "0",
    border: "1px solid",
  };

  const variantStyles = {
    primary: {
      backgroundColor: "#ffffff",
      borderColor: "#e5e7eb",
    },
    secondary: {
      backgroundColor: "#f9fafb",
      borderColor: "#e5e7eb",
    },
    accent: {
      backgroundColor: "#f5f3ff",
      borderColor: "#ddd6fe",
    },
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
    marginBottom: "16px",
    borderRadius: rounded ? "4px" : "0",
  };

  const iconStyle = {
    fontSize: "24px",
    marginBottom: "12px",
  };

  const titleStyle = {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "8px",
  };

  const contentStyle = {
    marginBottom: "16px",
    fontSize: "14px",
  };

  const footerStyle = {
    marginTop: "auto",
    paddingTop: "12px",
  };

  return (
    <div style={{ ...cardStyle, ...variantStyles[variant] }}>
      {image && (
        <img src={image} alt={title || "Card image"} style={imageStyle} />
      )}
      {icon && !image && <div style={iconStyle}>{icon}</div>}
      {title && <h3 style={titleStyle}>{title}</h3>}
      {content && <p style={contentStyle}>{content}</p>}
      {footer && <div style={footerStyle}>{footer}</div>}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  icon: PropTypes.node,
  footer: PropTypes.node,
  image: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "secondary", "accent"]),
  shadow: PropTypes.bool,
  rounded: PropTypes.bool,
};

export default Card;
