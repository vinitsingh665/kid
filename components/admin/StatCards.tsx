export default function StatCards() {
  const stats = [
    {
      title: "Total Content",
      value: "248",
      trend: "+12",
      trendUp: true,
      icon: (
        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      bg: "bg-blue-100",
      chart: "text-blue-400"
    },
    {
      title: "Published",
      value: "201",
      trend: "+8",
      trendUp: true,
      icon: (
        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      ),
      bg: "bg-green-100",
      chart: "text-green-400"
    },
    {
      title: "Drafts",
      value: "23",
      trend: "+4",
      trendUp: true,
      icon: (
        <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
      bg: "bg-amber-100",
      chart: "text-amber-400"
    },
    {
      title: "Downloads",
      value: "18.4K",
      trend: "+25%",
      trendUp: true,
      icon: (
        <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      ),
      bg: "bg-purple-100",
      chart: "text-purple-400"
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
      {stats.map((stat, idx) => (
        <div key={idx} className="bg-white rounded-[16px] md:rounded-[24px] p-4 md:p-5 border-none shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] flex flex-col relative overflow-hidden">
          <div className="flex justify-between items-start mb-2 md:mb-3">
            <div className={`w-10 h-10 md:w-12 md:h-12 rounded-[12px] md:rounded-[16px] ${stat.bg} flex items-center justify-center`}>
              {stat.icon}
            </div>
            
            {/* Tiny mini chart */}
            <div className={`flex items-end gap-1 h-8 ${stat.chart}`}>
              <div className="w-1.5 bg-current rounded-t-sm h-3 opacity-40"></div>
              <div className="w-1.5 bg-current rounded-t-sm h-5 opacity-60"></div>
              <div className="w-1.5 bg-current rounded-t-sm h-4 opacity-80"></div>
              <div className="w-1.5 bg-current rounded-t-sm h-8"></div>
            </div>
          </div>
          
          <div className="text-gray-500 text-[11px] md:text-[13px] font-semibold mb-0.5 whitespace-nowrap">{stat.title}</div>
          <div className="flex items-baseline gap-2 md:gap-3">
            <span className="text-xl md:text-[28px] font-black text-[#0B2046] tracking-tight leading-none">{stat.value}</span>
          </div>
          
          <div className="flex items-center gap-1 mt-2">
            <span className={`text-xs font-bold ${stat.trendUp ? "text-green-500" : "text-red-500"}`}>
              {stat.trendUp ? "↑" : "↓"} {stat.trend}
            </span>
            <span className="text-xs text-gray-400 font-medium">this month</span>
          </div>
        </div>
      ))}
    </div>
  );
}
