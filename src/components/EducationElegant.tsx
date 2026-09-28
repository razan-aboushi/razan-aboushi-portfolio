import { GraduationCap, Award, Calendar, MapPin, Sparkles, BookOpen, ExternalLink } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal, { staggerDelay } from "./ui/Reveal";
import { publicAsset } from "../utils/publicAsset";

const educationData = [
  {
    degree: "Bachelor's Degree in Management Information Systems (MIS)",
    institution: "The University of Jordan",
    location: "Amman, Jordan",
    duration: "Sep 2018 – Aug 2022",
    gpa: "3.94/4.00 - Excellent",
    isHighlight: true, 
    theme: "blue",
    certificateUrl: publicAsset("certificates/universityCertificate.pdf"),
  },
  {
    degree: "Diploma in English Language and Literature",
    institution: "JU Gate Academy",
    location: "Amman, Jordan",
    duration: "Dec 2022 – May 2024",
    gpa: "Excellent Rating",
    isHighlight: false,
    theme: "purple",
    certificateUrl: publicAsset("certificates/JuGateAcademyCertificate.pdf"),
  },
];

export default function EducationElegant() {
  return (
    <section id="education" className="relative py-24 md:py-28 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Education"
          title="Education &"
          highlight="Background"
          description="My academic foundation and learning journey"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {educationData.map((edu, index) => (
            <Reveal key={edu.degree} delay={staggerDelay(index)} className="h-full">
            <div
              className="spotlight relative group flex flex-col p-6 sm:p-8 rounded-2xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-300 h-full"
            >
               <div className={`absolute inset-0 rounded-2xl border transition-colors duration-300 pointer-events-none ${
                edu.theme === 'blue' 
                  ? 'border-transparent group-hover:border-blue-500/50' 
                  : 'border-transparent group-hover:border-purple-500/50'
              }`} />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start gap-4 mb-8 flex-grow">
                  <div className={`p-3 rounded-xl border shrink-0 ${
                    edu.theme === 'blue' 
                      ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' 
                      : 'bg-purple-500/10 text-purple-400 border-purple-500/20'
                  }`}>
                    {edu.theme === 'blue' ? <GraduationCap size={28} /> : <BookOpen size={28} />}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 leading-snug">
                      {edu.degree}
                    </h3>
                    <div className="text-lg font-medium text-gray-400">
                      {edu.institution}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mt-auto mb-6">
                  <div className="flex items-center gap-1.5 text-sm text-gray-400 bg-gray-900/80 px-3 py-1.5 rounded-md border border-gray-800">
                    <Calendar size={14} />
                    <span>{edu.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-gray-400 bg-gray-900/80 px-3 py-1.5 rounded-md border border-gray-800">
                    <MapPin size={14} />
                    <span>{edu.location}</span>
                  </div>
                  
                  <div className={`flex items-center gap-1.5 text-sm font-semibold px-3 py-1.5 rounded-md border ${
                    edu.isHighlight 
                      ? "bg-amber-500/10 text-amber-400 border-amber-500/30 shadow-[0_0_10px_rgba(245,158,11,0.2)]" 
                      : "bg-gray-800/80 text-gray-300 border-gray-700"
                  }`}>
                    {edu.isHighlight ? <Sparkles size={14} /> : <Award size={14} />}
                    <span>{edu.gpa}</span>
                  </div>
                </div>  

                {edu.certificateUrl && (
                  <div className="pt-5 border-t border-white/5 flex justify-start sm:justify-end">
                    <a
                      href={edu.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg transition-colors ${
                        edu.theme === 'blue'
                          ? 'bg-blue-500/10 text-blue-300 hover:bg-blue-500/20 border border-blue-500/20'
                          : 'bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 border border-purple-500/20'
                      }`}
                    >
                      View Certificate
                      <span className="sr-only">: {edu.degree}, {edu.institution} (PDF, opens in a new tab)</span>
                      <ExternalLink size={15} aria-hidden="true" />
                    </a>
                  </div>
                )}
              </div>
            </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}