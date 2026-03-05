import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Authentic Indian Spices Export | 20+ Premium Varieties',
  description: 'Premium Indian spices including cardamom, pepper, cumin, coriander, and traditional masalas. Export grade, steam sterilized, FSSAI certified.',
  keywords: ['indian spices export', 'cardamom', 'black pepper', 'cumin', 'coriander', 'indian masala', 'spices supplier'],
  openGraph: {
    title: 'Authentic Indian Spices - CM Trading & Exports',
    description: 'Complete range of premium Indian spices. Export grade, steam sterilized, shipped worldwide.',
    images: ['/images/turmeric.webp'],
  },
};

const spices = [
  'Cardamom (Green & Black)',
  'Black Pepper',
  'Cumin Seeds',
  'Coriander Seeds',
  'Red Chili Powder',
  'Cinnamon',
  'Cloves',
  'Bay Leaves',
  'Mustard Seeds',
  'Fenugreek',
  'Fennel Seeds',
  'Curry Leaves',
  'Garam Masala',
  'Turmeric Powder',
  'Dry Ginger',
  'Star Anise',
  'Nutmeg & Mace',
  'Tamarind',
  'Asafoetida',
  'Carom Seeds'
];

export default function SpicesPage() {
  return (
    <main className="min-h-screen bg-[#0b0f1a]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0b0f1a]/95 backdrop-blur-md border-b border-[#2a3544]">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <i className="fas fa-arrow-left text-[#f5c518]"></i>
            <span className="text-white font-medium">Back to Home</span>
          </Link>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#f5c518] to-[#d4a50a] rounded-lg flex items-center justify-center font-bold text-[#0b0f1a] text-lg">
              CM
            </div>
            <span className="text-white font-semibold hidden md:block">CM Trading & Exports</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0b0f1a] via-[#1a2332] to-[#0b0f1a]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-[#2a3544] rounded-full text-[#f5c518] text-sm font-medium mb-6">
              <i className="fas fa-pepper-hot mr-2"></i>
              Authentic Indian Flavors
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Premium Indian Spices
            </h1>
            <p className="text-[#94a3b8] text-xl mb-12 leading-relaxed">
              Complete range of authentic Indian spices sourced directly from the best growing regions. 
              Export grade quality, steam sterilized, and ready for global markets.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[
                { number: '20+', label: 'Spice Varieties' },
                { number: '100%', label: 'Authentic' },
                { number: 'AAA', label: 'Export Grade' },
                { number: 'FSSAI', label: 'Certified' }
              ].map((stat, idx) => (
                <div key={idx} className="bg-[#1a2332] border border-[#2a3544] rounded-xl p-6">
                  <div className="text-4xl font-bold text-[#f5c518] mb-2">{stat.number}</div>
                  <div className="text-[#94a3b8]">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="https://wa.me/916369431485?text=Hi, I'm interested in Indian Spices"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#25d366] text-white font-semibold rounded-lg hover:bg-[#20bd5a] transition-all transform hover:scale-105 shadow-lg"
            >
              <i className="fab fa-whatsapp mr-2 text-xl"></i>
              Request Catalog & Prices
            </a>
          </div>
        </div>
      </section>

      {/* Spices List */}
      <section className="py-20 bg-[#1a2332]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-4">Available Spices</h2>
          <p className="text-[#94a3b8] text-center mb-12 max-w-2xl mx-auto">
            All spices available in whole, ground, or custom processing as per your requirements
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {spices.map((spice, idx) => (
              <div
                key={idx}
                className="bg-[#0b0f1a] border border-[#2a3544] rounded-lg p-4 hover:border-[#f5c518] transition-all flex items-center space-x-3"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-pepper-hot text-white"></i>
                </div>
                <span className="text-white font-medium">{spice}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 bg-[#0b0f1a]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Quality Standards</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'fa-leaf',
                color: 'from-green-500 to-emerald-600',
                title: 'Natural & Pure',
                features: [
                  'No artificial colors',
                  'No preservatives',
                  'No chemical treatment',
                  'Farm-fresh quality'
                ]
              },
              {
                icon: 'fa-certificate',
                color: 'from-blue-500 to-cyan-600',
                title: 'Certified Quality',
                features: [
                  'FSSAI approved',
                  'ISO certified',
                  'Steam sterilized',
                  'Lab tested'
                ]
              },
              {
                icon: 'fa-shipping-fast',
                color: 'from-purple-500 to-pink-600',
                title: 'Export Ready',
                features: [
                  'Vacuum packed',
                  'Moisture controlled',
                  'Long shelf life',
                  'Global shipping'
                ]
              }
            ].map((standard, idx) => (
              <div key={idx} className="bg-[#1a2332] border border-[#2a3544] rounded-xl p-8 hover:border-[#f5c518] transition-all">
                <div className={`w-20 h-20 bg-gradient-to-br ${standard.color} rounded-xl flex items-center justify-center mb-6 mx-auto`}>
                  <i className={`fas ${standard.icon} text-white text-3xl`}></i>
                </div>
                <h3 className="text-2xl font-bold text-white text-center mb-6">{standard.title}</h3>
                <ul className="space-y-3">
                  {standard.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center text-[#94a3b8]">
                      <i className="fas fa-check text-[#f5c518] mr-3"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packaging Options */}
      <section className="py-20 bg-[#1a2332]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Packaging Options</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-[#0b0f1a] border border-[#2a3544] rounded-xl p-8">
              <div className="w-16 h-16 bg-[#f5c518]/10 rounded-xl flex items-center justify-center mb-4">
                <i className="fas fa-box text-[#f5c518] text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Retail Packaging</h3>
              <ul className="space-y-3 text-[#94a3b8]">
                <li className="flex items-start">
                  <i className="fas fa-circle text-[#f5c518] text-xs mt-2 mr-3"></i>
                  <span>50g, 100g, 250g, 500g pouches</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-circle text-[#f5c518] text-xs mt-2 mr-3"></i>
                  <span>Vacuum sealed for freshness</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-circle text-[#f5c518] text-xs mt-2 mr-3"></i>
                  <span>Custom branding available</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-circle text-[#f5c518] text-xs mt-2 mr-3"></i>
                  <span>Food-grade packaging material</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#0b0f1a] border border-[#2a3544] rounded-xl p-8">
              <div className="w-16 h-16 bg-[#f5c518]/10 rounded-xl flex items-center justify-center mb-4">
                <i className="fas fa-warehouse text-[#f5c518] text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Bulk Packaging</h3>
              <ul className="space-y-3 text-[#94a3b8]">
                <li className="flex items-start">
                  <i className="fas fa-circle text-[#f5c518] text-xs mt-2 mr-3"></i>
                  <span>5kg, 10kg, 25kg, 50kg bags</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-circle text-[#f5c518] text-xs mt-2 mr-3"></i>
                  <span>Container loads available</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-circle text-[#f5c518] text-xs mt-2 mr-3"></i>
                  <span>Jute or PP woven bags</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-circle text-[#f5c518] text-xs mt-2 mr-3"></i>
                  <span>Export standard packaging</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-[#94a3b8] mb-4">
              <strong className="text-white">Minimum Order:</strong> 100kg per spice variety
            </p>
            <p className="text-[#94a3b8]">
              <strong className="text-white">Delivery:</strong> 15-30 days for sea freight, 5-7 days for air freight
            </p>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-[#0b0f1a]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Perfect For</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: 'fa-utensils', title: 'Restaurants', desc: 'Authentic flavors for your dishes' },
              { icon: 'fa-store', title: 'Retailers', desc: 'Ready-to-sell packages' },
              { icon: 'fa-industry', title: 'Food Industry', desc: 'Bulk processing needs' },
              { icon: 'fa-home', title: 'Distributors', desc: 'Wholesale quantities' }
            ].map((app, idx) => (
              <div key={idx} className="bg-[#1a2332] border border-[#2a3544] rounded-xl p-6 text-center hover:border-[#f5c518] transition-all">
                <div className="w-16 h-16 bg-[#f5c518]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`fas ${app.icon} text-[#f5c518] text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{app.title}</h3>
                <p className="text-[#94a3b8] text-sm">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get Quote for Indian Spices
          </h2>
          <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
            Request detailed catalog, pricing, and samples. Custom blends and private labeling available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/916369431485?text=Hi, I need a quote for Indian spices"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#0b0f1a] text-white font-semibold rounded-lg hover:bg-[#1a2332] transition-all transform hover:scale-105 shadow-lg"
            >
              <i className="fab fa-whatsapp mr-2 text-xl"></i>
              WhatsApp Quote Request
            </a>
            <a
              href="mailto:chandruselvam1012@gmail.com?subject=Spices Inquiry"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0b0f1a] font-semibold rounded-lg hover:bg-gray-100 transition-all"
            >
              <i className="fas fa-envelope mr-2"></i>
              Email for Catalog
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#0b0f1a] border-t border-[#2a3544]">
        <div className="container mx-auto px-6 text-center">
          <Link href="/" className="text-[#f5c518] hover:text-[#d4a50a] font-medium">
            ← Back to Home
          </Link>
          <p className="text-[#94a3b8] mt-4 text-sm">
            © 2026 CM Trading & Exports. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
