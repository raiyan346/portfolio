import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

/**
 * Magnetic button — cursor pulls the button toward mouse on hover.
 * Props:
 *  - className
 *  - style
 *  - children
 *  - strength: magnetic pull strength (0–1, default 0.4)
 */
export default function MagneticButton({ children, className = '', style = {}, strength = 0.4, onClick, ...rest }) {
  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    gsap.to(btn, {
      x: dx * strength,
      y: dy * strength,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    gsap.to(btnRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.4)',
    });
  };

  return (
    <motion.button
      ref={btnRef}
      className={className}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileTap={{ scale: 0.96 }}
      {...rest}
    >
      {children}
    </motion.button>
  );
}
