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
      <div className="ambient-glow ambient-glow--violet -top-32 -left-32 opacity-25" aria-hidden="true" />
      <div className="ambient-glow ambient-glow--cyan top-1/4 -right-20 opacity-20" aria-hidden="true" />

      <div className="section-container">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] xl:gap-12">
          {/* Left Column: Core Narrative & Actions */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left z-10"
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
            <motion.h1 variants={heroItem} className="mt-3 font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05]">
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

          {/* Right Column: Seamlessly Merged 3D Robot in Header */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:flex items-center justify-center w-full"
          >
            {/* Ambient Aura Glow Behind Robot */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
              <div className="w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-cyan-500/20 via-indigo-600/20 to-purple-500/15 blur-3xl" />
            </div>

            {/* Seamless 3D Stage (No outer border or box) */}
            <div className="relative w-full max-w-[580px] h-[580px] xl:h-[620px] overflow-hidden flex items-center justify-center">
              {isDesktop && (
                <iframe
                  title="Interactive 3D Robot"
                  src={SCENE_URL}
                  loading="eager"
                  allow="fullscreen"
                  className="w-[124%] h-[124%] -translate-x-[4%] -translate-y-[4%] border-0 bg-transparent filter contrast-[1.08] saturate-[1.2]"
                />
              )}

              {/* Edge gradients to seamlessly merge the canvas into the website background */}
              {/* Bottom blend */}
              <div
                className="absolute inset-x-0 bottom-0 h-28 pointer-events-none bg-gradient-to-t from-[#05070f] via-[#05070f]/80 to-transparent z-10"
                aria-hidden="true"
              />
              {/* Left blend */}
              <div
                className="absolute inset-y-0 left-0 w-16 pointer-events-none bg-gradient-to-r from-[#05070f] to-transparent z-10"
                aria-hidden="true"
              />
              {/* Right blend */}
              <div
                className="absolute inset-y-0 right-0 w-16 pointer-events-none bg-gradient-to-l from-[#05070f] to-transparent z-10"
                aria-hidden="true"
              />
              {/* Top blend */}
              <div
                className="absolute inset-x-0 top-0 h-16 pointer-events-none bg-gradient-to-b from-[#05070f] to-transparent z-10"
                aria-hidden="true"
              />

              {/* Solid Anti-Watermark Shield: Completely covers and disables any bottom-right Spline badge/link */}
              <div
                className="absolute bottom-0 right-0 w-52 h-20 z-20 pointer-events-auto bg-gradient-to-l from-[#05070f] via-[#05070f] to-transparent"
                aria-hidden="true"
              />
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
