'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = [
    'Verified Indian Suppliers',
    'Agricultural Commodities',
    'Bulk Spice & Turmeric Deals',
    'Global Sourcing Partners',
    'Direct Farm-to-Port Export',
  ];

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setText(currentPhrase.slice(0, text.length - 1));
        if (text.length === 1) {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }, 45);
    } else {
      if (text.length < currentPhrase.length) {
        timeout = setTimeout(() => {
          setText(currentPhrase.slice(0, text.length + 1));
        }, 90);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1800);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex]);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-inner">
        <div className="hero-tag">
          <i className="fas fa-handshake"></i>
          <span>Independent Export Sourcing Partner · Erode, India</span>
        </div>
        <h2 className="hero-title">
          Connecting Global Buyers
          <br />
          <em className="hero-title-accent">
            <span>{text}</span>
            <span className="typed-cursor">|</span>
          </em>
        </h2>
        <p className="hero-desc">
          Transparently. Efficiently. Reliably. — Sourcing premium agricultural
          commodities and industrial goods from India's best production regions.
        </p>
        <div className="hero-chips">
          <span className="chip">
            <i className="fas fa-seedling"></i> Turmeric & Spices
          </span>
          <span className="chip">
            <i className="fas fa-cube"></i> Plastic Storage Tanks
          </span>
          <span className="chip">
            <i className="fas fa-globe"></i> Worldwide Export
          </span>
        </div>
        <div className="hero-actions">
          <a href="#products" className="btn-primary">
            Explore Products <i className="fas fa-arrow-right"></i>
          </a>
          <a href="#contact" className="btn-secondary">
            Get In Touch <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>

      <div className="hero-side">
        <div className="hero-circle-wrap">
          <div className="hero-circle">
            <i className="fas fa-globe-asia"></i>
          </div>
          <div className="hero-ring r1"></div>
          <div className="hero-ring r2"></div>
          <div className="hero-ring r3"></div>
        </div>
        <div className="hero-float-card fc1">
          <i className="fas fa-users"></i>
          <div>
            <strong>30+</strong>
            <span>Verified Suppliers</span>
          </div>
        </div>
        <div className="hero-float-card fc2">
          <i className="fas fa-certificate"></i>
          <div>
            <strong>IEC</strong>
            <span>Registered Exporter</span>
          </div>
        </div>
        <div className="hero-float-card fc3">
          <i className="fas fa-globe"></i>
          <div>
            <strong>10+</strong>
            <span>Countries Reached</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          gap: 3rem;
          padding: 5rem 4.5rem;
          background: var(--bg);
          border-bottom: 1px solid var(--border);
          position: relative;
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(
            circle,
            rgba(245, 197, 24, 0.07) 1px,
            transparent 1px
          );
          background-size: 40px 40px;
          pointer-events: none;
        }

        .hero-section::after {
          content: '';
          position: absolute;
          top: -200px;
          right: -100px;
          width: 600px;
          height: 600px;
          background: radial-gradient(
            circle,
            rgba(245, 197, 24, 0.06) 0%,
            transparent 70%
          );
          pointer-events: none;
        }

        .hero-inner {
          flex: 1;
          position: relative;
          z-index: 1;
          max-width: 560px;
        }

        .hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--yellow-soft);
          border: 1px solid rgba(245, 197, 24, 0.2);
          border-radius: 50px;
          padding: 0.38rem 1rem;
          font-size: 0.72rem;
          color: var(--yellow);
          font-weight: 600;
          margin-bottom: 1.8rem;
          letter-spacing: 0.3px;
        }

        .hero-tag i {
          font-size: 0.68rem;
        }

        .hero-title {
          font-family: var(--font-head);
          font-size: 3.2rem;
          font-weight: 900;
          color: var(--white);
          line-height: 1.12;
          letter-spacing: -1.5px;
          margin-bottom: 1.4rem;
        }

        .hero-title-accent {
          font-style: normal;
          color: var(--yellow);
          text-shadow: 0 0 40px rgba(245, 197, 24, 0.35);
        }

        .hero-desc {
          font-size: 0.96rem;
          color: var(--grey-1);
          line-height: 1.85;
          margin-bottom: 2rem;
          max-width: 480px;
        }

        .hero-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.55rem;
          margin-bottom: 2.5rem;
        }

        .chip {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          color: var(--grey-1);
          font-size: 0.74rem;
          font-weight: 500;
          padding: 0.38rem 0.9rem;
          border-radius: 50px;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          transition: var(--transition);
        }

        .chip:hover {
          border-color: var(--yellow);
          color: var(--yellow);
        }

        .chip i {
          font-size: 0.68rem;
        }

        .hero-actions {
          display: flex;
          gap: 0.9rem;
          flex-wrap: wrap;
          align-items: center;
        }

        .btn-primary {
          background: var(--yellow);
          color: #000;
          font-weight: 800;
          font-size: 0.85rem;
          padding: 0.78rem 1.7rem;
          border-radius: var(--radius-sm);
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: var(--transition);
          letter-spacing: 0.2px;
          box-shadow: 0 4px 20px rgba(245, 197, 24, 0.25);
        }

        .btn-primary:hover {
          background: #fff;
          color: #000;
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(245, 197, 24, 0.35);
        }

        .btn-secondary {
          background: transparent;
          color: var(--grey-1);
          font-weight: 600;
          font-size: 0.85rem;
          padding: 0.78rem 1.5rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-light);
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: var(--transition);
        }

        .btn-secondary:hover {
          border-color: var(--yellow);
          color: var(--yellow);
        }

        .hero-side {
          flex-shrink: 0;
          position: relative;
          width: 340px;
          height: 340px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
        }

        .hero-circle-wrap {
          position: relative;
          width: 170px;
          height: 170px;
        }

        .hero-circle {
          width: 170px;
          height: 170px;
          border-radius: 50%;
          background: var(--bg-card);
          border: 2px solid var(--border-light);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 4rem;
          color: var(--yellow);
          position: relative;
          z-index: 1;
          box-shadow: 0 0 60px rgba(245, 197, 24, 0.12);
        }

        .hero-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid var(--border);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: ringPulse2 4s ease-in-out infinite;
        }

        .hero-ring.r1 {
          width: 210px;
          height: 210px;
          animation-delay: 0s;
          border-color: rgba(245, 197, 24, 0.15);
        }

        .hero-ring.r2 {
          width: 265px;
          height: 265px;
          animation-delay: 0.8s;
          border-color: var(--border);
        }

        .hero-ring.r3 {
          width: 325px;
          height: 325px;
          animation-delay: 1.6s;
          border-color: rgba(30, 42, 58, 0.5);
        }

        @keyframes ringPulse2 {
          0%,
          100% {
            opacity: 0.4;
          }
          50% {
            opacity: 1;
          }
        }

        .hero-float-card {
          position: absolute;
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius);
          padding: 0.85rem 1.1rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.75rem;
          white-space: nowrap;
          animation: floatCard 3s ease-in-out infinite;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
        }

        .hero-float-card i {
          font-size: 1.1rem;
          color: var(--yellow);
        }

        .hero-float-card strong {
          display: block;
          font-family: var(--font-head);
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--white);
          line-height: 1;
          margin-bottom: 0.1rem;
        }

        .hero-float-card span {
          color: var(--grey-1);
          font-size: 0.66rem;
        }

        .fc1 {
          top: -10%;
          right: -35px;
          animation-delay: 0s;
        }

        .fc2 {
          bottom: -10%;
          left: -40px;
          animation-delay: 1s;
        }

        .fc3 {
          bottom: 5%;
          right: -50px;
          animation-delay: 2s;
        }

        @keyframes floatCard {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @media (max-width: 968px) {
          .hero-section {
            flex-direction: column;
            padding: 3rem 2rem;
          }

          .hero-inner {
            max-width: 100%;
          }

          .hero-title {
            font-size: 2.4rem;
          }

          .hero-side {
            width: 280px;
            height: 280px;
          }
        }
      `}</style>
    </section>
  );
}
