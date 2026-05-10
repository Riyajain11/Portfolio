import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { portfolioData } from '../data/portfolio';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown } from 'react-icons/fa';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = portfolioData.title;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [index, fullText]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px] animate-pulse delay-700" />

      <div className="container mx-auto px-6 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-purple-400 text-sm font-medium mb-6 uppercase tracking-widest">
            Welcome to my portfolio
          </span>
          <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tight">
            I'm <span className="text-gradient">{portfolioData.name}</span>
          </h1>
          <div className="h-10 md:h-14 mb-8">
            <p className="text-2xl md:text-4xl text-slate-400 font-medium font-mono">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
          <p className="max-w-2xl mx-auto text-lg text-slate-400 mb-10 leading-relaxed">
            {portfolioData.tagline}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary w-full sm:w-auto"
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary w-full sm:w-auto"
            >
              Contact Me
            </motion.a>
          </div>

          <div className="flex items-center justify-center gap-8 text-2xl text-slate-400">
            {[
              { icon: FaGithub, href: portfolioData.github },
              { icon: FaLinkedin, href: portfolioData.linkedin },
              { icon: FaEnvelope, href: `mailto:${portfolioData.email}` },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: '#a855f7' }}
                className="transition-colors"
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 text-2xl cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <FaChevronDown />
      </motion.div>
    </section>
  );
};

export default Hero;
