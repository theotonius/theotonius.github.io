import { motion } from "motion/react";
import { Mail, MessageSquare, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-tight">
            Let's talk about <br />
            <span className="font-serif italic text-accent">your project</span>.
          </h2>
          <p className="text-white/50 text-lg mb-12 max-w-md">
            Have an idea you want to bring to life? Or just want to say hi? 
            Fill out the form below or send an email directly.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 rounded-2xl glass w-fit">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-xs font-mono text-white/30 uppercase">Email Me</p>
                <p className="font-bold">theotonius2012@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-2xl glass w-fit">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                <MessageSquare size={24} />
              </div>
              <div>
                <p className="text-xs font-mono text-white/30 uppercase">LinkedIn</p>
                <p className="font-bold">linkedin.com/in/darktheo</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-3xl glass border-accent/10"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono text-white/40 uppercase ml-1">Your Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent/50 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-white/40 uppercase ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent/50 transition-colors"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono text-white/40 uppercase ml-1">Subject</label>
              <input 
                type="text" 
                placeholder="Project Inquiry"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent/50 transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono text-white/40 uppercase ml-1">Your Message</label>
              <textarea 
                rows={4}
                placeholder="Tell me about your project..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent/50 transition-colors resize-none"
              />
            </div>
            <button className="w-full bg-accent text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform">
              Send Message
              <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
