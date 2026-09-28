import React from "react";
import { useMagnetic, type UseMagneticOptions } from "@/hooks/useAnime";
import { cn } from "@/lib/utils";

interface MagneticProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  strength?: number;
  bounce?: number;
  duration?: number;
  disabled?: boolean;
  className?: string;
  key?: React.Key;
}

/**
 * Magnetic Component
 * Wraps any interactive element (buttons, icons, badges) to give it a
 * physical, magnetic pull toward the mouse cursor with anime.js spring return.
 */
export function Magnetic({
  children,
  strength = 0.3,
  bounce = 0.28,
  duration = 600,
  disabled = false,
  className,
  ...props
}: MagneticProps) {
  const ref = useMagnetic<HTMLDivElement>({ strength, bounce, duration, disabled });

  return (
    <div
      ref={ref}
      className={cn("inline-block will-change-transform", className)}
      {...props}
    >
      {children}
    </div>
  );
}
