import { useState } from 'react';
import { Phone, Calendar, Check, Lightbulb } from 'lucide-react';
import CalculatorLeadCapture from './CalculatorLeadCapture';
import HVHZText from './HVHZText';

interface RoofSize {
  label: string;
  sqft: number;
}

interface RoofType {
  name: string;
  icon: string;
}

interface PricingTier {
  tier: 'Good' | 'Better' | 'Best';
  product: string;
  warranty: string;
  minPrice: number;
  maxPrice: number;
  features: string[];
}

interface PricingData {
  [key: string]: PricingTier[];
}

const roofSizes: RoofSize[] = [
  { label: 'Smaller', sqft: 1500 },
  { label: 'Average', sqft: 2000 },
  { label: 'Mid-Size', sqft: 2500 },
  { label: 'Large', sqft: 3500 },
  { label: 'Estate', sqft: 5000 },
];

const roofTypes: RoofType[] = [
  { name: 'Shingle', icon: '◢' },
  { name: 'Tile', icon: '◠' },
  { name: 'Metal', icon: '▬' },
  { name: 'Flat', icon: '▭' },
];

const pricingData: PricingData = {
  Shingle: [
    {
      tier: 'Good',
      product: 'Standard 3-Tab',
      warranty: '20-25 Year Warranty',
      minPrice: 4.5,
      maxPrice: 7.5,
      features: ['Cost-effective solution', 'Proven durability', 'Quick installation'],
    },
    {
      tier: 'Better',
      product: 'Architectural',
      warranty: '30-40 Year Warranty',
      minPrice: 7,
      maxPrice: 11,
      features: ['Enhanced curb appeal', 'Better wind resistance', 'Dimensional look'],
    },
    {
      tier: 'Best',
      product: 'Designer Premium',
      warranty: '50 Year - Lifetime Warranty',
      minPrice: 10,
      maxPrice: 16,
      features: ['Luxury aesthetics', 'Maximum durability', 'Best warranty coverage'],
    },
  ],
  Tile: [
    {
      tier: 'Good',
      product: 'Concrete Tile',
      warranty: '30-40 Year Warranty',
      minPrice: 12,
      maxPrice: 18,
      features: ['Classic Florida style', 'Standard underlayment', 'Proven durability'],
    },
    {
      tier: 'Better',
      product: 'Concrete Tile Enhanced',
      warranty: '40-50 Year Warranty',
      minPrice: 16,
      maxPrice: 24,
      features: ['Upgraded underlayments', 'Foam adhesive system', 'Superior wind resistance'],
    },
    {
      tier: 'Best',
      product: 'Clay or Composite Tile',
      warranty: 'Lifetime Warranty',
      minPrice: 22,
      maxPrice: 35,
      features: ['Premium materials', 'Timeless elegance', 'Maximum home value'],
    },
  ],
  Metal: [
    {
      tier: 'Good',
      product: 'Steel - Snap Lock',
      warranty: '25-30 Year Warranty',
      minPrice: 8,
      maxPrice: 13,
      features: ['Snap lock or nail fin system', 'Storm resistant', 'Low maintenance'],
    },
    {
      tier: 'Better',
      product: 'Steel or Aluminum w/ Kynar Finish',
      warranty: '40-50 Year Warranty',
      minPrice: 12,
      maxPrice: 19,
      features: ['Mechanically seamed panels', 'Kynar finish for durability', 'Superior corrosion resistance'],
    },
    {
      tier: 'Best',
      product: 'Aluminum Premium',
      warranty: 'Lifetime Warranty',
      minPrice: 18,
      maxPrice: 28,
      features: ['Mechanically seamed panels', 'Premium underlayment system', 'Ultimate longevity'],
    },
  ],
  Flat: [
    {
      tier: 'Good',
      product: 'Modified Bitumen',
      warranty: '15-20 Year Warranty',
      minPrice: 5,
      maxPrice: 9,
      features: ['Reliable protection', 'Cost-effective', 'Easy repairs'],
    },
    {
      tier: 'Better',
      product: 'TPO/PVC Membrane',
      warranty: '25-30 Year Warranty',
      minPrice: 8,
      maxPrice: 14,
      features: ['Energy efficient', 'UV resistant', 'Seamless coverage'],
    },
    {
      tier: 'Best',
      product: 'Enhanced Fastening TPO/PVC',
      warranty: '30+ Year Warranty',
      minPrice: 12,
      maxPrice: 20,
      features: ['Superior attachment system', 'Maximum wind uplift resistance', 'Best long-term performance'],
    },
  ],
};

const priceFactors = [
  'Roof pitch & accessibility',
  'Existing damage or rot',
  'Number of layers to remove',
  'Ventilation requirements',
  'Skylights & penetrations',
  'Code compliance upgrades',
  'Wind mitigation for insurance discounts',
  'Underlayment quality & type',
  'Installation method & fastening system',
  { text: 'Engineering requirements in ', hvhz: true, suffix: ' zones' },
  'Skilled crew & workmanship quality',
  'Roof flashings',
];

export default function RoofCalculator() {
  const [selectedSize, setSelectedSize] = useState<RoofSize>(roofSizes[2]);
  const [selectedType, setSelectedType] = useState<RoofType | null>(null);
  const [showLeadCapture, setShowLeadCapture] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSeeEstimate = () => {
    if (selectedType) {
      setShowLeadCapture(true);
      setTimeout(() => {
        document.getElementById('lead-capture')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const handleLeadSubmit = () => {
    setFormSubmitted(true);
    setTimeout(() => {
      document.getElementById('success-message')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const formatPrice = (pricePerSqft: number, sqft: number): string => {
    const total = pricePerSqft * sqft;
    return `$${Math.round(total / 1000) * 1000}`;
  };

  const currentPricing = selectedType ? pricingData[selectedType.name] : [];

  const getEstimatedPriceRange = () => {
    if (!selectedType) return { low: 0, high: 0 };
    const pricing = pricingData[selectedType.name];
    const lowestMin = pricing[0].minPrice * selectedSize.sqft;
    const highestMax = pricing[pricing.length - 1].maxPrice * selectedSize.sqft;
    return {
      low: Math.round(lowestMin / 1000) * 1000,
      high: Math.round(highestMax / 1000) * 1000,
    };
  };

  const estimatedPriceRange = getEstimatedPriceRange();

  return (
    <section id="calculator" className="relative bg-gradient-to-b from-black via-slate-900 to-black py-20 pt-44">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-red-600/10 border border-red-600/30 rounded-full px-4 py-1.5 mb-4">
            <span className="text-red-500 text-sm font-semibold uppercase tracking-wide">
              Free Estimate Tool
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Roof Cost Calculator
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Get an instant ballpark estimate for your new roof
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-slate-700/60 backdrop-blur-sm border border-slate-600/80 rounded-2xl p-8 shadow-[0_0_60px_rgba(0,0,0,0.5),0_0_20px_rgba(71,85,105,0.3)]">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-6">Step 1: Select Your Roof Size</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-4">
              {roofSizes.map((size) => (
                <button
                  key={size.label}
                  onClick={() => setSelectedSize(size)}
                  className={`p-4 rounded-lg border-3 transition-all duration-300 ${
                    selectedSize.label === size.label
                      ? 'border-red-600 bg-red-600/30 text-white shadow-[0_0_20px_rgba(220,38,38,0.4)] ring-2 ring-red-500/50 scale-105 relative z-10'
                      : 'border-slate-600 bg-slate-700/40 text-gray-400 hover:border-slate-500 hover:bg-slate-700/60 hover:text-gray-300 opacity-70 hover:opacity-90'
                  }`}
                  style={{
                    borderWidth: selectedSize.label === size.label ? '3px' : '2px'
                  }}
                >
                  <div className="font-semibold mb-1">{size.label}</div>
                  <div className="text-sm opacity-80">~{size.sqft.toLocaleString()} sq ft</div>
                </button>
              ))}
            </div>
            <div className="flex items-start gap-2 text-sm text-gray-400 bg-slate-900/50 rounded-lg p-3">
              <span className="text-lg">💡</span>
              <p>Not sure? Most homes in South Florida have 2,000 - 3,500 sq ft of roof area.</p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-6">Step 2: Select Roof Type</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {roofTypes.map((type) => (
                <button
                  key={type.name}
                  onClick={() => setSelectedType(type)}
                  className={`p-6 rounded-lg border-3 transition-all duration-300 ${
                    selectedType?.name === type.name
                      ? 'border-red-600 bg-red-600/30 text-white shadow-[0_0_20px_rgba(220,38,38,0.4)] ring-2 ring-red-500/50 scale-105 relative z-10'
                      : 'border-slate-600 bg-slate-700/40 text-gray-400 hover:border-slate-500 hover:bg-slate-700/60 hover:text-gray-300 opacity-70 hover:opacity-90'
                  }`}
                  style={{
                    borderWidth: selectedType?.name === type.name ? '3px' : '2px'
                  }}
                >
                  <div className="text-4xl mb-2">{type.icon}</div>
                  <div className="font-semibold">{type.name}</div>
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleSeeEstimate}
            disabled={!selectedType}
            className={`w-full py-4 rounded-full font-bold text-lg transition-all duration-300 ${
              selectedType
                ? 'bg-red-600 text-white hover:bg-red-700 shadow-lg hover:shadow-xl hover:scale-105'
                : 'bg-gray-700 text-gray-400 cursor-not-allowed'
            }`}
          >
            See My Estimate
          </button>
        </div>

        {showLeadCapture && !formSubmitted && selectedType && (
          <div id="lead-capture" className="mt-16 max-w-2xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-2xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Your Estimate is Ready!</h3>
                <p className="text-gray-400">Enter your details below to see your personalized estimate</p>
              </div>

              <CalculatorLeadCapture
                isOpen={true}
                onClose={() => setShowLeadCapture(false)}
                onSubmit={handleLeadSubmit}
                roofSize={selectedSize.label}
                roofSqft={selectedSize.sqft}
                roofType={selectedType.name}
                estimatedPriceLow={estimatedPriceRange.low}
                estimatedPriceHigh={estimatedPriceRange.high}
              />
            </div>
          </div>
        )}

        {formSubmitted && selectedType && (
          <div id="success-message" className="mt-16 space-y-16">
            <div className="max-w-3xl mx-auto bg-slate-800/50 backdrop-blur-sm border border-green-600/30 rounded-2xl p-8 shadow-2xl text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-600 rounded-full mb-6">
                <Check className="w-12 h-12 text-white" />
              </div>

              <p className="text-gray-400 text-sm uppercase tracking-wide mb-2">Your Estimated Range</p>
              <p className="text-4xl md:text-5xl font-bold text-white mb-2">
                ${Math.round(((estimatedPriceRange.low + estimatedPriceRange.high) / 2) * 0.85 / 1000) * 1000} — ${Math.round(((estimatedPriceRange.low + estimatedPriceRange.high) / 2) * 1.15 / 1000) * 1000}
              </p>

              <p className="text-gray-400 text-sm mb-6">
                *Final price confirmed after in-person inspection
              </p>

              <div className="bg-amber-900/20 border border-amber-600/40 rounded-lg p-4 mb-8">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <span className="font-semibold text-amber-400">Quality matters more than the number.</span> This estimate assumes a properly installed roofing system using code-compliant materials, correct flashing details, and <HVHZText variant="acronym" showIcon={false} />-level workmanship—not shortcut labor or 'lowest-bid' installs.
                </p>
              </div>

              <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-4 mb-6">
                <p className="text-white">
                  📞 We'll call within 1 hour of Business hours or if after hours, the very next day to schedule your <span className="text-red-500 font-semibold">FREE in-home consultation</span>
                </p>
              </div>

              <a
                href="tel:+17542275605"
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg mb-4"
              >
                Can't Wait? Call Now: (754) 227-5605
              </a>
            </div>

            <div className="text-center">
              <p className="text-xl text-gray-400 mb-8">
                Here's what you selected for your{' '}
                <span className="text-white font-semibold">{selectedSize.sqft.toLocaleString()} sq ft</span>{' '}
                <span className="text-white font-semibold">{selectedType.name}</span> roof
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {currentPricing.map((tier, index) => (
                <div
                  key={tier.tier}
                  className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border-2 transition-all duration-500 ${
                    tier.tier === 'Better'
                      ? 'border-red-600 shadow-2xl shadow-red-600/20 lg:-translate-y-4'
                      : 'border-slate-700'
                  }`}
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`,
                  }}
                >
                  {tier.tier === 'Better' && (
                    <div className="bg-red-600 text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  <div className="mb-6">
                    <div className="text-gray-400 text-sm font-semibold uppercase tracking-wide mb-2">
                      {tier.tier}
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">{tier.product}</h4>
                    <p className="text-gray-400 text-sm mb-4">{tier.warranty}</p>
                    <div className="text-3xl font-bold text-white">
                      {formatPrice(tier.minPrice, selectedSize.sqft)} — {formatPrice(tier.maxPrice, selectedSize.sqft)}
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300">
                        <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div
              className="bg-gradient-to-r from-amber-900/30 to-orange-900/30 border-l-4 border-amber-500 rounded-lg p-6"
              style={{
                animation: 'fadeInUp 0.6s ease-out 0.8s both',
              }}
            >
              <div className="flex items-start gap-4">
                <Lightbulb className="w-8 h-8 text-amber-500 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Why Such a Wide Range?</h3>
                  <p className="text-gray-300 mb-4">
                    Your actual price depends on factors we can only assess during an on-site inspection:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {priceFactors.map((factor, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-gray-300">
                        <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                        <span>
                          {typeof factor === 'string' ? (
                            factor
                          ) : (
                            <>
                              {factor.text}
                              <HVHZText variant="acronym" className="text-amber-400" />
                              {factor.suffix}
                            </>
                          )}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div
              className="text-center space-y-6"
              style={{
                animation: 'fadeInUp 0.6s ease-out 1s both',
              }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Get Your Exact Price — Free</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our roofing experts will provide a detailed, itemized quote during a free on-site inspection. No
                pressure, no obligation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold text-lg hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Schedule Free Inspection
                </button>
                <a
                  href="tel:+17542275605"
                  className="px-8 py-4 bg-slate-700 text-white rounded-lg font-semibold text-lg hover:bg-slate-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 pt-4">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-red-600" />
                  <span>Dual Licensed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-red-600" />
                  <span>Fully Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-red-600" />
                  <span>2,500+ Projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-red-600" />
                  <span>5-Star Rated</span>
                </div>
              </div>
            </div>

            <div className="text-center text-xs text-gray-500 max-w-4xl mx-auto">
              * Estimates are for informational purposes only and do not constitute a quote or contract. Actual pricing
              may vary based on roof condition, accessibility, local codes, material availability, and other factors
              determined during inspection.
            </div>

            <div
              className="max-w-4xl mx-auto mt-16"
              style={{
                animation: 'fadeInUp 0.6s ease-out 1.2s both',
              }}
            >
              <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700 rounded-2xl p-8 sm:p-10">
                <div className="flex items-start gap-4 mb-6">
                  <Lightbulb className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                      Next Steps After Your Roof Estimate
                    </h2>
                    <p className="text-zinc-300 leading-relaxed mb-4">
                      Your estimate provides a helpful starting point, but every roof is unique. Material condition, underlayment, ventilation, and local code requirements can all affect final pricing.
                    </p>
                    <p className="text-zinc-300 leading-relaxed mb-6">
                      If you'd like a more accurate assessment, schedule a free roof inspection with a dual-licensed roofing contractor — or explore how affordable monthly payment options can make upgrading your roof easier than expected.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/contact"
                    className="flex-1 px-6 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-center"
                  >
                    Schedule a Free Roof Inspection
                  </a>
                  <a
                    href="/easy-payments"
                    className="flex-1 px-6 py-4 bg-zinc-700 text-white rounded-lg font-semibold hover:bg-zinc-600 transition-all duration-300 text-center border border-zinc-600"
                  >
                    Explore Financing Options
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
