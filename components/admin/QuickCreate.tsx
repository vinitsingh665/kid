export default function QuickCreate() {
  const actions = [
    {
      title: "New Game",
      desc: "Create an interactive game for kids",
      icon: (
        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      bg: "bg-blue-50"
    },
    {
      title: "New Printable",
      desc: "Upload worksheets, coloring pages and more",
      icon: (
        <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      bg: "bg-pink-50"
    },
    {
      title: "New Learning Resource",
      desc: "Add educational content and guides",
      icon: (
        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      bg: "bg-green-50"
    },
    {
      title: "New Activity",
      desc: "Share fun activities and crafts for kids",
      icon: (
        <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      bg: "bg-amber-50"
    }
  ];

  return (
    <div className="bg-white rounded-[16px] md:rounded-[24px] p-4 md:p-5 border-none shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] h-full">
      <h3 className="text-[16px] font-bold text-[#0B2046]">Quick Create</h3>
      <p className="text-gray-500 text-[11px] md:text-[13px] mb-4 md:mb-5">Add new content to Kidzoo</p>
      
      <div className="grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-3">
        {actions.map((action, idx) => (
          <button key={idx} className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-2 md:gap-3 p-3 md:p-4 rounded-[16px] md:rounded-[20px] border border-gray-100 hover:border-blue-100 hover:shadow-sm hover:bg-blue-50/30 transition-all group relative">
            <div className={`w-10 h-10 md:w-11 md:h-11 rounded-full ${action.bg} flex items-center justify-center shrink-0`}>
              {action.icon}
            </div>
            <div className="md:pr-5 flex-1">
              <h4 className="text-[12px] md:text-[14px] font-bold text-[#0B2046] mb-0.5 md:mb-1 leading-tight">{action.title}</h4>
              <p className="text-gray-500 text-[10px] md:text-[12px] leading-relaxed hidden md:block">{action.desc}</p>
            </div>
            
            <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 md:group-hover:opacity-100 transition-opacity hidden md:block">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
