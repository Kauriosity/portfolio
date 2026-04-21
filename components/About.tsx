"use client";
import SectionWrapper from "./ui/SectionWrapper";

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="max-w-3xl">
        <p className="text-xs font-mono text-indigo-500 tracking-widest uppercase mb-4">
          01 // About
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
          Building toward <span className="text-indigo-500">scalable systems</span>
        </h2>
        
        <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
          <p>
            I am a Computer Science student at{" "}
            <span className="text-white font-medium">Bennett University</span>{" "}
            (CGPA: <span className="text-white font-medium">8.47</span>) with a strong foundation in 
            Data Structures and Algorithms and a dedicated focus on MERN stack development.
          </p>
          
          <p>
            My experience lies in building full-stack applications using React.js, Node.js, Express.js, and SQL. 
            I have hands-on experience in architecting RESTful APIs and database-driven systems that emphasize 
            performance and modularity.
          </p>
          
          <p>
            Currently, I'm developing scalable platforms including a healthcare system and recommendation 
            engines, always prioritizing clean code and optimization.
          </p>
        </div>

        <div className="mt-12 flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 w-fit">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm font-medium text-gray-300">
            Open for internships & full-time offers
          </span>
        </div>
      </div>
    </SectionWrapper>
  );
}
