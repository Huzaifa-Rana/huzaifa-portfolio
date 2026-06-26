import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Active menu tracking (projects before tech)
      const sections = ['home', 'services', 'projects', 'tech', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <div className="nav-container">
        {/* Brand Typographic Custom Logo */}
        <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="logo">
          <div className="logo-emblem">
            <svg viewBox="0 0 100 100" width="18" height="18">
              <polygon 
                points="50,5 90,25 90,75 50,95 10,75 10,25" 
                fill="none" 
                stroke="#00f2fe" 
                strokeWidth="8"
                strokeLinejoin="round"
              />
              <path 
                d="M 38 35 L 22 50 L 38 65 M 62 35 L 78 50 L 62 65 M 54 30 L 46 70" 
                fill="none" 
                stroke="#00f2fe" 
                strokeWidth="10" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="logo-text">
            HUZAIFA
            <span className="logo-text-accent">RANA</span>
            <span className="logo-dot"></span>
          </span>
        </a>

        <button 
          className="nav-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <a 
            href="#home" 
            onClick={(e) => handleLinkClick(e, 'home')} 
            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
          >
            Home
          </a>
          <a 
            href="#services" 
            onClick={(e) => handleLinkClick(e, 'services')} 
            className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}
          >
            Services
          </a>
          <a 
            href="#projects" 
            onClick={(e) => handleLinkClick(e, 'projects')} 
            className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
          >
            Projects
          </a>
          <a 
            href="#tech" 
            onClick={(e) => handleLinkClick(e, 'tech')} 
            className={`nav-link ${activeSection === 'tech' ? 'active' : ''}`}
          >
            Expertise
          </a>
          <a 
            href="#faq" 
            onClick={(e) => handleLinkClick(e, 'faq')} 
            className={`nav-link ${activeSection === 'faq' ? 'active' : ''}`}
          >
            FAQs
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleLinkClick(e, 'contact')} 
            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
          >
            Contact
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleLinkClick(e, 'contact')} 
            className="nav-cta"
          >
            Book Scoping Call
          </a>
        </nav>
      </div>
    </header>
  );
}
