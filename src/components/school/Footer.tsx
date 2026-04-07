const columns = [
  { title: "Quick Links", links: ["Home", "About Us", "Academics", "Admissions", "Student Life", "Gallery"] },
  { title: "Academics", links: ["CBSE Curriculum", "Cambridge IGCSE", "Early Years", "Primary School", "Middle School", "Senior School"] },
  { title: "Resources", links: ["School Calendar", "Fee Structure", "Downloads", "Careers", "Blog", "FAQs"] },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-card pt-[72px] pb-8">
      <div className="max-w-[1320px] mx-auto px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1.2fr] gap-9 mb-[52px]">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 bg-gold rounded-[10px] flex items-center justify-center text-[22px] font-extrabold text-navy">M</div>
              <div>
                <span className="block text-[15px] font-bold text-card leading-tight">Edustoke.international International</span>
                <span className="text-[10px] text-card/40 tracking-[.5px] uppercase">Gurugram · Est. 1998</span>
              </div>
            </div>
            <p className="text-[13px] text-card/[.38] font-light leading-[1.7] max-w-[240px]">
              Shaping future leaders through academic excellence, holistic development, and global exposure since 1998.
            </p>
          </div>

          {columns.map(col => (
            <div key={col.title}>
              <h5 className="text-[11px] font-bold tracking-[1.5px] uppercase text-card/[.35] mb-[18px]">{col.title}</h5>
              <ul className="list-none flex flex-col gap-[9px]">
                {col.links.map(l => (
                  <li key={l}><a href="#" className="text-[13px] text-card/60 no-underline hover:text-gold transition-colors font-light">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h5 className="text-[11px] font-bold tracking-[1.5px] uppercase text-card/[.35] mb-[18px]">Newsletter</h5>
            <p className="text-[13px] text-card/[.38] font-light mb-3">Stay updated with school news and events.</p>
            <div className="flex gap-[7px]">
              <input type="email" placeholder="Your email" className="flex-1 py-[9px] px-3 rounded-r-sm border border-card/[.12] bg-card/[.06] text-card font-poppins text-[13px] outline-none placeholder:text-card/30 focus:border-gold" />
              <button className="py-[9px] px-4 rounded-r-sm bg-gold text-navy font-semibold text-[13px] border-none font-poppins cursor-pointer hover:bg-[#D4901A] transition-all">→</button>
            </div>
          </div>
        </div>

        <hr className="border-none border-t border-card/[.07] mb-6" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[12px] text-card/[.28]">© 2025 Edustoke International School, Gurugram. All rights reserved.</p>
          <div className="flex gap-[18px]">
            {["Privacy Policy", "Terms of Use", "Sitemap"].map(l => (
              <a key={l} href="#" className="text-[12px] text-card/[.28] no-underline hover:text-card transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
