import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiMail, FiArrowUp, FiHeart } from 'react-icons/fi';
import { personalInfo } from '../../data/portfolioData';

const socials = [
  { icon: FiGithub, href: personalInfo.github, label: 'GitHub' },
  { icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: FiTwitter, href: personalInfo.twitter, label: 'Twitter' },
  { icon: FiMail, href: `mailto:${personalInfo.email}`, label: 'Email' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        paddingTop: '3rem',
        paddingBottom: '3rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle gradient glow at top */}
      <div style={{
        position: 'absolute',
        top: 0, left: '50%', transform: 'translateX(-50%)',
        width: '400px', height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--accent), var(--accent-2), transparent)',
        boxShadow: '0 0 20px var(--accent-glow)',
      }} />

      <div className="section-container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          {/* Logo + tagline */}
          <div>
            <div
              className="text-gradient"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 800,
                fontSize: '1.75rem',
                letterSpacing: '-0.02em',
                marginBottom: '0.25rem',
                filter: 'drop-shadow(0 0 12px var(--accent-glow))',
              }}
            >
              Raiyan
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '0.8rem' }}>
              Web Engineer & UI/UX Designer
            </p>
          </div>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  width: '38px', height: '38px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  borderRadius: '10px',
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
                <Icon size={16} />
              </motion.a>
            ))}
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
            style={{
              width: '42px', height: '42px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
              border: 'none',
              color: '#000000ff',
              cursor: 'pointer',
              boxShadow: '0 4px 20px var(--accent-glow), 0 0 40px rgba(124,58,237,0.1)',
            }}
            aria-label="Back to top"
          >
            <FiArrowUp size={18} />
          </motion.button>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid var(--border)',
            marginTop: '2rem',
            paddingTop: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.75rem',
          }}
        >
          <p style={{ color: 'var(--muted)', fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} Raiyan. All rights reserved.
          </p>
          <p style={{ color: 'var(--muted)', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            Designed & Built with <FiHeart size={12} style={{ color: 'var(--accent-3)' }} /> using React + GSAP
          </p>
        </div>
      </div>
    </footer>
  );
}
