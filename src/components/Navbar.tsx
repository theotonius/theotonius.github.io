import { motion } from "motion/react";
import { Terminal, Github, Twitter, Linkedin } from "lucide-react";

export default function Navbar() {
  const navItems = [
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 glass m-4 rounded-2xl"
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
          <Terminal className="text-black w-5 h-5" />
        </div>
        <span className="font-mono font-bold text-lg tracking-tighter">DARKTHEO</span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <a 
            key={item.name} 
            href={item.href}
            className="text-sm font-medium text-white/60 hover:text-accent transition-colors"
          >
            {item.name}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <a href="https://github.com" target="_blank" className="text-white/60 hover:text-white transition-colors">
          <Github size={20} />
        </a>
        <a href="https://linkedin.com" target="_blank" className="text-white/60 hover:text-white transition-colors">
          <Linkedin size={20} />
        </a>
        <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-accent hover:text-black transition-all">
          Hire Me
        </button>
      </div>
    </motion.nav>
  );
}
