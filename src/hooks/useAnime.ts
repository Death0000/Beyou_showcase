import { useEffect, useRef, useState, useCallback } from "react";
import { animate, stagger, spring } from "animejs";

/**
 * Options for the magnetic cursor attraction hook
 */
export interface UseMagneticOptions {
  strength?: number; // How far the element moves toward the cursor (default: 0.35)
  bounce?: number; // Spring bounce factor (default: 0.25)
  duration?: number; // Animation duration in ms (default: 600)
  disabled?: boolean;
}

/**
 * useMagnetic Hook
 * Uses anime.js spring physics to attract an element toward the cursor on hover,
 * and snap back smoothly when the cursor leaves.
 */
export function useMagnetic<T extends HTMLElement = HTMLDivElement>(
  options: UseMagneticOptions = {}
) {
  const { strength = 0.35, bounce = 0.25, duration = 600, disabled = false } = options;
  const ref = useRef<T | null>(null);
  const animRef = useRef<any>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || disabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;

      if (animRef.current) animRef.current.cancel();

      animRef.current = animate(el, {
        translateX: deltaX,
        translateY: deltaY,
        duration: 350,
        ease: "outQuad",
      });
    };

    const handleMouseLeave = () => {
      if (animRef.current) animRef.current.cancel();

      animRef.current = animate(el, {
        translateX: 0,
        translateY: 0,
        duration,
        ease: spring({ bounce }),
      });
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
      if (animRef.current) animRef.current.cancel();
    };
  }, [strength, bounce, duration, disabled]);

  return ref;
}

/**
 * useAnimeCounter Hook
 * Animates a numeric counter from start (or 0) to target with exponential easing.
 */
export function useAnimeCounter({
  target,
  start = 0,
  duration = 1800,
  active = true,
}: {
  target: number;
  start?: number;
  duration?: number;
  active?: boolean;
}) {
  const [value, setValue] = useState(start);
  const animRef = useRef<any>(null);

  useEffect(() => {
    if (!active) return;

    const counterObj = { count: start };

    if (animRef.current) animRef.current.cancel();

    animRef.current = animate(counterObj, {
      count: target,
      duration,
      ease: "outExpo",
      onUpdate: () => {
        setValue(Math.round(counterObj.count));
      },
    });

    return () => {
      if (animRef.current) animRef.current.cancel();
    };
  }, [target, start, duration, active]);

  return value;
}

/**
 * use3DTilt Hook
 * Uses anime.js spring physics to tilt a card in 3D perspective based on pointer position.
 */
export function use3DTilt<T extends HTMLElement = HTMLDivElement>({
  maxTilt = 8,
  perspective = 1000,
  scale = 1.02,
  bounce = 0.2,
}: {
  maxTilt?: number;
  perspective?: number;
  scale?: number;
  bounce?: number;
} = {}) {
  const ref = useRef<T | null>(null);
  const animRef = useRef<any>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width; // 0 to 1
      const y = (e.clientY - rect.top) / rect.height; // 0 to 1

      const tiltX = (0.5 - y) * (maxTilt * 2);
      const tiltY = (x - 0.5) * (maxTilt * 2);

      if (animRef.current) animRef.current.cancel();

      animRef.current = animate(el, {
        rotateX: tiltX,
        rotateY: tiltY,
        scale,
        duration: 250,
        ease: "outQuad",
      });
    };

    const handleMouseLeave = () => {
      if (animRef.current) animRef.current.cancel();

      animRef.current = animate(el, {
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        duration: 650,
        ease: spring({ bounce }),
      });
    };

    el.style.transformStyle = "preserve-3d";
    el.style.perspective = `${perspective}px`;

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
      if (animRef.current) animRef.current.cancel();
    };
  }, [maxTilt, perspective, scale, bounce]);

  return ref;
}

/**
 * useStaggerEntrance Hook
 * Orchestrates a staggered entrance for matching child elements using anime.js stagger.
 */
export function useStaggerEntrance<T extends HTMLElement = HTMLDivElement>({
  selector,
  delay = 50,
  staggerMs = 80,
  translateY = 24,
  duration = 750,
  active = true,
}: {
  selector: string;
  delay?: number;
  staggerMs?: number;
  translateY?: number;
  duration?: number;
  active?: boolean;
}) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !active) return;

    const targets = el.querySelectorAll(selector);
    if (!targets.length) return;

    const anim = animate(targets, {
      opacity: [0, 1],
      translateY: [translateY, 0],
      duration,
      ease: "outExpo",
      delay: stagger(staggerMs, { start: delay }),
    });

    return () => {
      anim.cancel();
    };
  }, [selector, delay, staggerMs, translateY, duration, active]);

  return ref;
}
