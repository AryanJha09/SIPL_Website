import { BaseProps } from "@/shared/types/common";
import { cn } from "@/shared/lib/utils";

interface SectionHeadingProps extends BaseProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({ className, title, subtitle, align = "center" }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" ? "mx-auto text-center" : "text-left", className)}>
      <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#0A0C10]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-6 text-lg md:text-xl text-[#4A5568] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
