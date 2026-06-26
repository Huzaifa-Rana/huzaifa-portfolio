import { useState, useRef, useEffect } from 'react';

export default function useTilt(maxTilt = 8, scale = 1.03) {
  const ref = useRef(null);
  const [coords, setCoords] = useState({ rotateX: 0, rotateY: 0, scale: 1 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left; // x position within element
      const y = e.clientY - rect.top;  // y position within element
      
      const width = rect.width;
      const height = rect.height;
      
      // Compute degrees (negative/positive offset from center)
      const rotateX = ((y - height / 2) / (height / 2)) * -maxTilt;
      const rotateY = ((x - width / 2) / (width / 2)) * maxTilt;

      setCoords({ rotateX, rotateY, scale });
    };

    const handleMouseLeave = () => {
      setCoords({ rotateX: 0, rotateY: 0, scale: 1 });
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [maxTilt, scale]);

  const style = {
    transform: `perspective(1000px) rotateX(${coords.rotateX}deg) rotateY(${coords.rotateY}deg) scale(${coords.scale})`,
    transition: coords.rotateX === 0 && coords.rotateY === 0 
      ? 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)' 
      : 'transform 0.1s ease-out',
    transformStyle: 'preserve-3d',
  };

  return [ref, style];
}
