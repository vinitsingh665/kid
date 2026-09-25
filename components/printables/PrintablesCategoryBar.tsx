const categories = [
  { id: "all", label: "All Printables", icon: "📄", bg: "#3B82F6", text: "white" },
  { id: "coloring", label: "Coloring Pages", icon: "🎨", bg: "white", text: "gray-700" },
  { id: "worksheets", label: "Worksheets", icon: "📝", bg: "white", text: "gray-700" },
  { id: "tracing", label: "Tracing", icon: "Aa", bg: "white", text: "gray-700", isTextIcon: true },
  { id: "math", label: "Math", icon: "🔢", bg: "white", text: "gray-700" },
  { id: "word-search", label: "Word Search", icon: "🔍", bg: "white", text: "gray-700" },
  { id: "mazes", label: "Mazes", icon: "🌀", bg: "white", text: "gray-700" },
  { id: "dot-to-dot", label: "Dot to Dot", icon: "✏️", bg: "white", text: "gray-700" },
  { id: "flashcards", label: "Flashcards", icon: "🎴", bg: "white", text: "gray-700" },
  { id: "activity-sheets", label: "Activity Sheets", icon: "📋", bg: "white", text: "gray-700" },
  { id: "calendars", label: "Calendars", icon: "📅", bg: "white", text: "gray-700" },
];

export default function PrintablesCategoryBar() {
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
              <div
                className={`text-2xl sm:text-3xl ${
                  cat.isTextIcon ? "font-serif text-purple-500 font-bold leading-none" : ""
                }`}
              >
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
