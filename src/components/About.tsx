import { Target, Users, TrendingUp, Laptop2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-hesa-green mb-6">
              What is Project Bharath?
            </h2>
            <p className="text-lg text-hesa-gray mb-6 leading-relaxed">
              Project Bharath is a mission to <span className="text-hesa-green font-bold">empower the rural commerce space</span> with an Anchor partner and Franchise model to serve the Indian strong village ecosystems.
            </p>
            <p className="text-lg text-hesa-gray mb-6 leading-relaxed">
              We bridge the rural-urban gap through a <span className="font-semibold text-hesa-earth">'phygital' model</span>, combining physical presence with digital innovation to create sustainable economic opportunities in rural India. 🌾
            </p>
            <div className="flex flex-col gap-4 mt-8">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-hesa-saffron rounded-full"></div>
                <span className="text-hesa-gray font-medium">Fair prices and transparent services</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-hesa-saffron rounded-full"></div>
                <span className="text-hesa-gray font-medium">Market access for rural communities</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-hesa-saffron rounded-full"></div>
                <span className="text-hesa-gray font-medium">Technology-enabled growth opportunities</span>
              </div>
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
              <div className="text-sm">Hesaathis Strong</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-hesa-cream to-white p-8 rounded-xl border-2 border-hesa-sage/30 hover:border-hesa-green hover:shadow-lg transition-all">
            <div className="bg-hesa-green/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <Laptop2 className="text-hesa-green" size={28} />
            </div>
            <h3 className="text-xl font-bold text-hesa-green mb-3">
              Technology Innovation
            </h3>
            <p className="text-hesa-gray leading-relaxed">
              Cutting-edge solutions designed specifically for rural markets and communities.
            </p>
          </div>

          <div className="bg-gradient-to-br from-hesa-cream to-white p-8 rounded-xl border-2 border-hesa-sage/30 hover:border-hesa-green hover:shadow-lg transition-all">
            <div className="bg-hesa-green/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <Users className="text-hesa-green" size={28} />
            </div>
            <h3 className="text-xl font-bold text-hesa-green mb-3">
              Community Impact
            </h3>
            <p className="text-hesa-gray leading-relaxed">
              Empowering rural communities with sustainable growth and development opportunities.
            </p>
          </div>

          <div className="bg-gradient-to-br from-hesa-cream to-white p-8 rounded-xl border-2 border-hesa-sage/30 hover:border-hesa-green hover:shadow-lg transition-all">
            <div className="bg-hesa-green/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="text-hesa-green" size={28} />
            </div>
            <h3 className="text-xl font-bold text-hesa-green mb-3">
              Market Growth
            </h3>
            <p className="text-hesa-gray leading-relaxed">
              Driving unprecedented growth in rural commerce and digital adoption.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
