import { m, useTransform, MotionValue } from "framer-motion";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import { ReactNode } from "react";

export interface Parallax {
  x: MotionValue<number>;
  y: MotionValue<number>;
}

/* ---------- Minimal brand glyphs (hand-drawn, no external icon deps) ---------- */

export function ReactGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <circle cx="12" cy="12" r="2.2" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1.4">
        <ellipse cx="12" cy="12" rx="10" ry="4.2" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
      </g>
    </svg>
  );
}

export function NextGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="9.5" />
      <path d="M8.5 8v8" strokeLinecap="round" />
      <path d="M8.5 8l7.2 8.6" strokeLinecap="round" />
      <path d="M15.4 8v6.2" strokeLinecap="round" />
    </svg>
  );
}

export function TSGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M8 9.5h4M10 9.5v6" />
      <path d="M15 15.2c.3.4.9.7 1.6.7.9 0 1.6-.4 1.6-1.1 0-1.6-3.1-.9-3.1-2.8 0-.8.7-1.3 1.6-1.3.7 0 1.2.2 1.5.6" />
    </svg>
  );
}

export function JSGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M10 8.5v6c0 1.2-.7 1.7-1.6 1.7S7 15.7 7 15" />
      <path d="M13.3 15.2c.3.4.9.7 1.6.7.9 0 1.6-.4 1.6-1.1 0-1.6-3.1-.9-3.1-2.8 0-.8.7-1.3 1.6-1.3.7 0 1.2.2 1.5.6" />
    </svg>
  );
}

export function NodeGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
      <path d="M12 2.5l8 4.6v9.8l-8 4.6-8-4.6V7.1z" />
      <path d="M9 12.2c0-1.4 3-1.2 3-2.6 0-.7-.6-1.1-1.4-1.1s-1.4.4-1.5 1" strokeLinecap="round" />
    </svg>
  );
}

export function GitGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="7" cy="6" r="2" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="12" r="2" />
      <path d="M7 8v8" />
      <path d="M7 12c0-2.5 2-4 5-4h3" />
    </svg>
  );
}

/* ---------- Glass panel shell ---------- */

interface GlassPanelProps {
  children: ReactNode;
  /** Applied to the outer, positioned wrapper (absolute/top/left/width classes). */
  className?: string;
  /** Applied to the inner visual card (layout classes like flex/padding for its content). */
  contentClassName?: string;
  delay?: number;
  floatDuration?: number;
  parallax?: Parallax;
  depth?: number;
}

export function GlassPanel({
  children,
  className = "",
  contentClassName = "",
  delay = 0,
  floatDuration = 7,
  parallax,
  depth = 7,
}: GlassPanelProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const noParallax = useTransform(() => 0);
  const px = useTransform(parallax ? parallax.x : noParallax, (v) => v * depth);
  const py = useTransform(parallax ? parallax.y : noParallax, (v) => v * depth);

  return (
    <m.div
      className={className}
      style={parallax && !prefersReducedMotion ? { x: px, y: py } : undefined}
    >
      <m.div
        className={`overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.03] shadow-[0_8px_32px_rgba(0,0,0,0.35)] ${contentClassName}`}
        initial={{ opacity: 0, y: 24, scale: 0.94 }}
        animate={
          prefersReducedMotion
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 1, y: [0, -10, 0], scale: 1 }
        }
        transition={
          prefersReducedMotion
            ? { duration: 0.6, delay }
            : {
                opacity: { duration: 0.6, delay },
                scale: { duration: 0.6, delay },
                y: { duration: floatDuration, delay, repeat: Infinity, ease: "easeInOut" },
              }
        }
      >
        {children}
      </m.div>
    </m.div>
  );
}

/* ---------- Code editor style window ---------- */

interface CodeLine {
  segments: { text: string; className: string }[];
}

const CODE_LINES: CodeLine[] = [
  { segments: [{ text: "const", className: "text-pink-400" }, { text: " Portfolio", className: "text-cyan-300" }, { text: " = () => {", className: "text-white/70" }] },
  { segments: [{ text: "  return", className: "text-pink-400" }, { text: " (", className: "text-white/70" }] },
  { segments: [{ text: "    <Hero", className: "text-cyan-300" }, { text: " premium", className: "text-purple-300" }, { text: " />", className: "text-cyan-300" }] },
  { segments: [{ text: "  );", className: "text-white/70" }] },
  { segments: [{ text: "};", className: "text-white/70" }] },
];

interface FloatingWindowProps {
  className?: string;
  delay?: number;
  parallax?: Parallax;
  depth?: number;
}

export function CodeWindow({ className = "", delay = 0, parallax, depth = 9 }: FloatingWindowProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <GlassPanel
      className={`w-64 sm:w-72 ${className}`}
      delay={delay}
      floatDuration={8}
      parallax={parallax}
      depth={depth}
    >
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.03] px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 text-[11px] text-white/40 font-mono">Hero.tsx</span>
      </div>
      <div className="p-3.5 font-mono text-[11px] leading-relaxed">
        {CODE_LINES.map((line, i) => (
          <m.div
            key={i}
            className="whitespace-pre overflow-hidden"
            initial={{ opacity: 0 }}
            animate={prefersReducedMotion ? { opacity: 1 } : { opacity: [0, 1, 1, 0] }}
            transition={
              prefersReducedMotion
                ? { duration: 0.4, delay: delay + i * 0.15 }
                : {
                    duration: 6 + i * 0.6,
                    times: [0, 0.08, 0.85, 1],
                    delay: delay + i * 0.35,
                    repeat: Infinity,
                    repeatDelay: 0.4,
                    ease: "easeInOut",
                  }
            }
          >
            {line.segments.map((seg, j) => (
              <span key={j} className={seg.className}>
                {seg.text}
              </span>
            ))}
          </m.div>
        ))}
      </div>
    </GlassPanel>
  );
}

/* ---------- Terminal style window ---------- */

const TERMINAL_LINES = [
  { prompt: "$", text: "npm run build", color: "text-white/60" },
  { prompt: "✓", text: "Compiled successfully", color: "text-emerald-400" },
  { prompt: "$", text: "git commit -m \"ship it\"", color: "text-white/60" },
  { prompt: "✓", text: "Core Web Vitals +30%", color: "text-cyan-300" },
];

export function TerminalWindow({ className = "", delay = 0, parallax, depth = 11 }: FloatingWindowProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <GlassPanel
      className={`w-60 sm:w-64 ${className}`}
      delay={delay}
      floatDuration={9}
      parallax={parallax}
      depth={depth}
    >
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.03] px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 text-[11px] text-white/40 font-mono">terminal</span>
      </div>
      <div className="p-3.5 font-mono text-[11px] leading-relaxed space-y-1.5">
        {TERMINAL_LINES.map((line, i) => (
          <m.div
            key={i}
            initial={{ opacity: 0 }}
            animate={prefersReducedMotion ? { opacity: 1 } : { opacity: [0, 1, 1, 0] }}
            transition={
              prefersReducedMotion
                ? { duration: 0.4, delay: delay + i * 0.2 }
                : {
                    duration: 7 + i * 0.7,
                    times: [0, 0.06, 0.88, 1],
                    delay: delay + i * 0.4,
                    repeat: Infinity,
                    repeatDelay: 0.4,
                    ease: "easeInOut",
                  }
            }
          >
            <span className="text-purple-400">{line.prompt}</span>{" "}
            <span className={line.color}>{line.text}</span>
          </m.div>
        ))}
      </div>
    </GlassPanel>
  );
}

/* ---------- Small floating tech badge ---------- */

interface TechBadgeProps {
  label: string;
  glyph: ReactNode;
  color: string;
  className?: string;
  delay?: number;
  parallax?: Parallax;
  depth?: number;
}

export function TechBadge({ label, glyph, color, className = "", delay = 0, parallax, depth = 13 }: TechBadgeProps) {
  return (
    <GlassPanel
      className={className}
      contentClassName="px-3.5 py-2 flex items-center gap-2"
      delay={delay}
      floatDuration={6}
      parallax={parallax}
      depth={depth}
    >
      <span style={{ color }} className="inline-flex h-4 w-4 shrink-0">
        {glyph}
      </span>
      <span className="text-xs font-medium text-white/80 whitespace-nowrap">{label}</span>
    </GlassPanel>
  );
}

/* ---------- Performance / SEO stat card ---------- */

interface StatCardProps {
  label: string;
  value: string;
  bars: number[];
  color: string;
  className?: string;
  delay?: number;
  parallax?: Parallax;
  depth?: number;
}

export function StatCard({ label, value, bars, color, className = "", delay = 0, parallax, depth = 10 }: StatCardProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <GlassPanel
      className={`w-40 ${className}`}
      contentClassName="px-4 py-3"
      delay={delay}
      floatDuration={7.5}
      parallax={parallax}
      depth={depth}
    >
      <p className="text-[10px] uppercase tracking-wider text-white/40 mb-1">{label}</p>
      <p className="text-xl font-bold text-white mb-2">{value}</p>
      <div className="flex items-end gap-1 h-6">
        {bars.map((h, i) => (
          <m.span
            key={i}
            className="flex-1 rounded-sm"
            style={{ background: color }}
            initial={{ height: 0, opacity: 0.5 }}
            animate={{ height: `${h}%`, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: prefersReducedMotion ? delay : delay + i * 0.08,
              ease: "easeOut",
            }}
          />
        ))}
      </div>
    </GlassPanel>
  );
}
