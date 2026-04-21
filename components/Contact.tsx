"use client";
import React from "react";
import SectionWrapper from "./ui/SectionWrapper";
import Card from "./ui/Card";
import { IconMail, IconGithub, IconLinkedin } from "./Icons";
import { BsTelephone } from "react-icons/bs";

const contactItems = [
  {
    id: "email",
    label: "Email",
    value: "gurjotkaur110905@gmail.com",
    href: "mailto:gurjotkaur110905@gmail.com",
    icon: <IconMail size={20} />,
  },
  {
    id: "phone",
    label: "Phone",
    value: "+91 8209502178",
    href: "tel:+918209502178",
    icon: <BsTelephone size={18} />,
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/Kauriosity",
    href: "https://github.com/Kauriosity",
    icon: <IconGithub size={20} />,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/kauriosity",
    href: "https://linkedin.com/in/kauriosity",
    icon: <IconLinkedin size={20} />,
  },
];

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="max-w-3xl">
        <p className="text-xs font-mono text-indigo-500 tracking-widest uppercase mb-4">
          05 // Reach Out
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Get in Touch
        </h2>
        <p className="text-gray-400 text-lg mb-12">
          I'm currently looking for new opportunities and collaborations. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contactItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="p-6 h-full flex items-center gap-5 group border-white/5 hover:border-indigo-500/30">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-indigo-400 group-hover:bg-indigo-500/10 transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium text-white group-hover:text-gray-200 transition-colors">
                    {item.value}
                  </p>
                </div>
              </Card>
            </a>
          ))}
        </div>

        <div className="mt-32 pt-8 border-t border-white/5">
          <p className="text-sm text-gray-500 font-mono">
            © 2025 Gurjot Kaur. Built with precision.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}