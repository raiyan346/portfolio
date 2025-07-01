import React, { useState } from "react";
import MainIntroSection from "./MainIntroSection";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import NavBar from "./Navbar"; 
import Projects from "./Projects";
import IntroSection from "./Introsection";

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
