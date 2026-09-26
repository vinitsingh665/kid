export default function ActivitiesCategoryBar() {
  const categories = [
    { name: "All Activities", icon: "🎛️", color: "bg-blue-600 text-white border-transparent", active: true },
    { name: "Crafts", icon: "✂️", color: "bg-white text-gray-700 border-gray-100 hover:border-blue-200", active: false },
    { name: "Indoor Activities", icon: "🏠", color: "bg-white text-gray-700 border-gray-100 hover:border-blue-200", active: false },
    { name: "Outdoor Activities", icon: "🌳", color: "bg-white text-gray-700 border-gray-100 hover:border-blue-200", active: false },
    { name: "DIY Projects", icon: "💡", color: "bg-white text-gray-700 border-gray-100 hover:border-blue-200", active: false },
    { name: "Science Activities", icon: "🔬", color: "bg-white text-gray-700 border-gray-100 hover:border-blue-200", active: false },
    { name: "Art & Drawing", icon: "🎨", color: "bg-white text-gray-700 border-gray-100 hover:border-blue-200", active: false },
    { name: "Cooking for Kids", icon: "👨‍🍳", color: "bg-white text-gray-700 border-gray-100 hover:border-blue-200", active: false },
    { name: "Seasonal Activities", icon: "☀️", color: "bg-white text-gray-700 border-gray-100 hover:border-blue-200", active: false },
    { name: "Recycled Crafts", icon: "♻️", color: "bg-white text-gray-700 border-gray-100 hover:border-blue-200", active: false },
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
              className={`flex flex-col items-center justify-center gap-1 sm:gap-2 min-w-[72px] sm:min-w-[90px] lg:min-w-0 lg:flex-1 h-[72px] sm:h-[90px] rounded-xl snap-center shrink-0 lg:shrink transition-transform hover:-translate-y-1 active:scale-95 border ${cat.color}`}
            >
              <div className="text-2xl sm:text-3xl">
                {cat.icon}
              </div>
              <span
                className={`text-[9px] sm:text-[10px] md:text-xs font-bold px-1 text-center leading-tight ${cat.active ? 'text-white' : 'text-gray-700'}`}
              >
                {cat.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
