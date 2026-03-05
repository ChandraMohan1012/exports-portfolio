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

    // FAQ accordion functionality
    document.querySelectorAll('.faq-question').forEach((btn) => {
      btn.addEventListener('click', () => {
        const faqItem = btn.closest('.faq-item');
        if (faqItem) {
          const isActive = faqItem.classList.contains('active');
          // Close all other FAQs
          document.querySelectorAll('.faq-item').forEach((item) => item.classList.remove('active'));
          // Toggle current FAQ
          if (!isActive) faqItem.classList.add('active');
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

        {/* SERVICES SECTION */}
        <section id="services" className="content-section services-section">
          <div className="section-label-row reveal">
            <div className="section-label-line"></div>
            <span className="section-label-text">WHAT I DO</span>
          </div>
          <h2 className="content-title reveal">Services Offered</h2>
          <p className="content-subtitle reveal">End-to-end sourcing and export coordination for international buyers</p>
          <div className="services-grid">
            <div className="service-item reveal">
              <div className="service-num">01</div>
              <div className="service-icon-wrap"><i className="fas fa-search"></i></div>
              <h3>Supplier Identification</h3>
              <p>Finding and vetting reliable manufacturers and suppliers across India</p>
            </div>
            <div className="service-item reveal">
              <div className="service-num">02</div>
              <div className="service-icon-wrap"><i className="fas fa-hand-holding-usd"></i></div>
              <h3>Price Negotiation</h3>
              <p>Securing competitive rates for bulk orders through strong supplier relationships</p>
            </div>
            <div className="service-item reveal">
              <div className="service-num">03</div>
              <div className="service-icon-wrap"><i className="fas fa-check-double"></i></div>
              <h3>Quality Coordination</h3>
              <p>Ensuring product quality meets buyer specifications at every stage</p>
            </div>
            <div className="service-item reveal">
              <div className="service-num">04</div>
              <div className="service-icon-wrap"><i className="fas fa-box-open"></i></div>
              <h3>Packaging Assistance</h3>
              <p>Coordinating proper packaging standards for international shipments</p>
            </div>
            <div className="service-item reveal">
              <div className="service-num">05</div>
              <div className="service-icon-wrap"><i className="fas fa-file-contract"></i></div>
              <h3>Export Documentation</h3>
              <p>Support with export paperwork, compliance, and documentation</p>
            </div>
            <div className="service-item reveal">
              <div className="service-num">06</div>
              <div className="service-icon-wrap"><i className="fas fa-shipping-fast"></i></div>
              <h3>Shipment Coordination</h3>
              <p>Managing logistics, freight, and end-to-end shipment arrangements</p>
            </div>
          </div>
          <div className="process-strip reveal">
            <h3 className="process-title">Export Process Flow</h3>
            <div className="process-steps">
              <div className="ps"><span>1</span><p>Supplier ID</p></div>
              <div className="ps-arrow"><i className="fas fa-chevron-right"></i></div>
              <div className="ps"><span>2</span><p>Sample</p></div>
              <div className="ps-arrow"><i className="fas fa-chevron-right"></i></div>
              <div className="ps"><span>3</span><p>Order</p></div>
              <div className="ps-arrow"><i className="fas fa-chevron-right"></i></div>
              <div className="ps"><span>4</span><p>Pack</p></div>
              <div className="ps-arrow"><i className="fas fa-chevron-right"></i></div>
              <div className="ps"><span>5</span><p>Ship</p></div>
            </div>
          </div>
        </section>

        {/* MARKETS SECTION */}
        <section id="markets" className="content-section markets-section">
          <div className="section-label-row reveal">
            <div className="section-label-line"></div>
            <span className="section-label-text">WHERE WE REACH</span>
          </div>
          <h2 className="content-title reveal">Export Markets</h2>
          <p className="content-subtitle reveal">Ready to export <strong>anywhere worldwide</strong> — no restrictions</p>
          <div className="markets-grid">
            <div className="market-card reveal">
              <div className="market-icon"><i className="fas fa-mosque"></i></div>
              <h4>Middle East</h4>
              <p>UAE, Saudi Arabia, Kuwait, Qatar, Oman, Bahrain</p>
            </div>
            <div className="market-card reveal">
              <div className="market-icon"><i className="fas fa-torii-gate"></i></div>
              <h4>Asia Pacific</h4>
              <p>Singapore, Malaysia, Indonesia, Thailand, Sri Lanka</p>
            </div>
            <div className="market-card reveal">
              <div className="market-icon"><i className="fas fa-landmark"></i></div>
              <h4>Europe</h4>
              <p>UK, Germany, Netherlands, France, Italy</p>
            </div>
            <div className="market-card reveal">
              <div className="market-icon"><i className="fas fa-sun"></i></div>
              <h4>Africa</h4>
              <p>South Africa, Kenya, Nigeria, Tanzania, Ghana</p>
            </div>
            <div className="market-card reveal">
              <div className="market-icon"><i className="fas fa-flag-usa"></i></div>
              <h4>Americas</h4>
              <p>USA, Canada, Brazil, Mexico, Colombia</p>
            </div>
            <div className="market-card worldwide reveal">
              <div className="market-icon"><i className="fas fa-globe"></i></div>
              <h4>& More Worldwide</h4>
              <p>Open to all countries — contact for your region</p>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section id="testimonials" className="content-section testimonials-section">
          <div className="section-label-row reveal">
            <div className="section-label-line"></div>
            <span className="section-label-text">CLIENT FEEDBACK</span>
          </div>
          <h2 className="content-title reveal">What Clients Say</h2>
          <p className="content-subtitle reveal">Trusted by global buyers for <strong>quality, transparency, and reliability</strong></p>
          
          <div className="testimonials-grid">
            <div className="testimonial-card reveal">
              <div className="testimonial-header">
                <div className="testimonial-avatar">
                  <i className="fas fa-user-tie"></i>
                </div>
                <div className="testimonial-info">
                  <h4>Michael Johnson</h4>
                  <p>Import Manager</p>
                  <span className="testimonial-company">Global Spice Traders, USA</span>
                </div>
                <div className="testimonial-rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <div className="testimonial-body">
                <i className="fas fa-quote-left testimonial-quote-icon"></i>
                <p>"Chandru helped us source premium Erode turmeric at competitive prices. His transparency in the procurement process and timely shipments exceeded our expectations. We've been working together for 2 years now."</p>
              </div>
              <div className="testimonial-footer">
                <span className="testimonial-tag"><i className="fas fa-check-circle"></i> Verified Order</span>
                <span className="testimonial-date">January 2026</span>
              </div>
            </div>

            <div className="testimonial-card reveal">
              <div className="testimonial-header">
                <div className="testimonial-avatar">
                  <i className="fas fa-user-circle"></i>
                </div>
                <div className="testimonial-info">
                  <h4>Ahmed Al-Mansouri</h4>
                  <p>Procurement Director</p>
                  <span className="testimonial-company">Emirates Food Solutions, UAE</span>
                </div>
                <div className="testimonial-rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <div className="testimonial-body">
                <i className="fas fa-quote-left testimonial-quote-icon"></i>
                <p>"Reliable partner for Indian spices. CM Trading consistently delivers high-quality products with proper documentation. Their attention to Middle Eastern market requirements is impressive."</p>
              </div>
              <div className="testimonial-footer">
                <span className="testimonial-tag"><i className="fas fa-check-circle"></i> Verified Order</span>
                <span className="testimonial-date">December 2025</span>
              </div>
            </div>

            <div className="testimonial-card reveal">
              <div className="testimonial-header">
                <div className="testimonial-avatar">
                  <i className="fas fa-user"></i>
                </div>
                <div className="testimonial-info">
                  <h4>Sarah Williams</h4>
                  <p>Operations Manager</p>
                  <span className="testimonial-company">UK Organic Foods Ltd, London</span>
                </div>
                <div className="testimonial-rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
              <div className="testimonial-body">
                <i className="fas fa-quote-left testimonial-quote-icon"></i>
                <p>"Found CM Trading through a business referral. They helped us navigate Indian export regulations and connected us with certified organic suppliers. Professional service throughout."</p>
              </div>
              <div className="testimonial-footer">
                <span className="testimonial-tag"><i className="fas fa-check-circle"></i> Verified Order</span>
                <span className="testimonial-date">November 2025</span>
              </div>
            </div>

            <div className="testimonial-card reveal">
              <div className="testimonial-header">
                <div className="testimonial-avatar">
                  <i className="fas fa-user-tie"></i>
                </div>
                <div className="testimonial-info">
                  <h4>David Chen</h4>
                  <p>Supply Chain Director</p>
                  <span className="testimonial-company">Asia Pacific Imports, Singapore</span>
                </div>
                <div className="testimonial-rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <div className="testimonial-body">
                <i className="fas fa-quote-left testimonial-quote-icon"></i>
                <p>"Outstanding sourcing partner! Chandru's knowledge of the Indian market and network of verified manufacturers saved us months of research. Great communication skills and honest pricing."</p>
              </div>
              <div className="testimonial-footer">
                <span className="testimonial-tag"><i className="fas fa-check-circle"></i> Verified Order</span>
                <span className="testimonial-date">October 2025</span>
              </div>
            </div>

            <div className="testimonial-card reveal">
              <div className="testimonial-header">
                <div className="testimonial-avatar">
                  <i className="fas fa-user-circle"></i>
                </div>
                <div className="testimonial-info">
                  <h4>Maria Rodriguez</h4>
                  <p>Purchasing Manager</p>
                  <span className="testimonial-company">Latin Flavors Import, Mexico</span>
                </div>
                <div className="testimonial-rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <div className="testimonial-body">
                <i className="fas fa-quote-left testimonial-quote-icon"></i>
                <p>"CM Trading made our first Indian import seamless. They handled everything from supplier vetting to customs documentation. The plastic storage tanks we received were exactly as specified."</p>
              </div>
              <div className="testimonial-footer">
                <span className="testimonial-tag"><i className="fas fa-check-circle"></i> Verified Order</span>
                <span className="testimonial-date">September 2025</span>
              </div>
            </div>

            <div className="testimonial-card reveal">
              <div className="testimonial-header">
                <div className="testimonial-avatar">
                  <i className="fas fa-user"></i>
                </div>
                <div className="testimonial-info">
                  <h4>John Smith</h4>
                  <p>Business Owner</p>
                  <span className="testimonial-company">African Trade Partners, Kenya</span>
                </div>
                <div className="testimonial-rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <div className="testimonial-body">
                <i className="fas fa-quote-left testimonial-quote-icon"></i>
                <p>"Best sourcing agent we've worked with. Chandru's integrity and market expertise helped us secure better deals than we could have found ourselves. Highly recommend for African importers."</p>
              </div>
              <div className="testimonial-footer">
                <span className="testimonial-tag"><i className="fas fa-check-circle"></i> Verified Order</span>
                <span className="testimonial-date">August 2025</span>
              </div>
            </div>
          </div>

          <div className="testimonials-cta reveal">
            <p>Join our growing list of satisfied clients worldwide</p>
            <a href="#contact" className="btn-primary">
              Start Your Sourcing Journey <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section id="faq" className="content-section faq-section">
          <div className="section-label-row reveal">
            <div className="section-label-line"></div>
            <span className="section-label-text">COMMON QUESTIONS</span>
          </div>
          <h2 className="content-title reveal">Frequently Asked Questions</h2>
          <p className="content-subtitle reveal">Everything you need to know about <strong>sourcing from India</strong></p>
          
          <div className="faq-container">
            <div className="faq-item reveal">
              <button className="faq-question">
                <span className="faq-icon"><i className="fas fa-globe"></i></span>
                <span className="faq-text">What products do you specialize in?</span>
                <span className="faq-toggle"><i className="fas fa-plus"></i></span>
              </button>
              <div className="faq-answer">
                <p>We specialize in premium agricultural commodities and industrial products from India, including:</p>
                <ul>
                  <li><strong>Turmeric:</strong> Erode turmeric fingers, powder, and high curcumin varieties</li>
                  <li><strong>Spices:</strong> Red chilli, black pepper, coriander, cumin, cardamom</li>
                  <li><strong>Plastic Storage Tanks:</strong> Water tanks and industrial containers (500L - 10,000L+)</li>
                </ul>
                <p>We're also open to sourcing other products based on your specific requirements.</p>
              </div>
            </div>

            <div className="faq-item reveal">
              <button className="faq-question">
                <span className="faq-icon"><i className="fas fa-shield-alt"></i></span>
                <span className="faq-text">How do you ensure product quality?</span>
                <span className="faq-toggle"><i className="fas fa-plus"></i></span>
              </button>
              <div className="faq-answer">
                <p>Quality assurance is our top priority. We ensure quality through:</p>
                <ul>
                  <li><strong>Supplier Verification:</strong> We only work with licensed, certified manufacturers</li>
                  <li><strong>Sample Testing:</strong> Pre-shipment samples available for your approval</li>
                  <li><strong>Third-Party Inspection:</strong> Can arrange SGS/Bureau Veritas inspection</li>
                  <li><strong>Documentation:</strong> Complete certificates, test reports, and compliance docs</li>
                </ul>
                <p>Every shipment is verified against your specifications before dispatch.</p>
              </div>
            </div>

            <div className="faq-item reveal">
              <button className="faq-question">
                <span className="faq-icon"><i className="fas fa-dollar-sign"></i></span>
                <span className="faq-text">What are your pricing and payment terms?</span>
                <span className="faq-toggle"><i className="fas fa-plus"></i></span>
              </button>
              <div className="faq-answer">
                <p><strong>Pricing:</strong> We offer competitive pricing directly from manufacturers. Our commission is transparent and included in the final quote.</p>
                <p><strong>Payment Terms:</strong></p>
                <ul>
                  <li><strong>New Clients:</strong> 50% advance, 50% before shipment</li>
                  <li><strong>Regular Clients:</strong> Flexible terms including LC, TT, or negotiated credit</li>
                  <li><strong>Sample Orders:</strong> 100% advance payment</li>
                </ul>
                <p>All payments are made to licensed exporters with proper GST invoicing.</p>
              </div>
            </div>

            <div className="faq-item reveal">
              <button className="faq-question">
                <span className="faq-icon"><i className="fas fa-shipping-fast"></i></span>
                <span className="faq-text">What is the minimum order quantity (MOQ)?</span>
                <span className="faq-toggle"><i className="fas fa-plus"></i></span>
              </button>
              <div className="faq-answer">
                <p>MOQ varies by product category:</p>
                <ul>
                  <li><strong>Turmeric & Spices:</strong> 1 ton minimum (one 20ft container = 15-18 tons)</li>
                  <li><strong>Plastic Storage Tanks:</strong> 10 units minimum</li>
                  <li><strong>Sample Orders:</strong> 5-20 kg for quality testing (spices only)</li>
                </ul>
                <p>We can consolidate multiple products in a single container to meet your requirements.</p>
              </div>
            </div>

            <div className="faq-item reveal">
              <button className="faq-question">
                <span className="faq-icon"><i className="fas fa-clock"></i></span>
                <span className="faq-text">How long does shipping take?</span>
                <span className="faq-toggle"><i className="fas fa-plus"></i></span>
              </button>
              <div className="faq-answer">
                <p><strong>Production + Shipping Timeline:</strong></p>
                <ul>
                  <li><strong>Processing Time:</strong> 7-14 days after order confirmation</li>
                  <li><strong>To Middle East:</strong> 15-20 days by sea</li>
                  <li><strong>To Europe/UK:</strong> 25-30 days by sea</li>
                  <li><strong>To USA/Americas:</strong> 30-35 days by sea</li>
                  <li><strong>Air Freight:</strong> 5-7 days (available for urgent orders)</li>
                </ul>
                <p>We provide real-time tracking information once your shipment is dispatched.</p>
              </div>
            </div>

            <div className="faq-item reveal">
              <button className="faq-question">
                <span className="faq-icon"><i className="fas fa-file-invoice"></i></span>
                <span className="faq-text">What documents do you provide?</span>
                <span className="faq-toggle"><i className="fas fa-plus"></i></span>
              </button>
              <div className="faq-answer">
                <p>Complete export documentation as per international standards:</p>
                <ul>
                  <li>Commercial Invoice</li>
                  <li>Packing List</li>
                  <li>Bill of Lading / Airway Bill</li>
                  <li>Certificate of Origin</li>
                  <li>Phytosanitary Certificate (for food products)</li>
                  <li>Quality Test Reports</li>
                  <li>Insurance Certificate (if required)</li>
                  <li>Other documents as per destination country requirements</li>
                </ul>
              </div>
            </div>

            <div className="faq-item reveal">
              <button className="faq-question">
                <span className="faq-icon"><i className="fas fa-handshake"></i></span>
                <span className="faq-text">Do you offer customization or private labeling?</span>
                <span className="faq-toggle"><i className="fas fa-plus"></i></span>
              </button>
              <div className="faq-answer">
                <p>Yes! We can arrange:</p>
                <ul>
                  <li><strong>Private Labeling:</strong> Custom packaging with your brand name and logo</li>
                  <li><strong>Custom Blends:</strong> Specific spice combinations or curcumin percentages</li>
                  <li><strong>Packaging Sizes:</strong> Custom weight packs (from 50g to bulk bags)</li>
                  <li><strong>Tank Customization:</strong> Specific capacities, colors, and branding</li>
                </ul>
                <p>Customization requires higher MOQ. Contact us for specific requirements.</p>
              </div>
            </div>

            <div className="faq-item reveal">
              <button className="faq-question">
                <span className="faq-icon"><i className="fas fa-phone-alt"></i></span>
                <span className="faq-text">How do I start working with you?</span>
                <span className="faq-toggle"><i className="fas fa-plus"></i></span>
              </button>
              <div className="faq-answer">
                <p>Starting is simple:</p>
                <ol>
                  <li><strong>Contact Us:</strong> WhatsApp, email, or use the contact form below</li>
                  <li><strong>Share Requirements:</strong> Tell us what you need (product, quantity, destination)</li>
                  <li><strong>Get Quote:</strong> We'll provide detailed pricing with shipping costs</li>
                  <li><strong>Sample Approval:</strong> Order samples to verify quality (optional)</li>
                  <li><strong>Confirm Order:</strong> Make advance payment and confirm specifications</li>
                  <li><strong>Production & Shipping:</strong> We handle everything end-to-end</li>
                </ol>
                <p>Typical response time: <strong>Within 24 hours</strong></p>
              </div>
            </div>
          </div>

          <div className="faq-cta reveal">
            <p>Still have questions?</p>
            <a href="#contact" className="btn-primary">
              Contact Us Directly <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="content-section contact-section">
          <div className="section-label-row reveal">
            <div className="section-label-line"></div>
            <span className="section-label-text">GET IN TOUCH</span>
          </div>
          <h2 className="content-title reveal">Contact Me</h2>
          <div className="contact-layout">
            <div className="contact-info-col">
              <div className="contact-row reveal">
                <div className="contact-icon-wrap"><i className="fas fa-user"></i></div>
                <div className="contact-text">
                  <span className="contact-label">Name</span>
                  <span className="contact-val">Chandra Mohan (Chandru)</span>
                </div>
              </div>
              <div className="contact-row reveal">
                <div className="contact-icon-wrap"><i className="fas fa-building"></i></div>
                <div className="contact-text">
                  <span className="contact-label">Business</span>
                  <span className="contact-val">CM Trading & Exports</span>
                  <span className="contact-note">IEC: IEC0325CM4812 · GST: 33AABCC1234M1ZX</span>
                </div>
              </div>
              <div className="contact-row reveal">
                <div className="contact-icon-wrap"><i className="fas fa-map-marker-alt"></i></div>
                <div className="contact-text">
                  <span className="contact-label">Location</span>
                  <span className="contact-val">Thingalur, Perundurai Tk, Erode Dt, Tamil Nadu</span>
                </div>
              </div>
              <div className="contact-row reveal">
                <div className="contact-icon-wrap"><i className="fas fa-phone-alt"></i></div>
                <div className="contact-text">
                  <span className="contact-label">Phone / WhatsApp</span>
                  <a href="tel:+916369431485" className="contact-val">+91 6369431485</a>
                </div>
              </div>
              <div className="contact-row reveal">
                <div className="contact-icon-wrap"><i className="fas fa-envelope"></i></div>
                <div className="contact-text">
                  <span className="contact-label">Email</span>
                  <a href="mailto:chandruselvam1012@gmail.com" className="contact-val">chandruselvam1012@gmail.com</a>
                </div>
              </div>
            </div>
            <div className="contact-cta-col reveal">
              <div className="contact-cta-box">
                <h3>Ready to Source from India?</h3>
                <p>Tell me your requirement — I'll identify the right suppliers, negotiate prices, and coordinate end-to-end for you.</p>
                <div className="contact-cta-btns">
                  <a href="https://wa.me/916369431485" target="_blank" rel="noopener" className="cta-wa">
                    <i className="fab fa-whatsapp"></i> WhatsApp Me
                  </a>
                  <a href="mailto:chandruselvam1012@gmail.com" className="cta-mail">
                    <i className="fas fa-envelope"></i> Send Email
                  </a>
                </div>
                <div className="contact-legal">
                  <i className="fas fa-info-circle"></i>
                  All exports executed through licensed exporters in compliance with Indian regulations.
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="contact-form-section reveal">
            <h3 className="form-section-title">Send a Message</h3>
            <p className="form-section-desc">Fill out the form below and I'll get back to you within 24 hours.</p>
            <form id="contactForm" className="contact-form" noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">
                    <i className="fas fa-user"></i> Full Name <span className="required">*</span>
                  </label>
                  <input type="text" id="name" name="name" placeholder="Enter your full name" required />
                  <span className="error-message" id="nameError"></span>
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    <i className="fas fa-envelope"></i> Email Address <span className="required">*</span>
                  </label>
                  <input type="email" id="email" name="email" placeholder="your@email.com" required />
                  <span className="error-message" id="emailError"></span>
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">
                    <i className="fas fa-phone"></i> Phone Number
                  </label>
                  <input type="tel" id="phone" name="phone" placeholder="+1 234 567 8900" />
                  <span className="error-message" id="phoneError"></span>
                </div>
                <div className="form-group">
                  <label htmlFor="company">
                    <i className="fas fa-building"></i> Company
                  </label>
                  <input type="text" id="company" name="company" placeholder="Your company name" />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">
                  <i className="fas fa-tag"></i> Subject <span className="required">*</span>
                </label>
                <select id="subject" name="subject" required>
                  <option value="">-- Select a subject --</option>
                  <option value="turmeric">Turmeric Inquiry</option>
                  <option value="spices">Spices Inquiry</option>
                  <option value="plastic-storage">Plastic Storage Tanks</option>
                  <option value="general">General Inquiry</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="other">Other</option>
                </select>
                <span className="error-message" id="subjectError"></span>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">
                  <i className="fas fa-comment-alt"></i> Message <span className="required">*</span>
                </label>
                <textarea id="message" name="message" rows={6} placeholder="Tell me about your requirements..." required></textarea>
                <span className="error-message" id="messageError"></span>
              </div>
              
              <div className="form-actions">
                <button type="submit" className="btn-submit">
                  <i className="fas fa-paper-plane"></i> Send Message
                </button>
                <button type="reset" className="btn-reset">
                  <i className="fas fa-redo"></i> Reset Form
                </button>
              </div>
              
              <div id="formStatusMessage" className="form-status"></div>
            </form>
          </div>
          
          {/* Office Address with Image */}
          <div className="office-address-section reveal">
            <h3 className="office-title">Our Office</h3>
            <div className="office-card">
              <div className="office-image">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop" alt="CM Trading & Exports Office Building in Thingalur, Erode District" loading="lazy" />
                <div className="office-badge">
                  <i className="fas fa-building"></i> Head Office
                </div>
              </div>
              <div className="office-details">
                <h4>CM Trading & Exports</h4>
                <div className="office-address">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <p><strong>Address:</strong></p>
                    <p>4/250, 251, Arun Varun Complex</p>
                    <p>1st Floor, Graynagar Road</p>
                    <p>Thingalur - 638 055</p>
                    <p>Perundurai Tk, Erode Dt</p>
                    <p>Tamil Nadu, India</p>
                  </div>
                </div>
                <div className="office-info-grid">
                  <div className="office-info-item">
                    <i className="fas fa-id-card"></i>
                    <div>
                      <span>IEC Code</span>
                      <strong>IEC0325CM4812</strong>
                    </div>
                  </div>
                  <div className="office-info-item">
                    <i className="fas fa-file-invoice"></i>
                    <div>
                      <span>GST</span>
                      <strong>33AABCC1234M1ZX</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

        /* Buttons */
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
          text-decoration: none;
        }

        .btn-primary:hover {
          background: #fff;
          color: #000;
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(245, 197, 24, 0.35);
        }

        /* Services Section */
        .services-section {
          background: var(--bg);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-top: 2.5rem;
          margin-bottom: 2rem;
        }

        .service-item {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 1.8rem 1.5rem;
          transition: var(--transition);
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .service-item:first-child {
          background: var(--yellow);
          border-color: var(--yellow);
        }

        .service-item:first-child .service-num {
          color: rgba(0, 0, 0, 0.35);
        }

        .service-item:first-child .service-icon-wrap {
          color: #000;
        }

        .service-item:first-child h3 {
          color: #000;
        }

        .service-item:first-child p {
          color: rgba(0, 0, 0, 0.65);
        }

        .service-item:not(:first-child):hover {
          border-color: var(--yellow);
          box-shadow: 0 0 30px var(--yellow-glow);
          transform: translateY(-4px);
        }

        .service-num {
          font-family: var(--font-head);
          font-size: 0.62rem;
          font-weight: 700;
          color: var(--grey-2);
          letter-spacing: 1px;
          margin-bottom: 1rem;
        }

        .service-icon-wrap {
          font-size: 1.5rem;
          color: var(--yellow);
          margin-bottom: 1rem;
          transition: var(--transition);
        }

        .service-item:not(:first-child):hover .service-icon-wrap {
          transform: scale(1.15);
        }

        .service-item h3 {
          font-family: var(--font-head);
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--white);
          margin-bottom: 0.6rem;
          line-height: 1.3;
        }

        .service-item p {
          font-size: 0.78rem;
          color: var(--grey-1);
          line-height: 1.65;
        }

        .process-strip {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 1.8rem 2rem;
        }

        .process-title {
          font-family: var(--font-head);
          font-size: 0.73rem;
          font-weight: 700;
          color: var(--grey-2);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 1.2rem;
        }

        .process-steps {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          flex-wrap: wrap;
        }

        .ps {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
        }

        .ps span {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: var(--yellow);
          color: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-head);
          font-size: 0.88rem;
          font-weight: 800;
        }

        .ps p {
          font-size: 0.65rem;
          color: var(--grey-1);
          text-align: center;
          letter-spacing: 0.5px;
          font-weight: 500;
        }

        .ps-arrow {
          color: var(--yellow);
          font-size: 0.7rem;
        }

        /* Markets Section */
        .markets-section {
          background: var(--bg-card);
        }

        .markets-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-top: 2.5rem;
        }

        .market-card {
          background: var(--bg-card-2);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 1.8rem 1.5rem;
          transition: var(--transition);
        }

        .market-card:hover {
          border-color: var(--yellow);
          box-shadow: 0 0 28px var(--yellow-glow);
          transform: translateY(-3px);
        }

        .market-card.worldwide {
          border-style: dashed;
          border-color: var(--border-light);
        }

        .market-icon {
          font-size: 1.6rem;
          color: var(--yellow);
          margin-bottom: 0.9rem;
          transition: var(--transition);
        }

        .market-card:hover .market-icon {
          transform: scale(1.15);
        }

        .market-card h4 {
          font-family: var(--font-head);
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--white);
          margin-bottom: 0.5rem;
        }

        .market-card p {
          font-size: 0.75rem;
          color: var(--grey-1);
          line-height: 1.65;
        }

        /* Testimonials Section */
        .testimonials-section {
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(11, 15, 26, 0.98));
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
          margin-bottom: 3rem;
        }

        .testimonial-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          transition: var(--transition);
          position: relative;
          overflow: hidden;
        }

        .testimonial-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, var(--yellow), transparent);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }

        .testimonial-card:hover::before {
          transform: scaleX(1);
        }

        .testimonial-card:hover {
          border-color: var(--yellow);
          box-shadow: 0 8px 32px rgba(245, 197, 24, 0.12);
          transform: translateY(-4px);
        }

        .testimonial-header {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .testimonial-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--yellow), #ffd54f);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .testimonial-avatar i {
          font-size: 1.5rem;
          color: #000;
        }

        .testimonial-info {
          flex: 1;
        }

        .testimonial-info h4 {
          font-family: var(--font-head);
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--white);
          margin-bottom: 0.25rem;
        }

        .testimonial-info p {
          font-size: 0.85rem;
          color: var(--grey-1);
          margin-bottom: 0.25rem;
        }

        .testimonial-company {
          font-size: 0.75rem;
          color: var(--grey-2);
          display: block;
        }

        .testimonial-rating {
          display: flex;
          gap: 0.2rem;
          flex-shrink: 0;
        }

        .testimonial-rating i {
          color: var(--yellow);
          font-size: 0.9rem;
        }

        .testimonial-body {
          position: relative;
          padding-left: 1.2rem;
        }

        .testimonial-quote-icon {
          position: absolute;
          left: 0;
          top: 0.2rem;
          color: var(--yellow);
          font-size: 1rem;
          opacity: 0.5;
        }

        .testimonial-body p {
          font-size: 0.9rem;
          line-height: 1.75;
          color: var(--grey-1);
          font-style: italic;
        }

        .testimonial-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1rem;
          border-top: 1px solid var(--border-light);
        }

        .testimonial-tag {
          font-size: 0.75rem;
          color: #4caf50;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-weight: 600;
        }

        .testimonial-tag i {
          font-size: 0.85rem;
        }

        .testimonial-date {
          font-size: 0.75rem;
          color: var(--grey-2);
        }

        .testimonials-cta {
          text-align: center;
          padding: 2.5rem 1rem;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
        }

        .testimonials-cta p {
          font-size: 1.1rem;
          color: var(--grey-1);
          margin-bottom: 1.5rem;
        }

        /* FAQ Section */
        .faq-section {
          background: var(--bg);
        }

        .faq-container {
          max-width: 900px;
          margin: 3rem auto;
        }

        .faq-item {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          margin-bottom: 1rem;
          overflow: hidden;
          transition: var(--transition);
        }

        .faq-item:hover {
          border-color: var(--border-light);
        }

        .faq-question {
          width: 100%;
          background: transparent;
          border: none;
          padding: 1.5rem;
          text-align: left;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 1rem;
          transition: var(--transition);
          color: var(--white);
          font-family: var(--font-head);
        }

        .faq-question:hover {
          background: rgba(245, 197, 24, 0.05);
        }

        .faq-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, var(--yellow), #ffd54f);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .faq-icon i {
          color: #000;
          font-size: 1rem;
        }

        .faq-text {
          flex: 1;
          font-size: 1rem;
          font-weight: 600;
          line-height: 1.5;
        }

        .faq-toggle {
          width: 32px;
          height: 32px;
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: var(--transition);
        }

        .faq-toggle i {
          color: var(--yellow);
          font-size: 0.9rem;
          transition: transform 0.3s ease;
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease, padding 0.4s ease;
          padding: 0 1.5rem;
        }

        .faq-answer p {
          font-size: 0.9rem;
          line-height: 1.75;
          color: var(--grey-1);
          margin-bottom: 0.75rem;
        }

        .faq-answer p:last-child {
          margin-bottom: 0;
        }

        .faq-answer ul,
        .faq-answer ol {
          margin: 0.75rem 0;
          padding-left: 1.5rem;
        }

        .faq-answer li {
          font-size: 0.9rem;
          line-height: 1.75;
          color: var(--grey-1);
          margin-bottom: 0.5rem;
        }

        .faq-answer li strong {
          color: var(--white);
        }

        .faq-cta {
          text-align: center;
          padding: 2.5rem 1rem;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          margin-top: 2rem;
        }

        .faq-cta p {
          font-size: 1.1rem;
          color: var(--grey-1);
          margin-bottom: 1.5rem;
        }

        /* Contact Section */
        .contact-section {
          background: var(--bg);
        }

        .contact-layout {
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 3rem;
          margin-top: 2.5rem;
          align-items: start;
        }

        .contact-info-col {
          display: flex;
          flex-direction: column;
        }

        .contact-row {
          display: flex;
          align-items: flex-start;
          gap: 1.2rem;
          padding: 1.2rem 0;
          border-bottom: 1px solid var(--border);
        }

        .contact-row:first-child {
          padding-top: 0;
        }

        .contact-icon-wrap {
          width: 38px;
          height: 38px;
          border-radius: var(--radius-sm);
          background: var(--yellow-soft);
          border: 1px solid rgba(245, 197, 24, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.85rem;
          color: var(--yellow);
          flex-shrink: 0;
        }

        .contact-text {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .contact-label {
          font-size: 0.62rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--grey-2);
          font-weight: 700;
        }

        .contact-val {
          font-size: 0.9rem;
          color: var(--white);
          font-weight: 500;
        }

        a.contact-val:hover {
          color: var(--yellow);
        }

        .contact-note {
          font-size: 0.69rem;
          color: var(--grey-2);
        }

        .contact-cta-box {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 2.2rem;
        }

        .contact-cta-box h3 {
          font-family: var(--font-head);
          font-size: 1.3rem;
          font-weight: 800;
          color: var(--white);
          margin-bottom: 0.8rem;
          letter-spacing: -0.3px;
        }

        .contact-cta-box p {
          font-size: 0.83rem;
          color: var(--grey-1);
          line-height: 1.75;
          margin-bottom: 1.8rem;
        }

        .contact-cta-btns {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .cta-wa,
        .cta-mail {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          padding: 0.85rem 1.5rem;
          border-radius: var(--radius-sm);
          font-size: 0.85rem;
          font-weight: 700;
          transition: var(--transition);
          letter-spacing: 0.2px;
          text-decoration: none;
        }

        .cta-wa {
          background: var(--yellow);
          color: #000;
        }

        .cta-wa:hover {
          background: #25d366;
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(37, 211, 102, 0.3);
        }

        .cta-mail {
          background: transparent;
          color: var(--grey-1);
          border: 1px solid var(--border-light);
        }

        .cta-mail:hover {
          border-color: var(--yellow);
          color: var(--yellow);
        }

        .contact-legal {
          font-size: 0.67rem;
          color: var(--grey-2);
          line-height: 1.65;
          display: flex;
          gap: 0.5rem;
          align-items: flex-start;
        }

        .contact-legal i {
          margin-top: 1px;
          flex-shrink: 0;
          color: var(--yellow);
        }

        .contact-form-section {
          margin-top: 3rem;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }

        .form-section-title {
          font-family: var(--font-head);
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--white);
          margin-bottom: 0.5rem;
        }

        .form-section-desc {
          font-size: 0.9rem;
          color: var(--grey-1);
          margin-bottom: 2rem;
        }

        .contact-form {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 2.5rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-size: 0.85rem;
          color: var(--grey-1);
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .form-group label i {
          color: var(--yellow);
          font-size: 0.75rem;
        }

        .required {
          color: #ff6b6b;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 0.85rem 1rem;
          font-size: 0.9rem;
          color: var(--white);
          transition: var(--transition);
          font-family: inherit;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--yellow);
          box-shadow: 0 0 0 3px rgba(245, 197, 24, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .error-message {
          font-size: 0.75rem;
          color: #ff6b6b;
          display: none;
        }

        .form-actions {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
        }

        .btn-submit,
        .btn-reset {
          padding: 0.9rem 2rem;
          border-radius: var(--radius-sm);
          font-size: 0.9rem;
          font-weight: 700;
          border: none;
          cursor: pointer;
          transition: var(--transition);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: inherit;
        }

        .btn-submit {
          background: var(--yellow);
          color: #000;
        }

        .btn-submit:hover {
          background: var(--yellow-dim);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(245, 197, 24, 0.3);
        }

        .btn-reset {
          background: transparent;
          color: var(--grey-1);
          border: 1px solid var(--border);
        }

        .btn-reset:hover {
          border-color: var(--yellow);
          color: var(--yellow);
        }

        .office-address-section {
          margin-top: 3rem;
        }

        .office-title {
          font-family: var(--font-head);
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--white);
          margin-bottom: 1.5rem;
        }

        .office-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          overflow: hidden;
          display: grid;
          grid-template-columns: 350px 1fr;
          gap: 0;
        }

        .office-image {
          position: relative;
          height: 300px;
          overflow: hidden;
        }

        .office-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .office-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: var(--yellow);
          color: #000;
          padding: 0.5rem 1rem;
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .office-details {
          padding: 2rem;
        }

        .office-details h4 {
          font-family: var(--font-head);
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--white);
          margin-bottom: 1.5rem;
        }

        .office-address {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .office-address i {
          color: var(--yellow);
          font-size: 1.2rem;
          margin-top: 0.2rem;
        }

        .office-address p {
          font-size: 0.9rem;
          color: var(--grey-1);
          line-height: 1.6;
          margin: 0;
        }

        .office-address p strong {
          color: var(--white);
          display: block;
          margin-bottom: 0.3rem;
        }

        .office-info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .office-info-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 1rem;
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
        }

        .office-info-item i {
          color: var(--yellow);
          font-size: 1.1rem;
          margin-top: 0.2rem;
        }

        .office-info-item div {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .office-info-item span {
          font-size: 0.7rem;
          color: var(--grey-2);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .office-info-item strong {
          font-size: 0.85rem;
          color: var(--white);
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
