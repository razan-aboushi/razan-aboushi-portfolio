import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

const experienceData = [
  {
    company: "OpenSooq",
    position: "Full Stack Engineer",
    duration: "Sep 2023 – Present",
    location: "Amman, Jordan",
    achievements: [
      "Architected and optimized complex filtering functionality using Context API and Zustand, improving navigation and user experience",
      "Integrated Google Tag Manager (GTM) tracking and logging systems to capture user interactions and support reporting",
      "Spearheaded SEO and Core Web Vitals improvements utilizing Google Search Console and Lighthouse",
      "Implemented Single Sign-On (SSO) features, handling authentication and multiple login options for users",
      "Worked on Spotlights, Commercial Ads, and Listings Comparison features to improve visibility and engagement",
      "Optimized JavaScript bundles with code splitting, boosting Core Web Vitals more than 40%",
      "Reduced page load time by 2.5+ seconds through build enhancements",
      "Resolved SEO issues including broken links, redirects, and server errors, improving site indexing and crawl efficiency",
      "Removed unnecessary dependencies, reducing bundle size, build complexity, and potential security risks while fixing memory leaks",
      "Diagnosed and fixed a critical backend bug in worker processes, improving system reliability and uptime",
      "Participated in SEO and business requirement meetings, analyzed documentation, communicated requirements clearly, and coordinated effectively with outsourcing teams",
    ],
  },
  {
    company: "Coding Academy by Orange",
    position: "Full Stack Web Development Intern",
    duration: "Feb 2023 – Aug 2023",
    location: "Zarqa, Jordan",
    achievements: [
      "Completed a highly selective, intensive 7-month full-stack development bootcamp",
      "Developed responsive, data-driven web applications from scratch utilizing React, Node.js, and relational databases",
      "Gained practical, hands-on experience designing REST APIs, managing version control via Git, and executing team-based project development",
    ],
  },
  {
    company: "Collaborative Supply Coordinator",
    position: "Supply Chain Coordinator",
    duration: "Nov 2020 – Feb 2023",
    location: "Zarqa Private University Library, Zarqa, Jordan",
    achievements: [
      "Managed academic book supply processes, procurement, and inventory tracking across multiple university departments",
    ],
  },
  {
    company: "University Departments",
    position: "University Departments",
    duration: "2020 – Feb 2023",
    location: "Zarqa, Jordan",
    achievements: [
      "Coordinated with various university departments for supply chain and inventory management",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function ExperienceElegant() {
  return (
    <section id="experience" className="ns-section">
      <div className="ns-container">
        <div className="ns-section-header">
          <motion.h2
            className="ns-section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Experience
          </motion.h2>
        </div>
        
        <div className="relative">
          {/* Timeline line - Left aligned */}
          <div className="absolute left-8 top-0 h-full w-0.5 bg-gray-700"></div>
          
          <motion.div
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {experienceData.map((exp, index) => (
              <motion.div
                key={exp.company}
                className="relative flex items-start ml-20"
                variants={itemVariants}
              >
                {/* Timeline dot */}
                <div className="absolute -left-12 top-2 w-4 h-4 bg-purple-500 rounded-full border-4 border-gray-900 z-10"></div>
                
                {/* Content - Full width */}
                <div className="w-full max-w-4xl">
                  <motion.div
                    className="ns-card"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      {exp.position}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-purple-400 mb-1">
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 text-sm text-gray-300">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
