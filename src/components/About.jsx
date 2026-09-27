import Reveal from "./Reveal";

const highlights = [
  ["01", "Education", "Software Engineering at UET Lahore · 5th Semester"],
  ["02", "MERN Stack", "Modern products with MongoDB, Express, React, and Node.js."],
  ["03", "Security minded", "Secure API design, sound authentication, and robust systems."],
  ["04", "REST APIs", "Clean, scalable architecture that makes products easier to grow."],
];

function About() {
  return (
    <section id="about" className="section-shell section-anchor">
      <div className="section-aurora section-aurora--left" aria-hidden="true" />
      <div className="section-container">
        <Reveal><p className="eyebrow">01 / About</p><h2 className="section-title">Engineering with <span className="gradient-text">purpose.</span></h2></Reveal>
        <div className="grid gap-6 lg:grid-cols-[1.08fr_.92fr] lg:gap-8">
          <Reveal delay={0.08} className="premium-card premium-card--large">
            <p className="text-sm font-medium text-cyan-200">The short version</p>
            <h3 className="mt-5 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">Software engineer &amp; thoughtful problem solver.</h3>
            <p className="card-copy mt-6">I’m a passionate software engineer currently pursuing my 5th semester at UET Lahore. I specialise in modern MERN web applications, with a focus on security, performance, and scalability.</p>
            <p className="card-copy mt-4">My interest in cyber security informs every layer of my work—from resilient authentication flows to secure API design.</p>
            <div className="about-facts mt-9"><div><span>Based in</span><strong>Lahore, Pakistan</strong></div><div><span>Currently</span><strong>Open to work</strong></div><div><span>Focus</span><strong>Scalable systems</strong></div></div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {highlights.map(([number, title, description], index) => <Reveal key={title} delay={0.1 + index * 0.07}><article className="premium-card feature-card"><span className="feature-number">{number}</span><div><h3>{title}</h3><p>{description}</p></div></article></Reveal>)}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
