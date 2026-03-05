import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    id: 'turmeric',
    title: 'Premium Turmeric',
    subtitle: 'Erode Golden Turmeric',
    description: 'High-curcumin Erode turmeric known for its vibrant color and medicinal properties. Farm-fresh and organically processed.',
    image: '/images/turmeric.webp',
    specs: ['Curcumin 3-5%', 'Organic Certified', 'AAA Grade'],
    icon: 'fa-seedling',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    id: 'spices',
    title: 'Indian Spices',
    subtitle: 'Authentic Flavors',
    description: 'Complete range of authentic Indian spices including cardamom, pepper, cumin, coriander, and traditional masalas.',
    image: '/images/turmeric.webp',
    specs: ['20+ Varieties', 'Export Grade', 'Steam Sterilized'],
    icon: 'fa-pepper-hot',
    color: 'from-red-500 to-orange-600',
  },
  {
    id: 'plastic-storage',
    title: 'Storage Tanks',
    subtitle: 'Industrial Solutions',
    description: 'High-density polyethylene storage tanks from 200L to 10,000L. UV-stabilized and BIS certified for industrial use.',
    image: '/images/tanks/tank-1.jpeg',
    specs: ['200L - 10,000L', 'BIS Certified', '22 Models'],
    icon: 'fa-industry',
    color: 'from-blue-500 to-cyan-500',
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-[#0b0f1a] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 radial-dot-pattern"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#2a3544] rounded-full text-[#f5c518] text-sm font-medium mb-4">
            <i className="fas fa-box-open mr-2"></i>
            Our Products
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Premium Export Products
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
            Carefully sourced and quality-tested products from verified Indian manufacturers
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/${product.id}`}
              className="group relative bg-[#1a2332] rounded-2xl overflow-hidden border border-[#2a3544] hover:border-[#f5c518] transition-all hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#f5c518]/20"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f1a] via-transparent to-transparent"></div>
                
                {/* Icon Badge */}
                <div className={`absolute top-4 right-4 w-14 h-14 bg-gradient-to-br ${product.color} rounded-xl flex items-center justify-center shadow-lg`}>
                  <i className={`fas ${product.icon} text-white text-xl`}></i>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-[#f5c518] text-sm font-medium mb-2">{product.subtitle}</div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#f5c518] transition-colors">
                  {product.title}
                </h3>
                <p className="text-[#94a3b8] mb-4">
                  {product.description}
                </p>

                {/* Specs */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.specs.map((spec, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[#2a3544] text-[#94a3b8] text-xs rounded-full"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center text-[#f5c518] font-medium group-hover:translate-x-2 transition-transform">
                  View Details
                  <i className="fas fa-arrow-right ml-2"></i>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Custom Solutions CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-[#2a3544] text-white rounded-lg border border-[#f5c518]/20">
            <i className="fas fa-lightbulb text-[#f5c518] mr-3"></i>
            Need custom solutions? 
            <a href="#contact" className="ml-2 text-[#f5c518] hover:underline font-medium">
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
