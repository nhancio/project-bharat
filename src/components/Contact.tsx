import { useState, useEffect } from 'react';
import { Linkedin, Instagram, Mail, Globe, Send, CheckCircle, Facebook } from 'lucide-react';
import { trackFormSubmission, trackCTAClick, trackContactFormInteraction } from '../utils/analytics';
import { sendLeadToGoogleSheets, type LeadData } from '../utils/emailService';
import { initEmailJS, sendFranchiseApplicationEmail } from '../utils/emailjsService';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    message: ''
  });

  // Initialize EmailJS on component mount and check configuration
  useEffect(() => {
    initEmailJS();
    
    // Check if EmailJS is properly configured (only in development)
    if (import.meta.env.DEV) {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      
      if (!serviceId || !templateId || !publicKey) {
        console.warn('⚠️ EmailJS environment variables are missing!');
        console.warn('Please ensure these are set in your .env file or Netlify environment variables:');
        console.warn('- VITE_EMAILJS_SERVICE_ID');
        console.warn('- VITE_EMAILJS_TEMPLATE_ID');
        console.warn('- VITE_EMAILJS_PUBLIC_KEY');
      } else {
        console.log('✅ EmailJS configuration detected');
      }
    }
  }, []);

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    // Remove any spaces, dashes, or other characters
    const cleanedPhone = phone.replace(/\D/g, '');
    // Check if it's exactly 10 digits and starts with 9, 8, 7, or 6
    const phoneRegex = /^[6789]\d{9}$/;
    return phoneRegex.test(cleanedPhone);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    let processedValue = value;

    // For phone input, only allow numeric digits and limit to 10 digits
    if (name === 'phone') {
      // Remove all non-numeric characters
      processedValue = value.replace(/\D/g, '');
      // Limit to 10 digits
      if (processedValue.length > 10) {
        processedValue = processedValue.slice(0, 10);
      }
    }
    
    setFormData({
      ...formData,
      [name]: processedValue
    });

    // Clear error for this field when user starts typing
    setErrors({
      ...errors,
      [name]: ''
    });

    // Real-time validation
    if (name === 'email' && processedValue && !validateEmail(processedValue)) {
      setErrors({
        ...errors,
        email: 'Please enter a valid email address'
      });
    } else if (name === 'phone' && processedValue) {
      if (processedValue.length > 0 && !validatePhone(processedValue)) {
        if (processedValue.length !== 10) {
          setErrors({
            ...errors,
            phone: 'Phone number must be exactly 10 digits'
          });
        } else if (!/^[6789]/.test(processedValue)) {
          setErrors({
            ...errors,
            phone: 'Phone number must start with 9, 8, 7, or 6'
          });
        } else {
          setErrors({
            ...errors,
            phone: 'Please enter a valid phone number'
          });
        }
      }
    }

    // Track form field interactions
    trackContactFormInteraction('field_focus', name);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {
      name: '',
      email: '',
      phone: '',
      location: '',
      message: ''
    };

    let isValid = true;

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Validate phone
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    } else if (!validatePhone(formData.phone)) {
      const cleanedPhone = formData.phone.replace(/\D/g, '');
      if (cleanedPhone.length !== 10) {
        newErrors.phone = 'Phone number must be exactly 10 digits';
      } else if (!/^[6789]/.test(cleanedPhone)) {
        newErrors.phone = 'Phone number must start with 9, 8, 7, or 6';
      } else {
        newErrors.phone = 'Please enter a valid phone number';
      }
      isValid = false;
    }

    // Validate location
    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
      isValid = false;
    }

    // Set errors and return if validation fails
    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Track form submission
    trackFormSubmission('Franchise Application Form');
    trackContactFormInteraction('form_submit');
    
    // Prepare lead data
    const leadData: LeadData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone.replace(/\D/g, ''), // Clean phone number
      location: formData.location,
      message: formData.message,
      timestamp: new Date().toLocaleString(),
      source: 'HESA Website Contact Form'
    };
    
    try {
      // Send email via EmailJS
      const emailResult = await sendFranchiseApplicationEmail({
        name: formData.name,
        email: formData.email,
        phone: formData.phone.replace(/\D/g, ''),
        location: formData.location,
        message: formData.message
      });

      // Also try to send to Google Sheets (optional, for backup)
      let sheetsSuccess = false;
      try {
        sheetsSuccess = await sendLeadToGoogleSheets(leadData);
      } catch (sheetsError) {
        console.warn('Google Sheets submission failed (non-critical):', sheetsError);
      }
      
      if (emailResult.success) {
        console.log('✅ Form submitted successfully via EmailJS:', leadData);
        setIsSubmitted(true);
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', phone: '', location: '', message: '' });
          setErrors({ name: '', email: '', phone: '', location: '', message: '' });
        }, 3000);
      } else {
        // EmailJS failed - show error to user instead of falling back to mailto
        console.error('❌ EmailJS failed:', emailResult.error);
        alert(`Failed to send email: ${emailResult.error}\n\nPlease check the browser console for details or contact support.`);
        throw new Error(emailResult.error || 'Failed to send email via EmailJS');
      }
      
    } catch (error: any) {
      console.error('❌ Error submitting form:', error);
      
      // Only use mailto as last resort if EmailJS completely fails
      // This should not happen in production if EmailJS is properly configured
      const errorMessage = error?.message || 'Unknown error occurred';
      
      // Show user-friendly error message
      const shouldUseMailto = confirm(
        `Unable to send email automatically.\n\nError: ${errorMessage}\n\nWould you like to send the email manually using your email client?`
      );
      
      if (shouldUseMailto) {
        const emailBody = `
New Franchise Application:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Location: ${formData.location}
Message: ${formData.message}

Submitted on: ${new Date().toLocaleString()}
        `;
        
        const mailtoLink = `mailto:ajay@hesaglobal.com?subject=New Franchise Application - ${formData.name}&body=${encodeURIComponent(emailBody)}`;
        window.open(mailtoLink);
      }
      
      // Don't show success message if EmailJS failed
      // User needs to know there was an issue
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-hesa-cream">
      <div className="w-full">
        <div className="text-center mb-12 sm:mb-16 px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-hesa-green/10 rounded-full mb-6 border border-hesa-sage/30 animate-pulse">
            <Mail size={20} className="text-hesa-green" />
            <span className="text-hesa-green font-semibold text-sm sm:text-base">Get Started Today</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-hesa-green mb-4 animate-fade-in">
            Ready to Transform Your Village?
          </h2>
          <p className="text-lg sm:text-xl text-hesa-gray max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.3s'}}>
            Join 70,000+ successful entrepreneurs. Fill out the form below and our team will contact you within 24 hours to discuss your franchise opportunity.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {/* Lead Capture Form */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-hesa-sage/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in">
            <h3 className="text-xl sm:text-2xl font-bold text-hesa-green mb-6 text-center animate-pulse">
              Apply for Franchise Partnership
            </h3>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-hesa-green to-hesa-lightGreen rounded-full flex items-center justify-center mx-auto animate-pulse shadow-2xl">
                    <CheckCircle size={48} className="text-white animate-bounce" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-hesa-saffron rounded-full flex items-center justify-center animate-ping">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-hesa-green mb-3 animate-fade-in">🎉 Application Submitted Successfully!</h4>
                <p className="text-hesa-gray text-lg mb-4 animate-fade-in">Thank you for your interest in joining HESA!</p>
                <div className="bg-gradient-to-r from-hesa-green/10 to-hesa-lightGreen/10 rounded-lg p-4 animate-fade-in">
                  <p className="text-hesa-green font-semibold">✅ Your application has been saved to our system</p>
                  <p className="text-hesa-gray text-sm mt-2">Our team will contact you within 24 hours to discuss your franchise opportunity.</p>
                </div>
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
                      className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all duration-300 ${
                        errors.name 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-hesa-sage/30 focus:border-hesa-green hover:shadow-lg focus:shadow-xl'
                      }`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
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
                      maxLength={10}
                      className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all duration-300 ${
                        errors.phone 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-hesa-sage/30 focus:border-hesa-green hover:shadow-lg focus:shadow-xl'
                      }`}
                      placeholder="9876543210"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                    {!errors.phone && formData.phone && (
                      <p className="text-hesa-gray text-xs mt-1">Enter 10 digits starting with 9, 8, 7, or 6</p>
                    )}
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
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all duration-300 ${
                      errors.email 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-hesa-sage/30 focus:border-hesa-green hover:shadow-lg focus:shadow-xl'
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
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
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all duration-300 ${
                      errors.location 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-hesa-sage/30 focus:border-hesa-green hover:shadow-lg focus:shadow-xl'
                    }`}
                    placeholder="e.g., Village Name, District, State"
                  />
                  {errors.location && (
                    <p className="text-red-500 text-sm mt-1">{errors.location}</p>
                  )}
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
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-hesa-green to-hesa-lightGreen text-white py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:scale-105 animate-pulse disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="animate-bounce" />
                      Apply for Franchise Partnership
                    </>
                  )}
                </button>

                <p className="text-sm text-hesa-gray text-center">
                  By submitting this form, you agree to our terms and conditions. We respect your privacy and will never share your information.
                </p>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-hesa-sage/30 hover:border-hesa-green hover:shadow-2xl transition-all duration-300 shadow-lg hover:scale-105 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="bg-hesa-green/10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto animate-pulse">
                <Mail className="text-hesa-green animate-bounce" size={24} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-hesa-green text-center mb-4">
                Contact Us
              </h3>
              <p className="text-hesa-gray text-center mb-6 text-sm sm:text-base">
                Get in touch with our team
              </p>
              
              {/* Email Icons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="mailto:ajay@hesaglobal.com"
                  className="group relative"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 animate-bounce mx-auto">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-red-500 to-red-700 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <div className="text-xs text-center mt-2 text-hesa-gray">ajay@hesaglobal.com</div>
                </a>
                
                <a
                  href="mailto:marketing@hesaglobal.com"
                  className="group relative"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 animate-bounce mx-auto" style={{animationDelay: '0.2s'}}>
                    <Mail size={20} className="text-white" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <div className="text-xs text-center mt-2 text-hesa-gray">marketing@hesaglobal.com</div>
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
                href="tel:+919676850926"
                onClick={() => trackCTAClick('Call Now', 'Contact Section')}
                className="block w-full bg-white text-hesa-green py-3 rounded-lg font-semibold text-center hover:bg-hesa-cream transition-all duration-300 hover:scale-105 animate-bounce"
              >
                Call Now: +91 9676850926
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
