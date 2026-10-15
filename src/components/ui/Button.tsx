import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary-gold" | "primary-green" | "outline-green" | "outline-light" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary-gold",
  size = "md",
  children,
  icon,
  iconPosition = "right",
  className = "",
  ...props
}) => {
  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-xs sm:text-sm gap-2",
    lg: "px-7 py-3.5 text-sm sm:text-base gap-2.5"
  };

  const isLight = variant === "outline-light" || variant === "ghost";
  const buttonClass = isLight ? "btn-geometric-wipe-light" : "btn-geometric-wipe";

  return (
    <button
      className={`${buttonClass} ${sizeStyles[size]} rounded-none ${className}`}
      {...props}
    >
      {icon && iconPosition === "left" && <span className="btn-icon inline-block">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="btn-icon inline-block">{icon}</span>}
    </button>
  );
};

export default Button;
