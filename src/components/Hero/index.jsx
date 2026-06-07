import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiGithub, FiLinkedin, FiMail, FiArrowRight, FiArrowDown } from 'react-icons/fi';
import { personalInfo } from '../../data/portfolioData';
import { fadeIn, staggerContainer } from '../../animations/variants';
import heroImg from '../../assets/hero.jpg';
import DotGrid from '../ui/DotGrid';


gsap.registerPlugin(ScrollTrigger);

/* ---------- CountUp atom ---------- */
function CountUp({ target, suffix = '' }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obj = { v: 0 };
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        v: target,
        duration: 2,
        ease: 'power2.out',
        onUpdate() { el.textContent = Math.round(obj.v) + suffix; },
        scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      });
    });
    return () => ctx.revert();
  }, [target, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}

/* ---------- Animated role switcher ---------- */
function RoleSwitcher({ roles }) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx(i => (i + 1) % roles.length), 2800);
    return () => clearInterval(id);
  }, [roles.length]);
  return (
    <div style={{ height: '1.2em', overflow: 'hidden', position: 'relative' }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={idx}
          initial={{ y: 40, opacity: 0, filter: 'blur(8px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: -40, opacity: 0, filter: 'blur(8px)' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="gradient-text-animated"
          style={{
            display: 'block',
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 800,
          }}
        >
          {roles[idx]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

/* ---------- Floating glass card ---------- */
function FloatingCard({ value, label, icon, style, floatClass, delay }) {
  return (
    <motion.div
      className={`glass-card ${floatClass}`}
      initial={{ opacity: 0, scale: 0.85, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{
        padding: '1.25rem 1.5rem',
        minWidth: '160px',
        ...style,
      }}
    >
      {icon && (
        <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{icon}</div>
      )}
      {value && (
        <div
          style={{
            fontSize: '1.75rem',
            fontWeight: 800,
            fontFamily: "'Outfit', sans-serif",
            background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: 1,
          }}
        >
          {value}
        </div>
      )}
      <div style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: '0.25rem' }}>{label}</div>
    </motion.div>
  );
}

/* ---------- Particle ring ---------- */
function ParticleRing() {
  return (
    <div style={{
      position: 'absolute',
      width: '340px', height: '340px',
      top: '50%', left: '50%',
      marginTop: '-170px', marginLeft: '-170px',
      pointerEvents: 'none',
    }}>
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: '4px', height: '4px',
            borderRadius: '50%',
            background: i % 3 === 0 ? 'var(--accent)' : i % 3 === 1 ? 'var(--accent-2)' : 'var(--accent-3)',
            top: '50%', left: '50%',
            boxShadow: `0 0 6px ${i % 3 === 0 ? 'var(--accent)' : i % 3 === 1 ? 'var(--accent-2)' : 'var(--accent-3)'}`,
          }}
          animate={{
            x: [0, Math.cos(i * 30 * Math.PI / 180) * 150],
            y: [0, Math.sin(i * 30 * Math.PI / 180) * 150],
            scale: [0, 1, 0.5],
            opacity: [0, 1, 0.3],
          }}
          transition={{
            duration: 4,
            delay: i * 0.15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const handleMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      hero.style.setProperty('--mx', x);
      hero.style.setProperty('--my', y);
    };
    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '6rem',
      }}
    >
      {/* Interactive background dot grid */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.8, pointerEvents: 'none' }}>
        <DotGrid
          dotSize={2.5}
          gap={24}
          baseColor="#252528"
          activeColor="#ffffff"
          proximity={120}
          shockRadius={220}
          shockStrength={5}
          resistance={750}
          returnDuration={1.2}
        />
      </div>

      <div className="section-container" style={{ width: '100%', position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* ---- LEFT: Text content ---- */}
          <motion.div
            variants={staggerContainer(0.12, 0.3)}
            initial="hidden"
            animate="show"
          >
            {/* Badge */}
            <motion.div variants={fadeIn('up', 0)} style={{ marginBottom: '1.5rem' }}>
              <span
                className="chip pulse-glow"
                style={{ display: 'inline-flex' }}
              >
                <span style={{
                  width: '6px', height: '6px', borderRadius: '50%',
                  background: '#4ade80', flexShrink: 0,
                  boxShadow: '0 0 8px #4ade80',
                  animation: 'floatA 1.5s ease-in-out infinite',
                }} />
                Available for work
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              variants={fadeIn('up', 0)}
              style={{ color: 'var(--muted)', fontSize: '1.05rem', marginBottom: '0.5rem', letterSpacing: '0.05em' }}
            >
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={fadeIn('up', 0)}
              style={{
                fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 900,
                color: 'var(--text)',
                lineHeight: 1.05,
                letterSpacing: '-0.04em',
                marginBottom: '0.5rem',
                textShadow: '0 0 40px rgba(124,58,237,0.15)',
              }}
            >
              {personalInfo.name}
            </motion.h1>

            {/* Role switcher */}
            <motion.div
              variants={fadeIn('up', 0)}
              style={{
                fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)',
                marginBottom: '1.5rem',
              }}
            >
              <RoleSwitcher roles={personalInfo.roles} />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeIn('up', 0)}
              style={{
                color: 'var(--text-2)',
                fontSize: '1.05rem',
                lineHeight: 1.75,
                maxWidth: '460px',
                marginBottom: '2rem',
              }}
            >
              {personalInfo.bio}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={fadeIn('up', 0)}
              style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}
            >
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects <FiArrowRight />
              </motion.button>
              <motion.button
                className="btn-secondary"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Hire Me
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeIn('up', 0)}
              style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap' }}
            >
              {personalInfo.stats.map((stat, i) => (
                <div key={i}>
                  <div
                    style={{
                      fontSize: '2rem',
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 800,
                      background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      lineHeight: 1,
                      filter: 'drop-shadow(0 0 8px var(--accent-glow))',
                    }}
                  >
                    <CountUp target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div style={{ color: 'var(--muted)', fontSize: '0.8rem', marginTop: '0.25rem' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Social icons */}
            <motion.div
              variants={fadeIn('up', 0)}
              style={{ display: 'flex', gap: '0.75rem', marginTop: '2rem' }}
            >
              {[
                { icon: FiGithub, href: personalInfo.github },
                { icon: FiLinkedin, href: personalInfo.linkedin },
                { icon: FiMail, href: `mailto:${personalInfo.email}` },
              ].map(({ icon: Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    width: '40px', height: '40px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    borderRadius: '50%',
                    background: 'var(--glass)',
                    border: '1px solid var(--border)',
                    color: 'var(--muted)',
                    transition: 'color 0.2s, border-color 0.2s, box-shadow 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = 'var(--accent)';
                    e.currentTarget.style.borderColor = 'var(--accent)';
                    e.currentTarget.style.boxShadow = '0 0 16px var(--accent-glow)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'var(--muted)';
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* ---- RIGHT: Simple, creative profile card ---- */}
          <div
            style={{
              position: 'relative',
              height: '520px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            className="hide-mobile"
          >
            {/* Particle ring */}
            <ParticleRing />

            {/* Central avatar card */}
            <motion.div
              style={{
                transform: 'translate(calc(var(--mx, 0) * 12px), calc(var(--my, 0) * 8px))',
                transition: 'transform 0.12s ease-out',
                position: 'absolute',
                top: '50%',
                left: '50%',
                marginTop: '-120px',
                marginLeft: '-100px',
                zIndex: 3,
              }}
            >
              <div
                className="glass-card float-a"
                style={{
                  width: '200px',
                  padding: '2.5rem 1.5rem 2rem',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Large Background "R" Watermark */}
                <div
                  style={{
                    position: 'absolute',
                    top: '35%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: '8.5rem',
                    fontWeight: 900,
                    fontFamily: "'Outfit', sans-serif",
                    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.01))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    pointerEvents: 'none',
                    zIndex: 1,
                    lineHeight: 1,
                    userSelect: 'none',
                  }}
                >
                  R
                </div>

                {/* Avatar Image container (Above the "R" watermark) */}
                <div
                  style={{
                    width: '85px', height: '85px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    margin: '0 auto 1.25rem',
                    border: '2px solid var(--border)',
                    boxShadow: '0 0 24px var(--accent-glow-strong)',
                    animation: 'pulseGlow 3s ease-in-out infinite',
                    position: 'relative',
                    zIndex: 2,
                  }}
                >
                  <img
                    src={heroImg}
                    alt="Raiyan"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>

                {/* Info Text (Above the "R" watermark) */}
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <div style={{ fontWeight: 700, color: 'var(--text)', marginBottom: '0.25rem', fontSize: '0.95rem' }}>Raiyan</div>
                  <div style={{
                    fontSize: '0.78rem',
                    background: 'linear-gradient(90deg, var(--accent), var(--accent-2))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontWeight: 500,
                  }}>Frontend Dev</div>
                </div>
              </div>
            </motion.div>

            {/* Decorative glow ring */}
            <div
              style={{
                position: 'absolute',
                width: '300px', height: '300px',
                borderRadius: '50%',
                border: '1px solid var(--border)',
                top: '50%', left: '50%',
                marginTop: '-150px', marginLeft: '-150px',
                pointerEvents: 'none',
                animation: 'floatA 8s ease-in-out infinite',
              }}
            />
            <div
              style={{
                position: 'absolute',
                width: '220px', height: '220px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, var(--accent-glow), rgba(6,182,212,0.08), transparent 70%)',
                top: '50%', left: '50%',
                marginTop: '-110px', marginLeft: '-110px',
                pointerEvents: 'none',
                filter: 'blur(40px)',
                animation: 'orbFloat 6s ease-in-out infinite',
              }}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          color: 'var(--muted)',
          fontSize: '0.75rem',
          letterSpacing: '0.15em',
        }}
      >
        <span style={{ textTransform: 'uppercase' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FiArrowDown size={16} style={{ color: 'var(--accent)' }} />
        </motion.div>
        <div
          style={{
            width: '1px',
            height: '40px',
            background: 'linear-gradient(to bottom, var(--accent), var(--accent-2), transparent)',
          }}
        />
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
