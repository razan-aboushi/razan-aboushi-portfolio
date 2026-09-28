import { useRef } from "react";
import { m, useTransform } from "framer-motion";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { useHasMounted } from "../hooks/useHasMounted";
import { Download, Mail, Sparkles, ChevronDown, ArrowRight } from "lucide-react";
import { useMouseParallax } from "./hero/useMouseParallax";
import RotatingTitle from "./hero/RotatingTitle";
import ParticleField from "./hero/ParticleField";
import DeveloperScene from "./hero/DeveloperScene";
import {
  CodeWindow,
  TerminalWindow,
  TechBadge,
  StatCard,
  ReactGlyph,
  NextGlyph,
  TSGlyph,
  JSGlyph,
  NodeGlyph,
  GitGlyph,
} from "./hero/FloatingPanels";
import SocialIconLinks, { CONTACT_EMAIL } from "./SocialLinks";
import { RESUME_FILE, RESUME_URL } from "../utils/publicAsset";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function HeroSection() {
  const containerRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const { x, y } = useMouseParallax(containerRef);
  const parallax = { x, y };
  // Decorative layers mount after hydration: they already fade in, and keeping them out of the
  // pre-rendered HTML gives crawlers a much leaner DOM.
  const mounted = useHasMounted();
  // Parallax values are normalized (-0.5..0.5); scale them to pixels so the glow trails the cursor.
  const spotX = useTransform(x, (v) => v * 720);
  const spotY = useTransform(y, (v) => v * 480);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative isolate min-h-[100svh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-navy"
    >
      {/* Aurora background — transform-only drift so it never triggers repaints */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-[20%] -left-[10%] h-[70%] w-[60%] rounded-full bg-purple-600/25 blur-[120px] animate-aurora" />
        <div
          className="absolute -top-[15%] -right-[15%] h-[60%] w-[55%] rounded-full bg-pink-600/20 blur-[120px] animate-aurora"
          style={{ animationDelay: "-6s", animationDuration: "22s" }}
        />
        <div
          className="absolute -bottom-[25%] left-[20%] h-[60%] w-[60%] rounded-full bg-cyan-500/15 blur-[120px] animate-aurora"
          style={{ animationDelay: "-12s", animationDuration: "26s" }}
        />
        {/* faint grid for depth */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#0a0a0a]" />
      </div>

      {/* Mouse-following spotlight */}
      {!prefersReducedMotion && (
        <m.div
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -ml-[260px] -mt-[260px] h-[520px] w-[520px] rounded-full blur-[90px]"
          style={{
            background:
              "radial-gradient(circle, rgba(236,72,153,0.22), rgba(139,92,246,0.14) 45%, transparent 70%)",
            x: spotX,
            y: spotY,
          }}
          aria-hidden="true"
        />
      )}

      {mounted && <ParticleField />}

      {/* Developer desk scene — only when the viewport is tall enough that it sits below the social links */}
      <div className="hidden [@media(min-width:768px)_and_(min-height:880px)]:block absolute inset-0 z-[2]" aria-hidden="true">
        {mounted && <DeveloperScene parallax={parallax} />}
      </div>

      {/* Floating UI panels — only where there's room beside the headline (measured, see desk breakpoint) */}
      {mounted && (
      <div className="hidden xl:block absolute inset-0 z-[3]" aria-hidden="true">
        <CodeWindow className="hidden desk:block absolute top-[15%] left-[5%] 2xl:left-[7%]" delay={0.3} parallax={parallax} depth={9} />
        <TerminalWindow className="hidden desk:block absolute top-[17%] right-[5%] 2xl:right-[7%]" delay={0.5} parallax={parallax} depth={11} />

        <TechBadge label="React" glyph={<ReactGlyph className="h-full w-full" />} color="#06b6d4" className="absolute top-[42%] left-[3%] 2xl:left-[4%]" delay={0.7} parallax={parallax} depth={15} />
        <TechBadge label="Next.js" glyph={<NextGlyph className="h-full w-full" />} color="#ffffff" className="absolute top-[52%] left-[6%] 2xl:left-[9%]" delay={0.85} parallax={parallax} depth={12} />
        <TechBadge label="Open Source" glyph={<GitGlyph className="h-full w-full" />} color="#ec4899" className="absolute top-[62%] left-[3%] 2xl:left-[5%]" delay={1.05} parallax={parallax} depth={10} />
        <TechBadge label="TypeScript" glyph={<TSGlyph className="h-full w-full" />} color="#8b5cf6" className="absolute top-[42%] right-[3%] 2xl:right-[4%]" delay={0.75} parallax={parallax} depth={15} />
        <TechBadge label="Node.js" glyph={<NodeGlyph className="h-full w-full" />} color="#06b6d4" className="absolute top-[52%] right-[6%] 2xl:right-[9%]" delay={0.9} parallax={parallax} depth={12} />
        <TechBadge label="JavaScript" glyph={<JSGlyph className="h-full w-full" />} color="#f7df1e" className="absolute top-[62%] right-[3%] 2xl:right-[5%]" delay={1} parallax={parallax} depth={10} />

        <StatCard label="Core Web Vitals" value="+30%" bars={[35, 50, 62, 78, 95]} color="#06b6d4" className="absolute bottom-[9%] left-[4%] 2xl:left-[6%]" delay={1} parallax={parallax} depth={9} />
        <StatCard label="Page Load Time" value="−2.5s" bars={[95, 80, 62, 45, 30]} color="#ec4899" className="absolute bottom-[9%] right-[4%] 2xl:right-[6%]" delay={1.15} parallax={parallax} depth={9} />
      </div>
      )}

      {/* Centered hero content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
        <m.div
          {...fadeUp(0)}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-purple-100 text-sm font-medium mb-7 shadow-[0_0_30px_rgba(139,92,246,0.15)]"
        >
          <Sparkles size={16} className="text-pink-400" aria-hidden="true" />
          <span>Building Scalable Web Apps</span>
        </m.div>

        <m.p {...fadeUp(0.08)} className="text-lg sm:text-xl text-white/55 font-light tracking-wide mb-2">
          Hello, I'm
        </m.p>

        <m.h1
          {...fadeUp(0.14)}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05] pb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-[length:200%_auto] animate-gradient-shift mb-4"
        >
          Razan Aboushi
        </m.h1>

        <m.div {...fadeUp(0.24)} className="flex min-h-[3.75rem] sm:min-h-[2.25rem] items-center justify-center mb-5">
          <RotatingTitle />
        </m.div>

        <m.p {...fadeUp(0.32)} className="text-base sm:text-lg text-white/60 max-w-2xl leading-relaxed mb-10">
          Full Stack Engineer crafting scalable, high-performance web experiences with React, Next.js, TypeScript,
          and Node.js — obsessed with clean architecture, Core Web Vitals, and interfaces that feel as good as they look.
        </m.p>

        <m.div {...fadeUp(0.4)} className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-10 w-full sm:w-auto">
          <m.a
            href="#projects"
            whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(236,72,153,0.45)" }}
            whileTap={{ scale: 0.97 }}
            className="shimmer group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 shadow-[0_0_25px_rgba(139,92,246,0.35)]"
          >
            View Projects
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </m.a>
          <m.a
            href={RESUME_URL}
            download={RESUME_FILE}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white bg-white/5 border border-white/15 backdrop-blur-md hover:bg-white/10 transition-colors"
          >
            Download Resume
            <Download size={18} aria-hidden="true" />
          </m.a>
          <m.a
            href={`mailto:${CONTACT_EMAIL}`}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white/90 border border-white/15 hover:bg-white/5 transition-colors"
          >
            Contact Me
            <Mail size={18} aria-hidden="true" />
          </m.a>
        </m.div>

        <m.div {...fadeUp(0.5)}>
          <SocialIconLinks />
        </m.div>
      </div>

      <a
        href="#skills"
        aria-label="Scroll to skills"
        className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 rounded-full p-2 text-white/40 transition-colors hover:text-white"
      >
        <ChevronDown size={22} className="motion-safe:animate-bounce" aria-hidden="true" />
      </a>
    </section>
  );
}
