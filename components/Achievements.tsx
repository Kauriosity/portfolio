"use client";
import { IconTrophy, IconUsers, IconMegaphone } from "./Icons";

const achievements = [
  {
    icon: <IconTrophy size={20} />,
    title: "Top 150 — Smart India Hackathon",
    desc: "Ranked in the top 150 teams out of 600+ participating teams nationally, building an impactful solution under time constraints.",
    badge: "Hackathon · National",
  },
  {
    icon: <IconUsers size={20} />,
    title: "Placement Committee Member",
    desc: "Active member of the university placement committee, assisting in coordinating campus recruitment drives and student preparation.",
    badge: "Leadership · Campus",
  },
  {
    icon: <IconMegaphone size={20} />,
    title: "PR & Outreach Head",
    desc: "Led public relations and outreach initiatives, managing communications, social presence, and external partnerships.",
    badge: "Leadership · Communications",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <p className="section-subtitle">Achievements</p>
        <h2 className="section-title">Recognition & Roles</h2>
        <div className="divider w-full mb-12" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((item) => (
            <div key={item.title} className="card p-6 group">
              <div className="flex items-start justify-between mb-4">
                <div
                  className="p-2.5 rounded-lg"
                  style={{ background: "var(--accent-subtle)", color: "var(--accent-light)" }}
                >
                  {item.icon}
                </div>
                <span
                  className="rounded"
                  style={{
                    fontSize: "0.65rem",
                    fontFamily: "JetBrains Mono, monospace",
                    padding: "4px 8px",
                    background: "rgba(99,102,241,0.06)",
                    color: "var(--text-muted)",
                    border: "1px solid var(--border)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.badge}
                </span>
              </div>

              <h3 className="font-semibold text-sm mb-2" style={{ color: "var(--text-primary)" }}>
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
