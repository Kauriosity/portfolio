"use client";
import { useState } from "react";
import { IconX, IconGithub, IconArrowUpRight, IconExternalLink } from "./Icons";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  github: string;
  demo: string;
  highlights: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Swasthini – Women Healthcare Platform",
    description: "Full-stack women healthcare platform for menstrual cycle tracking, symptom logging, ovulation prediction, doctor appointment booking, and health analytics.",
    longDescription: "Swasthini is a comprehensive women's healthcare platform that empowers users to take charge of their health. It features menstrual cycle tracking with AI-powered predictions, symptom logging, ovulation prediction, doctor appointment booking with calendar integration, and an analytics dashboard to visualise health trends over time.",
    tech: ["Next.js", "Express.js", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/Kauriosity",
    demo: "#",
    highlights: ["Menstrual cycle & ovulation prediction", "Doctor appointment booking system", "Health analytics dashboard", "Symptom logging & history"],
  },
  {
    id: 2,
    title: "Campus Connect",
    description: "College recommendation platform suggesting colleges based on academic scores, entrance exams, and interests with dynamic filtering.",
    longDescription: "Campus Connect helps students make informed decisions about their higher education by providing personalised college recommendations. The platform takes academic scores, entrance exam performance, and personal interests as inputs and dynamically filters colleges, allowing students to compare options side by side.",
    tech: ["React.js", "Django", "Tailwind CSS"],
    github: "https://github.com/Kauriosity",
    demo: "#",
    highlights: ["Personalised college recommendations", "Dynamic multi-filter system", "Academic & interest-based matching", "Side-by-side comparison"],
  },
];

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-xl p-7 shadow-2xl"
        style={{ background: "var(--bg-card)", border: "1px solid var(--border-hover)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg transition-colors"
          style={{ color: "var(--text-muted)" }}
          aria-label="Close modal"
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-primary)")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")}
        >
          <IconX size={18} />
        </button>

        <h3 className="text-lg font-semibold mb-3 pr-8" style={{ color: "var(--text-primary)" }}>
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
          {project.longDescription}
        </p>

        <h4
          className="mb-3 uppercase tracking-widest"
          style={{ color: "var(--accent)", fontSize: "0.7rem", fontFamily: "JetBrains Mono, monospace" }}
        >
          Key Features
        </h4>
        <ul className="mb-6 space-y-1.5">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
              <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: "var(--accent)", display: "inline-block", minWidth: 4, minHeight: 4 }} />
              {h}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => <span key={t} className="tag">{t}</span>)}
        </div>

        <div className="flex gap-3">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <IconGithub size={15} /> GitHub
          </a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <IconExternalLink size={15} /> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <p className="section-subtitle">Projects</p>
        <h2 className="section-title">Things I&apos;ve built</h2>
        <div className="divider w-full mb-12" />

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelected(project)}
              className="card p-6 text-left group"
              style={{ transition: "transform 0.2s, border-color 0.2s, background 0.2s" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "translateY(-4px)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "translateY(0)")}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="px-2.5 py-1 rounded"
                  style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.75rem", background: "var(--accent-subtle)", color: "var(--accent-light)", border: "1px solid rgba(99,102,241,0.2)" }}
                >
                  0{project.id}
                </div>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "var(--accent-light)" }}>
                  <IconArrowUpRight size={16} />
                </span>
              </div>

              <h3 className="font-semibold text-base mb-2" style={{ color: "var(--text-primary)" }}>
                {project.title}
              </h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
            </button>
          ))}
        </div>

        <p className="text-center mt-8 text-sm" style={{ color: "var(--text-muted)" }}>
          Click a card to view details →
        </p>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
