import Reveal from "./Reveal";

const skillCategories = [
  {
    label: "AI Engineering & RAG Systems",
    index: "01",
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
      <div className="section-container">
        <Reveal>
          <p className="eyebrow">02 / Capabilities</p>
          <h2 className="section-title">
            A practical <span className="gradient-text">toolkit.</span>
          </h2>
          <p className="section-lede">
            From intelligent AI systems and RAG pipelines to responsive frontends, hardened REST APIs, and scalable distributed backends.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <Reveal key={category.label} delay={index * 0.08}>
              <article className="premium-card skill-card">
                <div className="mb-8 flex items-start justify-between">
                  <div>
                    <h3>{category.label}</h3>
                    <span className="text-[11px] font-mono text-cyan-400/80">Domain Competency</span>
                  </div>
                  <span className="feature-number">{category.index}</span>
                </div>
                {category.skills.map(([name, level]) => (
                  <div key={name} className="skill-line">
                    <div>
                      <span>{name}</span>
                      <span>{level}%</span>
                    </div>
                    <div className="skill-track">
                      <span style={{ width: `${level}%` }} />
                    </div>
                  </div>
                ))}
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.16}>
          <div className="tech-cloud">
            {technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Skills;
