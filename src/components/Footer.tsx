import { motion } from 'framer-motion';
import { CodeXml, Mail, Phone, MapPin } from 'lucide-react';

const REGISTER_LINK = 'https://forms.google.com';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Curriculum', href: '#curriculum' },
  { name: 'Instructor', href: '#instructor' },
  { name: 'Benefits', href: '#benefits' },
  { name: 'FAQ', href: '#faq' },
];

const resources = [
  { name: 'Blog', href: '#' },
  { name: 'Tutorials', href: '#' },
  { name: 'Community', href: '#' },
  { name: 'Success Stories', href: '#' },
];

const legal = [
  { name: 'Privacy Policy', href: '#' },
  { name: 'Terms of Service', href: '#' },
  { name: 'Cookie Policy', href: '#' },
  { name: 'Refund Policy', href: '#' },
];

const socials = [
  { name: 'Facebook', label: 'F', href: '#' },
  { name: 'Twitter', label: 'T', href: '#' },
  { name: 'Instagram', label: 'I', href: '#' },
  { name: 'LinkedIn', label: 'L', href: '#' },
  { name: 'YouTube', label: 'Y', href: '#' },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-slate-950 to-slate-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-400 p-2 rounded-xl">
                <CodeXml className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold gradient-text">Techvora Academy</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Empowering young minds with programming skills for a brighter digital future. Join us and start coding today!
            </p>
            <div className="space-y-3">
              <a
                href="mailto:techvorasupport@gmail.com"
                className="flex items-center gap-2.5 text-gray-400 hover:text-cyan-400 transition-colors text-sm"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                techvorasupport@gmail.com
              </a>
              <a
                href="tel:+918681844565"
                className="flex items-center gap-2.5 text-gray-400 hover:text-cyan-400 transition-colors text-sm"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                +91 868 184 4565
              </a>
              <div className="flex items-center gap-2.5 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                Trichy, Tamil Nadu, India
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-base mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-base mb-5">Resources</h3>
            <ul className="space-y-3">
              {resources.map((r) => (
                <li key={r.name}>
                  <a
                    href={r.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {r.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-base mb-5">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-5 leading-relaxed">
              Subscribe to get updates about upcoming webinars and new courses.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors text-sm"
              />
              <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-400 text-white px-4 py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social & CTA row */}
        <div className="border-t border-white/10 pt-10 mb-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={s.name}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors text-gray-400 hover:text-cyan-400 font-bold text-sm"
                >
                  {s.label}
                </motion.a>
              ))}
            </div>
            <motion.a
              href={REGISTER_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white px-7 py-2.5 rounded-full font-semibold btn-glow text-sm"
            >
              Register Now — Free!
            </motion.a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Techvora Academy. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              {legal.map((item, i) => (
                <span key={item.name} className="flex items-center gap-5">
                  <a
                    href={item.href}
                    className="text-gray-500 hover:text-cyan-400 transition-colors text-xs"
                  >
                    {item.name}
                  </a>
                  {i < legal.length - 1 && (
                    <span className="text-gray-700 text-xs hidden sm:inline">·</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
