import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { trackCTAClick, trackFranchiseInterest } from '../utils/analytics';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 border-b-2 border-hesa-sage/20">
      <div className="max-w10xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <img src="/heas-logo.jpeg" alt="HESA Logo" className="h-16 w-16 object-contain rounded-lg" />
            <div className="flex flex-col">
              <span className="text-hesa-green font-bold text-xl">HESA</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-hesa-gray hover:text-hesa-green transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('why-hesa')}
              className="text-hesa-gray hover:text-hesa-green transition-colors font-medium"
            >
              Why HESA
            </button>
            <button
              onClick={() => scrollToSection('franchise')}
              className="text-hesa-gray hover:text-hesa-green transition-colors font-medium"
            >
              Franchise Model
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-hesa-gray hover:text-hesa-green transition-colors font-medium"
            >
              Contact
            </button>
            <button
              onClick={() => {
                trackCTAClick('Join Us', 'Navigation');
                trackFranchiseInterest('Navigation CTA');
                scrollToSection('contact');
              }}
              className="bg-gradient-to-r from-hesa-green to-hesa-lightGreen text-white px-6 py-2 rounded-md hover:shadow-lg transition-all"
            >
              Join Us
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-hesa-black"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-hesa-sage/30">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-3 py-2 text-hesa-gray hover:text-hesa-green hover:bg-hesa-cream transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('why-hesa')}
              className="block w-full text-left px-3 py-2 text-hesa-gray hover:text-hesa-green hover:bg-hesa-cream transition-colors"
            >
              Why HESA
            </button>
            <button
              onClick={() => scrollToSection('franchise')}
              className="block w-full text-left px-3 py-2 text-hesa-gray hover:text-hesa-green hover:bg-hesa-cream transition-colors"
            >
              Franchise Model
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 text-hesa-gray hover:text-hesa-green hover:bg-hesa-cream transition-colors"
            >
              Contact
            </button>
            <button
              onClick={() => {
                trackCTAClick('Join Us', 'Mobile Navigation');
                trackFranchiseInterest('Mobile Navigation CTA');
                scrollToSection('contact');
              }}
              className="block w-full text-left px-3 py-2 bg-gradient-to-r from-hesa-green to-hesa-lightGreen text-white hover:shadow-lg transition-all"
            >
              Join Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
