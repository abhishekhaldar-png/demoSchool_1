import { useState } from "react";

const infoCards = [
  { icon: "📍", title: "Address", desc: "Sector 57, Gurugram, Haryana 122011" },
  { icon: "📞", title: "Phone", desc: "+91 124-4567890 / +91 98765 43210" },
  { icon: "✉️", title: "Email", desc: "admissions@meridian.edu.in" },
  { icon: "🕐", title: "Office Hours", desc: "Mon – Sat: 8:00 AM – 4:00 PM" },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  return (
    <section id="contact" className="bg-cream py-24">
      <div className="max-w-[1320px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-[60px]">
          <div>
            <span className="text-[11px] font-bold tracking-[2px] uppercase text-gold mb-3 block">Contact Us</span>
            <h2 className="text-[clamp(26px,3.2vw,42px)] font-extrabold text-navy leading-[1.15] tracking-[-1px]">
              Get in <em className="not-italic text-gold">Touch</em>
            </h2>
            <p className="text-[15px] font-light text-m-gray-600 max-w-[520px] mt-3.5 leading-[1.7]">
              Visit our campus or reach out — we'd love to hear from you.
            </p>

            {/* Map placeholder */}
            <div className="aspect-[4/3] rounded-r-xl overflow-hidden bg-m-gray-100 mt-7 flex items-center justify-center flex-col gap-2.5">
              <span className="text-[40px]">📍</span>
              <span className="text-[14px] text-navy font-semibold">Edustoke International School</span>
              <span className="text-[12px] text-m-gray-400">Sector 57, Gurugram</span>
            </div>

            <div className="mt-7 flex flex-col gap-3.5">
              {infoCards.map(c => (
                <div key={c.title} className="flex gap-3.5 items-start bg-card rounded-r-md p-[18px] shadow-m-sm border border-m-gray-100">
                  <div className="w-10 h-10 rounded-[10px] bg-navy/[.06] flex items-center justify-center text-[16px] shrink-0">{c.icon}</div>
                  <div>
                    <h4 className="text-[13px] font-bold text-navy mb-0.5">{c.title}</h4>
                    <p className="text-[13px] text-m-gray-600 font-light">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-r-xl p-9 shadow-m-sm border border-m-gray-100 self-start">
            <h3 className="text-[18px] font-bold text-navy mb-1">Send a Message</h3>
            <p className="text-[13px] text-m-gray-400 font-light mb-6">We'll respond within 24 hours.</p>
            <form onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-[18px]">
                <div>
                  <label className="text-[11px] font-bold text-m-gray-600 uppercase tracking-[.5px] mb-[7px] block">Name</label>
                  <input type="text" className="w-full py-[11px] px-3.5 border border-m-gray-200 rounded-r-sm font-poppins text-[14px] font-light text-navy bg-card outline-none focus:border-gold transition-colors" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-m-gray-600 uppercase tracking-[.5px] mb-[7px] block">Email</label>
                  <input type="email" className="w-full py-[11px] px-3.5 border border-m-gray-200 rounded-r-sm font-poppins text-[14px] font-light text-navy bg-card outline-none focus:border-gold transition-colors" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-[18px]">
                <div>
                  <label className="text-[11px] font-bold text-m-gray-600 uppercase tracking-[.5px] mb-[7px] block">Phone</label>
                  <input type="tel" className="w-full py-[11px] px-3.5 border border-m-gray-200 rounded-r-sm font-poppins text-[14px] font-light text-navy bg-card outline-none focus:border-gold transition-colors" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
                </div>
                <div>
                  <label className="text-[11px] font-bold tracking-[.5px] uppercase text-m-gray-600 mb-[7px] block">Subject</label>
                  <input type="text" className="w-full py-[11px] px-3.5 border border-m-gray-200 rounded-r-sm font-poppins text-[14px] font-light text-navy bg-card outline-none focus:border-gold transition-colors" value={form.subject} onChange={e => setForm({...form, subject: e.target.value})} />
                </div>
              </div>
              <div className="mb-[18px]">
                <label className="text-[11px] font-bold text-m-gray-600 uppercase tracking-[.5px] mb-[7px] block">Message</label>
                <textarea className="w-full py-[11px] px-3.5 border border-m-gray-200 rounded-r-sm font-poppins text-[14px] font-light text-navy bg-card outline-none focus:border-gold transition-colors resize-y min-h-[120px]" value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
              </div>
              <button type="submit" className="w-full py-3 rounded-r-md bg-gold text-navy font-bold text-[14px] border-none font-poppins cursor-pointer hover:bg-[#D4901A] hover:-translate-y-px transition-all">Send Message →</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
