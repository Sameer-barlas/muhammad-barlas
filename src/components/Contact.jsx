import { useState } from "react";
import Reveal from "./Reveal";

const projectTypes = [
  "Full-Stack Web App",
  "AI & RAG Integration",
  "REST API & Backend",
  "Custom Consultation",
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Full-Stack Web App",
    message: "",
  });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", projectType: "Full-Stack Web App", message: "" });
  };

  const updateField = (event) =>
    setFormData({ ...formData, [event.target.name]: event.target.value });

  const copyEmail = () => {
    navigator.clipboard?.writeText("muhammadbarlas@example.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="section-shell section-anchor pb-24">
      {/* Background ambient lighting */}
      <div className="ambient-glow ambient-glow--violet bottom-10 left-10 opacity-15" aria-hidden="true" />
      <div className="ambient-glow ambient-glow--cyan -bottom-20 right-10 opacity-15" aria-hidden="true" />

      <div className="section-container">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 pb-4 border-b border-white/10">
            <div>
              <p className="eyebrow">05 / Contact</p>
              <h2 className="section-title">
                Let’s make it <span className="gradient-text">happen.</span>
              </h2>
            </div>
            <p className="text-sm font-mono text-slate-400 max-w-xs">
              Whether you have an upcoming project, a potential role, or an AI concept to build.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left Column: Direct Outreach Card */}
          <Reveal delay={0.08} className="glass-card p-7 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="beacon-dot" />
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-300">
                  Open For Collaboration
                </span>
              </div>

              <h3 className="mt-4 font-display text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                Let’s build something that feels as good as it works.
              </h3>

              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                I’m open to freelance projects, collaborative product work, and full-time opportunities.
              </p>

              {/* Contact Details List */}
              <div className="mt-8 space-y-4">
                {/* Email Item */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-[10px] font-mono uppercase tracking-wider text-slate-400">
                        Email Address
                      </span>
                      <a
                        href="mailto:muhammadbarlas@example.com"
                        className="text-xs sm:text-sm font-semibold text-slate-100 hover:text-cyan-300 transition-colors"
                      >
                        muhammadbarlas@example.com
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={copyEmail}
                    className="px-3 py-1.5 rounded-lg text-[11px] font-mono bg-white/[0.05] hover:bg-cyan-500/20 hover:text-cyan-300 border border-white/10 text-slate-300 transition-colors"
                  >
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>

                {/* Location & Academic Base */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                    <span className="block text-[10px] font-mono uppercase tracking-wider text-slate-400">
                      Based in
                    </span>
                    <strong className="block text-xs sm:text-sm font-semibold text-white mt-0.5">
                      Lahore, Pakistan
                    </strong>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                    <span className="block text-[10px] font-mono uppercase tracking-wider text-slate-400">
                      Studying at
                    </span>
                    <strong className="block text-xs sm:text-sm font-semibold text-cyan-300 mt-0.5">
                      UET Lahore
                    </strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links & Trust Indicator */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-cyan-400/40 text-xs font-mono text-slate-300 hover:text-white transition-all flex items-center gap-2"
                >
                  <span>GitHub</span>
                  <span className="text-cyan-400">↗</span>
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-cyan-400/40 text-xs font-mono text-slate-300 hover:text-white transition-all flex items-center gap-2"
                >
                  <span>LinkedIn</span>
                  <span className="text-cyan-400">↗</span>
                </a>
              </div>

              <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Replies within ~12 hrs
              </span>
            </div>
          </Reveal>

          {/* Right Column: High-Converting Project Inquiry Form */}
          <Reveal delay={0.14} className="glass-card p-7 sm:p-10">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="font-display font-bold text-2xl text-white">
                  Message Prepared!
                </h4>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Thank you for reaching out. Your message is ready to send once your form endpoint is plugged in. You can also contact directly at <a href="mailto:muhammadbarlas@example.com" className="text-cyan-300 underline">muhammadbarlas@example.com</a>.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2 rounded-full text-xs font-mono bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Project Focus
                  </label>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {projectTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({ ...formData, projectType: type })}
                        className={`px-3 py-2 rounded-xl text-[11px] font-mono text-center transition-all ${
                          formData.projectType === type
                            ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/60 shadow-[0_0_15px_rgba(56,189,248,0.25)]"
                            : "bg-white/[0.03] text-slate-400 border border-white/10 hover:border-white/20 hover:text-white"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Your Name
                  </label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={updateField}
                    required
                    placeholder="John Doe"
                    className="w-full h-12 px-4 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={updateField}
                    required
                    placeholder="john@example.com"
                    className="w-full h-12 px-4 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    How Can I Help?
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={updateField}
                    required
                    rows="4"
                    placeholder="Tell me a little about the project scope, goals, and timeline..."
                    className="w-full p-4 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all text-sm resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary py-4 text-center justify-center font-display text-sm tracking-tight font-bold shadow-[0_0_30px_rgba(56,189,248,0.4)]"
                >
                  <span>Send Project Inquiry</span>
                  <span aria-hidden="true">↗</span>
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;
