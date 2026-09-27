export default function CategoryChart() {
  const categories = [
    { name: "Games", value: "28%", color: "bg-blue-500", stroke: "#3b82f6" },
    { name: "Printables", value: "24%", color: "bg-pink-400", stroke: "#f472b6" },
    { name: "Learning", value: "18%", color: "bg-green-500", stroke: "#22c55e" },
    { name: "Activities", value: "12%", color: "bg-yellow-400", stroke: "#facc15" },
    { name: "Stories", value: "10%", color: "bg-purple-500", stroke: "#a855f7" },
    { name: "Experiments", value: "8%", color: "bg-sky-400", stroke: "#38bdf8" },
  ];

  return (
    <div className="bg-white rounded-[16px] md:rounded-[24px] p-4 md:p-5 border-none shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] flex flex-col h-full">
      <div className="flex items-center justify-between mb-3 md:mb-5">
        <h3 className="text-[16px] font-bold text-[#0B2046]">Content by Category</h3>
        <div className="flex items-center gap-1 border border-gray-200 rounded-lg px-3 py-1.5 cursor-pointer">
          <span className="text-[12px] font-bold text-gray-600">All Content</span>
          <svg className="w-3 h-3 text-gray-400 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between gap-3 md:gap-5 flex-1 mt-0 md:mt-2">
        {/* Donut Chart */}
        <div className="relative w-24 h-24 md:w-32 md:h-32 shrink-0">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle cx="50" cy="50" r="40" fill="none" stroke="#f1f5f9" strokeWidth="20" />
            
            {/* Segments - Approximated visually */}
            {/* Games 28% */}
            <circle cx="50" cy="50" r="40" fill="none" stroke="#3b82f6" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset={251.2 - (251.2 * 0.28)} />
            
            {/* Printables 24% */}
            <circle cx="50" cy="50" r="40" fill="none" stroke="#f472b6" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset={251.2 - (251.2 * 0.24)} className="origin-center" style={{ transform: 'rotate(101deg)' }} />
            
            {/* Learning 18% */}
            <circle cx="50" cy="50" r="40" fill="none" stroke="#22c55e" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset={251.2 - (251.2 * 0.18)} className="origin-center" style={{ transform: 'rotate(187deg)' }} />
            
            {/* Activities 12% */}
            <circle cx="50" cy="50" r="40" fill="none" stroke="#facc15" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset={251.2 - (251.2 * 0.12)} className="origin-center" style={{ transform: 'rotate(252deg)' }} />
            
            {/* Stories 10% */}
            <circle cx="50" cy="50" r="40" fill="none" stroke="#a855f7" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset={251.2 - (251.2 * 0.10)} className="origin-center" style={{ transform: 'rotate(295deg)' }} />
            
            {/* Experiments 8% */}
            <circle cx="50" cy="50" r="40" fill="none" stroke="#38bdf8" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset={251.2 - (251.2 * 0.08)} className="origin-center" style={{ transform: 'rotate(331deg)' }} />
            
          </svg>
          
          {/* Inner Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-full m-[20px]">
            <span className="text-2xl font-black text-[#0B2046] leading-none">248</span>
            <span className="text-[11px] font-bold text-gray-400 mt-1">Total</span>
          </div>
        </div>

        {/* Legend */}
        <div className="flex-1 w-full">
          <ul className="space-y-3">
            {categories.map((cat, idx) => (
              <li key={idx} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`w-2.5 h-2.5 rounded-full ${cat.color}`}></div>
                  <span className="text-[13px] font-bold text-gray-600">{cat.name}</span>
                </div>
                <span className="text-[13px] font-bold text-[#0B2046]">{cat.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
