import { useState, useEffect } from "react";
import { Menu, X, Mail } from "lucide-react";
import { CONTACT_EMAIL } from "./SocialLinks";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "NPM Packages", href: "#packages" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Articles", href: "#articles" },
];

export default function NavigationModern() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const lastSection = navItems[navItems.length - 1].href.slice(1);
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      // The last section can sit above the detection band when the page bottoms out (or after an
      // instant jump like the End key), so pin it explicitly at the bottom.
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom) setActiveSection(lastSection);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // A thin band just above the viewport's middle decides the active section — no layout
    // reads on every scroll event.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navItems.forEach((item) => {
      const el = document.getElementById(item.href.slice(1));
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const solid = scrolled || isOpen;

  return (
    <nav
      aria-label="Primary"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10 py-3 md:py-4 shadow-[0_4px_30px_rgba(0,0,0,0.25)]"
          : "bg-transparent py-5 md:py-6 border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="group relative flex items-center gap-3 rounded-xl transition-transform duration-300 hover:scale-[1.02]"
          >
            <span className="sr-only sm:hidden">Razan Aboushi</span>
            <div aria-hidden="true" className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-[#0a0a0a]/50 border border-white/10 group-hover:border-pink-500/50 shadow-sm group-hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 text-xl font-black text-white tracking-tighter">
                R<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">A</span>
              </span>
            </div>

            <div className="hidden sm:flex flex-col justify-center">
              <span className="text-base font-bold tracking-wide leading-none mb-1.5 text-white group-hover:text-pink-200 transition-colors duration-500">
                Razan
              </span>
              <span className="text-[11px] font-bold text-gray-400 tracking-[0.2em] uppercase leading-none group-hover:text-purple-300 transition-colors duration-500">
                Aboushi
              </span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full hover:text-white ${
                    isActive ? "text-white" : "text-gray-400"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <>
                      <span className="absolute inset-0 bg-white/10 rounded-full -z-10" />
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-t-full shadow-[0_-2px_10px_rgba(236,72,153,0.5)]" />
                    </>
                  )}
                </a>
              );
            })}
          </div>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="hidden lg:inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-pink-500/50 transition-all duration-300"
          >
            <Mail size={15} className="text-pink-400" />
            Let's Talk
          </a>

          <button
            type="button"
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        inert={!isOpen}
        className={`lg:hidden absolute top-full left-0 w-full bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[640px] py-6 opacity-100" : "max-h-0 py-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 max-w-md mx-auto">
          <div className="flex flex-col space-y-1 mb-6">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={isActive ? "true" : undefined}
                  onClick={() => setIsOpen(false)}
                  className={`w-full text-center py-3.5 text-base font-medium rounded-xl transition-colors ${
                    isActive
                      ? "bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10 text-white border border-purple-500/20"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          <div className="w-full h-px bg-white/10 mb-6" />

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="flex items-center justify-center gap-2.5 w-full py-4 text-base font-semibold text-white bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-pink-500/50 active:scale-[0.98] transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            <Mail size={18} className="text-pink-400" />
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  );
}
