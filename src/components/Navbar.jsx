import { useEffect, useState } from "react";

const navLinks = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8">
        <a href="#home" className="brand-mark group" aria-label="Muhammad Barlas home">
          <span className="brand-badge">MB</span>
          <div className="brand-title-wrap">
            <strong className="group-hover:text-cyan-300 transition-colors">Muhammad Barlas</strong>
            <span className="brand-role">
              MERN Stack Developer &amp; AI Engineer
            </span>
          </div>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map(([label, href]) => (
            <a key={href} className="nav-link" href={href}>
              {label}
            </a>
          ))}
          <a href="#contact" className="nav-cta">
            Let’s talk <span>↗</span>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="menu-toggle md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <i />
          <i />
        </button>
      </nav>

      {open && (
        <div className="mobile-nav md:hidden">
          <div className="px-3 py-2 mb-1 text-[11px] text-cyan-300 font-mono border-b border-white/10 tracking-wider">
            MERN STACK DEVELOPER &amp; AI ENGINEER
          </div>
          {navLinks.map(([label, href]) => (
            <a onClick={() => setOpen(false)} key={href} href={href}>
              {label}
            </a>
          ))}
          <a
            onClick={() => setOpen(false)}
            href="#contact"
            className="mt-2 text-center text-cyan-300 font-semibold py-2 rounded-lg bg-cyan-950/40 border border-cyan-500/20"
          >
            Let’s talk ↗
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;
