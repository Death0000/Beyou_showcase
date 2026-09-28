"use client";
import React from "react";
import { motion, useInView } from "framer-motion";

interface TimelineContentProps {
  as?: string;
  animationNum: number;
  timelineRef: React.RefObject<HTMLElement | null>;
  customVariants?: any;
  children?: React.ReactNode;
  [key: string]: any;
}

export const TimelineContent = React.forwardRef<any, TimelineContentProps>(
  ({ as = "div", animationNum, timelineRef, customVariants, children, ...props }, ref) => {
    const isInView = useInView(timelineRef, { once: true, amount: 0.1 });
    
    // Create the motion component dynamically based on the 'as' prop
    const Component = typeof as === "string" ? (motion as any)[as] || motion.div : motion.div;
    
    return (
      <Component
        ref={ref}
        variants={customVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        custom={animationNum}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

TimelineContent.displayName = "TimelineContent";
