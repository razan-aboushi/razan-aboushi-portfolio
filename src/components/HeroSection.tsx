import { useState, useEffect } from 'react';
import { Download, Code, Server, Zap, Sparkles } from "lucide-react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  const heroData = {
    name: "Razan Aboushi",
    title: "Full Stack Engineer",
    description: "Passionate about building scalable web applications with exceptional performance and user experience",
    keywords: ["Full Stack Developer", "React Developer", "Next.js", "TypeScript", "Node.js", "Web Development", "Performance Optimization", "SEO Specialist"],
    links: {
      github: "https://github.com/razan-aboushi",
      linkedin: "https://www.linkedin.com/in/razan-aboushi/",
      medium: "https://medium.com/@razanalqaddoumi",
      email: "mailto:razanalqaddoumi@gmail.com",
      npm: "https://www.npmjs.com/~razan_aboushi"
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-[#0a0a0a]"
    >
      <div 
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15), transparent 80%)`
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-8">
          <Sparkles size={16} />
          <span>Building Scalable Web Apps</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white tracking-tight">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">Razan Aboushi</span>
        </h1>
        
        <h2 className="text-3xl md:text-4xl text-gray-200 font-semibold mb-8">
          Full Stack Engineer
        </h2>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
          Full Stack Engineer with 2+ years of experience building scalable web applications used by thousands of users using <span className="text-cyan-400 font-medium">React</span>, <span className="text-purple-400 font-medium">Next.js</span>, <span className="text-blue-400 font-medium">TypeScript</span>, and <span className="text-green-400 font-medium">Node.js</span>. Proven track record of improving page speed by over 30%, optimizing performance, and enhancing <span className="text-pink-400 font-medium">SEO & Core Web Vitals</span>. Passionate about building high-quality, performant solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 w-full max-w-4xl">
          <div className="flex flex-col items-center p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-colors">
            <Code className="text-cyan-400 mb-3" size={32} strokeWidth={1.5} />
            <h3 className="text-white font-semibold">Frontend Web</h3>
            <p className="text-sm text-gray-500 mt-1">React & Next.js</p>
          </div>
          <div className="flex flex-col items-center p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors">
            <Server className="text-blue-400 mb-3" size={32} strokeWidth={1.5} />
            <h3 className="text-white font-semibold">Backend API</h3>
            <p className="text-sm text-gray-500 mt-1">Node.js & MySQL</p>
          </div>
          <div className="flex flex-col items-center p-4 rounded-xl bg-white/5 border border-white/10 hover:border-pink-500/50 transition-colors">
            <Zap className="text-pink-400 mb-3" size={32} strokeWidth={1.5} />
            <h3 className="text-white font-semibold">Performance</h3>
            <p className="text-sm text-gray-500 mt-1">SEO & Core Web Vitals</p>
          </div>
        </div>
        
        <div className="flex justify-center gap-4 flex-wrap mb-10">
          <a
            href="/Razan_Aboushi_Full_Stack_Engineer_CV.pdf"
            download="Razan_Aboushi_Full_Stack_Engineer_CV.pdf"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Download Resume
            <Download size={18} />
          </a>
          <a
            href={`mailto:${heroData.links.email}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-white rounded-full font-semibold border border-gray-600 hover:bg-white/5 transition-colors"
          >
            Contact Me
          </a>
        </div>
        
      <div className="flex justify-center gap-6 text-gray-400">
  
  <a
    href={heroData.links.github}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
    className="p-3 bg-gray-900 rounded-full shadow-sm hover:text-white hover:bg-gray-800 hover:scale-110 transition-all border border-gray-800 flex items-center justify-center"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
      <path d="M9 18c-4.51 2-5-2-7-2"></path>
    </svg>
  </a>

  <a
    href={heroData.links.linkedin}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="p-3 bg-gray-900 rounded-full shadow-sm hover:text-[#0a66c2] hover:bg-white hover:scale-110 transition-all border border-gray-800 flex items-center justify-center"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect width="4" height="12" x="2" y="9"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  </a>

  <a
    href={heroData.links.medium}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Medium"
    className="p-3 bg-gray-900 rounded-full shadow-sm hover:text-black hover:bg-white hover:scale-110 transition-all border border-gray-800 flex items-center justify-center"
  >
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="22" width="22" xmlns="http://www.w3.org/2000/svg">
      <path d="M71.5 142.3c.6-5.9-1.7-11.8-6.1-15.8L20.3 72.1V64h140.2l108.4 237.7L364.2 64h133.7v8.1l-38.6 37c-3.3 2.5-5 6.7-4.3 10.8v272c-.7 4.1 1 8.3 4.3 10.8l37.7 37v8.1H307.3v-8.1l39.1-37.9c3.8-3.8 3.8-5 3.8-10.8V171.2L241.5 447.1h-14.7L100.4 171.2v184.9c-1.1 7.8 1.5 15.6 7 21.2l50.8 61.6v8.1h-144v-8L65 377.3c5.4-5.6 7.9-13.5 6.5-21.2V142.3z"></path>
    </svg>
  </a>

  <a
    href={heroData.links.npm}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="NPM"
    className="p-3 bg-gray-900 rounded-full shadow-sm hover:text-[#cb3837] hover:bg-white hover:scale-110 transition-all border border-gray-800 flex items-center justify-center"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z" />
    </svg>
  </a>

</div>

      </div>
    </section>
  );
}