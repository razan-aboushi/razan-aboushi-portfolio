"use client";

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
      "Optimized JavaScript bundles with code splitting, boosting Core Web Vitals more than 20%",
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
      "Managed academic book supply processes, procurement, and inventory tracking and management across multiple university departments",
    ],
  }
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

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>
        
        <div className="relative">
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border"></div>
          
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
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                }`}
                variants={itemVariants}
              >
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background z-10"></div>
                
                <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"}`}>
                  <motion.div
                    className="bg-background border border-border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {exp.position}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-accent mb-1">
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
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
