import { useEffect, useRef, useState } from 'react';
import { Package, Terminal, GitBranch, ExternalLink, Copy, Check } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import Reveal, { staggerDelay } from './ui/Reveal';

interface NpmLinks {
  npm: string;
  github: string;
}

interface NpmPackageData {
  name: string;
  description: string;
  command: string;
  tags: string[];
  links: NpmLinks;
}

export const npmData: NpmPackageData[] = [
  {
    name: "react-perfect-gallery",
    description: "A highly reusable, accessible image gallery component featuring mobile-first design and infinite scrolling capabilities.",
    command: "npm i react-perfect-gallery",
    tags: ["react", "typescript", "gallery", "infinite-scroll", "accessibility"],
    links: {
      npm: "https://www.npmjs.com/package/react-perfect-gallery",
      github: "https://github.com/razan-aboushi/react-perfect-gallery",
    }
  },
  {
    name: "mobile-date-picker",
    description: "A mobile-optimized date picker component with touch-friendly controls and customizable styling for the React developer ecosystem.",
    command: "npm i mobile-date-picker",
    tags: ["react", "javascript", "datepicker", "mobile-first", "touch-ui"],
    links: {
      npm: "https://www.npmjs.com/package/mobile-date-picker",
      github: "https://github.com/razan-aboushi/my-react-mobile-datepicker",
    }
  },
  {
    name: "react-shopping-cart-kit",
    description: "A modern, lightweight React shopping cart library with beautiful UI components. Features multi-currency support, shipping methods, discount codes, and internationalization.",
    command: "npm i react-shopping-cart-kit",
    tags: ["react", "typescript", "ecommerce", "shopping-cart", "multi-currency", "i18n"],
    links: {
      npm: "https://www.npmjs.com/package/react-shopping-cart-kit",
      github: "https://github.com/razan-aboushi/react-shopping-cart",
    }
  },
  {
    name: "why-hydration",
    description: "Tells you which component broke hydration, what differed, and how to fix it — in dev, with zero production cost.",
    command: "npm i why-hydration",
    tags: ["react", "nextjs", "hydration", "ssr", "devtools", "diagnostics"],
    links: {
      npm: "https://www.npmjs.com/package/why-hydration",
      github: "https://github.com/razan-aboushi/why-hydration",
    }
  }
];

export default function NpmPackages() {
  // Package whose install command was just copied (shows a checkmark briefly)
  const [copiedPackage, setCopiedPackage] = useState<string | null>(null);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (resetTimer.current) clearTimeout(resetTimer.current);
  }, []);

  const handleCopy = async (command: string, pkgName: string) => {
    try {
      await navigator.clipboard.writeText(command);
      setCopiedPackage(pkgName);
      if (resetTimer.current) clearTimeout(resetTimer.current);
      resetTimer.current = setTimeout(() => setCopiedPackage(null), 2000);
    } catch (err) {
      console.error('Failed to copy command', err);
    }
  };

  return (
    <section id="packages" className="relative py-24 md:py-28 bg-[#0a0a0a]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[600px] h-[400px] bg-pink-900/10 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="NPM Packages"
          title="Open Source"
          highlight="Packages"
          description="Tools and components I've built to help the React developer community ship faster"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {npmData.map((pkg, index) => (
            <Reveal key={pkg.name} delay={staggerDelay(index)} className="h-full">
            <div
              className="spotlight group relative flex flex-col p-6 sm:p-8 bg-white/[0.04] border border-white/10 rounded-2xl hover:bg-white/[0.06] hover:border-pink-500/40 hover:-translate-y-1 transition-all duration-300 h-full"
            >
              
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-rose-500/10 rounded-lg text-rose-400 border border-rose-500/20">
                    <Package size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-rose-400 transition-colors">
                    {pkg.name}
                  </h3>
                </div>
              </div>

              <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-grow">
                {pkg.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {pkg.tags.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-[#0a0a0a] text-gray-400 rounded-md text-xs border border-gray-800"
                  >
                    #{tech}
                  </span>
                ))}
              </div>

              <div className="mb-8">
                <p className="text-xs text-gray-400 mb-2 font-medium uppercase tracking-wider">Install via NPM</p>
                <div className="flex items-center justify-between p-3.5 bg-[#050505] rounded-xl border border-white/5 font-mono text-sm group/cmd transition-colors hover:border-white/10">
                  <div className="flex items-center gap-3 text-gray-300 scrollbar-hide overflow-x-auto">
                    <Terminal size={16} className="text-rose-500 shrink-0" />
                    <span className="whitespace-nowrap selection:bg-rose-500/30">{pkg.command}</span>
                  </div>
                  
                  <button
                    type="button"
                    onClick={() => handleCopy(pkg.command, pkg.name)}
                    className="ml-3 shrink-0 p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                    aria-label={copiedPackage === pkg.name ? `Copied install command for ${pkg.name}` : `Copy install command for ${pkg.name}`}
                  >
                    {copiedPackage === pkg.name ? (
                      <Check size={16} className="text-green-500" aria-hidden="true" />
                    ) : (
                      <Copy size={16} className="opacity-70 group-hover/cmd:opacity-100 transition-opacity" aria-hidden="true" />
                    )}
                  </button>
                  <span className="sr-only" aria-live="polite">
                    {copiedPackage === pkg.name ? "Copied to clipboard" : ""}
                  </span>
                </div>
              </div>

              <div className="flex gap-4 mt-auto pt-6 border-t border-white/5">
                <a
                  href={pkg.links.npm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 text-sm font-medium text-white px-4 py-2.5 rounded-lg bg-rose-600/10 hover:bg-rose-600/20 border border-rose-600/20 transition-colors"
                >
                  <ExternalLink size={16} className="text-rose-400" />
                  View Package
                </a>
                <a
                  href={pkg.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 text-sm font-medium text-white px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                >
                  <GitBranch size={16} />
                  Source Code
                </a>
              </div>

            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}