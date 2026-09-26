export default function ParentingContent() {
  const featured = [
    {
      title: "How to Build a Love for Reading",
      category: "Learning",
      categoryColor: "bg-green-100 text-green-800",
      desc: "Simple tips to make reading fun and a daily habit for kids.",
      ageRange: "3–8",
      readTime: "5 min",
      img: "📖",
      imgBg: "bg-gradient-to-br from-green-100 to-emerald-200",
    },
    {
      title: "Better Sleep for Brighter Days",
      category: "Health",
      categoryColor: "bg-blue-100 text-blue-800",
      desc: "Practical bedtime routines for healthy sleep habits.",
      ageRange: "3–10",
      readTime: "6 min",
      img: "🌙",
      imgBg: "bg-gradient-to-br from-blue-100 to-indigo-200",
    },
    {
      title: "Healthy Eating Made Easy",
      category: "Nutrition",
      categoryColor: "bg-orange-100 text-orange-800",
      desc: "Fun and simple ways to build better eating habits.",
      ageRange: "2–10",
      readTime: "8 min",
      img: "🥗",
      imgBg: "bg-gradient-to-br from-orange-100 to-amber-200",
    },
    {
      title: "Healthy Screen Time Habits",
      category: "Screen Time",
      categoryColor: "bg-red-100 text-red-800",
      desc: "Balance technology and real-world activities for a happier child.",
      ageRange: "3–12",
      readTime: "6 min",
      img: "📱",
      imgBg: "bg-gradient-to-br from-red-100 to-pink-200",
    },
  ];

  const browseCategories = [
    { name: "Child Development", desc: "Growth milestones, skills and more", icon: "👶", count: "50+", color: "bg-purple-50 border-purple-100" },
    { name: "Learning & Education", desc: "Study tips, learning methods and creativity", icon: "🎓", count: "60+", color: "bg-blue-50 border-blue-100" },
    { name: "Health & Wellness", desc: "Physical health, sleep and mental wellbeing", icon: "❤️", count: "45+", color: "bg-pink-50 border-pink-100" },
    { name: "Nutrition & Food", desc: "Healthy meals, nutrition tips and food habits", icon: "🍎", count: "40+", color: "bg-orange-50 border-orange-100" },
    { name: "Screen Time", desc: "Guidance for balanced digital use", icon: "📱", count: "35+", color: "bg-slate-50 border-slate-100" },
    { name: "Behavior & Emotions", desc: "Managing emotions and positive behavior", icon: "😊", count: "55+", color: "bg-yellow-50 border-yellow-100" },
    { name: "Activities at Home", desc: "Fun indoor & outdoor ideas for families", icon: "🏠", count: "40+", color: "bg-green-50 border-green-100" },
    { name: "Parenting Styles", desc: "Gentle, positive and effective parenting", icon: "🌟", count: "30+", color: "bg-indigo-50 border-indigo-100" },
  ];

  const latest = [
    { title: "10 Fun Outdoor Activities for Kids", ageRange: "4–10", readTime: "5 min", icon: "🌳", color: "bg-green-100 text-green-700" },
    { title: "How to Handle Tantrums Calmly", ageRange: "2–6", readTime: "6 min", icon: "🧘", color: "bg-purple-100 text-purple-700" },
    { title: "Building Confidence in Children", ageRange: "3–10", readTime: "6 min", icon: "⭐", color: "bg-yellow-100 text-yellow-700" },
    { title: "Creative Learning Through Play", ageRange: "3–8", readTime: "5 min", icon: "🎨", color: "bg-orange-100 text-orange-700" },
  ];

  return (
    <div className="flex-1 space-y-12 min-w-0">

      {/* Featured Parenting Tips */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="text-3xl">⭐</div>
            <div>
              <h2 className="text-2xl font-black text-[#0B2046] leading-tight">Featured Parenting Tips</h2>
              <p className="text-gray-500 text-sm">Handpicked advice to help you raise happy, confident and curious kids.</p>
            </div>
          </div>
          <a href="#" className="text-sm font-bold text-gray-700 hover:text-blue-600 flex items-center gap-1">
            View All <span className="text-lg">→</span>
          </a>
        </div>

        <div className="flex overflow-x-auto gap-3 sm:gap-4 pb-4 snap-x snap-mandatory lg:grid lg:grid-cols-4 lg:overflow-visible lg:snap-none" style={{ scrollbarWidth: "none" }}>
          {featured.map((item, i) => (
            <div key={i} className="w-[45vw] sm:w-[300px] lg:w-auto shrink-0 snap-center bg-white rounded-2xl p-3 sm:p-4 shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow">
              <div className={`w-full aspect-[4/3] rounded-xl mb-3 sm:mb-4 ${item.imgBg} flex items-center justify-center`}>
                <span className="text-5xl sm:text-6xl">{item.img}</span>
              </div>
              <span className={`self-start text-[9px] sm:text-[10px] font-bold px-2 py-0.5 sm:py-1 rounded-full mb-1.5 sm:mb-2 ${item.categoryColor}`}>{item.category}</span>
              <h3 className="font-bold text-[#0B2046] text-[13px] sm:text-[15px] mb-1 leading-tight">{item.title}</h3>
              <p className="text-gray-500 text-[10px] sm:text-xs mb-3 sm:mb-4 line-clamp-2 flex-1">{item.desc}</p>

              <div className="flex items-center gap-1.5 sm:gap-3 mb-3 sm:mb-4 mt-auto">
                <span className="bg-blue-50 text-blue-700 text-[9px] sm:text-[10px] font-bold px-2 py-0.5 sm:py-1 rounded-full">{item.ageRange}</span>
                <span className="bg-gray-100 text-gray-600 text-[9px] sm:text-[10px] font-semibold px-2 py-0.5 sm:py-1 rounded-full">{item.readTime}</span>
              </div>

              <button className="w-full bg-[#0B2046] hover:bg-[#1a3a6e] text-white text-[10px] sm:text-xs font-bold py-2 sm:py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2">
                Read Article <span className="text-sm">→</span>
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
            <p className="text-gray-500 text-sm">Explore expert parenting tips by topic.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {browseCategories.map((cat, i) => (
            <a key={i} href="#" className={`flex items-start gap-3 p-4 rounded-2xl border ${cat.color} hover:shadow-md transition-all group`}>
              <div className="text-3xl shrink-0">{cat.icon}</div>
              <div className="min-w-0">
                <h3 className="font-bold text-[#0B2046] text-sm mb-0.5 leading-tight group-hover:text-blue-600 transition-colors">{cat.name}</h3>
                <p className="text-gray-500 text-[10px] sm:text-xs leading-tight mb-2 line-clamp-2">{cat.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-gray-500 font-semibold">{cat.count} articles</span>
                  <span className="text-blue-500 font-bold text-sm group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Latest Parenting Tips */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="text-3xl">🕐</div>
            <div>
              <h2 className="text-2xl font-black text-[#0B2046] leading-tight">Latest Parenting Tips</h2>
              <p className="text-gray-500 text-sm">Fresh ideas and advice for everyday parenting.</p>
            </div>
          </div>
          <a href="#" className="text-sm font-bold text-gray-700 hover:text-blue-600 flex items-center gap-1">
            View All <span className="text-lg">→</span>
          </a>
        </div>

        <div className="flex overflow-x-auto gap-3 sm:gap-4 pb-4 snap-x snap-mandatory lg:grid lg:grid-cols-4 lg:overflow-visible lg:snap-none" style={{ scrollbarWidth: "none" }}>
          {latest.map((item, i) => (
            <a key={i} href="#" className="w-[45vw] sm:w-[260px] lg:w-auto shrink-0 snap-center bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col group">
              <div className={`w-full aspect-[4/3] rounded-xl mb-3 ${item.color} flex items-center justify-center`}>
                <span className="text-5xl">{item.icon}</span>
              </div>
              <h3 className="font-bold text-[#0B2046] text-[13px] sm:text-sm mb-2 leading-tight group-hover:text-blue-600 transition-colors flex-1">{item.title}</h3>
              <div className="flex items-center gap-2 mt-auto">
                <span className="bg-blue-50 text-blue-700 text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full">{item.ageRange}</span>
                <span className="bg-gray-100 text-gray-600 text-[9px] sm:text-[10px] font-semibold px-2 py-0.5 rounded-full">{item.readTime}</span>
                <span className="ml-auto text-blue-500 font-bold text-sm group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </a>
          ))}
        </div>
      </section>

    </div>
  );
}
