"use client";
import { useState, useEffect } from "react";
import { IconMenu, IconX } from "./Icons";

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
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid transparent",
        background: scrolled ? "rgba(5,8,16,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-14 flex items-center justify-between">
        {/* Logo */}
        <button
          id="navbar-logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-sm font-medium text-white hover:text-white/70 transition-colors duration-200"
        >
          Gurjot Kaur
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const id = link.href.slice(1);
            const isActive = active === id;
            return (
              <button
                key={id}
                id={`nav-${id}`}
                onClick={() => handleLinkClick(link.href)}
                className="px-4 py-1.5 text-sm rounded-md transition-colors duration-200"
                style={{
                  color: isActive ? "#ffffff" : "#71717a",
                  background: isActive
                    ? "rgba(255,255,255,0.06)"
                    : "transparent",
                }}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          id="navbar-mobile-toggle"
          className="md:hidden text-[#71717a] hover:text-white transition-colors p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <IconX size={18} /> : <IconMenu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t px-6 py-4 space-y-1"
          style={{
            borderColor: "rgba(255,255,255,0.06)",
            background: "rgba(5,8,16,0.95)",
          }}
        >
          {navLinks.map((link) => {
            const id = link.href.slice(1);
            return (
              <button
                key={id}
                onClick={() => handleLinkClick(link.href)}
                className="block w-full text-left py-2.5 text-sm transition-colors duration-200"
                style={{ color: active === id ? "#ffffff" : "#71717a" }}
              >
                {link.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}
