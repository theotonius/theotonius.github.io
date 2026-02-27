import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-px bg-accent/30" />
                <span className="text-[10px] font-mono text-accent uppercase tracking-[0.4em] font-bold">Full Stack Developer</span>
              </div>
              
              <h1 className="text-6xl md:text-[10rem] font-bold tracking-tightest leading-[0.85] mb-12">
                Crafting <br />
                <span className="font-serif italic font-light text-white/60">Digital</span> <br />
                Excellence.
              </h1>

              <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                <p className="text-white/40 text-lg md:text-xl font-light max-w-md leading-relaxed">
                  Specializing in building high-performance web applications with a focus on clean architecture and exceptional user experience.
                </p>
                <div className="flex gap-4">
                  <a href="#projects" className="px-8 py-4 rounded-full bg-white text-black font-bold text-sm uppercase tracking-widest hover:bg-accent transition-colors">
                    View Work
                  </a>
                  <a href="#contact" className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
                    <ArrowRight className="-rotate-45" size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-4 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative aspect-[3/4] rounded-[4rem] overflow-hidden glass p-4"
            >
              <div className="w-full h-full rounded-[3rem] overflow-hidden relative">
                <img 
                  src="https://picsum.photos/seed/theo/800/1200" 
                  alt="Theo" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />
                <div className="absolute bottom-10 left-10">
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest block mb-2">Based in</span>
                  <span className="text-xl font-bold">Dhaka, BD</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-12 left-6 flex items-center gap-4"
        >
          <div className="w-px h-12 bg-white/10 relative overflow-hidden">
            <motion.div 
              animate={{ y: [0, 48] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-4 bg-accent"
            />
          </div>
          <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  );
}
