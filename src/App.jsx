import React, { useState } from "react";
import MainIntroSection from "./MainIntroSection";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import NavBar from "./Navbar"; 
import Projects from "./Projects";

function App() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <div className="App">
      {!introDone && <MainIntroSection onComplete={() => setIntroDone(true)} />}

      {introDone && (
        <>
          <NavBar /> {/* ✅ Sidebar appears after intro */}
          <Hero />
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
