import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section id="contact" className="py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-olive-600 mb-12 text-center">
          Get in Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-olive-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-olive-200 focus:outline-none focus:ring-2 focus:ring-olive-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-olive-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-olive-200 focus:outline-none focus:ring-2 focus:ring-olive-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-olive-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-olive-200 focus:outline-none focus:ring-2 focus:ring-olive-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-olive-600 text-white py-2 px-6 rounded-lg hover:bg-olive-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Mail className="text-olive-600 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-lg font-semibold text-olive-600">Email</h3>
                <p className="text-olive-700">huzaif027@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="text-olive-600 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-lg font-semibold text-olive-600">Phone</h3>
                <p className="text-olive-700">+91 6300940175</p>
                <p className="text-olive-700">+91 9014038540</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="text-olive-600 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-lg font-semibold text-olive-600">Location</h3>
                <p className="text-olive-700">Hyderabad, Telangana</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}