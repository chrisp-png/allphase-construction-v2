import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, ArrowLeft, CheckCircle, Wrench, Home } from 'lucide-react';

export default function ContactPage() {
  useEffect(() => {
    document.title = 'Contact All Phase | Free Roof Inspection';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Schedule free roof inspection in Broward or Palm Beach County. 60-minute response during business hours. Trusted contractor. Call (754) 227-5605');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Schedule free roof inspection in Broward or Palm Beach County. 60-minute response during business hours. Trusted contractor. Call (754) 227-5605';
      document.head.appendChild(meta);
    }
  }, []);

  const [currentStep, setCurrentStep] = useState(1);
  const [jobType, setJobType] = useState('');
  const [roofType, setRoofType] = useState('');
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    street_address: '',
    city: '',
    state: 'FL',
    zip_code: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleJobTypeSelect = (type: string) => {
    setJobType(type);
    setCurrentStep(2);
  };

  const handleRoofTypeSelect = (type: string) => {
    setRoofType(type);
    setCurrentStep(3);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
        throw new Error('Form submission failed');
      }

      setCurrentStep(4);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your request. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const progress = (currentStep / 4) * 100;

  const serviceAreas = {
    broward: [
      'Fort Lauderdale',
      'Coral Springs',
      'Pompano Beach',
      'Deerfield Beach',
      'Coconut Creek',
      'Parkland',
      'Weston',
      'Davie',
      'Plantation',
      'Sunrise',
      'Hollywood',
      'Pembroke Pines',
      'Miramar'
    ],
    palmBeach: [
      'Boca Raton',
      'Delray Beach',
      'Boynton Beach',
      'Wellington',
      'West Palm Beach',
      'Lake Worth',
      'Jupiter',
      'Palm Beach Gardens',
      'Royal Palm Beach',
      'Loxahatchee',
      'Greenacres',
      'Lantana'
    ]
  };

  return (
    <><div className="min-h-screen bg-black pt-36 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Schedule Your Free Roof Inspection
          </h1>
          <p className="text-xl text-gray-400">
            Takes less than 60 seconds — no obligation, no pressure
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <div className="bg-zinc-900 rounded-xl p-8 border border-zinc-800">
              {currentStep < 4 && (
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Step {currentStep} of 4</span>
                    <span className="text-sm text-gray-400">{Math.round(progress)}%</span>
                  </div>
                  <div className="w-full bg-zinc-800 rounded-full h-2">
                    <div
                      className="bg-red-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              )}

              {currentStep === 1 && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">What do you need?</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <button
                      onClick={() => handleJobTypeSelect('Repair')}
                      className="group p-8 bg-zinc-800 hover:bg-zinc-700 border-2 border-zinc-700 hover:border-red-600 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-600"
                    >
                      <Wrench className="w-12 h-12 text-red-600 mb-4 mx-auto" />
                      <h3 className="text-xl font-semibold text-white mb-2">Roof Repair</h3>
                      <p className="text-gray-400">Fix leaks, damaged shingles, or other issues</p>
                    </button>
                    <button
                      onClick={() => handleJobTypeSelect('Replacement')}
                      className="group p-8 bg-zinc-800 hover:bg-zinc-700 border-2 border-zinc-700 hover:border-red-600 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-600"
                    >
                      <Home className="w-12 h-12 text-red-600 mb-4 mx-auto" />
                      <h3 className="text-xl font-semibold text-white mb-2">Roof Replacement</h3>
                      <p className="text-gray-400">Complete roof installation or replacement</p>
                    </button>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div>
                  <button
                    onClick={handleBack}
                    className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                  <h2 className="text-2xl font-bold text-white mb-6">What type of roof?</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <button
                      onClick={() => handleRoofTypeSelect('Tile')}
                      className="group p-8 bg-zinc-800 hover:bg-zinc-700 border-2 border-zinc-700 hover:border-red-600 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-600"
                    >
                      <div className="text-4xl mb-4">â </div>
                      <h3 className="text-xl font-semibold text-white">Tile</h3>
                    </button>
                    <button
                      onClick={() => handleRoofTypeSelect('Metal')}
                      className="group p-8 bg-zinc-800 hover:bg-zinc-700 border-2 border-zinc-700 hover:border-red-600 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-600"
                    >
                      <div className="text-4xl mb-4">â¬</div>
                      <h3 className="text-xl font-semibold text-white">Metal</h3>
                    </button>
                    <button
                      onClick={() => handleRoofTypeSelect('Shingle')}
                      className="group p-8 bg-zinc-800 hover:bg-zinc-700 border-2 border-zinc-700 hover:border-red-600 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-600"
                    >
                      <div className="text-4xl mb-4">â¢</div>
                      <h3 className="text-xl font-semibold text-white">Shingle</h3>
                    </button>
                    <button
                      onClick={() => handleRoofTypeSelect('Flat')}
                      className="group p-8 bg-zinc-800 hover:bg-zinc-700 border-2 border-zinc-700 hover:border-red-600 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-600"
                    >
                      <div className="text-4xl mb-4">â­</div>
                      <h3 className="text-xl font-semibold text-white">Flat</h3>
                    </button>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div>
                  <button
                    onClick={handleBack}
                    className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                  <h2 className="text-2xl font-bold text-white mb-6">Let's get your inspection scheduled</h2>
                  <form action="https://formspree.io/f/mvzodbwp" method="POST" onSubmit={handleSubmit} className="space-y-6">
                    <input type="hidden" name="_subject" value="ð New Contact Page Submission" />
                    <input type="hidden" name="form_source" value="Contact Page Multi-Step Form" />
                    <input type="hidden" name="projectType" value={`${jobType} - ${roofType}`} />

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-300 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="first-name"
                          name="first_name"
                          required
                          value={formData.first_name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-300 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="last-name"
                          name="last_name"
                          required
                          value={formData.last_name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                          placeholder="Smith"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="street-address" className="block text-sm font-medium text-gray-300 mb-2">
                        Street Address *
                      </label>
                      <input
                        type="text"
                        id="street-address"
                        name="street_address"
                        required
                        value={formData.street_address}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                        placeholder="123 Main Street"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-300 mb-2">
                          City *
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          required
                          value={formData.city}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                          placeholder="Miami"
                        />
                      </div>
                      <div className="grid grid-cols-[120px_1fr] gap-2">
                        <div>
                          <label htmlFor="state" className="block text-sm font-medium text-gray-300 mb-2">
                            State
                          </label>
                          <select
                            id="state"
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                          >
                            <option value="FL">FL</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="zip-code" className="block text-sm font-medium text-gray-300 mb-2">
                            ZIP Code *
                          </label>
                          <input
                            type="text"
                            id="zip-code"
                            name="zip_code"
                            required
                            pattern="[0-9]{5}"
                            maxLength={5}
                            value={formData.zip_code}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                            placeholder="33101"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Additional Details (Optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent resize-none"
                        placeholder="Tell us more about your project..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Submitting...' : 'Request My Free Inspection'}
                    </button>
                    <p className="text-sm text-gray-400 text-center">
                      We'll contact you within 24 hours to confirm your appointment.
                    </p>
                  </form>
                </div>
              )}

              {currentStep === 4 && (
                <div className="text-center py-8">
                  <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                  <h2 className="text-3xl font-bold text-white mb-4">You're All Set!</h2>
                  <p className="text-lg text-gray-300 mb-4">
                    Thank you for choosing All Phase Construction. One of our roofing experts will contact you within 24 hours to schedule your free inspection.
                  </p>
                  <p className="text-gray-400 mb-6">
                    Need immediate assistance? Call us now.
                  </p>
                  <a
                    href="tel:+17542275605"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-600"
                  >
                    <Phone className="w-5 h-5" />
                    Call (754) 227-5605
                  </a>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-zinc-900 rounded-xl p-8 border border-zinc-800">
              <h3 className="text-2xl font-bold text-white mb-4">Prefer to Talk to Someone?</h3>
              <p className="text-gray-400 mb-6">
                Give us a call and speak directly with a roofing expert.
              </p>
              <a
                href="tel:+17542275605"
                className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-600 text-lg mb-6"
              >
                <Phone className="w-6 h-6" />
                (754) 227-5605
              </a>
              <div className="space-y-2 text-gray-400">
                <div className="flex justify-between border-b border-zinc-800 pb-2">
                  <span>Monday - Friday:</span>
                  <span className="text-white">8am - 6pm</span>
                </div>
                <div className="flex justify-between border-b border-zinc-800 pb-2">
                  <span>Saturday:</span>
                  <span className="text-white">9am - 2pm</span>
                </div>
                <div className="flex justify-between pb-2">
                  <span>Sunday:</span>
                  <span className="text-white">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-xl p-8 border border-zinc-800 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Proudly Serving Broward & Palm Beach Counties
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-red-600 mb-4">Broward County</h3>
              <div className="grid grid-cols-2 gap-2 text-gray-400">
                {serviceAreas.broward.map((city) => (
                  <div key={city} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                    {city}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-red-600 mb-4">Palm Beach County</h3>
              <div className="grid grid-cols-2 gap-2 text-gray-400">
                {serviceAreas.palmBeach.map((city) => (
                  <div key={city} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                    {city}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Dual Licensed</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Fully Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>2,500+ Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>5-Star Rated</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
