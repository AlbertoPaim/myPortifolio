"use cliet"

import { HeroSection } from "./HeroSection/HeroSection";
import { Nav } from "./components/Nav";
import { Projects } from "./projects/page";
import { About } from "./AboutMe/About";
import { StarBackground } from "./components/stars";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-black via-background to-destaqueSecundario flex flex-col min-h-screen">

      <StarBackground />

      <Nav />
      <HeroSection />
      <About />
      <Projects />
    </div>
  );
}
