import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, X, Info } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "Lumina Dashboard",
    desc: "A high-performance analytics dashboard built with React and real-time data integration.",
    tech: ["React Js", "Tailwind CSS", "Recharts", "Firebase"],
    image: "https://picsum.photos/seed/react/800/600",
    link: "#",
    github: "#",
    challenges: "Managing complex state across multiple nested components while maintaining high performance during rapid data updates was a significant challenge.",
    solutions: "Utilized React Context and custom hooks for efficient state management. Implemented memoization and windowing techniques to handle large datasets smoothly."
  },
  {
    title: "StreamSync API",
    desc: "A scalable Node.js backend for real-time video streaming and user synchronization.",
    tech: ["Node Js", "Express", "Socket.io", "Redis"],
    image: "https://picsum.photos/seed/node/800/600",
    link: "#",
    github: "#",
    challenges: "Ensuring low-latency synchronization between thousands of concurrent users during live streaming events was the primary hurdle.",
    solutions: "Architected a distributed system using Redis Pub/Sub for cross-server communication. Optimized the Node.js event loop and used WebSockets for persistent connections."
  },
  {
    title: "EstatePro ERP",
    desc: "A comprehensive real estate management system developed with Laravel.",
    tech: ["Laravel", "MySQL", "Vue.js", "Bootstrap"],
    image: "https://picsum.photos/seed/laravel/800/600",
    link: "#",
    github: "#",
    challenges: "Building a complex permission system for different user roles (agents, buyers, admins) while ensuring data security was critical.",
    solutions: "Leveraged Laravel's built-in authorization policies and gates. Implemented an Eloquent-based multi-tenant architecture to isolate client data."
  },
  {
    title: "SwiftInventory",
    desc: "An optimized inventory management system built with Codeigniter for high-speed performance.",
    tech: ["Codeigniter", "PHP", "MySQL", "jQuery"],
    image: "https://picsum.photos/seed/ci/800/600",
    link: "#",
    github: "#",
    challenges: "Modernizing a legacy database structure without breaking existing business logic required meticulous planning and testing.",
    solutions: "Refactored the core MVC structure of Codeigniter to improve maintainability. Optimized SQL queries and implemented server-side caching to boost performance."
  },
  {
    title: "FitTrack Pro",
    desc: "A feature-rich native Android application for fitness tracking and health monitoring.",
    tech: ["Android Apps", "Kotlin", "Jetpack Compose", "SQLite"],
    image: "https://picsum.photos/seed/android/800/600",
    link: "#",
    github: "#",
    challenges: "Integrating various hardware sensors (GPS, Accelerometer) while maintaining battery efficiency was a major technical constraint.",
    solutions: "Used Android's WorkManager for background tasks and optimized sensor polling rates. Implemented Jetpack Compose for a modern, reactive UI experience."
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

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
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-surface relative">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="bg-accent text-black p-3 rounded-full hover:scale-110 transition-transform"
                  title="View Details"
                >
                  <Info size={20} />
                </button>
                <a 
                  href={project.github} 
                  className="bg-white/10 text-white p-3 rounded-full hover:bg-white/20 transition-colors"
                  title="GitHub"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="text-[10px] font-mono text-accent hover:underline uppercase tracking-widest"
                >
                  View Details
                </button>
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

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl glass border border-white/10 p-8 md:p-12"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col gap-8">
                <div className="aspect-video rounded-2xl overflow-hidden border border-white/10">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">{selectedProject.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((t) => (
                        <span key={t} className="text-xs font-mono px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/5">
                    <div className="space-y-4">
                      <h4 className="text-xs font-mono text-white/30 uppercase tracking-widest">The Challenge</h4>
                      <p className="text-white/60 leading-relaxed">{selectedProject.challenges}</p>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-xs font-mono text-white/30 uppercase tracking-widest">The Solution</h4>
                      <p className="text-white/60 leading-relaxed">{selectedProject.solutions}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-8">
                    <a 
                      href={selectedProject.link}
                      className="bg-accent text-black px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform"
                    >
                      Live Demo <ExternalLink size={18} />
                    </a>
                    <a 
                      href={selectedProject.github}
                      className="px-8 py-3 rounded-full font-bold border border-white/10 hover:bg-white/5 transition-colors flex items-center gap-2"
                    >
                      Source Code <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
