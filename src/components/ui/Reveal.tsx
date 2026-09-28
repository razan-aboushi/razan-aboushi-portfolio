import { ReactNode } from "react";
import { m } from "framer-motion";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/** Fades content up once as it scrolls into view. Renders a plain div for reduced-motion users. */
export default function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </m.div>
  );
}

/** Stagger helper for grids: small per-item delay, capped so long lists don't lag. */
export const staggerDelay = (index: number) => Math.min(index, 5) * 0.08;
