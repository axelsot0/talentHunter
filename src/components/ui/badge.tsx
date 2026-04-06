import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "outline" | "teal" | "muted";

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-coral text-white",
  outline: "border border-coral text-coral",
  teal: "bg-teal text-white",
  muted: "bg-surface-muted text-text-secondary",
};

export function Badge({ variant = "default", children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
