import ScrollProgress from "../components/ScrollProgress";
import CursorGlow from "../components/CursorGlow";
import SocialDock from "../components/SocialDock";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import About from "../components/About";
import Education from "../components/Education";
import Research from "../components/Research";
import Reviewer from "../components/Reviewer";
import Internships from "../components/Internships";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">
      <ScrollProgress />

      <CursorGlow />

      <SocialDock />

      <Navbar />

      <Hero />

      <Stats />

      <About />

      <Education />

      <Research />

      <Reviewer />

      <Internships />

      <Projects />

      <Skills />

      <Achievements />

      <Contact />

      <Footer />
    </main>
  );
}