"use client";
import { useState, FormEvent } from "react";
import { IconMail, IconGithub, IconLinkedin, IconSend, IconCheckCircle, IconAlertCircle, IconLoader } from "./Icons";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    
    // Simulate network request
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    }, 1500);
  };

  const inputBase: React.CSSProperties = {
    background: "var(--bg-secondary)",
    border: "1px solid var(--border)",
    color: "var(--text-primary)",
    borderRadius: "8px",
    width: "100%",
    padding: "10px 14px",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.2s",
    fontFamily: "inherit",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    marginBottom: "6px",
    color: "var(--text-muted)",
    fontSize: "0.7rem",
    fontFamily: "JetBrains Mono, monospace",
  };

  const socialLinks = [
    { href: "mailto:gurjotkaur110905@gmail.com", icon: <IconMail size={16} />, label: "gurjotkaur110905@gmail.com" },
    { href: "https://github.com/Kauriosity", icon: <IconGithub size={16} />, label: "github.com/Kauriosity", external: true },
    { href: "https://linkedin.com/in/kauriosity", icon: <IconLinkedin size={16} />, label: "linkedin.com/in/kauriosity", external: true },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <p className="section-subtitle">Contact</p>
        <h2 className="section-title">Get in touch</h2>
        <div className="divider w-full mb-12" />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left */}
          <div>
            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
              I&apos;m currently open to internship and full-time opportunities. Whether you have a project in mind,
              a question, or just want to say hi — my inbox is always open.
            </p>

            <div className="space-y-4">
              {socialLinks.map(({ href, icon, label, external }) => (
                <a
                  key={href}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 text-sm group"
                  style={{ color: "var(--text-secondary)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent-light)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-secondary)")}
                >
                  <div
                    className="p-2.5 rounded-lg transition-colors"
                    style={{ background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--accent-light)" }}
                  >
                    {icon}
                  </div>
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="card p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label style={labelStyle}>Name</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  style={inputBase}
                  onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                />
              </div>

              <div>
                <label style={labelStyle}>Email</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  style={inputBase}
                  onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                />
              </div>

              <div>
                <label style={labelStyle}>Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  style={{ ...inputBase, resize: "vertical" }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                />
              </div>

              {status === "success" && (
                <div className="flex items-center gap-2 text-sm" style={{ color: "#4ade80" }}>
                  <IconCheckCircle size={15} /> Message sent! I&apos;ll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-2 text-sm" style={{ color: "#f87171" }}>
                  <IconAlertCircle size={15} /> {errorMsg}
                </div>
              )}

              <button
                id="contact-submit"
                type="submit"
                disabled={status === "loading"}
                className="btn-primary w-full justify-center"
              >
                {status === "loading" ? (
                  <>
                    <span style={{ animation: "spin 1s linear infinite", display: "inline-flex" }}>
                      <IconLoader size={15} />
                    </span>
                    Sending...
                  </>
                ) : (
                  <>
                    <IconSend size={15} /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-20 pt-8" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          <p style={{ color: "var(--text-muted)", fontSize: "0.75rem", fontFamily: "JetBrains Mono, monospace" }}>
            © 2025 Gurjot Kaur · Built with Next.js
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: "0.75rem", fontFamily: "JetBrains Mono, monospace" }}>
            gurjot.dev
          </p>
        </div>
      </div>
    </section>
  );
}
