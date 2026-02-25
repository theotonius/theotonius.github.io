import { motion, AnimatePresence } from "motion/react";
import { Terminal, Github, Linkedin, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
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

        {/* Desktop Navigation */}
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
          <div className="hidden sm:flex items-center gap-4 mr-2">
            <a href="https://github.com" target="_blank" className="text-white/60 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" className="text-white/60 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
          
          <button className="hidden sm:block bg-white text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-accent hover:text-black transition-all">
            Hire Me
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white/60 hover:text-white transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 md:hidden pt-28 px-6 bg-black/95 backdrop-blur-xl"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-bold tracking-tighter text-white/80 hover:text-accent transition-colors"
                >
                  {item.name}
                </a>
              ))}
              
              <div className="h-px bg-white/10 my-4" />
              
              <div className="flex items-center gap-6">
                <a href="https://github.com" target="_blank" className="text-white/60 hover:text-white transition-colors flex items-center gap-2">
                  <Github size={24} /> GitHub
                </a>
                <a href="https://linkedin.com" target="_blank" className="text-white/60 hover:text-white transition-colors flex items-center gap-2">
                  <Linkedin size={24} /> LinkedIn
                </a>
              </div>
              
              <button className="w-full bg-accent text-black py-4 rounded-2xl font-bold text-lg mt-4">
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
