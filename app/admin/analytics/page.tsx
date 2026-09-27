export default function AnalyticsPage() {
  const monthlyData = [
    { month: "Apr", views: 8200, downloads: 3100 },
    { month: "May", views: 9400, downloads: 3800 },
    { month: "Jun", views: 11200, downloads: 4600 },
    { month: "Jul", views: 13800, downloads: 5200 },
    { month: "Aug", views: 16400, downloads: 6400 },
    { month: "Sep", views: 19200, downloads: 7800 },
  ];
  const maxVal = Math.max(...monthlyData.map(d => d.views));

  const topPages = [
    { name: "Dinosaur Quiz", views: 2400, change: "+12%", up: true },
    { name: "Animal Coloring Pages", views: 3100, change: "+24%", up: true },
    { name: "Math Worksheets", views: 1800, change: "+8%", up: true },
    { name: "Space Adventure", views: 2900, change: "-3%", up: false },
    { name: "Alphabet Tracing", views: 3600, change: "+18%", up: true },
  ];

  return (
    <div className="max-w-[1500px] mx-auto pb-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 pt-1 flex-wrap gap-4">
        <div>
          <h1 className="text-[20px] md:text-[24px] font-black text-[#0B2046] mb-1">Analytics</h1>
          <p className="text-gray-500 text-[12px] md:text-[13px]">Track performance, views and downloads across all content.</p>
        </div>
        <div className="flex items-center gap-2">
          <select className="px-3 py-2.5 border border-gray-200 bg-white rounded-xl text-[13px] font-bold text-gray-600 focus:outline-none">
            <option>Last 6 Months</option>
            <option>Last 30 Days</option>
            <option>Last Year</option>
          </select>
          <button className="px-4 py-2.5 bg-[#0f172a] text-white font-bold rounded-xl text-[13px] flex items-center gap-2 shadow-md hover:bg-black transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            Export
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
        {[
          { label: "Total Views", value: "78.2K", change: "+22%", icon: "👁️", bg: "bg-blue-50 text-blue-600", pos: true },
          { label: "Total Downloads", value: "30.9K", change: "+18%", icon: "📥", bg: "bg-green-50 text-green-600", pos: true },
          { label: "New Users", value: "1,290", change: "+34%", icon: "👤", bg: "bg-purple-50 text-purple-600", pos: true },
          { label: "Avg. Session", value: "8m 24s", change: "+6%", icon: "⏱️", bg: "bg-amber-50 text-amber-600", pos: true },
        ].map((s, i) => (
          <div key={i} className="bg-white rounded-[16px] p-4 md:p-5 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] flex items-center gap-4">
            <div className={`w-11 h-11 rounded-[14px] flex items-center justify-center text-xl ${s.bg}`}>{s.icon}</div>
            <div>
              <div className="text-[11px] font-bold text-gray-500">{s.label}</div>
              <div className="text-[22px] font-black text-[#0B2046] leading-none my-0.5">{s.value}</div>
              <span className={`text-[10px] font-bold ${s.pos ? "text-green-500" : "text-red-500"}`}>{s.change} vs last period</span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
        {/* Bar Chart */}
        <div className="lg:col-span-2 bg-white rounded-[16px] md:rounded-[24px] p-5 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)]">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-[15px] font-bold text-[#0B2046]">Views & Downloads</h3>
              <p className="text-[12px] text-gray-500">Monthly trends over the last 6 months</p>
            </div>
            <div className="flex items-center gap-4 text-[12px] font-bold">
              <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-blue-500"></div><span className="text-gray-600">Views</span></div>
              <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-purple-400"></div><span className="text-gray-600">Downloads</span></div>
            </div>
          </div>
          <div className="flex items-end justify-between gap-3 h-48">
            {monthlyData.map((d, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full flex items-end gap-1 justify-center" style={{ height: "168px" }}>
                  <div className="flex-1 bg-blue-500 rounded-t-lg opacity-80 hover:opacity-100 transition-opacity" style={{ height: `${(d.views/maxVal)*100}%` }}></div>
                  <div className="flex-1 bg-purple-400 rounded-t-lg opacity-80 hover:opacity-100 transition-opacity" style={{ height: `${(d.downloads/maxVal)*100}%` }}></div>
                </div>
                <span className="text-[11px] font-bold text-gray-400">{d.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Device breakdown */}
        <div className="bg-white rounded-[16px] md:rounded-[24px] p-5 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)]">
          <h3 className="text-[15px] font-bold text-[#0B2046] mb-1">Traffic by Device</h3>
          <p className="text-[12px] text-gray-500 mb-5">Where users access Kidzoo from</p>
          <div className="flex flex-col gap-4">
            {[
              { label: "Mobile", pct: 58, icon: "📱", color: "bg-blue-500" },
              { label: "Desktop", pct: 30, icon: "💻", color: "bg-green-500" },
              { label: "Tablet", pct: 12, icon: "📱", color: "bg-purple-400" },
            ].map((d, i) => (
              <div key={i}>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-base">{d.icon}</span>
                    <span className="text-[13px] font-bold text-[#0B2046]">{d.label}</span>
                  </div>
                  <span className="text-[13px] font-bold text-gray-600">{d.pct}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className={`h-2 rounded-full ${d.color}`} style={{ width: `${d.pct}%` }}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-5 border-t border-gray-100">
            <h4 className="text-[13px] font-bold text-[#0B2046] mb-3">Top Countries</h4>
            <div className="flex flex-col gap-2">
              {[
                { country: "🇺🇸 United States", pct: 42 },
                { country: "🇮🇳 India", pct: 18 },
                { country: "🇬🇧 United Kingdom", pct: 12 },
                { country: "🇨🇦 Canada", pct: 9 },
              ].map((c, i) => (
                <div key={i} className="flex items-center justify-between text-[12px]">
                  <span className="font-medium text-gray-600">{c.country}</span>
                  <span className="font-bold text-gray-700">{c.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Top Content Table */}
      <div className="bg-white rounded-[16px] md:rounded-[24px] shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] overflow-hidden">
        <div className="p-5 border-b border-gray-100">
          <h3 className="text-[15px] font-bold text-[#0B2046]">Top Performing Content</h3>
          <p className="text-[12px] text-gray-500">Most viewed content this month</p>
        </div>
        <table className="w-full text-left min-w-[500px]">
          <thead className="border-b border-gray-100 bg-gray-50/50">
            <tr>
              <th className="py-4 pl-5 text-[11px] font-bold text-gray-500 uppercase tracking-wider">#</th>
              <th className="py-4 px-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Content</th>
              <th className="py-4 px-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">Views</th>
              <th className="py-4 pr-5 pl-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-right">Change</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {topPages.map((page, idx) => (
              <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                <td className="py-3 pl-5 text-[13px] font-bold text-gray-400">{String(idx+1).padStart(2,"0")}</td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-lg">
                      {["🦖","🦓","🧮","🚀","Aa"][idx]}
                    </div>
                    <span className="font-bold text-[#0B2046] text-[13px]">{page.name}</span>
                  </div>
                </td>
                <td className="py-3 px-4 text-center text-[13px] font-bold text-gray-700">{page.views.toLocaleString()}</td>
                <td className="py-3 pr-5 pl-4 text-right">
                  <span className={`text-[12px] font-bold ${page.up ? "text-green-500" : "text-red-500"}`}>{page.change}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
