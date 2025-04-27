import React from "react";

/**
 * A customizable button component supporting different variants, sizes, and loading states.
 * 
 * @param {Object} props - The properties for the Button component.
 * @param {string} [props.variant="primary"] - The variant of the button (e.g., "primary", "secondary", "outline", "ghost", "danger").
 * @param {string} [props.size="md"] - The size of the button ("sm", "md", "lg").
 * @param {string} [props.bgColor] - Custom background color for the button.
 * @param {string} [props.textColor] - Custom text color for the button.
 * @param {React.ReactNode} [props.icon] - Icon to be displayed inside the button.
 * @param {React.ReactNode} props.children - The content inside the button (usually text).
 * @param {function} [props.onClick] - Callback function to be triggered when the button is clicked.
 * @param {boolean} [props.disabled=false] - Indicates whether the button is disabled.
 * @param {boolean} [props.isLoading=false] - Indicates whether the button is in a loading state.
 * @param {string} [props.className=""] - Custom CSS class to be applied to the button.
 * @param {string} [props.radius] - Custom border radius for the button.
 * 
 * @returns {JSX.Element} The rendered Button component.
 */
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

export default Button;
