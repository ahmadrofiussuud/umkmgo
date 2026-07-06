import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "dark" | "outline" | "leaf";
  size?: "sm" | "md";
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "primary",
  size = "sm",
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center font-mono font-bold uppercase tracking-wider rounded-sm";

  const variantStyles = {
    primary: "bg-ochre/10 text-ochre border border-ochre/20",
    secondary: "bg-clay/10 text-clay border border-clay/20",
    leaf: "bg-leaf/10 text-leaf border border-leaf/20",
    dark: "bg-ink text-paper border border-ink",
    outline: "bg-transparent text-ink/70 border border-ink/20",
  };

  const sizeStyles = {
    sm: "px-2 py-0.5 text-[10px]",
    md: "px-3 py-1 text-xs",
  };

  return (
    <span
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};
