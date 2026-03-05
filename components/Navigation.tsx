'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'products', 'services', 'markets'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0b0f1a]/95 backdrop-blur-md border-b border-[#2a3544]">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#f5c518] to-[#d4a50a] rounded-lg flex items-center justify-center font-bold text-[#0b0f1a] text-lg">
              CM
            </div>
            <div className="hidden md:block">
              <h2 className="text-white font-semibold text-lg">CM Trading & Exports</h2>
              <p className="text-[#94a3b8] text-xs">Export Sourcing Partner</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8">
            {['home', 'about', 'products', 'services', 'markets', 'contact'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  className={`text-sm font-medium transition-colors capitalize ${
                    activeSection === item
                      ? 'text-[#f5c518]'
                      : 'text-white hover:text-[#f5c518]'
                  }`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/916369431485"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center space-x-2 bg-[#25d366] text-white px-5 py-2.5 rounded-lg font-medium hover:bg-[#20bd5a] transition-colors"
          >
            <i className="fab fa-whatsapp text-lg"></i>
            <span>WhatsApp</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(true)}
            className="md:hidden text-white text-2xl"
            aria-label="Open navigation menu"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {isMobileOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-50 md:hidden"
            onClick={() => setIsMobileOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-80 bg-[#1a2332] z-50 overflow-y-auto md:hidden transform transition-transform">
            {/* Close Button */}
            <button
              onClick={() => setIsMobileOpen(false)}
              className="absolute top-4 right-4 text-white text-2xl w-10 h-10 flex items-center justify-center hover:text-[#f5c518] transition-colors"
              aria-label="Close navigation menu"
            >
              <i className="fas fa-times"></i>
            </button>

            {/* Brand */}
            <div className="p-6 border-b border-[#2a3544]">
              <div className="w-16 h-16 bg-gradient-to-br from-[#f5c518] to-[#d4a50a] rounded-xl flex items-center justify-center font-bold text-[#0b0f1a] text-2xl mx-auto">
                CM
              </div>
            </div>

            {/* Profile */}
            <div className="p-6 text-center border-b border-[#2a3544]">
              <div className="w-20 h-20 bg-[#2a3544] rounded-full flex items-center justify-center text-[#f5c518] text-3xl mx-auto mb-3">
                <i className="fas fa-user-tie"></i>
              </div>
              <h1 className="text-xl font-bold text-white">Chandra Mohan</h1>
              <p className="text-[#94a3b8] text-sm">(Chandru)</p>
              <div className="mt-2 inline-block bg-[#f5c518] text-[#0b0f1a] px-3 py-1 rounded-full text-xs font-medium">
                Export Sourcing Partner
              </div>
              <div className="mt-2 text-[#94a3b8] text-sm flex items-center justify-center">
                <i className="fas fa-map-marker-alt mr-2"></i>
                Erode, Tamil Nadu, India
              </div>
            </div>

            {/* Quick Info */}
            <div className="p-6 border-b border-[#2a3544] space-y-4">
              <div className="flex items-start space-x-3">
                <i className="fas fa-phone-alt text-[#f5c518] mt-1"></i>
                <div>
                  <span className="block text-[#94a3b8] text-xs">Phone</span>
                  <a href="tel:+916369431485" className="text-white text-sm hover:text-[#f5c518]">
                    +91 63694 31485
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <i className="fas fa-envelope text-[#f5c518] mt-1"></i>
                <div>
                  <span className="block text-[#94a3b8] text-xs">Email</span>
                  <a href="mailto:chandruselvam1012@gmail.com" className="text-white text-sm hover:text-[#f5c518] break-all">
                    chandruselvam1012@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <i className="fas fa-id-badge text-[#f5c518] mt-1"></i>
                <div>
                  <span className="block text-[#94a3b8] text-xs">IEC Code</span>
                  <span className="text-white text-sm">IEC0325CM4812</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="p-6">
              <a
                href="https://wa.me/916369431485"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-[#25d366] text-white px-5 py-3 rounded-lg font-medium hover:bg-[#20bd5a] transition-colors w-full"
              >
                <i className="fab fa-whatsapp text-xl"></i>
                <span>WhatsApp Me</span>
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
}
