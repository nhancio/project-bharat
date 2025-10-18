import { Star, Quote, MapPin, TrendingUp } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Anjaneyulu",
      location: "Siddipet",
      role: "Franchise Partner",
      revenue: "₹1,80,000/month",
      image: "/vamsi.jpeg",
      quote: "HESA changed my life completely. From earning ₹15,000 as a farmer to ₹1,80,000 monthly - I never thought this was possible in my village!",
      rating: 5,
      services: ["E-Commerce", "Financial Services"]
    },
    {
      name: "Pradeep",
      location: "Warangal", 
      role: "Franchise Partner",
      revenue: "₹2,20,000/month",
      image: "/vamsi.jpeg",
      quote: "The support from HESA team is incredible. They helped me set up everything and now I'm serving 15+ villages with pride.",
      rating: 5,
      services: ["Agri Services", "Digital Services"]
    },
    {
      name: "Harshal",
      location: "Hubli",
      role: "Franchise Partner", 
      revenue: "₹1,50,000/month",
      image: "/vamsi.jpeg",
      quote: "My family is proud of what I've achieved. HESA gave me the tools and training to become a successful entrepreneur in my community.",
      rating: 5,
      services: ["E-Commerce", "Agri Services"]
    },
    {
      name: "Anjaneyulu",
      location: "Mysore",
      role: "Franchise Partner",
      revenue: "₹1,95,000/month",
      image: "/vamsi.jpeg",
      quote: "Project Bharat has transformed our entire district. The digital services we provide are helping farmers and families like never before.",
      rating: 5,
      services: ["Digital Services", "Financial Services"]
    },
    {
      name: "Pradeep",
      location: "Hyderabad",
      role: "Franchise Partner",
      revenue: "₹2,50,000/month",
      image: "/vamsi.jpeg",
      quote: "Being part of HESA's network has been life-changing. I'm not just earning more, I'm making a real difference in my community.",
      rating: 5,
      services: ["E-Commerce", "Agri Services", "Digital Services"]
    },
    {
      name: "Harshal",
      location: "Siddipet",
      role: "Franchise Partner",
      revenue: "₹1,75,000/month",
      image: "/vamsi.jpeg",
      quote: "The training and support from HESA is unmatched. They helped me understand the business model and now I'm thriving as an entrepreneur.",
      rating: 5,
      services: ["Financial Services", "Digital Services"]
    },
    {
      name: "Rajesh",
      location: "Bangalore",
      role: "Franchise Partner",
      revenue: "₹2,10,000/month",
      image: "/vamsi.jpeg",
      quote: "Starting with HESA was the best decision of my life. The comprehensive training and ongoing support helped me build a successful business.",
      rating: 5,
      services: ["E-Commerce", "Agri Services"]
    },
    {
      name: "Priya",
      location: "Chennai",
      role: "Franchise Partner",
      revenue: "₹1,85,000/month",
      image: "/vamsi.jpeg",
      quote: "HESA's franchise model is perfect for rural entrepreneurs. I'm now serving 20+ villages and earning more than I ever dreamed possible.",
      rating: 5,
      services: ["Digital Services", "Financial Services"]
    },
    {
      name: "Suresh",
      location: "Pune",
      role: "Franchise Partner",
      revenue: "₹2,35,000/month",
      image: "/vamsi.jpeg",
      quote: "The technology platform is amazing. It's so easy to manage orders, track inventory, and serve customers across multiple villages.",
      rating: 5,
      services: ["E-Commerce", "Digital Services", "Agri Services"]
    },
    {
      name: "Lakshmi",
      location: "Vijayawada",
      role: "Franchise Partner",
      revenue: "₹1,65,000/month",
      image: "/vamsi.jpeg",
      quote: "As a woman entrepreneur, HESA gave me the confidence and tools to succeed. My community respects and trusts our services.",
      rating: 5,
      services: ["Financial Services", "Digital Services"]
    },
    {
      name: "Kumar",
      location: "Coimbatore",
      role: "Franchise Partner",
      revenue: "₹2,00,000/month",
      image: "/vamsi.jpeg",
      quote: "The financial services we provide are helping farmers get better loans and insurance. It's truly making a difference in rural India.",
      rating: 5,
      services: ["Financial Services", "Agri Services"]
    },
    {
      name: "Meera",
      location: "Kochi",
      role: "Franchise Partner",
      revenue: "₹1,90,000/month",
      image: "/vamsi.jpeg",
      quote: "HESA's support team is always there when I need help. The business model is sustainable and profitable for everyone involved.",
      rating: 5,
      services: ["E-Commerce", "Digital Services", "Financial Services"]
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-hesa-cream to-white">
      <div className="w-full">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-hesa-green/10 rounded-full mb-6 border border-hesa-sage/30">
            <Star size={20} className="text-hesa-saffron fill-hesa-saffron" />
            <span className="text-hesa-green font-semibold">Success Stories</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-hesa-green mb-6">
            Real Partners, Real Results
          </h2>
          <p className="text-xl text-hesa-gray max-w-3xl mx-auto">
            See how our franchise partners are transforming their lives and communities across rural India
          </p>
        </div>

        {/* Scrolling Testimonials */}
        <div className="testimonials-scroll-container mb-16">
          <div className="flex animate-scroll-right-to-left">
            {/* First set of testimonials */}
            {testimonials.map((testimonial, index) => (
              <div key={`first-${index}`} className="flex-shrink-0 w-72 sm:w-80 mx-2 sm:mx-4">
                <div className="bg-white p-6 rounded-2xl shadow-xl border-2 border-hesa-sage/30 hover:border-hesa-green hover:shadow-2xl transition-all h-full">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-hesa-saffron fill-hesa-saffron" />
                    ))}
                  </div>
                  
                  <Quote size={24} className="text-hesa-green/30 mb-4" />
                  
                  <p className="text-hesa-gray mb-4 leading-relaxed italic text-sm">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-hesa-green to-hesa-lightGreen flex items-center justify-center text-white font-bold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="font-bold text-hesa-green text-sm">{testimonial.name}</h4>
                      <div className="flex items-center gap-1 text-hesa-gray text-xs">
                        <MapPin size={12} />
                        <span>{testimonial.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-hesa-green/10 to-hesa-lightGreen/10 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp size={14} className="text-hesa-green" />
                      <span className="text-xs font-semibold text-hesa-gray">Monthly Revenue</span>
                    </div>
                    <div className="text-lg font-bold text-hesa-green">{testimonial.revenue}</div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {testimonial.services.map((service, i) => (
                        <span key={i} className="text-xs bg-hesa-green/20 text-hesa-green px-2 py-1 rounded-full">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless scrolling */}
            {testimonials.map((testimonial, index) => (
              <div key={`second-${index}`} className="flex-shrink-0 w-72 sm:w-80 mx-2 sm:mx-4">
                <div className="bg-white p-6 rounded-2xl shadow-xl border-2 border-hesa-sage/30 hover:border-hesa-green hover:shadow-2xl transition-all h-full">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-hesa-saffron fill-hesa-saffron" />
                    ))}
                  </div>
                  
                  <Quote size={24} className="text-hesa-green/30 mb-4" />
                  
                  <p className="text-hesa-gray mb-4 leading-relaxed italic text-sm">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-hesa-green to-hesa-lightGreen flex items-center justify-center text-white font-bold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="font-bold text-hesa-green text-sm">{testimonial.name}</h4>
                      <div className="flex items-center gap-1 text-hesa-gray text-xs">
                        <MapPin size={12} />
                        <span>{testimonial.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-hesa-green/10 to-hesa-lightGreen/10 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp size={14} className="text-hesa-green" />
                      <span className="text-xs font-semibold text-hesa-gray">Monthly Revenue</span>
                    </div>
                    <div className="text-lg font-bold text-hesa-green">{testimonial.revenue}</div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {testimonial.services.map((service, i) => (
                        <span key={i} className="text-xs bg-hesa-green/20 text-hesa-green px-2 py-1 rounded-full">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* Third set for even smoother scrolling */}
            {testimonials.map((testimonial, index) => (
              <div key={`third-${index}`} className="flex-shrink-0 w-72 sm:w-80 mx-2 sm:mx-4">
                <div className="bg-white p-6 rounded-2xl shadow-xl border-2 border-hesa-sage/30 hover:border-hesa-green hover:shadow-2xl transition-all h-full">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-hesa-saffron fill-hesa-saffron" />
                    ))}
                  </div>
                  
                  <Quote size={24} className="text-hesa-green/30 mb-4" />
                  
                  <p className="text-hesa-gray mb-4 leading-relaxed italic text-sm">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-hesa-green to-hesa-lightGreen flex items-center justify-center text-white font-bold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="font-bold text-hesa-green text-sm">{testimonial.name}</h4>
                      <div className="flex items-center gap-1 text-hesa-gray text-xs">
                        <MapPin size={12} />
                        <span>{testimonial.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-hesa-green/10 to-hesa-lightGreen/10 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp size={14} className="text-hesa-green" />
                      <span className="text-xs font-semibold text-hesa-gray">Monthly Revenue</span>
                    </div>
                    <div className="text-lg font-bold text-hesa-green">{testimonial.revenue}</div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {testimonial.services.map((service, i) => (
                        <span key={i} className="text-xs bg-hesa-green/20 text-hesa-green px-2 py-1 rounded-full">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real Partners Store Images */}
        <div className="mb-16">
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl border-2 border-hesa-sage/30 overflow-hidden hover:border-hesa-green hover:shadow-2xl transition-all">
              <img 
                src="/store/store1.jpeg" 
                alt="HESA Partner Store 1" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <p className="text-hesa-gray">A thriving HESA franchise serving multiple villages with comprehensive digital services.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl border-2 border-hesa-sage/30 overflow-hidden hover:border-hesa-green hover:shadow-2xl transition-all">
              <img 
                src="/store/store2.jpeg" 
                alt="HESA Partner Store 2" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <p className="text-hesa-gray">Modern setup providing e-commerce, financial services, and agricultural solutions.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl border-2 border-hesa-sage/30 overflow-hidden hover:border-hesa-green hover:shadow-2xl transition-all">
              <img 
                src="/store/store3.jpeg" 
                alt="HESA Partner Store 3" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <p className="text-hesa-gray">Community-focused franchise bringing digital transformation to rural areas.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-r from-hesa-green to-hesa-lightGreen rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Join 70,000+ Successful Partners</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold mb-2">₹500Cr+</div>
              <div className="text-green-100">Total Revenue Generated</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">1Lac+</div>
              <div className="text-green-100">Villages Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">1M+</div>
              <div className="text-green-100">Families Impacted</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">8</div>
              <div className="text-green-100">States Covered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
