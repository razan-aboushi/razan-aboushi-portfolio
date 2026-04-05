import { Code, GitBranch, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-950 border-t border-gray-800 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start space-y-3">
            <div className="flex items-center gap-2 text-gray-300">
              <Code className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium">
                © {currentYear} Razan Aboushi. All Rights Reserved.
              </span>
            </div>
            <div className="text-gray-400 text-sm space-y-1 text-center md:text-left">
              <p className="font-medium text-gray-300">Full Stack Software Engineer</p>
              <p className="text-xs">Building scalable web applications with modern technologies</p>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-3">
            <h3 className="text-gray-300 font-medium text-sm">Connect</h3>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/razan-aboushi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <GitBranch className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/razan-aboushi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-[#0a66c2] transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="mailto:razan.aboushi@example.com"
                aria-label="Email"
                className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end space-y-3">
            <div className="text-gray-400 text-sm">
              <span>Available for opportunities</span>
            </div>
            <p className="text-xs text-gray-500">Jordan</p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500 text-center">
              Specializing in React, Next.js and JS frameworks, TypeScript, and Performance Optimization
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span>Jordan</span>
              <span>•</span>
              <span>Full Stack Developer</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
