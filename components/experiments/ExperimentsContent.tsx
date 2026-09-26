import Image from "next/image";

export default function ExperimentsContent() {
  const featured = [
    { title: "Baking Soda Volcano", category: "Chemistry", categoryColor: "bg-red-50 text-red-600", desc: "Make your own erupting volcano using simple household items!", img: "/ext_volcano.jpg", age: "6-12", time: "15 mins", diff: "Easy", diffColor: "text-green-500 bg-green-50" },
    { title: "Rainbow in a Glass", category: "Chemistry", categoryColor: "bg-purple-50 text-purple-600", desc: "Create a beautiful rainbow using liquids of different densities!", img: "/ext_rainbow.jpg", age: "6-12", time: "20 mins", diff: "Easy", diffColor: "text-green-500 bg-green-50" },
    { title: "Static Electricity Magic", category: "Physics", categoryColor: "bg-blue-50 text-blue-600", desc: "Make a balloon stick to the wall and move objects without touching them!", img: "/ext_static.jpg", age: "3-8", time: "10 mins", diff: "Easy", diffColor: "text-green-500 bg-green-50" },
    { title: "Grow a Plant from Seeds", category: "Biology", categoryColor: "bg-green-50 text-green-600", desc: "Learn how plants grow with this easy seed germination experiment!", img: "/ext_plant.jpg", age: "6-12", time: "1+ hour", diff: "Easy", diffColor: "text-green-500 bg-green-50" }
  ];

  const categories = [
    { title: "Physics Experiments", desc: "Motion, force, light and more", img: "/cat_physics.jpg", color: "bg-blue-50" },
    { title: "Chemistry Experiments", desc: "Reactions, colors, solutions and more", img: "/cat_chemistry.jpg", color: "bg-purple-50" },
    { title: "Biology Experiments", desc: "Plants, animals, body and nature", img: "/cat_biology.jpg", color: "bg-green-50" },
    { title: "Earth Science", desc: "Rocks, weather, water and more", img: "/cat_earth.jpg", color: "bg-yellow-50" },
    { title: "Space Science", desc: "Stars, planets and the universe", img: "/cat_space.jpg", color: "bg-indigo-50" },
    { title: "Kitchen Science", desc: "Fun experiments with everyday kitchen items", img: "/cat_kitchen.jpg", color: "bg-orange-50" },
    { title: "DIY Science Projects", desc: "Creative science projects to make at home", img: "/cat_diy.jpg", color: "bg-teal-50" },
    { title: "Seasonal Experiments", desc: "Special experiments for festivals and seasons", img: "/cat_seasonal.jpg", color: "bg-red-50" }
  ];

  const popular = [
    { title: "Magic Milk", category: "Chemistry", categoryColor: "bg-purple-50 text-purple-600", img: "/pop_milk.jpg", age: "6-12", time: "15 mins", diff: "Easy", diffColor: "text-green-500 bg-green-50" },
    { title: "Lemon Battery", category: "Physics", categoryColor: "bg-blue-50 text-blue-600", img: "/pop_lemon.jpg", age: "8-12", time: "20 mins", diff: "Medium", diffColor: "text-orange-500 bg-orange-50" },
    { title: "Cloud in a Bottle", category: "Earth Science", categoryColor: "bg-yellow-50 text-yellow-600", img: "/pop_cloud.jpg", age: "8-12", time: "20 mins", diff: "Medium", diffColor: "text-orange-500 bg-orange-50" },
    { title: "Homemade Slime", category: "Chemistry", categoryColor: "bg-purple-50 text-purple-600", img: "/pop_slime.jpg", age: "6-12", time: "15 mins", diff: "Easy", diffColor: "text-green-500 bg-green-50" },
    { title: "Crystal Growing", category: "Chemistry", categoryColor: "bg-purple-50 text-purple-600", img: "/pop_crystal.jpg", age: "8-12", time: "1+ hour", diff: "Advanced", diffColor: "text-red-500 bg-red-50" }
  ];

  return (
    <div className="flex-1 space-y-12 min-w-0">
      {/* Featured Experiments */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="text-3xl">⭐</div>
            <div>
              <h2 className="text-2xl font-black text-[#0B2046] leading-tight">Featured Experiments</h2>
              <p className="text-gray-500 text-sm">Handpicked experiments that are easy, fun and educational.</p>
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
              
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4 mt-auto">
                <span className="text-[9px] sm:text-xs font-bold text-orange-500 bg-orange-50 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md">{item.age}</span>
                <span className="text-[9px] sm:text-xs font-bold text-blue-500 bg-blue-50 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md">{item.time}</span>
                <span className={`text-[9px] sm:text-xs font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md ${item.diffColor}`}>{item.diff}</span>
              </div>
              <button className="w-full bg-[#0B2046] text-white font-bold py-1.5 sm:py-2.5 rounded-xl text-[11px] sm:text-sm hover:bg-blue-900 transition-colors">
                Try Experiment →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Browse by Category */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="text-3xl">📚</div>
          <div>
            <h2 className="text-2xl font-black text-[#0B2046] leading-tight">Browse by Category</h2>
            <p className="text-gray-500 text-sm">Explore experiments by different branches of science.</p>
          </div>
        </div>

        <div className="flex overflow-x-auto gap-3 sm:gap-4 pb-4 snap-x snap-mandatory lg:grid lg:grid-cols-4 lg:overflow-visible lg:snap-none" style={{ scrollbarWidth: "none" }}>
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

      {/* Popular Experiments */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="text-3xl">🔥</div>
            <div>
              <h2 className="text-2xl font-black text-[#0B2046] leading-tight">Popular Experiments</h2>
              <p className="text-gray-500 text-sm">Trending experiments that kids and parents love.</p>
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
              
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mt-auto">
                <span className="text-[8px] sm:text-[10px] font-bold text-orange-500 bg-orange-50 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md">{item.age}</span>
                <span className="text-[8px] sm:text-[10px] font-bold text-blue-500 bg-blue-50 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md">{item.time}</span>
                <span className={`text-[8px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md ${item.diffColor}`}>{item.diff}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
