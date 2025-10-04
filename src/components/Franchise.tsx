import { Store, Package, TrendingUp, Users, CheckCircle, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Store,
    title: 'Apply to Join',
    description: 'Submit your interest to become a HESA franchise partner in your region.'
  },
  {
    icon: Package,
    title: 'Get Setup Support',
    description: 'Receive comprehensive training, infrastructure, and technology setup assistance.'
  },
  {
    icon: Users,
    title: 'Build Your Network',
    description: 'Connect with local communities and establish your presence in the market.'
  },
  {
    icon: TrendingUp,
    title: 'Grow Together',
    description: 'Scale your business with continuous support and access to expanding markets.'
  }
];

const benefits = [
  'Access to proven business model and technology platform',
  'Comprehensive training and ongoing support',
  'Marketing and brand support from HESA',
  'Fair commission structure and transparent pricing',
  'Part of India\'s largest rural commerce network',
  'Direct impact on community development'
];

export default function Franchise() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="franchise" className="py-20 px-4 sm:px-6 lg:px-8 bg-hesa-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-hesa-green mb-4">
            Franchise Model
          </h2>
          <p className="text-xl text-hesa-gray max-w-3xl mx-auto">
            Be part of HESA to join the q-commerce of the backbone of India 🇮🇳
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-hesa-green via-hesa-lightGreen to-hesa-green text-white p-10 rounded-2xl shadow-xl">
            <h3 className="text-3xl font-bold mb-6">
              Why Become a Franchise Partner?
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle size={24} className="flex-shrink-0 mt-1 text-hesa-saffron" />
                  <span className="text-lg leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
            <button
              onClick={scrollToContact}
              className="group mt-8 bg-white text-hesa-green px-8 py-4 rounded-lg font-semibold text-lg hover:bg-hesa-cream transition-all flex items-center gap-2 shadow-lg"
            >
              Get Started Today
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-hesa-green mb-8">
              How It Works
            </h3>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-6 bg-white rounded-xl border-2 border-hesa-sage/30 hover:border-hesa-green hover:shadow-lg transition-all"
                >
                  <div className="bg-hesa-green/10 w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0">
                    <step.icon className="text-hesa-green" size={28} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-bold text-hesa-saffron">STEP {index + 1}</span>
                    </div>
                    <h4 className="text-xl font-bold text-hesa-green mb-2">
                      {step.title}
                    </h4>
                    <p className="text-hesa-gray leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-hesa-earth to-hesa-earth/90 text-white p-12 rounded-2xl text-center shadow-xl">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Rural Commerce? 🌾
          </h3>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful Hesaathis who are making a difference in their communities while building sustainable businesses.
          </p>
          <button
            onClick={scrollToContact}
            className="group bg-gradient-to-r from-hesa-green to-hesa-lightGreen text-white px-10 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all inline-flex items-center gap-2 shadow-xl"
          >
            Contact Us to Learn More
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
