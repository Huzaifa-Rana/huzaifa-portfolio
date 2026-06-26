import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CanvasParticles from './components/CanvasParticles';

export default function App() {
  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);

  useEffect(() => {
    const dot = cursorDotRef.current;
    const outline = cursorOutlineRef.current;
    if (!dot || !outline) return;

    // Track cursor targets
    const mouse = { x: 0, y: 0 };
    const outlinePos = { x: 0, y: 0 };
    const springSpeed = 0.16; // Spring damping factor

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      
      // Move inner dot instantly
      dot.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0) translate(-50%, -50%)`;
    };

    // Smooth spring physics loop
    const updateOutline = () => {
      const dx = mouse.x - outlinePos.x;
      const dy = mouse.y - outlinePos.y;

      outlinePos.x += dx * springSpeed;
      outlinePos.y += dy * springSpeed;

      outline.style.transform = `translate3d(${outlinePos.x}px, ${outlinePos.y}px, 0) translate(-50%, -50%)`;

      requestAnimationFrame(updateOutline);
    };

    window.addEventListener('mousemove', handleMouseMove);
    const animId = requestAnimationFrame(updateOutline);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      {/* GPU-Accelerated Spring Cursor Follower (Hidden on mobile) */}
      <div ref={cursorDotRef} className="custom-cursor-dot"></div>
      <div ref={cursorOutlineRef} className="custom-cursor"></div>

      {/* Decorative Interactive Background Vectors */}
      <div className="glow-container">
        <div className="glow-circle glow-1"></div>
        <div className="glow-circle glow-2"></div>
        <div className="glow-circle glow-3"></div>
      </div>
      
      {/* Interactive Web Node Particles Background */}
      <CanvasParticles />
      
      {/* Static grid overlay */}
      <div className="grid-overlay"></div>

      {/* Main Sections (Swapped Projects above TechStack) */}
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <TechStack />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}
