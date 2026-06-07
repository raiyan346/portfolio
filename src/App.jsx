import React, { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { useLenis } from './hooks/useLenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Blog from './components/Blog';

gsap.registerPlugin(ScrollTrigger);

/* Scroll progress bar wired to GSAP */
function ScrollProgress() {
  useEffect(() => {
    const bar = document.getElementById('scroll-bar');
    if (!bar) return;
    const ctx = gsap.context(() => {
      gsap.to(bar, {
        width: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: document.documentElement,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.3,
        },
      });
    });
    return () => ctx.revert();
  }, []);
  return null;
}

/* Inner app — uses Lenis hook (needs to be inside ThemeProvider) */
function AppInner() {
  useLenis();
  const [isBlog, setIsBlog] = React.useState(window.location.hash === '#blog');

  useEffect(() => {
    const handleHash = () => {
      setIsBlog(window.location.hash === '#blog');
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <>
      {/* Background blobs */}
      <div className="bg-blobs" aria-hidden="true">
        <div className="bg-blob bg-blob-1" />
        <div className="bg-blob bg-blob-2" />
        <div className="bg-blob bg-blob-3" />
      </div>

      <ScrollProgress />
      <Navbar />

      <main>
        {isBlog ? (
          <Blog />
        ) : (
          <>
            <Hero />
            <div className="section-divider" />
            <About />
            <div className="section-divider" />
            <Projects />
            <div className="section-divider" />
            <Contact />
          </>
        )}
      </main>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <div>
        <AppInner />
      </div>
    </ThemeProvider>
  );
}