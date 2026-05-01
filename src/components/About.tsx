import SectionWrapper from '@/components/ui/SectionWrapper';

const stats = [
  { value: '2',   label: 'Projects Built'  },
  { value: '10+', label: 'Technologies'    },
  { value: '1',   label: 'Internship'      },
];

export default function About() {
  return (
    <SectionWrapper id="about" className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <p className="text-xs font-semibold tracking-widest text-indigo-400 uppercase mb-4">
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6 leading-tight">
            Code that <br />
            <span
              style={{
                background: 'linear-gradient(135deg,#6366f1,#818cf8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              solves problems.
            </span>
          </h2>
          <p className="text-gray-400 leading-relaxed text-base md:text-lg">
            Computer Science student with strong foundations in Data Structures and Algorithms
            and a focus on full-stack development using MERN and Django. Experienced in building
            scalable backend systems, RESTful APIs, and database-driven applications. Focused on
            writing clean, modular code and solving real-world problems through efficient system design.
          </p>
        </div>

        {/* Right – Stats */}
        <div className="flex flex-col gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-5 rounded-2xl border border-white/[0.07] bg-white/[0.03] px-7 py-6 hover:border-indigo-500/30 hover:bg-white/[0.05] transition-all duration-300"
            >
              <span className="text-4xl md:text-5xl font-black text-indigo-400 min-w-[4rem]">
                {s.value}
              </span>
              <span className="text-base font-medium text-gray-300">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
