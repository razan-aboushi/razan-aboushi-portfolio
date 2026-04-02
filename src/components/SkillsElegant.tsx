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

export default function SkillsElegant() {
  return (
    <section id="skills" className="ns-section">
      <div className="ns-container">
        <div className="ns-section-header">
          <h2 className="ns-section-title animate-fade-in">
            Skills & Technologies
          </h2>
          <p className="ns-section-description animate-fade-in-delay">
            A comprehensive toolkit of modern web development technologies and tools
          </p>
        </div>
        
        <div className="space-y-12 animate-fade-in-delay-2">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-white mb-6 animate-slide-in-left">
              Frontend
            </h3>
            <div className="flex flex-wrap gap-2 justify-center animate-fade-in-delay-3">
              {skillsData.frontend.map((skill) => (
                <span
                  key={skill}
                  className="ns-lang-card animate-scale-in"
                  style={{ animationDelay: `${Math.random() * 0.3}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-white mb-6 animate-slide-in-right">
              Backend
            </h3>
            <div className="flex flex-wrap gap-2 justify-center animate-fade-in-delay-3">
              {skillsData.backend.map((skill) => (
                <span
                  key={skill}
                  className="ns-lang-card animate-scale-in"
                  style={{ animationDelay: `${Math.random() * 0.3}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-white mb-6 animate-slide-in-left">
              Tools & Methodologies
            </h3>
            <div className="ns-grid-cols-2 animate-fade-in-delay-3">
              {skillsData.tools.map((skill) => (
                <span
                  key={skill}
                  className="ns-lang-card animate-scale-in"
                  style={{ animationDelay: `${Math.random() * 0.3}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
