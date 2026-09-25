const categories = [
  { id: "all", label: "All Games", icon: "🎮", bg: "#3B82F6", text: "white" },
  { id: "action", label: "Action", icon: "🚀", bg: "white", text: "gray-700" },
  { id: "puzzle", label: "Puzzle", icon: "🧩", bg: "white", text: "gray-700" },
  { id: "math", label: "Math", icon: "🔢", bg: "white", text: "gray-700" },
  { id: "memory", label: "Memory", icon: "🧠", bg: "white", text: "gray-700" },
  { id: "word", label: "Word", icon: "🔤", bg: "white", text: "gray-700" },
  { id: "quiz", label: "Quiz", icon: "🏆", bg: "white", text: "gray-700" },
  { id: "drawing", label: "Drawing", icon: "🎨", bg: "white", text: "gray-700" },
  { id: "adventure", label: "Adventure", icon: "🗺️", bg: "white", text: "gray-700" },
  { id: "animals", label: "Animals", icon: "🐾", bg: "white", text: "gray-700" },
  { id: "science", label: "Science", icon: "🔬", bg: "white", text: "gray-700" },
  { id: "sports", label: "Sports", icon: "⚽", bg: "white", text: "gray-700" },
];

export default function GamesCategoryBar() {
  return (
    <section className="relative z-10 -mt-6 sm:-mt-8 pb-8 px-4 sm:px-6 max-w-[1400px] mx-auto w-full">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-2 sm:p-4">
        <div
          className="flex gap-2 sm:gap-3 lg:gap-4 overflow-x-auto pb-2 snap-x"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`snap-start flex flex-col items-center justify-center min-w-[72px] sm:min-w-[80px] lg:min-w-0 lg:flex-1 h-[72px] sm:h-[88px] rounded-xl sm:rounded-2xl transition-all duration-200 shrink-0 lg:shrink ${
                cat.id === "all" ? "shadow-md hover:scale-105" : "border border-gray-100 hover:border-blue-200 hover:bg-blue-50"
              }`}
              style={{ background: cat.bg }}
            >
              <span className="text-2xl sm:text-3xl mb-1">{cat.icon}</span>
              <span
                className={`text-[10px] sm:text-xs font-bold ${
                  cat.text === "white" ? "text-white" : "text-gray-700"
                }`}
              >
                {cat.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
