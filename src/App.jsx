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

function App() {
  return (
    <div className="bg-[#060606] text-white overflow-x-hidden">

      <ScrollProgress />
      <FloatingBackground />

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <Education />

      <Contact />

      <Footer />

    </div>
  );
}

export default App;