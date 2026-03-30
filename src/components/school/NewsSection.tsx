const news = [
  { cat: "Achievement", date: "Mar 15, 2025", title: "Meridian Students Win National Science Olympiad", excerpt: "Three students from Grade 10 secured gold medals at the prestigious National Science Olympiad competition held in New Delhi.", img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=500&q=80" },
  { cat: "Event", date: "Mar 10, 2025", title: "Annual Sports Day 2025", excerpt: "", img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80" },
  { cat: "News", date: "Mar 5, 2025", title: "New STEM Lab Inauguration", excerpt: "", img: "https://images.unsplash.com/photo-1581092921461-eab10380ed8f?w=400&q=80" },
];

const events = [
  { day: "25", mon: "Mar", title: "Parent-Teacher Meeting", desc: "Grades 6–10, 9:00 AM – 1:00 PM", badge: "Academic" },
  { day: "28", mon: "Mar", title: "Inter-School Debate", desc: "Senior School Auditorium", badge: "Competition" },
  { day: "02", mon: "Apr", title: "Annual Day Rehearsals", desc: "All grades, 2:00 PM onwards", badge: "Event" },
  { day: "10", mon: "Apr", title: "Summer Break Begins", desc: "School reopens May 1", badge: "Holiday" },
];

export default function NewsSection() {
  return (
    <section id="news" className="bg-card py-24">
      <div className="max-w-[1320px] mx-auto px-8">
        <div className="flex justify-between items-end flex-wrap gap-4">
          <div>
            <span className="text-[11px] font-bold tracking-[2px] uppercase text-gold mb-3 block">News & Events</span>
            <h2 className="text-[clamp(26px,3.2vw,42px)] font-extrabold text-navy leading-[1.15] tracking-[-1px]">
              Latest <em className="not-italic text-gold">Updates</em>
            </h2>
          </div>
          <a href="#" className="py-[9px] px-5 rounded-r-sm text-[13px] font-semibold text-navy border border-m-gray-200 no-underline hover:bg-navy hover:text-card hover:border-navy transition-all">View All →</a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] gap-6 mt-10">
          {news.map((n, i) => (
            <div key={n.title} className="bg-card rounded-r-lg overflow-hidden shadow-m-sm border border-m-gray-100 hover:-translate-y-1 hover:shadow-m-md transition-all cursor-pointer group">
              <div className={`overflow-hidden ${i === 0 ? "aspect-video" : "aspect-[16/10]"}`}>
                <div className="w-full h-full group-hover:scale-[1.05] transition-transform duration-500" style={{ background: `url('${n.img}') center/cover` }} />
              </div>
              <div className="p-[22px]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-gold/10 text-gold py-[3px] px-2.5 rounded-full text-[10px] font-bold tracking-[.5px]">{n.cat}</span>
                  <span className="text-[11px] text-m-gray-400">{n.date}</span>
                </div>
                <h3 className={`font-bold text-navy leading-[1.4] mb-[7px] ${i === 0 ? "text-[16px]" : "text-[14px]"}`}>{n.title}</h3>
                {i === 0 && <p className="text-[13px] text-m-gray-600 leading-relaxed font-light">{n.excerpt}</p>}
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Events */}
        <h3 className="text-[18px] font-bold text-navy mt-14 mb-6">Upcoming Events</h3>
        <div className="flex flex-col">
          {events.map(ev => (
            <div key={ev.title} className="flex gap-5 items-start py-4 border-b border-m-gray-100">
              <div className="shrink-0 w-[50px] text-center bg-cream border border-m-gray-200 rounded-r-sm py-[7px]">
                <div className="text-[20px] font-extrabold text-navy leading-none">{ev.day}</div>
                <div className="text-[10px] font-semibold text-m-gray-400 uppercase tracking-[.5px] mt-0.5">{ev.mon}</div>
              </div>
              <div>
                <h4 className="text-[14px] font-bold text-navy mb-0.5">{ev.title}</h4>
                <p className="text-[12px] text-m-gray-400 font-light">{ev.desc}</p>
              </div>
              <span className="ml-auto shrink-0 self-start mt-0.5 py-[3px] px-2.5 rounded-full text-[10px] font-bold bg-navy/[.07] text-navy">{ev.badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
