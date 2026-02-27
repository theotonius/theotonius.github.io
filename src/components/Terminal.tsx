import { useState, useEffect, useRef } from "react";

const COMMANDS: Record<string, string> = {
  help: "Available commands: about, skills, contact, clear, whoami",
  about: "I'm a full-stack developer with 5+ years of experience building scalable web apps.",
  skills: "React, TypeScript, Node.js, Go, AWS, Docker, Kubernetes.",
  contact: "Email: theotonius2012@gmail.com | GitHub: @darktheo",
  whoami: "theotonius2012@gmail.com",
};

export default function Terminal() {
  const [history, setHistory] = useState<string[]>(["Welcome to Darktheo OS v1.0.0", "Type 'help' to see available commands."]);
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
    <div className="rounded-[2rem] overflow-hidden glass border border-white/10 shadow-2xl">
      {/* Terminal Header */}
      <div className="bg-white/5 px-6 py-4 flex items-center justify-between border-b border-white/5">
        <div className="flex gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
        </div>
        <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">darktheo — zsh</span>
      </div>

      {/* Terminal Body */}
      <div 
        ref={scrollRef}
        className="p-8 h-[400px] overflow-y-auto font-mono text-xs leading-relaxed"
      >
        {history.map((line, i) => (
          <div key={i} className={`mb-2 ${line.startsWith(">") ? "text-white/20" : "text-white/60"}`}>
            {line}
          </div>
        ))}
        
        <form onSubmit={handleCommand} className="flex gap-3 mt-4">
          <span className="text-accent">➜</span>
          <span className="text-white/20">~</span>
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
  );
}
