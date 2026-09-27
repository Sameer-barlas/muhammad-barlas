import Reveal from "./Reveal";

const skillCategories = [
  { label: "Frontend", index: "01", skills: [["React.js", 90], ["Tailwind CSS", 85], ["JavaScript (ES6+)", 90], ["Redux", 75]] },
  { label: "Backend", index: "02", skills: [["Node.js", 85], ["Express.js", 88], ["REST APIs", 90], ["Authentication", 80]] },
  { label: "Database & DevOps", index: "03", skills: [["MongoDB", 85], ["Mongoose", 80], ["Git & GitHub", 88], ["Docker", 70]] },
  { label: "Security & Architecture", index: "04", skills: [["Cyber Security", 78], ["JWT & OAuth", 82], ["System Design", 75], ["Scalable Architecture", 80]] },
];
const technologies = ["React", "Node.js", "MongoDB", "Express", "JavaScript", "REST APIs", "JWT", "Cyber Security", "System Design", "Tailwind", "Git", "Docker"];

function Skills() {
  return <section id="skills" className="section-shell section-anchor"><div className="section-container">
    <Reveal><p className="eyebrow">02 / Capabilities</p><h2 className="section-title">A practical <span className="gradient-text">toolkit.</span></h2><p className="section-lede">I enjoy working across the product surface—from refined interfaces to the services and infrastructure behind them.</p></Reveal>
    <div className="mt-12 grid gap-5 md:grid-cols-2">
      {skillCategories.map((category, index) => <Reveal key={category.label} delay={index * 0.08}><article className="premium-card skill-card"><div className="mb-8 flex items-start justify-between"><h3>{category.label}</h3><span className="feature-number">{category.index}</span></div>{category.skills.map(([name, level]) => <div key={name} className="skill-line"><div><span>{name}</span><span>{level}%</span></div><div className="skill-track"><span style={{ width: `${level}%` }} /></div></div>)}</article></Reveal>)}
    </div>
    <Reveal delay={0.16}><div className="tech-cloud">{technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></Reveal>
  </div></section>;
}

export default Skills;
