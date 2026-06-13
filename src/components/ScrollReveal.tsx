"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "left" | "right" | "down";
  delay?: number;
  className?: string;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
  once = true,
}: ScrollRevealProps) {
  const getVariants = () => {
    switch (direction) {
      case "up":
        return { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 } };
      case "down":
        return { initial: { opacity: 0, y: -50 }, animate: { opacity: 1, y: 0 } };
      case "left":
        return { initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 } };
      case "right":
        return { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 } };
      default:
        return { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 } };
    }
  };

  const variants = getVariants();

  return (
    <motion.div
      initial={variants.initial}
      whileInView={variants.animate}
      viewport={{ once, margin: "-80px" }}
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 120,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
