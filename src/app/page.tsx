"use cliet"
import { HeroSection } from "./HeroSection/HeroSection";
import About from "./about/page";
import { Nav } from "../components/Nav";
import { StarBackground } from "../components/stars";
import Contacts from "./contact/page";
import Projects from "./projects/page";


export default function Home() {
  return (
    <div className="flex flex-col items-center mx-auto overflow-hidden">
      <StarBackground />
      <Nav />
      <HeroSection />
      <About />
      <Projects />
      <Contacts />
    </div>
  );
}
