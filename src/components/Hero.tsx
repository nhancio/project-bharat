import { ArrowRight, Target, Star, Users, TrendingUp } from 'lucide-react';
import { trackCTAClick, trackFranchiseInterest } from '../utils/analytics';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-hesa-cream via-hesa-sage/10 to-hesa-cream overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-hesa-green rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-hesa-lightGreen rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-hesa-green/10 to-hesa-lightGreen/10 rounded-full mb-8 border-2 border-hesa-green/30 shadow-lg animate-glow hover:scale-105 transition-all duration-300">
            <Star size={20} className="text-hesa-saffron fill-hesa-saffron animate-spin" />
            <span className="text-hesa-green font-bold text-lg animate-pulse">Trusted by 45,000+ Rural Entrepreneurs</span>
          </div>

          {/* Main Headline - Problem-Solution Focused */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-hesa-green mb-6 leading-tight">
            Turn Your Village Into a 
            <span className="block text-hesa-saffron">Digital Commerce Hub</span>
          </h1>

          {/* Value Proposition */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-hesa-gray mb-6 max-w-4xl mx-auto leading-relaxed font-medium">
            Join India's fastest-growing rural commerce network and 
            <span className="text-hesa-green font-bold"> earn ₹50,000-2,00,000 monthly</span> 
            while serving your community
          </p>

          {/* Social Proof Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 max-w-4xl mx-auto">
            <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-md">
              <Users className="text-hesa-green" size={20} />
              <span className="text-hesa-gray font-semibold">45,000+ Partners</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-md">
              <TrendingUp className="text-hesa-green" size={20} />
              <span className="text-hesa-gray font-semibold">₹500Cr+ Revenue</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-md">
              <Target className="text-hesa-green" size={20} />
              <span className="text-hesa-gray font-semibold">50,000+ Villages</span>
            </div>
          </div>

          {/* Problem-Solution Statement */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 mb-12 max-w-4xl mx-auto shadow-xl border-2 border-hesa-sage/30">
            <p className="text-lg sm:text-xl text-hesa-gray mb-4">
              <span className="text-hesa-red font-semibold">Problem:</span> Rural India lacks access to quality products, fair prices, and modern services
            </p>
            <p className="text-lg sm:text-xl text-hesa-gray">
              <span className="text-hesa-green font-semibold">Solution:</span> Our franchise model brings e-commerce, financial services, and digital solutions directly to your doorstep
            </p>
          </div>

          {/* Offering Icons */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-2 bg-white/80 p-4 rounded-xl shadow-md hover:shadow-lg transition-all">
              <img src="/off_icon2.png" alt="E-Commerce" className="w-16 h-16 object-contain" />
              <span className="text-sm text-hesa-gray font-semibold">E-Commerce</span>
            </div>
            <div className="flex flex-col items-center gap-2 bg-white/80 p-4 rounded-xl shadow-md hover:shadow-lg transition-all">
              <img src="/off_icon3.png" alt="Agri Services" className="w-16 h-16 object-contain" />
              <span className="text-sm text-hesa-gray font-semibold">Agri Services</span>
            </div>
            <div className="flex flex-col items-center gap-2 bg-white/80 p-4 rounded-xl shadow-md hover:shadow-lg transition-all">
              <img src="/off_icon5.png" alt="Financial Services" className="w-16 h-16 object-contain" />
              <span className="text-sm text-hesa-gray font-semibold">Finance</span>
            </div>
            <div className="flex flex-col items-center gap-2 bg-white/80 p-4 rounded-xl shadow-md hover:shadow-lg transition-all">
              <img src="/off_icon7.png" alt="Digital Services" className="w-16 h-16 object-contain" />
              <span className="text-sm text-hesa-gray font-semibold">Digital Services</span>
            </div>
          </div>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              onClick={() => {
                trackCTAClick('Start Your Franchise Today', 'Hero Section');
                trackFranchiseInterest('Hero CTA');
                scrollToSection('franchise');
              }}
              className="group bg-gradient-to-r from-hesa-green to-hesa-lightGreen text-white px-10 py-5 rounded-xl font-bold text-xl hover:shadow-2xl transition-all flex items-center gap-3 shadow-xl hover:scale-105 transform"
            >
              Start Your Franchise Today
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => {
                trackCTAClick('See Success Stories', 'Hero Section');
                scrollToSection('testimonials');
              }}
              className="bg-white text-hesa-green border-3 border-hesa-green px-10 py-5 rounded-xl font-bold text-xl hover:bg-hesa-green hover:text-white transition-all shadow-xl hover:shadow-2xl hover:scale-105 transform"
            >
              See Success Stories
            </button>
          </div>

          {/* Urgency/Scarcity */}
          <div className="bg-gradient-to-r from-hesa-saffron/20 to-hesa-green/20 rounded-xl p-4 max-w-2xl mx-auto">
            <p className="text-hesa-gray font-semibold">
              ⚡ Limited spots available in your district - Apply now to secure your territory!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
