import { useState, useEffect, useRef } from 'react';
import { Phone, Calendar, Check, Layers, Grid3X3, Wrench, Minus, Shield, Home, Ruler, ClipboardCheck, ArrowRight, ArrowLeft, FileText, ChevronRight, Sparkles, TrendingDown } from 'lucide-react';
import ChecklistDownloadForm from './ChecklistDownloadForm';

/* ------------------------------------------------------------------ */
/*  DATA — identical pricing / insurance logic to the original        */
/* ------------------------------------------------------------------ */

interface RoofSize { label: string; sqft: number; desc: string }
interface RoofType { name: string; icon: string; tagline: string }
interface PricingTier { tier: 'Good' | 'Better' | 'Best'; product: string; warranty: string; minPrice: number; maxPrice: number; features: string[] }
interface PricingData { [key: string]: PricingTier[] }

const roofSizes: RoofSize[] = [
  { label: 'Smaller', sqft: 1500, desc: '~1,500 sq ft' },
  { label: 'Average', sqft: 2000, desc: '~2,000 sq ft' },
  { label: 'Mid-Size', sqft: 2500, desc: '~2,500 sq ft' },
  { label: 'Large', sqft: 3500, desc: '~3,500 sq ft' },
  { label: 'Estate', sqft: 5000, desc: '~5,000 sq ft' },
];

const roofTypes: RoofType[] = [
  { name: 'Shingle', icon: 'shingle', tagline: 'Most popular in FL' },
  { name: 'Tile', icon: 'tile', tagline: 'Classic South Florida' },
  { name: 'Metal', icon: 'metal', tagline: 'Maximum longevity' },
  { name: 'Flat', icon: 'flat', tagline: 'Low-slope systems' },
];

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

const sizeLabels: Record<number, string> = {
  1500: 'Smaller (~1,500 sq ft)',
  2000: 'Average (~2,000 sq ft)',
  2500: 'Mid-Size (~2,500 sq ft)',
  3500: 'Large (~3,500 sq ft)',
  5000: 'Estate (~5,000 sq ft)',
};

function formatPrice(n: number): string { return `$${n.toLocaleString()}`; }

const RoofTypeIcon = ({ type, className = 'w-10 h-10' }: { type: string; className?: string }) => {
  switch (type) {
    case 'shingle': return <Layers className={className} />;
    case 'tile': return <Grid3X3 className={className} />;
    case 'metal': return <Wrench className={className} />;
    case 'flat': return <Minus className={className} />;
    default: return null;
  }
};

/* ------------------------------------------------------------------ */
/*  WIZARD COMPONENT                                                  */
/* ------------------------------------------------------------------ */

export default function RoofCalculator() {
  const [step, setStep] = useState(1);
  const [selectedSize, setSelectedSize] = useState<RoofSize>(roofSizes[2]);
  const [selectedType, setSelectedType] = useState<RoofType | null>(null);
  const [direction, setDirection] = useState<'forward' | 'back'>('forward');
  const [animating, setAnimating] = useState(false);
  const wizardRef = useRef<HTMLDivElement>(null);

  // Lead capture state
  const [leadForm, setLeadForm] = useState({ first_name: '', email: '', phone: '' });
  const [leadSubmitting, setLeadSubmitting] = useState(false);
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [leadError, setLeadError] = useState('');

  // ---- calculations (unchanged logic) ----
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

  const sizeFactor = 0.6 + 0.4 * (selectedSize.sqft / 2500);
  const insBasicLo = Math.round(6800 * sizeFactor / 100) * 100;
  const insBasicHi = Math.round(9200 * sizeFactor / 100) * 100;
  const insUpLo = Math.round(3800 * sizeFactor / 100) * 100;
  const insUpHi = Math.round(5400 * sizeFactor / 100) * 100;

  const annualSaveMid = ((insBasicLo + insBasicHi) / 2) - ((insUpLo + insUpHi) / 2);
  const saveLo = Math.round(annualSaveMid * 0.75 * 25 / 1000) * 1000;
  const saveHi = Math.round(annualSaveMid * 1.25 * 25 / 1000) * 1000;

  const basicPrice = getBasicPrice();
  const upgradedPrice = getUpgradedPrice();
  const basicMonthly = Math.round(basicPrice / 120);
  const upgradedMonthly = Math.round(upgradedPrice / 120);
  const monthlyDiff = upgradedMonthly - basicMonthly;
  const insSavingsMonthly = Math.round((insBasicLo - insUpHi) / 12);

  const currentPricing = selectedType ? pricingData[selectedType.name] : [];

  // ---- navigation ----
  const goTo = (target: number) => {
    if (animating) return;
    setDirection(target > step ? 'forward' : 'back');
    setAnimating(true);
    setTimeout(() => {
      setStep(target);
      setAnimating(false);
      // Scroll to top of wizard on step change
      wizardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
  };

  const canAdvance = step === 1 ? true : step === 2 ? !!selectedType : false;

  // ---- lead form submit ----
  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLeadError('');
    setLeadSubmitting(true);
    try {
      const formElement = e.target as HTMLFormElement;
      const response = await fetch(formElement.action, {
        method: 'POST',
        body: new FormData(formElement),
        headers: { 'Accept': 'application/json' }
      });
      if (!response.ok) { setLeadError('Something went wrong. Please try again.'); setLeadSubmitting(false); return; }
      setLeadSubmitted(true);
    } catch {
      setLeadError('An unexpected error occurred. Please try again.');
      setLeadSubmitting(false);
    }
  };

  /* ================================================================ */
  /*  PROGRESS BAR                                                    */
  /* ================================================================ */
  const steps = [
    { num: 1, label: 'Roof Size' },
    { num: 2, label: 'Material' },
    { num: 3, label: 'Your Estimate' },
    { num: 4, label: 'Deep Dive' },
  ];

  const ProgressBar = () => (
    <div className="flex items-center justify-center gap-0 mb-10 px-4">
      {steps.map((s, i) => (
        <div key={s.num} className="flex items-center">
          <button
            onClick={() => { if (s.num < step || (s.num <= 3 && canAdvance)) goTo(s.num); }}
            className={`flex items-center gap-2 transition-all duration-300 ${
              s.num === step
                ? 'opacity-100'
                : s.num < step
                  ? 'opacity-70 hover:opacity-100 cursor-pointer'
                  : 'opacity-30 cursor-default'
            }`}
            disabled={s.num > step}
          >
            <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 ${
              s.num < step
                ? 'bg-green-500 text-white shadow-[0_0_12px_rgba(34,197,94,0.4)]'
                : s.num === step
                  ? 'bg-red-600 text-white shadow-[0_0_16px_rgba(220,38,38,0.5)] ring-2 ring-red-400/30'
                  : 'bg-slate-700 text-gray-500'
            }`}>
              {s.num < step ? <Check className="w-4 h-4" /> : s.num}
            </div>
            <span className={`text-sm font-semibold hidden sm:inline transition-colors duration-300 ${
              s.num === step ? 'text-white' : s.num < step ? 'text-green-400' : 'text-gray-600'
            }`}>{s.label}</span>
          </button>
          {i < steps.length - 1 && (
            <div className={`w-8 sm:w-16 h-0.5 mx-2 transition-all duration-500 ${
              s.num < step ? 'bg-green-500/60' : 'bg-slate-700'
            }`} />
          )}
        </div>
      ))}
    </div>
  );

  /* ================================================================ */
  /*  STEP 1 — Roof Size                                              */
  /* ================================================================ */
  const Step1 = () => (
    <div className={`transition-all duration-300 ${animating ? (direction === 'forward' ? 'opacity-0 translate-x-8' : 'opacity-0 -translate-x-8') : 'opacity-100 translate-x-0'}`}>
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
          How big is your roof?
        </h2>
        <p className="text-gray-400 text-lg">Don't worry about being exact — we'll dial it in during your free inspection.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-6">
        {roofSizes.map((size) => (
          <button
            key={size.label}
            onClick={() => setSelectedSize(size)}
            className={`group relative p-5 rounded-xl border-2 transition-all duration-300 ${
              selectedSize.label === size.label
                ? 'border-red-500 bg-red-600/15 shadow-[0_0_30px_rgba(220,38,38,0.2)] scale-[1.03]'
                : 'border-slate-600/50 bg-slate-800/30 hover:border-slate-500 hover:bg-slate-700/40'
            }`}
          >
            {selectedSize.label === size.label && (
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                <Check className="w-3.5 h-3.5 text-white" />
              </div>
            )}
            <div className={`text-lg font-bold mb-0.5 transition-colors ${selectedSize.label === size.label ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>{size.label}</div>
            <div className={`text-sm transition-colors ${selectedSize.label === size.label ? 'text-red-300' : 'text-gray-500 group-hover:text-gray-400'}`}>{size.desc}</div>
          </button>
        ))}
      </div>

      <div className="flex items-start gap-2 text-sm text-gray-500 bg-slate-900/40 rounded-lg p-3 mb-8">
        <Sparkles className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
        <p>Most South Florida homes have 2,000–3,500 sq ft of roof area — typically 20–40% more than your living space.</p>
      </div>

      <button
        onClick={() => goTo(2)}
        className="w-full py-4 rounded-xl bg-red-600 text-white font-bold text-lg hover:bg-red-500 transition-all duration-300 shadow-lg shadow-red-600/20 hover:shadow-xl hover:shadow-red-600/30 hover:scale-[1.01] flex items-center justify-center gap-2"
      >
        Continue <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );

  /* ================================================================ */
  /*  STEP 2 — Roof Type                                              */
  /* ================================================================ */
  const Step2 = () => (
    <div className={`transition-all duration-300 ${animating ? (direction === 'forward' ? 'opacity-0 translate-x-8' : 'opacity-0 -translate-x-8') : 'opacity-100 translate-x-0'}`}>
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
          What type of roof?
        </h2>
        <p className="text-gray-400 text-lg">Select your current roof type or the material you're considering.</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {roofTypes.map((type) => (
          <button
            key={type.name}
            onClick={() => setSelectedType(type)}
            className={`group relative p-6 rounded-xl border-2 transition-all duration-300 text-center ${
              selectedType?.name === type.name
                ? 'border-red-500 bg-red-600/15 shadow-[0_0_30px_rgba(220,38,38,0.2)] scale-[1.03]'
                : 'border-slate-600/50 bg-slate-800/30 hover:border-slate-500 hover:bg-slate-700/40'
            }`}
          >
            {selectedType?.name === type.name && (
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                <Check className="w-3.5 h-3.5 text-white" />
              </div>
            )}
            <div className={`flex justify-center mb-3 transition-colors ${selectedType?.name === type.name ? 'text-red-400' : 'text-gray-500 group-hover:text-gray-300'}`}>
              <RoofTypeIcon type={type.icon} className="w-12 h-12" />
            </div>
            <div className={`text-lg font-bold mb-1 transition-colors ${selectedType?.name === type.name ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>{type.name}</div>
            <div className={`text-xs transition-colors ${selectedType?.name === type.name ? 'text-red-300' : 'text-gray-600 group-hover:text-gray-500'}`}>{type.tagline}</div>
          </button>
        ))}
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => goTo(1)}
          className="px-6 py-4 rounded-xl border-2 border-slate-600 text-gray-400 font-semibold hover:border-slate-500 hover:text-white transition-all flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
        <button
          onClick={() => { if (selectedType) goTo(3); }}
          disabled={!selectedType}
          className={`flex-1 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
            selectedType
              ? 'bg-red-600 text-white hover:bg-red-500 shadow-lg shadow-red-600/20 hover:shadow-xl hover:scale-[1.01]'
              : 'bg-slate-700 text-gray-500 cursor-not-allowed'
          }`}
        >
          See My Estimate <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );

  /* ================================================================ */
  /*  STEP 3 — Results (pricing + inline lead capture)                */
  /* ================================================================ */
  const Step3 = () => {
    if (!selectedType) return null;
    return (
      <div className={`transition-all duration-300 ${animating ? (direction === 'forward' ? 'opacity-0 translate-x-8' : 'opacity-0 -translate-x-8') : 'opacity-100 translate-x-0'}`}>
        {/* Selection summary pill */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-3 bg-slate-800/80 border border-slate-600/50 rounded-full px-5 py-2 mb-5">
            <RoofTypeIcon type={selectedType.icon} className="w-5 h-5 text-red-400" />
            <span className="text-sm font-semibold text-gray-300">
              {selectedSize.sqft.toLocaleString()} sq ft &middot; {selectedType.name} &middot; Broward / Palm Beach
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">Your Estimate</h2>
          <p className="text-gray-400 text-base">Three tiers — from code-minimum to insurance-optimized.</p>
        </div>

        {/* ---- 3-TIER PRICING CARDS ---- */}
        <div className="grid lg:grid-cols-3 gap-5 mb-8">
          {currentPricing.map((tier, index) => (
            <div
              key={tier.tier}
              className={`relative rounded-2xl p-7 border-2 transition-all duration-500 ${
                tier.tier === 'Better'
                  ? 'border-red-500/70 bg-gradient-to-b from-red-600/10 to-slate-800/50 shadow-2xl shadow-red-600/10 lg:-translate-y-3'
                  : 'border-slate-700/60 bg-slate-800/40'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tier.tier === 'Better' && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-lg">Most Popular</div>
              )}
              <div className="mb-5">
                <div className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-1">{tier.tier}</div>
                <h3 className="text-xl font-bold text-white mb-1">{tier.product}</h3>
                <p className="text-sm text-gray-400">{tier.warranty}</p>
              </div>
              <div className="text-3xl font-extrabold text-white mb-1">
                {formatPrice(Math.round((tier.minPrice * selectedSize.sqft) / 1000) * 1000)} – {formatPrice(Math.round((tier.maxPrice * selectedSize.sqft) / 1000) * 1000)}
              </div>
              <p className="text-xs text-gray-600 mb-5">Code-minimum → Insurance-optimized</p>
              <ul className="space-y-2.5">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />{feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ---- INSURANCE SAVINGS SNAPSHOT ---- */}
        <div className="bg-gradient-to-r from-green-900/20 to-slate-800/40 border border-green-600/20 rounded-2xl p-6 mb-8">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-green-600/10 flex items-center justify-center flex-shrink-0">
              <TrendingDown className="w-7 h-7 text-green-400" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold uppercase tracking-wider text-green-500 mb-1">Insurance Savings Potential</p>
              <p className="text-2xl font-extrabold text-white">
                Save {formatPrice(saveLo)} – {formatPrice(saveHi)} <span className="text-base font-normal text-gray-400">over 25 years</span>
              </p>
              <p className="text-sm text-gray-400 mt-1">Upgrading from code-minimum to insurance-optimized often pays for itself through lower annual premiums.</p>
            </div>
            <button
              onClick={() => goTo(4)}
              className="px-5 py-3 bg-green-600/15 border border-green-600/30 rounded-xl text-green-400 font-semibold text-sm hover:bg-green-600/25 transition-all whitespace-nowrap flex items-center gap-1.5"
            >
              See the math <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ---- INLINE LEAD CAPTURE ---- */}
        <div className="bg-gradient-to-br from-slate-800/80 to-red-900/10 border-2 border-red-600/20 rounded-2xl p-8 mb-8">
          {leadSubmitted ? (
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-green-600/15 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">You're on the list!</h3>
              <p className="text-gray-400">We'll reach out within 60 minutes during business hours to schedule your free forensic roof inspection.</p>
            </div>
          ) : (
            <>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-extrabold text-white mb-2">
                  Get Your Free Forensic Roof Inspection
                </h3>
                <p className="text-gray-400 max-w-lg mx-auto">
                  A real inspection — not a driveway estimate. Infrared, moisture meters, attic evaluation, and a full photo report. No cost, no obligation.
                </p>
              </div>

              {leadError && (
                <div className="mb-4 p-3 bg-red-900/20 border border-red-600/50 rounded-lg text-red-400 text-sm text-center">{leadError}</div>
              )}

              <form
                action="https://formspree.io/f/mzdbydvv"
                method="POST"
                onSubmit={handleLeadSubmit}
                className="max-w-lg mx-auto"
              >
                <input type="hidden" name="_subject" value="Calculator Lead — Free Inspection Request" />
                <input type="hidden" name="form_source" value="Roof Calculator Wizard — Step 3" />
                <input type="hidden" name="roof_type" value={selectedType.name} />
                <input type="hidden" name="roof_size" value={selectedSize.label} />
                <input type="hidden" name="roof_size_sqft" value={selectedSize.sqft} />
                <input type="hidden" name="estimated_range" value={`${formatPrice(Math.round((currentPricing[0].minPrice * selectedSize.sqft) / 1000) * 1000)} - ${formatPrice(Math.round((currentPricing[2].maxPrice * selectedSize.sqft) / 1000) * 1000)}`} />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  <input
                    type="text" name="first_name" placeholder="First Name" required
                    value={leadForm.first_name}
                    onChange={(e) => setLeadForm({ ...leadForm, first_name: e.target.value })}
                    className="w-full px-4 py-3.5 bg-slate-900/80 border border-slate-600/60 rounded-xl text-white placeholder-gray-500 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 transition-all"
                  />
                  <input
                    type="email" name="email" placeholder="Email Address" required
                    value={leadForm.email}
                    onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                    className="w-full px-4 py-3.5 bg-slate-900/80 border border-slate-600/60 rounded-xl text-white placeholder-gray-500 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 transition-all"
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="tel" name="phone" placeholder="Phone Number" required
                    value={leadForm.phone}
                    onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                    className="flex-1 px-4 py-3.5 bg-slate-900/80 border border-slate-600/60 rounded-xl text-white placeholder-gray-500 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 transition-all"
                  />
                  <button
                    type="submit"
                    disabled={leadSubmitting}
                    className={`px-8 py-3.5 rounded-xl font-bold text-base whitespace-nowrap transition-all ${
                      leadSubmitting
                        ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                        : 'bg-red-600 text-white hover:bg-red-500 shadow-lg shadow-red-600/20 hover:shadow-xl'
                    }`}
                  >
                    {leadSubmitting ? 'Sending...' : 'Schedule Inspection'}
                  </button>
                </div>
              </form>

              <div className="flex flex-wrap justify-center gap-4 mt-5 text-xs text-gray-500">
                <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-green-500" />100% free</span>
                <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-green-500" />No obligation</span>
                <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-green-500" />Response within 60 min</span>
              </div>

              <div className="flex justify-center mt-4">
                <a href="tel:+17542275605" className="text-gray-500 hover:text-white text-sm transition-colors flex items-center gap-1.5">
                  <Phone className="w-4 h-4" /> Prefer to call? (754) 227-5605
                </a>
              </div>
            </>
          )}
        </div>

        {/* Navigation */}
        <div className="flex gap-3">
          <button
            onClick={() => goTo(2)}
            className="px-6 py-4 rounded-xl border-2 border-slate-600 text-gray-400 font-semibold hover:border-slate-500 hover:text-white transition-all flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <button
            onClick={() => goTo(4)}
            className="flex-1 py-4 rounded-xl bg-slate-700/60 border border-slate-600 text-gray-300 font-bold text-lg hover:bg-slate-700 hover:text-white transition-all flex items-center justify-center gap-2"
          >
            Insurance Deep Dive <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  };

  /* ================================================================ */
  /*  STEP 4 — Insurance deep dive + education + inspection details   */
  /* ================================================================ */
  const Step4 = () => {
    if (!selectedType) return null;
    return (
      <div className={`space-y-10 transition-all duration-300 ${animating ? (direction === 'forward' ? 'opacity-0 translate-x-8' : 'opacity-0 -translate-x-8') : 'opacity-100 translate-x-0'}`}>

        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">The Insurance Trade-Off</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Two homeowners. Same street. Same roof size. Very different insurance bills. Here's why.</p>
        </div>

        {/* ---- SPLIT PRICE DISPLAY ---- */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden">
          <div className="px-8 pt-7 pb-4 text-center">
            <p className="text-gray-400 text-sm">{sizeLabels[selectedSize.sqft]} &middot; {selectedType.name} &middot; Broward / Palm Beach County</p>
            <div className="flex flex-wrap justify-center gap-2 mt-3">
              {['HVHZ Compliant', 'Includes Tear-Off', 'Permit & Inspection', 'Manufacturer Warranty'].map(chip => (
                <span key={chip} className="bg-white/5 border border-slate-700 text-gray-400 text-xs px-3 py-1 rounded-full">{chip}</span>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-0 mx-6 relative">
            <div className="bg-red-600/5 border border-red-600/15 md:rounded-l-xl rounded-t-xl md:rounded-tr-none p-6 text-center md:border-r-0">
              <p className="text-xs font-bold uppercase tracking-widest text-red-500 mb-1">Code-Minimum</p>
              <p className="text-4xl font-extrabold text-white mb-1">{formatPrice(basicPrice)}</p>
              <p className="text-sm text-gray-400 mb-4">Passes inspection. That's it.</p>
              <div className="border-t border-white/5 pt-4">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Est. Annual Insurance</p>
                <p className="text-xl font-extrabold text-red-400">{formatPrice(insBasicLo)} – {formatPrice(insBasicHi)}/yr</p>
                <p className="text-xs text-gray-500 mt-1">Minimal wind mitigation credits</p>
              </div>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-slate-800 border-2 border-slate-600 rounded-full flex items-center justify-center z-10 hidden md:flex">
              <span className="text-xs font-extrabold text-gray-400">VS</span>
            </div>
            <div className="bg-green-600/5 border border-green-600/15 md:rounded-r-xl rounded-b-xl md:rounded-bl-none p-6 text-center md:border-l-0">
              <p className="text-xs font-bold uppercase tracking-widest text-green-500 mb-1">Insurance-Optimized</p>
              <p className="text-4xl font-extrabold text-white mb-1">{formatPrice(upgradedPrice)}</p>
              <p className="text-sm text-gray-400 mb-4">Built to maximize insurance discounts</p>
              <div className="border-t border-white/5 pt-4">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Est. Annual Insurance</p>
                <p className="text-xl font-extrabold text-green-400">{formatPrice(insUpLo)} – {formatPrice(insUpHi)}/yr</p>
                <p className="text-xs text-gray-500 mt-1">Full wind mitigation credits applied</p>
              </div>
            </div>
          </div>

          <div className="mx-6 h-1.5 rounded-full bg-gradient-to-r from-red-500 via-amber-500 to-green-500 mt-0" />

          <div className="mx-6 mt-4 bg-green-600/8 border border-green-600/20 rounded-xl p-5 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
            <span className="text-2xl font-extrabold text-green-400 whitespace-nowrap">Save {formatPrice(saveLo)} – {formatPrice(saveHi)}</span>
            <span className="text-sm text-gray-300">in insurance premiums over the life of your roof.</span>
          </div>

          <div className="px-8 pb-8 pt-5 text-center">
            <p className="text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed">
              The upfront difference is often just <strong className="text-white">{formatPrice(upgradedPrice - basicPrice)}</strong> — but the insurance gap starts day one and grows every year. The roof that costs more upfront <span className="text-amber-400 font-semibold">costs far less over time</span>.
            </p>
          </div>
        </div>

        {/* ---- 4 THINGS INSURERS CHECK ---- */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-slate-800 to-blue-900/20 px-8 pt-7 pb-5 border-b border-slate-700">
            <p className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">Why the Insurance Gap Is So Large</p>
            <h3 className="text-xl font-bold text-white mb-1">It comes down to four things insurers check</h3>
            <p className="text-sm text-gray-400">Your wind mitigation form (OIR-B1-1802) determines your premium.</p>
          </div>
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-red-600/5 border border-red-600/10 rounded-xl p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-red-500 mb-3">Code-Minimum Roof</p>
                <ul className="space-y-2">
                  {['Standard nail pattern only', 'No secondary water barrier', 'Basic underlayment', 'Existing roof-to-wall connections', 'Minimal or no mitigation credits'].map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-red-500 font-bold text-xs mt-0.5">{'\u2717'}</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-green-600/5 border border-green-600/10 rounded-xl p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-green-500 mb-3">Insurance-Optimized Roof</p>
                <ul className="space-y-2">
                  {['Enhanced HVHZ fastening pattern', 'Secondary water barrier (SWB)', 'Impact-rated underlayment', 'Documented hurricane straps/clips', 'Maximum wind mitigation credits'].map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-green-500 font-bold text-xs mt-0.5">{'\u2713'}</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ---- FINANCING BRIDGE ---- */}
        <div className="bg-gradient-to-br from-slate-800/60 to-blue-900/15 border border-slate-700 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">The Upgrade Pays for Itself</h3>
          <p className="text-sm text-gray-400 mb-6">See what the difference looks like month to month.</p>
          <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center max-w-md mx-auto mb-5">
            <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-4 text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Basic</p>
              <p className="text-2xl font-extrabold text-white">{formatPrice(basicMonthly)}</p>
              <p className="text-xs text-gray-500">per month</p>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-600" />
            <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-4 text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-green-500 mb-1">Optimized</p>
              <p className="text-2xl font-extrabold text-white">{formatPrice(upgradedMonthly)}</p>
              <p className="text-xs text-gray-500">per month</p>
            </div>
          </div>
          <div className="bg-green-600/8 border border-green-600/20 rounded-xl p-4 max-w-md mx-auto mb-5">
            <p className="text-lg font-extrabold text-green-400">+{formatPrice(monthlyDiff)}/mo more for upgrade</p>
            <p className="text-sm text-gray-400">But you save ~{formatPrice(insSavingsMonthly)}/mo in lower insurance</p>
          </div>
          <a href="/easy-payments/" className="inline-flex items-center gap-1.5 px-6 py-3 border border-blue-500/50 text-blue-400 rounded-xl font-semibold text-sm hover:bg-blue-600/10 hover:text-white transition-all">
            Explore Financing Options <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* ---- WHAT WE CHECK DURING INSPECTION ---- */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-white mb-2">What We Check During a Free Forensic Inspection</h3>
          <p className="text-sm text-gray-400 mb-6">45-60 minutes, fully documented — things no calculator can see.</p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {[
              { icon: Home, title: 'Attic & Structural', desc: 'Hurricane straps, clips, and roof-to-wall connections — your biggest insurance factor.', why: 'Determines your biggest discount' },
              { icon: Shield, title: 'Secondary Water Barrier', desc: 'We check if your roof has or can accommodate a sealed SWB — required by many FL insurers.', why: 'Required for many FL policies' },
              { icon: Ruler, title: 'Decking & Pitch', desc: 'Hidden plywood damage and pitch measurements that affect real pricing.', why: 'Finds hidden costs before they surprise you' },
              { icon: ClipboardCheck, title: 'Code & Permitting', desc: 'Local requirements beyond the Florida Building Code for every Broward & Palm Beach city.', why: 'Avoid failed inspections' },
            ].map(item => (
              <div key={item.title} className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-5">
                <item.icon className="w-6 h-6 text-gray-400 mb-2" />
                <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed mb-1">{item.desc}</p>
                <p className="text-xs text-amber-400 font-semibold">{item.why}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ---- SELLING YOUR HOME ---- */}
        <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-6">
          <h4 className="text-lg font-bold text-white mb-2">Planning to Sell Your Home?</h4>
          <p className="text-sm text-gray-400 leading-relaxed">
            Your roof choice affects the sale. Buyers who need a mortgage also need insurance — and their insurer checks the same wind mitigation factors. A roof <strong className="text-red-400">without a secondary water barrier or proper hurricane straps</strong> can make your home harder to insure, delaying or killing a deal. A clean wind mitigation report makes your home more attractive to buyers and lenders.
          </p>
        </div>

        {/* ---- FINAL CTA ---- */}
        <div className="bg-gradient-to-br from-red-900/20 to-slate-800/50 border-2 border-red-600/20 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-extrabold text-white mb-3">Every roof has a timeline. We'd rather you know yours.</h3>
          <p className="text-sm text-gray-400 max-w-xl mx-auto mb-5 leading-relaxed">
            Whether that's today, next month, or a few years from now — we want to be the roofer you already trust. We'll come out with infrared, moisture meters, and cameras and hand you the full documentation. No strings attached.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm text-gray-300">
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" />Full forensic inspection with photos</span>
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" />Wind mitigation evaluation</span>
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" />100% free, zero obligation</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/contact/" className="px-8 py-4 bg-red-600 text-white rounded-xl font-bold text-lg hover:bg-red-500 transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5" />Schedule Inspection
            </a>
            <a href="tel:+17542275605" className="px-8 py-4 border-2 border-slate-600 text-gray-300 rounded-xl font-semibold hover:border-gray-400 hover:text-white transition-all flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />(754) 227-5605
            </a>
          </div>
        </div>

        {/* ---- CHECKLIST DOWNLOAD ---- */}
        <ChecklistDownloadForm
          roofType={selectedType.name}
          roofSize={selectedSize.label}
          roofSqft={selectedSize.sqft}
        />

        {/* ---- TRUST BAR ---- */}
        <div className="border-t border-b border-slate-800 py-6">
          <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
            {[
              { val: '4.8+ \u2605', label: 'Google Reviews' },
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
        <div className="text-center text-xs text-gray-600 max-w-3xl mx-auto pb-4">
          * Estimates are for informational purposes only and do not constitute a quote or contract. Actual pricing may vary based on roof condition, accessibility, local codes, material availability, and other factors determined during inspection. Insurance premium estimates are approximate and vary by carrier, coverage type, and property specifics.
        </div>

        {/* Back button */}
        <div className="flex justify-center">
          <button
            onClick={() => goTo(3)}
            className="px-6 py-3 rounded-xl border-2 border-slate-600 text-gray-400 font-semibold hover:border-slate-500 hover:text-white transition-all flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Estimate
          </button>
        </div>
      </div>
    );
  };

  /* ================================================================ */
  /*  RENDER                                                          */
  /* ================================================================ */
  return (
    <section id="calculator" ref={wizardRef} className="relative bg-gradient-to-b from-black via-slate-900 to-black py-20 pt-44">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ---- HEADER ---- */}
        <div className="text-center mb-8">
          <div className="inline-block bg-red-600/10 border border-red-600/30 rounded-full px-4 py-1.5 mb-4">
            <span className="text-red-500 text-sm font-semibold uppercase tracking-wide">Free Estimate Tool</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3">Roof Cost Calculator</h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">Get an instant estimate in under 30 seconds — no signup required.</p>
        </div>

        {/* ---- PROGRESS BAR ---- */}
        <ProgressBar />

        {/* ---- WIZARD CARD ---- */}
        <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-6 sm:p-10 shadow-[0_0_80px_rgba(0,0,0,0.4)]">
          {step === 1 && <Step1 />}
          {step === 2 && <Step2 />}
          {step === 3 && <Step3 />}
          {step === 4 && <Step4 />}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
