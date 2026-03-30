import { motion } from "framer-motion";

const tiles = [
  { icon: "🎓", color: "rgba(232,160,32,.1)", title: "Admissions Open", desc: "Apply for 2025–26 session. Limited seats available for all grades.", href: "#admissions" },
  { icon: "📚", color: "rgba(13,27,62,.06)", title: "Our Curriculum", desc: "CBSE & Cambridge pathways with inquiry-based learning methodology.", href: "#academics" },
  { icon: "🏆", color: "rgba(26,139,126,.08)", title: "Achievements", desc: "98% board results. Students placed in top universities worldwide.", href: "#results" },
  { icon: "📞", color: "rgba(13,27,62,.06)", title: "Contact Us", desc: "Schedule a campus visit or connect with our admissions team.", href: "#contact" },
];

export default function QuickTiles() {
  return (
    <section id="quick-tiles" className="bg-cream py-16">
      <div className="max-w-[1320px] mx-auto px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tiles.map((t, i) => (
            <motion.a
              key={t.title}
              href={t.href}
              className="bg-card rounded-r-lg p-8 pb-7 shadow-m-sm border border-m-gray-100 hover:shadow-m-md hover:border-gold hover:-translate-y-1 transition-all no-underline flex flex-col gap-4 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center text-[22px]" style={{ background: t.color }}>{t.icon}</div>
              <h3 className="text-[16px] font-bold text-navy">{t.title}</h3>
              <p className="text-[13px] text-m-gray-400 leading-relaxed font-light">{t.desc}</p>
              <span className="mt-auto text-gold font-bold text-[18px] transition-transform group-hover:translate-x-1">→</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
