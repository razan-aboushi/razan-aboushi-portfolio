import { useEffect, useRef } from "react";
import { useMotionValue, useSpring, useReducedMotion, MotionValue } from "framer-motion";

interface ParallaxValues {
  x: MotionValue<number>;
  y: MotionValue<number>;
  prefersReducedMotion: boolean;
}

/**
 * Tracks normalized mouse position (-0.5 to 0.5 on each axis) relative to a
 * container and exposes it as spring-smoothed motion values. Consumers scale
 * these by their own depth factor for a parallax effect. Uses motion values
 * (not React state) so mousemove never triggers a re-render.
 */
export function useMouseParallax(containerRef: React.RefObject<HTMLElement | null>): ParallaxValues {
  const prefersReducedMotion = useReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 60, damping: 20, mass: 0.5 });
  const y = useSpring(rawY, { stiffness: 60, damping: 20, mass: 0.5 });
  const frame = useRef<number | null>(null);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const node = containerRef.current;
    if (!node) return;

    const handlePointerMove = (e: PointerEvent) => {
      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        const rect = node.getBoundingClientRect();
        const nx = (e.clientX - rect.left) / rect.width - 0.5;
        const ny = (e.clientY - rect.top) / rect.height - 0.5;
        rawX.set(nx);
        rawY.set(ny);
      });
    };

    node.addEventListener("pointermove", handlePointerMove);
    return () => {
      node.removeEventListener("pointermove", handlePointerMove);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [containerRef, prefersReducedMotion, rawX, rawY]);

  return { x, y, prefersReducedMotion: !!prefersReducedMotion };
}
