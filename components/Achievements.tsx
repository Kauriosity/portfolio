"use client";

const achievements = [
  {
    title: "Top 150 — Smart India Hackathon",
    meta: "Hackathon · National",
    desc: "Ranked in the top 150 teams out of 600+ participating teams nationally.",
  },
  {
    title: "Placement Committee Member",
    meta: "Leadership · Campus",
    desc: "Assisted in coordinating campus recruitment drives and student preparation.",
  },
  {
    title: "PR & Outreach Head",
    meta: "Leadership · Communications",
    desc: "Led public relations and outreach initiatives, managing external partnerships.",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="text-xs font-mono text-[#6366f1] tracking-widest uppercase mb-4">
          Recognition
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-12">
          Achievements &amp; Roles
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((item) => (
            <div
              key={item.title}
              className="border border-white/[0.07] rounded-xl p-6 bg-white/[0.02] hover:border-white/[0.12] transition-colors duration-200"
            >
              <p className="text-xs font-mono text-[#52525b] tracking-wider uppercase mb-3">
                {item.meta}
              </p>
              <h3 className="text-white text-base font-semibold mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-[#71717a] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
