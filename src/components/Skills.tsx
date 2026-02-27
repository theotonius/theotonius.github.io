import { motion } from "motion/react";

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"] },
  { category: "Backend", items: ["Node.js", "Go", "Python", "PostgreSQL", "Redis", "GraphQL"] },
  { category: "Infrastructure", items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Nginx"] },
  { category: "Tools", items: ["Git", "Vim", "Figma", "Postman", "Linux", "Shell Scripting"] }
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[0.9]">
              Technical <span className="font-serif italic font-light text-white/80">Arsenal</span>
            </h2>
            <p className="text-white/40 text-lg font-light leading-relaxed">
              A comprehensive stack of modern technologies and tools I use to bring complex 
              digital visions to life.
            </p>
          </div>
          <div className="flex flex-col items-end gap-2 text-right">
            <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em]">Stack Status</span>
            <div className="flex items-center gap-2 text-accent font-mono text-xs">
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
              SYSTEM_READY
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Frontend - Large Bento */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 p-10 rounded-[2.5rem] glass flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-12">
                <h3 className="text-accent font-mono text-[10px] uppercase tracking-[0.3em] flex items-center gap-3">
                  <span className="w-1 h-1 bg-accent rounded-full" />
                  Frontend Architecture
                </h3>
                <span className="text-[10px] font-mono text-white/10 group-hover:text-accent/20 transition-colors">01</span>
              </div>
              <div className="flex flex-wrap gap-4">
                {["React Js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js", "Redux", "Zustand"].map((s) => (
                  <motion.span 
                    key={s} 
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-6 py-3 rounded-full bg-white/[0.03] border border-white/[0.05] text-sm font-light hover:border-accent/30 hover:bg-accent/5 transition-all cursor-default"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </div>
            <div className="flex items-end justify-between mt-12">
              <p className="text-white/20 text-[10px] font-mono uppercase tracking-widest">User_Interface_Specialist</p>
              <div className="flex gap-1">
                {[1, 2, 3].map(i => <div key={i} className="w-1 h-1 rounded-full bg-accent/20" />)}
              </div>
            </div>
          </motion.div>

          {/* Backend - Small Bento */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 p-10 rounded-[2.5rem] glass bg-accent/[0.02] border-accent/5 flex flex-col group"
          >
            <div className="flex items-center justify-between mb-12">
              <h3 className="text-accent font-mono text-[10px] uppercase tracking-[0.3em] flex items-center gap-3">
                <span className="w-1 h-1 bg-accent rounded-full" />
                Backend
              </h3>
              <span className="text-[10px] font-mono text-white/10 group-hover:text-accent/20 transition-colors">02</span>
            </div>
            <ul className="space-y-6">
              {["Node Js", "Laravel", "Codeigniter", "PostgreSQL", "Redis", "GraphQL"].map((s) => (
                <motion.li 
                  key={s} 
                  whileHover={{ x: 8 }}
                  className="flex items-center justify-between group/item"
                >
                  <span className="text-white/50 group-hover/item:text-white transition-colors font-light">{s}</span>
                  <div className="h-px flex-1 mx-4 bg-white/5 group-hover/item:bg-accent/20 transition-colors" />
                  <div className="w-1 h-1 rounded-full bg-white/10 group-hover/item:bg-accent transition-colors" />
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Infrastructure - Small Bento */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 p-10 rounded-[2.5rem] glass flex flex-col group"
          >
            <div className="flex items-center justify-between mb-12">
              <h3 className="text-accent font-mono text-[10px] uppercase tracking-[0.3em] flex items-center gap-3">
                <span className="w-1 h-1 bg-accent rounded-full" />
                Cloud
              </h3>
              <span className="text-[10px] font-mono text-white/10 group-hover:text-accent/20 transition-colors">03</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {["AWS", "Docker", "K8s", "CI/CD", "Terraform", "Nginx"].map((s) => (
                <motion.div 
                  key={s} 
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                  className="text-[10px] font-mono text-white/30 p-4 border border-white/[0.03] rounded-2xl text-center transition-all cursor-default"
                >
                  {s}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mobile & Tools - Large Bento */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-8 p-10 rounded-[2.5rem] glass flex flex-col md:flex-row items-center justify-between group gap-12"
          >
            <div className="flex-1">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-accent font-mono text-[10px] uppercase tracking-[0.3em]">Mobile & Workflow</h3>
                <span className="text-[10px] font-mono text-white/10 group-hover:text-accent/20 transition-colors">04</span>
              </div>
              <p className="text-white/40 text-lg font-light leading-relaxed mb-8">
                Specialized in <span className="text-white/80">Android Apps</span> development and 
                maintaining high-efficiency automated workflows.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Kotlin", "Jetpack Compose", "Git", "Figma", "Linux"].map(t => (
                  <span key={t} className="text-[10px] font-mono px-3 py-1 rounded-full border border-white/5 text-white/20 uppercase">{t}</span>
                ))}
              </div>
            </div>
            <div className="flex -space-x-6">
              {[1, 2, 3, 4].map((i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -10, scale: 1.1, zIndex: 10 }}
                  className="w-20 h-20 rounded-3xl border border-white/5 bg-surface flex items-center justify-center text-xs font-mono text-white/20 hover:text-accent hover:border-accent/20 transition-all cursor-default shadow-2xl"
                >
                  0{i}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
