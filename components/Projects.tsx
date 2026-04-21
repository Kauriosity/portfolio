"use client";
import { useState, useEffect } from "react";
import { IconX, IconGithub } from "./Icons";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  github: string;
  highlights: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Swasthini – Women Healthcare Platform",
    description:
      "Cycle tracking, symptom logging, appointment system, and real-time insights dashboard.",
    longDescription:
      "Swasthini is a women's healthcare platform built to empower users with health visibility. Features include menstrual cycle tracking, symptom logging, ovulation prediction, doctor appointment booking, and an analytics dashboard to surface health trends over time.",
    tech: ["Next.js", "Express.js", "PostgreSQL"],
    github: "https://github.com/Kauriosity",
    highlights: [
      "Backend APIs with structured data handling",
      "Cycle tracking and symptom logging system",
      "Doctor appointment booking",
      "Real-time insights dashboard",
    ],
  },
  {
    id: 2,
    title: "Campus Connect",
    description:
      "College recommendation system with dynamic filtering and personalised suggestions.",
    longDescription:
      "Campus Connect helps students make informed higher-education decisions. The platform takes academic scores, entrance exam performance, and personal interests as inputs, then dynamically filters and ranks colleges using an API-based architecture.",
    tech: ["React.js", "Django"],
    github: "https://github.com/Kauriosity",
    highlights: [
      "Dynamic filtering and personalised suggestions",
      "API-based recommendation architecture",
      "Academic and interest-based matching",
      "Side-by-side college comparison",
    ],
  },
];

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(10px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-xl p-8 shadow-2xl border border-white/[0.08]"
        style={{ background: "#0c0c10" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg hover:bg-white/8 text-[#52525b] hover:text-white transition-colors"
          aria-label="Close"
        >
          <IconX size={18} />
        </button>

        <h3 className="text-xl font-semibold text-white mb-3 pr-8 leading-snug">
          {project.title}
        </h3>
        <p className="text-sm text-[#71717a] leading-relaxed mb-6">
          {project.longDescription}
        </p>

        <p className="text-xs font-mono text-[#6366f1] tracking-widest uppercase mb-3">
          Highlights
        </p>
        <ul className="mb-6 space-y-2">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-start gap-3 text-sm text-[#a1a1aa]">
              <span className="mt-[7px] w-1 h-1 rounded-full bg-[#6366f1] flex-shrink-0" />
              {h}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2.5 py-1 rounded-md bg-white/[0.04] text-[#a1a1aa] border border-white/[0.06]"
            >
              {t}
            </span>
          ))}
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-[#a1a1aa] border border-white/[0.08] rounded-lg px-4 py-2 hover:text-white hover:border-white/[0.18] transition-all duration-200"
        >
          <IconGithub size={14} />
          Source Code
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="text-xs font-mono text-[#6366f1] tracking-widest uppercase mb-4">
          Projects
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-12">
          Featured Work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl">
          {projects.map((project) => (
            <button
              key={project.id}
              id={`project-card-${project.id}`}
              onClick={() => setSelected(project)}
              className="text-left border border-white/[0.07] rounded-xl p-6 bg-white/[0.02] hover:border-white/[0.14] hover:bg-white/[0.04] transition-all duration-200 group cursor-pointer"
            >
              <h3 className="text-white font-semibold text-base mb-2 group-hover:text-white/90 leading-snug">
                {project.title}
              </h3>
              <p className="text-sm text-[#71717a] leading-relaxed mb-5">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-md bg-white/[0.04] text-[#52525b] border border-white/[0.05]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
