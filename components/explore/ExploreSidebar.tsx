export default function ExploreSidebar() {
  return (
    <aside className="w-full lg:w-[260px] shrink-0 space-y-8">
      {/* Age Group */}
      <div>
        <h3 className="font-bold text-gray-900 mb-3 text-sm">Age Group</h3>
        <div className="space-y-2">
          {["2–3 Years", "3–5 Years", "6–8 Years", "9–12 Years", "13+ Years"].map((age) => (
            <label key={age} className="flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              <span className="text-sm text-gray-600 group-hover:text-gray-900">{age}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Category */}
      <div>
        <h3 className="font-bold text-gray-900 mb-3 text-sm">Category</h3>
        <div className="space-y-2">
          {["Games", "Printables", "Learn", "Stories", "Activities", "Experiments"].map((cat) => (
            <label key={cat} className="flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              <span className="text-sm text-gray-600 group-hover:text-gray-900">{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Subject */}
      <div>
        <h3 className="font-bold text-gray-900 mb-3 text-sm">Subject</h3>
        <div className="space-y-2">
          {["Math", "Science", "Animals", "Art & Craft", "Space", "Life Skills"].map((sub) => (
            <label key={sub} className="flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              <span className="text-sm text-gray-600 group-hover:text-gray-900">{sub}</span>
            </label>
          ))}
          <button className="text-sm text-gray-500 font-bold flex items-center gap-1 mt-2 hover:text-gray-900 transition-colors">
            Show More
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Type */}
      <div>
        <h3 className="font-bold text-gray-900 mb-3 text-sm">Type</h3>
        <div className="space-y-2">
          {["Interactive", "Printable", "Video", "Article", "Experiment"].map((type) => (
            <label key={type} className="flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              <span className="text-sm text-gray-600 group-hover:text-gray-900">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Difficulty */}
      <div>
        <h3 className="font-bold text-gray-900 mb-3 text-sm">Difficulty</h3>
        <div className="space-y-2">
          {["Easy", "Medium", "Challenging"].map((diff) => (
            <label key={diff} className="flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              <span className="text-sm text-gray-600 group-hover:text-gray-900">{diff}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Reset Button */}
      <button className="w-full flex items-center justify-center gap-2 py-2.5 border border-gray-200 rounded-xl text-sm font-bold text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors bg-white shadow-sm">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        Reset Filters
      </button>
    </aside>
  );
}
