import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Quantum Analytics",
    desc: "A real-time data visualization platform for quantum computing simulations.",
    tech: ["React", "D3.js", "Rust", "WebAssembly"],
    image: "https://picsum.photos/seed/quantum/800/600",
    link: "#",
    github: "#"
  },
  {
    title: "Neural Mesh",
    desc: "Decentralized AI training network powered by edge computing nodes.",
    tech: ["TypeScript", "Node.js", "P2P", "TensorFlow"],
    image: "https://picsum.photos/seed/neural/800/600",
    link: "#",
    github: "#"
  },
  {
    title: "Aether OS",
    desc: "A lightweight, browser-based operating system for cloud development.",
    tech: ["Next.js", "Docker", "Kubernetes", "Go"],
    image: "https://picsum.photos/seed/aether/800/600",
    link: "#",
    github: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Selected Works</h2>
          <p className="text-white/50 max-w-md">
            A collection of projects that push the boundaries of web technology and user experience.
          </p>
        </div>
        <button className="text-accent font-mono text-sm hover:underline">VIEW_ALL_PROJECTS()</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative flex flex-col gap-4"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-surface">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <div className="flex gap-3">
                  <a href={project.github} className="text-white/40 hover:text-white transition-colors">
                    <Github size={18} />
                  </a>
                  <a href={project.link} className="text-white/40 hover:text-white transition-colors">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              <p className="text-sm text-white/50 line-clamp-2">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-[10px] font-mono px-2 py-1 rounded bg-white/5 border border-white/10 text-white/40">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
