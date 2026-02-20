import { Github, Twitter, Linkedin, Mail, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-2">
            <h2 className="text-4xl font-bold tracking-tighter mb-6">Let's build something <br /><span className="font-serif italic">extraordinary</span>.</h2>
            <p className="text-white/50 max-w-sm mb-8">
              Currently open to new opportunities and interesting collaborations. 
              Feel free to reach out if you have a project in mind.
            </p>
            <a 
              href="mailto:hello@devfolio.io" 
              className="inline-flex items-center gap-2 text-accent font-bold group"
            >
              hello@devfolio.io
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div>
            <h3 className="font-mono text-xs text-white/30 uppercase tracking-widest mb-6">Social</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/60 hover:text-white flex items-center gap-2 transition-colors"><Github size={18} /> GitHub</a></li>
              <li><a href="#" className="text-white/60 hover:text-white flex items-center gap-2 transition-colors"><Linkedin size={18} /> LinkedIn</a></li>
              <li><a href="#" className="text-white/60 hover:text-white flex items-center gap-2 transition-colors"><Twitter size={18} /> Twitter</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs text-white/30 uppercase tracking-widest mb-6">Navigation</h3>
            <ul className="space-y-4">
              <li><a href="#projects" className="text-white/60 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#skills" className="text-white/60 hover:text-white transition-colors">Skills</a></li>
              <li><a href="#experience" className="text-white/60 hover:text-white transition-colors">Experience</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 gap-4">
          <p className="text-xs text-white/30 font-mono">
            © {new Date().getFullYear()} DEV_FOLIO. ALL_RIGHTS_RESERVED.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-mono text-white/20">MADE_WITH_REACT_AND_TAILWIND</span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-[10px] font-mono text-white/40 uppercase">System Status: Online</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
