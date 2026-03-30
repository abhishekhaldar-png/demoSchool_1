import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen bg-navy relative overflow-hidden flex items-center pt-[72px]">
      {/* BG layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_40%,rgba(232,160,32,.1)_0%,transparent_60%),radial-gradient(ellipse_50%_80%_at_20%_80%,rgba(26,139,126,.08)_0%,transparent_60%),linear-gradient(135deg,hsl(222_65%_15%)_0%,hsl(222_50%_24%)_50%,hsl(222_65%_15%)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-[1320px] mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center py-20">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/25 text-gold-light py-1.5 px-3.5 rounded-full text-[12px] font-medium tracking-[.5px] mb-7">
            <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
            Admissions Open 2025–26
          </div>

          <h1 className="text-[clamp(36px,4.5vw,60px)] font-black leading-[1.06] text-card tracking-[-2px] mb-6">
            Shaping Future <span className="text-gold">Leaders</span> Since 1998
          </h1>

          <p className="text-[16px] font-light text-card/65 leading-[1.8] mb-10 max-w-[440px]">
            Where academic excellence meets holistic growth — CBSE & Cambridge curriculum for Pre-Primary to Grade 12.
          </p>

          <div className="flex gap-3.5 flex-wrap">
            <a href="#admissions" className="px-[30px] py-[13px] rounded-r-md bg-gold text-navy font-semibold text-[14px] no-underline hover:bg-[#D4901A] hover:-translate-y-px transition-all shadow-[0_4px_16px_rgba(232,160,32,.35)]">
              Apply Now →
            </a>
            <a href="#about" className="px-[30px] py-[13px] rounded-r-md bg-transparent text-card font-semibold text-[14px] no-underline border border-card/20 hover:bg-card/[.06] transition-all">
              Explore School
            </a>
          </div>

          <div className="flex gap-8 mt-14 pt-10 border-t border-card/[.08]">
            {[
              { n: "25+", l: "Years of Excellence" },
              { n: "3,500+", l: "Students Enrolled" },
              { n: "98%", l: "Board Results" },
              { n: "200+", l: "Faculty Members" },
            ].map(s => (
              <div key={s.l}>
                <div className="text-[28px] font-extrabold text-card tracking-[-1px]">{s.n}</div>
                <div className="text-[12px] text-card/45 mt-0.5">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative hidden lg:block"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-full aspect-[4/5] max-h-[580px] rounded-r-xl overflow-hidden bg-gradient-to-br from-navy-light to-navy">
            <div
              className="w-full h-full flex flex-col justify-end p-8"
              style={{
                background: "linear-gradient(180deg,rgba(13,27,62,.2),rgba(13,27,62,.6)),url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80') center/cover"
              }}
            >
              <div className="bg-card/95 backdrop-blur-[10px] rounded-r-md p-4 px-5 inline-flex items-center gap-3 w-fit">
                <div className="w-10 h-10 bg-gold rounded-[10px] flex items-center justify-center text-[18px]">🎓</div>
                <div>
                  <span className="block text-[13px] font-bold text-navy">CBSE & Cambridge</span>
                  <span className="text-[11px] text-m-gray-400">Dual Curriculum Available</span>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -right-6 top-8 bg-card rounded-r-md shadow-m-lg p-4 px-5 min-w-[180px]">
            <div className="text-[10px] text-m-gray-400 font-medium uppercase tracking-[1px]">Acceptance Rate</div>
            <div className="text-[20px] font-extrabold text-navy tracking-[-.5px] mt-0.5">92%</div>
            <div className="text-[11px] text-teal font-medium mt-0.5">↑ Top in Gurugram</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
