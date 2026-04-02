import { useState, useRef } from 'react';
import { Phone, Calendar, Check, Layers, Grid3X3, Wrench, Minus, Shield, Home, Ruler, ClipboardCheck, ArrowRight, ArrowLeft, ChevronRight, Sparkles, TrendingDown, Lock, Eye, DollarSign, FileText, Zap } from 'lucide-react';
import ChecklistDownloadForm from './ChecklistDownloadForm';

/* ------------------------------------------------------------------ */
/*  DATA                                                              */
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
/*  10-STEP WIZARD                                                    */
/* ------------------------------------------------------------------ */

export default function RoofCalculator() {
  const [step, setStep] = useState(1);
  const [selectedSize, setSelectedSize] = useState<RoofSize>(roofSizes[2]);
  const [selectedType, setSelectedType] = useState<RoofType | null>(null);
  const [direction, setDirection] = useState<'forward' | 'back'>('forward');
  const [animating, setAnimating] = useState(false);
  const wizardRef = useRef<HTMLDivElement>(null);

  // Lead capture
  const [leadForm, setLeadForm] = useState({ first_name: '', email: '', phone: '' });
  const [leadSubmitting, setLeadSubmitting] = useState(false);
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [leadError, setLeadError] = useState('');
  const [gateUnlocked, setGateUnlocked] = useState(false);

  // ---- calculations ----
  const getBasicPrice = () => {
    if (!selectedType) return 0;
    const p = pricingData[selectedType.name];
    return Math.round(((p[0].minPrice + p[0].maxPrice) / 2 * selectedSize.sqft) / 1000) * 1000;
  };
  const getUpgradedPrice = () => {
    if (!selectedType) return 0;
    const p = pricingData[selectedType.name];
    const best = p[p.length - 1];
    return Math.round(((best.minPrice + best.maxPrice) / 2 * selectedSize.sqft) / 1000) * 1000;
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
    // Gate check — can't go past 5 without unlocking
    if (target > 5 && !gateUnlocked) return;
    setDirection(target > step ? 'forward' : 'back');
    setAnimating(true);
    setTimeout(() => {
      setStep(target);
      setAnimating(false);
      wizardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
  };

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
      setGateUnlocked(true);
      // Auto-advance after a brief moment
      setTimeout(() => goTo(6), 1200);
    } catch {
      setLeadError('An unexpected error occurred. Please try again.');
      setLeadSubmitting(false);
    }
  };

  /* ================================================================ */
  /*  STEP CONFIG for progress bar                                    */
  /* ================================================================ */
  const stepConfig = [
    { num: 1, label: 'Size', icon: Home },
    { num: 2, label: 'Material', icon: Layers },
    { num: 3, label: 'Pricing', icon: DollarSign },
    { num: 4, label: 'Savings', icon: TrendingDown },
    { num: 5, label: 'Unlock', icon: gateUnlocked ? Check : Lock },
    { num: 6, label: 'Compare', icon: Eye },
    { num: 7, label: 'Insurers', icon: Shield },
    { num: 8, label: 'Financing', icon: Zap },
    { num: 9, label: 'Inspection', icon: ClipboardCheck },
    { num: 10, label: 'Next Steps', icon: Calendar },
  ];

  /* ================================================================ */
  /*  PROGRESS BAR — compact, scrollable on mobile                    */
  /* ================================================================ */
  const ProgressBar = () => {
    const phase = step <= 3 ? 1 : step <= 5 ? 2 : 3;
    const phaseLabels = ['Get Your Estimate', 'Insurance Insights', 'The Full Picture'];
    return (
      <div className="mb-8">
        {/* Phase label */}
        <div className="text-center mb-4">
          <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
            {phaseLabels[phase - 1]}
          </span>
          <span className="text-xs text-gray-600 ml-2">Step {step} of 10</span>
        </div>

        {/* Progress track */}
        <div className="relative h-2 bg-slate-800 rounded-full overflow-hidden mx-4">
          <div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-red-600 via-red-500 to-amber-500 rounded-full transition-all duration-700 ease-out"
            style={{ width: `${(step / 10) * 100}%` }}
          />
          {/* Gate marker at step 5 */}
          <div className="absolute top-1/2 -translate-y-1/2 left-[50%] -translate-x-1/2 w-4 h-4 rounded-full border-2 border-slate-600 bg-slate-900 flex items-center justify-center z-10">
            {gateUnlocked ? (
              <Check className="w-2.5 h-2.5 text-green-500" />
            ) : (
              <Lock className="w-2.5 h-2.5 text-gray-500" />
            )}
          </div>
        </div>

        {/* Step dots — show key milestones */}
        <div className="flex justify-between px-4 mt-2">
          {[1, 3, 5, 8, 10].map((s) => (
            <button
              key={s}
              onClick={() => { if (s <= step || (s <= 5 && step >= s - 1) || gateUnlocked) goTo(s); }}
              className={`text-xs transition-colors ${
                s === step ? 'text-white font-bold' : s < step ? 'text-green-500 hover:text-green-400 cursor-pointer' : s > 5 && !gateUnlocked ? 'text-gray-700' : 'text-gray-600 hover:text-gray-400 cursor-pointer'
              }`}
              disabled={s > step && (s > 5 && !gateUnlocked)}
            >
              {stepConfig[s - 1].label}
            </button>
          ))}
        </div>
      </div>
    );
  };

  /* ================================================================ */
  /*  SHARED: Navigation buttons                                      */
  /* ================================================================ */
  const NavButtons = ({ back, next, nextLabel, nextDisabled, nextGlow }: {
    back?: number; next?: number; nextLabel?: string; nextDisabled?: boolean; nextGlow?: boolean;
  }) => (
    <div className="flex gap-3 mt-8">
      {back !== undefined && (
        <button onClick={() => goTo(back)} className="px-5 py-3.5 rounded-xl border-2 border-slate-700 text-gray-400 font-semibold hover:border-slate-500 hover:text-white transition-all flex items-center gap-2 text-sm">
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
      )}
      {next !== undefined && (
        <button
          onClick={() => { if (!nextDisabled) goTo(next); }}
          disabled={nextDisabled}
          className={`flex-1 py-3.5 rounded-xl font-bold text-base transition-all duration-300 flex items-center justify-center gap-2 ${
            nextDisabled
              ? 'bg-slate-700 text-gray-500 cursor-not-allowed'
              : nextGlow
                ? 'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-600/25 hover:shadow-xl hover:shadow-red-600/35 hover:scale-[1.01]'
                : 'bg-red-600 text-white hover:bg-red-500 shadow-lg shadow-red-600/20 hover:scale-[1.01]'
          }`}
        >
          {nextLabel || 'Continue'} <ChevronRight className="w-5 h-5" />
        </button>
      )}
    </div>
  );

  /* ================================================================ */
  /*  SHARED: Slide animation wrapper                                 */
  /* ================================================================ */
  const anim = `transition-all duration-300 ${animating ? (direction === 'forward' ? 'opacity-0 translate-x-8' : 'opacity-0 -translate-x-8') : 'opacity-100 translate-x-0'}`;

  /* ================================================================ */
  /*  STEP 1 — Roof Size                                              */
  /* ================================================================ */
  const Step1 = () => (
    <div className={anim}>
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">How big is your roof?</h2>
        <p className="text-gray-400 text-lg">Don't worry about being exact — we'll dial it in during your free inspection.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-6">
        {roofSizes.map((size) => (
          <button key={size.label} onClick={() => setSelectedSize(size)}
            className={`group relative p-5 rounded-xl border-2 transition-all duration-300 ${
              selectedSize.label === size.label
                ? 'border-red-500 bg-red-600/15 shadow-[0_0_30px_rgba(220,38,38,0.2)] scale-[1.03]'
                : 'border-slate-600/50 bg-slate-800/30 hover:border-slate-500 hover:bg-slate-700/40'
            }`}>
            {selectedSize.label === size.label && (
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center shadow-lg"><Check className="w-3.5 h-3.5 text-white" /></div>
            )}
            <div className={`text-lg font-bold mb-0.5 transition-colors ${selectedSize.label === size.label ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>{size.label}</div>
            <div className={`text-sm transition-colors ${selectedSize.label === size.label ? 'text-red-300' : 'text-gray-500 group-hover:text-gray-400'}`}>{size.desc}</div>
          </button>
        ))}
      </div>
      <div className="flex items-start gap-2 text-sm text-gray-500 bg-slate-900/40 rounded-lg p-3 mb-2">
        <Sparkles className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
        <p>Most South Florida homes have 2,000–3,500 sq ft of roof area — typically 20–40% more than your living space.</p>
      </div>
      <NavButtons next={2} nextLabel="Continue" nextGlow />
    </div>
  );

  /* ================================================================ */
  /*  STEP 2 — Material                                               */
  /* ================================================================ */
  const Step2 = () => (
    <div className={anim}>
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">What type of roof?</h2>
        <p className="text-gray-400 text-lg">Select your current material or the one you're considering.</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-2">
        {roofTypes.map((type) => (
          <button key={type.name} onClick={() => setSelectedType(type)}
            className={`group relative p-6 rounded-xl border-2 transition-all duration-300 text-center ${
              selectedType?.name === type.name
                ? 'border-red-500 bg-red-600/15 shadow-[0_0_30px_rgba(220,38,38,0.2)] scale-[1.03]'
                : 'border-slate-600/50 bg-slate-800/30 hover:border-slate-500 hover:bg-slate-700/40'
            }`}>
            {selectedType?.name === type.name && (
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center shadow-lg"><Check className="w-3.5 h-3.5 text-white" /></div>
            )}
            <div className={`flex justify-center mb-3 transition-colors ${selectedType?.name === type.name ? 'text-red-400' : 'text-gray-500 group-hover:text-gray-300'}`}>
              <RoofTypeIcon type={type.icon} className="w-12 h-12" />
            </div>
            <div className={`text-lg font-bold mb-1 transition-colors ${selectedType?.name === type.name ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>{type.name}</div>
            <div className={`text-xs transition-colors ${selectedType?.name === type.name ? 'text-red-300' : 'text-gray-600 group-hover:text-gray-500'}`}>{type.tagline}</div>
          </button>
        ))}
      </div>
      <NavButtons back={1} next={3} nextLabel="See My Estimate" nextDisabled={!selectedType} nextGlow />
    </div>
  );

  /* ================================================================ */
  /*  STEP 3 — Instant Pricing                                        */
  /* ================================================================ */
  const Step3 = () => {
    if (!selectedType) return null;
    return (
      <div className={anim}>
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-slate-800/80 border border-slate-600/50 rounded-full px-4 py-1.5 mb-4">
            <RoofTypeIcon type={selectedType.icon} className="w-4 h-4 text-red-400" />
            <span className="text-sm font-semibold text-gray-300">{selectedSize.sqft.toLocaleString()} sq ft &middot; {selectedType.name}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">Your Roof Estimate</h2>
          <p className="text-gray-400">Three tiers — from code-minimum to insurance-optimized.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-5 mb-6">
          {currentPricing.map((tier) => (
            <div key={tier.tier}
              className={`relative rounded-2xl p-6 border-2 transition-all ${
                tier.tier === 'Better'
                  ? 'border-red-500/70 bg-gradient-to-b from-red-600/10 to-slate-800/50 shadow-2xl shadow-red-600/10 lg:-translate-y-2'
                  : 'border-slate-700/60 bg-slate-800/40'
              }`}>
              {tier.tier === 'Better' && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-lg">Most Popular</div>
              )}
              <div className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-1">{tier.tier}</div>
              <h3 className="text-lg font-bold text-white mb-0.5">{tier.product}</h3>
              <p className="text-xs text-gray-500 mb-3">{tier.warranty}</p>
              <div className="text-2xl font-extrabold text-white mb-1">
                {formatPrice(Math.round((tier.minPrice * selectedSize.sqft) / 1000) * 1000)} – {formatPrice(Math.round((tier.maxPrice * selectedSize.sqft) / 1000) * 1000)}
              </div>
              <p className="text-xs text-gray-600 mb-4">Code-minimum → Insurance-optimized</p>
              <ul className="space-y-2">
                {tier.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />{f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Pricing footnote */}
        <div className="bg-slate-900/40 border border-slate-700/40 rounded-xl p-4 text-center mb-2">
          <p className="text-xs text-gray-500">
            <strong className="text-gray-400">Why the range?</strong> Low end = code-minimum. High end = insurance-optimized with HVHZ compliance & full wind mitigation. Your free inspection tells you which approach is right.
          </p>
        </div>

        <NavButtons back={2} next={4} nextLabel="But Wait — Could You Save Thousands?" nextGlow />
      </div>
    );
  };

  /* ================================================================ */
  /*  STEP 4 — Insurance Savings Teaser (the hook)                    */
  /* ================================================================ */
  const Step4 = () => {
    if (!selectedType) return null;
    return (
      <div className={anim}>
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 leading-tight">
            What if your roof could <span className="text-green-400">pay you back</span>?
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">Most homeowners never find this out until it's too late.</p>
        </div>

        {/* The big reveal */}
        <div className="bg-gradient-to-br from-green-900/20 to-slate-800/40 border-2 border-green-600/20 rounded-2xl p-8 mb-6 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-green-500 mb-3">Your Estimated Insurance Savings</p>
          <p className="text-5xl sm:text-6xl font-extrabold text-white mb-2">
            {formatPrice(saveLo)} – {formatPrice(saveHi)}
          </p>
          <p className="text-lg text-gray-400">over the life of your roof</p>

          <div className="mt-6 pt-6 border-t border-white/5">
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
              <div className="text-center">
                <p className="text-xs font-bold uppercase tracking-widest text-red-500 mb-1">Code-Minimum Roof</p>
                <p className="text-xl font-extrabold text-red-400">{formatPrice(insBasicLo)}–{formatPrice(insBasicHi)}</p>
                <p className="text-xs text-gray-500">per year in insurance</p>
              </div>
              <div className="text-center">
                <p className="text-xs font-bold uppercase tracking-widest text-green-500 mb-1">Optimized Roof</p>
                <p className="text-xl font-extrabold text-green-400">{formatPrice(insUpLo)}–{formatPrice(insUpHi)}</p>
                <p className="text-xs text-gray-500">per year in insurance</p>
              </div>
            </div>
          </div>
        </div>

        {/* The cliffhanger */}
        <div className="bg-amber-600/5 border border-amber-600/15 rounded-xl p-5 mb-2 text-center">
          <p className="text-base text-gray-300 leading-relaxed">
            The cost of your roof isn't just what you pay the roofer — it's what you'll pay in <strong className="text-white">insurance premiums every year after</strong>. Two homeowners on the same street can pay <strong className="text-amber-400">thousands apart</strong> in annual premiums based on how their roof was installed.
          </p>
          <p className="text-sm text-gray-500 mt-3">Want to see exactly why — and how the math actually works?</p>
        </div>

        <NavButtons back={3} next={5} nextLabel="Show Me the Full Breakdown" nextGlow />
      </div>
    );
  };

  /* ================================================================ */
  /*  STEP 5 — Lead Capture Gate                                      */
  /* ================================================================ */
  const Step5 = () => {
    if (!selectedType) return null;

    // If already submitted, show success and auto-advance
    if (leadSubmitted) {
      return (
        <div className={anim}>
          <div className="text-center py-8">
            <div className="w-20 h-20 bg-green-600/15 rounded-full flex items-center justify-center mx-auto mb-5">
              <Check className="w-10 h-10 text-green-500" />
            </div>
            <h2 className="text-3xl font-extrabold text-white mb-3">You're in!</h2>
            <p className="text-gray-400 text-lg mb-2">Your full insurance analysis is unlocked.</p>
            <p className="text-gray-500 text-sm">We'll also reach out within 60 minutes during business hours.</p>
            <div className="mt-6">
              <button onClick={() => goTo(6)} className="px-8 py-4 rounded-xl bg-green-600 text-white font-bold text-lg hover:bg-green-500 transition-all shadow-lg flex items-center gap-2 mx-auto">
                Continue to Full Analysis <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className={anim}>
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-red-600/10 border-2 border-red-600/20 rounded-full flex items-center justify-center mx-auto mb-5">
            <Lock className="w-8 h-8 text-red-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Unlock Your Full Insurance Analysis
          </h2>
          <p className="text-gray-400 text-lg max-w-lg mx-auto">
            See the detailed side-by-side comparison, the 4 factors insurers check, financing math, and what a forensic inspection reveals about <em>your</em> home.
          </p>
        </div>

        {/* What's behind the gate - preview */}
        <div className="grid sm:grid-cols-2 gap-3 mb-8 max-w-lg mx-auto">
          {[
            { icon: Eye, label: 'Basic vs. Optimized side-by-side' },
            { icon: Shield, label: 'The 4 factors that set your premium' },
            { icon: DollarSign, label: 'Monthly financing math' },
            { icon: ClipboardCheck, label: 'What we inspect (that others skip)' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3 bg-slate-800/40 border border-slate-700/30 rounded-lg px-4 py-3">
              <item.icon className="w-5 h-5 text-red-400 flex-shrink-0" />
              <span className="text-sm text-gray-300">{item.label}</span>
            </div>
          ))}
        </div>

        {/* The form */}
        <div className="bg-gradient-to-br from-slate-800/80 to-red-900/10 border-2 border-red-600/20 rounded-2xl p-8 max-w-lg mx-auto">
          {leadError && (
            <div className="mb-4 p-3 bg-red-900/20 border border-red-600/50 rounded-lg text-red-400 text-sm text-center">{leadError}</div>
          )}
          <form action="https://formspree.io/f/mzdbydvv" method="POST" onSubmit={handleLeadSubmit}>
            <input type="hidden" name="_subject" value="Calculator Lead — Unlocked Insurance Analysis" />
            <input type="hidden" name="form_source" value="Roof Calculator Wizard — Step 5 Gate" />
            <input type="hidden" name="roof_type" value={selectedType.name} />
            <input type="hidden" name="roof_size" value={selectedSize.label} />
            <input type="hidden" name="roof_size_sqft" value={selectedSize.sqft} />
            <input type="hidden" name="estimated_range" value={`${formatPrice(Math.round((currentPricing[0].minPrice * selectedSize.sqft) / 1000) * 1000)} - ${formatPrice(Math.round((currentPricing[2].maxPrice * selectedSize.sqft) / 1000) * 1000)}`} />
            <input type="hidden" name="insurance_savings_potential" value={`${formatPrice(saveLo)} - ${formatPrice(saveHi)}`} />

            <div className="space-y-3 mb-4">
              <input type="text" name="first_name" placeholder="First Name" required value={leadForm.first_name}
                onChange={(e) => setLeadForm({ ...leadForm, first_name: e.target.value })}
                className="w-full px-4 py-3.5 bg-slate-900/80 border border-slate-600/60 rounded-xl text-white placeholder-gray-500 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 transition-all" />
              <input type="email" name="email" placeholder="Email Address" required value={leadForm.email}
                onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                className="w-full px-4 py-3.5 bg-slate-900/80 border border-slate-600/60 rounded-xl text-white placeholder-gray-500 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 transition-all" />
              <input type="tel" name="phone" placeholder="Phone Number" required value={leadForm.phone}
                onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                className="w-full px-4 py-3.5 bg-slate-900/80 border border-slate-600/60 rounded-xl text-white placeholder-gray-500 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 transition-all" />
            </div>
            <button type="submit" disabled={leadSubmitting}
              className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                leadSubmitting ? 'bg-gray-700 text-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-600/25 hover:shadow-xl hover:scale-[1.01]'
              }`}>
              {leadSubmitting ? 'Unlocking...' : 'Unlock Full Analysis'}
            </button>
          </form>

          <div className="flex flex-wrap justify-center gap-4 mt-4 text-xs text-gray-500">
            <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-green-500" />No spam</span>
            <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-green-500" />No obligation</span>
            <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-green-500" />Free inspection included</span>
          </div>

          <div className="flex justify-center mt-4">
            <a href="tel:+17542275605" className="text-gray-500 hover:text-white text-sm transition-colors flex items-center gap-1.5">
              <Phone className="w-4 h-4" /> Prefer to call? (754) 227-5605
            </a>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button onClick={() => goTo(4)} className="text-gray-600 hover:text-gray-400 text-sm transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to savings overview
          </button>
        </div>
      </div>
    );
  };

  /* ================================================================ */
  /*  STEP 6 — Basic vs Optimized Comparison                          */
  /* ================================================================ */
  const Step6 = () => {
    if (!selectedType) return null;
    return (
      <div className={anim}>
        <div className="text-center mb-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Two Roofs. Same Street. Different Bills.</h2>
          <p className="text-gray-400">{sizeLabels[selectedSize.sqft]} &middot; {selectedType.name} &middot; Broward / Palm Beach</p>
        </div>

        <div className="grid md:grid-cols-2 gap-0 relative mb-6">
          <div className="bg-red-600/5 border border-red-600/15 md:rounded-l-xl rounded-t-xl md:rounded-tr-none p-6 text-center md:border-r-0">
            <p className="text-xs font-bold uppercase tracking-widest text-red-500 mb-2">Code-Minimum Roof</p>
            <p className="text-4xl font-extrabold text-white mb-1">{formatPrice(basicPrice)}</p>
            <p className="text-sm text-gray-400 mb-4">Passes inspection. That's it.</p>
            <div className="border-t border-white/5 pt-4">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Annual Insurance</p>
              <p className="text-xl font-extrabold text-red-400">{formatPrice(insBasicLo)} – {formatPrice(insBasicHi)}/yr</p>
            </div>
            <ul className="mt-4 space-y-2 text-left">
              {['Meets minimum code only', 'Standard underlayment', 'No insurance optimization', 'Fewer carrier options', 'Minimal mitigation credits'].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-400"><span className="text-red-500 font-bold text-xs mt-0.5">{'\u2717'}</span>{item}</li>
              ))}
            </ul>
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-slate-800 border-2 border-slate-600 rounded-full flex items-center justify-center z-10 hidden md:flex">
            <span className="text-xs font-extrabold text-gray-400">VS</span>
          </div>
          <div className="bg-green-600/5 border-2 border-green-600/20 md:rounded-r-xl rounded-b-xl md:rounded-bl-none p-6 text-center md:border-l-0">
            <p className="text-xs font-bold uppercase tracking-widest text-green-500 mb-2">Insurance-Optimized Roof</p>
            <p className="text-4xl font-extrabold text-white mb-1">{formatPrice(upgradedPrice)}</p>
            <p className="text-sm text-gray-400 mb-4">Built to maximize discounts</p>
            <div className="border-t border-white/5 pt-4">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Annual Insurance</p>
              <p className="text-xl font-extrabold text-green-400">{formatPrice(insUpLo)} – {formatPrice(insUpHi)}/yr</p>
            </div>
            <ul className="mt-4 space-y-2 text-left">
              {['HVHZ compliant — exceeds code', 'Self-adhering underlayment', 'Full insurance optimization', 'More carrier options', 'Maximum mitigation credits'].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-300"><span className="text-green-500 font-bold text-xs mt-0.5">{'\u2713'}</span>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="h-1.5 rounded-full bg-gradient-to-r from-red-500 via-amber-500 to-green-500 mb-4" />
        <div className="bg-green-600/8 border border-green-600/20 rounded-xl p-4 text-center mb-2">
          <span className="text-xl font-extrabold text-green-400">{formatPrice(saveLo)} – {formatPrice(saveHi)} saved</span>
          <span className="text-sm text-gray-400 ml-2">over the life of your roof</span>
        </div>

        <NavButtons back={5} next={7} nextLabel="What Do Insurers Actually Check?" nextGlow />
      </div>
    );
  };

  /* ================================================================ */
  /*  STEP 7 — The 4 Things Insurers Check                            */
  /* ================================================================ */
  const Step7 = () => (
    <div className={anim}>
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">4 Things That Set Your Premium</h2>
        <p className="text-gray-400 text-lg">Your wind mitigation form (OIR-B1-1802) controls everything.</p>
      </div>

      <div className="space-y-4 mb-6">
        {[
          { num: '1', title: 'Roof-to-Wall Connections', basic: 'Existing connections — often toe-nails or unknown', optimized: 'Documented hurricane straps/clips throughout', impact: 'Single biggest insurance discount factor' },
          { num: '2', title: 'Secondary Water Barrier', basic: 'No SWB — some insurers won\'t even write a policy', optimized: 'Sealed secondary water barrier installed', impact: 'Required by many FL insurers for HVHZ coverage' },
          { num: '3', title: 'Roof Deck Attachment', basic: 'Standard 6d nails, basic pattern', optimized: 'Enhanced 8d ring-shank nails, HVHZ pattern', impact: 'Stronger fastening = lower wind uplift risk' },
          { num: '4', title: 'Roof Covering', basic: 'Non-rated covering, basic installation', optimized: 'FBC-approved, impact-rated system', impact: 'Determines wind resistance rating' },
        ].map((item) => (
          <div key={item.num} className="bg-slate-800/50 border border-slate-700/40 rounded-xl p-5 flex gap-4">
            <div className="w-10 h-10 rounded-full bg-red-600/15 border border-red-600/30 flex items-center justify-center flex-shrink-0">
              <span className="text-red-400 font-extrabold text-sm">{item.num}</span>
            </div>
            <div className="flex-1">
              <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
              <div className="grid sm:grid-cols-2 gap-2 mb-2">
                <div className="flex items-start gap-1.5">
                  <span className="text-red-500 text-xs mt-0.5 font-bold">{'\u2717'}</span>
                  <span className="text-xs text-gray-400">{item.basic}</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-green-500 text-xs mt-0.5 font-bold">{'\u2713'}</span>
                  <span className="text-xs text-gray-300">{item.optimized}</span>
                </div>
              </div>
              <p className="text-xs text-amber-400 font-semibold">{item.impact}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-amber-600/5 border border-amber-600/15 rounded-xl p-4 text-center mb-2">
        <p className="text-sm text-gray-400">
          <strong className="text-amber-400">Bottom line:</strong> A <strong className="text-white">{formatPrice(insBasicHi)}/yr policy</strong> vs. a <strong className="text-white">{formatPrice(insUpLo)}/yr policy</strong> often comes down to these four items alone. The difference starts day one.
        </p>
      </div>

      <NavButtons back={6} next={8} nextLabel="See the Financing Math" nextGlow />
    </div>
  );

  /* ================================================================ */
  /*  STEP 8 — Financing Bridge                                       */
  /* ================================================================ */
  const Step8 = () => (
    <div className={anim}>
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">The Upgrade Pays for Itself</h2>
        <p className="text-gray-400 text-lg">Here's what the difference actually looks like month to month.</p>
      </div>

      <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center max-w-md mx-auto mb-6">
        <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-5 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Basic Roof</p>
          <p className="text-3xl font-extrabold text-white">{formatPrice(basicMonthly)}</p>
          <p className="text-xs text-gray-500">per month (financed)</p>
        </div>
        <ArrowRight className="w-5 h-5 text-gray-600" />
        <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-5 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-green-500 mb-1">Optimized</p>
          <p className="text-3xl font-extrabold text-white">{formatPrice(upgradedMonthly)}</p>
          <p className="text-xs text-gray-500">per month (financed)</p>
        </div>
      </div>

      <div className="bg-green-600/8 border border-green-600/20 rounded-xl p-5 max-w-md mx-auto mb-6 text-center">
        <p className="text-2xl font-extrabold text-green-400">+{formatPrice(monthlyDiff)}/mo more for the upgrade</p>
        <p className="text-sm text-gray-400 mt-1">But you save ~<strong className="text-white">{formatPrice(insSavingsMonthly)}/mo</strong> in lower insurance premiums</p>
      </div>

      <div className="bg-slate-800/40 border border-slate-700/30 rounded-xl p-5 max-w-lg mx-auto mb-6">
        <p className="text-sm text-gray-300 leading-relaxed text-center">
          <strong className="text-white">The insurance savings are larger than the extra monthly payment.</strong> That means an upgraded roof with financing actually puts money back in your pocket from month one. And as Florida rates keep climbing, those savings only grow.
        </p>
      </div>

      <div className="flex justify-center mb-2">
        <a href="/easy-payments/" className="inline-flex items-center gap-1.5 px-6 py-3 border border-blue-500/40 text-blue-400 rounded-xl font-semibold text-sm hover:bg-blue-600/10 hover:text-white transition-all">
          Explore Financing Options <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      <NavButtons back={7} next={9} nextLabel="What Does a Real Inspection Cover?" nextGlow />
    </div>
  );

  /* ================================================================ */
  /*  STEP 9 — Forensic Inspection Details                            */
  /* ================================================================ */
  const Step9 = () => (
    <div className={anim}>
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">What We Check (That Others Skip)</h2>
        <p className="text-gray-400 text-lg">A 45-60 minute forensic inspection — not a driveway estimate.</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        {[
          { icon: Home, title: 'Attic & Structural Connections', desc: 'We get into your attic to inspect hurricane straps, clips, and roof-to-wall connections — the #1 factor in your wind mitigation report.', why: 'Determines your biggest insurance discount' },
          { icon: Shield, title: 'Secondary Water Barrier', desc: 'We check if your roof has or can accommodate a sealed SWB. Without one, some insurers won\'t write a policy in HVHZ areas.', why: 'Required by many FL insurers for coverage' },
          { icon: Ruler, title: 'Decking & Roof Pitch', desc: 'Rotted or damaged plywood must be replaced before a new roof. We measure pitch, check decking, and identify hidden damage.', why: 'Finds hidden costs before they surprise you' },
          { icon: ClipboardCheck, title: 'Code & Permitting', desc: 'Your municipality may have requirements beyond the Florida Building Code. We know the rules for every city in Broward & Palm Beach.', why: 'Avoid failed inspections and do-overs' },
        ].map(item => (
          <div key={item.title} className="bg-slate-800/50 border border-slate-700/40 rounded-xl p-5">
            <item.icon className="w-6 h-6 text-gray-400 mb-2" />
            <h4 className="text-base font-bold text-white mb-1">{item.title}</h4>
            <p className="text-xs text-gray-400 leading-relaxed mb-2">{item.desc}</p>
            <p className="text-xs text-amber-400 font-semibold">{item.why}</p>
          </div>
        ))}
      </div>

      <div className="bg-slate-800/40 border border-slate-700/30 rounded-xl p-5 mb-6">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-amber-600/10 rounded-xl flex items-center justify-center flex-shrink-0">
            <FileText className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <p className="text-sm font-bold text-amber-400 mb-1">Full Photo Documentation Included</p>
            <p className="text-xs text-gray-400 leading-relaxed">Every finding photographed. Infrared imaging. Moisture meter readings. You get a complete written report — yours to keep, whether you roof with us or not.</p>
          </div>
        </div>
      </div>

      {/* Selling your home callout */}
      <div className="bg-slate-900/50 border border-slate-700/30 rounded-xl p-4 mb-2">
        <h4 className="text-sm font-bold text-white mb-1">Planning to Sell?</h4>
        <p className="text-xs text-gray-500 leading-relaxed">
          Buyers need insurance. Their insurer checks the same wind mitigation factors. A clean report with full credits makes your home more attractive to buyers and lenders.
        </p>
      </div>

      <NavButtons back={8} next={10} nextLabel="Let's Get You Scheduled" nextGlow />
    </div>
  );

  /* ================================================================ */
  /*  STEP 10 — Final CTA + Trust + Checklist                        */
  /* ================================================================ */
  const Step10 = () => {
    if (!selectedType) return null;
    return (
      <div className={anim}>
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Every Roof Has a Timeline. We'd Rather You Know Yours.
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Whether it's today, next month, or a few years out — we want to be the roofer you already trust when you're ready.
          </p>
        </div>

        {/* CTA card */}
        <div className="bg-gradient-to-br from-red-900/20 to-slate-800/50 border-2 border-red-600/20 rounded-2xl p-8 text-center mb-8">
          <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm text-gray-300">
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" />Full forensic inspection with photos</span>
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" />Wind mitigation evaluation</span>
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" />Infrared & moisture meters</span>
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-green-500" />100% free, zero obligation</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
            <a href="/contact/" className="px-10 py-4 bg-red-600 text-white rounded-xl font-bold text-lg hover:bg-red-500 transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5" />Schedule My Free Inspection
            </a>
            <a href="tel:+17542275605" className="px-8 py-4 border-2 border-slate-600 text-gray-300 rounded-xl font-semibold hover:border-gray-400 hover:text-white transition-all flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />Call (754) 227-5605
            </a>
          </div>
          <p className="text-sm text-gray-500">We respond within 60 minutes during business hours.</p>
          <p className="text-amber-400 text-sm mt-2">Plus, you'll get our free Insider's Guide the moment you schedule.</p>
        </div>

        {/* Checklist Download */}
        <div className="mb-8">
          <ChecklistDownloadForm
            roofType={selectedType.name}
            roofSize={selectedSize.label}
            roofSqft={selectedSize.sqft}
          />
        </div>

        {/* Trust bar */}
        <div className="border-t border-b border-slate-800 py-6 mb-6">
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
        <div className="text-center text-xs text-gray-600 max-w-3xl mx-auto mb-4">
          * Estimates are for informational purposes only and do not constitute a quote or contract. Actual pricing may vary based on roof condition, accessibility, local codes, material availability, and other factors. Insurance premium estimates are approximate and vary by carrier, coverage type, and property specifics.
        </div>

        {/* Back to start */}
        <div className="flex justify-center">
          <button onClick={() => goTo(1)} className="text-gray-600 hover:text-gray-400 text-sm transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" /> Start over with new selections
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

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block bg-red-600/10 border border-red-600/30 rounded-full px-4 py-1.5 mb-4">
            <span className="text-red-500 text-sm font-semibold uppercase tracking-wide">Free Estimate Tool</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3">Roof Cost Calculator</h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">Get an instant estimate in under 30 seconds — no signup required.</p>
        </div>

        {/* Progress Bar */}
        <ProgressBar />

        {/* Wizard Card */}
        <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-6 sm:p-10 shadow-[0_0_80px_rgba(0,0,0,0.4)]">
          {step === 1 && <Step1 />}
          {step === 2 && <Step2 />}
          {step === 3 && <Step3 />}
          {step === 4 && <Step4 />}
          {step === 5 && <Step5 />}
          {step === 6 && <Step6 />}
          {step === 7 && <Step7 />}
          {step === 8 && <Step8 />}
          {step === 9 && <Step9 />}
          {step === 10 && <Step10 />}
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
