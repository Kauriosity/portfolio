"use client";
import { useState } from "react";

const skillCategories = [
  { category: "Languages", skills: ["C++", "Java", "Python", "JavaScript", "SQL"] },
  { category: "Frontend", skills: ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS"] },
  { category: "Backend", skills: ["Express.js", "Django", "REST APIs"] },
  { category: "Databases", skills: ["PostgreSQL", "SQL"] },
  { category: "Core CS", skills: ["DSA", "OOP", "DBMS", "OS", "SOLID Principles", "Design Patterns"] },
  { category: "Tools", skills: ["Git", "GitHub", "VS Code", "Power BI", "Google Colab"] },
];

function SkillTag({ skill }: { skill: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "JetBrains Mono, monospace",
        fontSize: "0.7rem",
        padding: "5px 10px",
        borderRadius: "6px",
        background: hovered ? "var(--accent-subtle-hover)" : "var(--accent-subtle)",
        color: hovered ? "var(--accent-light)" : "rgba(129,140,248,0.85)",
        border: `1px solid ${hovered ? "rgba(99,102,241,0.4)" : "rgba(99,102,241,0.15)"}`,
        transform: hovered ? "translateY(-1px)" : "none",
        transition: "all 0.2s ease",
        cursor: "default",
        display: "inline-block",
        userSelect: "none",
        margin: "3px",
      }}
    >
      {skill}
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <p className="section-subtitle">Skills</p>
        <h2 className="section-title">What I work with</h2>
        <div className="divider w-full mb-12" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {skillCategories.map((cat) => (
            <div key={cat.category} className="card p-6">
              <h3
                style={{
                  color: "var(--accent)",
                  fontSize: "0.7rem",
                  fontFamily: "JetBrains Mono, monospace",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  marginBottom: "14px",
                }}
              >
                {cat.category}
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", margin: "-3px" }}>
                {cat.skills.map((skill) => (
                  <SkillTag key={skill} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
