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
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-7 py-3.5 text-base gap-2.5"
  };

  const variantStyles = {
    "primary-gold": "bg-[#C59B27] hover:bg-[#D4AF37] text-white shadow-sm hover:shadow focus:ring-[#C59B27]",
    "primary-green": "bg-[#0D3B2E] hover:bg-[#165342] text-white shadow-sm hover:shadow focus:ring-[#0D3B2E]",
    "outline-green": "border border-[#0D3B2E] text-[#0D3B2E] hover:bg-[#0D3B2E] hover:text-white focus:ring-[#0D3B2E]",
    "outline-light": "border border-white/40 text-white hover:bg-white hover:text-[#0D3B2E] focus:ring-white",
    "ghost": "text-[#0D3B2E] hover:bg-[#0D3B2E]/5 focus:ring-[#0D3B2E]"
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {icon && iconPosition === "left" && <span className="inline-block">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="inline-block">{icon}</span>}
    </button>
  );
};
