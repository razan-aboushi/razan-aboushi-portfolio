import { useState } from 'react';
import { Package, Terminal, GitBranch, ExternalLink, Box, Copy, Check } from 'lucide-react';

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

const npmData: NpmPackageData[] = [
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
  }
];

export default function NpmPackages() {
  // 1. State to track which package was copied (shows checkmark temporarily)
  const [copiedPackage, setCopiedPackage] = useState<string | null>(null);

  // 2. The copy function
  const handleCopy = async (command: string, pkgName: string) => {
    try {
      await navigator.clipboard.writeText(command);
      setCopiedPackage(pkgName);
      // Reset back to the copy icon after 2 seconds
      setTimeout(() => setCopiedPackage(null), 2000);
    } catch (err) {
      console.error('Failed to copy command', err);
    }
  };

  return (
    <section id="packages" className="relative py-20 bg-[#0a0a0a] scroll-mt-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[600px] h-[400px] bg-rose-900/10 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 mb-4">
            <Box size={36} className="text-rose-500 shrink-0 mb-2 md:mb-0" />
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Open Source <br className="md:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">Packages</span>
            </h2>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto px-4 md:px-0">
            Tools and components I've built to help the React developer community ship faster
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {npmData.map((pkg, index) => (
            <div 
              key={index}
              className="group relative flex flex-col p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/[0.07] hover:border-rose-500/40 transition-all duration-300 h-full"
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
                <p className="text-xs text-gray-500 mb-2 font-medium uppercase tracking-wider">Install via NPM</p>
                {/* 3. Updated Command Block to include the flex-between layout and Copy Button */}
                <div className="flex items-center justify-between p-3.5 bg-[#050505] rounded-xl border border-white/5 font-mono text-sm group/cmd transition-colors hover:border-white/10">
                  <div className="flex items-center gap-3 text-gray-300 scrollbar-hide overflow-x-auto">
                    <Terminal size={16} className="text-rose-500 shrink-0" />
                    <span className="whitespace-nowrap selection:bg-rose-500/30">{pkg.command}</span>
                  </div>
                  
                  {/* Copy Button */}
                  <button
                    onClick={() => handleCopy(pkg.command, pkg.name)}
                    className="ml-3 shrink-0 p-1.5 rounded-lg text-gray-500 hover:text-white hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-rose-500/50"
                    aria-label={`Copy install command for ${pkg.name}`}
                  >
                    {copiedPackage === pkg.name ? (
                      <Check size={16} className="text-green-500" />
                    ) : (
                      <Copy size={16} className="opacity-70 group-hover/cmd:opacity-100 transition-opacity" />
                    )}
                  </button>
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
          ))}
        </div>
      </div>
    </section>
  );
}