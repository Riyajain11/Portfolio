import { portfolioData } from '../data/portfolio';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-slate-950">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gradient mb-2">RIYA JAIN</h2>
            <p className="text-slate-500 text-sm">{portfolioData.tagline}</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-6 text-slate-400">
              <a href="#about" className="hover:text-purple-400 transition-colors text-sm uppercase tracking-widest">About</a>
              <a href="#projects" className="hover:text-purple-400 transition-colors text-sm uppercase tracking-widest">Projects</a>
              <a href="#contact" className="hover:text-purple-400 transition-colors text-sm uppercase tracking-widest">Contact</a>
            </div>
            <p className="text-slate-600 text-xs">
              © {currentYear} Riya Jain. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
