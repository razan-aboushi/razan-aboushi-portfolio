import { useEffect, useState } from "react";

/**
 * False during the build-time pre-render and the first (hydrating) client render, true right after.
 * Used to keep purely decorative, aria-hidden layers out of the served HTML so crawlers get a lean
 * DOM, while visitors still see them — they mount a frame later and fade in as before.
 */
export function useHasMounted(): boolean {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}
