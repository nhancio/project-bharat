import { Heart, Linkedin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-hesa-blue via-hesa-blue to-hesa-lightBlue text-white py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img src="/footer-img.png" alt="" className="w-full h-full object-cover" />
      </div>
      
      <div className="w-full relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/heas-logo.jpeg" alt="HESA Logo" className="h-12 w-12 object-contain rounded-lg bg-white/10 p-1" />
              <h3 className="text-2xl font-bold">HESA</h3>
            </div>
            <p className="text-blue-200 leading-relaxed mb-4">
              Revolutionizing rural commerce through technology and community partnership.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/hesa-technologies-pvt-ltd"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-lg hover:bg-hesa-saffron/30 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="text-white" />
              </a>
              <a
                href="https://www.instagram.com/hesaofficial_1/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-lg hover:bg-hesa-saffron/30 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} className="text-white" />
              </a>
              <a
                href="https://www.facebook.com/people/HESA/61581521807091"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-lg hover:bg-hesa-saffron/30 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} className="text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection('about')}
                className="block text-blue-200 hover:text-hesa-saffron transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('why-hesa')}
                className="block text-blue-200 hover:text-hesa-saffron transition-colors"
              >
                Why HESA
              </button>
              <button
                onClick={() => scrollToSection('franchise')}
                className="block text-blue-200 hover:text-hesa-saffron transition-colors"
              >
                Franchise Model
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact</h4>
            <div className="space-y-2 text-blue-200">
              <p>ajay@hesaglobal.com</p>
              <p>marketing@hesaglobal.com</p>
              <p className="text-sm">Hyderabad, Telangana</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Project Bharath</h4>
            <p className="text-blue-200 leading-relaxed mb-3">
              Empowering rural India through innovative commerce solutions. 🇮🇳
            </p>
            <p className="text-blue-200 text-sm">
              <strong>1M+</strong> families impacted<br/>
              <strong>70,000+</strong> Hesaathis<br/>
              <strong>1Lac+</strong> villages<br/>
              <strong>8</strong> states
            </p>
          </div>
        </div>

        <div className="border-t border-blue-400/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-200 text-sm">
              &copy; {new Date().getFullYear()} HESA Technologies. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-blue-200 text-sm">
              <span>Made with</span>
              <Heart size={16} className="text-hesa-saffron fill-hesa-saffron" />
              <span>for Rural India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
