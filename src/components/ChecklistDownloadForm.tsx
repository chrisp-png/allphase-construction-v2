import { useState } from 'react';
import { Check, FileText, Shield, HelpCircle, AlertTriangle, DollarSign, MessageSquare } from 'lucide-react';

interface ChecklistDownloadFormProps {
  roofType?: string;
  roofSize?: string;
  roofSqft?: number;
}

export default function ChecklistDownloadForm({ roofType, roofSize, roofSqft }: ChecklistDownloadFormProps) {
  const [formData, setFormData] = useState({ first_name: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const formElement = e.target as HTMLFormElement;
      const response = await fetch(formElement.action, {
        method: 'POST',
        body: new FormData(formElement),
        headers: { 'Accept': 'application/json' }
      });

      if (!response.ok) {
        setError('Something went wrong. Please try again.');
        setIsSubmitting(false);
        return;
      }

      // Trigger the download immediately
      const link = document.createElement('a');
      link.href = '/downloads/Insiders-Guide-Hiring-Roofer-South-Florida.pdf';
      link.download = 'Insiders-Guide-Hiring-Roofer-South-Florida.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setSubmitted(true);
    } catch (err) {
      console.error('Error submitting checklist form:', err);
      setError('An unexpected error occurred. Please try again.');
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-green-600/30 rounded-2xl p-8 shadow-2xl">
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0 w-20 h-24 bg-green-600/10 border-2 border-green-600/30 rounded-xl flex flex-col items-center justify-center gap-1">
            <Check className="w-8 h-8 text-green-500" />
            <span className="text-[10px] font-bold text-green-500 tracking-wide">SENT</span>
          </div>
          <div>
            <p className="text-green-400 font-semibold text-lg mb-2">Your guide is downloading now!</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              We've also sent a copy to your email. Use this guide to compare every contractor you talk to —
              the 15-point checklist and red flags section will save you from making a costly mistake.
            </p>
            <a
              href="/downloads/Insiders-Guide-Hiring-Roofer-South-Florida.pdf"
              download
              className="inline-block mt-4 text-blue-400 hover:text-blue-300 text-sm font-semibold underline underline-offset-2"
            >
              Click here if the download didn't start automatically
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="checklist-download" className="bg-gradient-to-br from-slate-800/60 to-blue-900/20 backdrop-blur-sm border border-blue-600/20 rounded-2xl p-8 shadow-2xl">
      <div className="flex flex-col md:flex-row items-start gap-6">
        {/* PDF icon */}
        <div className="flex-shrink-0 w-20 h-24 bg-blue-600/10 border-2 border-blue-600/30 rounded-xl flex flex-col items-center justify-center gap-1">
          <FileText className="w-8 h-8 text-blue-400" />
          <span className="text-[10px] font-bold text-blue-400 tracking-widest">FREE PDF</span>
        </div>

        <div className="flex-1">
          <div className="inline-block bg-green-600/10 border border-green-600/30 rounded-full px-3 py-0.5 mb-3">
            <span className="text-green-400 text-xs font-bold uppercase tracking-wide">Free Download — 18 Pages</span>
          </div>

          <h3 className="text-xl font-bold text-white mb-2">
            The Insider's Guide to Hiring a Roofer in South Florida
          </h3>
          <p className="text-gray-400 text-sm mb-4 leading-relaxed">
            The 15-point contractor checklist, roof-type buying guides, insurance savings strategies,
            and everything you need to make the right decision. Written by a dual-licensed contractor with 20+ years in South Florida.
          </p>

          <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 mb-5">
            {[
              { icon: Shield, text: 'License & insurance verification steps' },
              { icon: HelpCircle, text: 'Questions to ask before signing' },
              { icon: AlertTriangle, text: 'Red flags that signal a bad contractor' },
              { icon: DollarSign, text: 'Insurance savings strategies' },
              { icon: MessageSquare, text: 'How to compare quotes apples-to-apples' },
              { icon: FileText, text: 'Shingle, tile & metal buying guides' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-gray-300 text-xs">
                <Check className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          {error && (
            <div className="mb-3 p-2 bg-red-900/20 border border-red-600/50 rounded-lg text-red-400 text-sm">
              {error}
            </div>
          )}

          <form
            action="https://formspree.io/f/mzdbydvv"
            method="POST"
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-2"
          >
            <input type="hidden" name="_subject" value="📋 Insider's Guide Download" />
            <input type="hidden" name="form_source" value="Calculator Checklist Download" />
            {roofType && <input type="hidden" name="roof_type" value={roofType} />}
            {roofSize && <input type="hidden" name="roof_size" value={roofSize} />}
            {roofSqft && <input type="hidden" name="roof_size_sqft" value={roofSqft} />}

            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              required
              value={formData.first_name}
              onChange={handleChange}
              className="flex-1 min-w-0 px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white text-sm placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={handleChange}
              className="flex-1 min-w-0 px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white text-sm placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-5 py-3 rounded-lg font-semibold text-sm whitespace-nowrap transition-all ${
                isSubmitting
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
              style={{ touchAction: 'manipulation' }}
            >
              {isSubmitting ? 'Sending...' : 'Download Free Guide'}
            </button>
          </form>
          <p className="text-gray-600 text-xs mt-2">
            We'll email you the PDF too. No spam — just the guide and occasional roofing tips.
          </p>
        </div>
      </div>
    </div>
  );
}
