import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitStatus('success');
    setIsSubmitting(false);
    console.log(formData);
  };

  const contactInfo = [
    { icon: Mail, title: 'Email', value: 'huzaif027@gmail.com' },
    { 
      icon: Phone, 
      title: 'Phone', 
      value: ['+91 6300940175', '+91 9014038540']
    },
    { icon: MapPin, title: 'Location', value: 'Hyderabad, Telangana' }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-violet-950 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400 mb-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Get in Touch
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="backdrop-blur-sm rounded-xl p-6 bg-black/40 border border-violet-500/20">
                {['name', 'email'].map((field) => (
                  <div key={field} className="mb-6 last:mb-0">
                    <label htmlFor={field} className="block text-blue-300 mb-2 text-sm">
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      id={field}
                      value={formData[field]}
                      onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-black/50 border border-violet-500/30 
                               text-blue-100 placeholder-blue-700 focus:outline-none focus:border-violet-500
                               focus:ring-2 focus:ring-violet-500/50 transition-all duration-300"
                      required
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="message" className="block text-blue-300 mb-2 text-sm">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-violet-500/30 
                             text-blue-100 placeholder-blue-700 focus:outline-none focus:border-violet-500
                             focus:ring-2 focus:ring-violet-500/50 transition-all duration-300"
                    required
                  />
                </div>
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-violet-600 text-white py-3 px-6 
                         rounded-lg hover:from-blue-700 hover:to-violet-700 transition-all duration-300
                         disabled:opacity-50 disabled:cursor-not-allowed
                         flex items-center justify-center space-x-2 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <Loader2 className="animate-spin" size={20} />
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} className="transform group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </motion.button>
              
              {submitStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-center"
                >
                  Message sent successfully!
                </motion.p>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="backdrop-blur-sm rounded-xl p-6 bg-black/40 border border-violet-500/20
                          hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-all duration-500"
              >
                <div className="flex items-start space-x-4">
                  <info.icon className="text-blue-400 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-lg font-semibold text-blue-300">{info.title}</h3>
                    {Array.isArray(info.value) ? (
                      info.value.map((v, i) => (
                        <p key={i} className="text-violet-300">{v}</p>
                      ))
                    ) : (
                      <p className="text-violet-300">{info.value}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}