import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Product Manager @ TechNova",
    content: "Theo is an exceptional engineer who consistently delivers high-quality code. His ability to architect complex systems while maintaining a focus on user experience is truly impressive.",
    avatar: "https://i.pravatar.cc/150?u=sarah",
    rating: 5
  },
  {
    name: "David Chen",
    role: "CTO @ Pixel Perfect",
    content: "Working with Theo was a game-changer for our frontend team. He brought in modern practices and a level of technical depth that significantly improved our delivery speed.",
    avatar: "https://i.pravatar.cc/150?u=david",
    rating: 5
  },
  {
    name: "Elena Rodriguez",
    role: "Founder @ StartUp Lab",
    content: "A rare talent who understands both the business and technical sides of a product. Theo's contributions were pivotal during our early-stage growth.",
    avatar: "https://i.pravatar.cc/150?u=elena",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 px-6 bg-surface/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-[10px] font-mono text-accent uppercase tracking-[0.4em] mb-4 block font-bold">Social Proof</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Kind <span className="font-serif italic font-light text-white/60">Words</span>
          </h2>
          <p className="text-white/40 text-sm font-light max-w-lg mx-auto">
            Feedback from colleagues and clients I've had the pleasure of working with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 rounded-[2rem] border border-white/5 bg-surface/30 backdrop-blur-sm hover:bg-surface/50 hover:border-accent/20 transition-all"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                <Quote size={20} />
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={12} className="fill-accent text-accent" />
                ))}
              </div>

              <p className="text-white/60 text-lg font-light leading-relaxed mb-8 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">{testimonial.name}</h4>
                  <p className="text-white/20 font-mono text-[10px] uppercase tracking-widest">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
