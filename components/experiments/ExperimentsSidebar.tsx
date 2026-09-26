export default function ExperimentsSidebar() {
  return (
    <aside className="w-full lg:w-[260px] shrink-0 space-y-8">
      {/* Search */}
      <div>
        <h3 className="font-bold text-gray-900 mb-3 text-sm">Search Experiments</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search by name or topic..."
            className="w-full pl-9 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          />
          <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Age Group */}
      <div>
        <h3 className="font-bold text-gray-900 mb-3 text-sm">Age Group</h3>
        <div className="space-y-2">
          {["3–5 Years", "6–8 Years", "9–12 Years", "All Ages"].map((age) => (
            <label key={age} className="flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              <span className="text-sm text-gray-600 group-hover:text-gray-900">{age}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Subject */}
      <div>
        <h3 className="font-bold text-gray-900 mb-3 text-sm">Subject</h3>
        <div className="space-y-2">
          {[
            "Physics",
            "Chemistry",
            "Biology",
            "Earth Science",
            "Space Science",
            "Fun Science",
            "Kitchen Science",
            "DIY Projects"
          ].map((sub) => (
            <label key={sub} className="flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              <span className="text-sm text-gray-600 group-hover:text-gray-900">{sub}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Materials Needed */}
      <div>
        <h3 className="font-bold text-gray-900 mb-3 text-sm">Materials Needed</h3>
        <div className="space-y-2">
          {[
            "Household Items",
            "Recycled Materials",
            "No Special Materials",
            "Garden / Nature",
            "Kitchen Items"
          ].map((mat) => (
            <label key={mat} className="flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              <span className="text-sm text-gray-600 group-hover:text-gray-900">{mat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Difficulty Level */}
      <div>
        <h3 className="font-bold text-gray-900 mb-3 text-sm">Difficulty Level</h3>
        <div className="space-y-2">
          {["Easy", "Medium", "Advanced"].map((level) => (
            <label key={level} className="flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              <span className="text-sm text-gray-600 group-hover:text-gray-900">{level}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Time Required */}
      <div>
        <h3 className="font-bold text-gray-900 mb-3 text-sm">Time Required</h3>
        <div className="space-y-2">
          {["Under 15 mins", "15 - 30 mins", "30 - 60 mins", "1+ hour"].map((time) => (
            <label key={time} className="flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              <span className="text-sm text-gray-600 group-hover:text-gray-900">{time}</span>
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
