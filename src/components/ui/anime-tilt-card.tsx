import React, { useRef, useState } from "react";
import { use3DTilt } from "@/hooks/useAnime";
import { cn } from "@/lib/utils";

interface AnimeTiltCardProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  maxTilt?: number;
  perspective?: number;
  scale?: number;
  glare?: boolean;
  className?: string;
  key?: React.Key;
}

/**
 * AnimeTiltCard Component
 * Wraps portfolio cards, testimonials, or research modules with physical
 * 3D tilt interaction powered by anime.js spring dynamics and a dynamic light glare.
 */
export function AnimeTiltCard({
  children,
  maxTilt = 6,
  perspective = 1000,
  scale = 1.015,
  glare = true,
  className,
  ...props
}: AnimeTiltCardProps) {
  const cardRef = use3DTilt<HTMLDivElement>({
    maxTilt,
    perspective,
    scale,
    bounce: 0.25,
  });

  const [glarePos, setGlarePos] = useState<{ x: number; y: number; opacity: number }>({
    x: 50,
    y: 50,
    opacity: 0,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!glare || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGlarePos({ x, y, opacity: 0.12 });
  };

  const handleMouseLeave = () => {
    if (!glare) return;
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative rounded-2xl will-change-transform transition-shadow duration-300",
        className
      )}
      {...props}
    >
      {/* Dynamic Glare Overlay */}
      {glare && (
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 z-20"
          style={{
            opacity: glarePos.opacity,
            background: `radial-gradient(circle 320px at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.25), transparent 70%)`,
          }}
        />
      )}
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
}
