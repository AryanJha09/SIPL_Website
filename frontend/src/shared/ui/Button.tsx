import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/shared/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8931C4] disabled:pointer-events-none disabled:opacity-50";
    
    const variants = {
      primary: "bg-[#131313] text-white hover:bg-[#131313]/90",
      secondary: "bg-[#8931C4] text-white hover:bg-[#8931C4]/90",
      outline: "border border-[#D6D6D6] bg-transparent hover:bg-[#EDEDED] text-[#0A0C10]",
      ghost: "hover:bg-[#EDEDED] text-[#0A0C10]"
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
