"use client";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-2xl">
          <p className="text-xs font-mono text-[#6366f1] tracking-widest uppercase mb-4">
            About
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
            Building toward scalable systems
          </h2>
          <p className="text-[#a1a1aa] leading-relaxed text-base md:text-lg">
            Computer Science student at{" "}
            <span className="text-white">Bennett University</span> (CGPA:{" "}
            <span className="text-white">8.47</span>), focused on problem
            solving, backend systems, and scalable applications. Strong
            foundation in DSA, OOP, DBMS, and system design.
          </p>
          <div className="mt-8 flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-[#71717a]">
              Open for internships &amp; collaborations
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
