const categories = [
  { id: "all", label: "All Subjects", icon: "🔠", bg: "#3B82F6", text: "white" },
  { id: "english", label: "English", icon: "📖", bg: "white", text: "gray-700" },
  { id: "math", label: "Math", icon: "🧮", bg: "white", text: "gray-700" },
  { id: "science", label: "Science", icon: "🔬", bg: "white", text: "gray-700" },
  { id: "animals", label: "Animals", icon: "🐾", bg: "white", text: "gray-700" },
  { id: "gk", label: "General Knowledge", icon: "🌍", bg: "white", text: "gray-700" },
  { id: "art", label: "Art & Creativity", icon: "🎨", bg: "white", text: "gray-700" },
  { id: "life-skills", label: "Life Skills", icon: "💡", bg: "white", text: "gray-700" },
  { id: "indian-culture", label: "Indian Culture", icon: "🪔", bg: "white", text: "gray-700" },
  { id: "more", label: "More", icon: "⋯", bg: "white", text: "gray-700" },
];

export default function LearnCategoryBar() {
  return (
    <section className="relative z-10 -mt-6 sm:-mt-8 pb-8 px-4 sm:px-6 max-w-[1400px] mx-auto w-full">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-2 sm:p-4">
        <div
          className="flex gap-2 sm:gap-3 lg:gap-4 overflow-x-auto pb-2 lg:pb-0 snap-x"
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
              <span className={`text-2xl sm:text-3xl mb-1 ${cat.id === "more" ? "font-bold text-gray-400" : ""}`}>{cat.icon}</span>
              <span
                className={`text-[9px] sm:text-[10px] md:text-xs font-bold text-center leading-tight px-1 ${
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
