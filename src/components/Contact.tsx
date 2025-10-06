import { useState } from 'react';
import { Linkedin, Instagram, Mail, Globe, Send, CheckCircle, Facebook } from 'lucide-react';
import { trackFormSubmission, trackCTAClick, trackContactFormInteraction } from '../utils/analytics';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Track form field interactions
    trackContactFormInteraction('field_focus', e.target.name);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Track form submission
    trackFormSubmission('Franchise Application Form');
    trackContactFormInteraction('form_submit');
    
    // Send email notification (you can integrate with your backend here)
    const emailBody = `
New Franchise Application:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Location: ${formData.location}
Message: ${formData.message}

Submitted on: ${new Date().toLocaleString()}
    `;
    
    // Create mailto link for immediate email
    const mailtoLink = `mailto:Hesaathi00@gmail.com?subject=New Franchise Application - ${formData.name}&body=${encodeURIComponent(emailBody)}`;
    window.open(mailtoLink);
    
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', location: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-hesa-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-hesa-green/10 rounded-full mb-6 border border-hesa-sage/30 animate-pulse">
            <Mail size={20} className="text-hesa-green" />
            <span className="text-hesa-green font-semibold">Get Started Today</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-hesa-green mb-4 animate-fade-in">
            Ready to Transform Your Village?
          </h2>
          <p className="text-xl text-hesa-gray max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.3s'}}>
            Join 45,000+ successful entrepreneurs. Fill out the form below and our team will contact you within 24 hours to discuss your franchise opportunity.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Lead Capture Form */}
          <div className="bg-white p-8 rounded-2xl border-2 border-hesa-sage/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in">
            <h3 className="text-2xl font-bold text-hesa-green mb-6 text-center animate-pulse">
              Apply for Franchise Partnership
            </h3>
            
            {isSubmitted ? (
              <div className="text-center py-8 animate-bounce">
                <CheckCircle size={64} className="text-hesa-green mx-auto mb-4 animate-spin" />
                <h4 className="text-xl font-bold text-hesa-green mb-2 animate-pulse">Application Submitted!</h4>
                <p className="text-hesa-gray animate-fade-in">Our team will contact you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-hesa-gray mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-hesa-sage/30 rounded-lg focus:border-hesa-green focus:outline-none transition-all duration-300 hover:shadow-lg focus:shadow-xl focus:scale-105"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-hesa-gray mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-hesa-sage/30 rounded-lg focus:border-hesa-green focus:outline-none transition-all duration-300 hover:shadow-lg focus:shadow-xl focus:scale-105"
                      placeholder="+91 82470 44737"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-hesa-gray mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-hesa-sage/30 rounded-lg focus:border-hesa-green focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-semibold text-hesa-gray mb-2">
                    Village/District/State *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-hesa-sage/30 rounded-lg focus:border-hesa-green focus:outline-none transition-colors"
                    placeholder="e.g., Village Name, District, State"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-hesa-gray mb-2">
                    Tell us about your background
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-hesa-sage/30 rounded-lg focus:border-hesa-green focus:outline-none transition-all duration-300 hover:shadow-lg focus:shadow-xl focus:scale-105 resize-none"
                    placeholder="Share your experience, current occupation, and why you're interested in joining HESA..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-hesa-green to-hesa-lightGreen text-white py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:scale-105 animate-pulse"
                >
                  <Send size={20} className="animate-bounce" />
                  Apply for Franchise Partnership
                </button>

                <p className="text-sm text-hesa-gray text-center">
                  By submitting this form, you agree to our terms and conditions. We respect your privacy and will never share your information.
                </p>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl border-2 border-hesa-sage/30 hover:border-hesa-green hover:shadow-2xl transition-all duration-300 shadow-lg hover:scale-105 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="bg-hesa-green/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto animate-pulse">
                <Mail className="text-hesa-green animate-bounce" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-hesa-green text-center mb-4">
                Vamsi Udayagiri
              </h3>
              <p className="text-hesa-gray text-center mb-6">
                Founder & CEO, HESA Technologies
              </p>
              
              {/* Social Media Icons Below Title */}
              <div className="flex justify-center gap-4">
                <a
                  href="mailto:Hesaathi00@gmail.com"
                  className="group relative"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 animate-bounce">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-red-500 to-red-700 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                </a>
                
                <a
                  href="https://www.linkedin.com/in/vamsiudayagiri/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-700 to-blue-900 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 animate-bounce" style={{animationDelay: '0.2s'}}>
                    <Linkedin size={20} className="text-white" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-blue-700 to-blue-900 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                </a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-hesa-sage/30 hover:border-hesa-green hover:shadow-2xl transition-all duration-300 shadow-lg hover:scale-105 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="bg-hesa-green/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto animate-pulse">
                <Globe className="text-hesa-green" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-hesa-green text-center mb-4">
                HESA Technologies
              </h3>
              
              {/* Social Media Icons Inside Box */}
              <div className="flex justify-center gap-4 mb-6">
                <a
                  href="https://www.instagram.com/hesaofficial_1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 animate-bounce">
                    <Instagram size={24} className="text-white" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                </a>
                
                <a
                  href="https://www.facebook.com/people/HESA/61581521807091"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 animate-bounce" style={{animationDelay: '0.2s'}}>
                    <Facebook size={24} className="text-white" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                </a>
                
                <a
                  href="https://www.linkedin.com/company/hesa-technologies-pvt-ltd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-700 to-blue-900 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 animate-bounce" style={{animationDelay: '0.4s'}}>
                    <Linkedin size={24} className="text-white" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-blue-700 to-blue-900 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                </a>
                
                <a
                  href="mailto:Hesaathi00@gmail.com"
                  className="group relative"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 animate-bounce" style={{animationDelay: '0.6s'}}>
                    <Mail size={24} className="text-white" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-red-500 to-red-700 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                </a>
              </div>

              <div className="space-y-4">
                <a
                  href="https://hesa.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 text-hesa-gray hover:text-hesa-green transition-colors text-lg"
                >
                  <Globe size={20} />
                  <span>hesa.co</span>
                </a>
              </div>
            </div>

            {/* Quick Contact CTA */}
            <div className="bg-gradient-to-br from-hesa-green to-hesa-lightGreen text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: '0.6s'}}>
              <h3 className="text-xl font-bold mb-4 text-center animate-pulse">
                Need Immediate Assistance? 📞
              </h3>
              <p className="text-green-50 text-center mb-6 animate-fade-in">
                Call us directly for instant answers to your questions about franchise opportunities.
              </p>
              <a
                href="tel:+918247044737"
                onClick={() => trackCTAClick('Call Now', 'Contact Section')}
                className="block w-full bg-white text-hesa-green py-3 rounded-lg font-semibold text-center hover:bg-hesa-cream transition-all duration-300 hover:scale-105 animate-bounce"
              >
                Call Now: +91 82470 44737
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
