import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Zap, Clock, ExternalLink, Home } from 'lucide-react';
import useTilt from '../hooks/useTilt';
import naffeezImage from '../assets/naffeez.png';
import naffeezAdminImage from '../assets/naffeez-admin.png';
import studiodImage from '../assets/studiod.png';
import realestateImage from '../assets/realestate.jpg';

function ProjectCard({ project, idx }) {
  const [cardRef, tiltStyle] = useTilt(6, 1.01);

  return (
    <motion.div 
      className="project-card-entrance-wrapper"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: idx * 0.15 }}
    >
      <div 
        ref={cardRef}
        className="project-card glass-panel"
        style={{ ...tiltStyle, '--card-ambient-glow': project.glow }}
      >
        {/* Visual Header / Image Node (No overlapping overlays) */}
        {project.image ? (
          <div className="project-image-wrapper">
            <img src={project.image} alt={project.title} className="project-card-image" />
          </div>
        ) : (
          <div className="project-visual-header">
            <div className="dot-cluster">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
          </div>
        )}

        <div className="project-body">
          {/* Category Label above Title */}
          <span className="project-category-lbl">{project.category}</span>
          
          <div className="project-title-row">
            <h3 className="project-title-name">{project.title}</h3>
            {project.url && (
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-external-link"
                aria-label={`Visit ${project.title}`}
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
          
          <p className="project-description-text">{project.desc}</p>

          <div className="project-tech-tags">
            {project.tech.map((t, tidx) => (
              <span key={tidx} className="project-tech-tag">{t}</span>
            ))}
          </div>

          <div className="project-divider"></div>

          {/* Dynamic Business Value Indicators */}
          <div className="project-metrics-grid">
            {project.metrics.map((m, midx) => (
              <div key={midx} className="metric-box">
                <div className="metric-icon-val">
                  {m.icon}
                  <span className="metric-val">{m.val}</span>
                </div>
                <span className="metric-label">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const projects = [
    {
      title: "Naffeez Custom E-Commerce",
      category: "Custom Storefront",
      desc: "A custom high-performance e-commerce platform built from scratch with a PHP Laravel backend API, MySQL database, and responsive React storefront. Optimized for high speed and checkouts.",
      tech: ["HTML/CSS", "React.js", "Laravel", "MySQL", "Git & Deploy"],
      image: naffeezImage,
      url: "https://naffeez.com/",
      metrics: [
        { label: "Checkout", val: "Sub 1s", icon: <Clock size={13} /> },
        { label: "Performance", val: "99/100", icon: <Zap size={13} /> },
        { label: "Sales Boost", val: "+35%", icon: <TrendingUp size={13} /> }
      ],
      glow: "rgba(0, 242, 254, 0.12)"
    },
    {
      title: "Naffeez Custom Admin & CRM",
      category: "Custom SaaS Portal",
      desc: "A custom secure admin and CRM system built for Naffeez. Integrates real-time financial summaries, inventory alerts, product catalog management, and sales order analytics.",
      tech: ["HTML/CSS", "React.js", "Laravel", "MySQL", "Deployments"],
      image: naffeezAdminImage,
      metrics: [
        { label: "Sync Speed", val: "Instant", icon: <TrendingUp size={13} /> },
        { label: "Load Time", val: "<0.8s", icon: <Clock size={13} /> },
        { label: "Analytics DB", val: "Optimized", icon: <Zap size={13} /> }
      ],
      glow: "rgba(245, 158, 11, 0.12)"
    },
    {
      title: "Studio D Interiors Website",
      category: "Custom Business Site",
      desc: "A custom web platform designed and built for Studio D Interiors design firm. Built using clean code structures for high search rankings, smooth animations, and full responsiveness.",
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "SEO Setup"],
      image: studiodImage,
      url: "https://studiodinteriors.net/",
      metrics: [
        { label: "Lighthouse", val: "98/100", icon: <Zap size={13} /> },
        { label: "SEO Rank", val: "Indexed", icon: <TrendingUp size={13} /> },
        { label: "Mobile UX", val: "Responsive", icon: <Clock size={13} /> }
      ],
      glow: "rgba(139, 92, 246, 0.12)"
    },
    {
      title: "LuxeHaven Real Estate",
      category: "Luxury Property Platform",
      desc: "A premium real estate web platform for exclusive off-market luxury residences. Features cinematic hero sliders, property search filters, advisor profiles, testimonials, and full mobile responsiveness.",
      tech: ["React.js", "CSS3", "Framer Motion", "Responsive Design", "GitHub Pages"],
      image: realestateImage,
      url: "https://huzaifa-rana.github.io/realestate/",
      metrics: [
        { label: "Design", val: "Premium", icon: <Home size={13} /> },
        { label: "Animations", val: "Smooth", icon: <Zap size={13} /> },
        { label: "Mobile UX", val: "Responsive", icon: <TrendingUp size={13} /> }
      ],
      glow: "rgba(212, 175, 55, 0.12)"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">Featured Case Studies</span>
          <h2 className="section-title">Production Web Deployments</h2>
          <p className="section-subtitle">
            A showcase of custom hand-coded applications built to automate workflows, speed up storefronts, and scale backends.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <ProjectCard 
              key={idx}
              project={project}
              idx={idx}
            />
          ))}
        </div>

      </div>

      <style>{`
        .projects-section {
          background-color: transparent;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .project-card-entrance-wrapper {
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .project-card {
          border: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          flex-direction: column;
          border-radius: 20px;
          overflow: hidden;
          background: rgba(10, 16, 32, 0.65);
          position: relative;
          box-shadow: var(--shadow-sm);
        }

        .project-card:hover {
          border-color: rgba(255, 255, 255, 0.12);
          box-shadow: 0 12px 40px -10px var(--card-ambient-glow);
        }

        /* Responsive image wrappers */
        .project-image-wrapper {
          width: 100%;
          height: 180px;
          overflow: hidden;
          background: #0d121f;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          position: relative;
        }

        .project-card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .project-card:hover .project-card-image {
          transform: scale(1.05);
        }

        .project-visual-header {
          background: rgba(255, 255, 255, 0.01);
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
          padding: 1rem 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .dot-cluster {
          display: flex;
          gap: 0.35rem;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          display: inline-block;
        }

        .dot.red { background-color: #ef4444; }
        .dot.yellow { background-color: #eab308; }
        .dot.green { background-color: #22c55e; }

        .project-category-lbl {
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--primary);
          margin-bottom: 0.4rem;
          display: block;
        }

        .project-body {
          padding: 1.75rem 1.75rem 2.25rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          text-align: left;
        }

        .project-title-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.75rem;
          gap: 1rem;
        }

        .project-title-name {
          font-size: 1.3rem;
          color: #ffffff;
          font-weight: 800;
          margin-bottom: 0;
        }

        .project-external-link {
          color: var(--text-muted);
          transition: color 0.2s, transform 0.2s;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .project-external-link:hover {
          color: var(--primary);
          transform: translateY(-1px);
        }

        .project-description-text {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .project-tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-bottom: 1.5rem;
        }

        .project-tech-tag {
          font-size: 0.7rem;
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-light);
          padding: 0.2rem 0.55rem;
          border-radius: 4px;
          font-weight: 600;
        }

        .project-divider {
          height: 1px;
          background: rgba(255, 255, 255, 0.04);
          margin-bottom: 1.25rem;
        }

        .project-metrics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.4rem;
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid var(--border-light);
          border-radius: 10px;
          padding: 0.75rem 0.4rem;
        }

        .metric-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .metric-icon-val {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          color: var(--primary);
        }

        .metric-val {
          font-size: 0.85rem;
          font-weight: 750;
          color: #ffffff;
          white-space: nowrap;
        }

        .metric-label {
          font-size: 0.62rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          margin-top: 0.15rem;
          font-weight: 600;
          white-space: nowrap;
        }

        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
