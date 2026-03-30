const awards = [
  { year: "2024", title: "Best CBSE School — Gurugram", desc: "Education World Rankings", emoji: "🏆" },
  { year: "2023", title: "National Science Olympiad Winners", desc: "3 Gold, 5 Silver medals", emoji: "🥇" },
  { year: "2023", title: "Green School Award", desc: "Ministry of Environment", emoji: "🌿" },
  { year: "2022", title: "Sports Excellence Award", desc: "SGFI National Championship", emoji: "⚽" },
];

const unis = ["IIT Delhi", "IIM Ahmedabad", "BITS Pilani", "NIT Warangal", "Oxford", "Stanford", "MIT", "NUS Singapore"];

export default function ResultsSection() {
  return (
    <section id="results" className="bg-card py-24">
      <div className="max-w-[1320px] mx-auto px-8">
        <span className="text-[11px] font-bold tracking-[2px] uppercase text-gold mb-3 block">Results & Achievements</span>
        <h2 className="text-[clamp(26px,3.2vw,42px)] font-extrabold text-navy leading-[1.15] tracking-[-1px]">
          Proven Track <em className="not-italic text-gold">Record</em>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-[60px] items-center mt-10">
          <div>
            <div className="bg-navy rounded-r-xl p-9 mb-[18px]">
              <h3 className="text-[14px] font-medium text-card/50 mb-2">Class XII Board Results 2024</h3>
              <div className="text-[50px] font-black text-gold tracking-[-3px] leading-none">98.4%</div>
              <div className="text-[14px] text-card/60 mt-2">Students scoring 90%+ across streams</div>
            </div>
            <div className="grid grid-cols-2 gap-3.5">
              <div className="bg-cream rounded-r-lg p-6 shadow-m-sm border border-m-gray-100">
                <div className="text-[34px] font-black tracking-[-2px] text-navy">45+</div>
                <div className="text-[11px] text-m-gray-400 font-medium uppercase tracking-[.5px] mt-0.5">Perfect Scores</div>
              </div>
              <div className="bg-cream rounded-r-lg p-6 shadow-m-sm border border-m-gray-100">
                <div className="text-[34px] font-black tracking-[-2px] text-teal">150+</div>
                <div className="text-[11px] text-m-gray-400 font-medium uppercase tracking-[.5px] mt-0.5">University Offers</div>
              </div>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-3.5 mb-6">
              {[
                { emoji: "🏆", title: "Best CBSE School", sub: "Gurugram 2024" },
                { emoji: "🥇", title: "Olympiad Winners", sub: "National Level" },
                { emoji: "🌿", title: "Green School", sub: "Certified Campus" },
                { emoji: "⚽", title: "Sports Excellence", sub: "SGFI Champions" },
              ].map(a => (
                <div key={a.title} className="bg-cream rounded-r-md p-5 border border-m-gray-100 text-center">
                  <div className="text-[28px] mb-2.5">{a.emoji}</div>
                  <h4 className="text-[13px] font-bold text-navy">{a.title}</h4>
                  <p className="text-[11px] text-m-gray-400 font-light mt-0.5">{a.sub}</p>
                </div>
              ))}
            </div>

            <h4 className="text-[14px] font-bold text-navy mb-3">University Placements</h4>
            <div className="flex flex-wrap gap-2">
              {unis.map(u => (
                <span key={u} className="bg-m-gray-50 border border-m-gray-200 rounded-r-sm py-[7px] px-3.5 text-[12px] font-semibold text-m-gray-600">{u}</span>
              ))}
            </div>

            <div className="mt-9 flex flex-col">
              {awards.map(a => (
                <div key={a.title} className="flex gap-4 items-start py-4 border-b border-m-gray-100">
                  <div className="shrink-0 w-[50px] text-[12px] font-bold text-gold pt-0.5">{a.year}</div>
                  <div>
                    <h4 className="text-[14px] font-bold text-navy mb-0.5">{a.title}</h4>
                    <p className="text-[12px] text-m-gray-400 font-light">{a.desc}</p>
                  </div>
                  <span className="ml-auto text-[20px] shrink-0">{a.emoji}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
