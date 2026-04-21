"use client";
import { IconMail, IconGithub, IconLinkedin } from "./Icons";

const links = [
  {
    id: "contact-email",
    label: "Email",
    href: "mailto:gurjotkaur110905@gmail.com",
    icon: <IconMail size={16} />,
  },
  {
    id: "contact-github",
    label: "GitHub",
    href: "https://github.com/Kauriosity",
    icon: <IconGithub size={16} />,
  },
  {
    id: "contact-linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/in/kauriosity",
    icon: <IconLinkedin size={16} />,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="text-xs font-mono text-[#6366f1] tracking-widest uppercase mb-4">
          Contact
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-10">
          Get in Touch
        </h2>

        <div className="flex flex-wrap gap-3">
          {links.map((link) => (
            <a
              key={link.id}
              id={link.id}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 text-sm font-medium text-[#a1a1aa] border border-white/[0.08] rounded-lg hover:text-white hover:border-white/[0.18] hover:bg-white/[0.04] transition-all duration-200"
            >
              {link.icon}
              {link.label}
            </a>
          ))}
        </div>

        <div className="mt-24 md:mt-32 pt-8 border-t border-white/[0.06]">
          <p className="text-sm text-[#3f3f46]">
            © 2025 Gurjot Kaur. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
