"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./ui/SectionWrapper";
import Card from "./ui/Card";
import Button from "./ui/Button";
import { IconGithub } from "./Icons";

interface Project {
  id: number;
  title: string;
  problem: string;
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
    problem: "Women lack accessible, centralized tools for tracking menstrual health and booking healthcare services.",
    description:
      "Full-stack healthcare platform with cycle prediction, symptom logging, appointment booking, and a real-time health insights dashboard.",
    longDescription:
      "Swasthini is a women's healthcare platform built to give users full visibility into their health. The system predicts upcoming menstrual cycles and ovulation windows using historical data, enables daily symptom logging, and powers a dashboard that surfaces trends and anomalies over time.",
    tech: ["Next.js", "Express.js", "PostgreSQL", "Prisma"],
    github: "https://github.com/Kauriosity",
    highlights: [
      "Menstrual cycle prediction using historical pattern analysis",
      "Dashboard with health trend insights and anomaly detection",
      "Integrated doctor appointment booking system",
      "Secure user authentication and health record persistence",
    ],
  },
  {
    id: 2,
    title: "Campus Connect",
    problem: "Students struggle to discover and compare colleges that match their academic profile and personal interests.",
    description:
      "College recommendation system with academic score-based dynamic filtering, interest matching, and side-by-side college comparison.",
    longDescription:
      "Campus Connect helps students make informed higher-education decisions by accepting academic scores and personal interests to dynamically filter and rank colleges with a side-by-side comparison view.",
    tech: ["React.js", "Django", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/Kauriosity",
    highlights: [
      "Dynamic filtering by score, stream, location, and entrance exam",
      "Personalized recommendation engine based on user interests",
      "Side-by-side college comparison tool for key metrics",
      "Clean API-based architecture for seamless data handling",
    ],
  },
];

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="mb-16">
        <p className="text-xs font-mono text-indigo-500 tracking-widest uppercase mb-4">
          02 // Selected Works
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Featured Projects
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl">
          A collection of full-stack platforms focused on solving real-world
          problems through data-driven architectures.
        </p>
      </div>

      <div className="space-y-12">
        {projects.map((project, index) => (
          <Card key={project.id} className="p-0 md:p-0 overflow-hidden group">
            <div className="flex flex-col md:flex-row">
              {/* Content Left */}
              <div className="flex-1 p-8 md:p-12">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-8">
                  <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">
                    Key Features
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-sm text-gray-400">
                        <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-indigo-500/40 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="primary" icon={<IconGithub size={16} />}>
                      View Project
                    </Button>
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" className="text-gray-400 hover:text-white">
                      Source Code
                    </Button>
                  </a>
                </div>
              </div>

              {/* Visual Placeholder Right */}
              <div className="w-full md:w-[40%] bg-white/5 border-l border-white/10 relative overflow-hidden hidden md:block">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-transparent to-transparent" />
                <div className="h-full w-full flex items-center justify-center text-white/5 font-bold text-9xl select-none">
                  0{index + 1}
                </div>
                <div className="absolute inset-0 flex items-center justify-center p-12">
                   <div className="w-full h-full rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl overflow-hidden">
                      <div className="h-6 w-full bg-white/10 flex items-center px-3 gap-1.5">
                         <div className="w-2 h-2 rounded-full bg-white/20" />
                         <div className="w-2 h-2 rounded-full bg-white/20" />
                         <div className="w-2 h-2 rounded-full bg-white/20" />
                      </div>
                      <div className="p-4 space-y-3">
                         <div className="h-4 w-3/4 rounded bg-white/10 animate-pulse" />
                         <div className="h-4 w-1/2 rounded bg-white/10 animate-pulse" />
                         <div className="grid grid-cols-2 gap-3 mt-8">
                            <div className="h-20 rounded bg-white/5" />
                            <div className="h-20 rounded bg-white/5" />
                         </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}

