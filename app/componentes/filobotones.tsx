import React from "react";

export interface PhilosophyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "like";
  isActive?: boolean;
}

export function PhilosophyButton({
  variant = "primary",
  isActive = false,
  className = "",
  ...props
}: PhilosophyButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 backdrop-blur-sm";

  const variantStyles = {
    primary:
      "bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 hover:border-primary/50",
    secondary:
      "bg-transparent border border-border/30 text-foreground hover:bg-accent/5 hover:border-accent/50 hover:text-accent",
    accent:
      "bg-accent/10 border border-accent/30 text-accent hover:bg-accent/20 hover:border-accent/50",
    like: isActive
      ? "bg-red-50/50 dark:bg-red-950/20 border border-red-200 text-red-500"
      : "bg-transparent border border-border/30 text-foreground hover:bg-primary/5",
  };

  return (
    <button
      {...props}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {props.children}
    </button>
  );
}
