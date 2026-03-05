'use client';

import { useState, useEffect } from 'react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile Toggle */}
      <button
        className="mobile-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle sidebar"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Overlay */}
      <div
        className={`sidebar-overlay ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        {/* Brand */}
        <div className="sidebar-brand">
          <div className="brand-initials">CM</div>
        </div>

        {/* Profile */}
        <div className="sidebar-profile">
          <div className="profile-avatar">
            <div className="avatar-inner">
              <i className="fas fa-user-tie"></i>
            </div>
            <div className="avatar-ring"></div>
          </div>
          <h1 className="sidebar-name">Chandra Mohan</h1>
          <p className="sidebar-alias">(Chandru)</p>
          <div className="sidebar-role">
            <span>Export Sourcing Partner</span>
          </div>
          <div className="sidebar-location">
            <i className="fas fa-map-marker-alt"></i>
            <span>Erode, Tamil Nadu, India</span>
          </div>
        </div>

        <div className="sidebar-divider"></div>

        {/* Quick Info */}
        <div className="sidebar-info">
          <div className="info-item">
            <i className="fas fa-phone-alt"></i>
            <div>
              <span className="info-label">Phone</span>
              <a href="tel:+916369431485" className="info-value">
                +91 63694 31485
              </a>
            </div>
          </div>
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <div>
              <span className="info-label">Email</span>
              <a href="mailto:chandruselvam1012@gmail.com" className="info-value">
                chandruselvam1012@gmail.com
              </a>
            </div>
          </div>
          <div className="info-item">
            <i className="fas fa-id-badge"></i>
            <div>
              <span className="info-label">IEC Code</span>
              <span className="info-value">IEC0325CM4812</span>
            </div>
          </div>
          <div className="info-item">
            <i className="fas fa-building"></i>
            <div>
              <span className="info-label">Business</span>
              <span className="info-value">CM Trading & Exports</span>
            </div>
          </div>
        </div>

        <div className="sidebar-divider"></div>

        {/* CTA Buttons */}
        <div className="sidebar-social">
          <a
            href="https://wa.me/916369431485"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn whatsapp-btn"
          >
            <i className="fab fa-whatsapp"></i>
            <span>WhatsApp Me</span>
          </a>
          <a
            href="mailto:chandruselvam1012@gmail.com"
            className="social-btn email-btn"
          >
            <i className="fas fa-envelope"></i>
            <span>Send Email</span>
          </a>
        </div>

        <div className="sidebar-footer">
          <p>&copy; 2026 CM Trading & Exports</p>
        </div>
      </aside>

      <style jsx>{`
        .mobile-toggle {
          display: none;
          position: fixed;
          top: 1.5rem;
          left: 1.5rem;
          z-index: 150;
          width: 40px;
          height: 40px;
          background: var(--yellow);
          border: none;
          border-radius: 8px;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
          cursor: pointer;
        }

        .mobile-toggle span {
          width: 20px;
          height: 2px;
          background: #000;
          transition: var(--transition);
        }

        .sidebar-overlay {
          display: none;
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.7);
          z-index: 99;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .sidebar-overlay.open {
          opacity: 1;
        }

        .sidebar {
          width: var(--sidebar-w);
          min-width: var(--sidebar-w);
          background: var(--sidebar-bg);
          border-right: 1px solid var(--border);
          position: fixed;
          top: 0;
          left: 0;
          height: 100vh;
          overflow-y: auto;
          overflow-x: hidden;
          display: flex;
          flex-direction: column;
          z-index: 100;
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .sidebar::-webkit-scrollbar {
          width: 2px;
        }
        .sidebar::-webkit-scrollbar-thumb {
          background: var(--border);
        }

        .sidebar-brand {
          padding: 1.8rem 1.8rem 1rem;
        }

        .brand-initials {
          width: 42px;
          height: 42px;
          background: var(--yellow);
          color: #000;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-head);
          font-weight: 900;
          font-size: 1rem;
          letter-spacing: -0.5px;
        }

        .sidebar-profile {
          padding: 0.5rem 1.8rem 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .profile-avatar {
          position: relative;
          width: 94px;
          height: 94px;
          margin-bottom: 1rem;
        }

        .avatar-inner {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: var(--bg-card);
          border: 2px solid var(--border-light);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.4rem;
          color: var(--grey-2);
          position: relative;
          z-index: 1;
        }

        .avatar-ring {
          position: absolute;
          inset: -5px;
          border-radius: 50%;
          border: 2px solid var(--yellow);
          opacity: 0.5;
          animation: ringPulse 3s ease-in-out infinite;
        }

        @keyframes ringPulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.06);
            opacity: 0.9;
          }
        }

        .sidebar-name {
          font-family: var(--font-head);
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--white);
          letter-spacing: -0.2px;
          margin-bottom: 0.15rem;
        }

        .sidebar-alias {
          font-size: 0.72rem;
          color: var(--grey-2);
          margin-bottom: 0.7rem;
        }

        .sidebar-role {
          margin-bottom: 0.75rem;
        }

        .sidebar-role span {
          background: var(--yellow-soft);
          border: 1px solid rgba(245, 197, 24, 0.25);
          color: var(--yellow);
          font-size: 0.66rem;
          font-weight: 600;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          padding: 0.28rem 0.75rem;
          border-radius: 50px;
        }

        .sidebar-location {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.72rem;
          color: var(--grey-1);
        }

        .sidebar-location i {
          font-size: 0.62rem;
          color: var(--yellow);
        }

        .sidebar-divider {
          height: 1px;
          background: var(--border);
          margin: 0 1.5rem;
        }

        .sidebar-info {
          padding: 1.1rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .info-item {
          display: flex;
          align-items: flex-start;
          gap: 0.7rem;
        }

        .info-item > i {
          font-size: 0.75rem;
          color: var(--yellow);
          margin-top: 3px;
          width: 14px;
          text-align: center;
          flex-shrink: 0;
        }

        .info-item > div {
          display: flex;
          flex-direction: column;
          gap: 0.05rem;
          min-width: 0;
        }

        .info-label {
          font-size: 0.6rem;
          text-transform: uppercase;
          letter-spacing: 0.9px;
          color: var(--grey-2);
          font-weight: 600;
        }

        .info-value {
          font-size: 0.76rem;
          color: var(--grey-1);
          word-break: break-all;
        }

        a.info-value:hover {
          color: var(--yellow);
        }

        .sidebar-social {
          padding: 1.1rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.62rem 1rem;
          border-radius: var(--radius-sm);
          font-size: 0.78rem;
          font-weight: 700;
          transition: var(--transition);
          letter-spacing: 0.2px;
        }

        .whatsapp-btn {
          background: var(--yellow);
          color: #000;
          border: none;
        }

        .whatsapp-btn:hover {
          background: #25d366;
          color: #fff;
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.3);
          transform: translateY(-2px);
        }

        .email-btn {
          background: transparent;
          color: var(--grey-1);
          border: 1px solid var(--border-light);
        }

        .email-btn:hover {
          border-color: var(--yellow);
          color: var(--yellow);
        }

        .sidebar-footer {
          padding: 1rem 1.5rem;
          margin-top: auto;
        }

        .sidebar-footer p {
          font-size: 0.62rem;
          color: var(--grey-2);
        }

        @media (max-width: 768px) {
          .mobile-toggle {
            display: flex;
          }

          .sidebar-overlay {
            display: block;
          }

          .sidebar {
            transform: translateX(-100%);
          }

          .sidebar.open {
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
