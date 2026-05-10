import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

const Experience = () => {
  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Work <span className="text-gradient">Experience</span></h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-12 border-l-2 border-slate-800 last:pb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-11px] top-0 w-5 h-5 rounded-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
              
              <div className="glass-card p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                      <FaBriefcase className="text-purple-400 text-xl" />
                      {exp.title}
                    </h3>
                    <p className="text-purple-400 font-medium text-lg">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 font-mono text-sm bg-white/5 px-4 py-2 rounded-full border border-white/5">
                    <FaCalendarAlt />
                    {exp.period}
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="text-slate-400 flex items-start gap-3"
                    >
                      <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                      {resp}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
