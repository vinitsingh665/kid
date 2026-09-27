export default function RecentContent() {
  const content = [
    {
      icon: "🦖",
      bg: "bg-green-100",
      title: "Dinosaur Quiz",
      desc: "Fun quiz about dinosaurs",
      type: "Game",
      typeBg: "bg-blue-100 text-blue-600",
      status: "Published",
      statusBg: "text-green-600",
      statusDot: "bg-green-500",
      views: "2.4K",
      downloads: "892",
      updated: "Sep 28, 2025"
    },
    {
      icon: "🦓",
      bg: "bg-gray-100",
      title: "Animal Coloring Pages",
      desc: "50+ animal coloring pages",
      type: "Printable",
      typeBg: "bg-pink-100 text-pink-600",
      status: "Published",
      statusBg: "text-green-600",
      statusDot: "bg-green-500",
      views: "3.1K",
      downloads: "2.8K",
      updated: "Sep 27, 2025"
    },
    {
      icon: "🧮",
      bg: "bg-yellow-100",
      title: "Math Worksheets",
      desc: "Addition & subtraction",
      type: "Printable",
      typeBg: "bg-pink-100 text-pink-600",
      status: "Published",
      statusBg: "text-green-600",
      statusDot: "bg-green-500",
      views: "1.8K",
      downloads: "1.2K",
      updated: "Sep 26, 2025"
    },
    {
      icon: "🚀",
      bg: "bg-indigo-900",
      title: "Space Adventure",
      desc: "Explore the solar system",
      type: "Game",
      typeBg: "bg-blue-100 text-blue-600",
      status: "Published",
      statusBg: "text-green-600",
      statusDot: "bg-green-500",
      views: "2.9K",
      downloads: "1.1K",
      updated: "Sep 26, 2025"
    },
    {
      icon: "⛵",
      bg: "bg-red-100",
      title: "Paper Boat Craft",
      desc: "Easy DIY activity for kids",
      type: "Activity",
      typeBg: "bg-amber-100 text-amber-600",
      status: "Draft",
      statusBg: "text-gray-500",
      statusDot: "bg-gray-400",
      views: "420",
      downloads: "210",
      updated: "Sep 25, 2025"
    }
  ];

  return (
    <div className="bg-white rounded-[16px] md:rounded-[24px] p-4 md:p-5 border-none shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] col-span-1 xl:col-span-2">
      <div className="flex items-center justify-between mb-4 md:mb-5">
        <div>
          <h3 className="text-[16px] font-bold text-[#0B2046]">Recent Content</h3>
          <p className="text-gray-500 text-[11px] md:text-[13px] hidden md:block">Manage and view your latest content</p>
        </div>
        <div className="flex items-center gap-2 md:gap-3">
          <button className="md:hidden flex items-center gap-1 px-3 py-1.5 border border-gray-200 rounded-lg text-[11px] font-bold text-gray-700 hover:bg-gray-50 transition-colors">
            View All
          </button>
          
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              className="pl-9 pr-4 py-2 border border-gray-200 rounded-xl text-sm bg-white focus:outline-none focus:border-blue-400 w-full sm:w-[200px]"
              placeholder="Search content..."
            />
          </div>
          <button className="hidden md:flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Filters
          </button>
        </div>
      </div>
      <div className="overflow-x-auto -mx-4 px-4 md:-mx-5 md:px-5 sm:mx-0 sm:px-0">
        <table className="w-full text-left border-collapse min-w-max md:min-w-[700px]">
          <thead className="hidden md:table-header-group">
            <tr className="border-b border-gray-100">
              <th className="pb-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider w-[40%]">Title</th>
              <th className="pb-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Type</th>
              <th className="pb-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Status</th>
              <th className="pb-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Views</th>
              <th className="pb-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Downloads</th>
              <th className="pb-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Updated</th>
              <th className="pb-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {content.map((item, idx) => (
              <tr key={idx} className="hover:bg-gray-50/50 transition-colors group">
                <td className="py-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-xl shrink-0 ${item.bg}`}>
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-bold text-[#0B2046] text-[13px] leading-snug">{item.title}</div>
                      <div className="text-gray-500 text-[11px]">{item.desc}</div>
                    </div>
                  </div>
                </td>
                <td className="py-3">
                  <span className={`inline-block px-2.5 py-1 rounded-lg text-[10px] font-bold ${item.typeBg}`}>
                    {item.type}
                  </span>
                </td>
                <td className="hidden md:table-cell py-2 md:py-3 px-2 md:px-0">
                  <div className="flex items-center gap-1.5">
                    <div className={`w-1.5 h-1.5 rounded-full ${item.statusDot}`}></div>
                    <span className={`text-[12px] font-semibold ${item.statusBg}`}>{item.status}</span>
                  </div>
                </td>
                <td className="py-2 md:py-3 px-2 md:px-0 text-[10px] md:text-[12px] font-semibold text-gray-600">
                  <div className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5 text-gray-400 md:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    {item.views}
                  </div>
                </td>
                <td className="py-2 md:py-3 px-2 md:px-0 text-[10px] md:text-[12px] font-semibold text-gray-600">
                  <div className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5 text-gray-400 md:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    {item.downloads}
                  </div>
                </td>
                <td className="hidden md:table-cell py-2 md:py-3 px-2 md:px-0 text-[12px] text-gray-500">{item.updated}</td>
                <td className="py-3 text-right">
                  <button className="p-1.5 text-gray-400 hover:text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M5 10a2 2 0 110 4 2 2 0 010-4zm7 0a2 2 0 110 4 2 2 0 010-4zm7 0a2 2 0 110 4 2 2 0 010-4z" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
