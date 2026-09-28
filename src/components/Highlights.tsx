import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import Reveal, { staggerDelay } from "./ui/Reveal";
import { npmData } from "./npmPackages";

const STATS = [
  { value: 3, suffix: "+", label: "Years building production web apps" },
  { value: 30, suffix: "%+", label: "Core Web Vitals improvement" },
  { value: npmData.length, suffix: "", label: "Open-source NPM packages" },
  { value: 39, suffix: "+", label: "Projects on GitHub" },
];

const TECH = [
  "React", "Next.js", "TypeScript", "JavaScript", "Node.js", "Express", "Tailwind CSS", "Zustand",
  "MySQL", "Firebase", "REST APIs", "Git", "GitHub Actions", "Webpack", "Figma", "Core Web Vitals", "SEO",
];

const DOT_COLORS = ["bg-pink-400", "bg-purple-400", "bg-cyan-400"];

/** Counts up once when scrolled into view; screen readers get the final value only. */
function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const prefersReducedMotion = useReducedMotion();
  const [current, setCurrent] = useState(prefersReducedMotion ? to : 0);

  useEffect(() => {
    if (!inView) return;
    if (prefersReducedMotion) {
      setCurrent(to);
      return;
    }
    const duration = 1400;
    const start = performance.now();
    let frame = 0;
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCurrent(Math.round((1 - Math.pow(1 - progress, 3)) * to));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, prefersReducedMotion, to]);

  return (
    <>
      <span className="sr-only">{`${to}${suffix}`}</span>
      <span ref={ref} aria-hidden="true" className="tabular-nums">
        {current}
        {suffix}
      </span>
    </>
  );
}

function TechList({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center gap-3 pr-3" aria-hidden={hidden || undefined}>
      {TECH.map((tech, i) => (
        <li
          key={tech}
          className="flex items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-gray-300"
        >
          <span className={`h-1.5 w-1.5 rounded-full ${DOT_COLORS[i % DOT_COLORS.length]}`} aria-hidden="true" />
          {tech}
        </li>
      ))}
    </ul>
  );
}

export default function Highlights() {
  return (
    <section aria-label="Highlights" className="relative bg-[#0a0a0a] pt-10 pb-4 md:pt-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {STATS.map((stat, index) => (
            <Reveal key={stat.label} delay={staggerDelay(index)} className="h-full">
              <div className="spotlight group h-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-6 md:p-7 text-center transition-colors duration-300 hover:bg-white/[0.05]">
                <p className="mb-2 text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
                  <CountUp to={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-xs md:text-sm leading-snug text-gray-400">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Endless tech ticker — pauses on hover; the second copy makes the loop seamless */}
      <Reveal className="mt-12 md:mt-16">
        <div
          className="group relative overflow-hidden py-2"
          style={{
            WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
            <TechList />
            <TechList hidden />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
