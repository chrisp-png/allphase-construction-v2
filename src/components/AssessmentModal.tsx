import { X, Clock, CheckCircle, Flame } from 'lucide-react';
import { useState, useEffect } from 'react';

interface AssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const urgencyMessages = [
  'Only 3 inspection slots remaining this week',
  'Only 4 inspection slots remaining this week',
  'Only 5 inspection slots remaining this week',
  'Limited inspection slots available this week',
];

export default function AssessmentModal({ isOpen, onClose }: AssessmentModalProps) {
  const [urgencyMessage, setUrgencyMessage] = useState('');

  useEffect(() => {
    const randomMessage = urgencyMessages[Math.floor(Math.random() * urgencyMessages.length)];
    setUrgencyMessage(randomMessage);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
        onClick={onClose}
        style={{ pointerEvents: 'auto' }}
      />
      <div
        className="fixed inset-0 z-[101] flex items-center justify-center p-4 overflow-y-auto"
        style={{ pointerEvents: 'none' }}
      >
        <div
          className="bg-white rounded-lg shadow-2xl w-full max-w-2xl my-8 relative"
          style={{ pointerEvents: 'auto' }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-600 z-10"
            aria-label="Close modal"
            type="button"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="p-6 sm:p-8">
            <div className="mb-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Get Your Roof Assessment
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Takes just 30 seconds to fill out
                  </p>
                </div>
                <div className="flex-shrink-0 ml-4">
                  <div className="bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center flex-col shadow-lg">
                    <CheckCircle className="w-6 h-6 mb-0.5" />
                    <span className="text-[8px] font-bold leading-tight text-center">100%<br/>GUARANTEE</span>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-3 rounded-r-lg flex items-start gap-2">
                <Clock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">We respond within 60 minutes</span> during business hours to find a time that works with your schedule for a free inspection.
                </p>
              </div>
            </div>

            <form
              action="https://formspree.io/f/mojakkld"
              method="POST"
              className="space-y-4"
            >
              <input type="hidden" name="source" value="main-website-modal" />

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-first-name" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="modal-first-name"
                    name="first_name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-gray-900"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="modal-last-name" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="modal-last-name"
                    name="last_name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-gray-900"
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="modal-phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone <span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  id="modal-phone"
                  name="phone"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-gray-900"
                  placeholder="(754) 555-1234"
                />
              </div>

              <div>
                <label htmlFor="modal-email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="modal-email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-gray-900"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="modal-street-address" className="block text-sm font-medium text-gray-700 mb-1">
                  Street Address <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="modal-street-address"
                  name="street_address"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-gray-900"
                  placeholder="123 Main Street"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-city" className="block text-sm font-medium text-gray-700 mb-1">
                    City <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="modal-city"
                    name="city"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-gray-900"
                    placeholder="Boca Raton"
                  />
                </div>

                <div className="grid grid-cols-[120px_1fr] gap-2">
                  <div>
                    <label htmlFor="modal-state" className="block text-sm font-medium text-gray-700 mb-1">
                      State
                    </label>
                    <select
                      id="modal-state"
                      name="state"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-gray-900"
                    >
                      <option value="FL">FL</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="modal-zip-code" className="block text-sm font-medium text-gray-700 mb-1">
                      ZIP <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="modal-zip-code"
                      name="zip_code"
                      required
                      pattern="[0-9]{5}"
                      maxLength={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-gray-900"
                      placeholder="33101"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="modal-service" className="block text-sm font-medium text-gray-700 mb-1">
                  What do you need? <span className="text-red-600">*</span>
                </label>
                <select
                  id="modal-service"
                  name="service"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-gray-900"
                >
                  <option value="">Select a service...</option>
                  <option value="Roof Replacement">Roof Replacement</option>
                  <option value="Roof Repair">Roof Repair</option>
                  <option value="Storm Damage">Storm Damage</option>
                  <option value="Inspection">Inspection</option>
                  <option value="Wind Mitigation Inspection">Wind Mitigation Inspection</option>
                  <option value="Just Getting Estimates">Just Getting Estimates</option>
                </select>
              </div>

              <div>
                <label htmlFor="modal-message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message (Optional)
                </label>
                <textarea
                  id="modal-message"
                  name="message"
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-gray-900 resize-none"
                  placeholder="Tell us more about your project..."
                ></textarea>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-lg p-3 flex items-center justify-center gap-2">
                <Flame className="w-4 h-4 text-red-600 flex-shrink-0" />
                <p className="text-sm font-semibold text-red-700">
                  {urgencyMessage}
                </p>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2"
              >
                Request Assessment
              </button>

              <p className="text-center text-sm text-gray-600">
                Or call{' '}
                <a
                  href="tel:+17542275605"
                  className="text-red-600 hover:text-red-700 font-semibold"
                >
                  (754) 227-5605
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
