"use client"
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
      <div className="min-h-full p-10 bg-black">
        <Hero className="relative z-10 max-w-full w-full" />
        <Projects/>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 p-4 bg-black relative">
          <div className="relative col-span-1 md:col-span-5 text-white flex justify-center font-bold text-xxxl m-4">About me</div>
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

