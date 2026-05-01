'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Badge from '@/components/ui/Badge';

const projects = [
  {
    title: 'Swasthini',
    subtitle: 'Women Healthcare Platform',
    description:
      'Full-stack healthcare platform enabling menstrual cycle tracking, symptom logging, and appointment scheduling through an interactive dashboard.',
    tech: ['Next.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Tailwind CSS'],
    highlights: [
      'Designed RESTful APIs for cycle tracking and symptom logging',
      'Implemented structured data handling and optimized queries',
      'Built scalable backend services with real-time data retrieval',
    ],
    accent: 'from-indigo-600/20 to-purple-600/10',
    border: 'hover:border-indigo-500/40',
  },
  {
    title: 'Campus Connect',
    subtitle: 'College Recommendation System',
    description:
      'Web-based recommendation system helping students identify suitable colleges based on academic scores and preferences.',
    tech: ['React.js', 'Django', 'Tailwind CSS'],
    highlights: [
      'Built recommendation logic using backend processing',
      'Developed dynamic filtering and responsive UI',
      'Implemented API-driven workflows for personalization',
    ],
    accent: 'from-violet-600/20 to-blue-600/10',
    border: 'hover:border-violet-500/40',
  },
];

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-xs font-semibold tracking-widest text-indigo-400 uppercase mb-3">
          Work
        </p>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
          Featured Projects
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            whileHover={{ scale: 1.015, y: -4 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className={`group relative flex flex-col rounded-2xl border border-white/[0.07] bg-white/[0.03] overflow-hidden transition-all duration-300 ${project.border}`}
          >
            {/* Gradient header strip */}
            <div className={`h-1.5 w-full bg-gradient-to-r ${project.accent.replace('/20', '').replace('/10', '')} from-indigo-500 to-purple-500`} />

            {/* Card glow on hover */}
            <div
              aria-hidden
              className={`pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${project.accent}`}
            />

            <div className="relative flex flex-col flex-1 p-7">
              {/* Title */}
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-xl font-bold text-white leading-tight">{project.title}</h3>
                  <p className="text-xs font-medium text-indigo-400 mt-0.5">{project.subtitle}</p>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-gray-600 group-hover:text-indigo-400 transition-colors mt-0.5 flex-shrink-0"
                />
              </div>

              {/* Description */}
              <p className="text-sm text-gray-400 leading-relaxed mb-5">{project.description}</p>

              {/* Highlights */}
              <ul className="flex flex-col gap-2 mb-6">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-sm text-gray-300">
                    <CheckCircle2 size={14} className="text-indigo-500 mt-0.5 flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t) => (
                  <Badge key={t} variant="accent">{t}</Badge>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
