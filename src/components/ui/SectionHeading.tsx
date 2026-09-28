import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  highlight: string;
  description?: string;
}

/** Shared header so every section uses the same eyebrow, brand gradient, and spacing. */
export default function SectionHeading({ eyebrow, title, highlight, description }: SectionHeadingProps) {
  return (
    <Reveal className="text-center mb-14 md:mb-16">
      <span className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-5 rounded-full border border-white/10 bg-white/[0.03] text-[11px] font-semibold uppercase tracking-[0.22em] text-purple-200/90">
        <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-pink-400 to-cyan-400 shadow-[0_0_8px_rgba(236,72,153,0.8)]" />
        {eyebrow}
      </span>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
        {title}{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
          {highlight}
        </span>
      </h2>
      {description && (
        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">{description}</p>
      )}
    </Reveal>
  );
}
