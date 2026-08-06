const projects = [
  {
    title: "MERN E-Commerce Platform",
    description:
      "Full-featured e-commerce application with product management, cart, secure payments, and admin dashboard.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    icon: "🛒",
  },
  {
    title: "Secure REST API Service",
    description:
      "Production-ready RESTful API with JWT authentication, role-based access control, rate limiting, and input validation.",
    tags: ["Node.js", "Express", "JWT", "Security"],
    gradient: "from-cyan-500 via-teal-500 to-emerald-500",
    icon: "🔐",
  },
  {
    title: "Real-Time Chat Application",
    description:
      "Real-time messaging app with WebSockets, typing indicators, online presence, and read receipts.",
    tags: ["React", "Socket.io", "Node.js", "MongoDB"],
    gradient: "from-purple-500 via-fuchsia-500 to-rose-500",
    icon: "💬",
  },
  {
    title: "Scalable System Design",
    description:
      "Architecture design for high-traffic systems with load balancing, caching, and database optimization strategies.",
    tags: ["System Design", "Redis", "Microservices"],
    gradient: "from-amber-500 via-orange-500 to-red-500",
    icon: "🏗️",
  },
];

function Projects() {
  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card overflow-hidden group hover:-translate-y-2 transition-all duration-300"
            >
              {/* Gradient placeholder image */}
              <div
                className={`h-40 bg-gradient-to-br ${project.gradient} relative flex items-center justify-center`}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all" />
                <span className="text-6xl filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </span>
                <div className="absolute top-3 right-3 bg-black/40 backdrop-blur px-2 py-1 rounded-full text-xs">
                  {project.tags[0]}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-bold font-display text-lg mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <a
                    href="#"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium flex items-center gap-1"
                  >
                    View Project <span aria-hidden>→</span>
                  </a>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors font-medium"
                  >
                    GitHub{" "}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
