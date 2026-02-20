import { motion } from "motion/react";
import { ArrowRight, Code2, Cpu, Globe } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] -z-10" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-5xl"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          Available for new projects
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 text-gradient leading-tight">
          Transforming Ideas <br />
          into <span className="font-serif italic font-light">Perfect</span> Code.
        </h1>

        <div className="max-w-2xl mx-auto mb-12 p-4 rounded-xl glass font-mono text-left text-sm md:text-base border-accent/20">
          <div className="flex gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <p className="text-accent/80">const developer = {"{"}</p>
          <p className="pl-4 text-white/70">name: 'Your Name',</p>
          <p className="pl-4 text-white/70">role: 'Full-Stack Engineer',</p>
          <p className="pl-4 text-white/70">skills: ['React', 'Node.js', 'Go', 'Cloud'],</p>
          <p className="pl-4 text-white/70">passion: 'Building scalable systems'</p>
          <p className="text-accent/80">{"}"};</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button className="group bg-accent text-black px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform">
            View Projects
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 rounded-full font-bold border border-white/10 hover:bg-white/5 transition-colors">
            About Me
          </button>
        </div>
      </motion.div>
    </section>
  );
}
