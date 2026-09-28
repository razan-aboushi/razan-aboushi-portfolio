import { useEffect, useState } from "react";

/**
 * Like Framer Motion's useReducedMotion, but hydration-safe: the page is pre-rendered at build
 * time, where the visitor's preference is unknown, so the first render always assumes motion
 * and the real preference is applied right after mount (and kept in sync if it changes).
 */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return reduced;
}
