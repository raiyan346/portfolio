import React from 'react';
import { motion } from 'framer-motion';

const IntroSection = () => {
  const scrollToHero = () => {
    const hero = document.getElementById('hero');
    if (hero) hero.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="intro">
      <div className="intro-content">
        <motion.h1 className="intro-line purple" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          SKETCH
        </motion.h1>
        <motion.h1 className="intro-line yellow" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          CODE
        </motion.h1>
        <motion.h1 className="intro-line white" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
          POLISH
        </motion.h1>
        <motion.h1 className="intro-line green" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
          & LAUNCH.
        </motion.h1>

        <p className="intro-subtext">
          I blend UI precision and engineering logic to deliver beautiful, usable, and scalable products. <span className="highlight-purple">efficiency</span>, <span className="highlight-yellow">aesthetics</span>, and <span className="highlight-green">functionality</span>.
        </p>
      </div>

      {/* 🔽 Custom SVG scroll-down icon */}
      <div className="scroll-arrow-wrapper" onClick={scrollToHero}>
        <svg className="scroll-arrow-icon" viewBox="0 0 24 24">
          <path d="M12 5v14m0 0l-5-5m5 5l5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
};

export default IntroSection;
