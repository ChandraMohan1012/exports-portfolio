import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0f1a]">
      <Navigation />
      <Hero />
      
      {/* About Section */}
      <section id="about" className="py-20 bg-[#1a2332]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-[#2a3544] rounded-full text-[#f5c518] text-sm font-medium mb-4">
              <i className="fas fa-info-circle mr-2"></i>
              About Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Connecting India to the World
            </h2>
            <p className="text-[#94a3b8] text-lg leading-relaxed mb-6">
              CM Trading & Exports, led by Chandra Mohan (Chandru), is your reliable export sourcing partner based in Erode, Tamil Nadu. We specialize in connecting global buyers with premium Indian products including authentic spices, high-grade turmeric, and industrial storage solutions.
            </p>
            <p className="text-[#94a3b8] text-lg leading-relaxed">
              With IEC certification and direct relationships with verified manufacturers, we ensure quality, transparency, and timely delivery for every shipment. Whether you need bulk orders or custom solutions, we're here to make international trade simple and trustworthy.
            </p>
          </div>
        </div>
      </section>

      <Products />

      {/* Services Section */}
      <section id="services" className="py-20 bg-[#1a2332]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#2a3544] rounded-full text-[#f5c518] text-sm font-medium mb-4">
              <i className="fas fa-cogs mr-2"></i>
              Our Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              End-to-End Export Solutions
            </h2>
            <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
              Comprehensive support from sourcing to delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: 'fa-search',
                title: 'Product Sourcing',
                desc: 'Direct access to verified Indian manufacturers and suppliers across multiple categories'
              },
              {
                icon: 'fa-check-double',
                title: 'Quality Control',
                desc: 'Rigorous inspection and certification processes to ensure product standards'
              },
              {
                icon: 'fa-file-invoice',
                title: 'Documentation',
                desc: 'Complete export documentation, customs clearance, and compliance support'
              },
              {
                icon: 'fa-shipping-fast',
                title: 'Logistics',
                desc: 'Reliable shipping partners and end-to-end tracking for global deliveries'
              }
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-[#0b0f1a] border border-[#2a3544] rounded-xl p-6 hover:border-[#f5c518] transition-all hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-[#f5c518]/10 rounded-xl flex items-center justify-center mb-4">
                  <i className={`fas ${service.icon} text-[#f5c518] text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-[#94a3b8]">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Markets & Stats Section */}
      <section id="markets" className="py-20 bg-[#0b0f1a]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#2a3544] rounded-full text-[#f5c518] text-sm font-medium mb-4">
              <i className="fas fa-globe mr-2"></i>
              Global Reach
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Trusted Worldwide
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              { number: '50+', label: 'Product Range', icon: 'fa-box' },
              { number: '10+', label: 'Countries Served', icon: 'fa-flag' },
              { number: '100%', label: 'Quality Assured', icon: 'fa-certificate' },
              { number: '24/7', label: 'Customer Support', icon: 'fa-headset' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="w-20 h-20 bg-[#f5c518]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`fas ${stat.icon} text-[#f5c518] text-3xl`}></i>
                </div>
                <div className="text-5xl font-bold text-[#f5c518] mb-2">{stat.number}</div>
                <div className="text-[#94a3b8]">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              What Our Clients Say
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  quote: "Excellent service and high-quality turmeric. CM Trading delivered exactly what we needed for our US market.",
                  author: "Sarah Johnson",
                  role: "Import Manager, USA",
                  rating: 5
                },
                {
                  quote: "Professional handling of our bulk spice orders. The plastic tanks are top quality and BIS certified as promised.",
                  author: "Ahmed Al-Rashid",
                  role: "Procurement Head, UAE",
                  rating: 5
                }
              ].map((testimonial, idx) => (
                <div key={idx} className="bg-[#1a2332] border border-[#2a3544] rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="fas fa-star text-[#f5c518] text-sm"></i>
                    ))}
                  </div>
                  <p className="text-[#94a3b8] mb-4 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-[#f5c518]/10 rounded-full flex items-center justify-center">
                      <i className="fas fa-user text-[#f5c518]"></i>
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.author}</div>
                      <div className="text-[#94a3b8] text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#1a2332]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-[#2a3544] rounded-full text-[#f5c518] text-sm font-medium mb-4">
                <i className="fas fa-question-circle mr-2"></i>
                FAQ
              </div>
              <h2 className="text-4xl font-bold text-white">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "What are your minimum order quantities?",
                  a: "Minimum order quantities vary by product. For turmeric and spices, we typically start at 100kg. For plastic tanks, minimum order is 10 units. Contact us for specific product requirements."
                },
                {
                  q: "Do you provide sample shipments?",
                  a: "Yes, we provide samples for quality testing. Sample costs and shipping vary by product and destination. Contact us for sample requests."
                },
                {
                  q: "What certifications do your products have?",
                  a: "Our products carry relevant certifications including ISO, BIS, FSSAI for food products, and quality certificates from manufacturers. Specific certifications available upon request."
                },
                {
                  q: "What are your payment terms?",
                  a: "We accept various payment methods including LC (Letter of Credit), T/T (Bank Transfer), and other internationally accepted payment modes. Terms can be discussed based on order value."
                },
                {
                  q: "How long does shipping take?",
                  a: "Shipping time depends on destination and shipping method. Typically 15-30 days for sea freight, 5-7 days for air freight. We provide tracking for all shipments."
                }
              ].map((faq, idx) => (
                <details key={idx} className="bg-[#0b0f1a] border border-[#2a3544] rounded-lg p-6 group">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <h3 className="text-white font-semibold">{faq.q}</h3>
                    <i className="fas fa-chevron-down text-[#f5c518] group-open:rotate-180 transition-transform"></i>
                  </summary>
                  <p className="text-[#94a3b8] mt-4 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
