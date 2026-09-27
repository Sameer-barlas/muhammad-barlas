import Reveal from "./Reveal";

const projects = [
  { number: "01", title: "MERN E-Commerce Platform", description: "Full-featured commerce experience with product management, cart flows, secure payments, and an admin dashboard.", tags: ["React", "Node.js", "MongoDB", "Express"], tone: "project-tone--violet" },
  { number: "02", title: "Secure REST API Service", description: "Production-ready API architecture with JWT authentication, role-based access, rate limits, and input validation.", tags: ["Node.js", "Express", "JWT", "Security"], tone: "project-tone--cyan" },
  { number: "03", title: "Real-Time Chat Application", description: "A responsive messaging application with WebSockets, typing states, presence indicators, and read receipts.", tags: ["React", "Socket.io", "Node.js", "MongoDB"], tone: "project-tone--pink" },
  { number: "04", title: "Scalable System Design", description: "A system design exploration for high-traffic products using load balancing, caching, and database optimisation.", tags: ["System Design", "Redis", "Microservices"], tone: "project-tone--orange" },
];

function Projects() {
  return <section id="projects" className="section-shell section-anchor"><div className="section-aurora section-aurora--right" aria-hidden="true" /><div className="section-container">
    <Reveal><p className="eyebrow">03 / Selected work</p><div className="section-heading-row"><h2 className="section-title">Built to be <span className="gradient-text">useful.</span></h2><p>Concepts and builds that unite clear UX with maintainable engineering.</p></div></Reveal>
    <div className="project-grid mt-12">{projects.map((project, index) => <Reveal key={project.title} delay={index * 0.08}><article className={`project-card ${project.tone}`}><div className="project-visual"><span>{project.number}</span><div className="project-orb" /></div><div className="project-content"><div className="flex items-center justify-between gap-4"><p className="eyebrow !text-[10px]">Case study</p><span aria-hidden="true" className="project-arrow">↗</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a href="#contact" className="project-link">Discuss a similar build <span aria-hidden="true">→</span></a></div></article></Reveal>)}</div>
  </div></section>;
}

export default Projects;
