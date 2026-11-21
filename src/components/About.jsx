import Reveal from "./Reveal";

const highlights = [
  ["01", "Education", "Software Engineering at UET Lahore · 5th Semester."],
  ["02", "Full-Stack MERN", "Scalable web applications with React, Node.js, Express, and MongoDB."],
  ["03", "AI & RAG Systems", "Retrieval-Augmented Generation, vector search, embeddings, and intelligent LLM workflows."],
  ["04", "Secure REST APIs", "Resilient architectures with JWT authentication, role-based controls, and sub-50ms latency."],
];

function About() {
  return (
    <section id="about" className="section-shell section-anchor">
      <div className="section-aurora section-aurora--left" aria-hidden="true" />
      <div className="section-container">
        <Reveal>
          <p className="eyebrow">01 / About</p>
          <h2 className="section-title">
            Engineering with <span className="gradient-text">purpose.</span>
          </h2>
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-[1.08fr_.92fr] lg:gap-8">
          <Reveal delay={0.08} className="premium-card premium-card--large">
            <p className="text-sm font-medium text-cyan-200">The short version</p>
            <h3 className="mt-5 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              MERN Stack Developer &amp; AI Systems Engineer.
            </h3>
            <p className="card-copy mt-6">
              I’m a software engineer pursuing my 5th semester at UET Lahore. I specialize in building modern, high-performance MERN web applications integrated with cutting-edge AI engineering—including RAG (Retrieval-Augmented Generation) pipelines, semantic vector search, and agentic LLM workflows.
            </p>
            <p className="card-copy mt-4">
              My disciplined approach to cyber security and backend design informs every layer of my engineering—from resilient JWT/OAuth authentication flows to optimized RESTful endpoints built to handle scale.
            </p>
            <div className="about-facts mt-9">
              <div>
                <span>Based in</span>
                <strong>Lahore, Pakistan</strong>
              </div>
              <div>
                <span>Currently</span>
                <strong>Open to work</strong>
              </div>
              <div>
                <span>Focus</span>
                <strong>MERN &amp; AI Systems</strong>
              </div>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {highlights.map(([number, title, description], index) => (
              <Reveal key={title} delay={0.1 + index * 0.07}>
                <article className="premium-card feature-card">
                  <span className="feature-number">{number}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
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
