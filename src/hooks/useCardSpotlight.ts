import { useEffect } from "react";

/**
 * One delegated pointer listener for every `.spotlight` card on the page: it writes the pointer
 * position into --x / --y on the hovered card, which the card's CSS glow reads. No React state,
 * so moving the mouse never re-renders anything.
 */
export function useCardSpotlight() {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover)").matches) return;

    const onPointerMove = (e: PointerEvent) => {
      const card = (e.target as Element | null)?.closest<HTMLElement>(".spotlight");
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--x", `${e.clientX - rect.left}px`);
      card.style.setProperty("--y", `${e.clientY - rect.top}px`);
    };

    document.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => document.removeEventListener("pointermove", onPointerMove);
  }, []);
}
