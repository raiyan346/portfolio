import { motion } from 'framer-motion';
import { FaCircle } from 'react-icons/fa';

const Hero = () => {
  const scrollToAbout = () =>
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="hero-cartoon" id="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Cartoon Clouds or Background SVG layer (optional) */}

        {/* Intro Badge */}
        <div className="intro-badge cartoon-badge">
          👋 Hello, I’m <span className="highlight-name">Raiyan B</span> <span className="badge">Designer</span>
        </div>

        {/* Cartoon-style animated Titles */}
        <h1 className="cartoon-title yellow">SKETCH</h1>
        <h1 className="cartoon-title purple">CODE</h1>
        <h1 className="cartoon-title cyan">POLISH</h1>
        <h1 className="cartoon-title white">LAUNCH</h1>

        {/* Subtitle */}
        <div className="hero-sub">
          <p className="location-tag">// Based in <span>Chennai, India</span></p>
          <p className="catch-line">
            I blend <span className="highlight-purple">UI precision</span> and <span className="highlight-cyan">engineering logic</span> to build clean, scalable products.
          </p>
        </div>

        {/* Call to Action */}
        <motion.button
          className="cta-button connect cartoon-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToAbout}
        >
          <FaCircle className="dot" /> Let’s Connect
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
