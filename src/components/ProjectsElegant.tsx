import { Code, Package, Globe, ExternalLink, GitBranch, Box, Server } from "lucide-react";

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
    featured: true,
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
    featured: true,
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
    featured: true,
  },
  {
    title: "TableXpress",
    type: "Full Stack Application",
    description: "Built a full-stack restaurant reservation system incorporating location-based filtering, cuisine classification, and real-time availability tracking.",
    technologies: ["React.js", "Node.js", "Tailwind CSS", "Bootstrap", "MySQL"],
    links: {
      github: "https://github.com/razan-aboushi/tablexpress",
    },
    icon: Globe,
    featured: true,
  },
  {
    title: "Task Manager with Zustand",
    type: "React Application",
    description: "Built a modern task management application using React with Zustand for state management, featuring add, edit, delete, and complete task functionalities.",
    technologies: ["React", "Zustand", "JavaScript"],
    links: {
      github: "https://github.com/razan-aboushi/Add-Tasks-with-Zustand",
    },
    icon: Code,
  },
  {
    title: "Expense Tracker",
    type: "JavaScript Application",
    description: "Developed a comprehensive expense tracking application with budget management, expense categorization, and financial reporting features.",
    technologies: ["JavaScript", "HTML5", "CSS3", "Local Storage"],
    links: {
      github: "https://github.com/razan-aboushi/Expense-Tracker",
    },
    icon: Code,
  },
  {
    title: "Memory Game",
    type: "JavaScript Game",
    description: "Created an interactive memory card game with flip animations, score tracking, and difficulty levels using pure JavaScript.",
    technologies: ["JavaScript", "HTML5", "CSS3", "Animations"],
    links: {
      github: "https://github.com/razan-aboushi/Memory-Game",
    },
    icon: Code,
  },
  {
    title: "Snake Game",
    type: "JavaScript Game",
    description: "Implemented the classic Snake game with smooth controls, score tracking, and increasing difficulty levels.",
    technologies: ["JavaScript", "HTML5", "Canvas"],
    links: {
      github: "https://github.com/razan-aboushi/Snake-game",
    },
    icon: Code,
  },
  {
    title: "2D Breakout Game",
    type: "JavaScript Game",
    description: "Built a 2D breakout game with paddle controls, brick physics, power-ups, and progressive difficulty levels.",
    technologies: ["JavaScript", "Canvas", "Game Physics"],
    links: {
      github: "https://github.com/razan-aboushi/2D-breakout-game",
    },
    icon: Code,
  },
  {
    title: "Quiz Application",
    type: "JavaScript Application",
    description: "Created an interactive quiz application with multiple categories, timer functionality, and score tracking system.",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    links: {
      github: "https://github.com/razan-aboushi/Quiz-by-JavaScript",
    },
    icon: Code,
  },
  {
    title: "Chat Rooms",
    type: "Node.js Application",
    description: "Developed real-time chat rooms with Socket.io, user authentication, and message history functionality.",
    technologies: ["Node.js", "Socket.io", "Express"],
    links: {
      github: "https://github.com/razan-aboushi/chat-rooms",
    },
    icon: Server,
  },
  {
    title: "Simple NodeJS",
    type: "Backend Application",
    description: "Created a basic Node.js server with RESTful API endpoints, middleware implementation, and error handling.",
    technologies: ["Node.js", "Express", "REST API"],
    links: {
      github: "https://github.com/razan-aboushi/Simple_NodeJS",
    },
    icon: Server,
  },
];

// Split the data into featured and standard projects
const featuredProjects = projectsData.filter(p => p.featured);
const standardProjects = projectsData.filter(p => !p.featured);

export default function ProjectsElegant() {
  return (
    <section id="projects" className="relative py-24 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Work</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of my NPM packages, full-stack applications, and open-source contributions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {featuredProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div 
                key={index}
                className="group relative flex flex-col justify-between p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/[0.07] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-white/5 rounded-xl text-purple-400 border border-white/10">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <span className="text-xs font-medium px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full border border-purple-500/20">
                      {project.type}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-[#0a0a0a] text-gray-300 rounded-md text-xs border border-gray-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="relative z-10 flex gap-4 mt-auto">
                  {project.links.npm && (
                    <a
                      href={project.links.npm}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-white px-4 py-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 transition-colors"
                    >
                      <Box size={16} />
                      NPM Registry
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-white px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                    >
                      <GitBranch size={16} />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <h3 className="text-2xl font-bold text-white mb-6 text-center">Other Projects & Games</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {standardProjects.map((project, index) => {
              return (
                <div key={index} className="p-5 rounded-xl bg-white/5 border border-white/5 hover:border-gray-600 transition-colors flex flex-col h-full">
                  <h4 className="text-lg font-semibold text-white mb-2">{project.title}</h4>
                  <p className="text-sm text-gray-500 mb-4 flex-grow line-clamp-3">{project.description}</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                    <span className="text-xs text-gray-600">{project.technologies[0]}</span>
                    {project.links.github && (
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <GitBranch size={18} />
                      </a>
                    )}
                  </div>
                </div>
              )
            })}
        </div>
        
        <div className="flex justify-center">
          <a
            href="https://github.com/razan-aboushi"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white/5 text-white rounded-full font-semibold border border-white/10 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300"
          >
            <GitBranch size={20} className="group-hover:text-purple-400 transition-colors" />
            <span>View All 39+ Projects on GitHub</span>
            <ExternalLink size={16} className="text-gray-500 group-hover:text-white transition-colors" />
          </a>
        </div>

      </div>
    </section>
  );
}