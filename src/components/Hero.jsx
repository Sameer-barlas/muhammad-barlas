import { useState, useEffect } from "react";

const roles = [
  "MERN Stack Developer",
  "Cyber Security Expert",
  "REST API Designer",
  "Scalable System Architect",
];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!deleting && text.length < currentRole.length) {
      timeout = setTimeout(() => {
        setText(currentRole.slice(0, text.length + 1));
      }, 100);
    } else if (!deleting && text.length === currentRole.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => {
        setText(currentRole.slice(0, text.length - 1));
      }, 50);
    } else {
      setDeleting(false);
      setRoleIndex((roleIndex + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute top-20 -left-20 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl animate-blob" />
      <div
        className="absolute bottom-20 -right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-blob"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-blob"
        style={{ animationDelay: "4s" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left - Text Content */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-slate-300">Available for work</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display mb-4 leading-tight">
            Hi, I'm{" "}
            <span className="gradient-text animate-gradient bg-[length:200%_200%]">
              Muhammad Barlas
            </span>
          </h1>

          <div className="text-xl sm:text-2xl text-slate-300 mb-6 h-8">
            <span className="text-cyan-400">{"<"}</span>
            <span className="text-white">{text}</span>
            <span className="text-cyan-400">{" />"}</span>
            <span className="inline-block w-0.5 h-6 bg-cyan-400 ml-1 animate-pulse align-middle" />
          </div>

          <p className="text-slate-400 mb-8 max-w-lg mx-auto lg:mx-0">
            Software Engineer at UET Lahore (5th Semester) crafting modern web
            applications with the MERN stack, secure systems, and scalable
            architectures.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-outline">
              Get In Touch
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-12 justify-center lg:justify-start">
            <div>
              <div className="text-3xl font-bold gradient-text">5+</div>
              <div className="text-sm text-slate-400">Projects</div>
            </div>
            <div className="w-px bg-white/10" />
            <div>
              <div className="text-3xl font-bold gradient-text">3+</div>
              <div className="text-sm text-slate-400">Technologies</div>
            </div>
            <div className="w-px bg-white/10" />
            <div>
              <div className="text-3xl font-bold gradient-text">100%</div>
              <div className="text-sm text-slate-400">Dedication</div>
            </div>
          </div>
        </div>

        {/* Right - Profile Image Placeholder */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative animate-float">
            {/* Glow ring */}
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full opacity-30 blur-2xl animate-glow" />

            {/* Profile circle */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 p-1">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <div className="text-6xl sm:text-7xl font-bold gradient-text mb-2">
                    MB
                  </div>
                  <div className="text-sm text-slate-400">Muhammad Barlas</div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div
              className="absolute -top-4 -right-4 glass-card px-4 py-2 text-sm font-medium animate-float"
              style={{ animationDelay: "1s" }}
            >
              🚀 MERN Stack
            </div>
            <div
              className="absolute -bottom-4 -left-4 glass-card px-4 py-2 text-sm font-medium animate-float"
              style={{ animationDelay: "2s" }}
            >
              🔐 Cyber Expert
            </div>
            <div
              className="absolute top-1/2 -left-8 glass-card px-4 py-2 text-sm font-medium animate-float"
              style={{ animationDelay: "3s" }}
            >
              ⚡ REST APIs
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/40 rounded-full" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
