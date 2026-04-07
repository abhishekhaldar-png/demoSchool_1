import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import DrawerMenu from "./DrawerMenu";

const academicsMenu = [
  { title: "Early Years", sub: "Playgroup – KG2" },
  { title: "Primary School", sub: "Grades 1–5" },
  { title: "Middle School", sub: "Grades 6–8" },
  { title: "Senior School", sub: "Grades 9–12" },
  { title: "Curriculum", sub: "CBSE & Cambridge" },
  { title: "Methodology", sub: "Inquiry-based" },
  { title: "Assessment", sub: "Holistic evaluation" },
  { title: "Results", sub: "Board results & placements" },
];

const aboutMenu = [
  { title: "Vision & Mission", sub: "Our guiding principles" },
  { title: "Leadership", sub: "Principal's message" },
  { title: "Philosophy", sub: "6-pillar framework" },
  { title: "Accreditations", sub: "CBSE, CIE, IB" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={`bg-white fixed top-0 left-0 right-0 z-[1000] bg-card/97 backdrop-blur-[20px] border-b border-m-gray-100 transition-all duration-300 ${scrolled ? "shadow-m-md" : ""}`}>
        <div className="max-w-[1320px] mx-auto px-8 flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 no-underline">
            <div className="w-11 h-11 bg-navy rounded-[10px] flex items-center justify-center text-[22px] font-extrabold text-gold">M</div>
            <div className="flex flex-col">
              <span className="text-[15px] font-bold text-navy leading-tight">Edustoke International School</span>
              <span className="text-[10px] text-m-gray-400 tracking-[.5px] uppercase">Gurugram · Est. 1998</span>
            </div>
          </a>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-1 list-none">
            <li><a href="#hero" className="px-4 py-2 text-[13.5px] font-semibold bg-navy text-card rounded-full hover:bg-navy-light transition-all">🏠 Home</a></li>
            
            <li className="relative group">
              <button className="px-4 py-2 text-[13.5px] font-medium text-m-gray-600 rounded-r-sm hover:text-navy hover:bg-m-gray-50 transition-all flex items-center gap-1 bg-transparent border-none font-poppins cursor-pointer">
                📚 Academics <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 bg-card rounded-r-md shadow-m-lg border border-m-gray-100 p-6 min-w-[560px] hidden group-hover:grid grid-cols-3 gap-2 animate-in fade-in slide-in-from-top-2">
                {academicsMenu.map(m => (
                  <a key={m.title} href="#academics" className="p-[10px_12px] rounded-r-sm no-underline hover:bg-m-gray-50 transition-colors flex flex-col gap-0.5">
                    <span className="text-[13px] font-semibold text-navy">{m.title}</span>
                    <span className="text-[11px] text-m-gray-400">{m.sub}</span>
                  </a>
                ))}
              </div>
            </li>

            <li><a href="#admissions" className="px-4 py-[7px] text-[13px] font-semibold rounded-full bg-gold text-navy hover:bg-[#D4901A] hover:-translate-y-px transition-all no-underline">✏️ Admission</a></li>

            <li className="relative group">
              <button className="px-4 py-2 text-[13.5px] font-medium text-m-gray-600 rounded-r-sm hover:text-navy hover:bg-m-gray-50 transition-all flex items-center gap-1 bg-transparent border-none font-poppins cursor-pointer">
                About <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 bg-card rounded-r-md shadow-m-lg border border-m-gray-100 p-6 min-w-[400px] hidden group-hover:grid grid-cols-2 gap-2 animate-in fade-in slide-in-from-top-2">
                {aboutMenu.map(m => (
                  <a key={m.title} href="#about" className="p-[10px_12px] rounded-r-sm no-underline hover:bg-m-gray-50 transition-colors flex flex-col gap-0.5">
                    <span className="text-[13px] font-semibold text-navy">{m.title}</span>
                    <span className="text-[11px] text-m-gray-400">{m.sub}</span>
                  </a>
                ))}
              </div>
            </li>

            <li><a href="#fees" className="px-4 py-2 text-[13.5px] font-medium text-m-gray-600 rounded-r-sm hover:text-navy hover:bg-m-gray-50 transition-all no-underline">Fees</a></li>
            <li><a href="#student-life" className="px-4 py-2 text-[13.5px] font-medium text-m-gray-600 rounded-r-sm hover:text-navy hover:bg-m-gray-50 transition-all no-underline">Student Life</a></li>
            <li><a href="#gallery" className="px-4 py-2 text-[13.5px] font-medium text-m-gray-600 rounded-r-sm hover:text-navy hover:bg-m-gray-50 transition-all no-underline">Gallery</a></li>
            <li><a href="#contact" className="px-4 py-2 text-[13.5px] font-medium text-m-gray-600 rounded-r-sm hover:text-navy hover:bg-m-gray-50 transition-all no-underline">Contact</a></li>
          </ul>

          {/* Hamburger */}
          <button
            onClick={() => setDrawerOpen(!drawerOpen)}
            className="lg:hidden flex flex-col justify-center items-center w-11 h-11 bg-navy rounded-[10px] border-none cursor-pointer gap-[5px] p-0"
          >
            <span className={`block w-5 h-0.5 bg-card rounded-sm transition-all duration-300 origin-center ${drawerOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block w-5 h-0.5 bg-card rounded-sm transition-all duration-300 ${drawerOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-card rounded-sm transition-all duration-300 origin-center ${drawerOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      <DrawerMenu open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
