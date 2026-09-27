export default function RecentActivity() {
  const activities = [
    {
      icon: "🦖",
      bg: "bg-green-100",
      dot: "bg-green-500",
      title: "Dinosaur Quiz published",
      time: "2 hours ago",
      desc: "Content published and is now live on the website."
    },
    {
      icon: "👤",
      bg: "bg-blue-100",
      dot: "bg-blue-500",
      title: "New user registered",
      time: "8 hours ago",
      desc: "A new parent account was created."
    },
    {
      icon: "🧮",
      bg: "bg-pink-100",
      dot: "bg-pink-500",
      title: "Math Worksheets updated",
      time: "5 hours ago",
      desc: "Content details and files were updated."
    },
    {
      icon: "🦓",
      bg: "bg-green-100",
      dot: "bg-green-500",
      title: "Animal Coloring Pages published",
      time: "1 day ago",
      desc: "Content published and is now live on the website."
    }
  ];

  return (
    <div className="bg-white rounded-[16px] md:rounded-[24px] p-4 md:p-5 border-none shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] col-span-1 xl:col-span-2 relative">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h3 className="text-[16px] font-bold text-[#0B2046]">Recent Activity</h3>
        <button className="text-[12px] font-bold text-gray-600 border border-gray-200 rounded-lg px-4 py-2 hover:bg-gray-50 transition-colors">
          View All
        </button>
      </div>

      <div className="relative">
        {/* Timeline vertical line */}
        <div className="absolute left-[11px] top-2 bottom-6 w-px bg-gray-200"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 relative">
          {activities.map((activity, idx) => (
            <div key={idx} className="flex gap-4 relative">
              <div className="relative z-10 flex flex-col items-center mt-1">
                <div className={`w-5 h-5 rounded-full bg-white border-2 border-white flex items-center justify-center shrink-0`}>
                  <div className={`w-2 h-2 rounded-full ${activity.dot}`}></div>
                </div>
              </div>
              <div className="flex gap-3 w-full">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-lg shrink-0 ${activity.bg}`}>
                  {activity.icon}
                </div>
                <div>
                  <div className="flex items-baseline gap-2 mb-0.5">
                    <span className="font-bold text-[#0B2046] text-[12px]">{activity.title}</span>
                    <span className="text-[10px] font-semibold text-gray-400">• {activity.time}</span>
                  </div>
                  <p className="text-gray-500 text-[11px] leading-relaxed">{activity.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
