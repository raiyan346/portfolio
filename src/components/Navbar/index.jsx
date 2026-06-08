import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { FiHome, FiUser, FiBriefcase, FiMail, FiFileText, FiBookOpen } from 'react-icons/fi';

const navLinks = [
  { href: '#home', label: 'Home', icon: FiHome },
  { href: '#about', label: 'About', icon: FiUser },
  { href: '#projects', label: 'Projects', icon: FiBriefcase },
  { href: '#contact', label: 'Contact', icon: FiMail },
  { href: '#blog', label: 'Blog', icon: FiBookOpen },
  { href: '/raiyan-remue.pdf', label: 'Resume', icon: FiFileText, isExternal: true },
];

function DockItem({ href, label, Icon, mouseX, isExternal, activeSection, scrollTo }) {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  // Measure distance to mouse clientX for proximity magnification
  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // Smooth spring size based on mouse proximity (40px to 64px)
  const sizeSpring = useSpring(
    useTransform(distance, [-120, 0, 120], [42, 64, 42]),
    { damping: 15, mass: 0.1, stiffness: 200 }
  );

  const isActive = activeSection === href.replace('#', '') && !isExternal;

  const handleClick = (e) => {
    if (isExternal) return;
    e.preventDefault();
    scrollTo(href);
  };

  return (
    <div
      ref={ref}
      style={{ position: 'relative' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tooltip Label */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 56, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              padding: '0.4rem 0.8rem',
              borderRadius: '8px',
              background: 'rgba(0, 0, 0, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#fff',
              fontSize: '0.75rem',
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 500,
              whiteSpace: 'nowrap',
              pointerEvents: 'none',
              zIndex: 100,
              boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
            }}
          >
            {label}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={href}
        onClick={handleClick}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        style={{
          width: sizeSpring,
          height: sizeSpring,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          background: isActive ? 'var(--accent-glow)' : 'var(--glass)',
          border: isActive ? '1px solid var(--accent)' : '1px solid var(--border)',
          color: isActive ? 'var(--accent)' : 'var(--muted)',
          cursor: 'pointer',
          boxShadow: isActive ? '0 0 16px var(--accent-glow)' : 'none',
          transition: 'color 0.2s, background-color 0.2s, border-color 0.2s',
          fontSize: '1.25rem',
        }}
        whileHover={{
          color: 'var(--text)',
          borderColor: 'var(--accent)',
          background: 'rgba(255, 255, 255, 0.08)',
        }}
        whileTap={{ scale: 0.95 }}
      >
        <Icon size="1.05em" />
      </motion.a>
    </div>
  );
}

export default function Navbar() {
  const [active, setActive] = useState('home');
  const mouseX = useMotionValue(Infinity);

  /* ---- active section detection ---- */
  useEffect(() => {
    const ids = navLinks.filter(l => !l.isExternal).map(l => l.href.replace('#', ''));
    const observers = [];
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.25, rootMargin: '-100px 0px -100px 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  const scrollTo = (href) => {
    if (href === '#blog') {
      window.location.hash = '#blog';
      return;
    }
    if (window.location.hash === '#blog') {
      window.location.hash = href;
      setTimeout(() => {
        const id = href.replace('#', '');
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
      return;
    }
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll progress bar at the top */}
      <div
        id="scroll-bar"
        className="scroll-progress-bar"
        style={{ width: '0%' }}
      />

      {/* Floating Apple-Style Dock Nav */}
      <div
        style={{
          position: 'fixed',
          top: '1.5rem',
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          zIndex: 1000,
          pointerEvents: 'none',
        }}
      >
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          style={{
            pointerEvents: 'auto',
          }}
        >
          <motion.div
            onMouseMove={(e) => mouseX.set(e.clientX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className="glass"
            style={{
              borderRadius: '32px',
              padding: '0.5rem 1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              boxShadow: '0 24px 48px rgba(0,0,0,0.6), 0 0 30px rgba(255,255,255,0.02), inset 0 1px 0 rgba(255,255,255,0.1)',
              height: '76px',
            }}
          >
            {navLinks.map((item, idx) => (
              <DockItem
                key={idx}
                href={item.href}
                label={item.label}
                Icon={item.icon}
                mouseX={mouseX}
                isExternal={item.isExternal}
                activeSection={active}
                scrollTo={scrollTo}
              />
            ))}
          </motion.div>
        </motion.nav>
      </div>
    </>
  );
}
