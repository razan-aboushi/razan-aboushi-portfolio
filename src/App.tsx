import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion';
import NavigationElegant from './components/NavigationElegant';
import HeroSection from './components/HeroSection';
import SkillsElegant from './components/SkillsElegant';
import ExperienceElegant from './components/ExperienceElegant';
import ProjectsElegant from './components/Projects';
import EducationElegant from './components/EducationElegant';
import MediumArticles from './components/MediumArticles';
import NpmPackages from './components/npmPackages';
import Footer from './components/Footer';
import Highlights from './components/Highlights';
import ScrollProgress from './components/ui/ScrollProgress';
import { useCardSpotlight } from './hooks/useCardSpotlight';

function App() {
  useCardSpotlight();

  return (
    // `strict` makes any accidental full `motion.*` import throw, keeping the lighter bundle honest.
    <LazyMotion features={domAnimation} strict>
      {/* Framer Motion ignores prefers-reduced-motion unless told to; "user" drops transform animations for those visitors. */}
      <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-x-clip">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-black"
        >
          Skip to content
        </a>
        <ScrollProgress />
        <NavigationElegant />
        <main id="main" className="relative z-10">
          <HeroSection />
          <Highlights />
          <SkillsElegant />
          <ExperienceElegant />
          <NpmPackages />
          <ProjectsElegant />
          <EducationElegant />
          <MediumArticles />
        </main>
        <Footer />
      </div>
      </MotionConfig>
    </LazyMotion>
  );
}

export default App;
