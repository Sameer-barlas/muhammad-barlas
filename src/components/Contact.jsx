import { useState } from "react";

const socialLinks = [
  {
    name: "GitHub",
    icon: "🐙",
    href: "https://github.com/",
    color: "hover:bg-gray-700/30",
  },
  {
    name: "LinkedIn",
    icon: "💼",
    href: "https://linkedin.com/",
    color: "hover:bg-blue-600/30",
  },
  {
    name: "Email",
    icon: "✉️",
    href: "mailto:muhammadbarlas@example.com",
    color: "hover:bg-red-600/30",
  },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder - will integrate with backend later
    alert("Message sent! (Demo - backend coming soon)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">
          Get In <span className="gradient-text">Touch</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact info */}
          <div>
            <div className="glass-card p-8 mb-6">
              <h3 className="text-2xl font-bold font-display mb-4">
                Let's Build Something{" "}
                <span className="gradient-text">Amazing</span>
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                Have a project in mind? Looking for a MERN stack developer or
                security consultation? I'm currently open to freelance projects
                and full-time opportunities.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    📍
                  </div>
                  <div>
                    <div className="text-sm font-medium">Location</div>
                    <div className="text-sm text-slate-400">
                      Lahore, Pakistan
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    ✉️
                  </div>
                  <div>
                    <div className="text-sm font-medium">Email</div>
                    <div className="text-sm text-slate-400">
                      muhammadbarlas@example.com
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    🎓
                  </div>
                  <div>
                    <div className="text-sm font-medium">University</div>
                    <div className="text-sm text-slate-400">UET Lahore</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`glass-card px-6 py-4 flex items-center gap-2 hover:scale-105 transition-all duration-300 ${social.color}`}
                >
                  <span className="text-2xl">{social.icon}</span>
                  <span className="text-sm font-medium">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right - Contact form */}
          <div className="glass-card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-slate-300"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all placeholder:text-slate-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-slate-300"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all placeholder:text-slate-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-slate-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all placeholder:text-slate-500 resize-none"
                />
              </div>

              <button type="submit" className="w-full btn-primary text-center">
                Send Message 🚀
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
