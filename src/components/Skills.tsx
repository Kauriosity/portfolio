'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Badge from '@/components/ui/Badge';

const skillGroups = [
  {
    title: 'Languages',
    items: ['C++', 'Java'],
  },
  {
    title: 'Core CS',
    items: ['Data Structures', 'Algorithms', 'OOP', 'DBMS', 'Operating Systems', 'SOLID Principles', 'Design Patterns'],
  },
  {
    title: 'Web Development',
    items: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'Django', 'Tailwind CSS'],
  },
  {
    title: 'Database',
    items: ['PostgreSQL', 'MySQL'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'Postman'],
  },
];

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-xs font-semibold tracking-widest text-indigo-400 uppercase mb-3">
          Skills
        </p>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
          Tech Stack
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.title}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6 hover:border-indigo-500/30 hover:bg-white/[0.05] transition-colors duration-300"
          >
            <h3 className="text-sm font-bold tracking-widest text-indigo-400 uppercase mb-4">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge key={item} variant="default">
                  {item}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
