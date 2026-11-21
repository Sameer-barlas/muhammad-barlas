import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home", num: "00" },
  { label: "About", href: "#about", num: "01" },
  { label: "Capabilities", href: "#skills", num: "02" },
  { label: "Featured Work", href: "#projects", num: "03" },
  { label: "Why Partner", href: "#why-hire", num: "04" },
  { label: "Contact", href: "#contact", num: "05" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-3 sm:py-4 px-4 sm:px-6">
      <div
        className={`mx-auto max-w-7xl transition-all duration-500 rounded-2xl sm:rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between ${
          scrolled
            ? "bg-[#080c1d]/85 backdrop-blur-xl border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.65),0_0_25px_rgba(56,189,248,0.08)]"
            : "bg-transparent border border-transparent"
        }`}
      >
        {/* Brand Identity */}
        <a href="#home" className="flex items-center gap-3 group" aria-label="Muhammad Barlas Home">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 via-indigo-600/30 to-purple-600/20 border border-cyan-400/40 shadow-[0_0_15px_rgba(56,189,248,0.25)] group-hover:scale-105 group-hover:border-cyan-300 transition-all duration-300">
            <span className="font-mono font-bold text-sm text-cyan-300 tracking-wider">MB</span>
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#05070f] shadow-[0_0_8px_#34d399]" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-tight text-white group-hover:text-cyan-300 transition-colors">
              Muhammad Barlas
            </span>
            <span className="text-[10px] font-mono font-medium text-cyan-400/80 tracking-wide uppercase">
              MERN &amp; AI Systems Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white transition-all duration-200 hover:bg-white/[0.06] group"
            >
              <span className="font-mono text-[10px] text-cyan-400/70 mr-1.5 group-hover:text-cyan-300">
                {item.num}
              </span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Action Button & Availability */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#contact"
            className="relative inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold font-display tracking-tight text-black bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-300 hover:from-cyan-300 hover:to-teal-200 transition-all duration-300 shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] transform hover:-translate-y-0.5"
          >
            <span>Let’s Talk</span>
            <span className="text-sm">↗</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 hover:border-cyan-400/40 text-slate-200 transition-all"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span
            className={`block w-5 h-0.5 bg-slate-200 rounded transition-all duration-300 ${
              open ? "rotate-45 translate-y-1 bg-cyan-400" : "-translate-y-1"
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-slate-200 rounded transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-0 bg-cyan-400" : "translate-y-1"
            }`}
          />
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {open && (
        <div className="md:hidden mt-2 mx-auto max-w-7xl rounded-2xl bg-[#090d1f]/95 backdrop-blur-2xl border border-white/10 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.8)] animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs font-mono text-cyan-300">
            <span className="flex items-center gap-2">
              <span className="beacon-dot" />
              AVAILABLE FOR HIRE
            </span>
            <span className="text-slate-400">UET LAHORE</span>
          </div>

          <div className="grid gap-1.5">
            {navLinks.map((item) => (
              <a
                key={item.href}
                onClick={() => setOpen(false)}
                href={item.href}
                className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-white/[0.06] hover:text-cyan-300 transition-colors"
              >
                <span>{item.label}</span>
                <span className="font-mono text-xs text-slate-500">{item.num}</span>
              </a>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-2">
            <a
              onClick={() => setOpen(false)}
              href="#contact"
              className="w-full text-center py-2.5 rounded-xl font-display font-bold text-xs tracking-tight text-black bg-gradient-to-r from-cyan-400 to-teal-300 shadow-[0_0_20px_rgba(56,189,248,0.3)]"
            >
              Start a Project ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
