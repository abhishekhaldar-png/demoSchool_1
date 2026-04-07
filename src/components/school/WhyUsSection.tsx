import { motion } from "framer-motion";

const features = [
  { icon: "🌍", title: "Global Curriculum", desc: "CBSE & Cambridge dual pathway with international exposure and exchange programs." },
  { icon: "🧪", title: "STEM Excellence", desc: "Dedicated labs, robotics club, and hands-on science programs from Grade 1." },
  { icon: "🎭", title: "Holistic Development", desc: "50+ co-curricular activities including arts, sports, music, and leadership programs." },
  { icon: "👩‍🏫", title: "Expert Faculty", desc: "200+ qualified educators with an average 12 years of teaching experience." },
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="bg-card py-24">
      <div className="max-w-[1320px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div className="relative" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="w-full aspect-[3/4] max-h-[500px] rounded-r-xl overflow-hidden">
              <div className="w-full h-full" style={{ background: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&q=80') center/cover" }} />
            </div>
            <div className="absolute -bottom-6 -right-6 w-[55%] aspect-square rounded-r-lg overflow-hidden border-[6px] border-card shadow-m-lg">
              <div className="w-full h-full" style={{ background: "url('https://images.unsplash.com/photo-1562774053-701939374585?w=300&q=80') center/cover" }} />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-[11px] font-bold tracking-[2px] uppercase text-gold mb-3 block">Why Choose Us</span>
            <h2 className="text-[clamp(26px,3.2vw,42px)] font-extrabold text-navy leading-[1.15] tracking-[-1px]">
              A Legacy of <em className="not-italic text-gold">Academic Excellence</em>
            </h2>
            <p className="text-[15px] font-light text-m-gray-600 max-w-[520px] mt-3.5 leading-[1.7]">
              For over 25 years, Edustoke.international has been nurturing young minds to become confident, compassionate global citizens.
            </p>

            <div className="flex flex-col gap-5 mt-9">
              {features.map(f => (
                <div key={f.title} className="flex gap-4 items-start p-[18px] rounded-r-md border border-transparent hover:bg-m-gray-50 hover:border-m-gray-100 transition-all">
                  <div className="w-11 h-11 shrink-0 bg-gold/10 rounded-[12px] flex items-center justify-center text-[20px]">{f.icon}</div>
                  <div>
                    <h4 className="text-[15px] font-bold text-navy mb-1">{f.title}</h4>
                    <p className="text-[13px] text-m-gray-600 leading-relaxed font-light">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
