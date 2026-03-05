import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plastic Storage Tanks | 200L to 10,000L | BIS Certified',
  description: 'High-density polyethylene (HDPE) storage tanks from 200L to 10,000L. UV-stabilized, BIS certified, food-grade. 22 models for residential, industrial, and commercial use.',
  keywords: ['plastic storage tanks', 'water tanks', 'HDPE tanks', 'industrial tanks', 'water storage', 'BIS certified tanks', 'UV stabilized tanks'],
  openGraph: {
    title: 'Plastic Storage Tanks - CM Trading & Exports',
    description: 'Premium HDPE storage tanks from 200L to 10,000L. BIS certified, UV-stabilized, 22 models available.',
    images: ['/images/tanks/tank-1.jpeg'],
  },
};

const tankCategories = [
  {
    category: 'Residential Tanks',
    description: 'Perfect for homes and small buildings',
    tanks: [
      { id: 1, name: '500L Loft Tank', capacity: '500 Liters', color: 'Blue/Black' },
      { id: 2, name: '1000L Overhead Tank', capacity: '1,000 Liters', color: 'Triple Layer' },
      { id: 3, name: '2000L House Tank', capacity: '2,000 Liters', color: 'Food Grade' }
    ]
  },
  {
    category: 'Industrial Tanks',
    description: 'Heavy-duty for factories and industries',
    tanks: [
      { id: 4, name: '5000L Industrial', capacity: '5,000 Liters', color: 'UV Stabilized' },
      { id: 5, name: '10000L Large Capacity', capacity: '10,000 Liters', color: 'Heavy Duty' },
      { id: 6, name: '3000L Process Tank', capacity: '3,000 Liters', color: 'Chemical Grade' }
    ]
  },
  {
    category: 'Specialty Tanks',
    description: 'For specific applications',
    tanks: [
      { id: 7, name: 'Sintex Type Tank', capacity: '1500L', color: 'Premium' },
      { id: 8, name: 'Supreme Tank', capacity: '2500L', color: 'Triple Layer' },
      { id: 9, name: 'Penguin Tank', capacity: '1200L', color: 'Food Safe' }
    ]
  },
  {
    category: 'Large Capacity',
    description: 'For commercial and agricultural use',
    tanks: [
      { id: 10, name: '8000L Jumbo', capacity: '8,000 Liters', color: 'UV Protected' },
      { id: 11, name: '6000L Commercial', capacity: '6,000 Liters', color: 'Industrial Grade' },
      { id: 12, name: '4000L Farm Tank', capacity: '4,000 Liters', color: 'Weather Proof' }
    ]
  },
  {
    category: 'Advanced Features',
    description: 'With special features and accessories',
    tanks: [
      { id: 13, name: 'Multi-Layer Tank', capacity: '3500L', color: '5-Layer Protection' },
      { id: 14, name: 'Insulated Tank', capacity: '2000L', color: 'Heat Resistant' },
      { id: 15, name: 'Smart Tank', capacity: '2500L', color: 'Level Indicator' }
    ]
  },
  {
    category: 'Custom Manufacturing',
    description: 'Made to order specifications',
    tanks: [
      { id: 16, name: 'Custom Size', capacity: '200L-10000L', color: 'Any Color' },
      { id: 17, name: 'Special Shape', capacity: 'As Required', color: 'Custom' },
      { id: 18, name: 'Portable Tanks', capacity: '500-2000L', color: 'Lightweight' },
      { id: 19, name: 'Underground Tank', capacity: '5000L', color: 'High Strength' },
      { id: 20, name: 'Rectangular Tank', capacity: '3000L', color: 'Space Saving' },
      { id: 21, name: 'Conical Tank', capacity: '1500L', color: 'Industrial' },
      { id: 22, name: 'Flat Bottom Tank', capacity: '4000L', color: 'Stable Base' }
    ]
  }
];

export default function PlasticStoragePage() {
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
              <i className="fas fa-industry mr-2"></i>
              Industrial Storage Solutions
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Plastic Storage Tanks
            </h1>
            <p className="text-[#94a3b8] text-xl mb-8 leading-relaxed">
              High-density polyethylene (HDPE) storage tanks from 200L to 10,000L capacity. 
              UV-stabilized, BIS certified, and built to last. Perfect for residential, industrial, and commercial applications.
            </p>

            {/* Key Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { icon: 'fa-certificate', text: 'BIS Certified' },
                { icon: 'fa-sun', text: 'UV Stabilized' },
                { icon: 'fa-shield-alt', text: 'Food Grade' },
                { icon: 'fa-layer-group', text: '22 Models' }
              ].map((feature, idx) => (
                <div key={idx} className="bg-[#1a2332] border border-[#2a3544] rounded-lg p-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <i className={`fas ${feature.icon} text-white`}></i>
                  </div>
                  <p className="text-white font-medium text-sm">{feature.text}</p>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/916369431485?text=Hi, I'm interested in Plastic Storage Tanks"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#25d366] text-white font-semibold rounded-lg hover:bg-[#20bd5a] transition-all transform hover:scale-105 shadow-lg"
            >
              <i className="fab fa-whatsapp mr-2 text-xl"></i>
              Get Quote Now
            </a>
          </div>
        </div>
      </section>

      {/* Tank Gallery by Category */}
      {tankCategories.map((category, catIdx) => (
        <section key={catIdx} className={`py-16 ${catIdx % 2 === 0 ? 'bg-[#1a2332]' : 'bg-[#0b0f1a]'}`}>
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{category.category}</h2>
              <p className="text-[#94a3b8]">{category.description}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {category.tanks.map((tank) => (
                <div
                  key={tank.id}
                  className="bg-[#0b0f1a] border border-[#2a3544] rounded-xl overflow-hidden hover:border-[#f5c518] transition-all hover:transform hover:scale-105"
                >
                  <div className="relative h-64 bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
                    <Image
                      src={`/images/tanks/tank-${tank.id}.jpeg`}
                      alt={tank.name}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{tank.name}</h3>
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <p className="text-[#94a3b8] text-sm">Capacity</p>
                        <p className="text-[#f5c518] font-semibold">{tank.capacity}</p>
                      </div>
                      <div>
                        <p className="text-[#94a3b8] text-sm">Type</p>
                        <p className="text-white font-semibold text-sm">{tank.color}</p>
                      </div>
                    </div>
                    <a
                      href={`https://wa.me/916369431485?text=Hi, I'm interested in ${tank.name} (${tank.capacity})`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center px-4 py-2 bg-[#2a3544] text-[#f5c518] rounded-lg hover:bg-[#f5c518] hover:text-[#0b0f1a] transition-all font-medium"
                    >
                      Inquire Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Specifications */}
      <section className="py-20 bg-[#1a2332]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Technical Specifications</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Material & Build',
                icon: 'fa-cubes',
                specs: [
                  'Virgin HDPE (High-Density Polyethylene)',
                  'Food-grade material',
                  '3-layer UV stabilized',
                  'Seamless rotomolding construction',
                  'Impact resistant',
                  'Weather proof'
                ]
              },
              {
                title: 'Certifications',
                icon: 'fa-award',
                specs: [
                  'BIS certified (IS 12701)',
                  'ISO 9001:2015',
                  'FSSAI approved for water storage',
                  'Environment friendly',
                  'Non-toxic and safe',
                  'Quality tested'
                ]
              },
              {
                title: 'Features',
                icon: 'fa-star',
                specs: [
                  'Rust & corrosion free',
                  'Easy installation',
                  'Low maintenance',
                  'Temperature resistant (-20°C to 60°C)',
                  'Leak proof design',
                  '10+ years lifespan'
                ]
              }
            ].map((section, idx) => (
              <div key={idx} className="bg-[#0b0f1a] border border-[#2a3544] rounded-xl p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                  <i className={`fas ${section.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">{section.title}</h3>
                <ul className="space-y-3">
                  {section.specs.map((spec, sidx) => (
                    <li key={sidx} className="flex items-start text-[#94a3b8]">
                      <i className="fas fa-check text-[#f5c518] mr-3 mt-1"></i>
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-[#0b0f1a]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Applications</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'fa-home', title: 'Residential', desc: 'Homes, apartments, villas' },
              { icon: 'fa-building', title: 'Commercial', desc: 'Hotels, hospitals, schools' },
              { icon: 'fa-industry', title: 'Industrial', desc: 'Factories, warehouses' },
              { icon: 'fa-tractor', title: 'Agricultural', desc: 'Farms, irrigation' },
              { icon: 'fa-flask', title: 'Chemical Storage', desc: 'Safe chemical handling' },
              { icon: 'fa-oil-can', title: 'Oil & Fuel', desc: 'Petroleum products' },
              { icon: 'fa-prescription-bottle', title: 'Food Industry', desc: 'Food-grade storage' },
              { icon: 'fa-water', title: 'Water Treatment', desc: 'RO plants, filtration' }
            ].map((app, idx) => (
              <div key={idx} className="bg-[#1a2332] border border-[#2a3544] rounded-xl p-6 hover:border-[#f5c518] transition-all text-center">
                <div className="w-16 h-16 bg-[#f5c518]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`fas ${app.icon} text-[#f5c518] text-2xl`}></i>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{app.title}</h3>
                <p className="text-[#94a3b8] text-sm">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Orders */}
      <section className="py-20 bg-[#1a2332]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-8">Order Information</h2>
            
            <div className="bg-[#0b0f1a] border border-[#2a3544] rounded-xl p-8 space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#f5c518]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-shopping-cart text-[#f5c518] text-xl"></i>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Minimum Order Quantity</h3>
                  <p className="text-[#94a3b8]">10 units per model (mixed models accepted)</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#f5c518]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-truck text-[#f5c518] text-xl"></i>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Delivery Time</h3>
                  <p className="text-[#94a3b8]">5-7 days for standard models, 15-20 days for custom orders</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#f5c518]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-shield-alt text-[#f5c518] text-xl"></i>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Warranty</h3>
                  <p className="text-[#94a3b8]">1-year manufacturer warranty on all tanks</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#f5c518]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-paint-roller text-[#f5c518] text-xl"></i>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Customization</h3>
                  <p className="text-[#94a3b8]">Custom sizes, colors, and branding available on request</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Order Storage Tanks?
          </h2>
          <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
            Get competitive pricing, technical specifications, and fast delivery. Bulk orders welcome.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/916369431485?text=Hi, I need a quote for storage tanks"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#0b0f1a] text-white font-semibold rounded-lg hover:bg-[#1a2332] transition-all transform hover:scale-105 shadow-lg"
            >
              <i className="fab fa-whatsapp mr-2 text-xl"></i>
              Get Instant Quote
            </a>
            <a
              href="mailto:chandruselvam1012@gmail.com?subject=Storage Tanks Inquiry"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0b0f1a] font-semibold rounded-lg hover:bg-gray-100 transition-all"
            >
              <i className="fas fa-envelope mr-2"></i>
              Email Inquiry
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
