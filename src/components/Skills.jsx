import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-slate-950/50 relative overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical <span className="text-gradient">Skills</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive set of tools and technologies I use to build high-performance web applications.
          </p>
          <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {portfolioData.skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ 
                y: -10, 
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderColor: skill.color + '44'
              }}
              className="glass p-6 rounded-2xl flex flex-col items-center justify-center gap-4 group transition-all duration-300 border border-white/5"
            >
              <div 
                className="text-4xl transition-transform duration-300 group-hover:scale-110"
                style={{ color: skill.color }}
              >
                <skill.icon />
              </div>
              <span className="text-sm font-medium text-slate-300 text-center">{skill.name}</span>
              
              {/* Subtle glow effect on hover */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"
                style={{ backgroundColor: skill.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
