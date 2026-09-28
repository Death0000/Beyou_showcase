import React, { useRef, useState, useEffect } from "react";
import { useAnimeCounter } from "@/hooks/useAnime";
import { cn } from "@/lib/utils";

interface AnimeCounterProps {
  target: number;
  start?: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  inViewTrigger?: boolean;
}

/**
 * AnimeCounter Component
 * High-precision animated number counter powered by Anime.js exponential easing.
 * Automatically triggers when scrolled into view.
 */
export function AnimeCounter({
  target,
  start = 0,
  suffix = "",
  prefix = "",
  duration = 1800,
  className,
  inViewTrigger = true,
}: AnimeCounterProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [isInView, setIsInView] = useState(!inViewTrigger);

  useEffect(() => {
    if (!inViewTrigger) return;

    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [inViewTrigger]);

  const count = useAnimeCounter({
    target,
    start,
    duration,
    active: isInView,
  });

  return (
    <span ref={containerRef} className={cn("inline-flex items-baseline tabular-nums", className)}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
