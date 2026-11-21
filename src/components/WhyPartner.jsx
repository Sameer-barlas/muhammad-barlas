import Reveal from "./Reveal";

const valueProps = [
  {
    step: "01",
    title: "End-to-End Execution",
    description:
      "From database schema design and hardened REST APIs to high-performance React frontends, I take ownership of the entire development lifecycle.",
    tag: "Full-Stack Ownership",
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "AI & RAG Capabilities",
    description:
      "I integrate production-grade AI—including Retrieval-Augmented Generation, vector similarity search, and automated LLM workflows to give products an intelligent edge.",
    tag: "Next-Gen AI",
    icon: (
      <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Security & Sub-50ms Latency",
    description:
      "Disciplined defensive coding with role-based access control (RBAC), multi-layer input sanitization, JWT authentication, and optimized database indexing.",
    tag: "Hardened Security",
    icon: (
      <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Client-First Collaboration",
    description:
      "Transparent project tracking, regular milestone demonstrations, clean modular documentation, and zero-headache handovers for founders and teams.",
    tag: "Reliable Partner",
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
];

function WhyPartner() {
  return (
    <section id="why-hire" className="section-shell section-anchor">
      <div className="section-container">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <p className="eyebrow mx-auto">04 / Client Value</p>
            <h2 className="section-title mt-4">
              Why founders &amp; teams <br />
              <span className="gradient-text">partner with Muhammad.</span>
            </h2>
            <p className="section-lede mx-auto mt-4">
              Bridging academic computer science rigor from UET Lahore with practical, commercial-grade MERN and AI engineering.
            </p>
          </div>
        </Reveal>

        {/* 4 Value Pillars */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((item, index) => (
            <Reveal key={item.step} delay={index * 0.08}>
              <div className="glass-card p-6 h-full flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-400/40 transition-all duration-300">
                      {item.icon}
                    </div>
                    <span className="font-mono text-xs font-bold text-cyan-400">
                      {item.step}
                    </span>
                  </div>

                  <span className="inline-block mt-4 text-[10px] font-mono uppercase tracking-wider text-cyan-300 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-400/20">
                    {item.tag}
                  </span>

                  <h3 className="mt-2.5 font-display font-bold text-lg text-white group-hover:text-cyan-200 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-300/90 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-1 text-[11px] font-mono text-cyan-400">
                  <span>Guaranteed Standards</span>
                  <span>→</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Client Callout Banner */}
        <Reveal delay={0.2}>
          <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-indigo-950/40 to-purple-950/40 border border-cyan-500/30 backdrop-blur-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_50px_rgba(56,189,248,0.15)]">
            <div className="max-w-xl text-center md:text-left">
              <span className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider">
                <span className="beacon-dot" />
                Ready to accelerate your roadmap?
              </span>
              <h4 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Have a project or vision you need engineered?
              </h4>
              <p className="mt-2 text-sm text-slate-300">
                Let’s collaborate to build a scalable, high-converting web app or intelligent AI pipeline.
              </p>
            </div>
            <a
              href="#contact"
              className="btn-primary whitespace-nowrap px-8 py-3.5 shadow-[0_0_25px_rgba(56,189,248,0.5)]"
            >
              <span>Schedule a Chat</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default WhyPartner;
