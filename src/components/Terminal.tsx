import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";

const COMMANDS: Record<string, string> = {
  help: "Available commands: about, skills, contact, clear, whoami",
  about: "I'm a full-stack developer with 5+ years of experience building scalable web apps.",
  skills: "React, TypeScript, Node.js, Go, AWS, Docker, Kubernetes.",
  contact: "Email: hello@devfolio.io | GitHub: @devfolio",
  whoami: "guest@devfolio.io",
};

export default function Terminal() {
  const [history, setHistory] = useState<string[]>(["Welcome to DevFolio OS v1.0.0", "Type 'help' to see available commands."]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.toLowerCase().trim();
    
    if (cmd === "clear") {
      setHistory([]);
    } else if (cmd in COMMANDS) {
      setHistory([...history, `> ${input}`, COMMANDS[cmd]]);
    } else if (cmd !== "") {
      setHistory([...history, `> ${input}`, `Command not found: ${cmd}. Type 'help' for assistance.`]);
    }
    
    setInput("");
  };

  return (
    <section className="py-32 px-6 max-w-4xl mx-auto">
      <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl">
        {/* Terminal Header */}
        <div className="bg-white/5 px-4 py-2 flex items-center justify-between border-bottom border-white/10">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <span className="text-[10px] font-mono text-white/30">bash — 80x24</span>
        </div>

        {/* Terminal Body */}
        <div 
          ref={scrollRef}
          className="bg-black/90 p-6 h-[400px] overflow-y-auto font-mono text-sm leading-relaxed"
        >
          {history.map((line, i) => (
            <div key={i} className={line.startsWith(">") ? "text-white/40" : "text-accent"}>
              {line}
            </div>
          ))}
          
          <form onSubmit={handleCommand} className="flex gap-2 mt-2">
            <span className="text-accent">➜</span>
            <span className="text-blue-400">~</span>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent outline-none border-none text-white caret-accent"
              autoFocus
            />
          </form>
        </div>
      </div>
    </section>
  );
}
