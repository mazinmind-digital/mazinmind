import { type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type GraffitiTone = "primary" | "accent" | "electric" | "warning" | "neon";
type GraffitiSize = "sm" | "md" | "lg" | "xl" | "hero";

const toneStyles: Record<GraffitiTone, string> = {
  primary:
    "bg-gradient-primary border-primary/45 shadow-[0_0_30px_hsl(185_100%_55%_/_0.35)]",
  accent:
    "bg-gradient-accent border-accent/45 shadow-[0_0_30px_hsl(340_95%_65%_/_0.35)]",
  electric:
    "bg-gradient-electric border-electric/45 shadow-[0_0_30px_hsl(270_100%_70%_/_0.35)]",
  warning:
    "bg-gradient-accent border-warning/45 shadow-[0_0_30px_hsl(45_100%_55%_/_0.35)]",
  neon: "bg-gradient-neon border-neon/45 shadow-[0_0_30px_hsl(130_90%_55%_/_0.35)]",
};

const sizeStyles: Record<GraffitiSize, string> = {
  sm: "h-12 w-12 rounded-xl",
  md: "h-14 w-14 rounded-xl",
  lg: "h-16 w-16 rounded-2xl",
  xl: "h-20 w-20 rounded-2xl",
  hero: "h-24 w-24 rounded-3xl",
};

const iconSizeStyles: Record<GraffitiSize, string> = {
  sm: "h-5 w-5",
  md: "h-7 w-7",
  lg: "h-8 w-8",
  xl: "h-10 w-10",
  hero: "h-12 w-12",
};

type GraffitiIconProps = {
  icon?: LucideIcon;
  tone?: GraffitiTone;
  size?: GraffitiSize;
  className?: string;
  iconClassName?: string;
  children?: ReactNode;
};

export function GraffitiIcon({
  icon: Icon,
  tone = "primary",
  size = "lg",
  className,
  iconClassName,
  children,
}: GraffitiIconProps) {
  return (
    <span
      className={cn(
        "relative inline-flex items-center justify-center overflow-hidden border text-primary-foreground",
        "before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.38)_0,rgba(255,255,255,0)_55%)]",
        "after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_80%_75%,rgba(0,0,0,0.24)_0,rgba(0,0,0,0)_58%)]",
        toneStyles[tone],
        sizeStyles[size],
        className,
      )}
    >
      <span className="spray-texture absolute inset-0 opacity-30" />
      <span className="relative z-[1]">
        {Icon ? (
          <Icon className={cn(iconSizeStyles[size], iconClassName)} />
        ) : (
          children
        )}
      </span>
    </span>
  );
}
