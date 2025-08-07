"use client";

import { HeroSection } from "./HeroSection/HeroSection";
import About from "./about/page";
import { Nav } from "../components/Nav";
import { StarBackground } from "../components/stars";
import Contacts from "./contact/page";
import Projects from "./projects/page";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [showMeteor, setShowMeteor] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowMeteor(true);
      setTimeout(() => setShowMeteor(false), 2000);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center mx-auto overflow-hidden relative min-h-screen">


      {showMeteor && (
        <motion.div
          initial={{ x: "20%", y: "10%", opacity: 100 }}
          animate={{ x: "-100%", y: "600%", opacity: 100 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 5, ease: "linear" }}
          className="absolute -z-10"
        >
          <Image src="/meteor.png" alt="meteor" width={500} height={500} className="-rotate-40" />
        </motion.div>
      )}

      <StarBackground />

      <Nav />
      <HeroSection />
      <About />
      <Projects />
      <Contacts />
    </div>
  );
}
