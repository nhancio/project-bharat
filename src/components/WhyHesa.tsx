import { Zap, Heart, Globe, Shield, Handshake, Award } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Phygital Innovation',
    description: 'Seamlessly bridging physical and digital commerce to serve rural communities effectively.'
  },
  {
    icon: Heart,
    title: '1 Million+ Families',
    description: 'Making a tangible impact on over a million families across rural India.'
  },
  {
    icon: Globe,
    title: '8 States Coverage',
    description: 'Expanding presence across 8 states with 70,000+ active Hesaathis partners.'
  },
  {
    icon: Shield,
    title: 'Fair Pricing',
    description: 'Ensuring transparent and fair prices for both consumers and partners.'
  },
  {
    icon: Handshake,
    title: 'Market Access',
    description: 'Connecting rural entrepreneurs with broader markets and opportunities.'
  },
  {
    icon: Award,
    title: 'Proven Model',
    description: 'Successfully tested and scaled business model with sustainable growth.'
  }
];

export default function WhyHesa() {
  return (
    <section id="why-hesa" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-hesa-cream to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-hesa-green mb-4">
            Why Partner with HESA?
          </h2>
          <p className="text-xl text-hesa-gray max-w-3xl mx-auto">
            Join a proven platform that's revolutionizing rural commerce and empowering communities across India
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-xl border-2 border-hesa-sage/30 hover:border-hesa-green transition-all hover:shadow-xl"
            >
              <div className="bg-hesa-green/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-hesa-green/20 transition-colors">
                <feature.icon className="text-hesa-green" size={32} />
              </div>
              <h3 className="text-xl font-bold text-hesa-green mb-3">
                {feature.title}
              </h3>
              <p className="text-hesa-gray leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-hesa-green to-hesa-lightGreen text-white p-12 rounded-2xl shadow-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="/heas-logo.jpeg" 
                  alt="HESA Technologies" 
                  className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                />
                <div>
                  <h3 className="text-3xl font-bold">
                    About HESA Technologies
                  </h3>
                  <p className="text-green-100 text-sm">Empowering Rural India</p>
                </div>
              </div>
              <p className="text-green-50 text-lg leading-relaxed mb-6">
                HESA Technologies is revolutionizing rural commerce by connecting traditional markets with modern digital solutions. We empower rural communities through technology, creating sustainable growth opportunities.
              </p>
              <p className="text-green-50 text-lg leading-relaxed">
                Our mission is to bridge the rural-urban divide and unlock the immense potential of India's village ecosystems. 🌾
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
                <div className="text-3xl font-bold text-hesa-saffron mb-2">$100B+</div>
                <div className="text-sm text-green-100">Market Potential</div>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
                <div className="text-3xl font-bold text-hesa-saffron mb-2">65M+</div>
                <div className="text-sm text-green-100">Households</div>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
                <div className="text-3xl font-bold text-hesa-saffron mb-2">70K+</div>
                <div className="text-sm text-green-100">Partners</div>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
                <div className="text-3xl font-bold text-hesa-saffron mb-2">8</div>
                <div className="text-sm text-green-100">States</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
