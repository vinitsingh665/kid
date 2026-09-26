export default function AgeGuideCategoryBar() {
  const categories = [
    { name: "All Ages", icon: "👶", active: true },
    { name: "0-2 Years", icon: "👶", active: false },
    { name: "3-5 Years", icon: "👧", active: false },
    { name: "6-8 Years", icon: "👦", active: false },
    { name: "9-12 Years", icon: "🧒", active: false },
    { name: "13-16 Years", icon: "🧑", active: false },
    { name: "Compare Ages", icon: "📊", active: false },
  ];

  return (
    <div className="relative -mt-6 sm:-mt-10 z-20 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-2 sm:p-4">
        <div
          className="flex gap-2 sm:gap-3 lg:gap-4 overflow-x-auto pb-2 snap-x"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {categories.map((cat, i) => (
            <button
              key={i}
              className={`flex flex-col items-center justify-center gap-1 sm:gap-2 min-w-[72px] sm:min-w-[110px] lg:min-w-0 lg:flex-1 h-[72px] sm:h-[90px] rounded-xl snap-center shrink-0 lg:shrink transition-transform hover:-translate-y-1 active:scale-95 border ${
                cat.active
                  ? "bg-blue-600 text-white border-transparent"
                  : "bg-white text-gray-700 border-gray-100 hover:border-blue-200"
              }`}
            >
              <div className="text-2xl sm:text-3xl">{cat.icon}</div>
              <span className={`text-[9px] sm:text-[10px] md:text-xs font-bold px-1 text-center leading-tight ${cat.active ? "text-white" : "text-gray-700"}`}>
                {cat.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
