"use client";
import { useState, useEffect } from "react";
import { IconMenu, IconX } from "./Icons";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sectionIds = navLinks.map((l) => l.href.slice(1));
      for (const id of [...sectionIds].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled 
          ? "py-3 bg-[#020617]/80 backdrop-blur-xl border-white/10" 
          : "py-5 bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <button
          id="navbar-logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-lg font-bold tracking-tight text-white group"
        >
          Gurjot<span className="text-indigo-500 group-hover:text-indigo-400 transition-colors">.</span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => {
            const id = link.href.slice(1);
            const isActive = active === id;
            return (
              <button
                key={id}
                id={`nav-${id}`}
                onClick={() => handleLinkClick(link.href)}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-widest rounded-full transition-all duration-300 ${
                  isActive 
                    ? "text-white bg-white/10" 
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          id="navbar-mobile-toggle"
          className="md:hidden text-gray-400 hover:text-white transition-colors p-2 rounded-lg bg-white/5"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <IconX size={20} /> : <IconMenu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-fill left-0 right-0 border-b border-white/10 bg-[#020617]/95 backdrop-blur-2xl px-6 py-8 space-y-2"
          >
            {navLinks.map((link) => {
              const id = link.href.slice(1);
              return (
                <button
                  key={id}
                  onClick={() => handleLinkClick(link.href)}
                  className={`block w-full text-left py-4 text-sm font-mono uppercase tracking-widest transition-colors ${
                    active === id ? "text-indigo-400" : "text-gray-400"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

