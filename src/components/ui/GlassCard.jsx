import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reusable glassmorphism card wrapper.
 * Props:
 *  - className: extra classes
 *  - style: inline styles
 *  - hover: enable hover animation (default true)
 *  - glow: show accent glow on hover
 *  - children
 */
export default function GlassCard({ className = '', style = {}, hover = true, glow = false, children, onClick }) {
  return (
    <motion.div
      className={`glass-card ${className}`}
      style={style}
      whileHover={hover ? { y: -4, scale: 1.01 } : {}}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      onClick={onClick}
      tabIndex={onClick ? 0 : undefined}
    >
      {glow && (
        <div
          style={{
            position: 'absolute',
            inset: '-1px',
            borderRadius: 'inherit',
            background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
            opacity: 0,
            transition: 'opacity 0.3s',
            zIndex: -1,
            pointerEvents: 'none',
          }}
          className="glow-border"
        />
      )}
      {children}
    </motion.div>
  );
}
