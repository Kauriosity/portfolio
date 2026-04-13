"use client";
import { IconArrowDown, IconGithub, IconLinkedin, IconMail } from "./Icons";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center section-padding relative overflow-hidden"
    >
      {/* Subtle background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(99,102,241,0.05) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(99,102,241,0.04) 0%, transparent 50%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: 0.03,
        }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Status badge */}
        <div
          className="mb-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
          style={{
            border: "1px solid var(--border)",
            color: "var(--text-muted)",
            background: "var(--bg-card)",
            fontSize: "0.7rem",
            fontFamily: "JetBrains Mono, monospace",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-500" style={{ animation: "pulse 2s infinite" }} />
          Open to opportunities · CS Student @ Bennett University
        </div>

        <h1
          className="text-5xl md:text-7xl font-semibold tracking-tight mb-4 leading-none"
          style={{ color: "var(--text-primary)" }}
        >
          Gurjot
          <span style={{ color: "var(--accent-light)" }}> Kaur</span>
        </h1>

        <p
          className="text-base md:text-lg mb-6"
          style={{ color: "var(--accent)", fontFamily: "JetBrains Mono, monospace" }}
        >
          Full Stack Developer · DSA Enthusiast · CS Student
        </p>

        <p
          className="text-base md:text-lg max-w-2xl leading-relaxed mb-10"
          style={{ color: "var(--text-secondary)" }}
        >
          Computer Science student focused on building scalable full-stack web
          applications with strong foundations in Data Structures, Algorithms,
          and Core CS fundamentals.
        </p>

        <div className="flex flex-wrap gap-3 mb-16">
          <button onClick={() => scrollTo("projects")} className="btn-primary">
            View Projects <IconArrowDown size={15} />
          </button>
          <a href="/resume.pdf" download className="btn-secondary">
            Download Resume
          </a>
          <button onClick={() => scrollTo("contact")} className="btn-secondary">
            Contact Me
          </button>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-5">
          {[
            { href: "https://github.com/Kauriosity", icon: <IconGithub size={20} />, label: "GitHub" },
            { href: "https://linkedin.com/in/kauriosity", icon: <IconLinkedin size={20} />, label: "LinkedIn" },
            { href: "mailto:gurjotkaur110905@gmail.com", icon: <IconMail size={20} />, label: "Email" },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              style={{ color: "var(--text-muted)", transition: "color 0.2s" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-primary)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")}
            >
              {icon}
            </a>
          ))}
          <div className="h-px w-20 ml-1" style={{ background: "var(--border)" }} />
          <span style={{ color: "var(--text-muted)", fontSize: "0.75rem", fontFamily: "JetBrains Mono, monospace" }}>
            gurjotkaur110905@gmail.com
          </span>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-8 left-1/2 flex flex-col items-center gap-2"
        style={{ transform: "translateX(-50%)", color: "var(--text-muted)" }}
      >
        <span style={{ fontSize: "0.7rem", fontFamily: "JetBrains Mono, monospace" }}>scroll</span>
        <div className="w-px h-12" style={{ background: "linear-gradient(to bottom, transparent, var(--border))" }} />
      </div>
    </section>
  );
}
