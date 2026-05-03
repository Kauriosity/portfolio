'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Badge from '@/components/ui/Badge';

const projects = [
  {
    title: 'AI-Powered Textile Waste Upcycling Designer',
    subtitle: 'Multimodal AI System',
    description:
      'A multimodal AI system that classifies textile fabrics and generates context-aware upcycling recommendations using deep learning and LLM integration.',
    tech: ['Python', 'PyTorch', 'ResNet18', 'LLM APIs', 'Streamlit'],
    highlights: [
      'Designed a modular end-to-end AI pipeline combining computer vision and LLM-based recommendation systems',
      'Trained a ResNet18 model on 5000+ images (27 classes) achieving 92% accuracy',
      'Integrated LLM APIs using prompt engineering for contextual recommendations',
      'Built backend workflows for inference and seamless API integration',
    ],
    accent: 'from-emerald-600/20 to-teal-600/10',
    border: 'hover:border-emerald-500/40',
    link: 'https://github.com/Kauriosity/AI-Powered-Textile-Waste-Upcycling-Designer',
    highlightCard: true,
  },
  {
    title: 'Swasthini – Women Healthcare Platform',
    subtitle: 'Full-Stack Application',
    description:
      'Full-stack healthcare platform enabling menstrual cycle tracking, symptom logging, and appointment scheduling through an interactive dashboard.',
    tech: ['Next.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Tailwind CSS'],
    highlights: [
      'Designed RESTful APIs for cycle tracking and symptom logging',
      'Implemented structured data handling and optimized database queries',
      'Built scalable backend services with real-time data retrieval',
    ],
    accent: 'from-indigo-600/20 to-purple-600/10',
    border: 'hover:border-indigo-500/40',
    link: 'https://github.com/Kauriosity/Swasthini-Women-Healthcare-Platform',
    highlightCard: false,
  },
  {
    title: 'Campus Connect',
    subtitle: 'College Recommendation System',
    description:
      'Web-based recommendation system to help students identify suitable colleges based on academic scores and preferences.',
    tech: ['React.js', 'Django', 'Tailwind CSS'],
    highlights: [
      'Built backend-driven recommendation logic for personalized results',
      'Developed dynamic filtering system and responsive UI',
      'Implemented API-based workflows for real-time recommendation generation',
    ],
    accent: 'from-violet-600/20 to-blue-600/10',
    border: 'hover:border-violet-500/40',
    link: 'https://github.com/Kauriosity/campus-connect',
    highlightCard: false,
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
        {projects.map((project, i) => {
          const isClickable = project.link && project.link !== '#';
          const CardContent = (
            <>
              {/* Gradient header strip */}
              <div
                className={`h-1.5 w-full bg-gradient-to-r ${project.accent
                  .replace('/20', '')
                  .replace('/10', '')} from-indigo-500 to-purple-500`}
              />

              {/* Card glow on hover */}
              <div
                aria-hidden
                className={`pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${project.accent}`}
              />

              <div className="relative flex flex-col flex-1 p-7">
                {/* Title */}
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-indigo-400 mt-1">
                      {project.subtitle}
                    </p>
                  </div>
                  {isClickable && (
                    <ArrowUpRight
                      size={20}
                      className="text-gray-600 group-hover:text-indigo-400 transition-colors mt-0.5 flex-shrink-0"
                    />
                  )}
                </div>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed mb-6 mt-2">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="flex flex-col gap-2.5 mb-8">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-sm text-gray-300">
                      <CheckCircle2
                        size={16}
                        className="text-indigo-500 mt-0.5 flex-shrink-0"
                      />
                      <span className="leading-snug">{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <Badge key={t} variant="accent">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            </>
          );

          const cardClasses = `group relative flex flex-col rounded-2xl border border-white/[0.07] bg-white/[0.03] overflow-hidden transition-all duration-300 ${project.border} ${
            project.highlightCard ? 'md:col-span-2' : ''
          }`;

          return isClickable ? (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={project.title}
              whileHover={{ scale: 1.015, y: -4 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className={cardClasses}
            >
              {CardContent}
            </motion.a>
          ) : (
            <motion.div
              key={project.title}
              whileHover={{ scale: 1.015, y: -4 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className={cardClasses}
            >
              {CardContent}
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
