import { Layout, Server, Wrench, Zap } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal, { staggerDelay } from "./ui/Reveal";

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
    <section id="skills" className="relative py-24 md:py-28 bg-[#0a0a0a] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] max-w-full h-[400px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Skills"
          title="Technical"
          highlight="Arsenal"
          description="A comprehensive toolkit of modern web technologies, performance strategies, and architectural methodologies"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Reveal key={category.title} delay={staggerDelay(index)} className="h-full">
                <div
                  className={`spotlight group h-full p-6 sm:p-8 rounded-2xl bg-white/[0.04] border border-white/10 transition-all duration-300 hover:bg-white/[0.06] hover:-translate-y-1 ${category.hoverBorder}`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${category.iconColor} transition-transform duration-300 group-hover:scale-110`}>
                      <Icon size={24} strokeWidth={1.5} aria-hidden="true" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">{category.title}</h3>
                  </div>

                  <ul className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="px-3.5 py-1.5 sm:px-4 sm:py-2 bg-gray-900/80 border border-gray-800 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-gray-800 hover:border-gray-600 transition-colors"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}