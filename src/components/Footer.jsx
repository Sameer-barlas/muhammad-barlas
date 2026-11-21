function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-container flex flex-col items-center justify-between gap-4 py-7 text-center text-sm text-slate-500 sm:flex-row sm:text-left">
        <a href="#home" className="brand-mark group" aria-label="Muhammad Barlas home">
          <span className="brand-badge">MB</span>
          <div className="brand-title-wrap">
            <strong className="group-hover:text-cyan-300 transition-colors">Muhammad Barlas</strong>
            <span className="brand-role">
              MERN Stack Developer &amp; AI Engineer
            </span>
          </div>
        </a>
        <p className="font-mono text-xs text-slate-400">
          © {new Date().getFullYear()} Muhammad Barlas. Built with modern MERN &amp; AI engineering.
        </p>
        <a href="#home" className="footer-top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}

export default Footer;
