import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variants = {
      primary:
        "bg-gradient-to-r from-royal-blue to-accent-blue text-white hover:shadow-[0_0_24px_rgba(37,99,235,0.5)] hover:brightness-110 font-semibold",
      secondary:
        "bg-charcoal-card text-white border border-charcoal-border hover:border-accent-blue/50 hover:bg-charcoal-hover",
      outline:
        "border-2 border-royal-blue text-royal-blue hover:bg-blue-soft hover:text-white",
      ghost:
        "text-white hover:text-accent-blue hover:bg-charcoal-hover/60",
    };
    const sizes = {
      sm: "h-9 px-4 text-sm rounded-lg",
      md: "h-11 px-6 text-base rounded-lg",
      lg: "h-14 px-8 text-lg font-semibold rounded-xl",
    };
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-royal-blue focus:ring-offset-2 focus:ring-offset-charcoal disabled:opacity-50 disabled:pointer-events-none font-medium",
          variants[variant], sizes[size], className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
export { Button };
