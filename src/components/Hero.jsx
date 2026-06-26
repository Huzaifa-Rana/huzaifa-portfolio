import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown, DollarSign, Users, Check, ShoppingBag, Zap, Activity } from 'lucide-react';
import useTilt from '../hooks/useTilt';
import huzaifaImage from '../assets/huzaifa.jpg';

export default function Hero() {
  const [currentTab, setCurrentTab] = useState('saas');
  const [imageCardRef, imageCardTiltStyle] = useTilt(10, 1.02);
  const [dashboardCardRef, dashboardCardTiltStyle] = useTilt(6, 1.01);

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
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-grid">
          
          {/* Hero Left Content */}
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="hero-tag">
              <span className="pulse-dot"></span>
              Custom Web Development
            </div>
            
            <h1 className="hero-title">
              Custom Web Apps <br/>
              Built for <span className="gradient-text">Growth.</span>
            </h1>

            <p className="hero-description">
              Hi, I'm <strong>Huzaifa</strong>, a Full Stack Developer. Anyone can generate a website with AI, but building a secure, optimized platform requires real engineering. I combine custom development with modern tools to deliver fast, scalable web apps, portals, and e-commerce systems tailored to your business goals. Skip the buggy templates—let's build a solution that actually works.
            </p>

            <div className="hero-ctas">
              <button 
                onClick={() => handleScrollTo('contact')}
                className="btn-primary"
              >
                Discuss Your Project <ArrowRight size={18} />
              </button>
              <button 
                onClick={() => handleScrollTo('projects')}
                className="btn-secondary"
              >
                See My Work
              </button>
            </div>

            <div className="hero-trust">
              <div className="trust-item">
                <span className="trust-number">React & PHP</span>
                <span className="trust-label">Core Speciality</span>
              </div>
              <div className="trust-divider"></div>
              <div className="trust-item">
                <span className="trust-number">Git & CI/CD</span>
                <span className="trust-label">Automation</span>
              </div>
              <div className="trust-divider"></div>
              <div className="trust-item">
                <span className="trust-number">Lighthouse 99+</span>
                <span className="trust-label">Speed Score</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Right Visuals (Composite 3D Space) */}
          <div className="hero-visual">
            
            {/* 1. Interactive Client-Friendly Dashboard Mockup (Back Plane) */}
            <motion.div 
              ref={dashboardCardRef}
              style={dashboardCardTiltStyle}
              className="ide-card glass-panel"
              initial={{ opacity: 0, x: 40, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="ide-header">
                <div className="ide-dots">
                  <span className="ide-dot red"></span>
                  <span className="ide-dot yellow"></span>
                  <span className="ide-dot green"></span>
                </div>
                <div className="ide-tabs">
                  <button 
                    type="button" 
                    className={`ide-tab ${currentTab === 'saas' ? 'active' : ''}`}
                    onClick={() => setCurrentTab('saas')}
                  >
                    SaaS Platform Demo
                  </button>
                  <button 
                    type="button" 
                    className={`ide-tab ${currentTab === 'shopify' ? 'active' : ''}`}
                    onClick={() => setCurrentTab('shopify')}
                  >
                    Shopify Integration
                  </button>
                </div>
              </div>
              
              <div className="ide-body dashboard-body">
                {currentTab === 'saas' ? (
                  <div className="dash-view">
                    {/* Top Row Widgets */}
                    <div className="dash-widgets-row">
                      <div className="widget-card glass-panel">
                        <div className="widget-header">
                          <span className="widget-title">Monthly Revenue</span>
                          <DollarSign size={14} className="widget-icon-light cyan" />
                        </div>
                        <div className="widget-value">$18,240</div>
                        <span className="widget-change positive">+14.2%</span>
                      </div>
                      
                      <div className="widget-card glass-panel">
                        <div className="widget-header">
                          <span className="widget-title">Active Users</span>
                          <Users size={14} className="widget-icon-light purple" />
                        </div>
                        <div className="widget-value">1,420</div>
                        <span className="widget-change positive">+8.6%</span>
                      </div>

                      <div className="widget-card glass-panel">
                        <div className="widget-header">
                          <span className="widget-title">Stripe Gateway</span>
                          <Activity size={14} className="widget-icon-light green" />
                        </div>
                        <div className="widget-badge active-badge">Connected</div>
                        <span className="widget-change neutral">Uptime 99%</span>
                      </div>
                    </div>

                    {/* Chart Mockup */}
                    <div className="dash-chart-wrapper glass-panel">
                      <div className="chart-header">
                        <span className="chart-title">User Growth Trend</span>
                        <span className="chart-legend">Q1-Q2 Analysis</span>
                      </div>
                      <div className="chart-visual-mock">
                        <svg viewBox="0 0 400 100" width="100%" height="80">
                          {/* Grid lines */}
                          <line x1="0" y1="20" x2="400" y2="20" stroke="rgba(255,255,255,0.03)" />
                          <line x1="0" y1="50" x2="400" y2="50" stroke="rgba(255,255,255,0.03)" />
                          <line x1="0" y1="80" x2="400" y2="80" stroke="rgba(255,255,255,0.03)" />
                          {/* Gradient Path */}
                          <path 
                            d="M 0,90 Q 60,80 100,50 T 200,60 T 300,20 T 400,10" 
                            fill="none" 
                            stroke="url(#chartGlow)" 
                            strokeWidth="3.5"
                          />
                          <path 
                            d="M 0,90 Q 60,80 100,50 T 200,60 T 300,20 T 400,10 L 400,100 L 0,100 Z" 
                            fill="url(#chartAreaGlow)" 
                            opacity="0.1"
                          />
                          <defs>
                            <linearGradient id="chartGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#00f2fe" />
                              <stop offset="100%" stopColor="#8b5cf6" />
                            </linearGradient>
                            <linearGradient id="chartAreaGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#00f2fe" />
                              <stop offset="100%" stopColor="transparent" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="dash-view">
                    {/* Top Row Widgets */}
                    <div className="dash-widgets-row">
                      <div className="widget-card glass-panel">
                        <div className="widget-header">
                          <span className="widget-title">Store Installs</span>
                          <ShoppingBag size={14} className="widget-icon-light purple" />
                        </div>
                        <div className="widget-value">480 Stores</div>
                        <span className="widget-change positive">+24 New</span>
                      </div>
                      
                      <div className="widget-card glass-panel">
                        <div className="widget-header">
                          <span className="widget-title">Sync Webhooks</span>
                          <Zap size={14} className="widget-icon-light cyan" />
                        </div>
                        <div className="widget-value">99.98%</div>
                        <span className="widget-change positive">Healthy</span>
                      </div>

                      <div className="widget-card glass-panel">
                        <div className="widget-header">
                          <span className="widget-title">App Bridge UI</span>
                          <Check size={14} className="widget-icon-light green" />
                        </div>
                        <div className="widget-badge active-badge shopify-badge">Certified</div>
                        <span className="widget-change neutral">Embedded</span>
                      </div>
                    </div>

                    {/* Webhook Log Console */}
                    <div className="dash-chart-wrapper glass-panel console-log-panel">
                      <div className="chart-header">
                        <span className="chart-title">Real-Time Webhook Gateway logs</span>
                        <span className="status-indicator-light"></span>
                      </div>
                      <div className="console-logs-list">
                        <div className="log-row"><span className="log-time">[10:42:01]</span> <span className="log-tag ok">OK</span> <span className="log-msg">orders/create webhook trigger matched</span></div>
                        <div className="log-row"><span className="log-time">[10:43:15]</span> <span className="log-tag ok">OK</span> <span className="log-msg">Shopify checkout session updated: code applied</span></div>
                        <div className="log-row"><span className="log-time">[10:44:48]</span> <span className="log-tag wait">SYNC</span> <span className="log-msg">GraphQL database replication task complete</span></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>

            {/* 2. Interactive Profile Card (Front Plane - Overlapping) */}
            <motion.div 
              ref={imageCardRef}
              style={imageCardTiltStyle}
              className="image-card-container"
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <div className="glow-ring"></div>
              
              <div className="image-card glass-panel">
                <div className="image-wrapper">
                  <img 
                    src={huzaifaImage} 
                    alt="Huzaifa Rana" 
                    className="profile-img"
                  />
                </div>
                
                <div className="profile-badge">
                  <div className="badge-title">Huzaifa Rana</div>
                  <div className="badge-sub">Full Stack Developer</div>
                </div>

                <div className="tech-tags-floating">
                  <span className="floating-tag tailwind">TailwindCSS</span>
                  <span className="floating-tag react">React.js</span>
                  <span className="floating-tag php">Laravel PHP</span>
                  <span className="floating-tag deployment">Git & Deploy</span>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

        <div className="hero-scroll-indicator" onClick={() => handleScrollTo('services')}>
          <span>Explore Services</span>
          <ArrowDown size={14} className="bounce-arrow" />
        </div>
      </div>

      {/* Styled Specifics for Hero Section */}
      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 7.5rem;
          padding-bottom: 3rem;
          position: relative;
        }
        
        .hero-container {
          position: relative;
          z-index: 10;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 3.5rem;
          align-items: center;
        }

        .hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(0, 242, 254, 0.06);
          border: 1px solid rgba(0, 242, 254, 0.15);
          border-radius: 9999px;
          padding: 0.45rem 1.1rem;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 1.75rem;
        }

        .pulse-dot {
          width: 7px;
          height: 7px;
          background-color: var(--primary);
          border-radius: 50%;
          display: inline-block;
          box-shadow: 0 0 8px var(--primary);
          animation: pulse 1.8s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(0, 242, 254, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(0, 242, 254, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(0, 242, 254, 0); }
        }

        .hero-title {
          font-size: 3.75rem;
          line-height: 1.15;
          margin-bottom: 1.5rem;
          letter-spacing: -0.04em;
        }

        .hero-description {
          font-size: 1.05rem;
          color: var(--text-secondary);
          margin-bottom: 2.25rem;
          max-width: 600px;
          line-height: 1.6;
        }

        .hero-ctas {
          display: flex;
          gap: 1.25rem;
          margin-bottom: 3.5rem;
          flex-wrap: wrap;
        }

        .hero-trust {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .trust-item {
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .trust-number {
          font-size: 1.4rem;
          font-weight: 800;
          font-family: var(--font-heading);
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-end) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .trust-label {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-top: 0.15rem;
          font-weight: 600;
        }

        .trust-divider {
          width: 1px;
          height: 25px;
          background-color: var(--border-light);
        }

        /* 3D Visual Stack on the Right */
        .hero-visual {
          position: relative;
          width: 100%;
          height: 480px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* IDE/Dashboard card details */
        .ide-card {
          position: absolute;
          width: 440px;
          height: 310px;
          left: -40px;
          top: 30px;
          z-index: 1;
          border-radius: 14px;
          overflow: hidden;
          background: rgba(10, 16, 32, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: var(--shadow-md);
          display: flex;
          flex-direction: column;
        }

        .ide-header {
          background: rgba(255, 255, 255, 0.02);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding: 0.65rem 1rem;
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .ide-dots {
          display: flex;
          gap: 0.4rem;
        }

        .ide-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
        }
        .ide-dot.red { background: #ef4444; }
        .ide-dot.yellow { background: #f59e0b; }
        .ide-dot.green { background: #10b981; }

        .ide-tabs {
          display: flex;
          gap: 0.5rem;
        }

        .ide-tab {
          background: transparent;
          border: none;
          color: var(--text-muted);
          font-size: 0.72rem;
          font-family: var(--font-body);
          font-weight: 700;
          cursor: pointer;
          padding: 0.15rem 0.55rem;
          border-radius: 4px;
          transition: all 0.2s;
        }

        .ide-tab.active {
          color: var(--primary);
          background: rgba(0, 242, 254, 0.06);
        }

        .ide-body {
          padding: 1.25rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .dashboard-body {
          padding: 1rem;
        }

        .dash-view {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          height: 100%;
        }

        .dash-widgets-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.6rem;
        }

        .widget-card {
          padding: 0.65rem;
          text-align: left;
          background: rgba(255,255,255,0.01);
          border: 1px solid rgba(255,255,255,0.03);
          border-radius: 8px;
        }

        .widget-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.25rem;
        }

        .widget-title {
          font-size: 0.58rem;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          color: var(--text-muted);
          font-weight: 700;
        }

        .widget-icon-light {
          opacity: 0.8;
        }
        .widget-icon-light.cyan { color: var(--primary); }
        .widget-icon-light.purple { color: var(--secondary); }
        .widget-icon-light.green { color: #10b981; }

        .widget-value {
          font-size: 1rem;
          font-weight: 800;
          color: #ffffff;
        }

        .widget-change {
          font-size: 0.55rem;
          font-weight: 700;
        }
        .widget-change.positive { color: #10b981; }
        .widget-change.neutral { color: var(--text-muted); }

        .widget-badge {
          font-size: 0.65rem;
          font-weight: 700;
          color: #ffffff;
          padding: 0.1rem 0.4rem;
          border-radius: 4px;
          display: inline-block;
          margin-top: 0.15rem;
        }
        .widget-badge.active-badge {
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
          border: 1px solid rgba(16, 185, 129, 0.3);
        }
        .widget-badge.shopify-badge {
          background: rgba(139, 92, 246, 0.15);
          color: #a78bfa;
          border: 1px solid rgba(139, 92, 246, 0.3);
        }

        .dash-chart-wrapper {
          flex-grow: 1;
          padding: 0.75rem;
          background: rgba(255,255,255,0.01);
          border: 1px solid rgba(255,255,255,0.03);
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          text-align: left;
        }

        .chart-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .chart-title {
          font-size: 0.65rem;
          font-weight: 700;
          color: #ffffff;
        }

        .chart-legend {
          font-size: 0.55rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .chart-visual-mock {
          width: 100%;
          opacity: 0.85;
        }

        /* Console styling for Webhooks */
        .console-log-panel {
          background: rgba(4, 6, 12, 0.4);
        }

        .status-indicator-light {
          width: 6px;
          height: 6px;
          background: #10b981;
          border-radius: 50%;
          box-shadow: 0 0 6px #10b981;
          display: inline-block;
        }

        .console-logs-list {
          font-family: 'Courier New', Courier, monospace;
          font-size: 0.58rem;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          margin-top: 0.35rem;
        }

        .log-row {
          color: var(--text-secondary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .log-time {
          color: var(--text-muted);
        }

        .log-tag.ok {
          color: #10b981;
          font-weight: 700;
          background: rgba(16, 185, 129, 0.1);
          padding: 0 0.2rem;
          border-radius: 2px;
          margin-right: 0.2rem;
        }

        .log-tag.wait {
          color: var(--primary);
          font-weight: 700;
          background: rgba(0, 242, 254, 0.1);
          padding: 0 0.2rem;
          border-radius: 2px;
          margin-right: 0.2rem;
        }

        .log-msg {
          color: rgba(255,255,255,0.85);
        }

        /* Profile Card Overlay Styling */
        .image-card-container {
          position: absolute;
          width: 320px;
          right: -20px;
          bottom: 20px;
          z-index: 5;
        }

        .glow-ring {
          position: absolute;
          top: -12px;
          left: -12px;
          right: -12px;
          bottom: -12px;
          border-radius: 26px;
          background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
          opacity: 0.12;
          filter: blur(12px);
          z-index: 0;
          pointer-events: none;
        }

        .image-card {
          position: relative;
          z-index: 1;
          padding: 1.1rem;
          border-radius: 22px;
          overflow: visible;
          box-shadow: var(--shadow-lg);
          border: 1px solid rgba(255, 255, 255, 0.04);
        }

        .image-wrapper {
          width: 100%;
          aspect-ratio: 1 / 1;
          border-radius: 14px;
          overflow: hidden;
          background-color: #0f172a;
          border: 1px solid rgba(255, 255, 255, 0.06);
        }

        .profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .image-card:hover .profile-img {
          transform: scale(1.04);
        }

        .profile-badge {
          margin-top: 0.85rem;
          text-align: center;
        }

        .badge-title {
          font-weight: 750;
          font-size: 1.1rem;
          color: #ffffff;
        }

        .badge-sub {
          font-size: 0.8rem;
          color: var(--primary);
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-top: 0.1rem;
        }

        /* Floating tag details */
        .tech-tags-floating {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 2;
        }

        .floating-tag {
          position: absolute;
          padding: 0.4rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.7rem;
          font-weight: 700;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: var(--shadow-md);
        }

        .floating-tag.tailwind {
          top: 15%;
          left: -35px;
          background: rgba(56, 189, 248, 0.12);
          color: #38bdf8;
          border-color: rgba(56, 189, 248, 0.25);
          animation: float 4s ease-in-out infinite alternate;
        }

        .floating-tag.react {
          bottom: 25%;
          right: -35px;
          background: rgba(6, 182, 212, 0.12);
          color: #22d3ee;
          border-color: rgba(6, 182, 212, 0.25);
          animation: float 4.4s ease-in-out infinite alternate-reverse;
        }

        .floating-tag.php {
          bottom: 12%;
          left: -25px;
          background: rgba(139, 92, 246, 0.12);
          color: #a78bfa;
          border-color: rgba(139, 92, 246, 0.25);
          animation: float 3.8s ease-in-out infinite alternate 0.5s;
        }

        .floating-tag.deployment {
          top: 8%;
          right: -20px;
          background: rgba(16, 185, 129, 0.12);
          color: #34d399;
          border-color: rgba(16, 185, 129, 0.25);
          animation: float 4.2s ease-in-out infinite alternate-reverse 0.2s;
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-8px); }
        }

        .hero-scroll-indicator {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          margin-top: 5rem;
          cursor: pointer;
          color: var(--text-secondary);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition: color 0.2s;
        }

        .hero-scroll-indicator:hover {
          color: #ffffff;
        }

        .bounce-arrow {
          animation: bounce 1.8s infinite;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-8px); }
          60% { transform: translateY(-4px); }
        }

        @media (max-width: 1024px) {
          .hero-title { font-size: 3rem; }
          .hero-visual { height: 420px; }
          .ide-card { width: 380px; left: -20px; }
          .image-card-container { width: 280px; right: -10px; }
        }

        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
            text-align: center;
          }

          .hero-tag {
            justify-content: center;
          }

          .hero-description {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-ctas {
            justify-content: center;
          }

          .hero-trust {
            justify-content: center;
            flex-wrap: wrap;
            gap: 1.25rem;
          }

          .hero-visual {
            height: auto;
            flex-direction: column;
            gap: 2rem;
          }

          .ide-card, .image-card-container {
            position: static;
            width: 100%;
            max-width: 380px;
            margin: 0 auto;
          }
          
          .floating-tag.tailwind { left: -10px; }
          .floating-tag.react { right: -10px; }
          .floating-tag.php { left: -10px; }
          .floating-tag.deployment { right: -10px; }
        }

        @media (max-width: 540px) {
          .hero-title {
            font-size: 2.3rem;
          }
          .hero-trust {
            flex-direction: column;
            align-items: center;
            gap: 0.85rem;
          }
          .trust-divider {
            display: none;
          }
          .trust-item {
            align-items: center;
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .ide-card {
            height: auto;
            min-height: 330px;
          }
          .dash-widgets-row {
            grid-template-columns: 1fr;
            gap: 0.5rem;
          }
          .widget-card {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.5rem 0.75rem;
          }
          .widget-header {
            margin-bottom: 0;
            width: 50%;
          }
          .widget-value {
            font-size: 0.85rem;
          }
          .widget-change, .widget-badge {
            margin-top: 0;
          }
        }
      `}</style>
    </section>
  );
}
