import React from 'react';
import { motion } from 'framer-motion';

const defaultVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Wraps children in a Framer Motion viewport-triggered reveal.
 * Props:
 *  - variants: custom variants (optional)
 *  - delay: stagger delay
 *  - once: only animate once (default true)
 *  - className, style
 */
export default function ScrollReveal({
  children,
  variants = defaultVariants,
  delay = 0,
  once = true,
  className = '',
  style = {},
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-60px' }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
