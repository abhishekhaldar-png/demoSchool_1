import { useState } from "react";

const steps = [
  { n: 1, title: "Enquiry", sub: "Submit form", done: true },
  { n: 2, title: "Application", sub: "Fill details", done: true },
  { n: 3, title: "Assessment", sub: "Interaction", active: true },
  { n: 4, title: "Result", sub: "Notification" },
  { n: 5, title: "Enrollment", sub: "Fee payment" },
];

const dates = [
  { grade: "Playgroup – KG2", window: "Jan 15 – Mar 30", status: "Open" },
  { grade: "Grade 1 – 5", window: "Feb 1 – Apr 15", status: "Open" },
  { grade: "Grade 6 – 8", window: "Feb 15 – Apr 30", status: "Open" },
  { grade: "Grade 9 – 10", window: "Mar 1 – May 15", status: "Coming Soon" },
  { grade: "Grade 11 – 12", window: "Mar 15 – May 30", status: "Coming Soon" },
];

export default function AdmissionsSection() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", grade: "", message: "" });

  return (
    <section id="admissions" className="bg-cream py-24">
      <div className="max-w-[1320px] mx-auto px-8">
        <span className="text-[11px] font-bold tracking-[2px] uppercase text-gold mb-3 block">Admissions</span>
        <h2 className="text-[clamp(26px,3.2vw,42px)] font-extrabold text-navy leading-[1.15] tracking-[-1px]">
          Begin Your <em className="not-italic text-gold">Journey</em>
        </h2>

        {/* Timeline */}
        <div className="flex flex-col lg:flex-row mt-12 relative">
          <div className="hidden lg:block absolute top-7 left-14 right-14 h-0.5 bg-m-gray-200 z-0" />
          {steps.map(s => (
            <div key={s.n} className="flex-1 flex flex-col items-center text-center relative z-[1] mb-4 lg:mb-0">
              <div className={`w-14 h-14 rounded-full flex items-center justify-center text-[18px] font-extrabold mb-3.5 shadow-m-sm border-2 ${
                s.done ? "bg-navy border-navy text-card" : s.active ? "bg-gold border-gold text-card shadow-[0_4px_16px_rgba(232,160,32,.35)]" : "bg-card border-m-gray-200 text-m-gray-400"
              }`}>
                {s.n}
              </div>
              <div className="text-[13px] font-bold text-navy mb-0.5">{s.title}</div>
              <div className="text-[11px] text-m-gray-400 font-light">{s.sub}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Dates Table */}
          <div>
            <h3 className="text-[18px] font-bold text-navy mb-4">Admission Windows</h3>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy text-card">
                  <th className="p-[13px_16px] text-[12px] font-semibold text-left tracking-[.5px] rounded-tl-r-sm">Grade</th>
                  <th className="p-[13px_16px] text-[12px] font-semibold text-left tracking-[.5px]">Window</th>
                  <th className="p-[13px_16px] text-[12px] font-semibold text-left tracking-[.5px] rounded-tr-r-sm">Status</th>
                </tr>
              </thead>
              <tbody>
                {dates.map(d => (
                  <tr key={d.grade} className="hover:[&>td]:bg-m-gray-50">
                    <td className="p-[13px_16px] text-[13px] border-b border-m-gray-100">{d.grade}</td>
                    <td className="p-[13px_16px] text-[13px] border-b border-m-gray-100">{d.window}</td>
                    <td className="p-[13px_16px] text-[13px] border-b border-m-gray-100 font-semibold text-navy">{d.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Enquiry Form */}
          <div className="bg-card rounded-r-xl p-9 shadow-m-sm border border-m-gray-100">
            <h3 className="text-[18px] font-bold text-navy mb-1">Enquiry Form</h3>
            <p className="text-[13px] text-m-gray-400 font-light mb-6">Fill in your details and we'll get back within 24 hours.</p>
            <form onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-[18px]">
                <div>
                  <label className="text-[11px] font-bold text-m-gray-600 uppercase tracking-[.5px] mb-[7px] block">Parent Name</label>
                  <input type="text" className="w-full py-[11px] px-3.5 border border-m-gray-200 rounded-r-sm font-poppins text-[14px] font-light text-navy bg-card outline-none focus:border-gold transition-colors" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-m-gray-600 uppercase tracking-[.5px] mb-[7px] block">Email</label>
                  <input type="email" className="w-full py-[11px] px-3.5 border border-m-gray-200 rounded-r-sm font-poppins text-[14px] font-light text-navy bg-card outline-none focus:border-gold transition-colors" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-[18px]">
                <div>
                  <label className="text-[11px] font-bold text-m-gray-600 uppercase tracking-[.5px] mb-[7px] block">Phone</label>
                  <input type="tel" className="w-full py-[11px] px-3.5 border border-m-gray-200 rounded-r-sm font-poppins text-[14px] font-light text-navy bg-card outline-none focus:border-gold transition-colors" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-m-gray-600 uppercase tracking-[.5px] mb-[7px] block">Grade Applying For</label>
                  <select className="w-full py-[11px] px-3.5 border border-m-gray-200 rounded-r-sm font-poppins text-[14px] font-light text-navy bg-card outline-none focus:border-gold transition-colors cursor-pointer" value={formData.grade} onChange={e => setFormData({...formData, grade: e.target.value})}>
                    <option value="">Select Grade</option>
                    <option>Playgroup – KG2</option>
                    <option>Grade 1 – 5</option>
                    <option>Grade 6 – 8</option>
                    <option>Grade 9 – 10</option>
                    <option>Grade 11 – 12</option>
                  </select>
                </div>
              </div>
              <div className="mb-[18px]">
                <label className="text-[11px] font-bold text-m-gray-600 uppercase tracking-[.5px] mb-[7px] block">Message</label>
                <textarea className="w-full py-[11px] px-3.5 border border-m-gray-200 rounded-r-sm font-poppins text-[14px] font-light text-navy bg-card outline-none focus:border-gold transition-colors resize-y min-h-[90px]" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} />
              </div>
              <button type="submit" className="w-full py-3 rounded-r-md bg-gold text-navy font-bold text-[14px] border-none font-poppins cursor-pointer hover:bg-[#D4901A] hover:-translate-y-px transition-all">Submit Enquiry →</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
