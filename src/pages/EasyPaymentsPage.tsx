import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { DollarSign, Calculator, TrendingUp, ExternalLink, Lightbulb, Award } from 'lucide-react';

export default function EasyPaymentsPage() {
  useEffect(() => {
    document.title = 'Easy Payments for Roofing Projects | All Phase Construction';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore payment options for your roofing project. Calculate monthly payments with flexible terms and learn about available providers in South Florida.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Explore payment options for your roofing project. Calculate monthly payments with flexible terms and learn about available providers in South Florida.';
      document.head.appendChild(meta);
    }
  }, []);

  const [projectTotal, setProjectTotal] = useState(35000);
  const [downPayment, setDownPayment] = useState(5000);
  const [creditTier, setCreditTier] = useState<'good' | 'average' | 'challenged'>('average');
  const [termYears] = useState(10);

  const getAprForTier = (tier: 'good' | 'average' | 'challenged'): number => {
    switch (tier) {
      case 'good':
        return 7.99;
      case 'average':
        return 8.99;
      case 'challenged':
        return 12.99;
    }
  };

  const apr = getAprForTier(creditTier);

  const [currentTier, setCurrentTier] = useState(35000);
  const [upgradeAmount, setUpgradeAmount] = useState(5000);

  const calculateMonthlyPayment = (principal: number, annualRate: number, years: number): number => {
    const monthlyRate = annualRate / 100 / 12;
    const numPayments = years * 12;

    if (principal <= 0) return 0;
    if (monthlyRate === 0) return principal / numPayments;

    const payment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
    return payment;
  };

  const financedAmount = Math.max(0, projectTotal - downPayment);
  const monthlyPayment = calculateMonthlyPayment(financedAmount, apr, termYears);

  const upgradeDifference = upgradeAmount;
  const upgradeMonthlyPayment = calculateMonthlyPayment(upgradeAmount, apr, termYears);

  const roundToIncrement = (value: number, increment: number): number => {
    return Math.round(value / increment) * increment;
  };

  const handleDownPaymentChange = (value: number) => {
    const clamped = Math.max(0, Math.min(value, projectTotal));
    setDownPayment(clamped);
  };

  const handleDownPaymentBlur = () => {
    setDownPayment(roundToIncrement(downPayment, 2500));
  };

  const handleProjectTotalChange = (value: number) => {
    const newTotal = Math.max(0, value);
    setProjectTotal(newTotal);
    if (downPayment > newTotal) {
      setDownPayment(newTotal);
    }
  };

  const handleProjectTotalBlur = () => {
    const rounded = roundToIncrement(projectTotal, 5000);
    setProjectTotal(rounded);
    if (downPayment > rounded) {
      setDownPayment(roundToIncrement(Math.min(downPayment, rounded), 2500));
    }
  };

  const handleUpgradeAmountBlur = () => {
    setUpgradeAmount(roundToIncrement(upgradeAmount, 2500));
  };

  const incrementDownPayment = () => {
    const newValue = Math.min(downPayment + 2500, projectTotal);
    setDownPayment(newValue);
  };

  const decrementDownPayment = () => {
    const newValue = Math.max(downPayment - 2500, 0);
    setDownPayment(newValue);
  };

  const incrementProjectTotal = () => {
    const newValue = projectTotal + 5000;
    setProjectTotal(newValue);
  };

  const decrementProjectTotal = () => {
    const newValue = Math.max(projectTotal - 5000, 0);
    setProjectTotal(newValue);
    if (downPayment > newValue) {
      setDownPayment(newValue);
    }
  };

  const incrementUpgradeAmount = () => {
    const newValue = upgradeAmount + 2500;
    setUpgradeAmount(newValue);
  };

  const decrementUpgradeAmount = () => {
    const newValue = Math.max(upgradeAmount - 2500, 0);
    setUpgradeAmount(newValue);
  };

  return (
    <><div className="min-h-screen bg-black pt-44 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-red-600/10 border border-red-600/30 rounded-full px-4 py-1.5 mb-4">
            <span className="text-red-500 text-sm font-semibold uppercase tracking-wide">
              Payment Options
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Easy Payments for Roofing Projects
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Explore flexible payment options to fit your budget. Calculate your potential monthly payments and understand the upgrade costs for premium roofing solutions.
          </p>

          {/* Dual-License Badge */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border-2 border-[#C5A572] rounded-lg p-6">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Award className="w-8 h-8 text-[#C5A572]" />
                <h2 className="text-2xl font-bold text-white">Dual-Licensed Roofing Specialist</h2>
              </div>
              <div className="text-center space-y-2">
                <p className="text-lg text-gray-200">
                  <span className="font-semibold text-[#C5A572]">CCC-1331464</span> - Florida Certified Roofing Contractor
                </p>
                <p className="text-lg text-gray-200">
                  <span className="font-semibold text-[#C5A572]">CGC-1526236</span> - Certified General Contractor
                </p>
                <p className="text-sm text-gray-300 mt-3">
                  Flexible Financing • Transparent Pricing • Complete Permitting
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center">
                <Calculator className="w-6 h-6 text-red-500" />
              </div>
              <h2 className="text-2xl font-bold text-white">Estimate Monthly Payments</h2>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Down Payment
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="number"
                    value={downPayment}
                    onChange={(e) => handleDownPaymentChange(Number(e.target.value))}
                    onBlur={handleDownPaymentBlur}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                    step="2500"
                    min="0"
                    max={projectTotal}
                  />
                </div>
                <div className="flex items-center gap-3 mt-2">
                  <button
                    onClick={decrementDownPayment}
                    aria-label="Decrease down payment"
                    className="px-3 py-1.5 bg-slate-700 border border-slate-600 rounded-lg text-white hover:bg-slate-600 hover:border-slate-500 transition-colors font-medium text-sm"
                  >
                    −
                  </button>
                  <span className="flex-1 text-center text-xs text-gray-400">
                    Adjust in $2,500 increments
                  </span>
                  <button
                    onClick={incrementDownPayment}
                    aria-label="Increase down payment"
                    className="px-3 py-1.5 bg-slate-700 border border-slate-600 rounded-lg text-white hover:bg-slate-600 hover:border-slate-500 transition-colors font-medium text-sm"
                  >
                    +
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Project Total
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="number"
                    value={projectTotal}
                    onChange={(e) => handleProjectTotalChange(Number(e.target.value))}
                    onBlur={handleProjectTotalBlur}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                    step="5000"
                    min="0"
                  />
                </div>
                <div className="flex items-center gap-3 mt-2">
                  <button
                    onClick={decrementProjectTotal}
                    aria-label="Decrease project total"
                    className="px-3 py-1.5 bg-slate-700 border border-slate-600 rounded-lg text-white hover:bg-slate-600 hover:border-slate-500 transition-colors font-medium text-sm"
                  >
                    −
                  </button>
                  <span className="flex-1 text-center text-xs text-gray-400">
                    Adjust in $5,000 increments
                  </span>
                  <button
                    onClick={incrementProjectTotal}
                    aria-label="Increase project total"
                    className="px-3 py-1.5 bg-slate-700 border border-slate-600 rounded-lg text-white hover:bg-slate-600 hover:border-slate-500 transition-colors font-medium text-sm"
                  >
                    +
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Estimated Credit Tier
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setCreditTier('good')}
                    className={`py-3 px-4 rounded-lg font-medium transition-all ${
                      creditTier === 'good'
                        ? 'bg-red-600 text-white border-2 border-red-600'
                        : 'bg-slate-700 text-gray-300 border-2 border-slate-600 hover:border-slate-500'
                    }`}
                  >
                    Good credit
                  </button>
                  <button
                    onClick={() => setCreditTier('average')}
                    className={`py-3 px-4 rounded-lg font-medium transition-all ${
                      creditTier === 'average'
                        ? 'bg-red-600 text-white border-2 border-red-600'
                        : 'bg-slate-700 text-gray-300 border-2 border-slate-600 hover:border-slate-500'
                    }`}
                  >
                    Average credit
                  </button>
                  <button
                    onClick={() => setCreditTier('challenged')}
                    className={`py-3 px-4 rounded-lg font-medium transition-all ${
                      creditTier === 'challenged'
                        ? 'bg-red-600 text-white border-2 border-red-600'
                        : 'bg-slate-700 text-gray-300 border-2 border-slate-600 hover:border-slate-500'
                    }`}
                  >
                    Challenged credit
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900/50 rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-1">APR</p>
                  <p className="text-xl font-bold text-white">{apr}%</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-1">Term</p>
                  <p className="text-xl font-bold text-white">{termYears} Years (120 months)</p>
                </div>
              </div>

              <div className="border-t border-slate-600 pt-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Amount Applied Upfront</span>
                    <span className="text-white font-semibold">${downPayment.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Amount Borrowed</span>
                    <span className="text-white font-semibold">${financedAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-xl">
                    <span className="text-white font-bold">Estimated Monthly Payment</span>
                    <span className="text-red-500 font-bold">${monthlyPayment.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-900/20 border border-blue-700/30 rounded-lg p-4">
                <p className="text-sm text-blue-200">
                  Estimates are for illustration only. Your actual rate and payment depend on credit qualification, provider underwriting, and program availability. This tool is not a quote, approval, or offer.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-red-500" />
              </div>
              <h2 className="text-2xl font-bold text-white">What if you choose the better roof?</h2>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Current Tier Option
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="number"
                    value={currentTier}
                    onChange={(e) => setCurrentTier(Math.max(0, Number(e.target.value)))}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                    step="1000"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">Example: Standard shingle roof</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Upgrade Amount
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="number"
                    value={upgradeAmount}
                    onChange={(e) => setUpgradeAmount(Math.max(0, Number(e.target.value)))}
                    onBlur={handleUpgradeAmountBlur}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                    step="2500"
                    min="0"
                  />
                </div>
                <div className="flex items-center gap-3 mt-2">
                  <button
                    onClick={decrementUpgradeAmount}
                    aria-label="Decrease upgrade amount"
                    className="px-3 py-1.5 bg-slate-700 border border-slate-600 rounded-lg text-white hover:bg-slate-600 hover:border-slate-500 transition-colors font-medium text-sm"
                  >
                    −
                  </button>
                  <span className="flex-1 text-center text-xs text-gray-400">
                    Adjust in $2,500 increments
                  </span>
                  <button
                    onClick={incrementUpgradeAmount}
                    aria-label="Increase upgrade amount"
                    className="px-3 py-1.5 bg-slate-700 border border-slate-600 rounded-lg text-white hover:bg-slate-600 hover:border-slate-500 transition-colors font-medium text-sm"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="border-t border-slate-600 pt-6">
                <div className="bg-gradient-to-br from-red-900/30 to-red-800/20 rounded-xl p-6 border border-red-700/30">
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-300 mb-1">Upgrade Cost Difference</p>
                      <p className="text-3xl font-bold text-white">${upgradeDifference.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-300 mb-1">Additional Monthly Payment</p>
                      <p className="text-2xl font-bold text-red-400">${upgradeMonthlyPayment.toFixed(2)}/mo</p>
                    </div>
                    <div className="text-xs text-gray-400 pt-3 border-t border-gray-700">
                      <p>Based on {apr}% APR over {termYears} years</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-900/20 border border-green-700/30 rounded-lg p-4">
                <h3 className="font-semibold text-green-300 mb-2">Why Consider an Upgrade?</h3>
                <ul className="space-y-2 text-sm text-green-200">
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span>Potential insurance savings (varies by carrier and property)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span>Better hurricane resistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span>Improved energy efficiency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span>Higher home resale value</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-2xl mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Why Easy Payments Can Make Sense</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Most homeowners compare roofing options by total price. A better way is to compare the monthly difference—especially when you're choosing between Good / Better / Best systems. In some cases, upgrades that improve wind performance and documentation can support better outcomes with your carrier at renewal. Insurance savings vary by property and policy, but the monthly upgrade cost is often smaller than expected.
          </p>
          <p className="text-gray-400">
            <a href="/#case-study" className="text-red-500 hover:text-red-400 transition-colors font-medium">
              See an example of how the right roof system can change the long-term cost picture on our homepage.
            </a>
          </p>
        </div>

        <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700 rounded-2xl p-8 sm:p-10 mb-12">
          <div className="flex items-start gap-4 mb-6">
            <Lightbulb className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Ready to Take the Next Step?
              </h2>
              <p className="text-zinc-300 leading-relaxed mb-4">
                Seeing how manageable monthly payments can be often makes upgrading to a better roof an easy decision. Financing options allow homeowners to move forward without delaying important improvements.
              </p>
              <p className="text-zinc-300 leading-relaxed mb-6">
                To get an accurate recommendation for your home, schedule a free roof inspection with a dual-licensed roofing contractor. Our team will review your roof, confirm options, and help you choose the best solution for your needs and budget.
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
              href="/calculator"
              className="flex-1 px-6 py-4 bg-zinc-700 text-white rounded-lg font-semibold hover:bg-zinc-600 transition-all duration-300 text-center border border-zinc-600"
            >
              Estimate Your Roof Cost
            </a>
          </div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-2xl mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-3">Payment Option Providers</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The following companies offer payment solutions for home improvement projects. All Phase Construction does not guarantee approval, rates, or terms. Contact providers directly for specific information.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2">Service Finance Company</h3>
              <p className="text-sm text-gray-400 mb-4">
                Specializes in home improvement project payment programs
              </p>
              <a
                href="https://www.servicefinance.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors font-medium"
              >
                Visit Website
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2">Home Run Financing</h3>
              <p className="text-sm text-gray-400 mb-4">
                Consumer payment options for residential projects
              </p>
              <a
                href="https://www.homerunfinancing.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors font-medium"
              >
                Visit Website
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2">Ygrene</h3>
              <p className="text-sm text-gray-400 mb-4">
                PACE program for energy-efficient improvements
              </p>
              <a
                href="https://www.ygrene.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors font-medium"
              >
                Visit Website
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="mt-8 bg-yellow-900/20 border border-yellow-700/30 rounded-lg p-6">
            <p className="text-yellow-200 text-sm leading-relaxed">
              <strong className="font-semibold">Important Disclaimer:</strong> All Phase Construction USA does not endorse, guarantee, or make representations about these providers. We are not involved in the application, approval, or administration of payment plans. All decisions regarding creditworthiness, rates, terms, and approvals are made solely by the respective providers. Homeowners should review all terms carefully and contact providers directly for current program details.
            </p>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-block bg-slate-800/50 border border-slate-700 rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-gray-400 mb-6 max-w-xl">
              Contact us today for a free roof assessment and detailed project quote. We'll help you understand all your options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+17542275605"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span>Call (754) 227-5605</span>
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-700 text-white rounded-lg font-semibold hover:bg-slate-600 transition-all duration-300"
              >
                Request Free Assessment
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
