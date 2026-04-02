"use client";

import { useState, useEffect } from "react";
import NavigationElegant from "@/components/NavigationElegant";
import HeroSimple from "@/components/HeroSimple";
import SkillsElegant from "@/components/SkillsElegant";
import ExperienceElegant from "@/components/ExperienceElegant";
import ProjectsElegant from "@/components/ProjectsElegant";
import EducationElegant from "@/components/EducationElegant";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function Home() {
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
    </div>
  );
}
