import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

const ROLES = [
  "Full Stack Engineer",
  "Performance Engineer",
  "React & Next.js Developer",
  "Open Source Contributor",
  "Technical Writer",
  "Building Fast & Beautiful Web Experiences",
];

const TYPE_SPEED_MS = 45;
const DELETE_SPEED_MS = 25;
const HOLD_MS = 1800;
const PAUSE_MS = 400;

export default function RotatingTitle() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "holding" | "deleting" | "pausing">("typing");

  useEffect(() => {
    if (prefersReducedMotion) {
      setText(ROLES[0]);
      return;
    }
    const current = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), TYPE_SPEED_MS);
      } else {
        timeout = setTimeout(() => setPhase("holding"), HOLD_MS);
      }
    } else if (phase === "holding") {
      timeout = setTimeout(() => setPhase("deleting"), 0);
    } else if (phase === "deleting") {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), DELETE_SPEED_MS);
      } else {
        timeout = setTimeout(() => setPhase("pausing"), PAUSE_MS);
      }
    } else {
      timeout = setTimeout(() => {
        setRoleIndex((i) => (i + 1) % ROLES.length);
        setPhase("typing");
      }, 0);
    }

    return () => clearTimeout(timeout);
  }, [text, phase, roleIndex, prefersReducedMotion]);

  return (
    <>
      <span className="sr-only">{ROLES.join(", ")}</span>
      <span
        aria-hidden="true"
        className="text-lg sm:text-xl md:text-2xl font-medium text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400"
      >
        {text}
        {!prefersReducedMotion && (
          <span className="ml-1 inline-block h-[1.1em] w-[2px] translate-y-[3px] animate-[blink_1s_steps(1)_infinite] bg-cyan-300" />
        )}
      </span>
    </>
  );
}
