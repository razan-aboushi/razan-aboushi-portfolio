import React from 'react';
import NavigationElegant from './components/NavigationElegant';
import HeroSimple from './components/HeroSection';
import SkillsElegant from './components/SkillsElegant';
import ExperienceElegant from './components/ExperienceElegant';
import ProjectsElegant from './components/ProjectsElegant';
import EducationElegant from './components/EducationElegant';
import AnimatedBackground from './components/AnimatedBackground';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <AnimatedBackground />
      <NavigationElegant />
      <main className="relative z-10">
        <HeroSimple />
        <SkillsElegant />
        <ExperienceElegant />
        <ProjectsElegant />
        <EducationElegant />
      </main>
      <Footer />
    </div>
  );
}

export default App;
