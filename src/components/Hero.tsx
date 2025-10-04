import { ArrowRight, Target } from 'lucide-react';

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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-hesa-green/10 rounded-full mb-8 border border-hesa-sage/30">
            <Target size={20} className="text-hesa-green" />
            <span className="text-hesa-green font-semibold">🌾 Empowering Rural India 🌾</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-hesa-green mb-6 leading-tight">
            Project Bharath
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl text-hesa-gray mb-8 max-w-4xl mx-auto leading-relaxed">
            Empowering Rural Commerce with an <span className="text-hesa-green font-bold">Anchor Partner</span> and <span className="text-hesa-green font-bold">Franchise Model</span>
          </p>

          <p className="text-lg sm:text-xl text-hesa-gray mb-8 max-w-3xl mx-auto">
            Serving the backbone of India's strong village ecosystems through technology, innovation, and community partnership
          </p>

          {/* Offering Icons */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 max-w-2xl mx-auto">
            <div className="flex flex-col items-center gap-2">
              <img src="/off_icon2.png" alt="E-Commerce" className="w-16 h-16 object-contain" />
              <span className="text-sm text-hesa-gray font-medium">E-Commerce</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img src="/off_icon3.png" alt="Agri Services" className="w-16 h-16 object-contain" />
              <span className="text-sm text-hesa-gray font-medium">Agri Services</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img src="/off_icon5.png" alt="Financial Services" className="w-16 h-16 object-contain" />
              <span className="text-sm text-hesa-gray font-medium">Finance</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img src="/off_icon7.png" alt="Digital Services" className="w-16 h-16 object-contain" />
              <span className="text-sm text-hesa-gray font-medium">Digital Services</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('franchise')}
              className="group bg-gradient-to-r from-hesa-green to-hesa-lightGreen text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all flex items-center gap-2 shadow-lg"
            >
              Become a Franchise Partner
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="bg-white text-hesa-green border-2 border-hesa-green px-8 py-4 rounded-lg font-semibold text-lg hover:bg-hesa-green hover:text-white transition-all shadow-lg hover:shadow-xl"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
