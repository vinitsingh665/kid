import Image from "next/image";

export default function ActivitiesContent() {
  const featured = [
    { title: "Rainbow Paper Craft", category: "Crafts", categoryColor: "bg-orange-100 text-orange-800", desc: "Make a beautiful rainbow with simple paper and colors!", age: "4-8", time: "20 mins", img: "/rainbowcraft.jpg" },
    { title: "DIY Volcano Experiment", category: "Science", categoryColor: "bg-blue-100 text-blue-800", desc: "Create a mini volcano and watch it erupt!", age: "6-12", time: "30 mins", img: "/volcano.jpg" },
    { title: "Paper Plate Lion", category: "Crafts", categoryColor: "bg-orange-100 text-orange-800", desc: "Turn a paper plate into a cute lion with easy steps!", age: "3-6", time: "25 mins", img: "/lionplate.jpg" },
    { title: "Galaxy in a Jar", category: "Art & Drawing", categoryColor: "bg-purple-100 text-purple-800", desc: "Create your own magical galaxy using simple materials!", age: "6-12", time: "20 mins", img: "/galaxyjar.jpg" },
  ];

  const categories = [
    { title: "Crafts", desc: "Creative handmade projects", img: "/cat_crafts.jpg", color: "bg-yellow-50" },
    { title: "Indoor Activities", desc: "Fun things to do at home", img: "/cat_indoor.jpg", color: "bg-blue-50" },
    { title: "Outdoor Activities", desc: "Play, explore and stay active", img: "/cat_outdoor.jpg", color: "bg-green-50" },
    { title: "DIY Projects", desc: "Make cool things yourself", img: "/cat_diy.jpg", color: "bg-indigo-50" },
    { title: "Science Activities", desc: "Fun experiments and discoveries", img: "/cat_science.jpg", color: "bg-cyan-50" },
    { title: "Art & Drawing", desc: "Paint, draw and express yourself", img: "/cat_art.jpg", color: "bg-orange-50" },
    { title: "Cooking for Kids", desc: "Simple and tasty recipes", img: "/cat_cooking.jpg", color: "bg-red-50" },
    { title: "Seasonal Activities", desc: "Festive crafts and celebrations", img: "/cat_seasonal.jpg", color: "bg-yellow-50" },
    { title: "Recycled Crafts", desc: "Turn waste into amazing creations", img: "/cat_recycled.jpg", color: "bg-green-50" },
    { title: "Sensory Play", desc: "Hands-on fun for curious minds", img: "/cat_sensory.jpg", color: "bg-purple-50" },
  ];

  const popular = [
    { title: "Salt Dough Ornaments", category: "Crafts", categoryColor: "bg-orange-100 text-orange-800", img: "/saltdough.jpg", age: "3-8", time: "40 mins" },
    { title: "Nature Scavenger Hunt", category: "Outdoor", categoryColor: "bg-green-100 text-green-800", img: "/scavenger.jpg", age: "6-12", time: "30 mins" },
    { title: "Homemade Slime", category: "DIY Projects", categoryColor: "bg-pink-100 text-pink-800", img: "/slime.jpg", age: "5-12", time: "25 mins" },
    { title: "Leaf Printing Art", category: "Art & Drawing", categoryColor: "bg-orange-100 text-orange-800", img: "/leafprint.jpg", age: "3-8", time: "20 mins" },
    { title: "Paper Airplane Challenge", category: "Indoor", categoryColor: "bg-blue-100 text-blue-800", img: "/paperairplane.jpg", age: "6-12", time: "15 mins" },
  ];

  return (
    <div className="flex-1 space-y-12 min-w-0">
      
      {/* Featured Activities */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="text-3xl">⭐</div>
            <div>
              <h2 className="text-2xl font-black text-[#0B2046] leading-tight">Featured Activities</h2>
              <p className="text-gray-500 text-sm">Handpicked activities that are fun, easy and loved by kids.</p>
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
              </div>
              <span className={`self-start text-[9px] sm:text-[10px] font-bold px-2 py-0.5 sm:py-1 rounded-full mb-1.5 sm:mb-2 ${item.categoryColor}`}>{item.category}</span>
              <h3 className="font-bold text-[#0B2046] text-[13px] sm:text-lg mb-1 leading-tight">{item.title}</h3>
              <p className="text-gray-500 text-[10px] sm:text-xs mb-3 sm:mb-4 line-clamp-2">{item.desc}</p>
              
              <div className="flex items-center gap-1.5 sm:gap-3 mb-3 sm:mb-4 mt-auto">
                <span className="text-[9px] sm:text-xs font-bold text-orange-500 bg-orange-50 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md">{item.age}</span>
                <span className="text-[9px] sm:text-xs font-bold text-blue-500 bg-blue-50 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md">{item.time}</span>
              </div>
              <button className="w-full bg-[#0B2046] text-white font-bold py-1.5 sm:py-2.5 rounded-xl text-[11px] sm:text-sm hover:bg-blue-900 transition-colors">
                View Activity →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Browse by Category */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="text-3xl">🎨</div>
          <div>
            <h2 className="text-2xl font-black text-[#0B2046] leading-tight">Browse by Category</h2>
            <p className="text-gray-500 text-sm">Explore different types of activities for endless fun.</p>
          </div>
        </div>

        <div className="flex overflow-x-auto gap-3 sm:gap-4 pb-4 snap-x snap-mandatory lg:grid lg:grid-cols-5 lg:overflow-visible lg:snap-none" style={{ scrollbarWidth: "none" }}>
          {categories.map((cat, i) => (
            <div key={i} className={`w-[45vw] sm:w-[220px] lg:w-auto shrink-0 snap-center rounded-2xl p-3 sm:p-4 flex flex-col group cursor-pointer border border-transparent hover:border-gray-200 transition-all ${cat.color}`}>
              <div className="w-full aspect-[16/9] rounded-xl mb-2 sm:mb-3 bg-white/50 relative overflow-hidden">
                <Image src={cat.img} alt={cat.title} fill className="object-cover" />
              </div>
              <div className="flex items-center justify-between mt-auto">
                <div className="pr-1">
                  <h3 className="font-bold text-gray-900 text-[11px] sm:text-sm leading-tight">{cat.title}</h3>
                  <p className="text-gray-500 text-[9px] sm:text-[11px] leading-tight mt-0.5 line-clamp-1 sm:line-clamp-none">{cat.desc}</p>
                </div>
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/80 flex items-center justify-center shrink-0 text-gray-400 group-hover:text-blue-600 transition-colors">
                  <span className="text-[10px] sm:text-xs">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Activities */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="text-3xl">❤️</div>
            <div>
              <h2 className="text-2xl font-black text-[#0B2046] leading-tight">Popular Activities</h2>
              <p className="text-gray-500 text-sm">Trending activities that kids and parents love.</p>
            </div>
          </div>
          <a href="#" className="text-sm font-bold text-gray-700 hover:text-blue-600 flex items-center gap-1">
            View All <span className="text-lg">→</span>
          </a>
        </div>

        <div className="flex overflow-x-auto gap-3 sm:gap-4 pb-4 snap-x snap-mandatory lg:grid lg:grid-cols-5 lg:overflow-visible lg:snap-none" style={{ scrollbarWidth: "none" }}>
          {popular.map((item, i) => (
            <div key={i} className="w-[42vw] sm:w-[220px] lg:w-auto shrink-0 snap-center bg-white rounded-2xl p-2.5 sm:p-3 shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow">
              <div className="w-full aspect-[4/3] rounded-xl mb-2.5 sm:mb-3 bg-gray-100 relative overflow-hidden">
                <Image src={item.img} alt={item.title} fill className="object-cover" />
              </div>
              <span className={`self-start text-[8px] sm:text-[9px] font-bold px-1.5 sm:px-2 py-0.5 rounded-full mb-1 sm:mb-1.5 ${item.categoryColor}`}>{item.category}</span>
              <h3 className="font-bold text-gray-900 text-[11px] sm:text-sm mb-1.5 sm:mb-2 leading-tight">{item.title}</h3>
              
              <div className="flex items-center gap-1.5 sm:gap-2 mt-auto">
                <span className="text-[8px] sm:text-[10px] font-bold text-orange-500 bg-orange-50 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md">{item.age}</span>
                <span className="text-[8px] sm:text-[10px] font-bold text-blue-500 bg-blue-50 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md">{item.time}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
