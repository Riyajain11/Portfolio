import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { portfolioData } from '../data/portfolio';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section-padding bg-slate-950/50 relative overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card overflow-hidden flex flex-col h-full group"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map(t => (
                    <span key={t} className="px-3 py-1 rounded-full bg-purple-500/20 backdrop-blur-md border border-purple-500/30 text-[10px] text-purple-200 font-bold uppercase tracking-wider">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[10px] text-white font-bold uppercase tracking-wider">
                      +{project.tech.length - 3} More
                    </span>
                  )}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mt-auto flex items-center justify-between">
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="text-purple-400 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    View Details <FaExternalLinkAlt />
                  </button>
                  <div className="flex items-center gap-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-xl text-slate-400 hover:text-white transition-colors">
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-slate-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-10 p-2 bg-slate-800/50 hover:bg-slate-700 rounded-full text-white transition-colors"
              >
                <FaTimes />
              </button>
              
              <div className="grid md:grid-cols-2">
                <div className="h-64 md:h-full">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:p-12 overflow-y-auto max-h-[70vh]">
                  <h3 className="text-3xl font-bold mb-2 text-gradient">{selectedProject.title}</h3>
                  <p className="text-purple-400 font-medium mb-6">{selectedProject.subtitle}</p>
                  
                  <h4 className="text-white font-bold mb-3 uppercase tracking-widest text-xs">Overview</h4>
                  <p className="text-slate-400 mb-8 leading-relaxed">
                    {selectedProject.description}
                  </p>
                  
                  <h4 className="text-white font-bold mb-3 uppercase tracking-widest text-xs">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2 mb-10">
                    {selectedProject.tech.map(t => (
                      <span key={t} className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-sm text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-6">
                    <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2">
                      Live Demo <FaExternalLinkAlt />
                    </a>
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center gap-2">
                      Source Code <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
