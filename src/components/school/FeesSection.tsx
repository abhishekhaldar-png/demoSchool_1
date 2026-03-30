import { useState } from "react";

const feeData = [
  { grade: "Playgroup – KG2", tuition: "₹1,20,000", total: "₹1,45,000" },
  { grade: "Grade 1 – 5", tuition: "₹1,50,000", total: "₹1,80,000" },
  { grade: "Grade 6 – 8", tuition: "₹1,80,000", total: "₹2,15,000" },
  { grade: "Grade 9 – 10", tuition: "₹2,10,000", total: "₹2,50,000" },
  { grade: "Grade 11 – 12", tuition: "₹2,40,000", total: "₹2,85,000" },
];

const scholarships = [
  { icon: "🏆", title: "Merit Scholarship", desc: "For students scoring 95%+ in board exams or entrance tests.", pct: "Up to 50%", sub: "tuition waiver" },
  { icon: "🎨", title: "Talent Scholarship", desc: "For exceptional achievement in sports, arts, or music.", pct: "Up to 30%", sub: "tuition waiver" },
  { icon: "🤝", title: "Need-Based Aid", desc: "Financial assistance for deserving students from economically weaker sections.", pct: "Up to 100%", sub: "full support" },
];

export default function FeesSection() {
  const [cycle, setCycle] = useState<"annual" | "quarterly">("annual");

  return (
    <section id="fees" className="bg-navy py-24">
      <div className="max-w-[1320px] mx-auto px-8">
        <span className="text-[11px] font-bold tracking-[2px] uppercase text-gold mb-3 block">Fees & Scholarships</span>
        <h2 className="text-[clamp(26px,3.2vw,42px)] font-extrabold text-card leading-[1.15] tracking-[-1px]">
          Transparent <em className="not-italic text-gold">Fee Structure</em>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] mt-12 items-start">
          {/* Table */}
          <div>
            <div className="flex bg-card/[.08] rounded-full p-1 w-fit mb-7">
              {(["annual", "quarterly"] as const).map(c => (
                <button
                  key={c}
                  onClick={() => setCycle(c)}
                  className={`py-2 px-[22px] rounded-full border-none font-poppins text-[13px] font-semibold cursor-pointer transition-all ${
                    cycle === c ? "bg-gold text-navy shadow-[0_2px_12px_rgba(232,160,32,.35)]" : "bg-transparent text-card/50"
                  }`}
                >
                  {c === "annual" ? "Annual" : "Quarterly"}
                </button>
              ))}
            </div>

            <div className="rounded-r-lg overflow-hidden border border-card/10">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gold/[.18]">
                    <th className="p-[13px_18px] text-[11px] font-bold text-left tracking-[1px] uppercase text-gold-light">Grade</th>
                    <th className="p-[13px_18px] text-[11px] font-bold text-left tracking-[1px] uppercase text-gold-light">Tuition</th>
                    <th className="p-[13px_18px] text-[11px] font-bold text-left tracking-[1px] uppercase text-gold-light">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {feeData.map(f => (
                    <tr key={f.grade} className="hover:[&>td]:bg-card/[.04]">
                      <td className="p-[13px_18px] text-[13px] border-b border-card/[.06] text-card/75 font-light">{f.grade}</td>
                      <td className="p-[13px_18px] text-[13px] border-b border-card/[.06] text-card/75 font-light">{f.tuition}</td>
                      <td className="p-[13px_18px] text-[13px] border-b border-card/[.06] text-gold-light font-bold">{f.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Calculator placeholder */}
          <div className="bg-card/[.06] border border-card/[.12] rounded-r-xl p-9">
            <h3 className="text-[19px] font-extrabold text-card mb-1">Fee Calculator</h3>
            <p className="text-[13px] text-card/40 mb-6 font-light">Estimate your total fees with optional add-ons</p>

            <label className="text-[11px] font-bold tracking-[1px] uppercase text-card/40 mb-[7px] block">Select Grade</label>
            <select className="w-full py-[11px] px-3.5 rounded-r-sm mb-[18px] bg-card/[.08] border border-card/[.12] text-card font-poppins text-[14px] outline-none cursor-pointer focus:border-gold">
              <option>Playgroup – KG2</option>
              <option>Grade 1 – 5</option>
              <option>Grade 6 – 8</option>
              <option>Grade 9 – 10</option>
              <option>Grade 11 – 12</option>
            </select>

            <label className="text-[11px] font-bold tracking-[1px] uppercase text-card/40 mb-[7px] block">Add-ons</label>
            <div className="flex flex-col gap-[9px] mb-[18px]">
              {[
                { label: "School Transport", fee: "₹36,000/yr" },
                { label: "Meals Program", fee: "₹24,000/yr" },
                { label: "After-School Activities", fee: "₹18,000/yr" },
              ].map(a => (
                <label key={a.label} className="flex items-center gap-2.5 cursor-pointer text-[13px] text-card/65 font-light p-[9px_12px] rounded-r-sm border border-card/[.08] bg-card/[.03] hover:border-gold/30 transition-all">
                  <input type="checkbox" className="accent-gold w-3.5 h-3.5 cursor-pointer" />
                  {a.label}
                  <span className="ml-auto text-[11px] text-card/35">{a.fee}</span>
                </label>
              ))}
            </div>

            <button className="w-full py-3 rounded-r-md bg-gold text-navy font-bold text-[14px] border-none font-poppins cursor-pointer hover:bg-[#D4901A] transition-all">Calculate Total</button>
          </div>
        </div>

        {/* Scholarships */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-12">
          {scholarships.map(s => (
            <div key={s.title} className="bg-card/[.05] border border-card/10 rounded-r-lg p-6 hover:bg-card/[.08] hover:-translate-y-[3px] transition-all">
              <div className="text-[28px]">{s.icon}</div>
              <h4 className="text-[14px] font-bold text-card mt-3 mb-1.5">{s.title}</h4>
              <p className="text-[12px] text-card/[.42] leading-relaxed font-light">{s.desc}</p>
              <div className="text-[26px] font-black text-gold tracking-[-1px] mt-3.5">{s.pct}</div>
              <div className="text-[11px] text-card/30">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
