import { useRef } from "react";

const testimonials = [
  { text: "Meridian transformed our daughter's confidence. The teachers truly care about each child's growth and potential.", name: "Priya Sharma", role: "Parent, Grade 8", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80" },
  { text: "The STEM program here is exceptional. I got into IIT Delhi thanks to the strong foundation Meridian provided.", name: "Arjun Mehta", role: "Alumni, Batch 2022", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80" },
  { text: "As a Cambridge curriculum parent, I appreciate the global perspective Meridian brings to education.", name: "Sarah Williams", role: "Parent, Grade 5", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80" },
  { text: "The co-curricular activities and sports facilities are world-class. My son has flourished both academically and personally.", name: "Rajesh Kumar", role: "Parent, Grade 10", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80" },
];

export default function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    trackRef.current?.scrollBy({ left: dir * 400, behavior: "smooth" });
  };

  return (
    <section id="testimonials" className="bg-navy py-24 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-8">
        <span className="text-[11px] font-bold tracking-[2px] uppercase text-gold mb-3 block">Testimonials</span>
        <h2 className="text-[clamp(26px,3.2vw,42px)] font-extrabold text-card leading-[1.15] tracking-[-1px]">
          What Our <em className="not-italic text-gold">Community</em> Says
        </h2>

        <div ref={trackRef} className="flex lg:flex-row flex-col gap-6 mt-12 overflow-x-auto scroll-snap-x snap-mandatory scrollbar-none">
          {testimonials.map(t => (
            <div key={t.name} className="bg-card/[.05] border border-card/[.08] rounded-r-lg p-9 lg:flex-[0_0_380px] flex-none snap-start hover:bg-card/[.08] hover:-translate-y-1 transition-all">
              <div className="text-gold text-[14px] tracking-[2px] mb-4">★★★★★</div>
              <p className="text-[15px] font-light text-card/75 leading-[1.8] italic mb-6">{t.text}</p>
              <div className="flex gap-3 items-center">
                <div className="w-11 h-11 rounded-full overflow-hidden shrink-0">
                  <div className="w-full h-full" style={{ background: `url('${t.img}') center/cover` }} />
                </div>
                <div>
                  <div className="text-[14px] font-bold text-card">{t.name}</div>
                  <div className="text-[11px] text-card/40 mt-0.5">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-2.5 mt-7">
          <button onClick={() => scroll(-1)} className="w-10 h-10 rounded-full border border-card/15 bg-transparent text-card cursor-pointer text-[18px] flex items-center justify-center hover:bg-gold hover:border-gold hover:text-navy transition-all">←</button>
          <button onClick={() => scroll(1)} className="w-10 h-10 rounded-full border border-card/15 bg-transparent text-card cursor-pointer text-[18px] flex items-center justify-center hover:bg-gold hover:border-gold hover:text-navy transition-all">→</button>
        </div>
      </div>
    </section>
  );
}
