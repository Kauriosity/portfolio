"use client";
import { IconGraduationCap, IconCode2, IconDatabase, IconCpu } from "./Icons";

const interests = [
  { icon: <IconCode2 size={18} />, title: "Full-Stack Development", desc: "Building end-to-end web applications with modern frameworks." },
  { icon: <IconDatabase size={18} />, title: "Backend & Scalable Systems", desc: "Designing robust APIs and data-driven backend architectures." },
  { icon: <IconCpu size={18} />, title: "DSA & Problem Solving", desc: "Competitive programming and algorithmic thinking." },
];

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <p className="section-subtitle">About Me</p>
        <h2 className="section-title">Who I am</h2>
        <div className="divider w-full mb-12" />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              I'm a Computer Science student at{" "}
              <span style={{ color: "var(--text-primary)" }} className="font-medium">Bennett University</span>{" "}
              specialising in Data Science. I love building products that are both technically sound and genuinely useful — from data models to polished UIs.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
              Outside of coursework, I explore backend systems, contribute to open-source projects, and solve DSA problems to keep my algorithmic instincts sharp.
            </p>

            <div className="card p-5">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg" style={{ background: "var(--accent-subtle)", color: "var(--accent-light)" }}>
                  <IconGraduationCap size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-0.5" style={{ color: "var(--text-primary)" }}>Bennett University</h3>
                  <p className="text-xs mb-1" style={{ color: "var(--text-secondary)" }}>B.Tech in Computer Science (Data Science)</p>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.75rem", fontFamily: "JetBrains Mono, monospace" }}>
                    2023 – 2027 &nbsp;·&nbsp; CGPA: 8.47
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {interests.map((item) => (
              <div key={item.title} className="card p-5 flex items-start gap-4 cursor-default">
                <div className="p-2.5 rounded-lg" style={{ background: "var(--accent-subtle)", color: "var(--accent-light)" }}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-medium text-sm mb-1" style={{ color: "var(--text-primary)" }}>{item.title}</h3>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
