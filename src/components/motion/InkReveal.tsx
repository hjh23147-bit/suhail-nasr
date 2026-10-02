"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface InkRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function InkReveal({ children, delay = 0, className = "" }: InkRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
