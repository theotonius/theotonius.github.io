import { motion } from "motion/react";
import { Briefcase, GraduationCap, Award, Star } from "lucide-react";

const timelineData = [
  {
    year: "2023",
    title: "Senior Full Stack Engineer",
    organization: "TechNova Solutions",
    description: "Architected microservices using Go and implemented real-time dashboards with React. Led a team of 4 developers.",
    icon: Briefcase,
    type: "work"
  },
  {
    year: "2021",
    title: "Frontend Lead",
    organization: "Pixel Perfect Agency",
    description: "Managed a team of 5 developers. Delivered high-end marketing sites and e-commerce platforms for global luxury brands.",
    icon: Briefcase,
    type: "work"
  },
  {
    year: "2019",
    title: "B.Sc. in Computer Science",
    organization: "University of Dhaka",
    description: "Graduated with honors. Specialized in Software Engineering and Human-Computer Interaction.",
    icon: GraduationCap,
    type: "education"
  },
  {
    year: "2018",
    title: "Junior Developer",
    organization: "StartUp Lab",
    description: "Contributed to the core product development. Focused on UI/UX improvements and API integrations.",
    icon: Briefcase,
    type: "work"
  },
  {
    year: "2017",
    title: "Best Innovation Award",
    organization: "National Hackathon",
    description: "Won 1st place for developing an accessibility-focused educational platform.",
    icon: Award,
    type: "award"
  }
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-[10px] font-mono text-accent uppercase tracking-[0.4em] mb-4 block font-bold">Milestones</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Career <span className="font-serif italic font-light text-white/60">Progression</span>
          </h2>
          <p className="text-white/40 text-sm font-light max-w-lg mx-auto">
            A chronological journey through my professional experience, education, and key achievements.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {timelineData.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Dot/Icon */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-bg border border-accent/30 text-accent z-10 shadow-[0_0_15px_rgba(0,255,65,0.2)]">
                    <Icon size={14} />
                  </div>

                  {/* Content Box */}
                  <div className={`ml-12 md:ml-0 w-full md:w-1/2 ${isEven ? "md:pl-12" : "md:pr-12"}`}>
                    <div className="p-6 rounded-2xl border border-white/5 bg-surface/30 backdrop-blur-sm hover:bg-surface/50 hover:border-accent/20 transition-all group">
                      <div className={`flex flex-col ${isEven ? "md:items-start" : "md:items-end"} mb-4`}>
                        <span className="text-xs font-mono text-accent/80 uppercase tracking-widest mb-2">
                          {item.year}
                        </span>
                        <h3 className={`text-xl font-bold text-white group-hover:text-accent transition-colors ${isEven ? "text-left" : "md:text-right text-left"}`}>
                          {item.title}
                        </h3>
                        <p className={`text-sm font-serif italic text-white/60 ${isEven ? "text-left" : "md:text-right text-left"}`}>
                          {item.organization}
                        </p>
                      </div>
                      <p className={`text-white/40 text-sm leading-relaxed ${isEven ? "text-left" : "md:text-right text-left"}`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
