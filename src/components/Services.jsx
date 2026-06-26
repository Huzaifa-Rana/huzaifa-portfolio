import React from 'react';
import { motion } from 'framer-motion';
import { Layers, ShoppingBag, Terminal, CheckCircle2 } from 'lucide-react';
import useTilt from '../hooks/useTilt';

function ServiceCard({ service, cardVariants }) {
  const [cardRef, tiltStyle] = useTilt(8, 1.02);

  return (
    <motion.div 
      variants={cardVariants}
      className="service-card-entrance-wrapper"
    >
      <div 
        ref={cardRef}
        style={tiltStyle}
        className={`service-card glass-panel glass-panel-hover ${service.glowClass}`}
      >
        <div className="service-icon-wrapper">
          {service.icon}
        </div>
        
        <div className="service-header-meta">
          <span className="service-tag-small">{service.tag}</span>
          <h3 className="service-card-title">{service.title}</h3>
        </div>

        <p className="service-desc">{service.description}</p>

        <div className="divider-h"></div>

        <div className="service-features-list">
          <h4 className="features-title">Core Competencies:</h4>
          <ul>
            {service.features.map((feat, fidx) => (
              <li key={fidx}>
                <CheckCircle2 size={15} className="feature-check" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="service-footer">
          <span className="speed-badge">{service.speed}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const services = [
    {
      icon: <Layers size={32} className="service-icon primary" />,
      title: "SaaS MVPs & Apps",
      tag: "Full-Stack Execution",
      description: "Scale from blank canvas to functional subscription business. I build robust multi-tenant platforms optimized for performance and security.",
      features: [
        "React state, components & responsive designs",
        "Laravel API routing & server authentication",
        "Secure database layouts (MySQL/PostgreSQL)",
        "Stripe subscription & checkout portals",
        "Automated deployment & environment setup"
      ],
      speed: "Ready in 2-4 Weeks",
      glowClass: "glow-primary"
    },
    {
      icon: <ShoppingBag size={32} className="service-icon secondary" />,
      title: "Custom E-Commerce & Shopify Apps",
      tag: "Custom Stores & App Integrations",
      description: "I engineer custom e-commerce storefronts using programming languages (Laravel & React) for maximum speeds. For Shopify, I specialize exclusively in custom App Bridge & API integrations.",
      features: [
        "React/Laravel custom storefronts from scratch",
        "Shopify App Bridge & Polaris UI dashboards",
        "Checkout extensions & custom pricing rules",
        "GDPR-compliant webhook microservices",
        "GraphQL API catalog syncs & integrations"
      ],
      speed: "Ready in 1-3 Weeks",
      glowClass: "glow-secondary"
    },
    {
      icon: <Terminal size={32} className="service-icon accent" />,
      title: "Business Automation",
      tag: "Data Syncs & Admin Portals",
      description: "Migrate legacy databases or eliminate daily spreadsheets with modern, automated internal dashboards and API connectors.",
      features: [
        "Legacy SQL database migrations to web",
        "Slack, Twilio & third-party webhook links",
        "Advanced searching, exporting & reports",
        "Clean HTML, CSS & JavaScript structure",
        "Automated cron jobs & queue workers"
      ],
      speed: "Custom Timeline",
      glowClass: "glow-accent"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="services" className="services-section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">High-End Services</span>
          <h2 className="section-title">Engineered For Dynamic Web Scale</h2>
          <p className="section-subtitle">
            I write clean, hand-coded scripts and backends. No visual builders—only optimized, maintainable codebases built to convert.
          </p>
        </div>

        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, idx) => (
            <ServiceCard 
              key={idx}
              service={service}
              cardVariants={cardVariants}
            />
          ))}
        </motion.div>

      </div>

      <style>{`
        .services-section {
          background-color: transparent;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .service-card-entrance-wrapper {
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .service-card {
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          height: 100%;
          position: relative;
          overflow: hidden;
          background: rgba(10, 16, 32, 0.65);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .service-icon-wrapper {
          width: 54px;
          height: 54px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-light);
        }

        .service-icon.primary { color: var(--primary); }
        .service-icon.secondary { color: var(--secondary); }
        .service-icon.accent { color: var(--accent); }

        .service-tag-small {
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          display: block;
          margin-bottom: 0.25rem;
        }

        .service-card-title {
          font-size: 1.35rem;
          margin-bottom: 0.85rem;
          font-weight: 800;
        }

        .service-desc {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
          line-height: 1.5;
        }

        .divider-h {
          height: 1px;
          background: var(--border-light);
          margin: 1.25rem 0;
        }

        .service-features-list {
          flex-grow: 1;
          margin-bottom: 1.75rem;
        }

        .features-title {
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #ffffff;
          margin-bottom: 0.75rem;
        }

        .service-features-list ul {
          list-style: none;
        }

        .service-features-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-bottom: 0.55rem;
          text-align: left;
        }

        .feature-check {
          color: var(--primary);
          flex-shrink: 0;
          margin-top: 0.15rem;
        }

        .service-footer {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          margin-top: auto;
        }

        .speed-badge {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-light);
          padding: 0.35rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.7rem;
          font-weight: 700;
          color: #ffffff;
        }

        /* Ambient Glow Shadows for specific cards */
        .service-card.glow-primary::after {
          content: '';
          position: absolute;
          width: 140px;
          height: 140px;
          background: var(--primary);
          opacity: 0.03;
          filter: blur(40px);
          top: -40px;
          right: -40px;
          border-radius: 50%;
        }

        .service-card.glow-secondary::after {
          content: '';
          position: absolute;
          width: 140px;
          height: 140px;
          background: var(--secondary);
          opacity: 0.03;
          filter: blur(40px);
          top: -40px;
          right: -40px;
          border-radius: 50%;
        }

        .service-card.glow-accent::after {
          content: '';
          position: absolute;
          width: 140px;
          height: 140px;
          background: var(--accent);
          opacity: 0.03;
          filter: blur(40px);
          top: -40px;
          right: -40px;
          border-radius: 50%;
        }

        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
