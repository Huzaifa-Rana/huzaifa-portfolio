import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export default function Faq() {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    {
      q: "How fast can you build and deploy an MVP/SaaS?",
      a: "Typically 2 to 4 weeks, depending on the scope of features. I focus heavily on streamlining features to get your core value proposition to market quickly. We work in sprints, meaning you see clickable, functioning updates every 3–4 days."
    },
    {
      q: "Who owns the intellectual property and code repository?",
      a: "You do. 100% contractually. I write custom code directly into your owned GitHub repositories or transfer full ownership immediately upon project sign-off. All third-party hosting, API access keys, and databases are created under accounts you control."
    },
    {
      q: "Do you build Shopify public apps and handle store submission?",
      a: "Yes. I construct custom embedded Shopify apps adhering strictly to Shopify's Polaris UI patterns and App Bridge requirements. I also configure mandatory GDPR webhooks and secure OAuth, making sure the app passes the Shopify App Store QA review smoothly."
    },
    {
      q: "Are we required to sign an NDA before outlining project details?",
      a: "Absolutely. I protect my clients' ideas. I am happy to review and sign your standard Non-Disclosure Agreement (NDA) before we discuss details, databases, or workflow logic."
    },
    {
      q: "How does payment work and what are the starting terms?",
      a: "I work on milestone-based budgets. We break your project down into logical chunks (e.g., UI layout, Database Setup, API Integration, Launch). You pay a percentage deposit to launch, with subsequent payments released only after you review and approve each completed milestone."
    }
  ];

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container faq-container">
        
        <div className="section-header">
          <span className="section-tag">Answering Your Questions</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Need clarity on process, deliverables, or integrations? Here are honest details about how I partner with clients.
          </p>
        </div>

        <div className="faq-accordion-list">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className={`faq-item glass-panel ${isOpen ? 'active-faq' : ''}`}
                onClick={() => toggleFaq(idx)}
              >
                <div className="faq-question-row">
                  <h3 className="faq-question-title">{faq.q}</h3>
                  <span className="faq-icon-wrapper">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="faq-answer-wrapper"
                    >
                      <div className="faq-answer-text">
                        <p>{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        .faq-section {
          background-color: transparent;
        }

        .faq-container {
          max-width: 800px;
        }

        .faq-accordion-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .faq-item {
          padding: 1.5rem 1.75rem;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          cursor: pointer;
          user-select: none;
          transition: border-color 0.2s, background-color 0.2s;
        }

        .faq-item:hover {
          border-color: rgba(255, 255, 255, 0.15);
          background: rgba(255, 255, 255, 0.02);
        }

        .faq-item.active-faq {
          border-color: var(--primary-glow);
          background: rgba(15, 23, 42, 0.85);
        }

        .faq-question-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1.5rem;
        }

        .faq-question-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: #ffffff;
          line-height: 1.4;
        }

        .faq-icon-wrapper {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-light);
          flex-shrink: 0;
          color: var(--primary);
          transition: transform 0.2s, color 0.2s;
        }

        .faq-item:hover .faq-icon-wrapper {
          color: #ffffff;
          border-color: var(--primary);
        }

        .faq-answer-wrapper {
          overflow: hidden;
        }

        .faq-answer-text {
          padding-top: 1.25rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          margin-top: 1.25rem;
        }

        .faq-answer-text p {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        @media (max-width: 640px) {
          .faq-question-title {
            font-size: 1rem;
          }
          
          .faq-item {
            padding: 1.25rem 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
