function Footer() {
  return <footer className="site-footer"><div className="section-container flex flex-col items-center justify-between gap-4 py-7 text-center text-sm text-slate-500 sm:flex-row sm:text-left"><a href="#home" className="brand-mark"><span>MB</span><strong>Muhammad Barlas</strong></a><p>© {new Date().getFullYear()} Muhammad Barlas. Crafted with intention.</p><a href="#home" className="footer-top">Back to top ↑</a></div></footer>;
}
export default Footer;
