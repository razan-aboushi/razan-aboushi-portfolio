import { Code, Package, Globe } from "lucide-react";

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
    "Express.js",
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

export default function SkillsElegant() {
  return (
    <section id="skills" className="ns-section">
      <div className="ns-container">
        <div className="ns-section-header">
          <motion.h2
            className="ns-section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Skills & Technologies
          </motion.h2>
        </div>
        
        <div className="space-y-12">
          <div className="text-center mb-8">
            <motion.h3
              className="text-2xl font-semibold text-white mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Frontend
            </motion.h3>
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
                  className="ns-lang-card"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>
          
          <div className="text-center mb-8">
            <motion.h3
              className="text-2xl font-semibold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Backend
            </motion.h3>
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
                  className="ns-lang-card"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>
          
          <div className="text-center">
            <motion.h3
              className="text-2xl font-semibold text-white mb-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Tools
            </motion.h3>
            <motion.div
              className="ns-grid-cols-2"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skillsData.tools.map((tool, index) => (
                <motion.span
                  key={tool}
                  className="ns-lang-card"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tool}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
