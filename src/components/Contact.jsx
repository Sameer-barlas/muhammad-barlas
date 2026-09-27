import { useState } from "react";
import Reveal from "./Reveal";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const handleSubmit = (event) => { event.preventDefault(); alert("Thanks — your message is ready to send once a form service is connected."); setFormData({ name: "", email: "", message: "" }); };
  const updateField = (event) => setFormData({ ...formData, [event.target.name]: event.target.value });

  return <section id="contact" className="section-shell section-anchor contact-section"><div className="section-container">
    <Reveal><p className="eyebrow">04 / Contact</p><h2 className="section-title">Let’s make it <span className="gradient-text">happen.</span></h2></Reveal>
    <div className="mt-12 grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
      <Reveal delay={0.06} className="premium-card contact-intro"><p className="text-sm font-medium text-cyan-200">Have an idea in mind?</p><h3>Let’s build something that feels as good as it works.</h3><p>I’m open to freelance projects, collaborative product work, and full-time opportunities.</p><div className="contact-details"><a href="mailto:muhammadbarlas@example.com"><span>Email</span>muhammadbarlas@example.com <b>↗</b></a><div><span>Based in</span>Lahore, Pakistan</div><div><span>Studying at</span>UET Lahore</div></div><div className="social-row"><a href="https://github.com/" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></Reveal>
      <Reveal delay={0.14} className="premium-card contact-form"><form onSubmit={handleSubmit}><label>Your name<input name="name" value={formData.name} onChange={updateField} required placeholder="John Doe" /></label><label>Email address<input type="email" name="email" value={formData.email} onChange={updateField} required placeholder="john@example.com" /></label><label>How can I help?<textarea name="message" value={formData.message} onChange={updateField} required rows="5" placeholder="Tell me a little about the project..." /></label><button type="submit" className="btn-primary w-full">Send message <span aria-hidden="true">↗</span></button></form></Reveal>
    </div>
  </div></section>;
}

export default Contact;
