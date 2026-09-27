import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const SCENE_URL = "https://my.spline.design/nexbotrobotcharacterconcept-W8PiQCWw9oAL5vEO7qlyLIIY/";
const roles = ["MERN Stack Developer", "Cyber Security Enthusiast", "REST API Designer", "Scalable System Architect"];

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
    if (reduceMotion) { setText(roles[0]); return undefined; }
    const role = roles[roleIndex];
    const delay = !deleting && text.length < role.length ? 75 : deleting && text.length ? 35 : 1600;
    const timer = window.setTimeout(() => {
      if (!deleting && text.length < role.length) setText(role.slice(0, text.length + 1));
      else if (!deleting) setDeleting(true);
      else if (text.length) setText(role.slice(0, -1));
      else { setDeleting(false); setRoleIndex((index) => (index + 1) % roles.length); }
    }, delay);
    return () => window.clearTimeout(timer);
  }, [deleting, reduceMotion, roleIndex, text]);

  const heroItem = { hidden: { opacity: 0, y: 26 }, visible: { opacity: 1, y: 0 } };

  return (
    <section id="home" className="hero-section section-anchor">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow hero-glow--one" aria-hidden="true" />
      <div className="hero-glow hero-glow--two" aria-hidden="true" />
      <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-7xl items-center gap-10 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[1.02fr_.98fr] lg:gap-4 lg:pt-20">
        <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.11 } } }} className="max-w-2xl text-center lg:text-left">
          <motion.div variants={heroItem} className="availability-chip"><span className="availability-chip__dot" />Available for selected opportunities</motion.div>
          <motion.p variants={heroItem} className="eyebrow mt-7">Hello, I’m</motion.p>
          <motion.h1 variants={heroItem} className="hero-title mt-3">Muhammad <span className="gradient-text">Barlas.</span></motion.h1>
          <motion.div variants={heroItem} className="hero-role mt-5" aria-label={roles[roleIndex]}><span className="text-cyan-300">&lt;</span><span>{text}</span><span className="text-cyan-300">/&gt;</span>{!reduceMotion && <span className="typing-cursor" aria-hidden="true" />}</motion.div>
          <motion.p variants={heroItem} className="hero-copy mt-6">A 5th-semester Software Engineering student at UET Lahore, building considered MERN products, secure APIs, and systems designed to scale.</motion.p>
          <motion.div variants={heroItem} className="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start"><a href="#projects" className="btn-primary">Explore my work <span aria-hidden="true">↗</span></a><a href="#contact" className="btn-outline">Let’s talk <span aria-hidden="true">→</span></a></motion.div>
          <motion.div variants={heroItem} className="hero-stats mt-12"><div><strong>05<span>+</span></strong><span>Projects built</span></div><div><strong>02<span>+</span></strong><span>Years learning</span></div><div><strong>100<span>%</span></strong><span>Intentional work</span></div></motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.94, x: 24 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }} className="hero-robot-wrap">
          <div className="robot-stage" aria-label="Interactive 3D robot">{isDesktop && <iframe title="Interactive 3D robot" src={SCENE_URL} loading="eager" allow="fullscreen" />}</div>
        </motion.div>
      </div>
      <a href="#about" className="scroll-cue" aria-label="Scroll to About section"><span /></a>
    </section>
  );
}

export default Hero;
