import React from "react";

export default function ContentManagementPage() {
  const stats = [
    { title: "Total Content", value: "248", change: "+12%", changeType: "positive", icon: "📄", bg: "bg-blue-50 text-blue-500" },
    { title: "Published", value: "201", change: "+8%", changeType: "positive", icon: "✅", bg: "bg-green-50 text-green-500" },
    { title: "Drafts", value: "23", change: "+4%", changeType: "positive", icon: "✏️", bg: "bg-amber-50 text-amber-500" },
    { title: "Trashed", value: "14", change: "-2%", changeType: "negative", icon: "🗑️", bg: "bg-red-50 text-red-500" },
  ];

  const types = [
    { name: "All", count: 248, icon: "📋", active: true, bg: "bg-blue-50 text-blue-600 border-blue-200" },
    { name: "Games", count: 68, icon: "🎮", active: false, bg: "bg-blue-50 text-blue-600 border-transparent" },
    { name: "Printables", count: 72, icon: "📄", active: false, bg: "bg-pink-50 text-pink-600 border-transparent" },
    { name: "Learning", count: 45, icon: "📖", active: false, bg: "bg-green-50 text-green-600 border-transparent" },
    { name: "Activities", count: 32, icon: "💡", active: false, bg: "bg-amber-50 text-amber-600 border-transparent" },
    { name: "Stories", count: 18, icon: "📚", active: false, bg: "bg-purple-50 text-purple-600 border-transparent" },
    { name: "Experiments", count: 13, icon: "🧪", active: false, bg: "bg-cyan-50 text-cyan-600 border-transparent" },
  ];

  const contentItems = [
    {
      title: "Dinosaur Quiz",
      desc: "Fun quiz about dinosaurs",
      emoji: "🦖",
      emojiBg: "bg-green-200",
      type: "Game",
      typeBg: "bg-blue-50 text-blue-600",
      category: "Animals",
      catBg: "bg-green-50 text-green-600",
      age: "6-8",
      ageBg: "bg-pink-50 text-pink-600",
      status: "Published",
      statusColor: "text-green-600",
      statusDot: "bg-green-500",
      views: "2.4K",
      downloads: "892",
      updated: "Sep 28, 2025"
    },
    {
      title: "Animal Coloring Pages",
      desc: "50+ animal coloring pages",
      emoji: "🦓",
      emojiBg: "bg-gray-200",
      type: "Printable",
      typeBg: "bg-pink-50 text-pink-600",
      category: "Coloring",
      catBg: "bg-purple-50 text-purple-600",
      age: "3-6",
      ageBg: "bg-orange-50 text-orange-600",
      status: "Published",
      statusColor: "text-green-600",
      statusDot: "bg-green-500",
      views: "3.1K",
      downloads: "2.8K",
      updated: "Sep 27, 2025"
    },
    {
      title: "Math Worksheets",
      desc: "Addition & subtraction",
      emoji: "🧮",
      emojiBg: "bg-yellow-200",
      type: "Printable",
      typeBg: "bg-pink-50 text-pink-600",
      category: "Math",
      catBg: "bg-blue-50 text-blue-600",
      age: "6-8",
      ageBg: "bg-pink-50 text-pink-600",
      status: "Published",
      statusColor: "text-green-600",
      statusDot: "bg-green-500",
      views: "1.8K",
      downloads: "1.2K",
      updated: "Sep 26, 2025"
    },
    {
      title: "Space Adventure",
      desc: "Explore the solar system",
      emoji: "🚀",
      emojiBg: "bg-indigo-900",
      type: "Game",
      typeBg: "bg-blue-50 text-blue-600",
      category: "Science",
      catBg: "bg-green-50 text-green-600",
      age: "9-12",
      ageBg: "bg-purple-50 text-purple-600",
      status: "Published",
      statusColor: "text-green-600",
      statusDot: "bg-green-500",
      views: "2.9K",
      downloads: "1.1K",
      updated: "Sep 26, 2025"
    },
    {
      title: "Paper Boat Craft",
      desc: "Easy DIY activity for kids",
      emoji: "⛵",
      emojiBg: "bg-red-400",
      type: "Activity",
      typeBg: "bg-amber-50 text-amber-600",
      category: "Crafts",
      catBg: "bg-red-50 text-red-600",
      age: "4-8",
      ageBg: "bg-orange-50 text-orange-600",
      status: "Draft",
      statusColor: "text-gray-500",
      statusDot: "bg-gray-400",
      views: "420",
      downloads: "210",
      updated: "Sep 25, 2025"
    },
    {
      title: "Alphabet Tracing",
      desc: "Letters A to Z with guides",
      emoji: "Aa",
      emojiBg: "bg-white border border-gray-200 text-gray-800 font-serif",
      type: "Learning",
      typeBg: "bg-purple-50 text-purple-600",
      category: "English",
      catBg: "bg-blue-50 text-blue-600",
      age: "3-6",
      ageBg: "bg-orange-50 text-orange-600",
      status: "Published",
      statusColor: "text-green-600",
      statusDot: "bg-green-500",
      views: "3.6K",
      downloads: "2.1K",
      updated: "Sep 24, 2025"
    }
  ];

  return (
    <div className="max-w-[1500px] mx-auto pb-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pt-1 flex-wrap">
        <div>
          <h1 className="text-[20px] md:text-[24px] font-black text-[#0B2046] mb-1">Content Management</h1>
          <p className="text-gray-500 text-[12px] md:text-[13px]">Create, manage and organize all your content for Kidzoo.</p>
        </div>
        <button className="bg-[#0f172a] hover:bg-black text-white font-bold py-2.5 px-5 rounded-xl text-[13px] transition-colors flex items-center gap-2 shadow-md w-fit">
          <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
          Add New Content
          <div className="w-px h-4 bg-white/20 mx-1"></div>
          <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 mb-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-[16px] md:rounded-[24px] p-4 md:p-5 border-none shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] flex items-center gap-4">
            <div className={`w-12 h-12 rounded-[16px] flex items-center justify-center text-xl shrink-0 ${stat.bg}`}>
              {stat.icon}
            </div>
            <div>
              <div className="text-gray-500 text-[11px] md:text-[12px] font-bold mb-0.5 whitespace-nowrap">{stat.title}</div>
              <div className="text-[20px] md:text-[24px] font-black text-[#0B2046] leading-none mb-1.5">{stat.value}</div>
              <div className="flex items-center gap-1">
                <svg className={`w-3 h-3 ${stat.changeType === 'positive' ? 'text-green-500' : 'text-red-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={stat.changeType === 'positive' ? "M5 10l7-7m0 0l7 7m-7-7v18" : "M19 14l-7 7m0 0l-7-7m7 7V3"} />
                </svg>
                <span className={`text-[10px] md:text-[11px] font-bold ${stat.changeType === 'positive' ? 'text-green-500' : 'text-red-500'}`}>{stat.change}</span>
                <span className="text-gray-400 text-[10px] md:text-[11px]">this month</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Types Tab List */}
      <div className="flex gap-3 overflow-x-auto pb-4 mb-2 -mx-4 px-4 md:mx-0 md:px-0 no-scrollbar">
        {types.map((type, idx) => (
          <button key={idx} className={`flex items-center gap-3 px-4 py-2.5 rounded-xl border-2 transition-colors shrink-0 bg-white shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] ${type.active ? 'border-blue-500' : 'border-transparent hover:border-gray-200'}`}>
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-[16px] ${type.bg}`}>
              {type.icon}
            </div>
            <div className="text-left pr-2">
              <div className={`text-[13px] font-bold leading-tight ${type.active ? 'text-[#0B2046]' : 'text-gray-600'}`}>{type.name}</div>
              <div className={`text-[11px] font-bold leading-tight ${type.active ? 'text-gray-500' : 'text-gray-400'}`}>{type.count}</div>
            </div>
          </button>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="bg-white rounded-[16px] md:rounded-[24px] border-none shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] overflow-hidden">
        {/* Filters */}
        <div className="p-4 md:p-5 border-b border-gray-100 flex flex-col xl:flex-row gap-4 items-start xl:items-center justify-between">
          <div className="flex w-full xl:w-auto items-center gap-3 flex-1">
            <div className="relative w-full md:max-w-[320px]">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                className="pl-9 pr-4 py-2 border border-gray-200 rounded-xl text-[13px] bg-white focus:outline-none focus:border-blue-400 w-full font-medium"
                placeholder="Search content by title, description..."
              />
            </div>
            <button className="md:hidden p-2 border border-gray-200 rounded-xl text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
            </button>
          </div>
          
          <div className="hidden md:flex flex-wrap items-center gap-3">
            <select className="px-3 py-2 border border-gray-200 rounded-xl text-[12px] font-bold text-gray-600 bg-white focus:outline-none appearance-none pr-8 relative bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%239CA3AF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[length:10px_10px] bg-[right_10px_center]">
              <option>All Categories</option>
            </select>
            <select className="px-3 py-2 border border-gray-200 rounded-xl text-[12px] font-bold text-gray-600 bg-white focus:outline-none appearance-none pr-8 relative bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%239CA3AF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[length:10px_10px] bg-[right_10px_center]">
              <option>All Age Groups</option>
            </select>
            <select className="px-3 py-2 border border-gray-200 rounded-xl text-[12px] font-bold text-gray-600 bg-white focus:outline-none appearance-none pr-8 relative bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%239CA3AF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[length:10px_10px] bg-[right_10px_center]">
              <option>All Status</option>
            </select>
            <div className="w-px h-6 bg-gray-200 mx-1"></div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-gray-400">Sort by</span>
              <select className="px-3 py-2 border border-gray-200 rounded-xl text-[12px] font-bold text-[#0B2046] bg-white focus:outline-none appearance-none pr-8 relative bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%230B2046%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[length:10px_10px] bg-[right_10px_center]">
                <option>Latest First</option>
              </select>
            </div>
            <div className="flex bg-gray-50 p-1 rounded-xl border border-gray-200">
              <button className="p-1.5 bg-white rounded-lg shadow-sm text-blue-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <button className="p-1.5 text-gray-400 hover:text-gray-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Table List */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/50">
                <th className="py-4 pl-5 pr-2 w-10">
                  <input type="checkbox" className="w-4 h-4 rounded text-blue-600 border-gray-300 focus:ring-blue-500 cursor-pointer" />
                </th>
                <th className="py-4 px-2 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Title</th>
                <th className="py-4 px-2 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">Type</th>
                <th className="py-4 px-2 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">Category</th>
                <th className="py-4 px-2 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">Age Group</th>
                <th className="py-4 px-2 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">Status</th>
                <th className="py-4 px-2 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">Views</th>
                <th className="py-4 px-2 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">Downloads</th>
                <th className="py-4 px-2 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Updated</th>
                <th className="py-4 pr-5 pl-2 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {contentItems.map((item, idx) => (
                <tr key={idx} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="py-3 pl-5 pr-2">
                    <input type="checkbox" className="w-4 h-4 rounded text-blue-600 border-gray-300 focus:ring-blue-500 cursor-pointer" />
                  </td>
                  <td className="py-3 px-2">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0 ${item.emojiBg}`}>
                        {item.emoji}
                      </div>
                      <div>
                        <div className="font-bold text-[#0B2046] text-[13px] leading-snug">{item.title}</div>
                        <div className="text-gray-500 text-[11px]">{item.desc}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-2 text-center">
                    <span className={`inline-block px-2.5 py-1 rounded-lg text-[11px] font-bold ${item.typeBg}`}>
                      {item.type}
                    </span>
                  </td>
                  <td className="py-3 px-2 text-center">
                    <span className={`inline-block px-2.5 py-1 rounded-lg text-[11px] font-bold ${item.catBg}`}>
                      {item.category}
                    </span>
                  </td>
                  <td className="py-3 px-2 text-center">
                    <span className={`inline-block px-2.5 py-1 rounded-lg text-[11px] font-bold ${item.ageBg}`}>
                      {item.age}
                    </span>
                  </td>
                  <td className="py-3 px-2">
                    <div className="flex items-center justify-center gap-1.5">
                      <div className={`w-1.5 h-1.5 rounded-full ${item.statusDot}`}></div>
                      <span className={`text-[12px] font-bold ${item.statusColor}`}>{item.status}</span>
                    </div>
                  </td>
                  <td className="py-3 px-2 text-center text-[12px] font-bold text-gray-600">{item.views}</td>
                  <td className="py-3 px-2 text-center text-[12px] font-bold text-gray-600">{item.downloads}</td>
                  <td className="py-3 px-2 text-[12px] font-medium text-gray-500">{item.updated}</td>
                  <td className="py-3 pr-5 pl-2 text-right">
                    <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1.5 text-gray-400 hover:text-blue-600 bg-gray-50 hover:bg-blue-50 rounded-lg transition-colors" title="Edit">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                      </button>
                      <button className="p-1.5 text-gray-400 hover:text-green-600 bg-gray-50 hover:bg-green-50 rounded-lg transition-colors" title="View">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                      <button className="p-1.5 text-gray-400 hover:text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M5 10a2 2 0 110 4 2 2 0 010-4zm7 0a2 2 0 110 4 2 2 0 010-4zm7 0a2 2 0 110 4 2 2 0 010-4z" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile List View */}
        <div className="md:hidden flex flex-col divide-y divide-gray-100">
          {contentItems.map((item, idx) => (
            <div key={idx} className="p-4 flex flex-col gap-3">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-3xl shrink-0 ${item.emojiBg}`}>
                    {item.emoji}
                  </div>
                  <div className="flex flex-col gap-0.5 flex-1 min-w-0 pt-0.5">
                    <span className="font-bold text-[#0B2046] text-[14px] leading-snug truncate">{item.title}</span>
                    <span className="text-gray-500 text-[11px] truncate mb-1">{item.desc}</span>
                    <div className="flex items-center gap-1.5">
                      <div className={`w-1.5 h-1.5 rounded-full ${item.statusDot}`}></div>
                      <span className={`text-[11px] font-bold ${item.statusColor}`}>{item.status}</span>
                    </div>
                  </div>
                </div>
                <button className="p-1.5 text-gray-400 bg-gray-50 rounded-lg">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 10a2 2 0 110 4 2 2 0 010-4zm7 0a2 2 0 110 4 2 2 0 010-4zm7 0a2 2 0 110 4 2 2 0 010-4z" />
                  </svg>
                </button>
              </div>
              
              <div className="flex flex-wrap items-center gap-2 mt-1">
                <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${item.typeBg}`}>{item.type}</span>
                <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${item.catBg}`}>{item.category}</span>
                <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${item.ageBg}`}>{item.age}</span>
              </div>
              
              <div className="flex items-center justify-between mt-1 pt-3 border-t border-gray-50">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-gray-500">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-[12px] font-bold text-gray-600">{item.views}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    <span className="text-[12px] font-bold text-gray-600">{item.downloads}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-gray-500">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-[11px] font-medium">{item.updated}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="p-4 md:p-5 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[12px] font-medium text-gray-500 text-center sm:text-left">
            Showing <span className="font-bold text-gray-700">1-10</span> of <span className="font-bold text-gray-700">248</span> content items
          </div>
          
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex items-center">
              <button className="w-8 h-8 rounded-lg bg-blue-600 text-white font-bold text-[13px] flex items-center justify-center shadow-sm">1</button>
              <button className="w-8 h-8 rounded-lg text-gray-600 font-bold text-[13px] hover:bg-gray-50 flex items-center justify-center transition-colors">2</button>
              <button className="w-8 h-8 rounded-lg text-gray-600 font-bold text-[13px] hover:bg-gray-50 flex items-center justify-center transition-colors hidden sm:flex">3</button>
              <button className="w-8 h-8 rounded-lg text-gray-600 font-bold text-[13px] hover:bg-gray-50 flex items-center justify-center transition-colors hidden sm:flex">4</button>
              <span className="w-8 h-8 text-gray-400 flex items-center justify-center hidden sm:flex">...</span>
              <button className="w-8 h-8 rounded-lg text-gray-600 font-bold text-[13px] hover:bg-gray-50 flex items-center justify-center transition-colors hidden sm:flex">25</button>
            </div>
            <button className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          <div className="hidden md:flex items-center gap-2">
            <span className="text-[12px] font-medium text-gray-500">Rows per page</span>
            <select className="px-2.5 py-1.5 border border-gray-200 rounded-lg text-[12px] font-bold text-gray-700 bg-white focus:outline-none appearance-none pr-7 relative bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%239CA3AF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[length:10px_10px] bg-[right_8px_center]">
              <option>10</option>
              <option>20</option>
              <option>50</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
