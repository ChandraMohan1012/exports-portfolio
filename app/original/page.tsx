'use client';

import { useEffect,  useState } from 'react';
import Sidebar from '@/components/Sidebar';
import TopNav from '@/components/original/TopNav';
import Hero from '@/components/original/Hero';
import Link from 'next/link';

export default function OriginalHome() {
  const [statsAnimated, setStatsAnimated] = useState(false);

  useEffect(() => {
    // Reveal animation observer
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), index * 55);
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: '0px 0px -35px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

    // Stats counter animation
    const statsSection = document.getElementById('stats');
    if (statsSection) {
      const statsObserver = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !statsAnimated) {
            setStatsAnimated(true);
            const counters = document.querySelectorAll('.stat-number');
            counters.forEach((counter) => {
              const target = parseInt(counter.getAttribute('data-target') || '0');
              animateCounter(counter as HTMLElement, target);
            });
            statsObserver.disconnect();
          }
        },
        { threshold: 0.3 }
      );
      statsObserver.observe(statsSection);
    }

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (href && href !== '#') {
          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    });

    return () => revealObserver.disconnect();
  }, [statsAnimated]);

  const animateCounter = (el: HTMLElement, target: number) => {
    let startTime: number | null = null;
    const duration = 2000;
    const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      el.textContent = Math.floor(easeOutQuart(progress) * target).toString();
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = Math.floor(target).toString();
    };
    requestAnimationFrame(step);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      
      <main className="main-content">
        <TopNav />
        <Hero />
        
        {/* STATS SECTION */}
        <section id="stats" className="stats-section content-section">
          <div className="stats-grid">
            <div className="stat-item reveal">
              <div className="stat-val">
                <span className="stat-number" data-target="30">0</span>
                <span className="stat-suffix">+</span>
              </div>
              <p className="stat-label">Verified Suppliers</p>
            </div>
            <div className="stat-item reveal">
              <div className="stat-val">
                <span className="stat-number" data-target="15">0</span>
                <span className="stat-suffix">+</span>
              </div>
              <p className="stat-label">Buyers Served</p>
            </div>
            <div className="stat-item reveal">
              <div className="stat-val">
                <span className="stat-number" data-target="10">0</span>
                <span className="stat-suffix">+</span>
              </div>
              <p className="stat-label">Countries Reached</p>
            </div>
            <div className="stat-item reveal">
              <div className="stat-val">
                <span className="stat-number" data-target="100">0</span>
                <span className="stat-suffix">%</span>
              </div>
              <p className="stat-label">Order Fulfillment</p>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="content-section about-section">
          <div className="section-label-row reveal">
            <div className="section-label-line"></div>
            <span className="section-label-text">WHO I AM</span>
          </div>
          <h2 className="content-title reveal">About Me</h2>
          <div className="about-grid">
            <div className="about-text-col">
              <p className="about-lead reveal">
                Based in <strong>Erode, Tamil Nadu, India</strong>, I operate as an
                independent export sourcing partner specializing in agricultural commodities
                and industrial goods. I bridge the gap between global buyers and verified
                Indian suppliers — providing sourcing expertise, quality coordination, and
                end-to-end procurement support.
              </p>
              <p className="about-body reveal">
                My work is driven by a commitment to{' '}
                <strong>transparency, efficiency, and long-term partnerships</strong> —
                ensuring buyers receive dependable service and consistent product quality.
              </p>
              <div className="about-tags reveal">
                <span>Sourcing</span>
                <span>Quality Control</span>
                <span>Procurement</span>
                <span>Export Coordination</span>
                <span>Supplier Vetting</span>
                <span>Logistics Support</span>
              </div>
            </div>
            <div className="about-cards-col">
              <div className="about-card reveal">
                <div className="about-card-icon">
                  <i className="fas fa-certificate"></i>
                </div>
                <h4>IEC Registered</h4>
                <p>
                  IEC Code: <strong>IEC0325CM4812</strong>
                </p>
              </div>
              <div className="about-card reveal">
                <div className="about-card-icon">
                  <i className="fas fa-building"></i>
                </div>
                <h4>Business Entity</h4>
                <p>
                  <strong>CM Trading & Exports</strong>
                </p>
                <small>GST: 33AABCC1234M1ZX</small>
              </div>
              <div className="about-card reveal">
                <div className="about-card-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <h4>Experience</h4>
                <p>
                  <strong>6 Months</strong> — Export Sourcing
                </p>
              </div>
              <div className="about-card reveal">
                <div className="about-card-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <h4>Base</h4>
                <p>
                  <strong>Erode, Tamil Nadu</strong>
                </p>
                <small>India's Turmeric Hub</small>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCTS SECTION */}
        <section id="products" className="content-section products-section">
          <div className="section-label-row reveal">
            <div className="section-label-line"></div>
            <span className="section-label-text">WHAT I EXPORT</span>
          </div>
          <h2 className="content-title reveal">Products I Can Source</h2>
          <p className="content-subtitle reveal">
            Premium quality from verified manufacturers — direct from production regions
          </p>

          <div className="products-row">
            <Link href="/turmeric" className="product-card reveal">
              <div className="product-card-head turmeric-head">
                <div className="product-card-icon-big">
                  <i className="fas fa-seedling"></i>
                </div>
                <span className="product-badge">
                  <i className="fas fa-star"></i> Featured
                </span>
              </div>
              <div className="product-card-body">
                <h3>Turmeric</h3>
                <p className="product-origin">
                  <i className="fas fa-map-pin"></i> Erode Origin — India's Premier Hub
                </p>
                <ul className="product-list">
                  <li>
                    <i className="fas fa-check"></i> Polished turmeric fingers
                  </li>
                  <li>
                    <i className="fas fa-check"></i> Dried turmeric
                  </li>
                  <li>
                    <i className="fas fa-check"></i> Turmeric powder
                  </li>
                  <li>
                    <i className="fas fa-check"></i> High curcumin varieties
                  </li>
                </ul>
                <div className="product-view-details">
                  <i className="fas fa-arrow-right"></i> View Details & Images
                </div>
              </div>
            </Link>

            <Link href="/spices" className="product-card reveal">
              <div className="product-card-head spices-head">
                <div className="product-card-icon-big">
                  <i className="fas fa-pepper-hot"></i>
                </div>
              </div>
              <div className="product-card-body">
                <h3>Indian Spices</h3>
                <p className="product-origin">
                  <i className="fas fa-users"></i> Direct from Farmers & Processors
                </p>
                <ul className="product-list">
                  <li>
                    <i className="fas fa-check"></i> Chilli
                  </li>
                  <li>
                    <i className="fas fa-check"></i> Coriander
                  </li>
                  <li>
                    <i className="fas fa-check"></i> Black Pepper
                  </li>
                  <li>
                    <i className="fas fa-check"></i> Whole & powdered spices
                  </li>
                </ul>
                <div className="product-view-details">
                  <i className="fas fa-arrow-right"></i> View Details & Images
                </div>
              </div>
            </Link>

            <Link href="/plastic-storage" className="product-card reveal">
              <div className="product-card-head industrial-head">
                <div className="product-card-icon-big">
                  <i className="fas fa-cube"></i>
                </div>
              </div>
              <div className="product-card-body">
                <h3>Plastic Storage Solutions</h3>
                <p className="product-origin">
                  <i className="fas fa-certificate"></i> Verified Manufacturers
                </p>
                <ul className="product-list">
                  <li>
                    <i className="fas fa-check"></i> Plastic water storage tanks
                  </li>
                  <li>
                    <i className="fas fa-check"></i> Industrial plastic containers
                  </li>
                  <li>
                    <i className="fas fa-check"></i> Customized capacity tanks
                  </li>
                </ul>
                <div className="product-view-details">
                  <i className="fas fa-arrow-right"></i> View Details & Images
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="main-footer">
          <div className="footer-inner">
            <p className="footer-name">
              Chandra Mohan <span>(Chandru)</span>
            </p>
            <p className="footer-role">
              Independent Export Sourcing Partner — CM Trading & Exports, Erode, India
            </p>
            <p className="footer-copy">
              © 2026 Chandra Mohan (Chandru) — CM Trading & Exports. All rights reserved.
            </p>
          </div>
        </footer>
      </main>

      <style jsx global>{`
        .main-content {
          margin-left: var(--sidebar-w);
          flex: 1;
          min-height: 100vh;
        }

        .content-section {
          padding: 5rem 4.5rem;
          border-bottom: 1px solid var(--border);
        }

        .section-label-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.75rem;
        }

        .section-label-line {
          width: 36px;
          height: 3px;
          background: var(--yellow);
          border-radius: 2px;
          flex-shrink: 0;
        }

        .section-label-text {
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--yellow);
        }

        .content-title {
          font-family: var(--font-head);
          font-size: 2.6rem;
          font-weight: 800;
          color: var(--white);
          letter-spacing: -0.5px;
          line-height: 1.1;
          margin-bottom: 0.5rem;
        }

        .content-subtitle {
          font-size: 0.92rem;
          color: var(--grey-1);
          margin-bottom: 2.5rem;
          line-height: 1.7;
        }

        .content-subtitle strong {
          color: var(--yellow);
        }

        /* Stats Section */
        .stats-section {
          padding: 3rem 4.5rem;
          background: var(--bg-card);
          border-bottom: 1px solid var(--border);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
        }

        .stat-item {
          padding: 2rem 1.5rem;
          text-align: center;
          border-right: 1px solid var(--border);
          position: relative;
        }

        .stat-item:last-child {
          border-right: none;
        }

        .stat-val {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          margin-bottom: 0.5rem;
        }

        .stat-number {
          font-family: var(--font-head);
          font-size: 3.4rem;
          font-weight: 900;
          color: var(--yellow);
          letter-spacing: -3px;
          line-height: 1;
        }

        .stat-suffix {
          font-family: var(--font-head);
          font-size: 2rem;
          font-weight: 700;
          color: var(--yellow);
          margin-top: 0.4rem;
        }

        .stat-label {
          font-size: 0.72rem;
          color: var(--grey-2);
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 600;
        }

        /* About Section */
        .about-section {
          background: var(--bg);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 370px;
          gap: 3.5rem;
          margin-top: 2.5rem;
          align-items: start;
        }

        .about-lead {
          font-size: 1.05rem;
          line-height: 1.9;
          color: #c8d4e0;
          margin-bottom: 1.2rem;
        }

        .about-lead strong,
        .about-body strong {
          color: var(--yellow);
        }

        .about-body {
          font-size: 0.93rem;
          line-height: 1.9;
          color: var(--grey-1);
          margin-bottom: 1.8rem;
        }

        .about-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .about-tags span {
          background: var(--yellow-soft);
          border: 1px solid rgba(245, 197, 24, 0.2);
          color: var(--yellow);
          font-size: 0.72rem;
          font-weight: 600;
          padding: 0.32rem 0.85rem;
          border-radius: 50px;
          transition: var(--transition);
        }

        .about-tags span:hover {
          background: var(--yellow);
          color: #000;
        }

        .about-cards-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
        }

        .about-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 1.2rem;
          transition: var(--transition);
        }

        .about-card:hover {
          border-color: var(--yellow);
          box-shadow: 0 0 24px var(--yellow-glow);
          transform: translateY(-3px);
        }

        .about-card-icon {
          font-size: 1.25rem;
          color: var(--yellow);
          margin-bottom: 0.7rem;
        }

        .about-card h4 {
          font-family: var(--font-head);
          font-size: 0.73rem;
          font-weight: 700;
          color: var(--white);
          margin-bottom: 0.4rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .about-card p {
          font-size: 0.76rem;
          color: var(--grey-1);
          line-height: 1.5;
        }

        .about-card p strong {
          color: var(--white);
        }

        .about-card small {
          font-size: 0.67rem;
          color: var(--grey-2);
          display: block;
          margin-top: 0.2rem;
        }

        /* Products Section */
        .products-section {
          background: var(--bg-card);
        }

        .products-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .product-card {
          background: var(--bg-card-2);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          overflow: hidden;
          transition: var(--transition);
          text-decoration: none;
          color: inherit;
          cursor: pointer;
          display: block;
        }

        .product-card:hover {
          border-color: var(--yellow);
          box-shadow: 0 8px 32px var(--yellow-glow);
          transform: translateY(-4px);
        }

        .product-card-head {
          position: relative;
          height: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-size: cover;
          background-position: center;
          overflow: hidden;
        }

        .product-card-head::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.7) 0%,
            rgba(0, 0, 0, 0.5) 100%
          );
          z-index: 0;
        }

        .turmeric-head {
          background-image: url('/images/turmeric.webp');
        }

        .spices-head {
          background-image: url('https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=800&h=400&fit=crop');
        }

        .industrial-head {
          background-image: url('/images/tanks/tank-3.jpeg');
        }

        .product-card-icon-big {
          font-size: 2.8rem;
          color: var(--yellow);
          opacity: 1;
          z-index: 1;
        }

        .product-badge {
          position: absolute;
          top: 0.75rem;
          right: 0.75rem;
          background: var(--yellow);
          color: #000;
          font-size: 0.62rem;
          font-weight: 800;
          padding: 0.25rem 0.65rem;
          border-radius: 50px;
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .product-card-body {
          padding: 1.3rem 1.4rem;
        }

        .product-card-body h3 {
          font-family: var(--font-head);
          font-size: 1rem;
          font-weight: 700;
          color: var(--white);
          margin-bottom: 0.45rem;
        }

        .product-origin {
          font-size: 0.71rem;
          color: var(--grey-1);
          margin-bottom: 0.9rem;
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .product-origin i {
          color: var(--yellow);
          font-size: 0.62rem;
        }

        .product-list {
          display: flex;
          flex-direction: column;
          gap: 0.42rem;
        }

        .product-list li {
          font-size: 0.77rem;
          color: var(--white);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .product-list li i {
          color: var(--yellow);
          font-size: 0.62rem;
        }

        .product-view-details {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border-light);
          color: var(--yellow);
          font-weight: 600;
          font-size: 0.9rem;
        }

        /* Footer */
        .main-footer {
          padding: 3rem 4.5rem;
          background: var(--bg-card);
          text-align: center;
        }

        .footer-inner {
          max-width: 800px;
          margin: 0 auto;
        }

        .footer-name {
          font-family: var(--font-head);
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--white);
          margin-bottom: 0.5rem;
        }

        .footer-name span {
          color: var(--grey-2);
          font-weight: 400;
        }

        .footer-role {
          font-size: 0.9rem;
          color: var(--grey-1);
          margin-bottom: 1.5rem;
        }

        .footer-copy {
          font-size: 0.75rem;
          color: var(--grey-2);
        }

        @media (max-width: 768px) {
          .main-content {
            margin-left: 0;
          }

          .content-section {
            padding: 3rem 2rem;
          }

          .about-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .products-row {
            grid-template-columns: 1fr;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  );
}
