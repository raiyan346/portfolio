import React from 'react';
import { motion } from 'framer-motion';
import { FaCircle } from 'react-icons/fa';

const IntroSection = () => {
  const scrollToContact = () => {
    const contact = document.getElementById('contact');
    if (!contact) return;

    const top = contact.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top,
      behavior: 'smooth',
    });
  };

  return (
    <section className="intro hero-cartoon relative" id="hero">
      {/* Raiyan Logo - Top Left */}
      <div className="absolute top-6 left-6 z-10">
        <span className="raiyan-logo text-sm font-mono text-sky-300 tracking-wide">Raiyan</span>
      </div>

      {/* Resume Button - Top Right */}
      <motion.a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-6 right-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8, type: 'spring' }}
      >
        View Resume
      </motion.a>

      <motion.div
        className="hero-content intro-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Animated Badge */}
        <motion.div
          className="intro-badge cartoon-badge"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          👋 Hello, I’m <span className="highlight-name">Raiyan B</span> <span className="badge">Designer</span>
        </motion.div>

        {/* Titles */}
        <motion.h1 className="cartoon-title yellow" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          SKETCH
        </motion.h1>
        <motion.h1 className="cartoon-title purple" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          CODE
        </motion.h1>
        <motion.h1 className="cartoon-title cyan" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
          POLISH
        </motion.h1>
        <motion.h1 className="cartoon-title white" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}>
          LAUNCH
        </motion.h1>

        {/* Subtitle */}
        <div className="hero-sub mt-4">
          <p className="location-tag">// Based in <span>Chennai, India</span></p>
          <p className="catch-line">
            I blend <span className="highlight-purple">UI precision</span> and <span className="highlight-cyan">engineering logic</span> to build clean, scalable products.
          </p>
        </div>

        {/* Connect Button */}
        <motion.button
          className="cta-button connect cartoon-button mt-8"
          whileHover={{ scale: 1.08, rotate: 1 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToContact}
        >
          <FaCircle className="dot" /> Let’s Connect
        </motion.button>
      </motion.div>
    </section>
  );
};

export default IntroSection;
