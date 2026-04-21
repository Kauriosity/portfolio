"use client";
import { IconGithub, IconLinkedin, IconMail } from "./Icons";
import Button from "./ui/Button";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="hero" className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[#020617]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/5 blur-[100px] rounded-full -ml-32 -mb-32" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          {/* Social icons */}
          <motion.div variants={itemVariants} className="flex items-center gap-5 mb-10">
            <a
              href="https://github.com/Kauriosity"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-500 hover:text-white transition-colors duration-200"
            >
              <IconGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/kauriosity"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-500 hover:text-white transition-colors duration-200"
            >
              <IconLinkedin size={20} />
            </a>
            <a
              href="mailto:gurjotkaur110905@gmail.com"
              aria-label="Email"
              className="text-gray-500 hover:text-white transition-colors duration-200"
            >
              <IconMail size={20} />
            </a>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight text-white leading-[1.05] mb-6"
          >
            Gurjot Kaur
          </motion.h1>

          {/* Title */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-indigo-400 font-mono mb-8"
          >
            Software Engineer Aspirant
          </motion.p>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl mb-12"
          >
            Computer Science student focused on building scalable systems with
            strong foundations in Data Structures, Algorithms, and core CS
            fundamentals.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
            <Button
              id="hero-view-work"
              onClick={() => scrollTo("projects")}
              variant="primary"
            >
              View Work
            </Button>
            <a id="hero-resume" href="/resume.pdf" download>
              <Button variant="outline">
                Resume ↓
              </Button>
            </a>
            <Button
              id="hero-contact"
              onClick={() => scrollTo("contact")}
              variant="ghost"
              className="text-gray-400 hover:text-white"
            >
              Contact →
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

