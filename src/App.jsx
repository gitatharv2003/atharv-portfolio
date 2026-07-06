import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import ScrollProgress from "./components/ScrollProgress";
import FloatingBackground from "./components/FloatingBackground";
import SmoothScroll from "./components/SmoothScroll";
import CursorAura from "./components/CursorAura";
import ActionRipple from "./components/ActionRipple";

function App() {
  return (
    <div className="relative isolate min-h-screen bg-[#060606] text-white overflow-x-hidden">

      <SmoothScroll />
      <ScrollProgress />
      <CursorAura />
      <ActionRipple />
      <FloatingBackground />

      <div className="relative z-10">
        <Navbar />

        <Hero />

        <About />

        <Skills />

        <Projects />

        <Education />

        <Contact />

        <Footer />
      </div>

    </div>
  );
}

export default App;
