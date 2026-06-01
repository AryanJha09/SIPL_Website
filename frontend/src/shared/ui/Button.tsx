import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/shared/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-[4px] font-heading font-semibold transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F9F8F3] disabled:pointer-events-none disabled:opacity-50";
    
    const variants = {
      primary: "border border-[#001B65] bg-[#001B65] text-white hover:border-[#D4AF37]",
      secondary: "border border-[#D4AF37] bg-transparent text-[#001B65] hover:bg-[#D4AF37]/10",
      outline: "border border-[#001B65]/18 bg-transparent text-[#001B65] hover:border-[#D4AF37]",
      ghost: "text-[#001B65] hover:bg-[#001B65]/5"
    };
    
    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-base",
      lg: "h-14 px-8 text-lg"
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
