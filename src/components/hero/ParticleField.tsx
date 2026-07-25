import { useMemo } from "react";
import { useReducedMotion } from "framer-motion";

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

function makeParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, id) => ({
    id,
    left: Math.random() * 100,
    size: 2 + Math.random() * 3,
    duration: 14 + Math.random() * 16,
    delay: -Math.random() * 20,
    color: COLORS[id % COLORS.length],
    drift: (Math.random() - 0.5) * 60,
  }));
}

export default function ParticleField({ count = 34 }: { count?: number }) {
  const prefersReducedMotion = useReducedMotion();
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
