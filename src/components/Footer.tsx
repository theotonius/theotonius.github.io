export default function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div>
            <h3 className="text-2xl font-bold tracking-tight mb-4">Dark <span className="font-serif italic font-light text-white/60">theo</span></h3>
            <p className="text-white/20 text-xs font-mono uppercase tracking-widest">Crafting digital excellence since 2018</p>
          </div>
          
          <div className="flex flex-wrap gap-x-12 gap-y-6">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-mono text-white/10 uppercase tracking-widest">Navigation</span>
              <div className="flex flex-col gap-2">
                {["About", "Projects", "Skills", "Contact"].map(item => (
                  <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-white/40 hover:text-white transition-colors">{item}</a>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-mono text-white/10 uppercase tracking-widest">Connect</span>
              <div className="flex flex-col gap-2">
                {["LinkedIn", "GitHub", "Twitter", "Dribbble"].map(item => (
                  <a key={item} href="#" className="text-sm text-white/40 hover:text-white transition-colors">{item}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center mt-20 pt-8 border-t border-white/5 gap-6">
          <p className="text-[10px] font-mono text-white/10 uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} DARKTHEO. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] font-mono text-white/10 uppercase tracking-widest hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-[10px] font-mono text-white/10 uppercase tracking-widest hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
