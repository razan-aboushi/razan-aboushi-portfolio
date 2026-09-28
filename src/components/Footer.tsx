import { ArrowUp, Download, Mail } from 'lucide-react';
import SocialIconLinks, { CONTACT_EMAIL } from './SocialLinks';
import Reveal from './ui/Reveal';
import { RESUME_FILE, RESUME_URL } from '../utils/publicAsset';

const footerLinks = [
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Packages", href: "#packages" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Articles", href: "#articles" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#07070a]">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-0 h-[360px] w-[900px] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/15 blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Closing call to action */}
        <Reveal className="py-16 md:py-20 text-center border-b border-white/10">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Let's build something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
              great together
            </span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto mb-8">
            Have a role, a project, or an idea in mind? My inbox is always open.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="shimmer inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 shadow-[0_0_25px_rgba(139,92,246,0.35)] hover:shadow-[0_0_40px_rgba(236,72,153,0.45)] hover:scale-[1.03] transition-all duration-300"
            >
              <Mail size={18} aria-hidden="true" />
              {CONTACT_EMAIL}
            </a>
            <a
              href={RESUME_URL}
              download={RESUME_FILE}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white bg-white/5 border border-white/15 hover:bg-white/10 transition-colors"
            >
              <Download size={18} aria-hidden="true" />
              Download Resume
            </a>
          </div>
        </Reveal>

        <div className="grid gap-10 py-12 md:grid-cols-3 md:items-start">
          <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
            <a href="#home" className="flex items-center gap-3 rounded-xl">
              <span aria-hidden="true" className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl font-black tracking-tighter text-white">
                R<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">A</span>
              </span>
              <span className="text-left">
                <span className="block text-base font-bold text-white leading-tight">Razan Aboushi</span>
                <span className="block text-sm text-gray-400">Full Stack Engineer</span>
              </span>
            </a>
          </div>

          <nav aria-label="Footer" className="flex justify-center">
            <ul className="grid grid-cols-3 gap-x-8 gap-y-3 text-sm">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex justify-center md:justify-end">
            <SocialIconLinks />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 py-6 text-sm text-gray-400">
          {/* Pre-rendered at build time; a visit after New Year shouldn't count as a hydration mismatch. */}
          <p suppressHydrationWarning>© {currentYear} Razan Aboushi. All rights reserved.</p>
          <a
            href="#home"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 hover:bg-white/10 hover:text-white transition-colors"
          >
            Back to top
            <ArrowUp size={15} className="transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
