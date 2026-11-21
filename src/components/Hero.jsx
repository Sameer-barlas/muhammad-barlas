import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const SCENE_URL =
  "https://my.spline.design/nexbotrobotcharacterconcept-W8PiQCWw9oAL5vEO7qlyLIIY/";
const roles = [
  "MERN Stack Developer & AI Engineer",
  "RAG Systems & LLM Specialist",
  "Scalable REST API Architect",
  "Full-Stack Web Engineer",
];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setText(roles[0]);
      return undefined;
    }
    const role = roles[roleIndex];
    const delay =
      !deleting && text.length < role.length
        ? 70
        : deleting && text.length
          ? 30
          : 1800;
    const timer = window.setTimeout(() => {
      if (!deleting && text.length < role.length)
        setText(role.slice(0, text.length + 1));
      else if (!deleting) setDeleting(true);
      else if (text.length) setText(role.slice(0, -1));
      else {
        setDeleting(false);
        setRoleIndex((index) => (index + 1) % roles.length);
      }
    }, delay);
    return () => window.clearTimeout(timer);
  }, [deleting, reduceMotion, roleIndex, text]);

  const heroItem = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="home" className="relative min-h-[100svh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="ambient-glow ambient-glow--violet -top-32 -left-32 opacity-20" aria-hidden="true" />
      <div className="ambient-glow ambient-glow--cyan top-1/3 -right-32 opacity-15" aria-hidden="true" />

      <div className="section-container">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 xl:gap-12">
          {/* Left Column: Core Narrative & Actions */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            {/* Live Availability Badge */}
            <motion.div variants={heroItem} className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono shadow-[0_0_20px_rgba(16,185,129,0.15)]">
              <span className="beacon-dot" />
              <span>Available for selected opportunities</span>
            </motion.div>

            {/* Eyebrow */}
            <motion.p variants={heroItem} className="mt-7 font-mono text-xs uppercase tracking-widest text-slate-400 flex items-center gap-2">
              <span className="w-6 h-px bg-cyan-400/50" />
              Hello, I’m
            </motion.p>

            {/* Giant Title */}
            <motion.h1 variants={heroItem} className="mt-3 font-display text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
              Muhammad <br className="hidden sm:inline" />
              <span className="gradient-text">Barlas.</span>
            </motion.h1>

            {/* High-Tech Terminal Code Role Badge */}
            <motion.div
              variants={heroItem}
              className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#090e24]/80 border border-cyan-400/25 shadow-[0_0_25px_rgba(56,189,248,0.12)] font-mono text-sm sm:text-base text-cyan-200"
              aria-label={roles[roleIndex]}
            >
              <span className="text-cyan-400 font-bold">&lt;</span>
              <span className="text-slate-100 font-semibold">{text}</span>
              <span className="text-cyan-400 font-bold">/&gt;</span>
              {!reduceMotion && (
                <span className="inline-block w-2 h-4 ml-1 bg-cyan-400 cursor-blink" aria-hidden="true" />
              )}
            </motion.div>

            {/* Hero Copy (Faithful content) */}
            <motion.p variants={heroItem} className="mt-6 text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-xl font-sans">
              A 5th-semester Software Engineering student at <span className="text-white font-semibold">UET Lahore</span>, building
              considered MERN products, intelligent AI &amp; RAG systems, secure APIs, and architectures designed to scale.
            </motion.p>

            {/* Call To Action Buttons */}
            <motion.div variants={heroItem} className="mt-9 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a href="#projects" className="btn-primary">
                <span>Explore my work</span>
                <span aria-hidden="true">↗</span>
              </a>
              <a href="#contact" className="btn-secondary">
                <span>Let’s talk</span>
                <span aria-hidden="true">→</span>
              </a>
            </motion.div>

            {/* Stats Cards Row */}
            <motion.div variants={heroItem} className="mt-12 grid grid-cols-3 gap-3 sm:gap-4 w-full max-w-lg">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/30 transition-colors text-left">
                <div className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  05<span className="text-cyan-400">+</span>
                </div>
                <div className="text-[11px] font-mono text-slate-400 mt-1 uppercase tracking-wider">
                  Projects built
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-indigo-400/30 transition-colors text-left">
                <div className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  02<span className="text-indigo-400">+</span>
                </div>
                <div className="text-[11px] font-mono text-slate-400 mt-1 uppercase tracking-wider">
                  Years learning
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-400/30 transition-colors text-left">
                <div className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  100<span className="text-emerald-400">%</span>
                </div>
                <div className="text-[11px] font-mono text-slate-400 mt-1 uppercase tracking-wider">
                  Intentional work
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive 3D Cybernetic Robot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:flex flex-col items-center justify-center"
          >
            {/* High-Tech HUD Viewport Frame */}
            <div className="relative w-full max-w-[560px] h-[580px] rounded-3xl overflow-hidden bg-gradient-to-b from-[#0a0f26] to-[#040612] border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(56,189,248,0.15)] backdrop-blur-xl">
              {/* HUD Corner Brackets */}
              <span className="hud-corner hud-corner--tl" />
              <span className="hud-corner hud-corner--tr" />
              <span className="hud-corner hud-corner--bl" />
              <span className="hud-corner hud-corner--br" />

              {/* HUD Header Telemetry Bar */}
              <div className="absolute top-0 inset-x-0 z-20 flex items-center justify-between px-5 py-3 bg-[#060918]/80 backdrop-blur-md border-b border-white/10 text-[10px] font-mono">
                <div className="flex items-center gap-2 text-cyan-300">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span>3D_INTERACTIVE_CORE</span>
                </div>
                <div className="text-slate-400 tracking-wider">
                  UET.LAHORE // ENG_V5.0
                </div>
              </div>

              {/* Spline Interactive Robot Canvas */}
              <div className="relative w-full h-full pt-10 pb-8 flex items-center justify-center">
                {isDesktop && (
                  <iframe
                    title="Interactive 3D robot"
                    src={SCENE_URL}
                    loading="eager"
                    allow="fullscreen"
                    className="w-[114%] h-[114%] -translate-x-[2%] -translate-y-[2%] border-0 bg-transparent filter contrast-[1.05] saturate-[1.15]"
                  />
                )}
                {/* Ambient backlighting glow inside stage */}
                <div className="absolute -bottom-10 inset-x-12 h-36 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
              </div>

              {/* HUD Footer status badge */}
              <div className="absolute bottom-3 inset-x-4 z-20 flex items-center justify-between px-4 py-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono text-slate-300">
                <span className="flex items-center gap-2 text-cyan-300">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                  Interactive 3D Entity
                </span>
                <span className="text-slate-400 text-[10px]">DRAG TO INTERACT</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Scroll Cue */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-slate-400 hover:text-cyan-300 transition-colors group"
        aria-label="Scroll to About section"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 group-hover:text-cyan-300">
          Scroll Down
        </span>
        <div className="w-5 h-8 rounded-full border border-white/20 group-hover:border-cyan-400/50 flex justify-center p-1 transition-colors">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]"
          />
        </div>
      </a>
    </section>
  );
}

export default Hero;
