import { motion } from "motion/react";

const technologies = [
  "React Js", "Tailwind CSS", "Recharts", "Firebase",
  "Node Js", "Express", "Socket.io", "Redis",
  "Laravel", "MySQL", "Vue.js", "Bootstrap",
  "Codeigniter", "PHP", "jQuery",
  "Android Apps", "Kotlin", "Jetpack Compose", "SQLite",
  "TypeScript", "Next.js", "Go", "AWS", "Kubernetes", "MongoDB"
];

export default function TechCloud() {
  // Shuffle array for a more random cloud look
  const shuffledTech = [...technologies].sort(() => Math.random() - 0.5);

  return (
    <section className="py-24 px-6 border-t border-white/5 bg-surface/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[10px] font-mono text-accent uppercase tracking-[0.4em] mb-4 block font-bold">Tech Stack</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Technologies <span className="font-serif italic font-light text-white/60">Used</span>
          </h2>
          <p className="text-white/40 text-sm font-light max-w-2xl mx-auto">
            A comprehensive overview of the tools, languages, and frameworks utilized across various projects and professional experiences.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-5xl mx-auto">
          {shuffledTech.map((tech, index) => {
            // Generate random sizes and opacities for the cloud effect
            const isLarge = index % 5 === 0;
            const isMedium = index % 3 === 0 && !isLarge;
            
            return (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.02,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ scale: 1.1, color: "#00FF41", borderColor: "rgba(0, 255, 65, 0.5)" }}
                className={`
                  cursor-pointer rounded-full border border-white/10 bg-white/5 backdrop-blur-sm
                  transition-colors flex items-center justify-center
                  ${isLarge ? 'px-6 py-3 text-lg font-bold text-white/90' : 
                    isMedium ? 'px-5 py-2.5 text-base font-medium text-white/70' : 
                    'px-4 py-2 text-sm font-light text-white/50'}
                `}
              >
                {tech}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
