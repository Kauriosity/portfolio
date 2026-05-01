'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
} as const;

const item = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
    >
      {/* Radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div
          className="w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background:
              'radial-gradient(circle, rgba(99,102,241,0.6) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      {/* Subtle grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black, transparent)',
        }}
      />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center text-center max-w-4xl"
      >
        {/* Eyebrow */}
        <motion.div variants={item} className="mb-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-indigo-300 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Full-Stack Developer
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-6"
        >
          <span className="block text-white">Gurjot</span>
          <span
            className="block"
            style={{
              background: 'linear-gradient(135deg, #6366f1 0%, #818cf8 50%, #a5b4fc 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Kaur
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={item}
          className="text-lg sm:text-xl md:text-2xl font-semibold text-white/90 mb-4 max-w-2xl"
        >
          Building Scalable Web Systems &amp; Data-Driven Applications
        </motion.p>

        {/* Sub-tagline */}
        <motion.p
          variants={item}
          className="text-sm sm:text-base text-gray-400 mb-10 max-w-xl leading-relaxed"
        >
          I design and develop high-performance web platforms with clean architecture,
          real-world impact, and strong backend systems.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4">
          <Button
            id="hero-cta-projects"
            variant="primary"
            onClick={() => scrollTo('#projects')}
          >
            View Projects
          </Button>
          <Button
            id="hero-cta-contact"
            variant="outline"
            onClick={() => scrollTo('#contact')}
          >
            Contact Me
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={item}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        >
          <span className="text-[10px] tracking-widest text-gray-600 uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
