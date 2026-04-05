import { useState } from "react";
import { Calendar, MapPin, ChevronRight, Briefcase, ChevronDown, ChevronUp } from "lucide-react";

const experienceData = [
  {
    company: "OpenSooq",
    position: "Full Stack Engineer",
    duration: "Sep 2023 – Present",
    location: "Amman, Jordan",
    isCurrent: true,
    achievements: [
      "Architected and optimized complex filtering functionality using Context API and Zustand, improving navigation and user experience",
      "Integrated Google Tag Manager (GTM) tracking and logging systems to capture user interactions and support reporting",
      "Spearheaded SEO and Core Web Vitals improvements utilizing Google Search Console and Lighthouse",
      "Implemented Single Sign-On (SSO) features, handling authentication and multiple login options for users",
      "Worked on Spotlights, Commercial Ads, and Listings Comparison features to improve visibility and engagement",
      "Optimized JavaScript bundles with code splitting, boosting Core Web Vitals more than 30%",
      "Reduced page load time by 2.5+ seconds through build enhancements",
      "Resolved critical 4xx/5xx errors and redirect chains, resulting in a highly optimized crawl budget and improved site indexing",
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
    isCurrent: false,
    achievements: [
      "Completed a highly selective, intensive 7-month full-stack development bootcamp",
      "Developed responsive, data-driven web applications from scratch utilizing React, Node.js, and relational databases",
      "Gained practical, hands-on experience designing REST APIs, managing version control via Git, and executing team-based project development",
    ],
  },
  {
    company: "Zarqa Private University Library",
    position: "Supply Section Coordinator",
    duration: "Nov 2022 – Feb 2023",
    location: "Zarqa, Jordan",
    isCurrent: false,
    achievements: [
      "Managed academic book supply processes, procurement, and inventory tracking across multiple university departments",
    ],
  },
];

const ExperienceCard = ({ exp, index }: { exp: any; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const INITIAL_COUNT = 3; 
  const hasMore = exp.achievements.length > INITIAL_COUNT;
  
  const visibleAchievements = isExpanded 
    ? exp.achievements 
    : exp.achievements.slice(0, INITIAL_COUNT);

  return (
    <div 
      className="relative pl-10 md:pl-24 animate-fade-in"
      style={{ animationDelay: `${0.2 + index * 0.15}s` }}
    >
      <div 
        className={`absolute left-[7px] md:left-[31px] top-1.5 w-[18px] h-[18px] rounded-full border-4 border-[#0a0a0a] z-10 ${
          exp.isCurrent 
            ? "bg-purple-400 shadow-[0_0_15px_rgba(192,132,252,0.6)]" 
            : "bg-gray-600"
        }`}
      />

      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:border-purple-500/30 hover:bg-white/[0.07] transition-all duration-300">
        
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
              {exp.position}
            </h3>
            <div className="flex items-center gap-2 text-base md:text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-3">
              <Briefcase size={18} className="text-purple-400 shrink-0" />
              {exp.company}
            </div>
          </div>
          
          <div className="flex flex-wrap md:flex-col gap-2 shrink-0">
            <div className="flex items-center gap-2 text-xs md:text-sm text-gray-400 bg-gray-900/50 px-3 py-1.5 rounded-full border border-gray-800 w-fit">
              <Calendar size={14} className="text-purple-400 shrink-0" />
              <span>{exp.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-xs md:text-sm text-gray-400 bg-gray-900/50 px-3 py-1.5 rounded-full border border-gray-800 w-fit">
              <MapPin size={14} className="text-blue-400 shrink-0" />
              <span>{exp.location}</span>
            </div>
          </div>
        </div>

        <ul className="space-y-3 relative">
          {visibleAchievements.map((achievement: string, achIndex: number) => (
            <li 
              key={achIndex} 
              className="flex items-start gap-3 group animate-fade-in"
            >
              <ChevronRight 
                size={16} 
                className="text-purple-500 mt-1 shrink-0 group-hover:text-cyan-400 transition-colors" 
              />
              <span className="text-gray-300 leading-relaxed text-sm md:text-[15px]">
                {achievement}
              </span>
            </li>
          ))}
        </ul>

        {hasMore && (
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-6 flex items-center gap-2 text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors py-2 px-4 rounded-lg hover:bg-purple-500/10 w-fit"
          >
            {isExpanded ? (
              <>
                <ChevronUp size={16} />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown size={16} />
                Show {exp.achievements.length - INITIAL_COUNT} More Achievements
              </>
            )}
          </button>
        )}

      </div>
    </div>
  );
};

export default function ExperienceElegant() {
  return (
    <section id="experience" className="relative py-20 bg-[#0a0a0a] scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4">
        
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My career journey building scalable applications and solving complex technical challenges.
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute left-[15px] md:left-[39px] top-2 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 via-blue-500/50 to-transparent" />

          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}