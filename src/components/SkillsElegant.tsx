import { Layout, Server, Wrench, Zap } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend & Design",
    icon: Layout,
    iconColor: "text-cyan-400",
    hoverBorder: "hover:border-cyan-500/50",
    skills: [
      "React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", 
      "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "WordPress",
      "Responsive Design", "UI/UX", "Figma"
    ],
  },
  {
    title: "Backend & Auth",
    icon: Server,
    iconColor: "text-blue-400",
    hoverBorder: "hover:border-blue-500/50",
    skills: [
      "Node.js", "Express.js", "RESTful APIs", "MySQL", 
      "JWT", "OAuth", "Firebase"
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    iconColor: "text-pink-400",
    hoverBorder: "hover:border-pink-500/50",
    skills: [
      "Git", "GitHub", "NPM", "Webpack", 
      "GitHub Actions (CI/CD)", "Postman", "Jira", "Debugging"
    ],
  },
  {
    title: "Performance & Quality",
    icon: Zap,
    iconColor: "text-purple-400",
    hoverBorder: "hover:border-purple-500/50",
    skills: [
      "Google Search Console", "Google Tag Manager (GTM)", 
      "Performance Testing", "Testing & Quality", "Agile Methodologies"
    ],
  },
];

export default function SkillsElegant() {
  return (
    <section id="skills" className="relative py-24 bg-[#0a0a0a] overflow-hidden">
     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Arsenal</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of modern web technologies, performance strategies, and architectural methodologies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={index}
                className={`p-8 rounded-2xl bg-white/5 border border-white/10 transition-colors duration-300 ${category.hoverBorder}`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-lg bg-white/5 ${category.iconColor}`}>
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-gray-800 hover:border-gray-600 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}