"use cliet"

import { HeroSection } from "./HeroSection/HeroSection";
import { Nav } from "./components/Nav";
import { About } from "./AboutMe/About";
import { StarBackground } from "./components/stars";
import { Projects } from "./projects/Projects";

export default function Home() {
  return (
    <div className="font-headline relative overflow-hidden  flex flex-col min-h-screen">

      <StarBackground />

      <Nav />
      <HeroSection />
      <About />
      <Projects />
    </div>
  );
}
