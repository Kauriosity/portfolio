"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionWrapperProps {
  children: ReactNode;
  id: string;
  className?: string;
  maxWidth?: string;
}

export default function SectionWrapper({
  children,
  id,
  className = "",
  maxWidth = "max-w-7xl",
}: SectionWrapperProps) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`${maxWidth} mx-auto px-6 md:px-12`}
      >
        {children}
      </motion.div>
    </section>
  );
}
