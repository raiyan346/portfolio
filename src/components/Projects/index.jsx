import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { projects } from '../../data/portfolioData';
import SectionHeading from '../ui/SectionHeading';
import TiltCard from '../ui/TiltCard';
import ScrollReveal from '../ui/ScrollReveal';

function ProjectCard({ project, i }) {
  const [hovered, setHovered] = useState(false);

  return (
    <TiltCard intensity={8} style={{ height: '100%' }}>
      <motion.div
        className="glass-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: 'relative',
          overflow: 'hidden',
          borderColor: hovered ? project.color + '50' : 'var(--border)',
          boxShadow: hovered
            ? `0 16px 48px rgba(0,0,0,0.5), 0 0 0 1px ${project.color}30, 0 0 40px ${project.color}15`
            : 'var(--shadow)',
          transition: 'all 0.35s ease',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Color accent top bar */}
        <div
          style={{
            height: '3px',
            background: `linear-gradient(90deg, ${project.color}, ${project.color}60, transparent)`,
            marginBottom: '1.5rem',
            borderRadius: '2px',
            transform: hovered ? 'scaleX(1)' : 'scaleX(0.4)',
            transformOrigin: 'left',
            transition: 'transform 0.4s ease',
            boxShadow: hovered ? `0 0 12px ${project.color}40` : 'none',
          }}
        />

        <div style={{ padding: '0 1.5rem 1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
            <div
              style={{
                fontSize: '2rem',
                lineHeight: 1,
                filter: hovered ? `drop-shadow(0 0 8px ${project.color}40)` : 'none',
                transition: 'filter 0.3s ease',
              }}
            >
              {project.category?.toLowerCase() === 'ai' ? '🤖' :
                project.category?.toLowerCase() === 'ui' ? '🎨' :
                  project.category?.toLowerCase() === 'fullstack' ? '⚡' : '💻'}
            </div>

            {/* Links */}
            <div style={{ display: 'flex', gap: '0.5rem', opacity: hovered ? 1 : 0.5, transition: 'opacity 0.2s' }}>
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  style={{
                    width: '32px', height: '32px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    borderRadius: '8px',
                    background: 'var(--glass)',
                    border: '1px solid var(--border)',
                    color: 'var(--muted)',
                    transition: 'color 0.2s, border-color 0.2s, box-shadow 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = 'var(--accent)';
                    e.currentTarget.style.borderColor = 'var(--accent)';
                    e.currentTarget.style.boxShadow = '0 0 12px var(--accent-glow)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'var(--muted)';
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <FiGithub size={15} />
                </motion.a>
              )}
              {project.live && (
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  style={{
                    width: '32px', height: '32px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    borderRadius: '8px',
                    background: 'var(--glass)',
                    border: '1px solid var(--border)',
                    color: 'var(--muted)',
                    transition: 'color 0.2s, border-color 0.2s, box-shadow 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = 'var(--accent-2)';
                    e.currentTarget.style.borderColor = 'var(--accent-2)';
                    e.currentTarget.style.boxShadow = '0 0 12px var(--accent-glow-2)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'var(--muted)';
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <FiExternalLink size={15} />
                </motion.a>
              )}
            </div>
          </div>

          <h3
            style={{
              fontSize: '1.05rem',
              fontWeight: 700,
              color: 'var(--text)',
              marginBottom: '0.5rem',
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            {project.title}
          </h3>

          <p style={{ color: 'var(--muted)', fontSize: '0.85rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
            {project.description}
          </p>

          {/* Tech tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: 'auto' }}>
            {project.tech?.map(t => (
              <span
                key={t}
                style={{
                  padding: '0.2rem 0.6rem',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '0.72rem',
                  fontWeight: 500,
                  background: project.color + '15',
                  color: project.color,
                  border: `1px solid ${project.color}25`,
                  textShadow: `0 0 8px ${project.color}20`,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </TiltCard>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="section-container">
        <SectionHeading
          tag="Projects"
          title="Things I've Built"
          description="A selection of academic and side projects that showcase my skills across design and development."
          centered
        />

        {/* Bento grid */}
        <div className="bento-grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

