import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Timeline from "./components/Timeline";
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
    <div className="min-h-screen bg-bg selection:bg-accent selection:text-black">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-accent z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      <WhatsAppButton />
      
      <main>
        <Hero />
        
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-bg to-transparent z-10" />
          <About />
        </div>

        <Projects />

        <Skills />
        
        <Experience />

        <Timeline />

        <div className="py-32 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-[10px] font-mono text-accent uppercase tracking-[0.4em] mb-4 block font-bold">System Interface</span>
              <h2 className="text-4xl font-bold tracking-tight mb-4">Interactive <span className="font-serif italic font-light text-white/60">Console</span></h2>
              <p className="text-white/40 text-sm font-light">Direct access to the core system parameters and developer logs.</p>
            </div>
            <Terminal />
          </div>
        </div>

        <Contact />
      </main>

      <Footer />

      {/* Background Noise/Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-[9999] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}
