"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const educationData = [
  {
    degree: "Bachelor's Degree in Management Information Systems (MIS)",
    institution: "The University of Jordan",
    location: "Amman, Jordan",
    duration: "Sep 2018 – Aug 2022",
    gpa: "3.94/4.00 - Excellent",
    achievements: [
      "Dean's List for multiple semesters",
      "Outstanding academic performance",
    ],
  },
  {
    degree: "Diploma in English Language and Literature",
    institution: "The University of Jordan",
    location: "Amman, Jordan",
    duration: "Dec 2022 – May 2024",
    gpa: "Excellent",
    achievements: [
      "Advanced proficiency in English language",
      "Strong written and verbal communication skills",
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>
        
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={`${edu.degree}-${index}`}
              className="bg-background border border-border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg text-accent">
                  <GraduationCap size={24} />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {edu.degree}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-accent mb-2">
                    <span className="font-medium">{edu.institution}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">{edu.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span>{edu.duration}</span>
                    <div className="flex items-center gap-1">
                      <Award size={14} />
                      <span className="font-medium text-accent">{edu.gpa}</span>
                    </div>
                  </div>
                  
                  {edu.achievements.length > 0 && (
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {edu.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
