import React from 'react';
import { motion } from 'framer-motion';

/**
 * Consistent section heading with animated accent line.
 * Props:
 *  - tag: overline label
 *  - title: main heading
 *  - description: optional subtitle
 *  - centered: boolean (default false)
 */
export default function SectionHeading({ tag, title, description, centered = false }) {
  return (
    <motion.div
      className={`mb-16 ${centered ? 'text-center' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {tag && (
        <div
          className={`inline-flex items-center gap-2 mb-4 ${centered ? 'justify-center' : ''}`}
        >
          <div
            style={{
              width: '24px',
              height: '2px',
              background: 'linear-gradient(90deg, var(--accent), var(--accent-2))',
              borderRadius: '1px',
              boxShadow: '0 0 8px var(--accent-glow)',
            }}
          />
          <span
            style={{
              color: 'var(--accent)',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontFamily: "'Outfit', sans-serif",
              textShadow: '0 0 12px var(--accent-glow)',
            }}
          >
            {tag}
          </span>
          <div
            style={{
              width: '24px',
              height: '2px',
              background: 'linear-gradient(90deg, var(--accent-2), var(--accent))',
              borderRadius: '1px',
              boxShadow: '0 0 8px var(--accent-glow-2)',
            }}
          />
        </div>
      )}

      <h2
        style={{
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontFamily: "'Outfit', sans-serif",
          fontWeight: 800,
          color: 'var(--text)',
          lineHeight: 1.1,
          letterSpacing: '-0.03em',
          marginBottom: description ? '1rem' : 0,
        }}
      >
        {title}
      </h2>

      {description && (
        <p
          style={{
            color: 'var(--muted)',
            fontSize: '1.05rem',
            maxWidth: centered ? '560px' : '480px',
            margin: centered ? '0 auto' : '0',
            lineHeight: 1.7,
          }}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
