export default function CategoriesPage() {
  const categories = [
    { name: "Animals", icon: "🦁", count: 34, color: "bg-green-100 text-green-600", published: 28, drafts: 6 },
    { name: "Science", icon: "🔬", count: 22, color: "bg-blue-100 text-blue-600", published: 20, drafts: 2 },
    { name: "Math", icon: "➕", count: 18, color: "bg-purple-100 text-purple-600", published: 16, drafts: 2 },
    { name: "Coloring", icon: "🎨", count: 45, color: "bg-pink-100 text-pink-600", published: 45, drafts: 0 },
    { name: "English", icon: "📝", count: 27, color: "bg-amber-100 text-amber-600", published: 24, drafts: 3 },
    { name: "Crafts", icon: "✂️", count: 15, color: "bg-red-100 text-red-600", published: 12, drafts: 3 },
    { name: "Bedtime", icon: "🌙", count: 12, color: "bg-indigo-100 text-indigo-600", published: 11, drafts: 1 },
    { name: "Nature", icon: "🌿", count: 19, color: "bg-emerald-100 text-emerald-600", published: 17, drafts: 2 },
    { name: "Space", icon: "🚀", count: 8, color: "bg-violet-100 text-violet-600", published: 7, drafts: 1 },
    { name: "History", icon: "🏛️", count: 6, color: "bg-orange-100 text-orange-600", published: 5, drafts: 1 },
    { name: "Cooking", icon: "🍳", count: 9, color: "bg-yellow-100 text-yellow-600", published: 9, drafts: 0 },
    { name: "Music", icon: "🎵", count: 7, color: "bg-rose-100 text-rose-600", published: 6, drafts: 1 },
  ];

  return (
    <div className="max-w-[1500px] mx-auto pb-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 pt-1 flex-wrap gap-4">
        <div>
          <h1 className="text-[20px] md:text-[24px] font-black text-[#0B2046] mb-1">Categories</h1>
          <p className="text-gray-500 text-[12px] md:text-[13px]">Organize your content with categories.</p>
        </div>
        <button className="bg-[#0f172a] hover:bg-black text-white font-bold py-2.5 px-5 rounded-xl text-[13px] transition-colors flex items-center gap-2 shadow-md">
          <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
          Add Category
        </button>
      </div>

      {/* Search */}
      <div className="bg-white rounded-[16px] md:rounded-[24px] p-4 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] mb-5 flex items-center gap-3">
        <div className="relative flex-1 max-w-[400px]">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input type="text" placeholder="Search categories..." className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-xl text-[13px] bg-white focus:outline-none focus:border-blue-400 font-medium" />
        </div>
        <div className="text-[12px] font-bold text-gray-500 ml-auto">{categories.length} categories total</div>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {categories.map((cat, idx) => (
          <div key={idx} className="bg-white rounded-[16px] md:rounded-[20px] p-5 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12)] transition-all cursor-pointer group">
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 rounded-[14px] flex items-center justify-center text-2xl ${cat.color.split(" ")[0]}`}>
                {cat.icon}
              </div>
              <div className="flex items-center gap-1">
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
            </div>
            <h3 className={`text-[16px] font-black ${cat.color.split(" ")[1]} mb-0.5`}>{cat.name}</h3>
            <p className="text-[12px] text-gray-500 mb-4">{cat.count} items total</p>
            <div className="w-full bg-gray-100 rounded-full h-1.5 mb-2">
              <div className={`h-1.5 rounded-full ${cat.color.split(" ")[0].replace("100","500")}`} style={{ width: `${(cat.published/cat.count)*100}%` }}></div>
            </div>
            <div className="flex items-center justify-between text-[11px] font-bold">
              <span className="text-green-600">{cat.published} published</span>
              <span className="text-amber-500">{cat.drafts} drafts</span>
            </div>
          </div>
        ))}
        {/* Add new category card */}
        <button className="bg-white/60 rounded-[16px] md:rounded-[20px] p-5 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.04)] border-2 border-dashed border-gray-200 hover:border-blue-300 hover:bg-blue-50/30 transition-all flex flex-col items-center justify-center gap-3 text-center min-h-[180px]">
          <div className="w-12 h-12 rounded-[14px] bg-gray-100 flex items-center justify-center">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <p className="text-[13px] font-bold text-gray-500">Add New Category</p>
        </button>
      </div>
    </div>
  );
}
