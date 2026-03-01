import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Timeline", href: "#timeline" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? "py-4 bg-bg/80 backdrop-blur-xl border-b border-white/5" : "py-8"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-bold tracking-tight relative z-50"
          onClick={() => setIsOpen(false)}
        >
          Dark <span className="font-serif italic font-light text-white/60">theo</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-[10px] font-mono text-white/40 uppercase tracking-[0.2em] hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <a 
            href="#contact"
            className="px-6 py-2 rounded-full border border-white/10 text-[10px] font-mono uppercase tracking-widest hover:bg-white hover:text-black transition-all"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 relative z-50"
          aria-label="Toggle Menu"
        >
          <div className={`w-6 h-px bg-white transition-all duration-300 origin-center ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <div className={`w-6 h-px bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
          <div className={`w-6 h-px bg-white transition-all duration-300 origin-center ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 h-screen bg-bg/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 z-40"
            >
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-bold tracking-tight hover:font-serif hover:italic transition-all"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 px-8 py-3 rounded-full border border-white/10 text-xs font-mono uppercase tracking-widest hover:bg-white hover:text-black transition-all"
              >
                Let's Talk
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
