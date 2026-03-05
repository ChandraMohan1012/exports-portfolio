'use client';

import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string) => {
    return /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/.test(phone);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Validation
    const newErrors: Record<string, string> = {};
    
    if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (formData.subject.length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters';
    }
    if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission (replace with actual API call)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form Data:', formData);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#1a2332] relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Contact Info */}
          <div>
            <div className="inline-block px-4 py-2 bg-[#2a3544] rounded-full text-[#f5c518] text-sm font-medium mb-4">
              <i className="fas fa-envelope mr-2"></i>
              Get In Touch
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Let's Start a Conversation
            </h2>
            <p className="text-[#94a3b8] text-lg mb-8">
              Ready to source quality products from India? Contact us today for quotes, samples, or inquiries.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#f5c518]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-phone-alt text-[#f5c518] text-lg"></i>
                </div>
                <div>
                  <div className="text-white font-semibold mb-1">Phone</div>
                  <a href="tel:+916369431485" className="text-[#94a3b8] hover:text-[#f5c518] transition-colors">
                    +91 63694 31485
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#f5c518]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-envelope text-[#f5c518] text-lg"></i>
                </div>
                <div>
                  <div className="text-white font-semibold mb-1">Email</div>
                  <a href="mailto:chandruselvam1012@gmail.com" className="text-[#94a3b8] hover:text-[#f5c518] transition-colors break-all">
                    chandruselvam1012@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#f5c518]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-map-marker-alt text-[#f5c518] text-lg"></i>
                </div>
                <div>
                  <div className="text-white font-semibold mb-1">Office Address</div>
                  <p className="text-[#94a3b8]">
                    4/250, 251, Arun Varun Complex 1st Floor<br />
                    Graynagar Road, Thingalur - 638 055<br />
                    Perundurai Tk, Erode Dt, Tamil Nadu
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#25d366]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fab fa-whatsapp text-[#25d366] text-lg"></i>
                </div>
                <div>
                  <div className="text-white font-semibold mb-1">WhatsApp</div>
                  <a
                    href="https://wa.me/916369431485"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#94a3b8] hover:text-[#25d366] transition-colors"
                  >
                    Chat with us instantly
                  </a>
                </div>
              </div>
            </div>

            {/* Business Info */}
            <div className="mt-8 p-6 bg-[#2a3544] rounded-xl">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-[#94a3b8] text-sm mb-1">IEC Code</div>
                  <div className="text-white font-semibold">IEC0325CM4812</div>
                </div>
                <div>
                  <div className="text-[#94a3b8] text-sm mb-1">GST Number</div>
                  <div className="text-white font-semibold">33AABCC1234M1ZX</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-[#0b0f1a] rounded-2xl p-8 border border-[#2a3544]">
            {submitSuccess && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500 rounded-lg text-green-500 flex items-center">
                <i className="fas fa-check-circle mr-3"></i>
                Message sent successfully! We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-[#1a2332] border ${errors.name ? 'border-red-500' : 'border-[#2a3544]'} rounded-lg text-white focus:outline-none focus:border-[#f5c518] transition-colors`}
                  placeholder="Your full name"
                />
                {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-[#1a2332] border ${errors.email ? 'border-red-500' : 'border-[#2a3544]'} rounded-lg text-white focus:outline-none focus:border-[#f5c518] transition-colors`}
                    placeholder="you@example.com"
                  />
                  {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-white font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-[#1a2332] border ${errors.phone ? 'border-red-500' : 'border-[#2a3544]'} rounded-lg text-white focus:outline-none focus:border-[#f5c518] transition-colors`}
                    placeholder="+91 12345 67890"
                  />
                  {errors.phone && <p className="mt-1 text-red-500 text-sm">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-[#1a2332] border ${errors.subject ? 'border-red-500' : 'border-[#2a3544]'} rounded-lg text-white focus:outline-none focus:border-[#f5c518] transition-colors`}
                >
                  <option value="">Select a subject</option>
                  <option value="Product Inquiry">Product Inquiry</option>
                  <option value="Bulk Order">Bulk Order</option>
                  <option value="Sample Request">Sample Request</option>
                  <option value="Partnership">Partnership Opportunity</option>
                  <option value="General">General Question</option>
                </select>
                {errors.subject && <p className="mt-1 text-red-500 text-sm">{errors.subject}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 bg-[#1a2332] border ${errors.message ? 'border-red-500' : 'border-[#2a3544]'} rounded-lg text-white focus:outline-none focus:border-[#f5c518] transition-colors resize-none`}
                  placeholder="Tell us about your requirements..."
                ></textarea>
                {errors.message && <p className="mt-1 text-red-500 text-sm">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-[#f5c518] text-[#0b0f1a] font-semibold rounded-lg hover:bg-[#d4a50a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin mr-2"></i>
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane mr-2"></i>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
