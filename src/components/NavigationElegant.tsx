<<<<<<< HEAD
=======
"use client";

>>>>>>> a9fc065cbaeee27a6828af10c955d5e12fc11d39
import { useState, useEffect } from "react";
import { Menu, X, Link, Mail } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/razan-aboushi",
    icon: Link,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/razan-aboushi/",
    icon: Link,
  },
  {
    name: "Email",
    href: "mailto:razanalqaddoumi@gmail.com",
    icon: Mail,
  },
];

export default function NavigationStatic() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent hover:opacity-80 transition-all duration-300 animate-fade-in"
          >
            RA
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
              </a>
            ))}
            <div className="flex items-center space-x-4 ml-8">
              {socialLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors animate-fade-in"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                  aria-label={link.name}
                >
                  <link.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white animate-fade-in"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-gray-800 rounded-lg p-4 border border-gray-700 animate-fade-in">
            <nav className="flex flex-col items-center py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors text-xl font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center space-x-6 pt-4 border-t border-gray-700">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                    aria-label={link.name}
                  >
                    <link.icon size={28} />
                  </a>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </nav>
  );
}
