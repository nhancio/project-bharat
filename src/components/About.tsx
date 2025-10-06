import { Target, Users, TrendingUp, Laptop2, ArrowRight, CheckCircle } from 'lucide-react';
import { trackCTAClick, trackFranchiseInterest } from '../utils/analytics';

export default function About() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-hesa-green/10 rounded-full border border-hesa-sage/30">
              <Target size={20} className="text-hesa-green" />
              <span className="text-hesa-green font-semibold">About Project Bharath</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-hesa-green leading-tight">
              The Future of Rural Commerce is Here
            </h2>
            
            <p className="text-lg sm:text-xl text-hesa-gray leading-relaxed">
              Project Bharath is India's most successful <span className="text-hesa-green font-bold">rural commerce franchise model</span>, 
              empowering entrepreneurs to build profitable businesses while serving their communities.
            </p>
            
            <p className="text-lg text-hesa-gray leading-relaxed">
              Our <span className="font-semibold text-hesa-earth">'phygital' approach</span> combines physical presence with digital innovation, 
              creating sustainable economic opportunities across 50,000+ villages. 🌾
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-hesa-green" size={20} />
                <span className="text-hesa-gray font-medium">Earn ₹50,000-2,00,000 monthly</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-hesa-green" size={20} />
                <span className="text-hesa-gray font-medium">Complete training and support</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-hesa-green" size={20} />
                <span className="text-hesa-gray font-medium">Proven business model</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-hesa-green" size={20} />
                <span className="text-hesa-gray font-medium">Territory protection</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => {
                  trackCTAClick('Start Your Journey Today', 'About Section');
                  trackFranchiseInterest('About CTA');
                  scrollToSection('franchise');
                }}
                className="group bg-gradient-to-r from-hesa-green to-hesa-lightGreen text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all flex items-center gap-2 shadow-lg"
              >
                Start Your Journey Today
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-hesa-sage/20 rounded-2xl p-4 border-2 border-hesa-green/30 overflow-hidden">
              <img 
                src="/hw-img1.jpg" 
                alt="Rural Commerce in Action" 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-hesa-green to-hesa-lightGreen text-white p-6 rounded-xl shadow-xl">
              <div className="text-3xl font-bold">45,000+</div>
              <div className="text-sm">Successful Partners</div>
            </div>
          </div>
        </div>

        {/* Why Choose HESA Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-hesa-green mb-4">
              Why 45,000+ Entrepreneurs Choose HESA
            </h3>
            <p className="text-xl text-hesa-gray max-w-3xl mx-auto">
              We provide everything you need to succeed in rural commerce
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-hesa-cream to-white p-8 rounded-xl border-2 border-hesa-sage/30 hover:border-hesa-green hover:shadow-lg transition-all">
              <div className="bg-hesa-green/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Laptop2 className="text-hesa-green" size={28} />
              </div>
              <h4 className="text-xl font-bold text-hesa-green mb-3">
                Complete Tech Stack
              </h4>
              <p className="text-hesa-gray leading-relaxed mb-4">
                Get access to our proprietary e-commerce platform, payment systems, and inventory management tools.
              </p>
              <ul className="space-y-2 text-sm text-hesa-gray">
                <li>• Mobile app for customers</li>
                <li>• Inventory management system</li>
                <li>• Payment processing</li>
                <li>• Analytics dashboard</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-hesa-cream to-white p-8 rounded-xl border-2 border-hesa-sage/30 hover:border-hesa-green hover:shadow-lg transition-all">
              <div className="bg-hesa-green/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-hesa-green" size={28} />
              </div>
              <h4 className="text-xl font-bold text-hesa-green mb-3">
                Training & Support
              </h4>
              <p className="text-hesa-gray leading-relaxed mb-4">
                Comprehensive training program and ongoing support to ensure your success.
              </p>
              <ul className="space-y-2 text-sm text-hesa-gray">
                <li>• 30-day intensive training</li>
                <li>• Dedicated account manager</li>
                <li>• 24/7 customer support</li>
                <li>• Marketing materials</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-hesa-cream to-white p-8 rounded-xl border-2 border-hesa-sage/30 hover:border-hesa-green hover:shadow-lg transition-all">
              <div className="bg-hesa-green/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="text-hesa-green" size={28} />
              </div>
              <h4 className="text-xl font-bold text-hesa-green mb-3">
                Proven Business Model
              </h4>
              <p className="text-hesa-gray leading-relaxed mb-4">
                Join a network that has generated ₹500Cr+ in revenue across 50,000+ villages.
              </p>
              <ul className="space-y-2 text-sm text-hesa-gray">
                <li>• Territory protection</li>
                <li>• Multiple revenue streams</li>
                <li>• Scalable operations</li>
                <li>• Brand recognition</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
