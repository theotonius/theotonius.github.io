import { motion } from "motion/react";

const experiences = [
  {
    company: "TechNova Solutions",
    role: "Senior Full Stack Engineer",
    period: "2022 — Present",
    desc: "Leading the development of a cloud-native analytics platform. Architected microservices using Go and implemented real-time dashboards with React."
  },
  {
    company: "Pixel Perfect Agency",
    role: "Frontend Lead",
    period: "2020 — 2022",
    desc: "Managed a team of 5 developers. Delivered high-end marketing sites and e-commerce platforms for global luxury brands."
  },
  {
    company: "StartUp Lab",
    role: "Junior Developer",
    period: "2018 — 2020",
    desc: "Contributed to the core product development. Focused on UI/UX improvements and API integrations."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 max-w-5xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl font-bold tracking-tighter mb-4">Professional Journey</h2>
        <p className="text-white/50">My career path through the evolving landscape of software engineering.</p>
      </div>

      <div className="space-y-12">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 group"
          >
            <div className="text-sm font-mono text-white/30 pt-1">{exp.period}</div>
            <div className="md:col-span-3">
              <h3 className="text-xl font-bold group-hover:text-accent transition-colors">{exp.role}</h3>
              <div className="text-sm text-white/60 mb-4">{exp.company}</div>
              <p className="text-white/50 leading-relaxed">{exp.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
