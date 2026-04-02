import NavigationElegant from "@/components/NavigationElegant";
import HeroElegant from "@/components/HeroElegant";
import SkillsElegant from "@/components/SkillsElegant";
import ExperienceElegant from "@/components/ExperienceElegant";
import ProjectsElegant from "@/components/ProjectsElegant";
import EducationElegant from "@/components/EducationElegant";

export default function HomeElegant() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <NavigationElegant />
      <main>
        <HeroElegant />
        <SkillsElegant />
        <ExperienceElegant />
        <ProjectsElegant />
        <EducationElegant />
      </main>
    </div>
  );
}
