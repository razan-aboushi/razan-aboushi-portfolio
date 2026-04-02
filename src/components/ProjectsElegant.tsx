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
      github: "https://github.com/razan-aboushi/my-react-mobile-datepicker",
    },
    icon: Package,
  },
  {
    title: "EduSpark Platform",
    type: "Full Stack Application",
    description: "Developed an educational platform bridging students and course creators, featuring secure material sharing and interactive online course accessibility.",
    technologies: ["React.js", "Node.js", "Express", "MySQL", "JWT"],
    links: {
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
      github: "https://github.com/razan-aboushi/tablexpress",
    },
    icon: Code,
  },
  {
    title: "Task Manager with Zustand",
    type: "React Application",
    description: "Built a modern task management application using React with Zustand for state management, featuring add, edit, delete, and complete task functionalities.",
    technologies: ["React", "Zustand", "JavaScript", "State Management", "Todo App"],
    links: {
      github: "https://github.com/razan-aboushi/Add-Tasks-with-Zustand",
    },
    icon: Code,
  },
  {
    title: "Expense Tracker",
    type: "JavaScript Application",
    description: "Developed a comprehensive expense tracking application with budget management, expense categorization, and financial reporting features.",
    technologies: ["JavaScript", "HTML5", "CSS3", "Local Storage", "Budget Management"],
    links: {
      github: "https://github.com/razan-aboushi/Expense-Tracker",
    },
    icon: Code,
  },
  {
    title: "Memory Game",
    type: "JavaScript Game",
    description: "Created an interactive memory card game with flip animations, score tracking, and difficulty levels using pure JavaScript.",
    technologies: ["JavaScript", "HTML5", "CSS3", "Game Logic", "Animations"],
    links: {
      github: "https://github.com/razan-aboushi/Memory-Game",
    },
    icon: Code,
  },
  {
    title: "Snake Game",
    type: "JavaScript Game",
    description: "Implemented the classic Snake game with smooth controls, score tracking, and increasing difficulty levels.",
    technologies: ["JavaScript", "HTML5", "CSS3", "Canvas", "Game Development"],
    links: {
      github: "https://github.com/razan-aboushi/Snake-game",
    },
    icon: Code,
  },
  {
    title: "2D Breakout Game",
    type: "JavaScript Game",
    description: "Built a 2D breakout game with paddle controls, brick physics, power-ups, and progressive difficulty levels.",
    technologies: ["JavaScript", "HTML5", "Canvas", "Game Physics", "Collision Detection"],
    links: {
      github: "https://github.com/razan-aboushi/2D-breakout-game",
    },
    icon: Code,
  },
  {
    title: "Quiz Application",
    type: "JavaScript Application",
    description: "Created an interactive quiz application with multiple categories, timer functionality, and score tracking system.",
    technologies: ["JavaScript", "HTML5", "CSS3", "Quiz Logic", "Timer"],
    links: {
      github: "https://github.com/razan-aboushi/Quiz-by-JavaScript",
    },
    icon: Code,
  },
  {
    title: "Chat Rooms",
    type: "Node.js Application",
    description: "Developed real-time chat rooms with Socket.io, user authentication, and message history functionality.",
    technologies: ["Node.js", "Socket.io", "Express", "Real-time", "Chat"],
    links: {
      github: "https://github.com/razan-aboushi/chat-rooms",
    },
    icon: Code,
  },
  {
    title: "Simple NodeJS",
    type: "Backend Application",
    description: "Created a basic Node.js server with RESTful API endpoints, middleware implementation, and error handling.",
    technologies: ["Node.js", "Express", "REST API", "Middleware", "Backend"],
    links: {
      github: "https://github.com/razan-aboushi/Simple_NodeJS",
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

export default function ProjectsElegant() {
  return (
    <section id="projects" className="ns-section">
      <div className="ns-container">
        <div className="ns-section-header">
          <motion.h2
            className="ns-section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Projects & NPM Packages
          </motion.h2>
        </div>
        
        <motion.div
          className="ns-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projectsData.slice(0, 12).map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                className="group"
                variants={itemVariants}
              >
                <motion.div
                  className="ns-card h-full"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                      <Icon size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-sm text-gray-400">
                        {project.type}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    {(project.links as any).npm && (
                      <a
                        href={(project.links as any).npm}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        <Package size={14} />
                        NPM
                      </a>
                    )}
                    {(project.links as any).demo && (
                      <a
                        href={(project.links as any).demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        <ExternalLink size={14} />
                        Live Demo
                      </a>
                    )}
                    {(project.links as any).github && (
                      <a
                        href={(project.links as any).github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        <Code size={14} />
                        Source
                      </a>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
        
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
            <div className="flex flex-col items-center gap-4">
              <a
                href="https://github.com/razan-aboushi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105"
              >
                <ExternalLink size={20} />
                View All Projects on GitHub
              </a>
              <p className="text-gray-500 text-xs">
                Explore 39+ repositories including full-stack apps, games, and tools
              </p>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
