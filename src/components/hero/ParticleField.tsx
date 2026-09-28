import { useMemo } from "react";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

interface Particle {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
  drift: number;
}

const COLORS = ["#ec4899", "#8b5cf6", "#06b6d4"];

/** Small seeded PRNG (mulberry32): the build-time HTML and the browser must pick identical positions to hydrate. */
function seededRandom(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const round = (n: number) => Math.round(n * 100) / 100;

function makeParticles(count: number): Particle[] {
  const random = seededRandom(2023);
  return Array.from({ length: count }, (_, id) => ({
    id,
    left: round(random() * 100),
    size: round(2 + random() * 3),
    duration: round(14 + random() * 16),
    delay: round(-random() * 20),
    color: COLORS[id % COLORS.length],
    drift: round((random() - 0.5) * 60),
  }));
}

export default function ParticleField({ count = 34 }: { count?: number }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const particles = useMemo(() => makeParticles(count), [count]);

  if (prefersReducedMotion) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full animate-particle-drift"
          style={
            {
              left: `${p.left}%`,
              bottom: "-5%",
              width: p.size,
              height: p.size,
              background: p.color,
              opacity: 0.5,
              boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              "--drift-x": `${p.drift}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
