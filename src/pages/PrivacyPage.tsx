import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Eye, UserX, Mail, FileText } from 'lucide-react';

export default function PrivacyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Privacy Policy | All Phase Construction USA';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Privacy Policy for All Phase Construction USA. Learn how we collect, use, and protect your personal information.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Privacy Policy for All Phase Construction USA. Learn how we collect, use, and protect your personal information.';
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
          <span className="text-white">Privacy Policy</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-zinc-400 mb-8">
            Last Updated: January 1, 2025
          </p>

          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-red-500" />
              <h2 className="text-2xl font-bold">Information We Collect</h2>
            </div>
            <div className="space-y-4 text-zinc-300">
              <p>
                We collect information you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Name, email address, phone number, and mailing address</li>
                <li>Property address and details for roofing services</li>
                <li>Communication preferences</li>
                <li>Project details and service requests</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-red-500" />
              <h2 className="text-2xl font-bold">How We Use Your Information</h2>
            </div>
            <div className="space-y-4 text-zinc-300">
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide roofing services and respond to your inquiries</li>
                <li>Schedule inspections and project consultations</li>
                <li>Send service updates and project communications</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-red-500" />
              <h2 className="text-2xl font-bold">Information Security</h2>
            </div>
            <div className="space-y-4 text-zinc-300">
              <p>
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <UserX className="w-6 h-6 text-red-500" />
              <h2 className="text-2xl font-bold">Information Sharing</h2>
            </div>
            <div className="space-y-4 text-zinc-300">
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share information with:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Service providers who assist in our business operations</li>
                <li>Legal authorities when required by law</li>
                <li>Professional partners necessary for project completion</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-red-500" />
              <h2 className="text-2xl font-bold">Your Rights</h2>
            </div>
            <div className="space-y-4 text-zinc-300">
              <p>
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access and review your personal information</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-red-500" />
              <h2 className="text-2xl font-bold">Contact Us</h2>
            </div>
            <div className="space-y-4 text-zinc-300">
              <p>
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
                <p className="font-semibold text-white mb-2">All Phase Construction USA, LLC</p>
                <p>Email: <a href="mailto:info@allphaseconstructionfl.com" className="text-red-500 hover:text-red-400">info@allphaseconstructionfl.com</a></p>
                <p>Phone: <a href="tel:+17542275605" className="text-red-500 hover:text-red-400">(754) 227-5605</a></p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
            <p className="text-zinc-300">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
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
