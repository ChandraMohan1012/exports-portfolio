import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0b0f1a] border-t border-[#2a3544]">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#f5c518] to-[#d4a50a] rounded-lg flex items-center justify-center font-bold text-[#0b0f1a] text-xl">
                CM
              </div>
              <div>
                <h3 className="text-white font-bold">CM Trading</h3>
                <p className="text-[#94a3b8] text-xs">& Exports</p>
              </div>
            </div>
            <p className="text-[#94a3b8] text-sm mb-4">
              Your trusted partner for premium Indian exports. Quality products, reliable service.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://wa.me/916369431485"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#25d366] text-white rounded-lg flex items-center justify-center hover:bg-[#20bd5a] transition-colors"
                aria-label="Contact us on WhatsApp"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
              <a
                href="mailto:chandruselvam1012@gmail.com"
                className="w-10 h-10 bg-[#2a3544] text-white rounded-lg flex items-center justify-center hover:bg-[#f5c518] hover:text-[#0b0f1a] transition-colors"
                aria-label="Send us an email"
              >
                <i className="fas fa-envelope"></i>
              </a>
              <a
                href="tel:+916369431485"
                className="w-10 h-10 bg-[#2a3544] text-white rounded-lg flex items-center justify-center hover:bg-[#f5c518] hover:text-[#0b0f1a] transition-colors"
                aria-label="Call us by phone"
              >
                <i className="fas fa-phone"></i>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/turmeric" className="text-[#94a3b8] hover:text-[#f5c518] transition-colors text-sm">
                  Premium Turmeric
                </Link>
              </li>
              <li>
                <Link href="/spices" className="text-[#94a3b8] hover:text-[#f5c518] transition-colors text-sm">
                  Indian Spices
                </Link>
              </li>
              <li>
                <Link href="/plastic-storage" className="text-[#94a3b8] hover:text-[#f5c518] transition-colors text-sm">
                  Storage Tanks
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-[#94a3b8] hover:text-[#f5c518] transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-[#94a3b8] hover:text-[#f5c518] transition-colors text-sm">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#markets" className="text-[#94a3b8] hover:text-[#f5c518] transition-colors text-sm">
                  Global Markets
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#94a3b8] hover:text-[#f5c518] transition-colors text-sm">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-[#94a3b8]">
              <li className="flex items-start space-x-2">
                <i className="fas fa-map-marker-alt text-[#f5c518] mt-1"></i>
                <span>
                  4/250, 251, Arun Varun Complex,<br />
                  Thingalur - 638 055, Tamil Nadu
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-phone text-[#f5c518]"></i>
                <a href="tel:+916369431485" className="hover:text-[#f5c518] transition-colors">
                  +91 63694 31485
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-id-badge text-[#f5c518]"></i>
                <span>IEC: IEC0325CM4812</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[#2a3544] flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-[#94a3b8] text-sm">
            © {currentYear} CM Trading & Exports. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm">
            <span className="text-[#94a3b8]">Built with Next.js 14</span>
            <span className="text-[#f5c518]">•</span>
            <span className="text-[#94a3b8]">Made in India 🇮🇳</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
