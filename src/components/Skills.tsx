"use client";

import { motion } from "framer-motion";

const skillsData = {
  frontend: [
    "React.js",
    "Next.js", 
    "TypeScript",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Bootstrap",
  ],
  backend: [
    "Node.js",
    "RESTful APIs",
    "JWT",
    "OAuth",
    "MySQL",
    "Firebase",
    "WordPress",
  ],
  tools: [
    "Git",
    "GitHub",
    "NPM",
    "Webpack",
    "Google Tag Manager (GTM)",
    "Google Search Console",
    "Methodologies",
    "UI/UX",
    "Figma",
    "Testing & Quality",
    "Postman",
    "GitHub Actions (CI/CD)",
    "Debugging",
    "Performance Testing",
    "Responsive Design",
    "Jira",
  ],
};

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
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Skills & Technologies
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-accent mb-6">Frontend</h3>
            <motion.div
              className="flex flex-wrap gap-2 justify-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skillsData.frontend.map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-accent mb-6">Backend</h3>
            <motion.div
              className="flex flex-wrap gap-2 justify-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skillsData.backend.map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div
            className="text-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-accent mb-6">Tools</h3>
            <motion.div
              className="flex flex-wrap gap-2 justify-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skillsData.tools.map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
