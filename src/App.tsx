import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Terminal from "./components/Terminal";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen selection:bg-accent selection:text-black">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      <WhatsAppButton />
      
      <main>
        <Hero />
        
        <About />

        <div className="relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
          <Projects />
        </div>

        <Skills />
        
        <Experience />

        <div className="relative py-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold tracking-tighter mb-2">Interactive Console</h2>
            <p className="text-white/40 text-sm">Query the system for more information.</p>
          </div>
          <Terminal />
        </div>

        <Contact />
      </main>

      <Footer />

      {/* Background Noise/Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9999] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}
