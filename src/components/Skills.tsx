import { motion } from "motion/react";

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"] },
  { category: "Backend", items: ["Node.js", "Go", "Python", "PostgreSQL", "Redis", "GraphQL"] },
  { category: "Infrastructure", items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Nginx"] },
  { category: "Tools", items: ["Git", "Vim", "Figma", "Postman", "Linux", "Shell Scripting"] }
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Technical Stack</h2>
          <p className="text-white/50 max-w-xl mx-auto">
            My expertise spans across the entire development lifecycle, from designing 
            intuitive interfaces to architecting robust backend systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Frontend Bento Box */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 p-8 rounded-3xl glass border-accent/10 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-accent font-mono text-sm mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                FRONTEND DEVELOPMENT
              </h3>
              <div className="flex flex-wrap gap-3">
                {["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js", "Redux", "Zustand"].map((s) => (
                  <motion.span 
                    key={s} 
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(var(--accent-rgb), 0.5)" }}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm transition-colors cursor-default"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </div>
            <p className="text-white/30 text-xs mt-8 font-mono">MODERN_UI_SPECIALIST</p>
          </motion.div>

          {/* Backend Bento Box */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-3xl glass border-accent/10 bg-accent/5"
          >
            <h3 className="text-accent font-mono text-sm mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              BACKEND
            </h3>
            <ul className="space-y-4">
              {["Node.js", "Go", "Python", "PostgreSQL", "Redis", "GraphQL"].map((s) => (
                <motion.li 
                  key={s} 
                  whileHover={{ x: 5 }}
                  className="flex items-center justify-between group/item"
                >
                  <span className="text-white/70 group-hover/item:text-accent transition-colors">{s}</span>
                  <motion.div 
                    whileHover={{ scale: 1.5 }}
                    className="w-1.5 h-1.5 rounded-full bg-accent/20 group-hover/item:bg-accent transition-colors" 
                  />
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Infrastructure Bento Box */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-3xl glass border-accent/10"
          >
            <h3 className="text-accent font-mono text-sm mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              INFRASTRUCTURE
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {["AWS", "Docker", "K8s", "CI/CD", "Terraform", "Nginx"].map((s) => (
                <motion.div 
                  key={s} 
                  whileHover={{ scale: 1.05, borderColor: "rgba(var(--accent-rgb), 0.3)", backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                  className="text-xs font-mono text-white/50 p-2 border border-white/5 rounded text-center transition-colors cursor-default"
                >
                  {s}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools Bento Box */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 p-8 rounded-3xl glass border-accent/10 flex items-center justify-between"
          >
            <div>
              <h3 className="text-accent font-mono text-sm mb-4">TOOLS & WORKFLOW</h3>
              <p className="text-white/50 text-sm max-w-xs">
                Git, Vim, Figma, Postman, Linux, Shell Scripting. 
                I believe in efficient workflows and automation.
              </p>
            </div>
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -5, scale: 1.1, zIndex: 10 }}
                  className="w-12 h-12 rounded-full border-2 border-bg bg-surface flex items-center justify-center text-[10px] font-mono cursor-default relative"
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
