import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Phone,
  CheckCircle2,
  ChevronRight,
  Calendar,
  FileText,
  ClipboardCheck,
  Shield,
  BadgeCheck,
  Building2,
  MapPin,
} from 'lucide-react';

export default function RoofMaintenanceProgramsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Roof Maintenance Programs | All Phase';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Preventative commercial roof maintenance programs that extend roof life, reduce repairs, improve storm readiness, and support insurance documentation.');
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Roof Maintenance Programs for Commercial Properties",
      "serviceType": "Roof Maintenance",
      "description": "Preventative roof maintenance programs for commercial properties. Scheduled inspections, minor repairs, and documentation to extend service life and reduce emergency repair costs.",
      "url": "https://allphaseconstructionfl.com/roof-maintenance-programs",
      "provider": {
        "@id": "https://allphaseconstructionfl.com/#business"
      },
      "areaServed": [
        {
          "@type": "AdministrativeArea",
          "name": "Broward County, Florida"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Palm Beach County, Florida"
        }
      ]
    });
    document.head.appendChild(script);

    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How often should a commercial roof be maintained?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most commercial roofs benefit from maintenance inspections one to two times per year, plus post-storm evaluations."
          }
        },
        {
          "@type": "Question",
          "name": "Does roof maintenance replace the need for repairs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Maintenance reduces the frequency and severity of repairs, but repairs may still be required over time."
          }
        },
        {
          "@type": "Question",
          "name": "Can roof maintenance really extend roof life?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Consistent maintenance can add years to a commercial roof's service life by addressing issues early."
          }
        },
        {
          "@type": "Question",
          "name": "Will roof maintenance help with insurance claims?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Maintenance documentation often strengthens claims and may reduce disputes related to roof condition."
          }
        },
        {
          "@type": "Question",
          "name": "Is roof maintenance required for warranties?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many manufacturer warranties require proof of regular maintenance to remain valid."
          }
        }
      ]
    });
    document.head.appendChild(faqScript);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(faqScript);
    };
  }, []);

  return (
    <><div className="min-h-screen bg-zinc-950 text-white">
      {/* Hero Section */}
      <section className="relative pt-44 pb-20 px-4 bg-gradient-to-b from-zinc-900 to-zinc-950">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-zinc-400 mb-8">
            <Link to="/" className="hover:text-red-500 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Roof Maintenance Programs</span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Roof Maintenance Programs for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
              Commercial Properties
            </span>
          </h1>

          {/* Intro Paragraph */}
          <p className="text-xl text-zinc-300 leading-relaxed mb-8 max-w-4xl">
            Preventative roof maintenance is one of the most effective ways to extend the life of a commercial roof, reduce emergency repairs, and protect long-term asset value. Our roof maintenance programs are designed to identify small issues early—before they become costly failures—while keeping your property inspection-ready and storm-prepared year-round.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              to="/contact"
              className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-lg shadow-lg shadow-red-600/20 text-center"
            >
              Request Program Information
            </Link>
            <a
              href="tel:+17542275605"
              className="px-8 py-4 bg-zinc-800 text-white rounded-lg font-semibold hover:bg-zinc-700 transition-all duration-300 text-lg flex items-center justify-center gap-2"
            >
              <Phone className="w-6 h-6" />
              (754) 227-5605
            </a>
          </div>

          {/* License Badges */}
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-lg px-6 py-3">
              <BadgeCheck className="w-8 h-8 text-red-600" />
              <div>
                <p className="text-sm text-red-600 font-medium">General Contractor</p>
                <p className="text-xl font-bold text-white">CGC-1526236</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-lg px-6 py-3">
              <BadgeCheck className="w-8 h-8 text-red-600" />
              <div>
                <p className="text-sm text-red-600 font-medium">Roofing Contractor</p>
                <p className="text-xl font-bold text-white">CCC-1331464</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Preventative Roof Maintenance Matters */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Why Preventative Roof Maintenance Matters
          </h2>

          <p className="text-lg text-zinc-300 leading-relaxed mb-6">
            Commercial roofs most often fail due to neglect rather than age. Many expensive replacements are avoidable if small issues—like clogged drains, failing sealants, or loose flashings—are identified and corrected early. Without regular inspections, these minor defects quietly progress until they cause leaks, interior damage, or complete system failure.
          </p>

          <p className="text-lg text-zinc-300 leading-relaxed">
            Proactive maintenance allows for predictable budgeting and reduced risk. Instead of facing surprise emergency repairs that disrupt operations and drain reserves, property owners with maintenance programs benefit from scheduled, controlled interventions that preserve roof integrity and extend service life. The difference between a well-maintained roof and a neglected one often amounts to years of additional performance and tens of thousands of dollars in avoided costs.
          </p>
        </div>
      </section>

      {/* Cost of Maintenance vs. Cost of Neglect */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Cost of Maintenance vs. Cost of Neglect
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-zinc-700">
                  <th className="text-left py-4 px-4 text-lg font-bold text-white">Scenario</th>
                  <th className="text-left py-4 px-4 text-lg font-bold text-white">Typical Outcome</th>
                  <th className="text-left py-4 px-4 text-lg font-bold text-white">Long-Term Cost Impact</th>
                </tr>
              </thead>
              <tbody className="text-zinc-300">
                <tr className="border-b border-zinc-800">
                  <td className="py-6 px-4 align-top font-semibold text-white">No maintenance</td>
                  <td className="py-6 px-4 align-top">Undetected leaks, moisture damage, emergency repairs</td>
                  <td className="py-6 px-4 align-top text-red-500 font-semibold">Highest total cost</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="py-6 px-4 align-top font-semibold text-white">Reactive repairs only</td>
                  <td className="py-6 px-4 align-top">Short-term fixes, recurring issues</td>
                  <td className="py-6 px-4 align-top text-yellow-500 font-semibold">Moderate–high cost</td>
                </tr>
                <tr>
                  <td className="py-6 px-4 align-top font-semibold text-white">Scheduled maintenance program</td>
                  <td className="py-6 px-4 align-top">Early detection, controlled repairs, extended roof life</td>
                  <td className="py-6 px-4 align-top text-green-500 font-semibold">Lowest total cost</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            What's Included in Our Roof Maintenance Programs
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 bg-zinc-950 border border-zinc-800 rounded-xl p-6">
              <Calendar className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Scheduled Visual Roof Inspections</h3>
                <p className="text-zinc-300 leading-relaxed">Regular walkthrough assessments to identify developing issues</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-zinc-950 border border-zinc-800 rounded-xl p-6">
              <ClipboardCheck className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Drainage and Scupper Checks</h3>
                <p className="text-zinc-300 leading-relaxed">Clearing debris and verifying proper water flow</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-zinc-950 border border-zinc-800 rounded-xl p-6">
              <Shield className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Sealant, Flashing, and Penetration Reviews</h3>
                <p className="text-zinc-300 leading-relaxed">Inspecting critical transition areas and vulnerable points</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-zinc-950 border border-zinc-800 rounded-xl p-6">
              <CheckCircle2 className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Minor Repairs Before Issues Escalate</h3>
                <p className="text-zinc-300 leading-relaxed">Addressing small problems during routine visits</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-zinc-950 border border-zinc-800 rounded-xl p-6">
              <FileText className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Photo Documentation and Written Reports</h3>
                <p className="text-zinc-300 leading-relaxed">Clear records of roof condition at each visit</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-zinc-950 border border-zinc-800 rounded-xl p-6">
              <Building2 className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Maintenance History Tracking</h3>
                <p className="text-zinc-300 leading-relaxed">Ongoing record of all service activities and findings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A Personal Note from Our Team */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            A Personal Note from Our Team
          </h2>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8">
            <blockquote className="border-l-4 border-red-600 pl-6 py-4">
              <p className="text-xl text-zinc-300 italic mb-4 leading-relaxed">
                "We genuinely enjoy helping building owners save money by making their roofs last longer. A good maintenance program often means delaying a full roof replacement by years. We also value the ongoing relationship it creates—because when a storm hits, our maintenance clients are already in our system, and we can respond immediately when they need us most."
              </p>
              <footer className="text-zinc-400">
                — All Phase Construction USA
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Storm Readiness & Priority Response */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Storm Readiness & Priority Response
          </h2>

          <p className="text-lg text-zinc-300 leading-relaxed mb-6">
            When severe weather strikes South Florida, maintenance clients receive faster post-storm inspections, reduced downtime, and priority response. Because we already have detailed documentation and familiarity with their roof systems, we can immediately assess storm damage, differentiate new problems from pre-existing conditions, and begin mitigation work without delays.
          </p>

          <p className="text-lg text-zinc-300 leading-relaxed">
            This isn't just about convenience—it's about protecting your property when it matters most. After a hurricane, roofing contractors are overwhelmed with requests. Properties enrolled in maintenance programs move to the front of the line because we already know their roof history, have baseline condition photos, and understand their specific vulnerabilities. That speed advantage often prevents minor storm damage from becoming major interior problems.
          </p>
        </div>
      </section>

      {/* Insurance & Risk Management Benefits */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Insurance & Risk Management Benefits (Often Overlooked)
          </h2>

          <p className="text-lg text-zinc-300 leading-relaxed mb-6">
            Many insurance carriers may offer premium discounts or improved underwriting terms when a roof is enrolled in a documented third-party maintenance program. Regular inspections by licensed contractors demonstrate proactive risk management, which some insurers recognize through reduced premiums or better coverage terms.
          </p>

          <p className="text-lg text-zinc-300 leading-relaxed">
            Most building owners are unaware of this benefit. When underwriters see consistent maintenance records, they view the property as lower risk. In Florida's challenging insurance market, anything that improves underwriting perception has value. Even if your carrier doesn't explicitly discount premiums, maintenance documentation strengthens your position during claims by establishing that the roof was properly cared for prior to any loss event.
          </p>
        </div>
      </section>

      {/* How Roof Maintenance Protects Building Owners */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            How Roof Maintenance Protects Building Owners
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-zinc-700">
                  <th className="text-left py-4 px-4 text-lg font-bold text-white">Benefit Area</th>
                  <th className="text-left py-4 px-4 text-lg font-bold text-white">How Maintenance Helps</th>
                </tr>
              </thead>
              <tbody className="text-zinc-300">
                <tr className="border-b border-zinc-800">
                  <td className="py-6 px-4 align-top font-semibold text-white">Insurance</td>
                  <td className="py-6 px-4 align-top">Documented compliance and potential premium discounts</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="py-6 px-4 align-top font-semibold text-white">Budgeting</td>
                  <td className="py-6 px-4 align-top">Fewer emergency expenses</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="py-6 px-4 align-top font-semibold text-white">Asset lifespan</td>
                  <td className="py-6 px-4 align-top">Delays full roof replacement</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="py-6 px-4 align-top font-semibold text-white">Storm response</td>
                  <td className="py-6 px-4 align-top">Faster inspections and mitigation</td>
                </tr>
                <tr>
                  <td className="py-6 px-4 align-top font-semibold text-white">Compliance</td>
                  <td className="py-6 px-4 align-top">Clear inspection records</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Who Our Roof Maintenance Programs Are Best For */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Who Our Roof Maintenance Programs Are Best For
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <Building2 className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-white">Commercial Buildings</h3>
              <p className="text-zinc-300 leading-relaxed">
                Office buildings, retail centers, warehouses, and industrial facilities with flat or low-slope roofing systems
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <Building2 className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-white">Condos and HOAs</h3>
              <p className="text-zinc-300 leading-relaxed">
                Multi-unit residential properties requiring documented maintenance for board oversight and reserve planning
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <Building2 className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-white">Multi-Tenant Properties</h3>
              <p className="text-zinc-300 leading-relaxed">
                Properties with multiple tenants where roof failures create operational and liability risks
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <Building2 className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-white">Property Managers and Asset Owners</h3>
              <p className="text-zinc-300 leading-relaxed">
                Portfolio owners requiring consistent maintenance standards across multiple properties
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Coverage */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <MapPin className="w-10 h-10 text-red-600" />
            <h2 className="text-3xl md:text-5xl font-bold">
              Service Area Coverage
            </h2>
          </div>

          <p className="text-lg text-zinc-300 leading-relaxed mb-8">
            Roof maintenance programs are provided throughout Broward County, Palm Beach County, and surrounding service areas, supported by operations based in Deerfield Beach. Our service territory includes Fort Lauderdale, Boca Raton, West Palm Beach, Pompano Beach, Coral Springs, Delray Beach, Boynton Beach, and the many communities in between.
          </p>

          <p className="text-lg text-zinc-300 leading-relaxed">
            For comprehensive information about our commercial roofing services, visit our{" "}
            <Link
              to="/commercial-roofing"
              className="text-red-500 hover:text-red-400 underline"
            >
              Commercial Roofing page
            </Link>.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">
                How often should a commercial roof be maintained?
              </h3>
              <p className="text-zinc-300 leading-relaxed">
                Most commercial roofs benefit from maintenance inspections one to two times per year, plus post-storm evaluations.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">
                Does roof maintenance replace the need for repairs?
              </h3>
              <p className="text-zinc-300 leading-relaxed">
                No. Maintenance reduces the frequency and severity of repairs, but repairs may still be required over time.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">
                Can roof maintenance really extend roof life?
              </h3>
              <p className="text-zinc-300 leading-relaxed">
                Yes. Consistent maintenance can add years to a commercial roof's service life by addressing issues early.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">
                Will roof maintenance help with insurance claims?
              </h3>
              <p className="text-zinc-300 leading-relaxed">
                Yes. Maintenance documentation often strengthens claims and may reduce disputes related to roof condition.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">
                Is roof maintenance required for warranties?
              </h3>
              <p className="text-zinc-300 leading-relaxed">
                Many manufacturer warranties require proof of regular maintenance to remain valid.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Protect Your Commercial Roof Investment
          </h2>
          <p className="text-xl text-zinc-300 mb-10 leading-relaxed">
            If you own or manage a commercial property and want to explore whether a roof maintenance program makes sense for your building, we'd be happy to discuss your situation. Contact All Phase Construction USA to learn more about our maintenance programs and how they can help extend your roof's service life while reducing long-term costs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/contact"
              className="px-10 py-5 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 text-xl shadow-lg shadow-red-600/20"
            >
              Request Program Information
            </Link>
            <a
              href="tel:+17542275605"
              className="px-10 py-5 bg-zinc-800 text-white rounded-lg font-semibold hover:bg-zinc-700 transition-all duration-300 text-xl flex items-center justify-center gap-2"
            >
              <Phone className="w-6 h-6" />
              (754) 227-5605
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-red-600" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-red-600" />
              <span>Scheduled Maintenance</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-red-600" />
              <span>Priority Storm Response</span>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
