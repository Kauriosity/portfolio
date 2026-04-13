"use client";
import { IconBriefcase, IconCalendar } from "./Icons";

const responsibilities = [
  "Wrote complex SQL queries for data extraction, transformation, and reporting across multiple datasets.",
  "Used Python (Pandas, NumPy) for data preprocessing, cleaning, and task automation.",
  "Created interactive Power BI dashboards to visualise KPIs and business metrics for stakeholders.",
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <p className="section-subtitle">Experience</p>
        <h2 className="section-title">Where I&apos;ve worked</h2>
        <div className="divider w-full mb-12" />

        <div className="relative pl-6" style={{ borderLeft: "1px solid var(--border)" }}>
          <div
            className="absolute rounded-full"
            style={{ left: -5, top: 6, width: 10, height: 10, background: "var(--accent)", border: "2px solid var(--bg-primary)" }}
          />

          <div className="card p-6 ml-4">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg mt-0.5" style={{ background: "var(--accent-subtle)", color: "var(--accent-light)" }}>
                  <IconBriefcase size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-base" style={{ color: "var(--text-primary)" }}>Data Analyst Intern</h3>
                  <p className="text-sm" style={{ color: "var(--accent-light)" }}>Imarticus Learning</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 ml-11 sm:ml-0" style={{ color: "var(--text-muted)", fontSize: "0.75rem", fontFamily: "JetBrains Mono, monospace" }}>
                <IconCalendar size={13} />
                June 2025 – July 2025
              </div>
            </div>

            <ul className="space-y-2.5">
              {responsibilities.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "var(--text-secondary)" }}>
                  <span className="mt-2 rounded-full flex-shrink-0" style={{ width: 4, height: 4, minWidth: 4, minHeight: 4, background: "var(--accent)", display: "inline-block" }} />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-5">
              {["SQL", "Python", "Power BI", "Data Analytics"].map((skill) => (
                <span key={skill} className="tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
