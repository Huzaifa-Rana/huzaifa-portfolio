import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TechStack() {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'ops', label: 'Git & Deployment' }
  ];

  const technologies = [
    // Frontend
    { name: 'HTML5 & CSS3', category: 'frontend', desc: 'Semantic styling, Flexbox/Grid structures, clean animations', color: 'rgba(239, 68, 68, 0.4)' },
    { name: 'JavaScript (ES6+)', category: 'frontend', desc: 'Asynchronous event scopes, API operations, native JS features', color: 'rgba(234, 179, 8, 0.4)' },
    { name: 'React.js', category: 'frontend', desc: 'State tracking, custom React Hooks, context stores, Vite setup', color: 'rgba(6, 182, 212, 0.4)' },
    { name: 'TailwindCSS', category: 'frontend', desc: 'Utility classes, speed-optimized styles, rapid grid building', color: 'rgba(56, 189, 248, 0.4)' },
    
    // Backend
    { name: 'PHP', category: 'backend', desc: 'Server scripts, OOP classes, request validations, data processing', color: 'rgba(127, 110, 170, 0.4)' },
    { name: 'Laravel Framework', category: 'backend', desc: 'Eloquent DB queries, API routing, Blade engines, queue workers', color: 'rgba(244, 63, 94, 0.4)' },
    { name: 'Node.js & Express', category: 'backend', desc: 'Express routers, microservices, webhook servers, REST layers', color: 'rgba(34, 197, 94, 0.4)' },
    { name: 'REST & GraphQL APIs', category: 'backend', desc: 'Endpoint designs, authentication keys, JSON validation', color: 'rgba(167, 139, 250, 0.4)' },
    
    // Git & Ops
    { name: 'Git & GitHub', category: 'ops', desc: 'Branch merging, conflict resolution, secure repositories', color: 'rgba(240, 80, 50, 0.4)' },
    { name: 'Cloud Deployment', category: 'ops', desc: 'Hosting on Vercel, Netlify, DigitalOcean, and GitHub Pages', color: 'rgba(59, 130, 246, 0.4)' },
    { name: 'CI/CD Pipelines', category: 'ops', desc: 'GitHub Actions deployment automations, build scripts', color: 'rgba(16, 185, 129, 0.4)' },
    { name: 'MySQL & databases', category: 'ops', desc: 'Relational database designs, migrations, queries', color: 'rgba(0, 117, 143, 0.4)' }
  ];

  const filteredTech = activeFilter === 'all' 
    ? technologies 
    : technologies.filter(tech => tech.category === activeFilter);

  return (
    <section id="tech" className="tech-section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">Expertise & Skills</span>
          <h2 className="section-title">Core Development Tech Stack</h2>
          <p className="section-subtitle">
            I specialize in these technologies, using them to engineer high-grade, speed-optimized architectures.
          </p>
        </div>

        {/* Filter Switcher */}
        <div className="tech-filters-wrapper">
          <div className="tech-filters glass-panel">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`filter-btn ${activeFilter === cat.id ? 'active' : ''}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Skills List Grid */}
        <motion.div 
          className="tech-grid"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredTech.map(tech => (
              <motion.div
                layout
                key={tech.name}
                className="tech-card glass-panel"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.25 }}
                whileHover={{ y: -4 }}
                style={{ '--tech-glow': tech.color }}
              >
                <div className="tech-glow-indicator"></div>
                <h3 className="tech-name">{tech.name}</h3>
                <p className="tech-desc">{tech.desc}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      <style>{`
        .tech-section {
          background-color: transparent;
        }

        .tech-filters-wrapper {
          display: flex;
          justify-content: center;
          margin-bottom: 3.5rem;
        }

        .tech-filters {
          display: flex;
          padding: 0.35rem;
          border-radius: 9999px;
          gap: 0.25rem;
          background: rgba(10, 16, 32, 0.4);
          flex-wrap: wrap;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .filter-btn {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          padding: 0.6rem 1.35rem;
          border-radius: 9999px;
          cursor: pointer;
          font-family: var(--font-body);
          font-size: 0.9rem;
          font-weight: 600;
          transition: all 0.25s ease;
        }

        .filter-btn:hover {
          color: #ffffff;
        }

        .filter-btn.active {
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-end) 100%);
          color: #000000;
          box-shadow: 0 4px 12px rgba(0, 242, 254, 0.2);
        }

        .tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 1.5rem;
        }

        .tech-card {
          padding: 1.75rem;
          text-align: left;
          position: relative;
          overflow: hidden;
          height: 100%;
          border: 1px solid rgba(255, 255, 255, 0.04);
          box-shadow: var(--shadow-sm);
          transition: border-color 0.3s, box-shadow 0.3s;
        }

        .tech-card:hover {
          border-color: var(--tech-glow);
          box-shadow: 0 0 20px -5px var(--tech-glow);
        }

        .tech-glow-indicator {
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: linear-gradient(to bottom, var(--primary), var(--primary-end));
          opacity: 0.25;
          transition: opacity 0.3s, background 0.3s;
        }

        .tech-card:hover .tech-glow-indicator {
          opacity: 1;
          background: var(--tech-glow);
        }

        .tech-name {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          font-weight: 800;
          color: #ffffff;
        }

        .tech-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        @media (max-width: 640px) {
          .tech-grid {
            grid-template-columns: 1fr;
          }
          
          .tech-filters {
            border-radius: 16px;
            width: 100%;
          }

          .filter-btn {
            width: 48%;
            border-radius: 8px;
            padding: 0.5rem;
          }
        }
      `}</style>
    </section>
  );
}
