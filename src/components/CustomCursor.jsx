import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const trailRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Hide on mobile/touch
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const trail = trailRef.current;
    if (!dot || !ring) return;

    let mouseX = -100, mouseY = -100;
    let ringX = -100, ringY = -100;
    let trailX = -100, trailY = -100;
    let rafId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setVisible(true);
      dot.style.left = mouseX + 'px';
      dot.style.top = mouseY + 'px';
    };

    const lerp = (a, b, t) => a + (b - a) * t;

    const animate = () => {
      ringX = lerp(ringX, mouseX, 0.1);
      ringY = lerp(ringY, mouseY, 0.1);
      ring.style.left = ringX + 'px';
      ring.style.top = ringY + 'px';

      if (trail) {
        trailX = lerp(trailX, mouseX, 0.05);
        trailY = lerp(trailY, mouseY, 0.05);
        trail.style.left = trailX + 'px';
        trail.style.top = trailY + 'px';
      }

      rafId = requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener('mousemove', onMouseMove);

    // Hover effect on interactive elements using event delegation
    const onMouseOver = (e) => {
      const target = e.target;
      if (target && target.closest('a, button, [role="button"], input, textarea, .cursor-pointer')) {
        ring.classList.add('hovered');
      } else {
        ring.classList.remove('hovered');
      }
    };

    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null;

  return (
    <>
      {/* Slow-follow glow trail */}
      <div
        ref={trailRef}
        style={{
          width: '60px', height: '60px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.12), transparent 70%)',
          position: 'fixed', top: 0, left: 0,
          pointerEvents: 'none',
          zIndex: 99996,
          transform: 'translate(-50%, -50%)',
          opacity: visible ? 1 : 0,
          filter: 'blur(8px)',
          transition: 'opacity 0.3s',
        }}
      />
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{ opacity: visible ? 1 : 0 }}
      />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{ opacity: visible ? 0.55 : 0 }}
      />
    </>
  );
}
