import React from 'react';
import { ArrowUp, Mail, Phone, Code } from 'lucide-react';

export default function Footer() {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer-section">
      <div className="container">
        
        <div className="footer-grid">
          
          <div className="footer-brand">
            <a href="#home" onClick={(e) => { e.preventDefault(); handleScrollTo('home'); }} className="logo footer-logo">
              <span>HUZAIFARANA.</span>
            </a>
            <p className="brand-bio">
              Premium full-stack engineering services for startups, businesses, and e-commerce stores. Creating fast, scalable React platforms and Shopify apps.
            </p>
            <div className="author-credits">
              <Code size={14} className="code-credits-icon" />
              <span>Designed & Built with Speed in Mind</span>
            </div>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-group-title">Navigation</h4>
            <ul className="footer-links-list">
              <li><a href="#home" onClick={(e) => { e.preventDefault(); handleScrollTo('home'); }}>Home</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleScrollTo('services'); }}>Services</a></li>
              <li><a href="#tech" onClick={(e) => { e.preventDefault(); handleScrollTo('tech'); }}>Expertise</a></li>
              <li><a href="#projects" onClick={(e) => { e.preventDefault(); handleScrollTo('projects'); }}>Case Studies</a></li>
              <li><a href="#faq" onClick={(e) => { e.preventDefault(); handleScrollTo('faq'); }}>FAQs</a></li>
            </ul>
          </div>

          <div className="footer-contact-group">
            <h4 className="footer-group-title">Get in Touch</h4>
            <p className="contact-instructions">
              Available for contract roles, fixed-scope MVPs, and consulting.
            </p>
            <ul className="footer-contacts-list">
              <li>
                <Mail size={16} />
                <a href="mailto:huzaifarana.pk@gmail.com">huzaifarana.pk@gmail.com</a>
              </li>
              <li>
                <Phone size={16} />
                <a href="https://wa.me/923156882232" target="_blank" rel="noopener noreferrer">+92 315 6882232</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} Huzaifa Rana. All Rights Reserved.
          </p>

          <button 
            onClick={() => handleScrollTo('home')} 
            className="back-to-top-btn glass-panel-hover"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>

      </div>

      <style>{`
        .footer-section {
          background-color: rgba(3, 7, 18, 0.9);
          border-top: 1px solid var(--border-light);
          padding: 5rem 0 2rem;
          margin-top: auto;
          position: relative;
          z-index: 10;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr;
          gap: 4rem;
          margin-bottom: 4rem;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .footer-logo {
          margin-bottom: 1.25rem;
        }

        .brand-bio {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 1.5rem;
          max-width: 320px;
        }

        .author-credits {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .code-credits-icon {
          color: var(--primary);
        }

        .footer-group-title {
          font-size: 0.95rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #ffffff;
          margin-bottom: 1.5rem;
          font-weight: 700;
          text-align: left;
        }

        .footer-links-list, .footer-contacts-list {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          text-align: left;
        }

        .footer-links-list a {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.2s;
        }

        .footer-links-list a:hover {
          color: #ffffff;
        }

        .contact-instructions {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 1.25rem;
          text-align: left;
          line-height: 1.4;
        }

        .footer-contacts-list li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .footer-contacts-list a {
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-contacts-list a:hover {
          color: #ffffff;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .copyright-text {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .back-to-top-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-light);
          padding: 0.5rem 1rem;
          border-radius: 8px;
          cursor: pointer;
          color: var(--text-secondary);
          font-family: inherit;
          font-size: 0.8rem;
          font-weight: 600;
          transition: all 0.2s;
        }

        .back-to-top-btn:hover {
          color: #ffffff;
          border-color: var(--primary);
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          
          .footer-brand, .footer-links-group, .footer-contact-group {
            align-items: center;
            text-align: center;
          }

          .footer-group-title, .contact-instructions, .footer-links-list, .footer-contacts-list {
            text-align: center;
          }

          .footer-contacts-list li {
            justify-content: center;
          }
          
          .brand-bio {
            max-width: 100%;
          }
        }
      `}</style>
    </footer>
  );
}
