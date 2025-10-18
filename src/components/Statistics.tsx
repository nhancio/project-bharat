import { TrendingUp, Users, Activity, Heart, DollarSign, Globe } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    value: '$100B+',
    label: 'Total Market Size by 2027',
    description: 'Rural commerce growth projected'
  },
  {
    icon: Users,
    value: '65M+',
    label: 'Rural Households Connected',
    description: 'Expanding digital access'
  },
  {
    icon: Activity,
    value: '1Lac+',
    label: 'Villages Connected',
    description: 'Rural reach expansion'
  },
  {
    icon: Heart,
    value: '1M+',
    label: 'Families Impacted',
    description: 'Lives transformed'
  },
  {
    icon: Users,
    value: '70,000+',
    label: 'Hesaathis Across 8 States',
    description: 'Strong partner network'
  },
  {
    icon: DollarSign,
    value: '₹500Cr+',
    label: 'Revenue Generated',
    description: 'Total earnings by partners'
  }
];

export default function Statistics() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-hesa-earth to-hesa-earth/80">
      <div className="w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            🌾 Rural Commerce Growth 🌾
          </h2>
          <p className="text-xl text-amber-100">
            Projected impact and market reach across India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm border-2 border-white/20 p-8 rounded-xl hover:bg-white/15 hover:border-hesa-saffron/50 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="bg-hesa-saffron/30 p-3 rounded-lg group-hover:bg-hesa-saffron/50 transition-colors">
                  <stat.icon className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <div className="text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-amber-100 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-amber-200">
                    {stat.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
