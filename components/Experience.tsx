"use client";
import SectionWrapper from "./ui/SectionWrapper";
import Card from "./ui/Card";

const bullets = [
  "Wrote SQL queries for data extraction, transformation, and reporting",
  "Used Python (Pandas, NumPy) for data preprocessing and cleaning",
  "Built Power BI dashboards to visualise KPIs for stakeholders",
];

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="mb-12">
        <p className="text-xs font-mono text-indigo-500 tracking-widest uppercase mb-4">
          04 // Experience
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Work Experience
        </h2>
      </div>

      <div className="max-w-3xl">
        <Card className="border-white/5 hover:border-indigo-500/30">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-8">
            <div>
              <h3 className="text-white font-bold text-xl mb-1">
                Data Analyst Intern
              </h3>
              <p className="text-indigo-400 font-medium">
                Imarticus Learning
              </p>
            </div>
            <span className="text-xs font-mono text-gray-500 bg-white/5 px-3 py-1 rounded-full border border-white/10">
              June 2025 – July 2025
            </span>
          </div>

          <ul className="space-y-4">
            {bullets.map((item) => (
              <li key={item} className="flex items-start gap-4 text-gray-400">
                <span className="mt-[10px] w-1.5 h-1.5 rounded-full bg-indigo-500/60 flex-shrink-0" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </SectionWrapper>
  );
}

