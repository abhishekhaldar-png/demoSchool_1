import { motion } from "framer-motion";

const pillars = [
  { icon: "🧠", title: "Critical Thinking", desc: "Fostering analytical minds through inquiry-based learning." },
  { icon: "❤️", title: "Empathy", desc: "Building compassionate citizens through community service." },
  { icon: "🌍", title: "Global Outlook", desc: "International exposure through exchanges and partnerships." },
  { icon: "💡", title: "Innovation", desc: "STEM labs and maker spaces for creative problem solving." },
  { icon: "🤝", title: "Collaboration", desc: "Team projects and inter-school competitions." },
  { icon: "🎯", title: "Excellence", desc: "Pursuing the highest standards in academics and beyond." },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-cream py-24">
      <div className="max-w-[1320px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-[11px] font-bold tracking-[2px] uppercase text-gold mb-3 block">About Us</span>
            <h2 className="text-[clamp(26px,3.2vw,42px)] font-extrabold text-navy leading-[1.15] tracking-[-1px]">
              Building on <em className="not-italic text-gold">Six Pillars</em>
            </h2>
            <p className="text-[15px] font-light text-m-gray-600 max-w-[520px] mt-3.5 leading-[1.7]">
              Our educational philosophy is built on six foundational pillars that guide every aspect of school life.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mt-8">
              {pillars.map(p => (
                <div key={p.title} className="bg-card rounded-r-md p-5 border border-m-gray-100 shadow-m-sm">
                  <div className="text-[22px] mb-2.5">{p.icon}</div>
                  <h4 className="text-[13px] font-bold text-navy mb-1">{p.title}</h4>
                  <p className="text-[12px] text-m-gray-600 font-light leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mt-7">
              {["CBSE Affiliated", "Cambridge International", "IB World School", "NAAC A+", "Green School Award"].map(b => (
                <span key={b} className="bg-card border border-m-gray-200 rounded-r-sm py-[7px] px-3.5 text-[12px] font-semibold text-m-gray-600">{b}</span>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
            {/* Principal's Card */}
            <div className="bg-card rounded-r-xl p-10 shadow-m-sm border border-m-gray-100 mt-8">
              <div className="w-[60px] h-[60px] rounded-full overflow-hidden mb-[18px]">
                <div className="w-full h-full" style={{ background: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80') center/cover" }} />
              </div>
              <blockquote className="text-[16px] italic text-navy leading-[1.7] font-light border-l-[3px] border-gold pl-[18px] mb-[18px]">
                "At Edustoke.international, we don't just educate — we inspire. Every child carries the potential to change the world, and our role is to nurture that flame."
              </blockquote>
              <div className="text-[14px] font-bold text-navy">Dr. Ramesh Krishnan</div>
              <div className="text-[12px] text-m-gray-400">Principal & Director</div>
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-2 gap-3.5 mt-6">
              <div className="bg-navy rounded-r-md p-6">
                <h4 className="text-[14px] font-bold text-gold-light mb-2">Our Mission</h4>
                <p className="text-[12px] text-card/60 font-light leading-relaxed">To provide world-class education fostering critical thinking, creativity, and character.</p>
              </div>
              <div className="bg-navy rounded-r-md p-6">
                <h4 className="text-[14px] font-bold text-gold-light mb-2">Our Vision</h4>
                <p className="text-[12px] text-card/60 font-light leading-relaxed">To be India's most respected school, nurturing future leaders and global citizens.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
