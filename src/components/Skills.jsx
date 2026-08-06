const skillCategories = [
  {
    title: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "Redux", level: 75 },
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 88 },
      { name: "REST APIs", level: 90 },
      { name: "Authentication", level: 80 },
    ],
  },
  {
    title: "Database & DevOps",
    icon: "🗄️",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "Mongoose", level: 80 },
      { name: "Git & GitHub", level: 88 },
      { name: "Docker", level: 70 },
    ],
  },
  {
    title: "Security & Architecture",
    icon: "🔐",
    skills: [
      { name: "Cyber Security", level: 78 },
      { name: "JWT & OAuth", level: 82 },
      { name: "System Design", level: 75 },
      { name: "Scalable Architecture", level: 80 },
    ],
  },
];

function SkillBar({ name, level }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-slate-300">{name}</span>
        <span className="text-sm text-cyan-400">{level}%</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full transition-all duration-1000 hover:from-cyan-400 hover:to-indigo-500"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">
          My <span className="gradient-text">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass-card p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="text-3xl">{category.icon}</div>
                <h3 className="text-xl font-bold font-display">
                  {category.title}
                </h3>
              </div>
              {category.skills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Tech badges */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {[
            "React",
            "Node.js",
            "MongoDB",
            "Express",
            "JavaScript",
            "REST APIs",
            "JWT",
            "Cyber Security",
            "System Design",
            "Tailwind",
            "Git",
            "Docker",
          ].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300 hover:bg-gradient-to-r hover:from-indigo-500/20 hover:to-cyan-500/20 hover:border-indigo-400/40 transition-all cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
