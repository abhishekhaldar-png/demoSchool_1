const links = [
  { icon: "🏠", title: "Home", sub: "Hero, stats, Why Choose Us, testimonials", href: "#hero" },
  { icon: "🏫", title: "About Us", sub: "Vision, mission, principal's message", href: "#about" },
  { icon: "📚", title: "Academics", sub: "Curriculum, methodology, results", href: "#academics" },
  { icon: "💰", title: "Fees", sub: "Fee structure, calculator, scholarships", href: "#fees" },
  { icon: "✏️", title: "Admissions", sub: "Apply, timeline, requirements", href: "#admissions" },
  { icon: "🎨", title: "Student Life", sub: "Activities, clubs, sports", href: "#student-life" },
  { icon: "🖼️", title: "Gallery", sub: "Photos and videos", href: "#gallery" },
  { icon: "📞", title: "Contact", sub: "Get in touch", href: "#contact" },
];

interface DrawerMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function DrawerMenu({ open, onClose }: DrawerMenuProps) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-navy/55 backdrop-blur-sm z-[1500] transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div className={`fixed top-0 right-0 bottom-0 w-[min(400px,100vw)] bg-navy z-[1600] transition-transform duration-400 ease-[cubic-bezier(.23,1,.32,1)] flex flex-col overflow-y-auto ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-center justify-between p-6 border-b border-card/[.08]">
          <a href="#hero" className="flex items-center gap-[10px] no-underline" onClick={onClose}>
            <div className="w-[38px] h-[38px] bg-gold rounded-[9px] flex items-center justify-center text-[18px] font-extrabold text-navy">M</div>
            <div>
              <span className="block text-[13px] font-bold text-card leading-tight">Edustoke.international International</span>
              <span className="text-[10px] text-card/40 tracking-[.5px] uppercase">Gurugram · Est. 1998</span>
            </div>
          </a>
          <button onClick={onClose} className="w-9 h-9 rounded-r-sm border border-card/15 bg-transparent text-card text-[18px] cursor-pointer flex items-center justify-center hover:bg-card/[.08]">✕</button>
        </div>

        <div className="py-4 flex-1">
          <div className="text-[10px] font-bold tracking-[2px] uppercase text-card/30 px-7 pt-4 pb-2">Navigation</div>
          {links.map(l => (
            <a
              key={l.title}
              href={l.href}
              onClick={onClose}
              className="flex items-center gap-[14px] py-[13px] px-7 no-underline hover:bg-card/[.06] transition-colors"
            >
              <div className="w-[38px] h-[38px] rounded-[10px] bg-card/[.06] flex items-center justify-center text-[17px] shrink-0">{l.icon}</div>
              <div>
                <span className="block text-[14px] font-semibold text-card">{l.title}</span>
                <span className="block text-[11px] text-card/[.38] font-light mt-px">{l.sub}</span>
              </div>
            </a>
          ))}
        </div>

        <div className="p-6 border-t border-card/[.08]">
          <a href="#admissions" onClick={onClose} className="block w-full py-[14px] rounded-r-md bg-gold text-navy text-center font-bold text-[14px] no-underline hover:bg-[#D4901A] transition-all mb-3">Apply Now — 2025-26</a>
          <a href="#contact" onClick={onClose} className="block w-full py-3 rounded-r-md bg-transparent text-card border border-card/20 text-center font-semibold text-[14px] no-underline hover:border-card/50 transition-all">Contact Us</a>
          <div className="mt-5 flex flex-col gap-2">
            <span className="text-[12px] text-card/[.38] font-light">📞 +91 124-4567890</span>
            <span className="text-[12px] text-card/[.38] font-light">✉️ admissions@Edustoke.international.edu.in</span>
          </div>
        </div>
      </div>
    </>
  );
}
