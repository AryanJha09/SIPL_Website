import { BaseProps } from "@/shared/types/common";
import { cn } from "@/shared/lib/utils";

interface BadgeProps extends BaseProps {
  variant?: "default" | "muted" | "white";
}

export function Badge({ className, children, variant = "default" }: BadgeProps) {
  const variants = {
    default: "bg-[#EDEDED] text-[#0A0C10]",
    muted: "bg-[#EDEDED]/50 text-[#4A5568]",
    white: "bg-white text-[#0A0C10] shadow-sm"
  };

  return (
    <div className={cn("inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium", variants[variant], className)}>
      {children}
    </div>
  );
}
