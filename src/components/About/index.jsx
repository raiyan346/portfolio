import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  SiReact, SiJavascript, SiTypescript, SiNextdotjs, SiTailwindcss,
  SiHtml5, SiVite, SiNodedotjs, SiMongodb, SiFirebase,
  SiPostgresql, SiFigma, SiFramer, SiGreensock, SiGit, SiGithub,
  SiDocker, SiVercel, SiNetlify, SiPostman, SiExpress,
} from 'react-icons/si';
import { FaCss3Alt, FaCode } from 'react-icons/fa';
import { personalInfo, experiences, skillsByCategory } from '../../data/portfolioData';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../ui/ScrollReveal';
import headersLogo from '../../assets/headers.png';
import tnegaLogo from '../../assets/tnega.jpg';

const iconMap = {
  SiReact, SiJavascript, SiTypescript, SiNextdotjs, SiTailwindcss,
  SiHtml5, FaCss3Alt, SiVite, SiNodedotjs, SiMongodb, SiFirebase,
  SiPostgresql, SiFigma, SiFramer, SiGreensock, SiGit, SiGithub,
  SiDocker, SiVercel, SiNetlify, SiPostman, SiExpress, FaCode,
  SiCss3: FaCss3Alt,
  SiVisualstudiocode: FaCode,
  SiAdobexd: SiFigma,
};

const categories = ['frontend', 'backend', 'design', 'tools'];
const catLabels = { frontend: 'Frontend', backend: 'Backend', design: 'UI/UX & Animation', tools: 'Tools & DevOps' };

function SkillPill({ name, icon, color }) {
  const Icon = iconMap[icon];
  return (
    <motion.div
      className="chip"
      whileHover={{ scale: 1.06, y: -3 }}
      style={{ userSelect: 'none', fontSize: '0.85rem', padding: '0.5rem 1rem' }}
    >
      {Icon && <Icon size={16} style={{ color, filter: `drop-shadow(0 0 4px ${color}40)` }} />}
      {name}
    </motion.div>
  );
}

function MarqueeRow({ items, reverse = false }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-outer" style={{ marginBottom: '0.85rem' }}>
      <div className={reverse ? 'marquee-track-rev' : 'marquee-track'}>
        {doubled.map((skill, i) => (
          <SkillPill key={`${skill.name}-${i}`} {...skill} />
        ))}
      </div>
    </div>
  );
}

export default function About() {
  const [activeTab, setActiveTab] = useState('frontend');

  const allSkills = Object.values(skillsByCategory).flat();
  const half = Math.ceil(allSkills.length / 2);
  const row1 = allSkills.slice(0, half);
  const row2 = allSkills.slice(half);

  return (
    <section id="about" className="section-pad">
      <div className="section-container" style={{ maxWidth: '800px' }}>
        <SectionHeading
          tag="About Me"
          title="Passion Meets Precision"
          description="A frontend developer who obsesses over every pixel and every frame of animation."
          centered
        />

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <ScrollReveal>
            <p style={{ color: 'var(--text-2)', lineHeight: 1.85, fontSize: '1.08rem', marginBottom: '1.5rem', textAlign: 'left' }}>
              {personalInfo.bioLong.split('\n\n')[0]}
            </p>
            <p style={{ color: 'var(--text-2)', lineHeight: 1.85, fontSize: '1.08rem', marginBottom: '2.5rem', textAlign: 'left' }}>
              {personalInfo.bioLong.split('\n\n')[1]}
            </p>
          </ScrollReveal>

          {/* Location + availability */}
          <ScrollReveal delay={0.2}>
            <div
              className="glass"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1.25rem 2rem',
                borderRadius: 'var(--radius)',
                gap: '1.25rem',
                flexWrap: 'wrap',
                border: '1px solid var(--border)',
              }}
            >
              <div style={{ fontSize: '1.5rem' }}>📍</div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ color: 'var(--text)', fontWeight: 600, fontSize: '0.98rem' }}>
                  {personalInfo.location}
                </div>
                <div style={{ color: 'var(--muted)', fontSize: '0.82rem', marginTop: '0.15rem' }}>
                  Open to remote & on-site opportunities
                </div>
              </div>
              <div
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.45rem',
                  fontSize: '0.82rem',
                  color: '#4ade80',
                  marginLeft: '1rem',
                }}
              >
                <span style={{
                  width: '6px', height: '6px', borderRadius: '50%',
                  background: '#4ade80',
                  boxShadow: '0 0 8px #4ade80',
                  animation: 'floatA 1.5s ease-in-out infinite',
                }} />
                Available for work
              </div>
            </div>
          </ScrollReveal>

          {/* Experience Glass Cards */}
          <ScrollReveal delay={0.3}>
            <div style={{ marginTop: '4rem', textAlign: 'left' }}>
              <h3
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                  fontSize: '1.15rem',
                  color: 'var(--text)',
                  marginBottom: '1.5rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  opacity: 0.8,
                }}
              >
                Experience
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {experiences.map(exp => {
                  const logo = exp.id === 1 ? tnegaLogo : headersLogo;
                  return (
                    <div
                      key={exp.id}
                      className="glass-card exp-glass-card"
                      style={{
                        padding: '2rem',
                        border: '1px solid var(--border)',
                        boxShadow: 'var(--shadow)',
                      }}
                    >
                      {/* Title, Company & Logo wrapper */}
                      <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                        {/* Padded white background logo container */}
                        <div style={{
                          width: '60px',
                          height: '60px',
                          minWidth: '60px',
                          minHeight: '60px',
                          backgroundColor: '#ffffff',
                          borderRadius: '14px',
                          padding: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                          userSelect: 'none',
                        }}>
                          <img
                            src={logo}
                            alt={`${exp.company} logo`}
                            style={{
                              maxWidth: '100%',
                              maxHeight: '100%',
                              objectFit: 'contain',
                            }}
                          />
                        </div>
                        <div>
                          <h4
                            style={{
                              fontFamily: "'Outfit', sans-serif",
                              fontWeight: 800,
                              fontSize: '1.15rem',
                              color: 'var(--text)',
                              lineHeight: 1.25,
                            }}
                          >
                            {exp.title}
                          </h4>
                          <p
                            style={{
                              color: 'var(--muted)',
                              fontSize: '0.88rem',
                              marginTop: '0.35rem',
                              fontWeight: 500,
                            }}
                          >
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      {/* Duration */}
                      <div
                        style={{
                          fontSize: '0.88rem',
                          color: 'var(--text-2)',
                          fontWeight: 500,
                          opacity: 0.9,
                        }}
                      >
                        {exp.duration}
                      </div>

                      {/* Description */}
                      <p
                        style={{
                          color: 'var(--muted)',
                          fontSize: '0.88rem',
                          lineHeight: 1.7,
                        }}
                      >
                        {exp.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          {/* Skills / Technologies Section */}
          <ScrollReveal delay={0.4}>
            <div style={{ marginTop: '5rem', textAlign: 'left' }}>
              <h3
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                  fontSize: '1.15rem',
                  color: 'var(--text)',
                  marginBottom: '1.5rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  opacity: 0.8,
                }}
              >
                Skills & Technologies
              </h3>

              {/* Infinite marquee */}
              <div style={{ marginBottom: '3rem' }}>
                <MarqueeRow items={row1} />
                <MarqueeRow items={row2} reverse />
              </div>

              {/* Category tabs */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                {categories.map(cat => (
                  <motion.button
                    key={cat}
                    onClick={() => setActiveTab(cat)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      padding: '0.5rem 1.25rem',
                      borderRadius: 'var(--radius-pill)',
                      border: '1px solid',
                      borderColor: activeTab === cat ? 'var(--accent)' : 'var(--border)',
                      background: activeTab === cat ? 'var(--accent-glow)' : 'var(--glass)',
                      color: activeTab === cat ? 'var(--accent)' : 'var(--muted)',
                      fontWeight: 500, fontSize: '0.875rem',
                      cursor: 'pointer', fontFamily: 'inherit',
                      backdropFilter: 'blur(16px)',
                      transition: 'all 0.25s ease',
                      boxShadow: activeTab === cat ? '0 0 16px var(--accent-glow)' : 'none',
                    }}
                  >
                    {catLabels[cat]}
                  </motion.button>
                ))}
              </div>

              {/* Skill grid for active category */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.75rem',
                  justifyContent: 'center',
                  maxWidth: '800px',
                  margin: '0 auto',
                }}
              >
                {skillsByCategory[activeTab].map((skill, i) => {
                  const Icon = iconMap[skill.icon];
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05, duration: 0.4 }}
                      whileHover={{
                        scale: 1.08,
                        y: -4,
                        boxShadow: `0 0 24px ${skill.color}25, 0 8px 32px rgba(0,0,0,0.3)`,
                      }}
                      className="glass-card"
                      style={{
                        padding: '1rem 1.5rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '0.5rem',
                        minWidth: '100px',
                        cursor: 'default',
                        textAlign: 'center',
                      }}
                    >
                      {Icon && <Icon size={28} style={{
                        color: skill.color,
                        filter: `drop-shadow(0 0 6px ${skill.color}40)`,
                      }} />}
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-2)', fontWeight: 500 }}>
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
