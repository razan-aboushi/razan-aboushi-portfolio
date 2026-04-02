"use client";

import { motion } from "framer-motion";
import { Mail, ExternalLink, Download } from "lucide-react";

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

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-foreground mb-4"
          variants={itemVariants}
        >
          {heroData.name}
        </motion.h1>
        
        <motion.h2
          className="text-2xl md:text-3xl text-accent mb-6"
          variants={itemVariants}
        >
          {heroData.tagline}
        </motion.h2>
        
        <motion.p
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          {heroData.summary}
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          variants={itemVariants}
        >
          <a
            href={`mailto:${heroData.links.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-medium"
          >
            <Mail size={18} />
            Get In Touch
          </a>
          
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors font-medium"
          >
            <Download size={18} />
            Download Resume
          </a>
        </motion.div>
        
        <motion.div
          className="flex flex-wrap gap-6 justify-center items-center"
          variants={itemVariants}
        >
          <a
            href={heroData.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            GitHub
            <ExternalLink size={14} />
          </a>
          
          <a
            href={heroData.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            LinkedIn
            <ExternalLink size={14} />
          </a>
          
          <a
            href={heroData.links.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            Medium
            <ExternalLink size={14} />
          </a>
          
          <a
            href={heroData.links.npm}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            NPM
            <ExternalLink size={14} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
