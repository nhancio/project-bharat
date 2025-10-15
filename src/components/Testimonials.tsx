import { Star, Quote, MapPin, TrendingUp } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Bihar",
      role: "Franchise Partner",
      revenue: "₹1,80,000/month",
      image: "/vamsi.jpeg", // Using existing image as placeholder
      quote: "HESA changed my life completely. From earning ₹15,000 as a farmer to ₹1,80,000 monthly - I never thought this was possible in my village!",
      rating: 5,
      services: ["E-Commerce", "Financial Services"]
    },
    {
      name: "Priya Sharma",
      location: "Uttar Pradesh", 
      role: "Franchise Partner",
      revenue: "₹2,20,000/month",
      image: "/vamsi.jpeg", // Using existing image as placeholder
      quote: "The support from HESA team is incredible. They helped me set up everything and now I'm serving 15+ villages with pride.",
      rating: 5,
      services: ["Agri Services", "Digital Services"]
    },
    {
      name: "Suresh Patel",
      location: "Gujarat",
      role: "Franchise Partner", 
      revenue: "₹1,50,000/month",
      image: "/vamsi.jpeg", // Using existing image as placeholder
      quote: "My family is proud of what I've achieved. HESA gave me the tools and training to become a successful entrepreneur in my community.",
      rating: 5,
      services: ["E-Commerce", "Agri Services"]
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-hesa-cream to-white">
      <div className="max-w-7xl mx-auto">
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

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-xl border-2 border-hesa-sage/30 hover:border-hesa-green hover:shadow-2xl transition-all">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-hesa-saffron fill-hesa-saffron" />
                ))}
              </div>
              
              <Quote size={32} className="text-hesa-green/30 mb-4" />
              
              <p className="text-hesa-gray mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-hesa-green to-hesa-lightGreen flex items-center justify-center text-white font-bold text-lg animate-pulse">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-bold text-hesa-green">{testimonial.name}</h4>
                  <div className="flex items-center gap-1 text-hesa-gray text-sm">
                    <MapPin size={14} />
                    <span>{testimonial.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-hesa-green/10 to-hesa-lightGreen/10 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp size={16} className="text-hesa-green" />
                  <span className="text-sm font-semibold text-hesa-gray">Monthly Revenue</span>
                </div>
                <div className="text-2xl font-bold text-hesa-green">{testimonial.revenue}</div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {testimonial.services.map((service, i) => (
                    <span key={i} className="text-xs bg-hesa-green/20 text-hesa-green px-2 py-1 rounded-full">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
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
