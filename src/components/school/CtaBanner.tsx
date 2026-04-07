export default function CtaBanner() {
  return (
    <div className="px-8 py-16">
      <div className="max-w-[1320px] mx-auto bg-gradient-to-br from-navy to-navy-light rounded-r-xl py-[60px] px-[72px] flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden">
        <div className="absolute -right-[60px] -top-[60px] w-[300px] h-[300px] rounded-full bg-gold/[.08]" />
        <div className="absolute right-[60px] -bottom-[80px] w-[200px] h-[200px] rounded-full bg-teal/[.06]" />
        <div className="relative z-[1]">
          <h2 className="text-[30px] font-extrabold text-card tracking-[-1px] mb-[7px]">Ready to Join the Edustoke.international Family?</h2>
          <p className="text-[14px] text-card/55 font-light">Admissions are open for 2025–26. Limited seats available.</p>
        </div>
        <div className="flex gap-3 relative z-[1] shrink-0">
          <a href="#admissions" className="px-[30px] py-[13px] rounded-r-md bg-gold text-navy font-semibold text-[14px] no-underline hover:bg-[#D4901A] hover:-translate-y-px transition-all">Apply Now →</a>
          <a href="#contact" className="px-[30px] py-[13px] rounded-r-md bg-transparent text-card font-semibold text-[14px] no-underline border border-card/20 hover:bg-card/[.06] transition-all">Schedule Visit</a>
        </div>
      </div>
    </div>
  );
}
