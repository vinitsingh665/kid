export default function TagsPage() {
  const tags = [
    { name: "quiz", count: 24, color: "bg-blue-100 text-blue-700" },
    { name: "animals", count: 31, color: "bg-green-100 text-green-700" },
    { name: "printable", count: 45, color: "bg-pink-100 text-pink-700" },
    { name: "worksheet", count: 18, color: "bg-purple-100 text-purple-700" },
    { name: "coloring", count: 28, color: "bg-orange-100 text-orange-700" },
    { name: "math", count: 16, color: "bg-amber-100 text-amber-700" },
    { name: "science", count: 14, color: "bg-cyan-100 text-cyan-700" },
    { name: "story", count: 19, color: "bg-violet-100 text-violet-700" },
    { name: "beginner", count: 37, color: "bg-emerald-100 text-emerald-700" },
    { name: "advanced", count: 12, color: "bg-red-100 text-red-700" },
    { name: "interactive", count: 22, color: "bg-indigo-100 text-indigo-700" },
    { name: "creative", count: 20, color: "bg-rose-100 text-rose-700" },
    { name: "outdoor", count: 8, color: "bg-teal-100 text-teal-700" },
    { name: "indoor", count: 29, color: "bg-blue-100 text-blue-700" },
    { name: "english", count: 21, color: "bg-green-100 text-green-700" },
    { name: "seasonal", count: 11, color: "bg-yellow-100 text-yellow-700" },
    { name: "holiday", count: 9, color: "bg-red-100 text-red-700" },
    { name: "free-download", count: 53, color: "bg-green-100 text-green-700" },
    { name: "pdf", count: 41, color: "bg-gray-100 text-gray-700" },
    { name: "toddler", count: 26, color: "bg-pink-100 text-pink-700" },
    { name: "kindergarten", count: 33, color: "bg-purple-100 text-purple-700" },
    { name: "craft", count: 15, color: "bg-amber-100 text-amber-700" },
    { name: "writing", count: 17, color: "bg-blue-100 text-blue-700" },
    { name: "reading", count: 23, color: "bg-cyan-100 text-cyan-700" },
  ];

  return (
    <div className="max-w-[1500px] mx-auto pb-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 pt-1 flex-wrap gap-4">
        <div>
          <h1 className="text-[20px] md:text-[24px] font-black text-[#0B2046] mb-1">Tags</h1>
          <p className="text-gray-500 text-[12px] md:text-[13px]">Manage tags to improve content discoverability.</p>
        </div>
        <button className="bg-[#0f172a] hover:bg-black text-white font-bold py-2.5 px-5 rounded-xl text-[13px] transition-colors flex items-center gap-2 shadow-md">
          <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
          Add Tag
        </button>
      </div>

      {/* Stats + Search row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
        {[
          { label: "Total Tags", value: tags.length, icon: "🏷️", bg: "bg-blue-50 text-blue-600" },
          { label: "Most Used", value: "free-download (53)", icon: "🔥", bg: "bg-orange-50 text-orange-600" },
          { label: "Total Tagged Items", value: tags.reduce((a, t) => a + t.count, 0), icon: "📄", bg: "bg-green-50 text-green-600" },
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-[16px] p-4 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] flex items-center gap-4">
            <div className={`w-11 h-11 rounded-[12px] flex items-center justify-center text-lg ${stat.bg}`}>{stat.icon}</div>
            <div>
              <div className="text-[11px] font-bold text-gray-500">{stat.label}</div>
              <div className="text-[16px] font-black text-[#0B2046]">{stat.value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Tags cloud area */}
      <div className="bg-white rounded-[16px] md:rounded-[24px] p-5 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] mb-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[15px] font-bold text-[#0B2046]">All Tags</h3>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input type="text" placeholder="Search tags..." className="pl-9 pr-4 py-2 border border-gray-200 rounded-xl text-[13px] bg-white focus:outline-none focus:border-blue-400 font-medium w-[200px]" />
          </div>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {tags.map((tag, idx) => (
            <div key={idx} className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-[12px] font-bold ${tag.color} group cursor-default`}>
              <span>#{tag.name}</span>
              <span className="bg-white/60 px-1.5 py-0.5 rounded-full text-[10px]">{tag.count}</span>
              <button className="opacity-0 group-hover:opacity-100 transition-opacity text-current hover:text-red-500 ml-0.5">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Tag Table */}
      <div className="bg-white rounded-[16px] md:rounded-[24px] shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] overflow-hidden">
        <table className="w-full text-left min-w-[500px]">
          <thead className="border-b border-gray-100 bg-gray-50/50">
            <tr>
              <th className="py-4 pl-5 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Tag Name</th>
              <th className="py-4 px-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">Items</th>
              <th className="py-4 px-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Usage</th>
              <th className="py-4 pr-5 pl-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {tags.slice(0, 8).map((tag, idx) => (
              <tr key={idx} className="hover:bg-gray-50/50 transition-colors group">
                <td className="py-3 pl-5">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-bold ${tag.color}`}>
                    #{tag.name}
                  </span>
                </td>
                <td className="py-3 px-4 text-center text-[13px] font-bold text-gray-700">{tag.count}</td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-100 rounded-full h-1.5">
                      <div className="h-1.5 rounded-full bg-blue-400" style={{ width: `${Math.min(100, (tag.count / 53) * 100)}%` }}></div>
                    </div>
                    <span className="text-[11px] font-bold text-gray-400">{Math.round((tag.count/53)*100)}%</span>
                  </div>
                </td>
                <td className="py-3 pr-5 pl-4 text-right">
                  <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1.5 text-gray-400 hover:text-blue-600 bg-gray-50 hover:bg-blue-50 rounded-lg transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </button>
                    <button className="p-1.5 text-gray-400 hover:text-red-500 bg-gray-50 hover:bg-red-50 rounded-lg transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
