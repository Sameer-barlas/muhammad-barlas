function About() {
  const highlights = [
    {
      icon: "🎓",
      title: "Education",
      description: "Software Engineering at UET Lahore (5th Semester)",
    },
    {
      icon: "💻",
      title: "MERN Stack",
      description:
        "Building full-stack apps with MongoDB, Express, React & Node.js",
    },
    {
      icon: "🔐",
      title: "Cyber Expert",
      description:
        "Security-focused development & penetration testing knowledge",
    },
    {
      icon: "⚡",
      title: "REST APIs",
      description: "Designing clean, scalable RESTful API architectures",
    },
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Info */}
          <div>
            <div className="glass-card p-8 mb-8">
              <h3 className="text-2xl font-bold font-display mb-4">
                Software Engineer &{" "}
                <span className="gradient-text">Problem Solver</span>
              </h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                I'm a passionate software engineer currently pursuing my 5th
                semester at UET Lahore. I specialize in building modern web
                applications using the MERN stack, with a strong focus on
                security, performance, and scalability.
              </p>
              <p className="text-slate-400 leading-relaxed">
                As a cyber security enthusiast, I integrate security best
                practices into every layer of development — from secure API
                design to robust authentication systems.
              </p>
            </div>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-4">
                <div className="text-2xl mb-1">📍</div>
                <div className="text-sm font-medium">Location</div>
                <div className="text-sm text-slate-400">Lahore, Pakistan</div>
              </div>
              <div className="glass-card p-4">
                <div className="text-2xl mb-1">🎯</div>
                <div className="text-sm font-medium">Focus</div>
                <div className="text-sm text-slate-400">Scalable Systems</div>
              </div>
              <div className="glass-card p-4">
                <div className="text-2xl mb-1">💼</div>
                <div className="text-sm font-medium">Status</div>
                <div className="text-sm text-slate-400">Open to Work</div>
              </div>
              <div className="glass-card p-4">
                <div className="text-2xl mb-1">🚀</div>
                <div className="text-sm font-medium">Experience</div>
                <div className="text-sm text-slate-400">2+ Years</div>
              </div>
            </div>
          </div>

          {/* Right - Highlights */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass-card p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
