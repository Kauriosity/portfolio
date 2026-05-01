import SectionWrapper from '@/components/ui/SectionWrapper';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Data Analyst Intern',
    company: 'Imarticus Learning',
    duration: 'June 2025 – July 2025',
    details: [
      'Wrote SQL queries for data extraction and analysis',
      'Performed data preprocessing using Python',
      'Built Power BI dashboards for visualization and insights',
    ],
  },
];

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-xs font-semibold tracking-widest text-indigo-400 uppercase mb-3">
          Experience
        </p>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
          Work History
        </h2>
      </div>

      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-5 top-0 bottom-0 w-px bg-white/[0.07]" />

        {experiences.map((exp, i) => (
          <div key={i} className="relative pl-14 pb-10 last:pb-0">
            {/* Dot */}
            <div className="absolute left-[15px] top-1.5 w-3 h-3 rounded-full bg-indigo-500 ring-4 ring-black flex items-center justify-center" />

            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-7 hover:border-indigo-500/30 hover:bg-white/[0.05] transition-all duration-300">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Briefcase size={13} className="text-indigo-400" />
                    <span className="text-sm font-medium text-indigo-400">{exp.company}</span>
                  </div>
                </div>
                <span className="text-xs font-medium text-gray-500 bg-white/5 rounded-full px-3 py-1.5 border border-white/[0.07]">
                  {exp.duration}
                </span>
              </div>

              <ul className="flex flex-col gap-2.5">
                {exp.details.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-sm text-gray-400">
                    <span className="mt-2 h-1 w-1 rounded-full bg-indigo-500 flex-shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
