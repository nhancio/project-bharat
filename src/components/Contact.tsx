import { Linkedin, Instagram, Mail, Globe } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-hesa-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-hesa-green mb-4">
            Reach Out
          </h2>
          <p className="text-xl text-hesa-gray">
            Connect with us and be part of the rural commerce revolution 🌾
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-2xl border-2 border-hesa-sage/30 hover:border-hesa-green hover:shadow-xl transition-all shadow-lg">
            <div className="bg-hesa-green/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Mail className="text-hesa-green" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-hesa-green text-center mb-4">
              Vamsi Udayagiri
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:vamsi@hesaglobal.com"
                className="flex items-center justify-center gap-3 text-hesa-gray hover:text-hesa-green transition-colors text-lg"
              >
                <Mail size={20} />
                <span>vamsi@hesaglobal.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/vamsi-udayagiri"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 text-hesa-gray hover:text-hesa-green transition-colors text-lg"
              >
                <Linkedin size={20} />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border-2 border-hesa-sage/30 hover:border-hesa-green hover:shadow-xl transition-all shadow-lg">
            <div className="bg-hesa-green/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Globe className="text-hesa-green" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-hesa-green text-center mb-4">
              HESA Technologies
            </h3>
            <div className="space-y-4">
              <a
                href="https://hesa.co"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 text-hesa-gray hover:text-hesa-green transition-colors text-lg"
              >
                <Globe size={20} />
                <span>hesa.co</span>
              </a>
              <a
                href="https://www.linkedin.com/company/hesa-technologies-pvt-ltd"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 text-hesa-gray hover:text-hesa-green transition-colors text-lg"
              >
                <Linkedin size={20} />
                <span>Company LinkedIn</span>
              </a>
              <a
                href="https://www.instagram.com/hesaofficial_1/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 text-hesa-gray hover:text-hesa-green transition-colors text-lg"
              >
                <Instagram size={20} />
                <span>@hesaofficial_1</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-hesa-green to-hesa-lightGreen text-white p-10 rounded-2xl max-w-3xl mx-auto shadow-xl">
            <h3 className="text-2xl font-bold mb-4">
              Have Questions? 🤝
            </h3>
            <p className="text-green-50 text-lg mb-6">
              Whether you're interested in becoming a franchise partner or want to learn more about Project Bharath, we're here to help.
            </p>
            <a
              href="mailto:vamsi@hesaglobal.com"
              className="inline-block bg-white text-hesa-green px-8 py-4 rounded-lg font-semibold text-lg hover:bg-hesa-cream transition-all shadow-lg"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
