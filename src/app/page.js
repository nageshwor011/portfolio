"use client";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import AboutSection from "./components/About";
import Profile from "./Profile";
import Footer from "./components/Footer";
import { useRef } from "react";

export default function Home() {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const skillsRef = useRef(null);
  const projectRef = useRef(null);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen  pb-20 gap-16 sm:px-20 font-[family-name:var(--font-geist-sans)]">
      <Header
        aboutRef={aboutRef}
        contactRef={contactRef}
        skillsRef={skillsRef}
        projectRef={projectRef}
      />
      <main>
        <Profile />
        <AboutSection aboutRef={aboutRef} />
        <Skills skillsRef={skillsRef} />
        <Projects projectRef={projectRef} />
        <Contact contactRef={contactRef} />
      </main>
      <Footer />
    </div>
  );
}
