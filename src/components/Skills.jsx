import Reveal from "./Reveal";

const skillCategories = [
  {
    label: "AI Engineering & RAG Systems",
    index: "01",
    tagline: "Intelligent Workflows & Semantic Retrieval",
    accentColor: "from-cyan-500 to-blue-500",
    badgeBg: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
    icon: (
      <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    skills: [
      ["RAG Pipelines & Semantic Retrieval", 90],
      ["Vector DBs & Embeddings", 88],
      ["LangChain & AI Agent Workflows", 86],
      ["LLM Integration & Prompt Design", 92],
    ],
  },
  {
    label: "Frontend Engineering",
    index: "02",
    tagline: "High-Performance Interfaces & Micro-Interactions",
    accentColor: "from-indigo-500 to-purple-500",
    badgeBg: "bg-indigo-500/10 text-indigo-300 border-indigo-500/30",
    icon: (
      <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    skills: [
      ["React.js & Vite Ecosystem", 92],
      ["Tailwind CSS & Framer Motion", 90],
      ["JavaScript (ES6+) & Modern APIs", 90],
      ["Responsive UI & PWA Architecture", 88],
    ],
  },
  {
    label: "Backend & RESTful Services",
    index: "03",
    tagline: "Secure Architecture & Scalable Endpoints",
    accentColor: "from-blue-500 to-teal-500",
    badgeBg: "bg-blue-500/10 text-blue-300 border-blue-500/30",
    icon: (
      <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    skills: [
      ["Node.js & Express.js", 90],
      ["RESTful API Architecture", 92],
      ["JWT, OAuth & Role-Based Auth", 88],
      ["API Rate Limiting & Input Validation", 86],
    ],
  },
  {
    label: "Database, DevOps & Security",
    index: "04",
    tagline: "Resilient Storage, Containerization & Defense",
    accentColor: "from-emerald-500 to-cyan-500",
    badgeBg: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
    icon: (
      <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    skills: [
      ["MongoDB & Mongoose Modeling", 88],
      ["Vector Search Indexing", 85],
      ["Cyber Security & Defensive Coding", 82],
      ["Git, GitHub & Docker Containerization", 86],
    ],
  },
];

const technologies = [
  "RAG Systems",
  "AI Agents",
  "LangChain",
  "Vector Databases",
  "LLM APIs",
  "Semantic Search",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MERN Stack",
  "REST APIs",
  "JWT Security",
  "Tailwind CSS",
  "JavaScript (ES6+)",
  "PWA",
  "Git & GitHub",
  "Docker",
  "System Design",
];

function Skills() {
  return (
    <section id="skills" className="section-shell section-anchor">
      {/* Background ambient lighting */}
      <div className="ambient-glow ambient-glow--cyan -top-40 right-0 opacity-10" aria-hidden="true" />

      <div className="section-container">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 pb-4 border-b border-white/10">
            <div>
              <p className="eyebrow">02 / Capabilities</p>
              <h2 className="section-title">
                A practical <span className="gradient-text">toolkit.</span>
              </h2>
            </div>
            <p className="section-lede md:mt-0 max-w-md">
              From intelligent AI systems and RAG pipelines to responsive frontends, hardened REST APIs, and scalable distributed backends.
            </p>
          </div>
        </Reveal>

        {/* 4 Skill Cards Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <Reveal key={category.label} delay={index * 0.08}>
              <article className="glass-card p-6 sm:p-8 h-full flex flex-col justify-between group">
                <div>
                  {/* Category Header */}
                  <div className="flex items-start justify-between gap-4 pb-5 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center group-hover:scale-105 group-hover:border-cyan-400/40 transition-all duration-300">
                        {category.icon}
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-lg text-white group-hover:text-cyan-200 transition-colors">
                          {category.label}
                        </h3>
                        <p className="text-xs font-mono text-slate-400 mt-0.5">
                          {category.tagline}
                        </p>
                      </div>
                    </div>
                    <span className="font-mono text-xs font-bold text-cyan-400 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10">
                      {category.index}
                    </span>
                  </div>

                  {/* Individual Skills Progress Bars */}
                  <div className="mt-6 space-y-5">
                    {category.skills.map(([name, level]) => (
                      <div key={name} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-medium text-slate-200">{name}</span>
                          <span className="font-mono font-semibold text-cyan-300">{level}%</span>
                        </div>
                        <div className="relative h-2 w-full overflow-hidden rounded-full bg-white/[0.08] p-0.5">
                          <div
                            className={`h-full rounded-full bg-gradient-to-r ${category.accentColor} shadow-[0_0_12px_rgba(56,189,248,0.5)] transition-all duration-1000 ease-out`}
                            style={{ width: `${level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Domain Competency</span>
                  <span className="text-cyan-400 font-semibold">Production Ready</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Tech Cloud Pills */}
        <Reveal delay={0.16}>
          <div className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 backdrop-blur-xl">
            <div className="text-center mb-6">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-300">
                Verified Technology Stack
              </span>
              <h4 className="text-lg font-display font-bold text-white mt-1">
                Tools, frameworks &amp; architectures I use daily
              </h4>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-slate-300 bg-white/[0.04] border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:text-cyan-200 transition-all duration-200 transform hover:-translate-y-0.5 cursor-default"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Skills;
