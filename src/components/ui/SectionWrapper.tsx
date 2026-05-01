'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

export default function SectionWrapper({
  children,
  className = '',
  id,
  delay = 0,
}: SectionWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id={id} ref={ref} className={`py-24 px-6 md:px-12 lg:px-24 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.65, ease: 'easeOut', delay }}
      >
        {children}
      </motion.div>
    </section>
  );
}
