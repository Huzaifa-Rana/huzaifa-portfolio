import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare, Send, Check } from 'lucide-react';

export default function Contact() {
  const [projectType, setProjectType] = useState('saas');
  const [budget, setBudget] = useState('medium');
  const [timeline, setTimeline] = useState('standard');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const projectTypes = [
    { id: 'saas', label: 'SaaS MVP / Startup' },
    { id: 'shopify', label: 'Shopify Custom App' },
    { id: 'portal', label: 'Business Web App' },
    { id: 'other', label: 'Other/Consulting' }
  ];

  const budgetRanges = [
    { id: 'low', label: '< $2,000' },
    { id: 'medium', label: '$2,000 - $5,000' },
    { id: 'high', label: '$5,000 - $10,000' },
    { id: 'enterprise', label: '$10,000+' }
  ];

  const timelines = [
    { id: 'urgent', label: 'Urgent (< 2 weeks)' },
    { id: 'standard', label: '2 - 4 weeks' },
    { id: 'flexible', label: 'Flexible timeline' }
  ];

  const getBudgetText = (id) => {
    switch (id) {
      case 'low': return '< $2k';
      case 'medium': return '$2k - $5k';
      case 'high': return '$5k - $10k';
      case 'enterprise': return '$10k+';
      default: return 'Not Specified';
    }
  };

  const getTimelineText = (id) => {
    switch (id) {
      case 'urgent': return 'Urgent (< 2w)';
      case 'standard': return '2-4 weeks';
      case 'flexible': return 'Flexible';
      default: return 'Not Specified';
    }
  };

  const getProjectTypeText = (id) => {
    switch (id) {
      case 'saas': return 'SaaS MVP';
      case 'shopify': return 'Shopify App';
      case 'portal': return 'Business Web App';
      case 'other': return 'Custom Request';
      default: return 'Not Specified';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSubmitted(true);
    
    // Construct prefilled whatsapp message for high conversion
    const textMsg = `Hi Huzaifa,\n\nI filled out your website project planner with the following details:\n\n` +
      `- Name: ${name}\n` +
      `- Email: ${email}\n` +
      `- Project Type: ${getProjectTypeText(projectType)}\n` +
      `- Budget Range: ${getBudgetText(budget)}\n` +
      `- Required Timeline: ${getTimelineText(timeline)}\n\n` +
      `Details:\n${message || 'No additional details provided.'}`;

    const waLink = `https://wa.me/923156882232?text=${encodeURIComponent(textMsg)}`;
    
    // Open WhatsApp
    setTimeout(() => {
      window.open(waLink, '_blank');
    }, 1500);
  };

  const handleWhatsAppDirect = () => {
    const textMsg = `Hi Huzaifa, I am looking to build a project. \n` +
      `- Type: ${getProjectTypeText(projectType)}\n` +
      `- Budget: ${getBudgetText(budget)}\n` +
      `- Timeline: ${getTimelineText(timeline)}\n` +
      `Let's connect!`;
    const waLink = `https://wa.me/923156882232?text=${encodeURIComponent(textMsg)}`;
    window.open(waLink, '_blank');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">Let's Partner</span>
          <h2 className="section-title">Schedule Your Scoping Consultation</h2>
          <p className="section-subtitle">
            Skip the generic forms. Select your project parameters below to outline your budget, timeline, and goals instantly.
          </p>
        </div>

        <div className="contact-grid">
          
          {/* Direct CTA Panel */}
          <div className="contact-info-panel glass-panel">
            <h3 className="panel-title">Let's Connect Directly</h3>
            <p className="panel-desc">
              Have an urgent requirement or want to jump straight on a briefing call? Reach out through any of these direct communication channels.
            </p>

            <div className="contact-methods">
              <a href="mailto:huzaifarana.pk@gmail.com" className="method-card glass-panel-hover">
                <div className="method-icon"><Mail size={20} /></div>
                <div className="method-details">
                  <span className="method-label">Direct Email</span>
                  <span className="method-value">huzaifarana.pk@gmail.com</span>
                </div>
              </a>

              <button onClick={handleWhatsAppDirect} className="method-card glass-panel-hover wa-btn-card">
                <div className="method-icon"><MessageSquare size={20} /></div>
                <div className="method-details">
                  <span className="method-label">Direct WhatsApp Chat</span>
                  <span className="method-value">+92 315 6882232</span>
                </div>
              </button>

              <div className="method-card">
                <div className="method-icon"><Phone size={20} /></div>
                <div className="method-details">
                  <span className="method-label">Direct Call Support</span>
                  <span className="method-value">+92 315 6882232</span>
                </div>
              </div>
            </div>

            <div className="badge-guarantee">
              <div className="guarantee-icon"><Check size={16} /></div>
              <div className="guarantee-text">
                <strong>NDA Guarantee:</strong> I sign standard confidentiality contracts prior to project scopes.
              </div>
            </div>
          </div>

          {/* Interactive Planner Form */}
          <div className="contact-form-panel glass-panel">
            {isSubmitted ? (
              <motion.div 
                className="success-state"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="success-icon-wrapper">
                  <Check size={40} />
                </div>
                <h3 className="success-title">Scope Compiled Successfully!</h3>
                <p className="success-desc">
                  Opening WhatsApp to send your project scope. If the chat doesn't open automatically, please click the button below to connect.
                </p>
                <button 
                  onClick={() => {
                    const textMsg = `Hi Huzaifa,\n\nI filled out your website project planner with the following details:\n\n` +
                      `- Name: ${name}\n` +
                      `- Email: ${email}\n` +
                      `- Project Type: ${getProjectTypeText(projectType)}\n` +
                      `- Budget Range: ${getBudgetText(budget)}\n` +
                      `- Required Timeline: ${getTimelineText(timeline)}\n\n` +
                      `Details:\n${message || 'No additional details provided.'}`;
                    window.open(`https://wa.me/923156882232?text=${encodeURIComponent(textMsg)}`, '_blank');
                  }}
                  className="btn-primary"
                  style={{ marginTop: '1.5rem' }}
                >
                  Send to WhatsApp Manually
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="planner-form">
                
                {/* 1. Project Type Selector */}
                <div className="form-group-planner">
                  <label>1. What can I build for you?</label>
                  <div className="planner-selector-grid">
                    {projectTypes.map(type => (
                      <button
                        type="button"
                        key={type.id}
                        onClick={() => setProjectType(type.id)}
                        className={`selector-btn ${projectType === type.id ? 'active' : ''}`}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Budget Range Selector */}
                <div className="form-group-planner">
                  <label>2. What is your estimated project budget?</label>
                  <div className="planner-selector-grid">
                    {budgetRanges.map(range => (
                      <button
                        type="button"
                        key={range.id}
                        onClick={() => setBudget(range.id)}
                        className={`selector-btn ${budget === range.id ? 'active' : ''}`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Timeline Selector */}
                <div className="form-group-planner">
                  <label>3. What is your required timeline?</label>
                  <div className="planner-selector-grid">
                    {timelines.map(time => (
                      <button
                        type="button"
                        key={time.id}
                        onClick={() => setTimeline(time.id)}
                        className={`selector-btn ${timeline === time.id ? 'active' : ''}`}
                      >
                        {time.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 4. Text Inputs */}
                <div className="form-inputs-row">
                  <div className="input-field-half">
                    <label htmlFor="client-name">Your Name</label>
                    <input 
                      type="text" 
                      id="client-name" 
                      placeholder="e.g. John Doe"
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                      required
                    />
                  </div>
                  <div className="input-field-half">
                    <label htmlFor="client-email">Email Address</label>
                    <input 
                      type="email" 
                      id="client-email" 
                      placeholder="e.g. john@company.com"
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      required
                    />
                  </div>
                </div>

                <div className="input-field-full">
                  <label htmlFor="project-desc">Project Details (Optional)</label>
                  <textarea 
                    id="project-desc" 
                    rows="3" 
                    placeholder="Briefly describe your project goals, custom features, integrations..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary form-submit-btn">
                  Submit Project Scope & Connect <Send size={16} />
                </button>

              </form>
            )}
          </div>

        </div>

      </div>

      <style>{`
        .contact-section {
          background-color: transparent;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 2.5rem;
          align-items: start;
        }

        .contact-info-panel {
          padding: 2.5rem;
          background: rgba(15, 23, 42, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .panel-title {
          font-size: 1.5rem;
          margin-bottom: 0.75rem;
        }

        .panel-desc {
          color: var(--text-secondary);
          font-size: 0.95rem;
          margin-bottom: 2rem;
          line-height: 1.5;
        }

        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-bottom: 2rem;
        }

        .method-card {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1.25rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-light);
          border-radius: 12px;
          text-decoration: none;
          color: inherit;
          text-align: left;
          width: 100%;
        }

        .wa-btn-card {
          cursor: pointer;
          font-family: inherit;
          outline: none;
        }

        .wa-btn-card:hover {
          border-color: #22c55e;
          box-shadow: 0 0 15px rgba(34, 197, 94, 0.15);
        }

        .method-icon {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 242, 254, 0.08);
          border: 1px solid rgba(0, 242, 254, 0.15);
          color: var(--primary);
          flex-shrink: 0;
        }

        .wa-btn-card .method-icon {
          background: rgba(34, 197, 94, 0.08);
          border: 1px solid rgba(34, 197, 94, 0.15);
          color: #22c55e;
        }

        .method-details {
          display: flex;
          flex-direction: column;
        }

        .method-label {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .method-value {
          font-size: 0.95rem;
          color: #ffffff;
          font-weight: 600;
          margin-top: 0.1rem;
        }

        .badge-guarantee {
          display: flex;
          gap: 0.75rem;
          align-items: flex-start;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 1rem;
          border-radius: 10px;
        }

        .guarantee-icon {
          color: var(--primary);
          margin-top: 0.1rem;
          flex-shrink: 0;
        }

        .guarantee-text {
          font-size: 0.8rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        .contact-form-panel {
          padding: 3rem;
          background: rgba(15, 23, 42, 0.6);
        }

        .form-group-planner {
          margin-bottom: 1.5rem;
        }

        .planner-selector-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.6rem;
          margin-top: 0.5rem;
        }

        .selector-btn {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-light);
          border-radius: 8px;
          padding: 0.75rem 1rem;
          color: var(--text-secondary);
          font-family: inherit;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          text-align: center;
        }

        .selector-btn:hover {
          background: rgba(255, 255, 255, 0.05);
          color: #ffffff;
          border-color: rgba(255, 255, 255, 0.15);
        }

        .selector-btn.active {
          background: rgba(0, 242, 254, 0.08);
          border-color: var(--primary);
          color: var(--primary);
        }

        .form-inputs-row {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.25rem;
        }

        .input-field-half {
          width: 50%;
        }

        .input-field-full {
          margin-bottom: 1.5rem;
        }

        .form-submit-btn {
          width: 100%;
          justify-content: center;
        }

        /* Success state styles */
        .success-state {
          text-align: center;
          padding: 4rem 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .success-icon-wrapper {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(34, 197, 94, 0.1);
          border: 2px solid #22c55e;
          color: #22c55e;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          box-shadow: 0 0 20px rgba(34, 197, 94, 0.15);
        }

        .success-title {
          font-size: 1.6rem;
          margin-bottom: 0.75rem;
          color: #ffffff;
        }

        .success-desc {
          color: var(--text-secondary);
          max-width: 420px;
          margin: 0 auto;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        @media (max-width: 640px) {
          .contact-form-panel {
            padding: 1.75rem;
          }
          
          .planner-selector-grid {
            grid-template-columns: 1fr;
          }

          .form-inputs-row {
            flex-direction: column;
            gap: 1.25rem;
          }

          .input-field-half {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
