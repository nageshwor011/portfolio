import Header from "./components/Header";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import AboutSection from "./components/About";
import Profile from "./Profile";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen  pb-20 gap-16 sm:px-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main>
        <Profile />
        <AboutSection />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
