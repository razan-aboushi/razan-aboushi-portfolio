<<<<<<< HEAD
import { motion } from "framer-motion";
=======
>>>>>>> a9fc065cbaeee27a6828af10c955d5e12fc11d39
import { GraduationCap, Award } from "lucide-react";

const educationData = [
  {
    degree: "Bachelor's Degree in Management Information Systems (MIS)",
    institution: "The University of Jordan",
    location: "Amman, Jordan",
    duration: "Sep 2018 – Aug 2022",
    gpa: "3.94/4.00 - Excellent",
<<<<<<< HEAD
    achievements: [
=======
    highlights: [
>>>>>>> a9fc065cbaeee27a6828af10c955d5e12fc11d39
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
<<<<<<< HEAD
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

=======
    highlights: [
      "Advanced proficiency in English language",
      "Strong written and verbal communication skills",
    ],
  },
];

>>>>>>> a9fc065cbaeee27a6828af10c955d5e12fc11d39
export default function EducationElegant() {
  return (
    <section id="education" className="ns-section">
      <div className="ns-container">
        <div className="ns-section-header">
<<<<<<< HEAD
          <motion.h2
            className="ns-section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Education
          </motion.h2>
        </div>
        
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
              className="ns-card"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
=======
          <h2 className="ns-section-title animate-fade-in">
            Education
          </h2>
          <p className="ns-section-description animate-fade-in-delay">
            My academic background and educational achievements
          </p>
        </div>
        
        <div className="space-y-8 animate-fade-in-delay-2">
          {educationData.map((edu, index) => (
            <div 
              key={index}
              className="ns-card animate-fade-in"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
>>>>>>> a9fc065cbaeee27a6828af10c955d5e12fc11d39
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                  <GraduationCap size={24} />
                </div>
<<<<<<< HEAD
                
=======
>>>>>>> a9fc065cbaeee27a6828af10c955d5e12fc11d39
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {edu.degree}
                  </h3>
<<<<<<< HEAD
                  
=======
>>>>>>> a9fc065cbaeee27a6828af10c955d5e12fc11d39
                  <div className="flex items-center gap-2 text-purple-400 mb-2">
                    <span className="font-medium">{edu.institution}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-400">{edu.location}</span>
                  </div>
<<<<<<< HEAD
                  
=======
>>>>>>> a9fc065cbaeee27a6828af10c955d5e12fc11d39
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <span>{edu.duration}</span>
                    <div className="flex items-center gap-1">
                      <Award size={14} />
                      <span className="font-medium text-purple-400">{edu.gpa}</span>
                    </div>
                  </div>
<<<<<<< HEAD
                  
                  {edu.achievements.length > 0 && (
                    <ul className="space-y-1 text-sm text-gray-300">
                      {edu.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">•</span>
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
=======
                  <ul className="space-y-1 text-sm text-gray-300">
                    {edu.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
>>>>>>> a9fc065cbaeee27a6828af10c955d5e12fc11d39
      </div>
    </section>
  );
}
