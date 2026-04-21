"use client";

const skillGroups = [
  {
    category: "Languages",
    skills: ["C++", "Java"],
  },
  {
    category: "Core CS",
    skills: ["DSA", "OOP", "DBMS", "OS", "SOLID", "Design Patterns"],
  },
  {
    category: "Web",
    skills: ["JavaScript", "Next.js", "React.js", "Express.js", "Django"],
  },
  {
    category: "Database",
    skills: ["PostgreSQL", "MySQL"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Postman"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="text-xs font-mono text-[#6366f1] tracking-widest uppercase mb-4">
          Skills
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-12">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="border border-white/[0.07] rounded-xl p-6 bg-white/[0.02] hover:border-white/[0.12] transition-colors duration-200"
            >
              <p className="text-xs font-mono text-[#6366f1] tracking-wider uppercase mb-4">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1 rounded-md bg-white/[0.04] text-[#a1a1aa] border border-white/[0.05] hover:text-white hover:border-white/[0.12] transition-colors duration-150"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
