"use client";

import { motion } from "framer-motion";
import { ExternalLink, Package, Code, Globe } from "lucide-react";

const projectsData = [
  {
    title: "React Perfect Gallery",
    type: "NPM Package",
    description: "Published an open-source NPM package providing a highly reusable, accessible image gallery component featuring mobile-first design and infinite scrolling capabilities.",
    technologies: ["React", "TypeScript", "CSS3", "Accessibility", "Infinite Scroll"],
    links: {
      npm: "https://www.npmjs.com/package/react-perfect-gallery",
      github: "https://github.com/razan-aboushi/react-perfect-gallery",
    },
    icon: Package,
  },
  {
    title: "Mobile Date Picker",
    type: "NPM Package",
    description: "Engineered and deployed a mobile-optimized date picker component with touch-friendly controls and customizable styling for the React developer ecosystem.",
    technologies: ["React", "JavaScript", "CSS3", "Mobile-First", "Touch UI"],
    links: {
      npm: "https://www.npmjs.com/package/mobile-date-picker",
      github: "https://github.com/razan-aboushi/mobile-date-picker",
    },
    icon: Package,
  },
  {
    title: "EduSpark Platform",
    type: "Full Stack Application",
    description: "Developed an educational platform bridging students and course creators, featuring secure material sharing and interactive online course accessibility.",
    technologies: ["React.js", "Node.js", "Express", "MySQL", "JWT"],
    links: {
      demo: "https://eduspark-demo.vercel.app",
      github: "https://github.com/razan-aboushi/eduspark-platform",
    },
    icon: Globe,
  },
  {
    title: "TableXpress",
    type: "Full Stack Application",
    description: "Built a full-stack restaurant reservation system incorporating location-based filtering, cuisine classification, and real-time availability tracking.",
    technologies: ["React.js", "Node.js", "Tailwind CSS", "Bootstrap", "MySQL"],
    links: {
      demo: "https://tablexpress-demo.vercel.app",
      github: "https://github.com/razan-aboushi/tablexpress",
      more: "https://github.com/razan-aboushi",
    },
    icon: Code,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Projects & NPM Packages
        </motion.h2>
        
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projectsData.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                className="group"
                variants={itemVariants}
              >
                <motion.div
                  className="h-full bg-background border border-border rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-accent/50"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-accent/10 rounded-lg text-accent">
                        <Icon size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-sm text-muted-foreground">
                          {project.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    {project.links.npm && (
                      <a
                        href={project.links.npm}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-accent hover:text-accent/80 transition-colors"
                      >
                        <Package size={14} />
                        NPM
                      </a>
                    )}
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-accent hover:text-accent/80 transition-colors"
                      >
                        <ExternalLink size={14} />
                        Live Demo
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-accent hover:text-accent/80 transition-colors"
                      >
                        <Code size={14} />
                        Source
                      </a>
                    )}
                    {project.links.more && (
                      <a
                        href={project.links.more}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-accent hover:text-accent/80 transition-colors"
                      >
                        <ExternalLink size={14} />
                        View more projects
                      </a>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
