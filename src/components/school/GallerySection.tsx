const images = [
  "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80",
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&q=80",
  "https://images.unsplash.com/photo-1588072432836-e10032774350?w=400&q=80",
  "https://images.unsplash.com/photo-1562774053-701939374585?w=400&q=80",
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&q=80",
  "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&q=80",
];

export default function GallerySection() {
  return (
    <section id="gallery" className="bg-cream py-24">
      <div className="max-w-[1320px] mx-auto px-8">
        <span className="text-[11px] font-bold tracking-[2px] uppercase text-gold mb-3 block">Gallery</span>
        <h2 className="text-[clamp(26px,3.2vw,42px)] font-extrabold text-navy leading-[1.15] tracking-[-1px]">
          Campus <em className="not-italic text-gold">Moments</em>
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-10" style={{ gridTemplateRows: "220px 220px" }}>
          {images.map((img, i) => (
            <div
              key={i}
              className={`rounded-r-md overflow-hidden cursor-pointer relative group ${
                i === 0 ? "col-span-2 row-span-2" : i === 3 ? "lg:col-span-2" : ""
              }`}
            >
              <div className="w-full h-full group-hover:scale-[1.07] transition-transform duration-500" style={{ background: `url('${img}') center/cover` }} />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/25 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity text-[24px] text-card bg-card/20 w-12 h-12 rounded-full flex items-center justify-center">🔍</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
