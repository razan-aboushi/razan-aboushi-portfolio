import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Articles", href: "#articles" },
];

export default function NavigationModern() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const isAtBottom = window.innerHeight + Math.round(window.scrollY) >= document.body.offsetHeight - 50;
      
      if (isAtBottom) {
        setActiveSection("articles");
      }

      const sections = navItems.map(item => item.name.toLowerCase());
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= window.innerHeight / 2 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.1)]" 
          : "bg-transparent py-6 border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between">
          
          <a
            href="#home"
            className="group text-2xl font-black tracking-tighter text-white flex items-center gap-1"
          >
            R<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 group-hover:from-purple-300 group-hover:to-blue-400 transition-colors">A.</span>
          </a>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.name.toLowerCase();
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full hover:text-white ${
                    isActive ? "text-white" : "text-gray-400"
                  }`}
                >
                  {item.name}
                  
                  {isActive && (
                    <span className="absolute inset-0 bg-white/10 rounded-full -z-10" />
                  )}
                  
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 rounded-t-full shadow-[0_-2px_10px_rgba(168,85,247,0.5)]" />
                  )}
                </a>
              );
            })}
          </div>

          <a 
            href="mailto:razanalqaddoumi@gmail.com"
            className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300"
          >
            Let's Talk
          </a>

          <button
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[400px] py-6 opacity-100" : "max-h-0 py-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-2 px-6">
          {navItems.map((item) => {
             const isActive = activeSection === item.name.toLowerCase();
             return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`w-full text-center py-3 text-lg font-medium rounded-xl transition-colors ${
                  isActive 
                    ? "bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-white border border-purple-500/20" 
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.name}
              </a>
             )
          })}
          <a 
            href="mailto:razanalqaddoumi@gmail.com"
            className="w-full text-center mt-4 py-3 text-lg font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl"
            onClick={() => setIsOpen(false)}
          >
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  );
}