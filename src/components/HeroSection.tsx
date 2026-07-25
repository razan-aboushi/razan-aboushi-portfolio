import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Download, Mail, Sparkles, ChevronDown } from "lucide-react";
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

const SOCIAL_LINKS = {
  github: "https://github.com/razan-aboushi",
  linkedin: "https://www.linkedin.com/in/razan-aboushi/",
  medium: "https://medium.com/@razanalqaddoumi",
  email: "razanalqaddoumi@gmail.com",
  npm: "https://www.npmjs.com/~razan_aboushi",
};

export default function HeroSection() {
  const containerRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { x, y } = useMouseParallax(containerRef);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-navy"
    >
      {/* Base gradient mesh */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-navy" />
        <div
          className="absolute inset-0 opacity-90 bg-[length:200%_200%] animate-gradient-shift"
          style={{
            backgroundImage:
              "radial-gradient(45% 55% at 18% 20%, rgba(139,92,246,0.22), transparent 60%)," +
              "radial-gradient(45% 55% at 85% 15%, rgba(236,72,153,0.18), transparent 60%)," +
              "radial-gradient(55% 65% at 50% 100%, rgba(6,182,212,0.16), transparent 60%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]" />
      </div>

      {/* Mouse-following spotlight */}
      {!prefersReducedMotion && (
        <motion.div
          className="pointer-events-none absolute -z-10 h-[520px] w-[520px] rounded-full blur-[100px]"
          style={{
            background:
              "radial-gradient(circle, rgba(236,72,153,0.14), rgba(139,92,246,0.1) 45%, transparent 70%)",
            left: "50%",
            top: "50%",
            translateX: "-50%",
            translateY: "-50%",
            x,
            y,
          }}
        />
      )}

      <ParticleField />

      {/* Developer scene: desk, monitors, silhouette — desktop only to keep mobile fast & uncluttered */}
      <div className="hidden md:block absolute inset-0 z-[2]" aria-hidden="true">
        <DeveloperScene parallax={{ x, y }} />
      </div>

      {/* Floating premium UI panels — large screens only */}
      <div className="hidden lg:block absolute inset-0 z-[3]" aria-hidden="true">
        <CodeWindow className="absolute top-[14%] left-[4%] xl:left-[7%]" delay={0.3} parallax={{ x, y }} depth={16} />
        <TerminalWindow className="absolute top-[16%] right-[4%] xl:right-[7%]" delay={0.5} parallax={{ x, y }} depth={20} />

        <TechBadge label="React" glyph={<ReactGlyph className="h-full w-full" />} color="#06b6d4" className="absolute top-[42%] left-[2%] xl:left-[4%]" delay={0.7} parallax={{ x, y }} depth={30} />
        <TechBadge label="Next.js" glyph={<NextGlyph className="h-full w-full" />} color="#ffffff" className="absolute top-[52%] left-[7%] xl:left-[10%]" delay={0.85} parallax={{ x, y }} depth={24} />
        <TechBadge label="TypeScript" glyph={<TSGlyph className="h-full w-full" />} color="#8b5cf6" className="absolute top-[42%] right-[2%] xl:right-[4%]" delay={0.75} parallax={{ x, y }} depth={30} />
        <TechBadge label="Node.js" glyph={<NodeGlyph className="h-full w-full" />} color="#06b6d4" className="absolute top-[52%] right-[7%] xl:right-[10%]" delay={0.9} parallax={{ x, y }} depth={24} />
        <TechBadge label="JavaScript" glyph={<JSGlyph className="h-full w-full" />} color="#f7df1e" className="absolute bottom-[30%] right-[10%] xl:right-[13%]" delay={1} parallax={{ x, y }} depth={20} />
        <TechBadge label="Open Source" glyph={<GitGlyph className="h-full w-full" />} color="#ec4899" className="absolute bottom-[30%] left-[10%] xl:left-[13%]" delay={1.05} parallax={{ x, y }} depth={20} />

        <StatCard label="Core Web Vitals" value="98/100" bars={[60, 80, 95, 70, 90]} color="#06b6d4" className="absolute bottom-[10%] left-[4%] xl:left-[6%]" delay={1} parallax={{ x, y }} depth={18} />
        <StatCard label="Lighthouse Perf" value="96%" bars={[75, 85, 92, 88, 96]} color="#ec4899" className="absolute bottom-[10%] right-[4%] xl:right-[6%]" delay={1.15} parallax={{ x, y }} depth={18} />
      </div>

      {/* Centered hero content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-purple-200 text-sm font-medium mb-8 shadow-[0_0_30px_rgba(139,92,246,0.15)]"
        >
          <Sparkles size={16} className="text-pink-400" />
          <span>Building Scalable Web Apps</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg sm:text-xl text-white/50 font-light tracking-wide mb-2"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-[length:200%_auto] animate-gradient-shift mb-5"
        >
          Razan Aboushi
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="h-8 mb-6"
        >
          <RotatingTitle />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base sm:text-lg text-white/50 max-w-2xl leading-relaxed mb-10"
        >
          Crafting scalable, high-performance web experiences with React, Next.js, TypeScript, and Node.js —
          obsessed with clean architecture, Core Web Vitals, and interfaces that feel as good as they look.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(236,72,153,0.4)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 shadow-[0_0_25px_rgba(139,92,246,0.35)] transition-shadow"
          >
            View Projects
          </motion.a>
          <motion.a
            href="/Razan_Aboushi_Full_Stack_Engineer_CV.pdf"
            download="Razan_Aboushi_Full_Stack_Engineer_CV.pdf"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white bg-white/5 border border-white/15 backdrop-blur-md hover:bg-white/10 transition-colors"
          >
            Download Resume
            <Download size={18} />
          </motion.a>
          <motion.a
            href={`mailto:${SOCIAL_LINKS.email}`}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white/90 border border-white/15 hover:bg-white/5 transition-colors"
          >
            Contact Me
            <Mail size={18} />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center gap-5 text-white/60"
        >
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md hover:text-white hover:bg-white/10 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md hover:text-[#0a66c2] hover:bg-white hover:scale-110 hover:shadow-[0_0_20px_rgba(10,102,194,0.3)] transition-all flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect width="4" height="12" x="2" y="9"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a
            href={SOCIAL_LINKS.medium}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Medium"
            className="p-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md hover:text-black hover:bg-white hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all flex items-center justify-center"
          >
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M71.5 142.3c.6-5.9-1.7-11.8-6.1-15.8L20.3 72.1V64h140.2l108.4 237.7L364.2 64h133.7v8.1l-38.6 37c-3.3 2.5-5 6.7-4.3 10.8v272c-.7 4.1 1 8.3 4.3 10.8l37.7 37v8.1H307.3v-8.1l39.1-37.9c3.8-3.8 3.8-5 3.8-10.8V171.2L241.5 447.1h-14.7L100.4 171.2v184.9c-1.1 7.8 1.5 15.6 7 21.2l50.8 61.6v8.1h-144v-8L65 377.3c5.4-5.6 7.9-13.5 6.5-21.2V142.3z"></path>
            </svg>
          </a>
          <a
            href={SOCIAL_LINKS.npm}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="NPM"
            className="p-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md hover:text-[#cb3837] hover:bg-white hover:scale-110 hover:shadow-[0_0_20px_rgba(203,56,55,0.3)] transition-all flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z" />
            </svg>
          </a>
        </motion.div>
      </div>

      {!prefersReducedMotion && (
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ opacity: { duration: 1, delay: 1.2 }, y: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.2 } }}
          aria-hidden="true"
        >
          <ChevronDown size={22} />
        </motion.div>
      )}
    </section>
  );
}
