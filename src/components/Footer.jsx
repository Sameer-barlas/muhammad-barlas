function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 py-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 via-transparent to-cyan-500/5" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center font-bold text-sm">
            MB
          </div>
          <span className="text-sm text-slate-400">
            © {year} Muhammad Barlas. All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-6 text-sm text-slate-400">
          <a href="#home" className="hover:text-cyan-400 transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-cyan-400 transition-colors">
            About
          </a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">
            Skills
          </a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">
            Projects
          </a>
        </div>

        <div className="text-sm text-slate-500">
          Made with <span className="text-red-500">❤</span> in Pakistan
        </div>
      </div>
    </footer>
  );
}

export default Footer;
