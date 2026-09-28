import {
  ArrowUpRight, CheckCircle2, FileSearch, GitBranch, Globe2, Layers, PenLine, Quote, Radar, ScanSearch, Sparkles,
} from "lucide-react";
import { PointerEvent as ReactPointerEvent, useRef } from "react";
import Reveal from "./ui/Reveal";
import { CountUp } from "./Highlights";
import { publicAsset } from "../utils/publicAsset";

type Overlay = "scan" | "radar";

interface Product {
  badge: string;
  badgeLive?: boolean;
  title: string;
  highlight: string;
  tagline: string;
  features: { icon: typeof Sparkles; text: string }[];
  tech: string[];
  stats: { value: number; suffix: string; label: string }[];
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
  shot: { name: string; alt: string; host: string };
  overlay: Overlay;
  accent: string; // glow color behind the frame
}

const PRODUCTS: Product[] = [
  {
    badge: "Latest launch",
    badgeLive: true,
    title: "SEOLens",
    highlight: "Evidence",
    tagline:
      "An SEO analyzer where every finding carries its proof — the element it came from, the value it read, and the documentation behind the rule.",
    features: [
      { icon: ScanSearch, text: "100+ criteria, each returning its status, the evidence it read, and a primary source" },
      { icon: Layers, text: "Quick single-page audit, or a deep crawl of up to 100 pages that respects robots.txt" },
      { icon: FileSearch, text: "Transparent scoring: every report shows its own arithmetic and coverage" },
      { icon: Quote, text: "No invented data — what it can't measure is marked “unable to verify”, never guessed" },
    ],
    tech: ["Next.js", "TypeScript", "PageSpeed Insights", "Chrome UX Report", "Schema.org"],
    stats: [
      { value: 100, suffix: "+", label: "criteria" },
      { value: 8, suffix: "", label: "categories" },
      { value: 89, suffix: "", label: "primary sources" },
      { value: 100, suffix: "", label: "max pages / crawl" },
    ],
    primary: { label: "Try SEOLens live", href: "https://seolens-psi.vercel.app/" },
    secondary: { label: "View a sample audit", href: "https://seolens-psi.vercel.app/sample" },
    shot: {
      name: "seolens",
      alt: "SEOLens Evidence sample audit: a search-readiness score of 99 out of 100 and 93 passed checks with the evidence behind each finding",
      host: "seolens-psi.vercel.app/sample",
    },
    overlay: "scan",
    accent: "bg-cyan-500/25",
  },
  {
    badge: "Open source",
    title: "Dev",
    highlight: "Radar",
    tagline:
      "A local-first content radar for developers: it ranks what's worth writing about, verifies claims against sources, and drafts LinkedIn posts and Medium articles.",
    features: [
      { icon: Radar, text: "Scans Hacker News, GitHub trending & releases, and official RSS/Atom feeds from Chrome, Go, Deno and more" },
      { icon: CheckCircle2, text: "Ranks each topic by fit for your audience (7 signals) and real interest — upvotes, comments, stars, coverage — with the evidence listed" },
      { icon: PenLine, text: "Generates LinkedIn posts and Medium articles in English or Arabic, ready to copy" },
      { icon: Globe2, text: "No paid APIs; a scheduled GitHub Action publishes a browsable snapshot" },
    ],
    tech: ["TypeScript", "Node.js", "SQLite", "RSS / Atom", "GitHub Actions"],
    stats: [
      { value: 7, suffix: "", label: "fit signals" },
      { value: 2, suffix: "", label: "languages" },
      { value: 2, suffix: "", label: "draft formats" },
      { value: 0, suffix: "", label: "paid APIs" },
    ],
    primary: { label: "Open Dev Radar", href: "https://razan-aboushi.github.io/dev-radar-content-assistant/" },
    secondary: { label: "Source code", href: "https://github.com/razan-aboushi/dev-radar-content-assistant" },
    shot: {
      name: "devradar",
      alt: "Dev Radar daily radar: the top recommended topic with its worth-writing, fit and audience-interest scores",
      host: "razan-aboushi.github.io/dev-radar",
    },
    overlay: "radar",
    accent: "bg-lime-500/20",
  },
];

const SCAN_SECONDS = 4.8; // matches the `scan` / `evidence` animations in tailwind.config.js

const SCAN_CHIPS = [
  { top: 18, label: "score · 99 / 100" },
  { top: 44, label: "evidence · cited" },
  { top: 70, label: "93 checks · passed" },
];

function ScanOverlay() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="absolute inset-x-0 top-0 h-full animate-scan motion-reduce:hidden">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-300 to-transparent shadow-[0_0_18px_3px_rgba(34,211,238,0.55)]" />
        <div className="h-20 w-full bg-gradient-to-b from-cyan-400/15 to-transparent" />
      </div>
      {SCAN_CHIPS.map((chip, index) => (
        <span
          key={chip.label}
          className={`absolute right-3 sm:right-5 ${index === 1 ? "hidden sm:inline-flex" : "inline-flex"} items-center gap-1.5 whitespace-nowrap rounded-full border border-emerald-400/40 bg-[#05130e]/90 px-2.5 py-1 font-mono text-[10px] sm:text-xs text-emerald-300 shadow-lg animate-evidence`}
          style={{ top: `${chip.top}%`, animationDelay: `${(chip.top / 100) * SCAN_SECONDS}s` }}
        >
          <CheckCircle2 size={13} />
          {chip.label}
        </span>
      ))}
    </div>
  );
}

function RadarOverlay() {
  const blips = [
    { top: "28%", left: "62%", delay: "0s" },
    { top: "58%", left: "30%", delay: "1.3s" },
    { top: "40%", left: "44%", delay: "2.4s" },
  ];
  return (
    <div aria-hidden="true" className="pointer-events-none absolute bottom-3 left-3 sm:-bottom-8 sm:-left-8 animate-float">
      <div className="relative h-16 w-16 sm:h-32 sm:w-32 overflow-hidden rounded-full border border-lime-400/40 bg-[#0b1206]/95 shadow-[0_0_40px_rgba(132,204,22,0.35)]">
        <div className="absolute inset-[18%] rounded-full border border-lime-400/20" />
        <div className="absolute inset-[36%] rounded-full border border-lime-400/20" />
        <div className="absolute inset-y-0 left-1/2 w-px bg-lime-400/15" />
        <div className="absolute inset-x-0 top-1/2 h-px bg-lime-400/15" />
        <div
          className="absolute inset-0 animate-[spin_4s_linear_infinite] motion-reduce:animate-none"
          style={{ background: "conic-gradient(from 0deg, rgba(163,230,53,0.55), rgba(163,230,53,0.08) 70deg, transparent 90deg)" }}
        />
        {blips.map((blip) => (
          <span key={blip.left} className="absolute h-2 w-2" style={{ top: blip.top, left: blip.left }}>
            <span className="absolute inset-0 rounded-full bg-lime-300 opacity-75 motion-safe:animate-ping" style={{ animationDelay: blip.delay }} />
            <span className="absolute inset-0 rounded-full bg-lime-300" />
          </span>
        ))}
      </div>
    </div>
  );
}

function RadarChips() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute -top-4 right-4 hidden sm:flex gap-2 animate-float" style={{ animationDelay: "-3s" }}>
      {["Hacker News", "GitHub", "RSS"].map((source) => (
        <span key={source} className="rounded-full border border-white/15 bg-[#0b0b10]/90 px-3 py-1 text-xs font-medium text-gray-200 shadow-lg">
          {source}
        </span>
      ))}
    </div>
  );
}

function ScreenFrame({ product }: { product: Product }) {
  const { name, alt, host } = product.shot;
  const frameRef = useRef<HTMLDivElement>(null);

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    const frame = frameRef.current;
    if (!frame || e.pointerType !== "mouse") return;
    const rect = frame.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    frame.style.setProperty("--ry", `${(px - 0.5) * 9}deg`);
    frame.style.setProperty("--rx", `${(0.5 - py) * 7}deg`);
    frame.style.setProperty("--gx", `${px * 100}%`);
    frame.style.setProperty("--gy", `${py * 100}%`);
  };
  const onPointerLeave = () => {
    frameRef.current?.style.setProperty("--rx", "0deg");
    frameRef.current?.style.setProperty("--ry", "0deg");
  };

  return (
    <div className="group relative [perspective:1400px]" onPointerMove={onPointerMove} onPointerLeave={onPointerLeave}>
      <div aria-hidden="true" className={`pointer-events-none absolute -inset-6 rounded-[2rem] ${product.accent} blur-3xl opacity-60 transition-opacity duration-500 group-hover:opacity-90`} />
      <div
        ref={frameRef}
        className="relative overflow-hidden rounded-2xl p-px transition-transform duration-300 ease-out [transform:rotateX(var(--rx,0deg))_rotateY(var(--ry,0deg))] motion-reduce:[transform:none] [transform-style:preserve-3d]"
      >
        <div
          aria-hidden="true"
          className="absolute -inset-[60%] animate-[spin_12s_linear_infinite] motion-reduce:animate-none"
          style={{ background: "conic-gradient(from 0deg, #ec4899, #8b5cf6, #06b6d4, transparent 40%, transparent 60%, #ec4899)" }}
        />
        <div className="relative overflow-hidden rounded-[calc(1rem-1px)] bg-[#0b0a12]">
          <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-3 min-w-0 truncate rounded-md bg-white/5 px-3 py-1 font-mono text-[11px] text-gray-400">{host}</span>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden">
            <picture>
              <source
                type="image/webp"
                srcSet={`${publicAsset(`projects/${name}-720.webp`)} 720w, ${publicAsset(`projects/${name}-1280.webp`)} 1280w`}
                sizes="(min-width: 1024px) 620px, 92vw"
              />
            <img
              src={publicAsset(`projects/${name}-1280.jpg`)}
              srcSet={`${publicAsset(`projects/${name}-720.jpg`)} 720w, ${publicAsset(`projects/${name}-1280.jpg`)} 1280w`}
              sizes="(min-width: 1024px) 620px, 92vw"
              width={1280}
              height={800}
              loading="lazy"
              decoding="async"
              alt={alt}
              className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            </picture>
            {product.overlay === "scan" && <ScanOverlay />}
            {/* glare that follows the cursor, like light moving across glass */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{ background: "radial-gradient(520px circle at var(--gx, 50%) var(--gy, 30%), rgba(255,255,255,0.16), transparent 42%)" }}
            />
          </div>
        </div>
      </div>
      {product.overlay === "radar" && (
        <>
          <RadarOverlay />
          <RadarChips />
        </>
      )}
    </div>
  );
}

function ProductCopy({ product, index }: { product: Product; index: number }) {
  return (
    <div className="relative isolate">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -z-10 -top-6 sm:-top-14 right-0 select-none font-black leading-none tracking-tighter text-[5.5rem] sm:text-[9rem] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.09)]"
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="relative mb-5 inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-pink-200">
        {product.badgeLive ? (
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75 motion-safe:animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-pink-400" />
          </span>
        ) : (
          <GitBranch size={13} aria-hidden="true" />
        )}
        {product.badge}
      </span>

      <h3 className="mb-3 text-3xl sm:text-4xl font-bold tracking-tight text-white">
        {product.title}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
          {" "}
          {product.highlight}
        </span>
      </h3>
      <p className="mb-6 text-base sm:text-lg leading-relaxed text-gray-300">{product.tagline}</p>

      <ul className="mb-6 space-y-3">
        {product.features.map(({ icon: Icon, text }) => (
          <li key={text} className="flex items-start gap-3 text-sm sm:text-[15px] leading-relaxed text-gray-400">
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-purple-300">
              <Icon size={15} aria-hidden="true" />
            </span>
            {text}
          </li>
        ))}
      </ul>

      <div className="mb-6 grid grid-cols-4 gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-3">
        {product.stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-xl sm:text-2xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
              <CountUp to={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-0.5 text-[10px] sm:text-[11px] leading-tight text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="mb-7 flex flex-wrap gap-2">
        {product.tech.map((tech) => (
          <span key={tech} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-gray-300">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <a
          href={product.primary.href}
          target="_blank"
          rel="noopener noreferrer"
          className="shimmer group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 px-6 py-3.5 font-semibold text-white shadow-[0_0_25px_rgba(139,92,246,0.35)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(236,72,153,0.45)]"
        >
          {product.primary.label}
          <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        </a>
        <a
          href={product.secondary.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link inline-flex items-center gap-2 whitespace-nowrap py-2 font-semibold text-gray-200 transition-colors hover:text-white"
        >
          <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-300 group-hover/link:bg-[length:100%_1px]">
            {product.secondary.label}
          </span>
          <span className="sr-only"> — {product.title} {product.highlight}</span>
          <ArrowUpRight size={16} className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}

function Showcase({ product, index }: { product: Product; index: number }) {
  const reverse = index % 2 === 1;
  return (
    <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
      <Reveal className={`min-w-0 lg:col-span-7 ${reverse ? "lg:order-2" : ""}`}>
        <ScreenFrame product={product} />
      </Reveal>
      <Reveal delay={0.12} className={`min-w-0 lg:col-span-5 ${reverse ? "lg:order-1" : ""}`}>
        <ProductCopy product={product} index={index} />
      </Reveal>
    </div>
  );
}

/** Two flagship products in an alternating layout: real screenshots with an animation that mirrors what each one does. */
export default function FlagshipProducts() {
  return (
    <div className="mb-24 space-y-20 md:space-y-28">
      <Reveal className="flex items-center gap-4">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-white/15" />
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-400">Flagship products</span>
        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-white/15" />
      </Reveal>
      {PRODUCTS.map((product, index) => (
        <Showcase key={product.title} product={product} index={index} />
      ))}
    </div>
  );
}
