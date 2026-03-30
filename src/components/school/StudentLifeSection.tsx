const activities = [
  { tag: "Sports", name: "Inter-School Athletics", img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80" },
  { tag: "Arts", name: "Annual Art Exhibition", img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&q=80" },
  { tag: "Music", name: "School Orchestra", img: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&q=80" },
  { tag: "STEM", name: "Robotics Club", img: "https://images.unsplash.com/photo-1581092921461-eab10380ed8f?w=400&q=80" },
  { tag: "Leadership", name: "Model United Nations", img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&q=80" },
];

export default function StudentLifeSection() {
  return (
    <section id="student-life" className="bg-card py-24">
      <div className="max-w-[1320px] mx-auto px-8">
        <span className="text-[11px] font-bold tracking-[2px] uppercase text-gold mb-3 block">Student Life</span>
        <h2 className="text-[clamp(26px,3.2vw,42px)] font-extrabold text-navy leading-[1.15] tracking-[-1px]">
          Beyond the <em className="not-italic text-gold">Classroom</em>
        </h2>
        <p className="text-[15px] font-light text-m-gray-600 max-w-[520px] mt-3.5 leading-[1.7]">50+ co-curricular activities to discover passions and build lifelong skills.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {activities.map((a, i) => (
            <div key={a.name} className={`rounded-r-lg overflow-hidden relative aspect-[4/3] cursor-pointer hover:scale-[1.02] transition-transform group ${i === 0 ? "sm:col-span-2 aspect-[2/1]" : ""}`}>
              <div className="absolute inset-0 group-hover:scale-[1.06] transition-transform duration-500" style={{ background: `url('${a.img}') center/cover` }} />
              <div className="absolute bottom-0 left-0 right-0 p-[22px] bg-gradient-to-t from-navy/85 to-transparent">
                <span className="text-[10px] font-bold tracking-[2px] uppercase text-gold-light mb-1 block">{a.tag}</span>
                <span className="text-[18px] font-bold text-card">{a.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
