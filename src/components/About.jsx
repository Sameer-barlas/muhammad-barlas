import Reveal from "./Reveal";

const highlights = [
  {
    number: "01",
    title: "Education",
    description: "Software Engineering at UET Lahore · 5th Semester.",
    icon: (
      <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    badge: "Academic Foundation",
  },
  {
    number: "02",
    title: "Full-Stack MERN",
    description: "Scalable web applications with React, Node.js, Express, and MongoDB.",
    icon: (
      <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
    badge: "Production Apps",
  },
  {
    number: "03",
    title: "AI & RAG Systems",
    description: "Retrieval-Augmented Generation, vector search, embeddings, and intelligent LLM workflows.",
    icon: (
      <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    badge: "Next-Gen AI",
  },
  {
    number: "04",
    title: "Secure REST APIs",
    description: "Resilient architectures with JWT authentication, role-based controls, and sub-50ms latency.",
    icon: (
      <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    badge: "Hardened Security",
  },
];

function About() {
  return (
    <section id="about" className="section-shell section-anchor">
      {/* Background ambient aurora */}
      <div className="ambient-glow ambient-glow--violet -top-40 -left-40 opacity-15" aria-hidden="true" />

      <div className="section-container">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 pb-4 border-b border-white/10">
            <div>
              <p className="eyebrow">01 / About</p>
              <h2 className="section-title">
                Engineering with <span className="gradient-text">purpose.</span>
              </h2>
            </div>
            <p className="text-sm font-mono text-slate-400 max-w-xs">
              Architecting dependable modern systems from intuitive client interfaces to scalable data pipelines.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.12fr_0.88fr]">
          {/* Left Column: Dossier Card */}
          <Reveal delay={0.08} className="glass-card p-7 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  <p className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-300">
                    The short version
                  </p>
                </div>
                <span className="text-[11px] font-mono text-slate-400 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10">
                  UET Lahore
                </span>
              </div>

              <h3 className="mt-7 font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-snug">
                MERN Stack Developer &amp; AI Systems Engineer.
              </h3>

              <div className="mt-6 space-y-4 text-slate-300 text-base leading-relaxed">
                <p>
                  I’m a software engineer pursuing my 5th semester at <span className="text-white font-medium">UET Lahore</span>. I specialize in building modern, high-performance MERN web applications integrated with cutting-edge AI engineering—including <span className="text-cyan-300 font-medium">RAG (Retrieval-Augmented Generation) pipelines</span>, semantic vector search, and agentic LLM workflows.
                </p>
                <p>
                  My disciplined approach to cyber security and backend design informs every layer of my engineering—from resilient JWT/OAuth authentication flows to optimized RESTful endpoints built to handle scale.
                </p>
              </div>
            </div>

            {/* Quick Fact Grid */}
            <div className="mt-10 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                <span className="block text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  Based in
                </span>
                <strong className="block text-sm font-semibold text-slate-100 mt-1">
                  Lahore, Pakistan
                </strong>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                <span className="block text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  Currently
                </span>
                <strong className="block text-sm font-semibold text-emerald-400 mt-1 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                  Open to work
                </strong>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                <span className="block text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  Focus
                </span>
                <strong className="block text-sm font-semibold text-cyan-300 mt-1">
                  MERN &amp; AI Systems
                </strong>
              </div>
            </div>
          </Reveal>

          {/* Right Column: 4 Highlight Cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {highlights.map((item, index) => (
              <Reveal key={item.title} delay={0.12 + index * 0.08}>
                <article className="glass-card p-5 sm:p-6 group flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-400/40 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-xs font-semibold text-cyan-400">
                        {item.number}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-400 border border-white/10">
                        {item.badge}
                      </span>
                    </div>
                    <h4 className="mt-1 font-display font-bold text-base sm:text-lg text-white group-hover:text-cyan-200 transition-colors">
                      {item.title}
                    </h4>
                    <p className="mt-1.5 text-xs sm:text-sm text-slate-300/90 leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
