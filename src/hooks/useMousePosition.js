import { useState, useEffect } from 'react';

export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [normalised, setNormalised] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      setPosition({ x, y });
      setNormalised({
        x: (x / window.innerWidth - 0.5) * 2,
        y: (y / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return { position, normalised };
}
