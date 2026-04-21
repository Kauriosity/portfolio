"use client";
import React from "react";
import SectionWrapper from "./ui/SectionWrapper";
import Card from "./ui/Card";
import {
  SiCplusplus,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiDjango,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import {
  IconCode2,
  IconDatabase,
  IconCpu,
  IconGraduationCap,
} from "./Icons";

interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface SkillGroup {
  category: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    icon: <IconCode2 size={16} />,
    skills: [
      { name: "C++", icon: <SiCplusplus size={16} /> },
      { name: "Java", icon: <FaJava size={16} /> },
      { name: "JavaScript", icon: <SiJavascript size={16} /> },
    ],
  },
  {
    category: "Core CS",
    icon: <IconCpu size={16} />,
    skills: [
      { name: "DSA", icon: null },
      { name: "OOP", icon: null },
      { name: "DBMS", icon: null },
      { name: "OS", icon: null },
      { name: "SOLID", icon: null },
      { name: "Design Patterns", icon: null },
    ],
  },
  {
    category: "Frontend",
    icon: <IconCode2 size={16} />,
    skills: [
      { name: "React.js", icon: <SiReact size={16} /> },
      { name: "Next.js", icon: <SiNextdotjs size={16} /> },
    ],
  },
  {
    category: "Backend",
    icon: <IconCode2 size={16} />,
    skills: [
      { name: "Express.js", icon: <SiExpress size={16} /> },
      { name: "Django", icon: <SiDjango size={16} /> },
    ],
  },
  {
    category: "Database",
    icon: <IconDatabase size={16} />,
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql size={16} /> },
      { name: "MySQL", icon: <SiMysql size={16} /> },
    ],
  },
  {
    category: "Tools",
    icon: <IconGraduationCap size={16} />,
    skills: [
      { name: "Git", icon: <SiGit size={16} /> },
      { name: "GitHub", icon: <SiGithub size={16} /> },
      { name: "Postman", icon: <SiPostman size={16} /> },
    ],
  },
];

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="mb-12">
        <p className="text-xs font-mono text-indigo-500 tracking-widest uppercase mb-4">
          06 // Expertise
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Technical Skills
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group) => (
          <Card key={group.category} className="border-white/5 hover:border-indigo-500/30">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-indigo-400">{group.icon}</span>
              <p className="text-xs font-mono text-gray-500 tracking-widest uppercase">
                {group.category}
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full bg-white/5 text-gray-400 border border-white/10 hover:text-white hover:border-indigo-500/40 hover:bg-indigo-500/10 transition-all duration-200"
                >
                  {skill.icon && (
                    <span className="text-gray-500 group-hover:text-indigo-400 transition-colors">
                      {skill.icon}
                    </span>
                  )}
                  {skill.name}
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}

