"use client";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Education from "@/components/Education";
import ProgrammingLanguages from "@/components/ProgrammingLanguages";
import Skills from "@/components/Skills";
import TechStack from "@/components/TechStack";
import Socials from "@/components/Socials";
import ResumeLink from "@/components/ResumeLink";
import Location from "@/components/Location";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main>
      <div className="min-h-full px-4 py-10 bg-black">
        {/* Hero Section */}
        <Hero className="relative z-10 w-full flex flex-col items-center" />

        {/* Projects Section */}
        <Projects />

        {/* About Me Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-10 p-4 bg-black relative w-full">
          {/* Section Title */}
          <div className="relative col-span-1 md:col-span-2 lg:col-span-5 text-white flex justify-center font-bold text-lg md:text-xxxl m-4 text-center">
            About Me
          </div>

          {/* Content Sections */}
          <Introduction />
          <Education />
          <ProgrammingLanguages />
          <Skills />
          <TechStack />
          <Socials />
          <ResumeLink />
          <Location />
        </div>
      </div>
    </main>
  );
}
