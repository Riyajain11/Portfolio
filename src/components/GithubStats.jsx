import { motion } from 'framer-motion';

const GithubStats = () => {
  const username = "Riyajain11";

  return (
    <section className="section-padding bg-slate-950/30 relative overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">GitHub <span className="text-gradient">Activity</span></h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="flex flex-col items-center gap-10">
          {/* GitHub Stats Cards */}
          <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-4 rounded-2xl flex justify-center border border-white/5 overflow-hidden"
            >
              <img 
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&title_color=a855f7&text_color=cbd5e1&icon_color=06b6d4&bg_color=00000000&hide_border=true`} 
                alt="GitHub Stats"
                className="max-w-full"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-4 rounded-2xl flex justify-center border border-white/5 overflow-hidden"
            >
              <img 
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&title_color=a855f7&text_color=cbd5e1&bg_color=00000000&hide_border=true`} 
                alt="Top Languages"
                className="max-w-full"
              />
            </motion.div>
          </div>

          {/* GitHub Contribution Graph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-6 rounded-2xl w-full max-w-5xl border border-white/5 overflow-hidden flex justify-center"
          >
            <img 
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=transparent&hide_border=true&stroke=a855f7&ring=06b6d4&fire=purple&currStreakLabel=a855f7&currStreakNum=cbd5e1`} 
              alt="GitHub Streak"
              className="max-w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GithubStats;
