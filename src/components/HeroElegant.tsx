"use client";

import { motion } from "framer-motion";
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

export default function HeroElegant() {
  return (
    <section className="ns-hero" style={{ paddingTop: '130px' }}>
      <div className="ns-container">
        <motion.h1
          className="text-6xl md:text-7xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {heroData.name}
        </motion.h1>
        
        <motion.div
          className="ns-badge"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {heroData.tagline}
        </motion.div>
        
        <motion.p
          className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {heroData.summary}
        </motion.p>
        
        <motion.div
          className="flex justify-center gap-4 flex-wrap mb-8 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href={`mailto:${heroData.links.email}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            <Mail size={18} />
            Get In Touch
          </a>
          
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-800 text-white rounded-full font-semibold border border-gray-700 hover:bg-gray-700 transition-colors"
          >
            <Download size={18} />
            Download Resume
          </a>
        </motion.div>
        
        <motion.div
          className="flex justify-center gap-6 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
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
        </motion.div>
      </div>
    </section>
  );
}
