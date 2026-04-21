"use client";
import { IconGithub, IconLinkedin, IconMail } from "./Icons";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-[100svh] flex items-center">
      <div className="absolute inset-0 bg-[#050810]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-20">
        <div className="max-w-2xl">

          {/* Social icons */}
          <div className="flex items-center gap-5 mb-10">
            <a
              href="https://github.com/Kauriosity"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-[#52525b] hover:text-white transition-colors duration-200"
            >
              <IconGithub size={19} />
            </a>
            <a
              href="https://linkedin.com/in/kauriosity"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[#52525b] hover:text-white transition-colors duration-200"
            >
              <IconLinkedin size={19} />
            </a>
            <a
              href="mailto:gurjotkaur110905@gmail.com"
              aria-label="Email"
              className="text-[#52525b] hover:text-white transition-colors duration-200"
            >
              <IconMail size={19} />
            </a>
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-5">
            Gurjot Kaur
          </h1>

          {/* Title */}
          <p className="text-lg md:text-xl text-[#a1a1aa] font-mono mb-6">
            Software Engineer Aspirant
          </p>

          {/* Tagline */}
          <p className="text-sm md:text-base text-[#71717a] leading-relaxed max-w-lg mb-10">
            Computer Science student focused on building scalable systems with
            strong foundations in Data Structures, Algorithms, and core CS
            fundamentals.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              id="hero-view-work"
              onClick={() => scrollTo("projects")}
              className="px-5 py-2.5 text-sm font-medium text-white bg-white/8 border border-white/10 rounded-lg hover:bg-white/12 hover:border-white/20 transition-all duration-200"
            >
              View Work
            </button>
            <a
              id="hero-resume"
              href="/resume.pdf"
              download
              className="px-5 py-2.5 text-sm font-medium text-[#a1a1aa] border border-white/8 rounded-lg hover:bg-white/5 hover:text-white transition-all duration-200"
            >
              Resume ↓
            </a>
            <button
              id="hero-contact"
              onClick={() => scrollTo("contact")}
              className="px-5 py-2.5 text-sm font-medium text-[#52525b] hover:text-[#a1a1aa] transition-colors duration-200"
            >
              Contact →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
