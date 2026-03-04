import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, X, Info, ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "Lumina Dashboard",
    desc: "A high-performance analytics dashboard built with React and real-time data integration.",
    tech: ["React Js", "Tailwind CSS", "Recharts", "Firebase"],
    role: "Frontend Developer",
    type: "Web App",
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
    role: "Backend Developer",
    type: "API",
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
    role: "Full Stack Developer",
    type: "Web App",
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
    role: "Full Stack Developer",
    type: "Web App",
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
    role: "Mobile Developer",
    type: "Mobile App",
    image: "https://picsum.photos/seed/android/800/600",
    link: "#",
    github: "#",
    challenges: "Integrating various hardware sensors (GPS, Accelerometer) while maintaining battery efficiency was a major technical constraint.",
    solutions: "Used Android's WorkManager for background tasks and optimized sensor polling rates. Implemented Jetpack Compose for a modern, reactive UI experience."
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [filterType, setFilterType] = useState<string>('All');
  const [filterRole, setFilterRole] = useState<string>('All');
  const [filterTech, setFilterTech] = useState<string>('All');

  const allTechs = Array.from(new Set(projects.flatMap(p => p.tech))).sort();
  const allRoles = Array.from(new Set(projects.map(p => p.role))).sort();
  const allTypes = Array.from(new Set(projects.map(p => p.type))).sort();

  const filteredProjects = projects.filter(project => {
    const matchType = filterType === 'All' || project.type === filterType;
    const matchRole = filterRole === 'All' || project.role === filterRole;
    const matchTech = filterTech === 'All' || project.tech.includes(filterTech);
    return matchType && matchRole && matchTech;
  });

  const FilterSelect = ({ label, value, options, onChange }: { label: string, value: string, options: string[], onChange: (val: string) => void }) => (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none bg-white/5 border border-white/10 text-white text-sm rounded-full pl-6 pr-12 py-3 outline-none focus:border-accent/50 hover:bg-white/10 transition-colors cursor-pointer"
      >
        <option value="All" className="bg-bg text-white">{label}</option>
        {options.map(opt => (
          <option key={opt} value={opt} className="bg-bg text-white">{opt}</option>
        ))}
      </select>
      <ChevronDown size={14} className="absolute right-5 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" />
    </div>
  );

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-[10px] font-mono text-accent uppercase tracking-[0.4em] mb-8 block font-bold">Selected Works</span>
            <h2 className="text-5xl md:text-8xl font-bold tracking-tight mb-6 leading-[0.85]">
              Digital <br />
              <span className="font-serif italic font-light text-white/80">Artifacts</span>.
            </h2>
          </div>
          <div className="flex flex-col items-end gap-2 text-right">
            <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em]">Directory</span>
            <button className="text-accent font-mono text-xs hover:text-white transition-colors flex items-center gap-2 group">
              VIEW_ARCHIVE()
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-16 flex flex-wrap gap-4 items-center">
          <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest mr-2">Filter By:</span>
          <FilterSelect label="All Types" value={filterType} options={allTypes} onChange={setFilterType} />
          <FilterSelect label="All Roles" value={filterRole} options={allRoles} onChange={setFilterRole} />
          <FilterSelect label="All Technologies" value={filterTech} options={allTechs} onChange={setFilterTech} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer flex flex-col"
                onClick={() => setSelectedProject(project)}
              >
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden glass p-4 mb-8 relative">
                <div className="w-full h-full rounded-[1.8rem] overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out grayscale group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                      <ExternalLink className="text-white w-6 h-6" />
                    </div>
                  </div>
                </div>
                
                {/* Floating Tags */}
                <div className="absolute top-8 left-8 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white/60 uppercase tracking-widest">
                    {project.tech[0]}
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-start px-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                  <p className="text-white/40 text-sm font-light line-clamp-1">{project.desc}</p>
                </div>
                <span className="text-[10px] font-mono text-white/10 group-hover:text-accent/40 transition-colors">0{index + 1}</span>
              </div>
            </motion.div>
            ))}
          </AnimatePresence>
          {filteredProjects.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="col-span-full py-20 text-center"
            >
              <p className="text-white/40 font-mono text-sm">No projects found matching the selected filters.</p>
              <button 
                onClick={() => { setFilterType('All'); setFilterRole('All'); setFilterTech('All'); }}
                className="mt-4 text-accent hover:text-white transition-colors font-mono text-xs uppercase tracking-widest"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-bg/90 backdrop-blur-2xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="max-w-4xl w-full glass rounded-[3rem] overflow-hidden relative"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 w-12 h-12 rounded-full glass flex items-center justify-center text-white/40 hover:text-white transition-colors z-10"
              >
                <X size={20} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="aspect-square md:aspect-auto">
                  <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="p-12 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-accent uppercase tracking-[0.4em] mb-4 block">Project Detail</span>
                    <h3 className="text-4xl font-bold mb-6">{selectedProject.title}</h3>
                    <p className="text-white/60 text-lg font-light leading-relaxed mb-8">{selectedProject.desc}</p>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-[10px] font-mono text-white/20 uppercase tracking-widest mb-3">Challenge</h4>
                        <p className="text-sm text-white/40 leading-relaxed">{selectedProject.challenges}</p>
                      </div>
                      <div>
                        <h4 className="text-[10px] font-mono text-white/20 uppercase tracking-widest mb-3">Solution</h4>
                        <p className="text-sm text-white/40 leading-relaxed">{selectedProject.solutions}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 mt-12">
                    <a href={selectedProject.github} className="flex-1 py-4 rounded-2xl bg-white text-black text-center font-bold text-sm uppercase tracking-widest hover:bg-accent transition-colors">
                      Source Code
                    </a>
                    <a href={selectedProject.link} className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
