const facilities = [
  { title: "Smart Classrooms", desc: "Interactive boards, projectors, and digital learning tools in every classroom.", img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&q=80", tags: ["Digital", "Interactive", "Wi-Fi"] },
  { title: "Science Labs", desc: "State-of-the-art physics, chemistry, and biology laboratories.", img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&q=80", tags: ["Physics", "Chemistry", "Biology"] },
  { title: "Sports Complex", desc: "Olympic-size pool, cricket ground, basketball courts, and indoor gymnasium.", img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80", tags: ["Pool", "Cricket", "Gym"] },
  { title: "Library", desc: "25,000+ books, digital catalogue, and quiet study zones.", img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=80", tags: ["25K+ Books", "Digital", "Study Zone"] },
  { title: "Performing Arts", desc: "500-seat auditorium with professional sound and lighting.", img: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&q=80", tags: ["Auditorium", "Music", "Theatre"] },
  { title: "Cafeteria", desc: "Nutritious meals prepared fresh daily by certified kitchen staff.", img: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=400&q=80", tags: ["Healthy", "Fresh", "Certified"] },
];

export default function FacilitiesSection() {
  return (
    <section id="facilities" className="bg-cream py-24">
      <div className="max-w-[1320px] mx-auto px-8">
        <span className="text-[11px] font-bold tracking-[2px] uppercase text-gold mb-3 block">Facilities</span>
        <h2 className="text-[clamp(26px,3.2vw,42px)] font-extrabold text-navy leading-[1.15] tracking-[-1px]">
          World-Class <em className="not-italic text-gold">Infrastructure</em>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {facilities.map(f => (
            <div key={f.title} className="bg-card rounded-r-lg overflow-hidden shadow-m-sm border border-m-gray-100 hover:-translate-y-1 hover:shadow-m-md transition-all group">
              <div className="aspect-video overflow-hidden">
                <div className="w-full h-full group-hover:scale-[1.06] transition-transform duration-500" style={{ background: `url('${f.img}') center/cover` }} />
              </div>
              <div className="p-5 px-[22px]">
                <h3 className="text-[15px] font-bold text-navy mb-1">{f.title}</h3>
                <p className="text-[12px] text-m-gray-600 font-light leading-relaxed mb-3">{f.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {f.tags.map(tg => (
                    <span key={tg} className="bg-m-gray-50 border border-m-gray-100 rounded-full py-[3px] px-2.5 text-[10px] font-semibold text-m-gray-600">{tg}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
