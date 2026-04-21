"use client";
import SectionWrapper from "./ui/SectionWrapper";
import Card from "./ui/Card";

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
    <SectionWrapper id="achievements">
      <div className="mb-12">
        <p className="text-xs font-mono text-indigo-500 tracking-widest uppercase mb-4">
          03 // Recognition
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Achievements & Roles
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((item) => (
          <Card key={item.title} className="h-full border-white/5 hover:border-indigo-500/30">
            <p className="text-[10px] font-mono text-indigo-400 tracking-wider uppercase mb-4">
              {item.meta}
            </p>
            <h3 className="text-white text-lg font-bold mb-3 leading-snug">
              {item.title}
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              {item.desc}
            </p>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}

