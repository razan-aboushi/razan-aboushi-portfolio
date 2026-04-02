import { Mail, ExternalLink, Download, Link } from "lucide-react";

const heroData = {
  name: "Razan Aboushi",
  tagline: "Full Stack Engineer",
  summary: "Full Stack Engineer with 2+ years of experience building scalable web applications used by thousands of users using React, Next.js, TypeScript, and Node.js. Proven track record of improving page speed by over 30%, optimizing performance, implementing authentication systems, and enhancing SEO and Core Web Vitals. Passionate about building high-quality, performant web applications and a highly motivated, fast-learning, collaborative team player.",
  links: {
    github: "https://github.com/razan-aboushi",
    linkedin: "https://www.linkedin.com/in/razan-aboushi/",
    medium: "https://medium.com/@razanalqaddoumi",
    npm: "https://www.npmjs.com/~razan_aboushi",
    email: "razanalqaddoumi@gmail.com",
  },
};

export default function HeroSimple() {
  return (
    <section id="home" className="ns-hero pt-32" style={{ paddingTop: '130px' }}>
      <div className="ns-container">
        <h1 className="text-6xl md:text-7xl font-extrabold mb-4 text-white">
          {heroData.name}
        </h1>
        
        <div className="ns-badge">
          {heroData.tagline}
        </div>
        
        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
          {heroData.summary}
        </p>
        
        <div className="flex justify-center gap-4 flex-wrap mb-8 mt-8">
          <a
            href={`mailto:${heroData.links.email}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            <Mail size={18} />
            Get In Touch
          </a>
          <a
            href="/Razan_Aboushi_Full_Stack_Engineer_CV.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-800 text-white rounded-full font-semibold border border-gray-700 hover:bg-gray-700 transition-colors"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>
        
        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href={heroData.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            <Link size={20} />
            GitHub
          </a>
          
          <a
            href={heroData.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            <Link size={20} />
            LinkedIn
          </a>
          
          <a
            href={heroData.links.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            <ExternalLink size={20} />
            Medium
          </a>
          
          <a
            href={heroData.links.npm}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            <ExternalLink size={20} />
            NPM
          </a>
        </div>
      </div>
    </section>
  );
}
