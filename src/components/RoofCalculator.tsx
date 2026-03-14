import { useState } from 'react';
import { Phone, Calendar, Check, Lightbulb, Layers, Grid3X3, Wrench, Minus, Shield, Home, Ruler, ClipboardCheck, TrendingDown, ArrowRight } from 'lucide-react';
import ChecklistDownloadForm from './ChecklistDownloadForm';
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
  { name: 'Shingle', icon: 'shingle' },
  { name: 'Tile', icon: 'tile' },
  { name: 'Metal', icon: 'metal' },
  { name: 'Flat', icon: 'flat' },
];

const RoofTypeIcon = ({ type }: { type: string }) => {
  const cls = "w-8 h-8";
  switch (type) {
    case 'shingle': return <Layers className={cls} />;
    case 'tile': return <Grid3X3 className={cls} />;
    case 'metal': return <Wrench className={cls} />;
    case 'flat': return <Minus className={cls} />;
    default: return null;
  }
};

const pricingData: PricingData = {
  Shingle: [
    { tier: 'Good', product: 'Standard 3-Tab', warranty: '20-25 Year Warranty', minPrice: 4.5, maxPrice: 7.5, features: ['Cost-effective solution', 'Proven durability', 'Quick installation'] },
    { tier: 'Better', product: 'Architectural', warranty: '30-40 Year Warranty', minPrice: 7, maxPrice: 11, features: ['Enhanced curb appeal', 'Better wind resistance', 'Dimensional look'] },
    { tier: 'Best', product: 'Designer Premium', warranty: '50 Year - Lifetime Warranty', minPrice: 10, maxPrice: 14, features: ['Luxury aesthetics', 'Maximum durability', 'Best warranty coverage'] },
  ],
  Tile: [
    { tier: 'Good', product: 'Concrete Tile', warranty: '30-40 Year Warranty', minPrice: 12, maxPrice: 18, features: ['Classic Florida style', 'Standard underlayment', 'Proven durability'] },
    { tier: 'Better', product: 'Concrete Tile Enhanced', warranty: '40-50 Year Warranty', minPrice: 16, maxPrice: 24, features: ['Upgraded underlayments', 'Foam adhesive system', 'Superior wind resistance'] },
    { tier: 'Best', product: 'Clay or Composite Tile', warranty: 'Lifetime Warranty', minPrice: 22, maxPrice: 30, features: ['Premium materials', 'Timeless elegance', 'Maximum home value'] },
  ],
  Metal: [
    { tier: 'Good', product: 'Steel - Snap Lock', warranty: '25-30 Year Warranty', minPrice: 8, maxPrice: 13, features: ['Snap lock or nail fin system', 'Storm resistant', 'Low maintenance'] },
    { tier: 'Better', product: 'Steel or Aluminum w/ Kynar Finish', warranty: '40-50 Year Warranty', minPrice: 12, maxPrice: 19, features: ['Mechanically seamed panels', 'Kynar finish for durability', 'Superior corrosion resistance'] },
    { tier: 'Best', product: 'Aluminum Premium', warranty: 'Lifetime Warranty', minPrice: 18, maxPrice: 25, features: ['Mechanically seamed panels', 'Premium underlayment system', 'Ultimate longevity'] },
  ],
  Flat: [
    { tier: 'Good', product: 'Modified Bitumen', warranty: '15-20 Year Warranty', minPrice: 5, maxPrice: 9, features: ['Reliable protection', 'Cost-effective', 'Easy repairs'] },
    { tier: 'Better', product: 'TPO/PVC Membrane', warranty: '25-30 Year Warranty', minPrice: 8, maxPrice: 14, features: ['Energy efficient', 'UV resistant', 'Seamless coverage'] },
    { tier: 'Best', product: 'Enhanced Fastening TPO/PVC', warranty: '30+ Year Warranty', minPrice: 12, maxPrice: 18, features: ['Superior attachment system', 'Maximum wind uplift resistance', 'Best long-term performance'] },
  ],
};

// Size labels for display
const sizeLabels: Record<number, string> = {
  1500: 'Smaller (~1,500 sq ft)',
  2000: 'Average (~2,000 sq ft)',
  2500: 'Mid-Size (~2,500 sq ft)',
  3500: 'Large (~3,500 sq ft)',
  5000: 'Estate (~5,000 sq ft)',
};

function formatPrice(n: number): string {
  return `$${n.toLocaleString()}`;
}

export default function RoofCalculator() {
  const [selectedSize, setSelectedSize] = useState<RoofSize>(roofSizes[2]);
  const [selectedType, setSelectedType] = useState<RoofType | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleSeeEstimate = () => {
    if (selectedType) {
      setShowResults(true);
      setTimeout(() => {
        document.getElementById('results-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  // Price calculations — use tier midpoints for a realistic spread
  const getBasicPrice = () => {
    if (!selectedType) return 0;
    const pricing = pricingData[selectedType.name];
    const avgPerSqFt = (pricing[0].minPrice + pricing[0].maxPrice) / 2;
    return Math.round((avgPerSqFt * selectedSize.sqft) / 1000) * 1000;
  };

  const getUpgradedPrice = () => {
    if (!selectedType) return 0;
    const pricing = pricingData[selectedType.name];
    const best = pricing[pricing.length - 1];
    const avgPerSqFt = (best.minPrice + best.maxPrice) / 2;
    return Math.round((avgPerSqFt * selectedSize.sqft) / 1000) * 1000;
  };

  // Insurance estimates (gentle curve for home size)
  const sizeFactor = 0.6 + 0.4 * (selectedSize.sqft / 2500);
  const insBasicLo = Math.round(6800 * sizeFactor / 100) * 100;
  const insBasicHi = Math.round(9200 * sizeFactor / 100) * 100;
  const insUpLo = Math.round(3800 * sizeFactor / 100) * 100;
  const insUpHi = Math.round(5400 * sizeFactor / 100) * 100;

  // Lifetime savings
  const annualSaveMid = ((insBasicLo + insBasicHi) / 2) - ((insUpLo + insUpHi) / 2);
  const saveLo = Math.round(annualSaveMid * 0.75 * 25 / 1000) * 1000;
  const saveHi = Math.round(annualSaveMid * 1.25 * 25 / 1000) * 1000;

  // Financing
  const basicPrice = getBasicPrice();
  const upgradedPrice = getUpgradedPrice();
  const basicMonthly = Math.round(basicPrice / 120);
  const upgradedMonthly = Math.round(upgradedPrice / 120);
  const monthlyDiff = upgradedMonthly - basicMonthly;
  const insSavingsMonthly = Math.round((insBasicLo - insUpHi) / 12);

  const currentPricing = selectedType ? pricingData[selectedType.name] : [];

  return (
    <section id="calculator" className="relative bg-gradient-to-b from-black via-slate-900 to-black py-20 pt-44">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-red-600/10 border border-red-600/30 rounded-full px-4 py-1.5 mb-4">
            <span className="text-red-500 text-sm font-semibold uppercase tracking-wide">Free Estimate Tool</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">Roof Cost Calculator</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Get an instant ballpark estimate for your new roof — no contact info required</p>
        </div>

        {/* Calculator Steps */}
        <div className="max-w-5xl mx-auto bg-slate-700/60 backdrop-blur-sm border border-slate-600/80 rounded-2xl p-8 shadow-[0_0_60px_rgba(0,0,0,0.5),0_0_20px_rgba(71,85,105,0.3)]">
          {/* Step 1 */}
          <div className="mb-8">
            <h3 className="text-3xl font-extrabold mb-6 flex items-center gap-3">
              <span className="text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]">Step 1:</span>
              <span className="text-white">Select Your Roof Size</span>
            </h3>
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
                  style={{ borderWidth: selectedSize.label === size.label ? '3px' : '2px' }}
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

          {/* Step 2 */}
          <div className="mb-8">
            <h3 className="text-3xl font-extrabold mb-6 flex items-center gap-3">
              <span className="text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]">Step 2:</span>
              <span className="text-white">Select Roof Type</span>
            </h3>
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
                  style={{ borderWidth: selectedType?.name === type.name ? '3px' : '2px' }}
                >
                  <div className="text-4xl mb-2"><RoofTypeIcon type={type.icon} /></div>
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

        {/* ================================================================ */}
        {/* RESULTS — UNGATED: Everything below shows immediately on click   */}
        {/* ================================================================ */}
        {showResults && selectedType && (
          <div id="results-section" className="mt-16 space-y-12 max-w-4xl mx-auto" style={{ animation: 'fadeInUp 0.6s ease-out' }}>

            {/* ============================================ */}
            {/* SPLIT PRICE DISPLAY: Basic vs Insurance-Opt  */}
            {/* ============================================ */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">
              {/* Header */}
              <div className="px-8 pt-8 pb-4 text-center">
                <p className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-1">Your Estimated Roof Replacement Cost</p>
                <p className="text-gray-500 text-sm">{sizeLabels[selectedSize.sqft]} · {selectedType.name} · Broward / Palm Beach County</p>
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  {['HVHZ Compliant', 'Includes Tear-Off', 'Permit & Inspection', 'Manufacturer Warranty'].map(chip => (
                    <span key={chip} className="bg-white/5 border border-slate-700 text-gray-500 text-xs px-3 py-1 rounded-full">{chip}</span>
                  ))}
                </div>
              </div>

              {/* The Split */}
              <div className="grid md:grid-cols-2 gap-0 mx-6 relative">
                {/* Basic */}
                <div className="bg-red-600/5 border border-red-600/15 md:rounded-l-xl md:rounded-r-none rounded-t-xl md:rounded-t-none md:rounded-tl-xl p-6 text-center md:border-r-0">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-red-500 mb-1">Lower End</p>
                  <p className="text-sm font-semibold text-gray-400 mb-3">Basic Code-Minimum Roof</p>
                  <p className="text-4xl font-extrabold text-white mb-1">{formatPrice(basicPrice)}</p>
                  <p className="text-xs text-gray-600 mb-5">Passes inspection. That's it.</p>
                  <div className="border-t border-white/5 pt-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-1">Est. Annual Insurance</p>
                    <p className="text-xl font-extrabold text-red-500">{formatPrice(insBasicLo)} – {formatPrice(insBasicHi)}/yr</p>
                    <p className="text-xs text-gray-600 mt-1">Minimal wind mitigation credits</p>
                  </div>
                </div>

                {/* VS badge */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 bg-slate-800 border-2 border-slate-600 rounded-full flex items-center justify-center z-10 hidden md:flex">
                  <span className="text-xs font-extrabold text-gray-500">VS</span>
                </div>

                {/* Upgraded */}
                <div className="bg-green-600/5 border border-green-600/15 md:rounded-r-xl md:rounded-l-none rounded-b-xl md:rounded-b-none md:rounded-br-xl p-6 text-center md:border-l-0">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-green-500 mb-1">Higher End</p>
                  <p className="text-sm font-semibold text-gray-400 mb-3">Insurance-Optimized Roof</p>
                  <p className="text-4xl font-extrabold text-white mb-1">{formatPrice(upgradedPrice)}</p>
                  <p className="text-xs text-gray-600 mb-5">Built to maximize insurance discounts</p>
                  <div className="border-t border-white/5 pt-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-1">Est. Annual Insurance</p>
                    <p className="text-xl font-extrabold text-green-500">{formatPrice(insUpLo)} – {formatPrice(insUpHi)}/yr</p>
                    <p className="text-xs text-gray-600 mt-1">Full wind mitigation credits applied</p>
                  </div>
                </div>
              </div>

              {/* Gradient bar */}
              <div className="mx-6 h-1.5 rounded-full bg-gradient-to-r from-red-500 via-amber-500 to-green-500 mt-0" />

              {/* Savings strip */}
              <div className="mx-6 mt-4 bg-green-600/8 border border-green-600/20 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
                <span className="text-2xl font-extrabold text-green-400 whitespace-nowrap">Save {formatPrice(saveLo)} – {formatPrice(saveHi)}</span>
                <span className="text-sm text-gray-400">in insurance premiums over the life of your roof. <strong className="text-gray-300">The roof that costs more upfront costs far less over time.</strong></span>
              </div>

              {/* Insight text + CTA */}
              <div className="px-8 pb-8 pt-6 text-center">
                <p className="text-sm text-gray-500 max-w-2xl mx-auto mb-2 leading-relaxed">
                  The lower price gets you a legal roof. The higher price gets you a roof that <span className="text-amber-400 font-semibold">pays you back every year</span> through lower insurance premiums. The difference is often just <strong className="text-gray-300">{formatPrice(upgradedPrice - basicPrice)} upfront</strong> — but the insurance gap starts day one and only grows.
                </p>
                <p className="text-sm text-gray-500 max-w-2xl mx-auto mb-8 leading-relaxed">
                  Which upgrades make sense for <strong className="text-gray-300">your</strong> home? That depends on what's already in your attic — and only a proper inspection can tell you.
                </p>

                <div className="bg-red-600/5 border border-red-600/20 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Want Your Exact Number — and Your Exact Savings?</h3>
                  <p className="text-sm text-gray-400 mb-5 max-w-xl mx-auto leading-relaxed">
                    A free on-site inspection lets us get into your attic, evaluate your structural connections, and tell you exactly which upgrades will lower your insurance the most. You'll leave with <strong className="text-white">one firm price</strong>, a custom insurance savings estimate, and zero obligation.
                  </p>
                  <div className="flex flex-wrap justify-center gap-5 mb-6 text-sm text-gray-300">
                    <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" />100% free, no obligation</span>
                    <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" />Quote locked in for 90 days</span>
                    <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" />Full wind mitigation evaluation</span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a href="/contact/" className="px-8 py-4 bg-red-600 text-white rounded-lg font-bold text-base hover:bg-red-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2">
                      <Calendar className="w-5 h-5" />Schedule Free Inspection
                    </a>
                    <a href="tel:+17542275605" className="px-8 py-4 bg-transparent border-2 border-slate-600 text-gray-300 rounded-lg font-semibold text-base hover:border-gray-400 hover:text-white transition-all flex items-center justify-center gap-2">
                      <Phone className="w-5 h-5" />(754) 227-5605
                    </a>
                  </div>
                  <p className="text-gray-600 text-xs mt-4">Or call us directly — we pick up 24/7, 365 days a year</p>
                </div>
              </div>
            </div>

            {/* ============================================ */}
            {/* INSURANCE DEEP-DIVE                          */}
            {/* ============================================ */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden shadow-2xl" style={{ animation: 'fadeInUp 0.6s ease-out 0.2s both' }}>
              <div className="bg-gradient-to-r from-slate-800 to-blue-900/20 px-8 pt-7 pb-5 border-b border-slate-700">
                <div className="inline-block bg-amber-600/10 border border-amber-600/30 rounded-full px-3 py-0.5 mb-3">
                  <span className="text-amber-400 text-xs font-bold uppercase tracking-wide">Why the Insurance Gap Is So Large</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">It Comes Down to Four Things Insurers Check</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Your wind mitigation inspection form (OIR-B1-1802) determines your premium. Here's what separates a <strong className="text-amber-400">{formatPrice(insBasicHi)}/yr policy</strong> from a <strong className="text-amber-400">{formatPrice(insUpLo)}/yr policy</strong>.
                </p>
              </div>
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {/* Basic features */}
                  <div className="bg-red-600/5 border border-red-600/10 rounded-xl p-5">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-red-500 mb-3">Basic Code-Minimum Roof</p>
                    <ul className="space-y-2">
                      {['Standard nail pattern only', 'No secondary water barrier', 'Basic underlayment', 'Existing roof-to-wall connections', 'Minimal or no mitigation credits'].map(item => (
                        <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
                          <span className="text-red-500 font-bold text-xs mt-0.5">✗</span>{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Upgraded features */}
                  <div className="bg-green-600/5 border border-green-600/10 rounded-xl p-5">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-green-500 mb-3">Insurance-Optimized Roof</p>
                    <ul className="space-y-2">
                      {['Enhanced HVHZ fastening pattern', 'Secondary water barrier (SWB)', 'Impact-rated underlayment', 'Documented hurricane straps/clips', 'Maximum wind mitigation credits'].map(item => (
                        <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
                          <span className="text-green-500 font-bold text-xs mt-0.5">✓</span>{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Lifetime savings */}
                <div className="bg-green-600/8 border border-green-600/20 rounded-xl p-5 text-center mb-6">
                  <p className="text-xs text-gray-400 mb-1">Estimated Lifetime Insurance Savings (25 Years)</p>
                  <p className="text-3xl font-extrabold text-green-400">{formatPrice(saveLo)} – {formatPrice(saveHi)}</p>
                  <p className="text-xs text-gray-500 mt-2 max-w-md mx-auto">
                    Based on <strong className="text-gray-400">{formatPrice(Math.round(annualSaveMid * 0.75))}-{formatPrice(Math.round(annualSaveMid * 1.25))}/yr in savings</strong> at today's rates. Florida premiums have increased 40-60% since 2020.
                  </p>
                </div>

                <p className="text-sm text-gray-500 leading-relaxed mb-3">
                  The upfront cost difference is often just <strong className="text-gray-300">{formatPrice(upgradedPrice - basicPrice)}</strong>. But the insurance savings start immediately and compound every year. You're not just buying a better roof — <span className="text-amber-400 font-semibold">you're locking in lower premiums for the next 20-30 years</span>.
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  The key is knowing which upgrades matter for <em>your</em> home and <em>your</em> insurance carrier. That requires getting into your attic and evaluating what you have versus what you need.
                </p>
              </div>
            </div>

            {/* ============================================ */}
            {/* WHAT WE CHECK DURING INSPECTION               */}
            {/* ============================================ */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-2xl" style={{ animation: 'fadeInUp 0.6s ease-out 0.3s both' }}>
              <h3 className="text-xl font-bold text-white mb-1">What We Check During a Free Roof Inspection</h3>
              <p className="text-sm text-gray-500 mb-6">A thorough inspection takes 45-60 minutes and covers things no calculator can see.</p>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {[
                  { icon: Home, title: 'Attic & Structural Connections', desc: 'We get into your attic to inspect hurricane straps, clips, and roof-to-wall connections — the #1 factor in your wind mitigation report.', why: 'Determines your biggest insurance discount' },
                  { icon: Shield, title: 'Secondary Water Barrier (SWB)', desc: 'We check if your roof has — or can accommodate — a sealed SWB. Without one, some insurers won\'t even write a policy in HVHZ areas.', why: 'Required by many FL insurers for coverage' },
                  { icon: Ruler, title: 'Decking Condition & Roof Pitch', desc: 'Rotted or damaged plywood must be replaced before a new roof goes on. We measure pitch, check decking, and identify hidden damage.', why: 'Hidden costs that change your real price' },
                  { icon: ClipboardCheck, title: 'Code Requirements & Permitting', desc: 'Your municipality may have requirements beyond the Florida Building Code. We know the local rules for every city in Broward and Palm Beach.', why: 'Avoid failed inspections and do-overs' },
                ].map(item => (
                  <div key={item.title} className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-5">
                    <item.icon className="w-7 h-7 text-gray-500 mb-3" />
                    <h4 className="text-sm font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed mb-2">{item.desc}</p>
                    <p className="text-xs text-amber-400 font-semibold">{item.why}</p>
                  </div>
                ))}
              </div>

              <div className="bg-amber-600/5 border border-amber-600/15 rounded-xl p-5">
                <p className="text-sm text-gray-400 leading-relaxed">
                  <strong className="text-amber-400">Why this matters:</strong> Many contractors quote a roof from the driveway and never step foot in your attic. That means they're guessing on your structural connections, guessing on your decking, and they're definitely not telling you which upgrades will lower your insurance. When you get a quote without a proper inspection, you're comparing incomplete numbers.
                </p>
              </div>
            </div>

            {/* ============================================ */}
            {/* SELLING YOUR HOME                             */}
            {/* ============================================ */}
            <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-6" style={{ animation: 'fadeInUp 0.6s ease-out 0.35s both' }}>
              <h4 className="text-base font-bold text-white mb-2">Planning to Sell Your Home?</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                Even if you're not staying long-term, your roof choice affects the sale. Buyers who need a mortgage also need homeowners insurance — and their insurer will look at the same wind mitigation factors. A roof <strong className="text-red-400">without a secondary water barrier or proper hurricane straps</strong> can make the home harder to insure, which can delay or kill a deal. A clean wind mitigation report with full credits makes your home more attractive to buyers and their lenders.
              </p>
            </div>

            {/* ============================================ */}
            {/* FINANCING BRIDGE                              */}
            {/* ============================================ */}
            <div className="bg-gradient-to-br from-slate-800/60 to-blue-900/20 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-2xl text-center" style={{ animation: 'fadeInUp 0.6s ease-out 0.4s both' }}>
              <h3 className="text-xl font-bold text-white mb-1">The Upgrade Pays for Itself — Here's the Math</h3>
              <p className="text-sm text-gray-500 mb-6">See what the difference actually looks like month to month.</p>

              <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center max-w-lg mx-auto mb-6">
                <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-5 text-center">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Basic Roof</p>
                  <p className="text-3xl font-extrabold text-white">{formatPrice(basicMonthly)}</p>
                  <p className="text-xs text-gray-600">per month (financed)</p>
                </div>
                <ArrowRight className="w-6 h-6 text-gray-600" />
                <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-5 text-center">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-green-500 mb-2">Insurance-Optimized</p>
                  <p className="text-3xl font-extrabold text-white">{formatPrice(upgradedMonthly)}</p>
                  <p className="text-xs text-gray-600">per month (financed)</p>
                </div>
              </div>

              <div className="bg-green-600/8 border border-green-600/20 rounded-xl p-5 max-w-lg mx-auto mb-6">
                <p className="text-2xl font-extrabold text-green-400">+{formatPrice(monthlyDiff)}/mo</p>
                <p className="text-sm text-gray-400">more for the upgraded roof</p>
                <p className="text-xs text-gray-500 mt-1">But you save ~{formatPrice(insSavingsMonthly)}/mo in lower insurance premiums</p>
              </div>

              <p className="text-sm text-gray-500 max-w-xl mx-auto mb-6 text-left leading-relaxed">
                <strong className="text-gray-300">The insurance savings are larger than the extra monthly payment.</strong> That means an upgraded roof with financing actually puts money back in your pocket from month one. And as Florida rates keep climbing, those savings only grow.
              </p>

              <a href="/easy-payments/" className="inline-block px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-xl font-semibold hover:bg-blue-600/10 hover:text-white hover:border-blue-400 transition-all">
                Explore Financing Options <ArrowRight className="w-4 h-4 inline ml-1" />
              </a>
            </div>

            {/* ============================================ */}
            {/* GOOD / BETTER / BEST TIERS                    */}
            {/* ============================================ */}
            <div style={{ animation: 'fadeInUp 0.6s ease-out 0.5s both' }}>
              <div className="text-center mb-8">
                <p className="text-xl text-gray-400">
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
                    style={{ animation: `fadeInUp 0.6s ease-out ${0.6 + index * 0.15}s both` }}
                  >
                    {tier.tier === 'Better' && (
                      <div className="bg-red-600 text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full inline-block mb-4">Most Popular</div>
                    )}
                    <div className="mb-6">
                      <div className="text-gray-400 text-sm font-semibold uppercase tracking-wide mb-2">{tier.tier}</div>
                      <h4 className="text-2xl font-bold text-white mb-2">{tier.product}</h4>
                      <p className="text-gray-400 text-sm mb-4">{tier.warranty}</p>
                      <div className="text-3xl font-bold text-white">
                        {formatPrice(Math.round((tier.minPrice * selectedSize.sqft) / 1000) * 1000)} — {formatPrice(Math.round((tier.maxPrice * selectedSize.sqft) / 1000) * 1000)}
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
            </div>

            {/* ============================================ */}
            {/* FINAL CTA                                     */}
            {/* ============================================ */}
            <div className="bg-gradient-to-br from-red-900/20 to-slate-800/50 border-2 border-red-600/20 rounded-2xl p-10 text-center shadow-2xl" style={{ animation: 'fadeInUp 0.6s ease-out 1s both' }}>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">Ready to Know Your Real Number?</h3>
              <p className="text-base text-gray-400 max-w-xl mx-auto mb-6 leading-relaxed">
                The calculator gives you the range. The insurance math gives you the <em>why</em>. But the only way to get <strong className="text-white">your exact price, your exact savings, and your exact monthly payment</strong> is a free on-site inspection.
              </p>
              <div className="flex flex-wrap justify-center gap-5 mb-6 text-sm text-gray-300">
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" />Free inspection, no obligation</span>
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" />Price locked for 90 days</span>
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" />Full wind mitigation evaluation</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="/contact/" className="px-10 py-4 bg-red-600 text-white rounded-lg font-bold text-lg hover:bg-red-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5" />Schedule Your Free Inspection
                </a>
                <a href="tel:+17542275605" className="px-8 py-4 bg-transparent border-2 border-slate-600 text-gray-300 rounded-lg font-semibold text-base hover:border-gray-400 hover:text-white transition-all flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />Call Now: (754) 227-5605
                </a>
              </div>
              <p className="text-gray-600 text-xs mt-4">We respond within 60 minutes during business hours. Available 24/7 by phone.</p>
            </div>

            {/* ============================================ */}
            {/* CHECKLIST DOWNLOAD (GATED LEAD CAPTURE)       */}
            {/* ============================================ */}
            <div style={{ animation: 'fadeInUp 0.6s ease-out 1.1s both' }}>
              <ChecklistDownloadForm
                roofType={selectedType.name}
                roofSize={selectedSize.label}
                roofSqft={selectedSize.sqft}
              />
            </div>

            {/* ============================================ */}
            {/* TRUST BAR                                     */}
            {/* ============================================ */}
            <div className="border-t border-b border-slate-800 py-6" style={{ animation: 'fadeInUp 0.6s ease-out 1.2s both' }}>
              <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
                {[
                  { val: '4.8+ ★', label: 'Google Reviews' },
                  { val: '20+', label: 'Years in Business' },
                  { val: '2,500+', label: 'Roofs Completed' },
                  { val: 'Dual Licensed', label: 'CGC + CCC' },
                  { val: 'HVHZ', label: 'High Wind Certified' },
                ].map(item => (
                  <div key={item.label} className="text-center">
                    <span className="block text-lg font-bold text-white">{item.val}</span>
                    <span className="text-xs text-gray-500">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Disclaimer */}
            <div className="text-center text-xs text-gray-600 max-w-3xl mx-auto pb-8">
              * Estimates are for informational purposes only and do not constitute a quote or contract. Actual pricing may vary based on roof condition, accessibility, local codes, material availability, and other factors determined during inspection. Insurance premium estimates are approximate and vary by carrier, coverage type, and property specifics.
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
