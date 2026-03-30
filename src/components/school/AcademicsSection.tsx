import { useState } from "react";

const tabs = ["CBSE Curriculum", "Cambridge (IGCSE)", "Methodology", "Assessment"];
const subjects = ["Mathematics", "Sciences", "English", "Social Studies", "Hindi", "Computer Science", "Arts", "Physical Education"];
const methods = [
  { title: "Inquiry-Based Learning", desc: "Students explore concepts through guided questions and research." },
  { title: "Project-Based Learning", desc: "Real-world projects that develop critical thinking skills." },
  { title: "Experiential Learning", desc: "Hands-on activities and field trips for deeper understanding." },
  { title: "Collaborative Learning", desc: "Group work fostering teamwork and communication." },
];

export default function AcademicsSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="academics" className="bg-card py-24">
      <div className="max-w-[1320px] mx-auto px-8">
        <span className="text-[11px] font-bold tracking-[2px] uppercase text-gold mb-3 block">Academics</span>
        <h2 className="text-[clamp(26px,3.2vw,42px)] font-extrabold text-navy leading-[1.15] tracking-[-1px]">
          Excellence in <em className="not-italic text-gold">Education</em>
        </h2>

        <div className="flex gap-2 mb-10 mt-6 flex-wrap">
          {tabs.map((t, i) => (
            <button
              key={t}
              onClick={() => setActiveTab(i)}
              className={`py-[9px] px-5 rounded-full text-[13px] font-medium cursor-pointer border font-poppins transition-all ${
                activeTab === i
                  ? "bg-navy text-card border-navy"
                  : "bg-card text-m-gray-600 border-m-gray-200 hover:border-navy hover:text-navy"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-[60px] items-center">
          <div className="aspect-[4/3] rounded-r-xl overflow-hidden">
            <div className="w-full h-full" style={{ background: "url('https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&q=80') center/cover" }} />
          </div>
          <div>
            <h3 className="text-[20px] font-extrabold text-navy mb-3">{tabs[activeTab]}</h3>
            <p className="text-[14px] text-m-gray-600 font-light leading-[1.7] mb-6">
              Our curriculum is designed to develop well-rounded individuals with strong academic foundations and practical skills for the modern world.
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {subjects.map(s => (
                <span key={s} className="bg-m-gray-50 border border-m-gray-200 rounded-full py-[5px] px-3.5 text-[12px] font-medium text-m-gray-600">{s}</span>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
              {methods.map(m => (
                <div key={m.title} className="bg-m-gray-50 rounded-r-sm p-4 border border-m-gray-100">
                  <h5 className="text-[13px] font-bold text-navy mb-1">{m.title}</h5>
                  <p className="text-[11px] text-m-gray-600 font-light">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
