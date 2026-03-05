'use client';

import { useState, useEffect } from 'react';

const phrases = [
  'Verified Indian Suppliers',
  'Premium Turmeric Exports',
  'Quality Indian Spices',
  'Industrial Storage Solutions',
  'Direct from Manufacturers'
];

export default function Hero() {
  const [typewriterText, setTypewriterText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const timeout = isDeleting ? 45 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (typewriterText.length < currentPhrase.length) {
          setTypewriterText(currentPhrase.slice(0, typewriterText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        // Deleting
        if (typewriterText.length > 0) {
          setTypewriterText(currentPhrase.slice(0, typewriterText.length - 1));
        } else {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, timeout);

    return () => clearTimeout(timer);
  }, [typewriterText, phraseIndex, isDeleting]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b0f1a] via-[#1a2332] to-[#0b0f1a]"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#f5c518] rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#f5c518] rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <div className="inline-block mb-4 px-4 py-2 bg-[#2a3544] rounded-full text-[#f5c518] text-sm font-medium">
              <i className="fas fa-check-circle mr-2"></i>
              IEC Certified Exporter
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Your Trusted
              <span className="block text-[#f5c518] mt-2">
                {typewriterText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>

            <p className="text-[#94a3b8] text-lg mb-8 max-w-xl">
              Connecting global buyers with premium Indian products. From farm-fresh turmeric to industrial storage solutions, we deliver quality with reliability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#products"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#f5c518] text-[#0b0f1a] font-semibold rounded-lg hover:bg-[#d4a50a] transition-all transform hover:scale-105 shadow-lg shadow-[#f5c518]/20"
              >
                View Products
                <i className="fas fa-arrow-right ml-2"></i>
              </a>
              <a
                href="https://wa.me/916369431485"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#25d366] text-white font-semibold rounded-lg hover:bg-[#20bd5a] transition-all transform hover:scale-105 shadow-lg"
              >
                <i className="fab fa-whatsapp mr-2 text-xl"></i>
                Contact Us
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 max-w-md mx-auto md:mx-0">
              <div className="text-center md:text-left">
                <div className="text-3xl font-bold text-[#f5c518] mb-1">50+</div>
                <div className="text-[#94a3b8] text-sm">Products</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl font-bold text-[#f5c518] mb-1">10+</div>
                <div className="text-[#94a3b8] text-sm">Countries</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl font-bold text-[#f5c518] mb-1">100%</div>
                <div className="text-[#94a3b8] text-sm">Verified</div>
              </div>
            </div>
          </div>

          {/* Right Content - Globe with Floating Cards */}
          <div className="relative hidden md:flex items-center justify-center">
            {/* Animated Globe */}
            <div className="relative w-[400px] h-[400px]">
              <div className="absolute inset-0 rounded-full border-2 border-[#f5c518]/20 animate-pulse"></div>
              <div className="absolute inset-4 rounded-full border-2 border-[#f5c518]/30 animate-pulse delay-100"></div>
              <div className="absolute inset-8 rounded-full border-2 border-[#f5c518]/40 animate-pulse delay-200"></div>
              <div className="absolute inset-12 rounded-full bg-gradient-to-br from-[#f5c518]/10 to-[#d4a50a]/10 backdrop-blur-sm flex items-center justify-center">
                <i className="fas fa-globe text-[#f5c518] text-8xl opacity-50"></i>
              </div>

              {/* Floating Card 1 - Top */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#1a2332] border border-[#2a3544] rounded-xl p-4 shadow-xl hover:scale-105 transition-transform">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-[#f5c518]/10 rounded-lg flex items-center justify-center">
                    <i className="fas fa-seedling text-[#f5c518] text-xl"></i>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Premium Quality</div>
                    <div className="text-[#94a3b8] text-xs">ISO Certified</div>
                  </div>
                </div>
              </div>

              {/* Floating Card 2 - Bottom Left */}
              <div className="absolute -bottom-8 left-0 bg-[#1a2332] border border-[#2a3544] rounded-xl p-4 shadow-xl hover:scale-105 transition-transform">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-[#f5c518]/10 rounded-lg flex items-center justify-center">
                    <i className="fas fa-shipping-fast text-[#f5c518] text-xl"></i>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Fast Delivery</div>
                    <div className="text-[#94a3b8] text-xs">Worldwide</div>
                  </div>
                </div>
              </div>

              {/* Floating Card 3 - Bottom Right */}
              <div className="absolute bottom-4 -right-4 bg-[#1a2332] border border-[#2a3544] rounded-xl p-4 shadow-xl hover:scale-105 transition-transform">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-[#f5c518]/10 rounded-lg flex items-center justify-center">
                    <i className="fas fa-flag text-[#f5c518] text-xl"></i>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">10+ Countries</div>
                    <div className="text-[#94a3b8] text-xs">Reached</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <i className="fas fa-chevron-down text-[#f5c518] text-2xl"></i>
      </div>
    </section>
  );
}
