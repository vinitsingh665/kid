export default function TopContent() {
  const content = [
    {
      icon: "🦓",
      bg: "bg-gray-100",
      title: "Animal Coloring Pages",
      type: "Printable",
      typeBg: "bg-pink-100 text-pink-600",
      downloads: "2.8K"
    },
    {
      icon: "🦖",
      bg: "bg-green-100",
      title: "Dinosaur Quiz",
      type: "Game",
      typeBg: "bg-blue-100 text-blue-600",
      downloads: "2.1K"
    },
    {
      icon: "🧮",
      bg: "bg-yellow-100",
      title: "Math Worksheets",
      type: "Printable",
      typeBg: "bg-pink-100 text-pink-600",
      downloads: "1.2K"
    },
    {
      icon: "🚀",
      bg: "bg-indigo-900",
      title: "Space Facts for Kids",
      type: "Learning",
      typeBg: "bg-green-100 text-green-600",
      downloads: "980"
    },
    {
      icon: "🐋",
      bg: "bg-blue-100",
      title: "Ocean Animals Quiz",
      type: "Game",
      typeBg: "bg-blue-100 text-blue-600",
      downloads: "860"
    }
  ];

  return (
    <div className="bg-white rounded-[16px] md:rounded-[24px] p-4 md:p-5 border-none shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] col-span-1 h-full">
      <div className="flex items-center justify-between mb-4 md:mb-5">
        <h3 className="text-[16px] font-bold text-[#0B2046]">Top Content</h3>
        <div className="flex items-center gap-1 border border-gray-200 rounded-lg px-3 py-1.5 cursor-pointer">
          <span className="text-[12px] font-bold text-gray-600">Most Downloaded</span>
          <svg className="w-3 h-3 text-gray-400 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      <div className="flex flex-col gap-3.5">
        {content.map((item, idx) => (
          <div key={idx} className="flex items-center justify-between group cursor-pointer gap-2">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-lg shrink-0 ${item.bg}`}>
                {item.icon}
              </div>
              <div className="flex items-center gap-2.5 flex-1 min-w-0">
                <span className="font-bold text-[#0B2046] text-[12px] group-hover:text-blue-600 transition-colors truncate" title={item.title}>
                  {item.title}
                </span>
                <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold shrink-0 ${item.typeBg}`}>
                  {item.type}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1 text-gray-500 shrink-0 pl-2">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span className="text-[13px] font-bold">{item.downloads}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
