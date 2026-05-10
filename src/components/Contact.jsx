import { motion } from 'framer-motion';
import { useState } from 'react';
import { portfolioData } from '../data/portfolio';
import { FaPaperPlane, FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult({ type: '', message: '' });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '1c970fa5-03d5-418a-94ed-536bdfd90f6a',
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: 'Portfolio Contact Form'
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitResult({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitResult({ type: 'error', message: result.message || 'Something went wrong.' });
      }
    } catch (error) {
      setSubmitResult({ type: 'error', message: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
      // Clear message after 5 seconds
      setTimeout(() => setSubmitResult({ type: '', message: '' }), 5000);
    }
  };

  return (
    <section id="contact" className="section-padding bg-slate-950/50 relative overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In <span className="text-gradient">Touch</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach out to me!
          </p>
          <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-3xl font-bold mb-8 text-white">Let's build something <br /><span className="text-purple-400">extraordinary</span> together.</h3>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 text-2xl group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-slate-500 text-sm font-medium uppercase tracking-widest mb-1">Email Me</p>
                  <a href={`mailto:${portfolioData.email}`} className="text-xl text-white font-bold hover:text-purple-400 transition-colors">
                    {portfolioData.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-2xl group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-slate-500 text-sm font-medium uppercase tracking-widest mb-1">Location</p>
                  <p className="text-xl text-white font-bold">{portfolioData.location}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {[
                { icon: FaGithub, href: portfolioData.github, color: 'hover:bg-white hover:text-black' },
                { icon: FaLinkedin, href: portfolioData.linkedin, color: 'hover:bg-[#0077b5] hover:text-white' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl text-slate-400 transition-all duration-300 ${social.color}`}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-xl bg-slate-950/50 border border-white/10 text-white focus:outline-none focus:border-purple-500/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-xl bg-slate-950/50 border border-white/10 text-white focus:outline-none focus:border-purple-500/50 transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400 ml-1">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="How can I help you?"
                  className="w-full px-6 py-4 rounded-xl bg-slate-950/50 border border-white/10 text-white focus:outline-none focus:border-purple-500/50 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400 ml-1">Message</label>
                <textarea 
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message here..."
                  className="w-full px-6 py-4 rounded-xl bg-slate-950/50 border border-white/10 text-white focus:outline-none focus:border-purple-500/50 transition-colors resize-none"
                ></textarea>
              </div>

              {submitResult.message && (
                <div className={`flex items-center gap-2 text-sm font-medium p-4 rounded-xl ${
                  submitResult.type === 'success' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'
                }`}>
                  {submitResult.type === 'success' ? <FaCheckCircle /> : <FaExclamationCircle />}
                  {submitResult.message}
                </div>
              )}

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`btn-primary w-full flex items-center justify-center gap-3 py-4 text-lg transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <FaPaperPlane className="text-sm" />}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
