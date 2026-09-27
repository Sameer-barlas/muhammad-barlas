import { useEffect, useState } from "react";

const navLinks = [["Home", "#home"], ["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"], ["Contact", "#contact"]];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 16); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  return <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}><nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8"><a href="#home" className="brand-mark" aria-label="Muhammad Barlas home"><span>MB</span><strong>Muhammad Barlas</strong></a><div className="hidden items-center gap-7 md:flex">{navLinks.map(([label, href]) => <a key={href} className="nav-link" href={href}>{label}</a>)}<a href="#contact" className="nav-cta">Let’s talk <span>↗</span></a></div><button type="button" onClick={() => setOpen(!open)} className="menu-toggle md:hidden" aria-label="Toggle navigation" aria-expanded={open}><i /><i /></button></nav>{open && <div className="mobile-nav md:hidden">{navLinks.map(([label, href]) => <a onClick={() => setOpen(false)} key={href} href={href}>{label}</a>)}</div>}</header>;
}

export default Navbar;
