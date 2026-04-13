"use client";
import { useState, useEffect } from "react";
import { IconMenu, IconX } from "./Icons";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = navLinks.map((l) => l.href.slice(1));
      for (const id of [...sections].reverse()) {
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
        background: scrolled ? "rgba(10,10,15,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ color: "var(--accent-light)", fontFamily: "JetBrains Mono, monospace", fontSize: "0.875rem", fontWeight: 500 }}
          className="hover:opacity-80 transition-opacity"
        >
          gurjot.dev
        </button>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const id = link.href.slice(1);
            return (
              <li key={id}>
                <button
                  onClick={() => handleLinkClick(link.href)}
                  className="relative px-4 py-2 text-sm rounded-md transition-colors duration-200"
                  style={{ color: active === id ? "var(--accent-light)" : "var(--text-secondary)" }}
                >
                  {link.label}
                  {active === id && (
                    <span
                      className="absolute bottom-1 left-0 right-0 mx-auto w-1 h-1 rounded-full"
                      style={{ background: "var(--accent)", display: "block", width: 4, height: 4, margin: "0 auto" }}
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        <button
          className="md:hidden p-2 rounded-lg"
          style={{ color: "var(--text-secondary)" }}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <IconX size={20} /> : <IconMenu size={20} />}
        </button>
      </nav>

      {menuOpen && (
        <div
          className="md:hidden px-6 pb-4"
          style={{ background: "rgba(10,10,15,0.97)", borderTop: "1px solid var(--border)" }}
        >
          {navLinks.map((link) => {
            const id = link.href.slice(1);
            return (
              <button
                key={id}
                onClick={() => handleLinkClick(link.href)}
                className="block w-full text-left py-3 text-sm border-b transition-colors"
                style={{
                  color: active === id ? "var(--accent-light)" : "var(--text-secondary)",
                  borderColor: "var(--border)",
                }}
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
