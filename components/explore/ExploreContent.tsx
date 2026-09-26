import Image from "next/image";

export default function ExploreContent() {
  const featured = [
    { title: "Solar System Explorer", type: "Game", typeColor: "bg-blue-50 text-blue-600", desc: "Travel through space and learn about planets, stars and more.", img: "/exp_solar.jpg", age: "6-12", subject: "Science", subColor: "text-blue-500 bg-blue-50" },
    { title: "Animal Coloring Pack", type: "Printable", typeColor: "bg-pink-50 text-pink-600", desc: "100+ adorable animal coloring pages.", img: "/exp_animal.jpg", age: "3-8", subject: "Art & Craft", subColor: "text-purple-500 bg-purple-50" },
    { title: "Volcano Experiment", type: "Experiment", typeColor: "bg-purple-50 text-purple-600", desc: "Make your own volcano at home with simple materials.", img: "/exp_volcano.jpg", age: "6-12", subject: "Science", subColor: "text-blue-500 bg-blue-50" },
    { title: "The Little Star's Dream", type: "Story", typeColor: "bg-emerald-50 text-emerald-600", desc: "A bedtime story about believing in yourself.", img: "/exp_star.jpg", age: "3-7", subject: "Moral", subColor: "text-indigo-500 bg-indigo-50" }
  ];

  const categories = [
    { title: "Games", desc: "200+", img: "🎮", color: "bg-blue-50" },
    { title: "Printables", desc: "500+", img: "🖨️", color: "bg-pink-50" },
    { title: "Learn", desc: "300+", img: "📚", color: "bg-yellow-50" },
    { title: "Stories", desc: "400+", img: "📖", color: "bg-red-50" },
    { title: "Activities", desc: "250+", img: "🎨", color: "bg-purple-50" },
    { title: "Experiments", desc: "120+", img: "🧪", color: "bg-teal-50" },
    { title: "Trending", desc: "Latest & Popular", img: "🔥", color: "bg-orange-50" },
    { title: "New", desc: "Fresh Content", img: "✨", color: "bg-fuchsia-50" }
  ];

  const trending = [
    { title: "Dinosaur Quiz", type: "Game", typeColor: "bg-blue-50 text-blue-600", img: "/exp_dino.jpg", age: "6-10" },
    { title: "Rainbow Craft", type: "Activity", typeColor: "bg-teal-50 text-teal-600", img: "/exp_rainbow.jpg", age: "3-8" },
    { title: "Space Facts", type: "Learn", typeColor: "bg-green-50 text-green-600", img: "/exp_spacefacts.jpg", age: "6-12" },
    { title: "Alphabet Tracing", type: "Printable", typeColor: "bg-pink-50 text-pink-600", img: "/exp_alpha.jpg", age: "3-6" }
  ];

  const collections = [
    { title: "Animals Explorer", desc: "Fun with the animal kingdom", img: "/col_animals.jpg" },
    { title: "Space Adventure", desc: "Journey beyond the stars", img: "/col_space.jpg" },
    { title: "Nature & Environment", desc: "Explore our beautiful planet", img: "/col_nature.jpg" },
    { title: "Creative Corner", desc: "Art, craft and imagination", img: "/col_creative.jpg" }
  ];

  return (
    <div className="flex-1 space-y-12 min-w-0">
      {/* Featured Explorations */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="text-3xl">⭐</div>
            <div>
              <h2 className="text-2xl font-black text-[#0B2046] leading-tight">Featured Explorations</h2>
              <p className="text-gray-500 text-sm">Handpicked content to spark curiosity and creativity.</p>
            </div>
          </div>
          <a href="#" className="text-sm font-bold text-gray-700 hover:text-blue-600 flex items-center gap-1">
            View All <span className="text-lg">→</span>
          </a>
        </div>

        <div className="flex overflow-x-auto gap-3 sm:gap-4 pb-4 snap-x snap-mandatory lg:grid lg:grid-cols-4 lg:overflow-visible lg:snap-none" style={{ scrollbarWidth: "none" }}>
          {featured.map((item, i) => (
            <div key={i} className="w-[45vw] sm:w-[300px] lg:w-auto shrink-0 snap-center bg-white rounded-2xl p-3 sm:p-4 shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow">
              <div className="w-full aspect-[4/3] rounded-xl mb-3 sm:mb-4 bg-gray-100 relative overflow-hidden">
                <Image src={item.img} alt={item.title} fill className="object-cover" />
                <span className={`absolute bottom-3 left-3 text-[9px] sm:text-[10px] font-bold px-2 py-1 rounded-full shadow-sm bg-white ${item.typeColor}`}>
                  {item.type}
                </span>
              </div>
              <h3 className="font-bold text-[#0B2046] text-[13px] sm:text-lg mb-1 leading-tight">{item.title}</h3>
              <p className="text-gray-500 text-[10px] sm:text-xs mb-3 sm:mb-4 line-clamp-2">{item.desc}</p>
              
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4 mt-auto">
                <span className="text-[9px] sm:text-xs font-bold text-orange-500 bg-orange-50 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md">{item.age}</span>
                <span className={`text-[9px] sm:text-xs font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md ${item.subColor}`}>{item.subject}</span>
              </div>
              <button className="w-full bg-[#0B2046] text-white font-bold py-1.5 sm:py-2.5 rounded-xl text-[11px] sm:text-sm hover:bg-blue-900 transition-colors">
                Explore Now →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Explore by Category */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="text-3xl">🧭</div>
          <div>
            <h2 className="text-2xl font-black text-[#0B2046] leading-tight">Explore by Category</h2>
            <p className="text-gray-500 text-sm">Find exactly what your child is interested in.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {categories.map((cat, i) => (
            <div key={i} className={`rounded-2xl p-3 sm:p-4 flex items-center group cursor-pointer border border-transparent hover:border-gray-200 transition-all ${cat.color}`}>
              <div className="text-3xl sm:text-4xl mr-3 sm:mr-4 shrink-0 transition-transform group-hover:scale-110">
                {cat.img}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-gray-900 text-[11px] sm:text-sm leading-tight truncate">{cat.title}</h3>
                <p className="text-gray-500 text-[9px] sm:text-[11px] leading-tight mt-0.5">{cat.desc}</p>
              </div>
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/80 flex items-center justify-center shrink-0 text-gray-400 group-hover:text-blue-600 transition-colors ml-2">
                <span className="text-[10px] sm:text-xs">→</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trending This Week */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="text-3xl">🔥</div>
            <div>
              <h2 className="text-2xl font-black text-[#0B2046] leading-tight">Trending This Week</h2>
              <p className="text-gray-500 text-sm">Most popular content among curious kids and parents.</p>
            </div>
          </div>
          <a href="#" className="text-sm font-bold text-gray-700 hover:text-blue-600 flex items-center gap-1">
            View All <span className="text-lg">→</span>
          </a>
        </div>

        <div className="flex overflow-x-auto gap-3 sm:gap-4 pb-4 snap-x snap-mandatory lg:grid lg:grid-cols-4 lg:overflow-visible lg:snap-none" style={{ scrollbarWidth: "none" }}>
          {trending.map((item, i) => (
            <div key={i} className="w-[45vw] sm:w-[300px] lg:w-auto shrink-0 snap-center bg-white rounded-2xl p-2.5 sm:p-3 shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow">
              <div className="w-full aspect-[4/3] rounded-xl mb-2.5 sm:mb-3 bg-gray-100 relative overflow-hidden">
                <Image src={item.img} alt={item.title} fill className="object-cover" />
              </div>
              <h3 className="font-bold text-gray-900 text-[11px] sm:text-sm mb-1.5 sm:mb-2 leading-tight">{item.title}</h3>
              
              <div className="flex flex-wrap items-center justify-between mt-auto">
                <div className="flex items-center gap-1.5">
                  <span className={`text-[8px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded-full ${item.typeColor}`}>{item.type}</span>
                  <span className="text-[8px] sm:text-[10px] font-bold text-orange-500 bg-orange-50 px-1.5 py-0.5 rounded-full">{item.age}</span>
                </div>
                <div className="w-5 h-5 rounded-full bg-gray-50 flex items-center justify-center text-gray-400">
                  <span className="text-[10px]">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Curated Collections */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="text-3xl">👑</div>
            <div>
              <h2 className="text-2xl font-black text-[#0B2046] leading-tight">Curated Collections</h2>
              <p className="text-gray-500 text-sm">Special collections for every interest.</p>
            </div>
          </div>
          <a href="#" className="text-sm font-bold text-gray-700 hover:text-blue-600 flex items-center gap-1">
            View All <span className="text-lg">→</span>
          </a>
        </div>

        <div className="flex overflow-x-auto gap-3 sm:gap-4 pb-4 snap-x snap-mandatory lg:grid lg:grid-cols-4 lg:overflow-visible lg:snap-none" style={{ scrollbarWidth: "none" }}>
          {collections.map((item, i) => (
            <div key={i} className="w-[45vw] sm:w-[300px] lg:w-auto shrink-0 snap-center bg-white rounded-2xl p-2.5 sm:p-3 shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow group cursor-pointer">
              <div className="w-full aspect-[4/3] rounded-xl mb-2.5 sm:mb-3 bg-gray-100 relative overflow-hidden">
                <Image src={item.img} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="flex items-center justify-between mt-auto">
                <div className="pr-2">
                  <h3 className="font-bold text-[#0B2046] text-[11px] sm:text-sm leading-tight mb-0.5">{item.title}</h3>
                  <p className="text-gray-500 text-[9px] sm:text-[11px] leading-tight">{item.desc}</p>
                </div>
                <div className="w-5 h-5 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                  <span className="text-[10px]">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
