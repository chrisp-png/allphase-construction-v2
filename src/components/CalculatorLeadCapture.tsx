import { useState } from 'react';

interface CalculatorLeadCaptureProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  roofSize: string;
  roofSqft: number;
  roofType: string;
  estimatedPriceLow: number;
  estimatedPriceHigh: number;
}

export default function CalculatorLeadCapture({
  isOpen,
  onClose,
  onSubmit,
  roofSize,
  roofSqft,
  roofType,
  estimatedPriceLow,
  estimatedPriceHigh,
}: CalculatorLeadCaptureProps) {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    street_address: '',
    city: '',
    state: 'FL',
    zip_code: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const estimatedPrice = Math.round((estimatedPriceLow + estimatedPriceHigh) / 2);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const formElement = e.target as HTMLFormElement;
      const response = await fetch(formElement.action, {
        method: 'POST',
        body: new FormData(formElement),
        headers: {
          'Accept': 'application/json'
        }
      });

      if (!response.ok) {
        setError('Failed to submit your information. Please try again.');
        setIsSubmitting(false);
        return;
      }

      onSubmit();
    } catch (err) {
      console.error('Error submitting lead:', err);
      setError('An unexpected error occurred. Please try again.');
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {error && (
        <div className="mb-4 p-3 bg-red-900/20 border border-red-600/50 rounded-lg text-red-400 text-sm">
          {error}
        </div>
      )}

      <form action="https://formspree.io/f/mzdbydvv" method="POST" onSubmit={handleSubmit} className="space-y-4">
        <input type="hidden" name="_subject" value="🏠 New Roof Calculator Lead" />
        <input type="hidden" name="form_source" value="Roof Cost Calculator" />
        <input type="hidden" name="estimated_price" value={estimatedPrice} />
        <input type="hidden" name="roof_type" value={roofType} />
        <input type="hidden" name="roof_size_sqft" value={roofSqft} />

        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="first_name"
            placeholder="First Name *"
            required
            value={formData.first_name}
            onChange={handleChange}
            className="w-full p-4 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last Name *"
            required
            value={formData.last_name}
            onChange={handleChange}
            className="w-full p-4 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number *"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-4 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address *"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full p-4 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        <input
          type="text"
          name="street_address"
          placeholder="Street Address *"
          required
          value={formData.street_address}
          onChange={handleChange}
          className="w-full p-4 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="city"
            placeholder="City *"
            required
            value={formData.city}
            onChange={handleChange}
            className="w-full p-4 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <div className="grid grid-cols-[120px_1fr] gap-2">
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full p-4 bg-slate-900 border border-slate-600 rounded-lg text-white focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="FL">FL</option>
            </select>

            <input
              type="text"
              name="zip_code"
              placeholder="ZIP Code *"
              required
              pattern="[0-9]{5}"
              maxLength={5}
              value={formData.zip_code}
              onChange={handleChange}
              className="w-full p-4 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 rounded-lg font-bold text-lg transition-colors ${
            isSubmitting
              ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
              : 'bg-red-600 text-white hover:bg-red-700'
          }`}
        >
          Get My Estimate →
        </button>

        <p className="text-gray-500 text-sm text-center">
          🔒 Your info is secure and never shared
        </p>
      </form>
    </div>
  );
}
