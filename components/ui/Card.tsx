"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  hoverEffect?: boolean;
}

export default function Card({
  children,
  className = "",
  onClick,
  hoverEffect = true,
}: CardProps) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={hoverEffect ? { y: -4, backgroundColor: "rgba(255, 255, 255, 0.05)" } : {}}
      transition={{ duration: 0.2 }}
      className={`
        relative rounded-2xl border border-white/10 bg-white/[0.02] 
        p-6 md:p-8 overflow-hidden transition-colors
        ${onClick ? "cursor-pointer" : ""}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
