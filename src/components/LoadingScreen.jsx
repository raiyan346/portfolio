import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function LoadingScreen({ onComplete }) {
  const screenRef = useRef(null);
  const logoRef = useRef(null);
  const barRef = useRef(null);
  const particlesRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate progress bar
    tl.to({ val: 0 }, {
      val: 100,
      duration: 2,
      ease: 'power2.inOut',
      onUpdate() {
        const v = Math.round(this.targets()[0].val);
        setProgress(v);
        if (barRef.current) barRef.current.style.width = v + '%';
      },
    });

    // Logo reveal with scale
    tl.fromTo(
      logoRef.current,
      { y: 30, opacity: 0, scale: 0.8 },
      { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)' },
      0.3
    );

    // Exit animation — split screen effect
    tl.to(screenRef.current, {
      clipPath: 'circle(0% at 50% 50%)',
      duration: 0.8,
      ease: 'power3.inOut',
      delay: 0.4,
      onComplete,
    });

    return () => tl.kill();
  }, [onComplete]);

  return (
    <div
      ref={screenRef}
      className="loading-screen"
      style={{
        zIndex: 99997,
        clipPath: 'circle(150% at 50% 50%)',
        background: 'radial-gradient(ellipse at center, #121212 0%, #000000 100%)',
      }}
    >
      {/* Animated orbs */}
      <div
        ref={particlesRef}
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: `${40 + i * 20}px`,
              height: `${40 + i * 20}px`,
              borderRadius: '50%',
              background: i % 3 === 0
                ? 'radial-gradient(circle, rgba(255,255,255,0.08), transparent 70%)'
                : i % 3 === 1
                ? 'radial-gradient(circle, rgba(200,200,200,0.06), transparent 70%)'
                : 'radial-gradient(circle, rgba(150,150,150,0.04), transparent 70%)',
              top: `${15 + i * 14}%`,
              left: `${10 + i * 15}%`,
              animation: `orbFloat ${3 + i * 0.8}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
              filter: 'blur(4px)',
            }}
          />
        ))}
      </div>

      {/* Animated rings */}
      <div style={{ position: 'relative', marginBottom: '2.5rem' }}>
        {[0, 1, 2].map(i => (
          <div
            key={i}
            style={{
              position: i === 0 ? 'relative' : 'absolute',
              top: '50%',
              left: '50%',
              width: `${80 + i * 45}px`,
              height: `${80 + i * 45}px`,
              border: `1.5px solid`,
              borderColor: i === 0 ? 'var(--accent)' : i === 1 ? 'var(--accent-2)' : 'var(--accent-3)',
              borderRadius: '50%',
              transform: i === 0 ? 'none' : 'translate(-50%, -50%)',
              opacity: 1 - i * 0.25,
              animation: `spin${i} ${2 + i}s linear infinite`,
              boxShadow: `0 0 12px ${i === 0 ? 'var(--accent-glow)' : i === 1 ? 'var(--accent-glow-2)' : 'var(--accent-glow-2)'}`,
            }}
          />
        ))}
        <style>{`
          @keyframes spin0 { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          @keyframes spin1 { from { transform: translate(-50%,-50%) rotate(0deg); } to { transform: translate(-50%,-50%) rotate(-360deg); } }
          @keyframes spin2 { from { transform: translate(-50%,-50%) rotate(0deg); } to { transform: translate(-50%,-50%) rotate(360deg); } }
        `}</style>
      </div>

      {/* Logo */}
      <div ref={logoRef} style={{ textAlign: 'center', marginBottom: '2.5rem', opacity: 0 }}>
        <div
          style={{
            fontSize: '3.5rem',
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 900,
            background: 'linear-gradient(135deg, var(--accent), var(--accent-2), var(--accent-3))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-0.03em',
            filter: 'drop-shadow(0 0 20px var(--accent-glow))',
          }}
        >
          R.
        </div>
        <p style={{
          color: 'var(--muted)',
          fontSize: '0.85rem',
          marginTop: '0.5rem',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
        }}>
          FRONTEND DEVELOPER
        </p>
      </div>

      {/* Progress bar */}
      <div
        style={{
          width: '220px',
          height: '3px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '2px',
          overflow: 'hidden',
        }}
      >
        <div
          ref={barRef}
          style={{
            height: '100%',
            width: '0%',
            background: 'linear-gradient(90deg, var(--accent), var(--accent-2), var(--accent-3))',
            borderRadius: '2px',
            boxShadow: '0 0 12px var(--accent), 0 0 24px var(--accent-glow)',
            transition: 'width 0.05s linear',
          }}
        />
      </div>

      <p style={{
        color: 'var(--accent-2)',
        fontSize: '0.8rem',
        marginTop: '1rem',
        letterSpacing: '0.15em',
        fontFamily: "'Outfit', sans-serif",
        fontWeight: 600,
      }}>
        {progress}%
      </p>
    </div>
  );
}
