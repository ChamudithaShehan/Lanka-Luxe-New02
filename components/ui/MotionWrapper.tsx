"use client";

import React, { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface MotionFadeInProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  className?: string;
  once?: boolean;
}

export function MotionFadeIn({
  children,
  delay = 0,
  direction = "up",
  duration = 0.85,
  className = "",
  once = false,
  ...props
}: MotionFadeInProps) {
  const getInitial = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: 35 };
      case "down":
        return { opacity: 0, y: -35 };
      case "left":
        return { opacity: 0, x: 40 };
      case "right":
        return { opacity: 0, x: -40 };
      default:
        return { opacity: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount: 0.15 }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function MotionStaggerContainer({
  children,
  staggerDelay = 0.1,
  className = "",
  once = false,
}: {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
  once?: boolean;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.15 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function MotionStaggerItem({
  children,
  direction = "up",
  className = "",
}: {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}) {
  const getInitial = () => {
    switch (direction) {
      case "left":
        return { opacity: 0, x: 35 };
      case "right":
        return { opacity: 0, x: -35 };
      case "down":
        return { opacity: 0, y: -25 };
      default:
        return { opacity: 0, y: 25 };
    }
  };

  return (
    <motion.div
      variants={{
        hidden: getInitial(),
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration: 0.75,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
