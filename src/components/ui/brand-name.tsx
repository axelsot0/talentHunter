import { cn } from "@/lib/utils";

interface BrandNameProps {
  size?: "sm" | "md" | "lg";
  highlight?: boolean;
  className?: string;
}

const sizes = {
  sm: "text-lg",
  md: "text-2xl",
  lg: "text-4xl md:text-5xl",
};

export function BrandName({ size = "md", highlight = true, className }: BrandNameProps) {
  return (
    <span className={cn("font-extrabold tracking-tight", sizes[size], className)}>
      <span className="text-teal">TALENTO</span>{" "}
      <span className={highlight ? "text-coral" : "text-teal"}>360</span>
    </span>
  );
}
