import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Premium Erode Turmeric | High-Curcumin Export Quality',
  description: 'Premium Erode golden turmeric with 3-5% curcumin content. Organic certified, AAA grade, export quality. Direct from Erode farms, Tamil Nadu.',
  keywords: ['erode turmeric', 'premium turmeric', 'high curcumin', 'organic turmeric', 'indian turmeric export', 'golden turmeric'],
  openGraph: {
    title: 'Premium Erode Turmeric - CM Trading & Exports',
    description: 'High-curcumin Erode turmeric known for vibrant color and medicinal properties. Export quality, organic certified.',
    images: ['/images/turmeric.webp'],
  },
};

export default function TurmericPage() {
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl blur-xl opacity-20"></div>
              <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-[#f5c518]/20">
                <Image
                  src="/images/turmeric.webp"
                  alt="Premium Erode Turmeric"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute top-6 right-6 bg-[#f5c518] text-[#0b0f1a] px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                AAA Grade
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="inline-block px-4 py-2 bg-[#2a3544] rounded-full text-[#f5c518] text-sm font-medium mb-4">
                <i className="fas fa-seedling mr-2"></i>
                Premium Agricultural Product
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Erode Golden Turmeric
              </h1>
              <p className="text-[#94a3b8] text-xl mb-8 leading-relaxed">
                World-renowned Erode turmeric known for its vibrant golden color, high curcumin content (3-5%), 
                and superior medicinal properties. Organically grown and carefully processed to preserve natural goodness.
              </p>

              {/* Key Features */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: 'fa-certificate', text: 'Organic Certified' },
                  { icon: 'fa-star', text: 'AAA Export Grade' },
                  { icon: 'fa-flask', text: '3-5% Curcumin' },
                  { icon: 'fa-seedling', text: 'Farm Fresh' }
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3 bg-[#1a2332] border border-[#2a3544] rounded-lg p-4">
                    <div className="w-10 h-10 bg-[#f5c518]/10 rounded-lg flex items-center justify-center">
                      <i className={`fas ${feature.icon} text-[#f5c518]`}></i>
                    </div>
                    <span className="text-white font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/916369431485?text=Hi, I'm interested in Premium Erode Turmeric"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#25d366] text-white font-semibold rounded-lg hover:bg-[#20bd5a] transition-all transform hover:scale-105 shadow-lg"
                >
                  <i className="fab fa-whatsapp mr-2 text-xl"></i>
                  WhatsApp Inquiry
                </a>
                <a
                  href="#specifications"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#2a3544] text-white font-semibold rounded-lg hover:bg-[#f5c518] hover:text-[#0b0f1a] transition-all"
                >
                  View Specifications
                  <i className="fas fa-arrow-down ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section id="specifications" className="py-20 bg-[#1a2332]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Product Specifications</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-[#0b0f1a] border border-[#2a3544] rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#f5c518] mb-4">Quality Parameters</h3>
              <div className="space-y-3">
                {[
                  { label: 'Curcumin Content', value: '3-5%' },
                  { label: 'Grade', value: 'AAA Export Quality' },
                  { label: 'Color', value: 'Deep Golden Yellow' },
                  { label: 'Moisture', value: 'Max 10%' },
                  { label: 'Purity', value: '99%+' },
                  { label: 'Origin', value: 'Erode, Tamil Nadu' }
                ].map((spec, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2 border-b border-[#2a3544]">
                    <span className="text-[#94a3b8]">{spec.label}</span>
                    <span className="text-white font-semibold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#0b0f1a] border border-[#2a3544] rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#f5c518] mb-4">Packaging & Delivery</h3>
              <div className="space-y-3">
                {[
                  { label: 'Available Forms', value: 'Whole, Finger, Powder' },
                  { label: 'Packaging', value: '5kg, 10kg, 25kg, 50kg' },
                  { label: 'Min Order', value: '100 kg' },
                  { label: 'Bulk Orders', value: 'Container loads available' },
                  { label: 'Certifications', value: 'FSSAI, Organic, ISO' },
                  { label: 'Shelf Life', value: '24 months' }
                ].map((spec, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2 border-b border-[#2a3544]">
                    <span className="text-[#94a3b8]">{spec.label}</span>
                    <span className="text-white font-semibold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#0b0f1a]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-4">Health Benefits</h2>
          <p className="text-[#94a3b8] text-center mb-12 max-w-2xl mx-auto">
            Erode turmeric is renowned worldwide for its exceptional medicinal properties
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'fa-heart',
                title: 'Anti-Inflammatory',
                desc: 'High curcumin content provides powerful anti-inflammatory properties'
              },
              {
                icon: 'fa-shield-alt',
                title: 'Antioxidant Rich',
                desc: 'Natural antioxidants help protect cells from oxidative damage'
              },
              {
                icon: 'fa-brain',
                title: 'Cognitive Support',
                desc: 'Supports brain health and cognitive function naturally'
              },
              {
                icon: 'fa-dna',
                title: 'Immune Boost',
                desc: 'Strengthens immune system with natural compounds'
              },
              {
                icon: 'fa-heartbeat',
                title: 'Heart Health',
                desc: 'Supports cardiovascular health and circulation'
              },
              {
                icon: 'fa-leaf',
                title: 'Natural & Pure',
                desc: 'No chemicals, pesticides, or artificial additives'
              }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-[#1a2332] border border-[#2a3544] rounded-xl p-6 hover:border-[#f5c518] transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                  <i className={`fas ${benefit.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-[#94a3b8]">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-500 to-orange-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0b0f1a] mb-6">
            Get Premium Erode Turmeric Today
          </h2>
          <p className="text-[#0b0f1a]/80 text-xl mb-8 max-w-2xl mx-auto">
            Direct from Erode farms. Bulk orders welcome. Global shipping available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/916369431485?text=Hi, I'd like to order Premium Erode Turmeric"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#0b0f1a] text-white font-semibold rounded-lg hover:bg-[#1a2332] transition-all transform hover:scale-105 shadow-lg"
            >
              <i className="fab fa-whatsapp mr-2 text-xl"></i>
              Order via WhatsApp
            </a>
            <a
              href="mailto:chandruselvam1012@gmail.com"
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
