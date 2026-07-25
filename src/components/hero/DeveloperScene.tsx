import { motion, useReducedMotion, useTransform } from "framer-motion";
import { Parallax } from "./FloatingPanels";

interface MonitorProps {
  className?: string;
  rotateY?: number;
  delay?: number;
  variant: "editor" | "terminal" | "preview";
}

function MiniCodeLines({ variant }: { variant: MonitorProps["variant"] }) {
  const prefersReducedMotion = useReducedMotion();
  const rows =
    variant === "editor"
      ? [
          { w: "70%", c: "bg-pink-400/60" },
          { w: "45%", c: "bg-cyan-300/50" },
          { w: "85%", c: "bg-purple-300/50" },
          { w: "55%", c: "bg-white/30" },
          { w: "65%", c: "bg-cyan-300/50" },
        ]
      : variant === "terminal"
      ? [
          { w: "40%", c: "bg-emerald-400/60" },
          { w: "60%", c: "bg-white/30" },
          { w: "35%", c: "bg-cyan-300/50" },
          { w: "50%", c: "bg-emerald-400/60" },
        ]
      : [
          { w: "90%", c: "bg-purple-300/40" },
          { w: "75%", c: "bg-pink-300/40" },
          { w: "80%", c: "bg-cyan-300/40" },
        ];

  return (
    <div className="flex flex-col gap-1.5 p-3">
      {rows.map((row, i) => (
        <motion.div
          key={i}
          className={`h-1.5 rounded-full ${row.c}`}
          initial={{ width: 0, opacity: 0 }}
          animate={
            prefersReducedMotion
              ? { width: row.w, opacity: 1 }
              : { width: [0, row.w, row.w, "0%"], opacity: [0, 1, 1, 0] }
          }
          transition={
            prefersReducedMotion
              ? { duration: 0.5, delay: i * 0.1 }
              : {
                  duration: 4.5 + i * 0.5,
                  times: [0, 0.25, 0.8, 1],
                  delay: i * 0.5,
                  repeat: Infinity,
                  repeatDelay: 0.4,
                  ease: "easeInOut",
                }
          }
        />
      ))}
    </div>
  );
}

function Monitor({ className = "", rotateY = 0, delay = 0, variant }: MonitorProps) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.div
      className={`absolute rounded-xl border border-white/10 bg-white/[0.05] backdrop-blur-xl shadow-[0_0_50px_rgba(139,92,246,0.15)] overflow-hidden ${className}`}
      style={{ transformPerspective: 900, rotateY }}
      initial={{ opacity: 0, y: 30 }}
      animate={
        prefersReducedMotion
          ? { opacity: 1, y: 0 }
          : { opacity: 1, y: [0, -6, 0] }
      }
      transition={
        prefersReducedMotion
          ? { duration: 0.7, delay }
          : { opacity: { duration: 0.7, delay }, y: { duration: 8, delay, repeat: Infinity, ease: "easeInOut" } }
      }
    >
      <div className="flex items-center gap-1 border-b border-white/10 px-2.5 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-pink-400/70" />
        <span className="h-1.5 w-1.5 rounded-full bg-purple-400/70" />
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/70" />
      </div>
      <MiniCodeLines variant={variant} />
    </motion.div>
  );
}

/** Open laptop sitting on the desk, closest to the viewer — screen mirrors the
 * glass-monitor style so it reads as "the same desk", not a separate object. */
function Laptop({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <div className={`absolute ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={
          prefersReducedMotion
            ? { opacity: 1, y: 0 }
            : { opacity: 1, y: [0, -5, 0] }
        }
        transition={
          prefersReducedMotion
            ? { duration: 0.7, delay }
            : { opacity: { duration: 0.7, delay }, y: { duration: 7, delay, repeat: Infinity, ease: "easeInOut" } }
        }
      >
        <div className="w-full aspect-[4/3] rounded-t-lg border border-white/10 bg-white/[0.05] backdrop-blur-xl shadow-[0_0_40px_rgba(139,92,246,0.15)] overflow-hidden">
          <MiniCodeLines variant="editor" />
        </div>
        <div
          className="h-2.5 w-full border border-t-0 border-white/10 bg-gradient-to-b from-white/10 to-white/[0.02]"
          style={{ clipPath: "polygon(8% 0, 92% 0, 100% 100%, 0% 100%)" }}
        />
        <div className="absolute -bottom-1 left-1/2 h-0.5 w-2/3 -translate-x-1/2 rounded-full bg-cyan-300/70 blur-[2px] animate-glow-breathe" />
      </motion.div>
    </div>
  );
}

/** Coffee mug with slowly rising steam — a small, unmistakably "desk" detail. */
function CoffeeMug({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  const prefersReducedMotion = useReducedMotion();
  const steamPaths = [
    "M22 30 C18 24, 26 20, 22 14",
    "M30 30 C26 24, 34 20, 30 14",
  ];

  return (
    <motion.svg
      viewBox="0 0 60 60"
      className={`absolute ${className}`}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="mugGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <path
        d="M14 22h24v16a8 8 0 0 1-8 8H22a8 8 0 0 1-8-8V22z"
        fill="rgba(255,255,255,0.05)"
        stroke="url(#mugGrad)"
        strokeWidth="2"
        strokeOpacity="0.7"
      />
      <path
        d="M38 26h3a5.5 5.5 0 0 1 0 11h-3"
        fill="none"
        stroke="url(#mugGrad)"
        strokeWidth="2"
        strokeOpacity="0.7"
      />
      {!prefersReducedMotion &&
        steamPaths.map((d, i) => (
          <motion.path
            key={i}
            d={d}
            fill="none"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: [0, 0.6, 0], y: [4, -6, -12] }}
            transition={{ duration: 3.5, delay: delay + i * 1.1, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
    </motion.svg>
  );
}

interface DeveloperSceneProps {
  parallax?: Parallax;
  className?: string;
}

export default function DeveloperScene({ parallax, className = "" }: DeveloperSceneProps) {
  const prefersReducedMotion = useReducedMotion();
  const noParallax = useTransform(() => 0);
  const sceneX = useTransform(parallax ? parallax.x : noParallax, (v) => v * 4);
  const sceneY = useTransform(parallax ? parallax.y : noParallax, (v) => v * 4);

  return (
    <motion.div
      className={`pointer-events-none absolute inset-x-0 bottom-0 h-[32%] sm:h-[36%] flex items-end justify-center opacity-70 ${className}`}
      style={{
        WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 45%)",
        maskImage: "linear-gradient(to bottom, transparent 0%, black 45%)",
        ...(parallax && !prefersReducedMotion ? { x: sceneX, y: sceneY } : {}),
      }}
      aria-hidden="true"
    >
      {/* ambient desk glow */}
      <div className="absolute bottom-0 h-32 w-[60%] max-w-md rounded-full bg-gradient-to-t from-purple-600/20 via-pink-500/10 to-transparent blur-3xl animate-glow-breathe" />

      {/* keyboard light bar */}
      <div className="absolute bottom-4 h-1 w-32 sm:w-44 rounded-full bg-gradient-to-r from-pink-500/0 via-cyan-300/70 to-purple-500/0 blur-[2px] animate-glow-breathe" />

      {/* side monitors */}
      <Monitor
        variant="terminal"
        className="bottom-10 left-[10%] sm:left-[16%] w-20 sm:w-28 h-14 sm:h-20"
        rotateY={22}
        delay={0.2}
      />
      <Monitor
        variant="preview"
        className="bottom-10 right-[10%] sm:right-[16%] w-20 sm:w-28 h-14 sm:h-20"
        rotateY={-22}
        delay={0.4}
      />

      {/* center curved monitor */}
      <Monitor
        variant="editor"
        className="bottom-14 sm:bottom-16 w-32 sm:w-40 h-20 sm:h-24"
        delay={0}
      />

      {/* laptop, closest to the viewer on the desk */}
      <Laptop className="bottom-[-2%] left-1/2 -translate-x-1/2 w-24 sm:w-28" delay={0.5} />

      {/* coffee mug beside it */}
      <CoffeeMug className="bottom-2 left-[36%] sm:left-[38%] w-9 sm:w-10 opacity-70" delay={0.7} />
    </motion.div>
  );
}
