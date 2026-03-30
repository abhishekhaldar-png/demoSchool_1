import { motion } from "framer-motion";

const programs = [
  { emoji: "🌱", age: "Ages 3–5", title: "Early Years", desc: "Play-based learning foundation with Montessori-inspired methodology for holistic early childhood development." },
  { emoji: "📖", age: "Ages 6–10", title: "Primary School", desc: "Building core competencies through inquiry-based learning with focus on literacy, numeracy, and creativity." },
  { emoji: "🔬", age: "Ages 11–13", title: "Middle School", desc: "Exploratory learning with STEM focus, critical thinking development, and leadership opportunities." },
  { emoji: "🎓", age: "Ages 14–17", title: "Senior School", desc: "Board preparation with career guidance, university counselling, and specialized subject streams." },
];

export default function ProgramsSection() {
  return (
    <section id="programs" className="bg-navy py-24">
      <div className="max-w-[1320px] mx-auto px-8">
        <span className="text-[11px] font-bold tracking-[2px] uppercase text-gold mb-3 block">Our Programs</span>
        <h2 className="text-[clamp(26px,3.2vw,42px)] font-extrabold text-card leading-[1.15] tracking-[-1px]">
          Tailored Learning for <em className="not-italic text-gold">Every Stage</em>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              className="bg-card/[.04] border border-card/[.08] rounded-r-lg p-8 pb-6 transition-all hover:bg-card/[.07] hover:-translate-y-1 hover:border-gold/25 cursor-pointer relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              <span className="text-[32px] block mb-5">{p.emoji}</span>
              <div className="text-[11px] font-semibold tracking-[1.5px] uppercase text-gold mb-3">{p.age}</div>
              <h3 className="text-[20px] font-extrabold text-card mb-2 tracking-[-.5px]">{p.title}</h3>
              <p className="text-[13px] text-card/45 leading-relaxed font-light">{p.desc}</p>
              <div className="mt-6 text-gold-light text-[13px] font-semibold flex items-center gap-1.5">Learn More →</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
