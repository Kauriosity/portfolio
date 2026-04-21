"use client";

const bullets = [
  "Wrote SQL queries for data extraction, transformation, and reporting",
  "Used Python (Pandas, NumPy) for data preprocessing and cleaning",
  "Built Power BI dashboards to visualise KPIs for stakeholders",
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="text-xs font-mono text-[#6366f1] tracking-widest uppercase mb-4">
          Experience
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-12">
          Work Experience
        </h2>

        <div className="max-w-2xl">
          <div className="border border-white/[0.07] rounded-xl p-7 bg-white/[0.02] hover:border-white/[0.12] transition-colors duration-200">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-5">
              <div>
                <h3 className="text-white font-semibold text-base">
                  Data Analyst Intern
                </h3>
                <p className="text-[#6366f1] text-sm mt-1">
                  Imarticus Learning
                </p>
              </div>
              <span className="text-xs font-mono text-[#52525b] whitespace-nowrap pt-0.5">
                June 2025 – July 2025
              </span>
            </div>

            <ul className="space-y-2.5">
              {bullets.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#71717a]">
                  <span className="mt-[7px] w-1 h-1 rounded-full bg-[#6366f1] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
