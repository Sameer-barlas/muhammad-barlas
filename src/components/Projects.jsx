import { useState } from "react";
import Reveal from "./Reveal";

const categories = [
  { id: "all", label: "All Projects", count: 5 },
  { id: "mern", label: "Full-Stack MERN", count: 2 },
  { id: "tools", label: "Tools & PWA", count: 2 },
  { id: "backend", label: "Backend & APIs", count: 1 },
];

const projects = [
  {
    id: "fitverse",
    number: "01",
    title: "FitVerse — Smart Workout Planner & Tracker",
    category: "Full-Stack Web App",
    filterCategory: "mern",
    domain: "fitversee.vercel.app",
    liveUrl: "https://fitversee.vercel.app",
    image: "/projects/fitverse.png",
    description:
      "A responsive, full-featured digital fitness companion designed for crafting custom training splits, logging daily sets/reps in real time, and visualizing long-term performance gains with interactive milestone tracking.",
    highlights: [
      "Dynamic routine builder with exercise database & target muscle mapping",
      "Live workout logger with interactive set, rep, and weight counters",
      "Persistent workout analytics, milestone streaks, and responsive dark UI",
    ],
    tags: ["React.js", "Tailwind CSS", "JavaScript", "Vite", "PWA Ready"],
    badge: "Live Production",
    badgeColor: "emerald",
    featured: true,
  },
  {
    id: "rentza",
    number: "02",
    title: "Rentza — Luxury Stays & Property Rental Marketplace",
    category: "Marketplace & MERN",
    filterCategory: "mern",
    domain: "rentza.vercel.app",
    liveUrl: "https://rentza.vercel.app",
    image: "/projects/rentza.png",
    description:
      "A high-performance real estate and vacation rental marketplace connecting travelers with premium studio lofts and heritage stays across major urban destinations, featuring location filtering and booking inquiry workflows.",
    highlights: [
      "Location-based stay discovery with multi-destination filtering (Lahore, Karachi, Islamabad)",
      "High-resolution interactive gallery previews and property amenity specifications",
      "Streamlined guest inquiry and reservation communication pipelines",
    ],
    tags: ["React.js", "Tailwind CSS", "Node.js", "Express", "REST APIs"],
    badge: "Live Production",
    badgeColor: "emerald",
    featured: true,
  },
  {
    id: "chronomate",
    number: "03",
    title: "ChronoMate — Precision Tournament Chess Clock",
    category: "High-Precision Tool / PWA",
    filterCategory: "tools",
    domain: "chronomate.vercel.app",
    liveUrl: "https://chronomate.vercel.app",
    image: "/projects/chronomate.png",
    description:
      "A zero-latency, drift-free digital chess clock built for competitive over-the-board play. Follows Norman design principles with one-tap presets (Blitz, Rapid, Bullet), Fischer/delay increments, and tactile audio feedback.",
    highlights: [
      "Zero-latency millisecond timing engine engineered with drift-free delta clocks",
      "One-tap tournament presets (1m Bullet to 60m Classical) with Fischer increments",
      "Offline-first Progressive Web App (PWA) with audio-haptic turn feedback",
    ],
    tags: ["React.js", "Precision Timers", "PWA", "JavaScript", "Web Audio API"],
    badge: "Offline PWA",
    badgeColor: "cyan",
    featured: false,
  },
  {
    id: "redoo",
    number: "04",
    title: "Redoo — Private & Secure Digital Book Reader",
    category: "Security & Reading Engine",
    filterCategory: "tools",
    domain: "redoo.vercel.app",
    liveUrl: "https://redoo.vercel.app",
    image: "/projects/redoo.png",
    description:
      "A confidential, privacy-first reading platform engineered for digital editions and strategy books. Features hardware-level single-device session locking, client-side anti-leak protections, and a high-definition reading engine.",
    highlights: [
      "Hardware-level single-device session binding and anti-leak client safeguards",
      "Distraction-free high-definition typography engine with adaptive reading modes",
      "IndexedDB offline reading continuity with instant chapter progress sync",
    ],
    tags: ["React.js", "Tailwind CSS", "Client Security", "E-Reader", "IndexedDB"],
    badge: "Secure Platform",
    badgeColor: "indigo",
    featured: false,
  },
  {
    id: "lms-api",
    number: "05",
    title: "Enterprise LMS REST API — Scalable Learning Engine",
    category: "Backend & Systems Architecture",
    filterCategory: "backend",
    domain: "api.lms-platform.internal/v1",
    liveUrl: null,
    image: "/projects/lms-api.jpg",
    description:
      "An enterprise-grade RESTful API backend engineered for scalable Learning Management Systems. Designed with granular Role-Based Access Control (Admin, Instructor, Student), 256-bit encrypted JWT authentication with refresh token rotation, and low-latency route handling.",
    highlights: [
      "Multi-tier RBAC security with automated JWT refresh token lifecycle",
      "Course curriculum management, media streaming & progress tracking",
      "Sub-45ms average response latency with comprehensive input sanitization",
    ],
    tags: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT Auth", "REST APIs", "Swagger"],
    badge: "REST API Microservice",
    badgeColor: "amber",
    featured: true,
  },
];

function Projects() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.filterCategory === activeTab);

  return (
    <section id="projects" className="section-shell section-anchor">
      <div className="section-aurora section-aurora--right" aria-hidden="true" />
      <div className="section-container">
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-2 border-b border-white/10">
            <div>
              <p className="eyebrow">03 / Featured Work</p>
              <h2 className="section-title mt-2">
                Engineered for <span className="gradient-text">impact.</span>
              </h2>
              <p className="section-lede mt-3 max-w-2xl">
                A curated showcase of real-world production platforms, responsive web applications, and scalable backend architectures.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 pt-2 md:pt-0">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-300 flex items-center gap-1.5 ${
                    activeTab === cat.id
                      ? "bg-cyan-400/20 text-cyan-300 border border-cyan-400/50 shadow-[0_0_15px_rgba(34,211,238,0.25)]"
                      : "bg-white/[0.04] text-slate-400 border border-white/10 hover:text-white hover:bg-white/[0.08]"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className="text-[10px] opacity-60">({cat.count})</span>
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Project Cards Grid */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {filteredProjects.map((project, index) => {
            const isWideCard = project.id === "lms-api" && activeTab === "all";

            return (
              <Reveal
                key={project.id}
                delay={index * 0.08}
                className={isWideCard ? "lg:col-span-2" : ""}
              >
                <article
                  className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c0e1a]/90 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_30px_rgba(34,211,238,0.12)] flex flex-col ${
                    isWideCard ? "lg:flex-row lg:items-stretch" : ""
                  }`}
                >
                  {/* Visual Device / Mockup Container */}
                  <div
                    className={`relative overflow-hidden flex flex-col border-b border-white/10 ${
                      isWideCard
                        ? "lg:w-1/2 lg:border-b-0 lg:border-r border-white/10"
                        : ""
                    }`}
                  >
                    {/* Simulated Browser Chrome Header */}
                    <div className="flex items-center justify-between px-4 py-2.5 bg-[#090b14] border-b border-white/10 text-xs">
                      {/* macOS Window Controls */}
                      <div className="flex items-center gap-1.5" aria-hidden="true">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]/80 inline-block" />
                      </div>

                      {/* Mock URL Bar */}
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/50 border border-white/10 text-[11px] font-mono text-slate-300 max-w-[220px] sm:max-w-xs truncate">
                        <svg
                          className="w-3 h-3 text-cyan-400 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          />
                        </svg>
                        <span className="truncate">{project.domain}</span>
                        <span className="relative flex h-2 w-2 shrink-0 ml-1">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                        </span>
                      </div>

                      {/* Badge */}
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.06] text-cyan-300 border border-cyan-400/20">
                        {project.badge}
                      </span>
                    </div>

                    {/* Screenshot Preview with Smooth Zoom */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#070812] flex-1">
                      <img
                        src={project.image}
                        alt={`${project.title} Preview`}
                        loading="lazy"
                        className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      {/* Gradient Scrim */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e1a] via-transparent to-transparent opacity-60" />

                      {/* Hover Overlay Button */}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]"
                          aria-label={`Open live site for ${project.title}`}
                        >
                          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500 text-black font-semibold text-xs tracking-wide shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            Launch Live Site
                            <span aria-hidden="true">↗</span>
                          </span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Card Content & Details */}
                  <div
                    className={`p-6 sm:p-7 flex flex-col justify-between flex-1 ${
                      isWideCard ? "lg:w-1/2" : ""
                    }`}
                  >
                    <div>
                      {/* Card Header Row */}
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                          <span className="text-cyan-400 font-mono text-xs font-semibold tracking-wider">
                            {project.number}
                          </span>
                          <span className="text-white/20 font-mono text-xs">/</span>
                          <span className="text-slate-400 text-xs font-mono uppercase tracking-wider">
                            {project.category}
                          </span>
                        </div>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-cyan-300 transition-colors"
                            aria-label="Open project in new tab"
                          >
                            <span className="text-base">↗</span>
                          </a>
                        )}
                      </div>

                      {/* Project Title */}
                      <h3 className="mt-3 text-xl font-bold font-display tracking-tight text-white group-hover:text-cyan-200 transition-colors sm:text-2xl">
                        {project.title}
                      </h3>

                      {/* Featured Short Description */}
                      <p className="mt-3 text-sm text-slate-300 leading-relaxed font-sans">
                        {project.description}
                      </p>

                      {/* Key Highlights Bulleted List */}
                      <div className="mt-4 pt-4 border-t border-white/[0.08] space-y-2">
                        {project.highlights.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-2.5 text-xs text-slate-300/90 leading-normal"
                          >
                            <span className="text-cyan-400 text-xs mt-0.5 shrink-0">✓</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Technology Stack Tags */}
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.05] border border-white/10 text-indigo-200/90 group-hover:border-cyan-400/20 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="mt-7 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-300 hover:from-cyan-300 hover:to-teal-200 transition-all shadow-[0_4px_16px_rgba(34,211,238,0.3)] hover:shadow-[0_6px_22px_rgba(34,211,238,0.45)] transform hover:-translate-y-0.5"
                        >
                          <span>Live Preview</span>
                          <span aria-hidden="true">↗</span>
                        </a>
                      ) : (
                        <a
                          href="#contact"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-amber-400 via-orange-300 to-amber-300 hover:from-amber-300 hover:to-orange-200 transition-all shadow-[0_4px_16px_rgba(251,191,36,0.3)] hover:shadow-[0_6px_22px_rgba(251,191,36,0.45)] transform hover:-translate-y-0.5"
                        >
                          <span>Explore API Specs</span>
                          <span aria-hidden="true">↗</span>
                        </a>
                      )}

                      <a
                        href="#contact"
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-slate-300 hover:text-white transition-colors"
                      >
                        <span>Discuss this build</span>
                        <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
