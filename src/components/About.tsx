import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden glass p-4 relative z-10">
              <img 
                src="https://picsum.photos/seed/professional/800/1000" 
                alt="Professional Portrait"
                className="w-full h-full object-cover rounded-[2rem] grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl -z-10" />
            
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-6 -right-6 w-32 h-32 border border-white/5 rounded-full border-dashed"
            />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[10px] font-mono text-accent uppercase tracking-[0.4em] mb-8 block font-bold">The Narrative</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-10 leading-[0.9]">
              Engineering <br />
              with <span className="font-serif italic font-light text-white/80">Purpose</span>.
            </h2>
            
            <div className="space-y-8 text-white/40 text-lg font-light leading-relaxed">
              <p>
                With over 5 years of experience in the digital landscape, I've dedicated my career 
                to the intersection of high-performance engineering and elegant user experiences.
              </p>
              <p>
                My approach is rooted in <span className="text-white/80">technical precision</span> and 
                <span className="text-white/80">creative problem-solving</span>. I don't just build 
                applications; I craft digital ecosystems that are scalable, secure, and intuitive.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-16 pt-16 border-t border-white/5">
              <div>
                <h4 className="text-[10px] font-mono text-white/20 uppercase tracking-widest mb-4">Philosophy</h4>
                <p className="text-sm text-white/60 leading-relaxed">Clean code is not just a standard; it's a commitment to future-proof engineering.</p>
              </div>
              <div>
                <h4 className="text-[10px] font-mono text-white/20 uppercase tracking-widest mb-4">Focus</h4>
                <p className="text-sm text-white/60 leading-relaxed">Specializing in distributed systems, cloud-native architecture, and reactive UIs.</p>
              </div>
            </div>

            <div className="flex items-center gap-12 mt-16">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">5+</span>
                <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Years Exp</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">50+</span>
                <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Projects</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">100%</span>
                <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Commitment</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
