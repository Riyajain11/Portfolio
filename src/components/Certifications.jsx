import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding relative overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Licenses & <span className="text-gradient">Certifications</span></h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.certifications.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass p-6 rounded-2xl flex items-center gap-6 border border-white/5 hover:border-purple-500/30 transition-all duration-300 group"
            >
              <div className="p-4 rounded-xl bg-purple-500/10 text-purple-400 text-2xl group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                <FaAward />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold mb-1 leading-tight group-hover:text-purple-400 transition-colors">{cert.name}</h3>
                <div className="flex items-center gap-2 text-slate-500 text-[10px] uppercase tracking-widest font-bold">
                  <span>Verified</span>
                  <FaExternalLinkAlt className="text-[8px]" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
