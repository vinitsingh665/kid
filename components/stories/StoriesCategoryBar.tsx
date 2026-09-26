const categories = [
  { id: "all", label: "All Stories", icon: "📖", bg: "#3B82F6", text: "white" },
  { id: "bedtime", label: "Bedtime", icon: "🌙", bg: "white", text: "gray-700" },
  { id: "moral", label: "Moral Stories", icon: "🍃", bg: "white", text: "gray-700" },
  { id: "adventure", label: "Adventure", icon: "🧭", bg: "white", text: "gray-700" },
  { id: "animals", label: "Animals", icon: "🐾", bg: "white", text: "gray-700" },
  { id: "fairy", label: "Fairy Tales", icon: "👑", bg: "white", text: "gray-700" },
  { id: "funny", label: "Funny", icon: "😀", bg: "white", text: "gray-700" },
  { id: "mythology", label: "Mythology", icon: "🏛️", bg: "white", text: "gray-700" },
  { id: "real", label: "Real Life", icon: "🌍", bg: "white", text: "gray-700" },
  { id: "festivals", label: "Festivals", icon: "🪔", bg: "white", text: "gray-700" },
  { id: "short", label: "Short Stories", icon: "📚", bg: "white", text: "gray-700" },
];

export default function StoriesCategoryBar() {
  return (
    <div className="relative -mt-6 sm:-mt-10 z-20 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-2 sm:p-4">
        <div
          className="flex gap-2 sm:gap-3 lg:gap-4 overflow-x-auto pb-2 snap-x"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`flex flex-col items-center justify-center gap-1 sm:gap-2 min-w-[72px] sm:min-w-[90px] lg:min-w-0 lg:flex-1 h-[72px] sm:h-[90px] rounded-xl snap-center shrink-0 lg:shrink transition-transform hover:-translate-y-1 active:scale-95 border ${
                cat.id === "all" ? "border-transparent" : "border-gray-100 hover:border-blue-200"
              }`}
              style={{ backgroundColor: cat.bg }}
            >
              <div className="text-2xl sm:text-3xl">
                {cat.icon}
              </div>
              <span
                className={`text-[9px] sm:text-[10px] md:text-xs font-bold px-1 text-center leading-tight`}
                style={{ color: cat.text === "white" ? "white" : undefined }}
              >
                <span className={cat.text !== "white" ? `text-${cat.text}` : ""}>
                  {cat.label}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
