import { Calendar, MapPin, ChevronRight, Briefcase } from "lucide-react";

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

export default function ExperienceElegant() {
  return (
    <section id="experience" className="relative py-24 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My career journey building scalable applications and solving complex technical challenges.
          </p>
        </div>
        
        {/* Timeline Container */}
        <div className="relative">
          
          {/* The Vertical Line */}
          {/* We use a gradient line to make it look modern */}
          <div className="absolute left-[15px] md:left-[39px] top-2 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 via-blue-500/50 to-transparent" />

          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <div key={index} className="relative pl-10 md:pl-24">
                
                {/* Timeline Dot */}
                {/* The glowing dot effect for current role, standard dot for past roles */}
                <div 
                  className={`absolute left-[7px] md:left-[31px] top-1.5 w-[18px] h-[18px] rounded-full border-4 border-[#0a0a0a] z-10 ${
                    exp.isCurrent 
                      ? "bg-purple-400 shadow-[0_0_15px_rgba(192,132,252,0.6)]" 
                      : "bg-gray-600"
                  }`}
                />

                {/* Experience Card */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:border-purple-500/30 hover:bg-white/[0.07] transition-all duration-300">
                  
                  {/* Header part of the card */}
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {exp.position}
                      </h3>
                      <div className="flex items-center gap-2 text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-3">
                        <Briefcase size={18} className="text-purple-400" />
                        {exp.company}
                      </div>
                    </div>
                    
                    {/* Date and Location Badges */}
                    <div className="flex flex-col gap-2 shrink-0">
                      <div className="flex items-center gap-2 text-sm text-gray-400 bg-gray-900/50 px-3 py-1.5 rounded-full border border-gray-800 w-fit">
                        <Calendar size={14} className="text-purple-400" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400 bg-gray-900/50 px-3 py-1.5 rounded-full border border-gray-800 w-fit">
                        <MapPin size={14} className="text-blue-400" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Achievements List */}
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-3 group">
                        <ChevronRight 
                          size={16} 
                          className="text-purple-500 mt-1 shrink-0 group-hover:text-cyan-400 transition-colors" 
                        />
                        <span className="text-gray-300 leading-relaxed text-[15px]">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}