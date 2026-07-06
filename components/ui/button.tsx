import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "action" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-sans font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

  const variantStyles = {
    primary:
      "bg-ochre text-ink hover:bg-ochre-hover focus-visible:ring-ochre border border-ochre-hover/10 rounded-md shadow-sm",
    action:
      "bg-leaf text-paper-light hover:bg-leaf-hover focus-visible:ring-leaf border border-leaf-hover/10 rounded-md shadow-sm",
    ghost:
      "bg-transparent text-ink hover:bg-ink/5 focus-visible:ring-ink rounded-md",
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs font-mono tracking-wider uppercase",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3 text-base",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
