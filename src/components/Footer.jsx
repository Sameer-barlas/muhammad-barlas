function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#04060f]/80 backdrop-blur-xl">
      <div className="section-container py-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        {/* Brand identity */}
        <a href="#home" className="flex items-center gap-3 group" aria-label="Muhammad Barlas Home">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 via-indigo-600/30 to-purple-600/20 border border-cyan-400/30 flex items-center justify-center font-mono font-bold text-xs text-cyan-300">
            MB
          </div>
          <div className="flex flex-col text-left">
            <strong className="font-display text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
              Muhammad Barlas
            </strong>
            <span className="text-[10px] font-mono text-cyan-400/80 uppercase">
              MERN Stack Developer &amp; AI Engineer
            </span>
          </div>
        </a>

        {/* Copyright notice */}
        <p className="font-mono text-xs text-slate-400">
          © {new Date().getFullYear()} Muhammad Barlas. Built with modern MERN &amp; AI engineering.
        </p>

        {/* Back to top */}
        <a
          href="#home"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-semibold text-slate-300 hover:text-white bg-white/[0.04] border border-white/10 hover:border-cyan-400/40 transition-all hover:-translate-y-0.5"
        >
          <span>Back to top</span>
          <span className="text-cyan-400">↑</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
