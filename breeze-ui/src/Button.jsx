import React from "react";
import PropTypes from "prop-types";


const Button = ({
  variant = "primary",
  size = "md",
  bgColor,
  textColor,
  icon,
  children,
  onClick,
  disabled = false,
  isLoading = false,
  className = "",
  radius
}) => {
  // Define button size styles
  const sizeStyles = {
    sm: { width: "100px", fontSize: "0.875rem" },
    md: { width: "150px", fontSize: "1rem" },
    lg: { width: "200px", fontSize: "1.125rem" },
  };

  // Define button variant styles
  const variantStyles = {
    primary: {
      backgroundColor: "black",
      color: "white",
      border: "none",
    },
    secondary: {
      backgroundColor: "#6b7280",
      color: "white",
      border: "none",
    },
    outline: {
      backgroundColor: "transparent",
      color: "black",
      border: "1px solid",
    },
    ghost: {
      backgroundColor: "transparent",
      color: "#374151",
      border: "none",
    },
    danger: {
      backgroundColor: "#ef4444",
      color: "white",
      border: "none",
    },
  };

  // Base styles common for all button variants
  const baseStyles = {
    borderRadius: radius,
    fontWeight: 500,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.7 : 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: '20px',
    gap: "0.5rem",
    transition: "all 0.2s ease",
  };

  // Merge all styles based on button properties
  const buttonStyles = {
    ...baseStyles,
    ...sizeStyles[size],
    ...variantStyles[variant],
    ...(bgColor && { backgroundColor: bgColor }),
    ...(textColor && { color: textColor }),
    height: size === 'lg' ? "50px" : "45px",
  };

  return (
    <button
      style={buttonStyles}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={className}
    >
      {isLoading ? (
        <span className="spinner">Loading...</span>
      ) : (
        <>
          {icon && <span className="icon">{icon}</span>}
          {children}
        </>
      )}
    </button>
  );
};



Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "outline", "ghost", "danger"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  icon: PropTypes.node,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  className: PropTypes.string,
  radius: PropTypes.string,
};


export default Button;
