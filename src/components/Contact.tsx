import { motion } from "motion/react";
import { Mail, MessageSquare, Send, Globe, Clock } from "lucide-react";
import { useEffect, useState } from "react";

export default function Contact() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { 
        hour12: false, 
        hour: "2-digit", 
        minute: "2-digit",
        timeZoneName: "short"
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="contact" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              AVAILABLE FOR NEW PROJECTS
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[0.9]">
              Let's build <br />
              <span className="text-accent italic font-serif">something great</span>.
            </h2>
            
            <p className="text-white/60 text-lg mb-12 max-w-md leading-relaxed">
              I'm currently open to freelance opportunities and full-time positions. 
              Let's discuss how we can work together.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-white/40 mb-4 group-hover:text-accent transition-colors">
                  <Mail size={20} />
                </div>
                <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest mb-1">Email</p>
                <p className="font-medium text-white/90">theotonius2012@gmail.com</p>
              </div>

              <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-white/40 mb-4 group-hover:text-accent transition-colors">
                  <MessageSquare size={20} />
                </div>
                <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest mb-1">LinkedIn</p>
                <p className="font-medium text-white/90">linkedin.com/in/darktheo</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-8 pt-8 border-t border-white/5">
            <div className="flex items-center gap-2 text-white/40">
              <Globe size={14} />
              <span className="text-xs font-mono uppercase tracking-wider">Dhaka, BD</span>
            </div>
            <div className="flex items-center gap-2 text-white/40">
              <Clock size={14} />
              <span className="text-xs font-mono uppercase tracking-wider">{time}</span>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-accent/5 blur-3xl rounded-full opacity-50 pointer-events-none" />
          
          <div className="relative p-8 md:p-10 rounded-[2rem] border border-white/10 bg-surface/50 backdrop-blur-xl">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-mono text-white/40 uppercase tracking-[0.2em] ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Jane Cooper"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-accent/50 focus:bg-white/[0.05] transition-all placeholder:text-white/20"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-mono text-white/40 uppercase tracking-[0.2em] ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="jane@example.com"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-accent/50 focus:bg-white/[0.05] transition-all placeholder:text-white/20"
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-[10px] font-mono text-white/40 uppercase tracking-[0.2em] ml-1">Subject</label>
                <input 
                  type="text" 
                  placeholder="How can I help you?"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-accent/50 focus:bg-white/[0.05] transition-all placeholder:text-white/20"
                />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-mono text-white/40 uppercase tracking-[0.2em] ml-1">Message</label>
                <textarea 
                  rows={5}
                  placeholder="Tell me about your project, goals, and timeline..."
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-accent/50 focus:bg-white/[0.05] transition-all placeholder:text-white/20 resize-none"
                />
              </div>

              <button className="w-full bg-accent text-black font-bold py-5 rounded-xl flex items-center justify-center gap-3 hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-accent/20">
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

