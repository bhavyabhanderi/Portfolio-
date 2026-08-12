import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Send, Mail, Phone, MapPin, Loader2 } from 'lucide-react';

export default function ContactSection() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setLoading(true);
    setStatus('idle');

    const serviceId = 'service_s1jkwhj';
    const templateId = 'template_2id0f5m';
    const publicKey = 'sBs4YwQ6C901S1LXe';

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then(() => {
        setStatus('success');
        form.current?.reset();
      })
      .catch((error) => {
        console.error('Email error:', error);
        setStatus('error');
      })
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Get In <span className="text-primary">Touch</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, damping: 15 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Let's talk about your project</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                I'm currently available to take on new projects, so feel free to send me a message about anything that you want to run past me.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-600">Email me at</h4>
                  <p className="text-gray-900 font-medium">bhavyabhanderi07@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-600">Call me at</h4>
                  <p className="text-gray-900 font-medium">+91 63593 28250</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-600">Location</h4>
                  <p className="text-gray-900 font-medium">Gujarat, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, damping: 15 }}
            className="lg:col-span-3"
          >
            <form ref={form} onSubmit={sendEmail} className="glass-card shadow-sm p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Your Name</label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    className="w-full bg-white/60 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-primary transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Your Email</label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="w-full bg-white/60 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-primary transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-600 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full bg-white/60 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-primary transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-600 mb-2">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-white/60 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-primary to-accent rounded-lg text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {loading ? (
                  <Loader2 className="animate-spin" size={24} />
                ) : (
                  <>
                    Send Message <Send size={20} />
                  </>
                )}
              </button>

              {status === 'success' && (
                <p className="text-green-400 text-center mt-4">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-center mt-4">Failed to send message. Please try again.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
