import { motion } from "motion/react";
import { User, Code2, Coffee, Zap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 glass p-2">
            <img
              src="https://picsum.photos/seed/developer/800/800"
              alt="Professional Portrait"
              className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-10" />
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -z-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono mb-6 uppercase tracking-widest">
            <User size={14} />
            About Me
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 leading-tight">
            Crafting digital experiences with <br />
            <span className="font-serif italic text-accent">precision and passion</span>.
          </h2>

          <div className="space-y-6 text-white/60 text-lg leading-relaxed">
            <p>
              I am a dedicated Full-Stack Developer with a deep-rooted passion for building 
              high-performance web applications. With over 5 years of experience in the 
              ever-evolving tech landscape, I specialize in creating scalable systems 
              and intuitive user interfaces.
            </p>
            <p>
              My approach combines technical rigor with a creative mindset. Whether it's 
              architecting complex backend microservices or fine-tuning frontend 
              interactions, I strive for excellence in every line of code I write.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-12">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-accent">
                <Code2 size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm">Clean Code</h4>
                <p className="text-xs text-white/40">Maintainable & Scalable</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-accent">
                <Zap size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm">Fast Delivery</h4>
                <p className="text-xs text-white/40">Optimized Workflow</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-accent">
                <Coffee size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm">Problem Solver</h4>
                <p className="text-xs text-white/40">Analytical Thinking</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
