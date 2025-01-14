import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-olive-600 mb-12 text-center">
          Get in Touch
        </h2>
        <div className="max-w-lg mx-auto space-y-8">
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
    </section>
  );
}