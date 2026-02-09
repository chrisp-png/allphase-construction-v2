import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    street_address: '',
    city: '',
    state: 'FL',
    zip_code: '',
    projectType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formElement = e.target as HTMLFormElement;
    await fetch(formElement.action, {
      method: 'POST',
      body: new FormData(formElement),
      headers: {
        'Accept': 'application/json'
      }
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ first_name: '', last_name: '', email: '', phone: '', street_address: '', city: '', state: 'FL', zip_code: '', projectType: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white pb-32 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your project? Contact us today for a free consultation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-8">Let's Build Something Great Together</h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Phone</h4>
                  <a href="tel:+17542275605" className="text-gray-300 hover:text-red-600 transition-colors">(754) 227-5605</a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Email</h4>
                  <a href="mailto:leads@allphaseusa.com" className="text-gray-300 hover:text-red-600 transition-colors">leads@allphaseusa.com</a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Headquarters</h4>
                  <p className="text-gray-300">590 Goolsby Blvd</p>
                  <p className="text-gray-300">Deerfield Beach, FL 33442</p>
                </div>
              </div>
            </div>

            <div className="bg-red-600/10 border-2 border-red-600 rounded-lg p-6">
              <h4 className="font-bold text-xl mb-2">24/7 Emergency Service</h4>
              <p className="text-gray-300">
                We're available around the clock for emergency construction needs and urgent repairs.
              </p>
            </div>
          </div>

          <div className="bg-slate-800 rounded-xl p-8 shadow-2xl overflow-visible relative z-10">
            <h3 className="text-2xl font-bold mb-6">Request a Free Quote</h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center h-96 text-center">
                <CheckCircle className="w-20 h-20 text-green-500 mb-4" />
                <h4 className="text-2xl font-bold mb-2">Thank You!</h4>
                <p className="text-gray-300">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form action="https://formspree.io/f/mzdbydvv" method="POST" onSubmit={handleSubmit} className="space-y-6 pb-6 overflow-visible">
                <input type="hidden" name="_subject" value="📧 New Contact Form Submission" />
                <input type="hidden" name="form_source" value="Contact Us Form" />
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      name="first_name"
                      required
                      value={formData.first_name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all"
                      placeholder="John"
                    />
                  </div>

                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      name="last_name"
                      required
                      value={formData.last_name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="street-address" className="block text-sm font-medium mb-2">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    id="street-address"
                    name="street_address"
                    required
                    value={formData.street_address}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all"
                    placeholder="123 Main Street"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all"
                      placeholder="Miami"
                    />
                  </div>

                  <div className="grid grid-cols-[120px_1fr] gap-2">
                    <div>
                      <label htmlFor="state" className="block text-sm font-medium mb-2">
                        State
                      </label>
                      <select
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all"
                      >
                        <option value="FL">FL</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="zip-code" className="block text-sm font-medium mb-2">
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
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all"
                        placeholder="33101"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select a project type</option>
                    <option value="commercial">Commercial Construction</option>
                    <option value="residential">Residential Project</option>
                    <option value="industrial">Industrial Facility</option>
                    <option value="renovation">Renovation/Remodeling</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full min-h-[56px] py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl relative z-20 touch-manipulation active:scale-[0.98]"
                  style={{ touchAction: 'manipulation' }}
                >
                  <span className="text-lg">Send Message</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
