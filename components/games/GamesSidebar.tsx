export default function GamesSidebar() {
  return (
    <aside className="w-full lg:w-[260px] shrink-0 space-y-6">
      {/* Search */}
      <div>
        <h3 className="font-bold text-gray-900 mb-3">Search Games</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search by name or topic..."
            className="w-full pl-9 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
          />
          <svg className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Age Group */}
      <div>
        <h3 className="font-bold text-gray-900 mb-3">Age Group</h3>
        <div className="space-y-2.5">
          {["3-5 Years", "6-8 Years", "9-12 Years", "All Ages"].map((age) => (
            <label key={age} className="flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
              <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">{age}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Game Type */}
      <div>
        <h3 className="font-bold text-gray-900 mb-3">Game Type</h3>
        <div className="space-y-2.5">
          {["Educational", "Puzzle", "Quiz", "Action", "Memory", "Word", "Drawing", "Adventure"].map((type) => (
            <label key={type} className="flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
              <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Subject */}
      <div>
        <h3 className="font-bold text-gray-900 mb-3">Subject</h3>
        <div className="space-y-2.5">
          {["Math", "English", "Science", "Animals", "General Knowledge", "Creativity"].map((subject) => (
            <label key={subject} className="flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
              <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">{subject}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Reset Button */}
      <button className="w-full py-2.5 flex items-center justify-center gap-2 text-sm font-medium text-gray-600 bg-gray-50 border border-gray-200 rounded-xl hover:bg-gray-100 transition-colors">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        Reset Filters
      </button>
    </aside>
  );
}
