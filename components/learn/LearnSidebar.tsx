export default function LearnSidebar() {
  return (
    <aside className="w-full lg:w-[260px] shrink-0 space-y-8">
      {/* Age Group */}
      <div>
        <h3 className="font-bold text-gray-900 mb-3 text-sm">Age Group</h3>
        <div className="space-y-2">
          {["3-5 Years", "6-8 Years", "9-12 Years", "All Ages"].map((age) => (
            <label key={age} className="flex items-center gap-3 cursor-pointer group">
              <input 
                type="checkbox" 
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 transition-colors"
              />
              <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">{age}</span>
            </label>
          ))}
        </div>
      </div>

      <hr className="border-gray-100" />

      {/* Subject */}
      <div>
        <h3 className="font-bold text-gray-900 mb-3 text-sm">Subject</h3>
        <div className="space-y-2">
          {["English", "Math", "Science", "Animals", "General Knowledge", "Art & Creativity", "Indian Culture", "Life Skills", "Health & Wellness"].map((subject) => (
            <label key={subject} className="flex items-center gap-3 cursor-pointer group">
              <input 
                type="checkbox" 
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 transition-colors"
              />
              <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">{subject}</span>
            </label>
          ))}
        </div>
      </div>

      <hr className="border-gray-100" />

      {/* Lesson Type */}
      <div>
        <h3 className="font-bold text-gray-900 mb-3 text-sm">Lesson Type</h3>
        <div className="space-y-2">
          {["Interactive Lesson", "Video Lesson", "Quiz", "Worksheet", "Article", "Game-based"].map((type) => (
            <label key={type} className="flex items-center gap-3 cursor-pointer group">
              <input 
                type="checkbox" 
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 transition-colors"
              />
              <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">{type}</span>
            </label>
          ))}
        </div>
      </div>

      <button className="w-full py-2.5 flex items-center justify-center gap-2 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors shadow-sm mt-4">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        Reset Filters
      </button>
    </aside>
  );
}
