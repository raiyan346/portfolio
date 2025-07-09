import { useState } from "react";
import MainIntroSection from "./components/MainIntroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import NavBar from "./components/Navbar"; 
import Projects from "./components/Projects";
import IntroSection from "./components/Introsection";

function App() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <div className="App">
      {!introDone && <MainIntroSection onComplete={() => setIntroDone(true)} />}

      {introDone && (
        <>
        <IntroSection/>
          <NavBar /> {/* ✅ Sidebar appears after intro */}
    
          <About />
          <Skills />
          <Projects/>
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;
