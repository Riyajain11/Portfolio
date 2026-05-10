import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { FaGraduationCap, FaMapMarkerAlt, FaCode } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About <span className="text-gradient">Me</span></h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden glass p-2">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop" 
                alt="Riya Jain" 
                className="rounded-xl w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Full Stack Developer & ECE Student</h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              {portfolioData.about}
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-4 p-4 glass-card">
                <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400 text-xl">
                  <FaGraduationCap />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Education</h4>
                  <p className="text-sm text-slate-400">{portfolioData.education.degree}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 glass-card">
                <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 text-xl">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Location</h4>
                  <p className="text-sm text-slate-400">Bhopal, India</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 rounded-full glass border border-white/5 text-sm text-slate-300">
                CGPA: {portfolioData.education.cgpa}
              </div>
              <div className="px-4 py-2 rounded-full glass border border-white/5 text-sm text-slate-300">
                Technocrats Institute
              </div>
              <div className="px-4 py-2 rounded-full glass border border-white/5 text-sm text-slate-300">
                2023 - 2027
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
