import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const experiences = [
  {
    company: "TechNova Solutions",
    role: "Senior Full Stack Engineer",
    period: "2022 — Present",
    location: "Remote",
    desc: "Leading the development of a cloud-native analytics platform. Architected microservices using Go and implemented real-time dashboards with React.",
    tech: ["Go", "React", "AWS", "Kubernetes"]
  },
  {
    company: "Pixel Perfect Agency",
    role: "Frontend Lead",
    period: "2020 — 2022",
    location: "Dhaka, BD",
    desc: "Managed a team of 5 developers. Delivered high-end marketing sites and e-commerce platforms for global luxury brands.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Shopify"]
  },
  {
    company: "StartUp Lab",
    role: "Junior Developer",
    period: "2018 — 2020",
    location: "Dhaka, BD",
    desc: "Contributed to the core product development. Focused on UI/UX improvements and API integrations.",
    tech: ["React", "Node.js", "MongoDB", "Express"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 bg-surface/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <span className="text-[10px] font-mono text-accent uppercase tracking-[0.4em] mb-8 block font-bold">The Journey</span>
            <h2 className="text-5xl font-bold tracking-tight mb-8 leading-[0.9]">
              Professional <br />
              <span className="font-serif italic font-light text-white/60">Timeline</span>.
            </h2>
            <p className="text-white/40 text-lg font-light leading-relaxed">
              A track record of delivering high-impact solutions across diverse industries and technical landscapes.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative grid grid-cols-1 md:grid-cols-12 gap-6 pb-12 border-b border-white/5 last:border-0"
                >
                  <div className="md:col-span-3">
                    <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest block mb-2">{exp.period}</span>
                    <span className="text-xs font-mono text-accent/60 uppercase tracking-widest">{exp.location}</span>
                  </div>
                  <div className="md:col-span-9">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">{exp.role}</h3>
                        <p className="text-white/60 font-serif italic">{exp.company}</p>
                      </div>
                      <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                        <ArrowRight className="-rotate-45" size={16} />
                      </div>
                    </div>
                    <p className="text-white/40 font-light leading-relaxed mb-6">{exp.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map(t => (
                        <span key={t} className="text-[9px] font-mono px-2 py-0.5 rounded-full border border-white/5 text-white/20 uppercase tracking-tighter">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
