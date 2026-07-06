import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
  variant?: "default" | "flat" | "organic";
}

export const Card: React.FC<CardProps> = ({
  children,
  hoverable = true,
  variant = "default",
  className = "",
  ...props
}) => {
  const baseStyles =
    "bg-paper-light text-ink overflow-hidden border border-ink/10 transition-all duration-300";

  const variantStyles = {
    default: "rounded-lg shadow-sm hover:shadow-md",
    flat: "rounded-none border-b-2 border-ink/20",
    organic: "rounded-organic shadow-sm hover:shadow-md",
  };

  const hoverStyles = hoverable ? "hover:-translate-y-1 hover:border-ink/20" : "";

  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className = "",
  ...props
}) => (
  <div className={`p-5 pb-3 ${className}`} {...props}>
    {children}
  </div>
);

export const CardBody: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className = "",
  ...props
}) => (
  <div className={`p-5 pt-0 flex-1 ${className}`} {...props}>
    {children}
  </div>
);

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className = "",
  ...props
}) => (
  <div
    className={`p-5 pt-4 border-t border-ink/5 flex items-center justify-between ${className}`}
    {...props}
  >
    {children}
  </div>
);
