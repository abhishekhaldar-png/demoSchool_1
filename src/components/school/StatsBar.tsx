const stats = [
  { n: "25+", l: "Years" },
  { n: "3,500+", l: "Students" },
  { n: "200+", l: "Faculty" },
  { n: "98%", l: "Results" },
  { n: "50+", l: "Activities" },
];

export default function StatsBar() {
  return (
    <div className="bg-gold py-12">
      <div className="max-w-[1320px] mx-auto px-8">
        <div className="grid grid-cols-3 lg:grid-cols-5 text-center">
          {stats.map((s, i) => (
            <div key={s.l} className={`px-6 ${i < stats.length - 1 ? "border-r border-navy/15" : ""}`}>
              <div className="text-[38px] font-black text-navy tracking-[-2px]">{s.n}</div>
              <div className="text-[11px] font-semibold text-navy/55 uppercase tracking-[1px] mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
