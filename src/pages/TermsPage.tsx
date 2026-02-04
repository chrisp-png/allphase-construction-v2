import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FileText, AlertTriangle, Scale, UserCheck, DollarSign, Shield } from 'lucide-react';

export default function TermsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Terms of Service | All Phase Construction USA';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Terms of Service for All Phase Construction USA. Read our terms and conditions for using our website and services.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Terms of Service for All Phase Construction USA. Read our terms and conditions for using our website and services.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <><div className="min-h-screen bg-zinc-950 text-white pt-36 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center space-x-2 text-sm mb-8 text-zinc-400">
          <Link to="/" className="hover:text-red-500 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-white">Terms of Service</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms of Service</h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-zinc-400 mb-8">
            Last Updated: January 1, 2025
          </p>

          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-red-500" />
              <h2 className="text-2xl font-bold">Acceptance of Terms</h2>
            </div>
            <div className="space-y-4 text-zinc-300">
              <p>
                By accessing and using the All Phase Construction USA website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <UserCheck className="w-6 h-6 text-red-500" />
              <h2 className="text-2xl font-bold">Services</h2>
            </div>
            <div className="space-y-4 text-zinc-300">
              <p>
                All Phase Construction USA provides professional roofing services including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Roof inspections and assessments</li>
                <li>Roof repairs and maintenance</li>
                <li>Roof replacement and installation</li>
                <li>Commercial and residential roofing</li>
              </ul>
              <p>
                All services are subject to written agreements and project specifications.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <DollarSign className="w-6 h-6 text-red-500" />
              <h2 className="text-2xl font-bold">Estimates and Pricing</h2>
            </div>
            <div className="space-y-4 text-zinc-300">
              <p>
                All estimates provided are preliminary and subject to change based on actual site conditions. Final pricing will be provided in a written contract before work begins.
              </p>
              <p>
                Roof cost calculator results are estimates only and do not constitute a binding quote.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-6 h-6 text-red-500" />
              <h2 className="text-2xl font-bold">Licensing and Insurance</h2>
            </div>
            <div className="space-y-4 text-zinc-300">
              <p>
                All Phase Construction USA is a dual-licensed contractor:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>General Contractor License: CGC-1526236</li>
                <li>Roofing Contractor License: CCC-1331464</li>
              </ul>
              <p>
                We maintain all required insurance and workers' compensation coverage.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-red-500" />
              <h2 className="text-2xl font-bold">Warranties</h2>
            </div>
            <div className="space-y-4 text-zinc-300">
              <p>
                Warranty terms are provided in individual project contracts. We offer:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Workmanship warranties on our installations</li>
                <li>Manufacturer warranties on materials used</li>
                <li>Extended warranties when applicable</li>
              </ul>
              <p>
                Specific warranty terms vary by project and will be detailed in your contract.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-red-500" />
              <h2 className="text-2xl font-bold">Limitation of Liability</h2>
            </div>
            <div className="space-y-4 text-zinc-300">
              <p>
                To the maximum extent permitted by law, All Phase Construction USA shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our website or services.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Website Use</h2>
            <div className="space-y-4 text-zinc-300">
              <p>
                You agree not to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Use the website for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Transmit any harmful code or malicious content</li>
                <li>Collect information about other users</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
            <p className="text-zinc-300">
              All content on this website, including text, graphics, logos, and images, is the property of All Phase Construction USA and protected by copyright and trademark laws.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
            <p className="text-zinc-300">
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to the website. Your continued use of our services constitutes acceptance of any changes.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
            <p className="text-zinc-300">
              These Terms of Service shall be governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
              <p className="font-semibold text-white mb-2">All Phase Construction USA, LLC</p>
              <p className="text-zinc-300">Email: <a href="mailto:info@allphaseconstructionfl.com" className="text-red-500 hover:text-red-400">info@allphaseconstructionfl.com</a></p>
              <p className="text-zinc-300">Phone: <a href="tel:+17542275605" className="text-red-500 hover:text-red-400">(754) 227-5605</a></p>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}
