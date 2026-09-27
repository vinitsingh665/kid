export default function TrashedPage() {
  const trashedItems = [
    { title: "Old Dinosaur Game v1", desc: "Outdated version", type: "Game", typeBg: "bg-blue-50 text-blue-600", emoji: "🦖", emojiBg: "bg-green-100", deletedDate: "Sep 20, 2025", by: "Admin" },
    { title: "Broken Math Quiz", desc: "Had rendering issues", type: "Printable", typeBg: "bg-pink-50 text-pink-600", emoji: "🧮", emojiBg: "bg-yellow-100", deletedDate: "Sep 18, 2025", by: "Admin" },
    { title: "Draft Story: Lost in Forest", desc: "Incomplete story", type: "Story", typeBg: "bg-purple-50 text-purple-600", emoji: "🌲", emojiBg: "bg-green-200", deletedDate: "Sep 15, 2025", by: "Editor" },
    { title: "Test Activity Pack", desc: "Test content, not real", type: "Activity", typeBg: "bg-amber-50 text-amber-600", emoji: "🧪", emojiBg: "bg-gray-100", deletedDate: "Sep 10, 2025", by: "Admin" },
    { title: "Science Experiment v0", desc: "Beta version - removed", type: "Experiment", typeBg: "bg-cyan-50 text-cyan-600", emoji: "⚗️", emojiBg: "bg-cyan-100", deletedDate: "Sep 8, 2025", by: "Admin" },
    { title: "Placeholder Content", desc: "Example placeholder", type: "Learning", typeBg: "bg-green-50 text-green-600", emoji: "📚", emojiBg: "bg-blue-100", deletedDate: "Sep 5, 2025", by: "Editor" },
  ];

  return (
    <div className="max-w-[1500px] mx-auto pb-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 pt-1 flex-wrap gap-4">
        <div>
          <h1 className="text-[20px] md:text-[24px] font-black text-[#0B2046] mb-1 flex items-center gap-2">
            🗑️ Trashed Content
          </h1>
          <p className="text-gray-500 text-[12px] md:text-[13px]">Items in trash will be permanently deleted after 30 days.</p>
        </div>
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2.5 px-5 rounded-xl text-[13px] transition-colors flex items-center gap-2 shadow-md">
          <svg className="w-4 h-4 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          Empty Trash
        </button>
      </div>

      {/* Warning Banner */}
      <div className="bg-amber-50 border border-amber-200 rounded-[16px] p-4 mb-5 flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center shrink-0 mt-0.5">
          <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <div>
          <p className="text-[13px] font-bold text-amber-800 mb-0.5">Items will be permanently deleted</p>
          <p className="text-[12px] text-amber-700">Trashed content is automatically removed after 30 days. Restore items if you need them back.</p>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-[16px] md:rounded-[24px] shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] overflow-hidden">
        <div className="p-4 md:p-5 border-b border-gray-100 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input type="text" placeholder="Search trashed items..." className="pl-9 pr-4 py-2 border border-gray-200 rounded-xl text-[13px] bg-white focus:outline-none focus:border-blue-400 font-medium w-full max-w-[280px]" />
            </div>
          </div>
          <span className="text-[12px] font-bold text-gray-400">{trashedItems.length} items in trash</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[700px]">
            <thead className="border-b border-gray-100 bg-gray-50/50">
              <tr>
                <th className="py-4 pl-5 pr-2 w-10">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300 cursor-pointer" />
                </th>
                <th className="py-4 px-2 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Title</th>
                <th className="py-4 px-2 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Type</th>
                <th className="py-4 px-2 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Deleted</th>
                <th className="py-4 px-2 text-[11px] font-bold text-gray-500 uppercase tracking-wider">By</th>
                <th className="py-4 pr-5 pl-2 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {trashedItems.map((item, idx) => (
                <tr key={idx} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="py-3 pl-5 pr-2">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 cursor-pointer" />
                  </td>
                  <td className="py-3 px-2">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0 grayscale opacity-60 ${item.emojiBg}`}>
                        {item.emoji}
                      </div>
                      <div>
                        <div className="font-bold text-gray-500 text-[13px] line-through">{item.title}</div>
                        <div className="text-gray-400 text-[11px]">{item.desc}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-2">
                    <span className={`inline-block px-2.5 py-1 rounded-lg text-[11px] font-bold opacity-60 ${item.typeBg}`}>{item.type}</span>
                  </td>
                  <td className="py-3 px-2 text-[12px] font-medium text-gray-500">{item.deletedDate}</td>
                  <td className="py-3 px-2 text-[12px] font-medium text-gray-500">{item.by}</td>
                  <td className="py-3 pr-5 pl-2">
                    <div className="flex items-center justify-end gap-2">
                      <button className="px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg text-[11px] font-bold transition-colors flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                        </svg>
                        Restore
                      </button>
                      <button className="px-3 py-1.5 bg-red-50 hover:bg-red-100 text-red-500 rounded-lg text-[11px] font-bold transition-colors">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
