import Link from "next/link";

interface ContentItem {
  title: string;
  desc: string;
  emoji: string;
  emojiBg: string;
  category: string;
  catBg: string;
  age: string;
  ageBg: string;
  status: string;
  statusDot: string;
  views: string;
  downloads: string;
  updated: string;
}

interface ContentSectionPageProps {
  title: string;
  subtitle: string;
  icon: string;
  typeLabel: string;
  typeBg: string;
  totalCount: number;
  publishedCount: number;
  draftCount: number;
  items: ContentItem[];
  accentColor: string;
}

export default function ContentSectionPage({
  title, subtitle, icon, typeLabel, typeBg, totalCount, publishedCount, draftCount, items, accentColor
}: ContentSectionPageProps) {
  return (
    <div className="max-w-[1500px] mx-auto pb-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 pt-1 flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <div className={`w-11 h-11 rounded-[14px] flex items-center justify-center text-2xl ${accentColor}`}>
            {icon}
          </div>
          <div>
            <h1 className="text-[20px] md:text-[24px] font-black text-[#0B2046] mb-0.5">{title}</h1>
            <p className="text-gray-500 text-[12px] md:text-[13px]">{subtitle}</p>
          </div>
        </div>
        <Link href="/admin/content/add-new" className="bg-[#0f172a] hover:bg-black text-white font-bold py-2.5 px-5 rounded-xl text-[13px] transition-colors flex items-center gap-2 shadow-md">
          <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
          Add New {typeLabel}
        </Link>
      </div>

      {/* Stat mini-cards */}
      <div className="grid grid-cols-3 gap-4 mb-5">
        {[
          { label: "Total", value: totalCount, icon: "📋", bg: "bg-gray-50 text-gray-600" },
          { label: "Published", value: publishedCount, icon: "✅", bg: "bg-green-50 text-green-600" },
          { label: "Drafts", value: draftCount, icon: "✏️", bg: "bg-amber-50 text-amber-600" },
        ].map((s, i) => (
          <div key={i} className="bg-white rounded-[16px] p-4 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] flex items-center gap-3">
            <div className={`w-10 h-10 rounded-[12px] flex items-center justify-center text-lg ${s.bg}`}>{s.icon}</div>
            <div>
              <div className="text-[11px] font-bold text-gray-500">{s.label}</div>
              <div className="text-[20px] font-black text-[#0B2046] leading-none">{s.value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Content table */}
      <div className="bg-white rounded-[16px] md:rounded-[24px] shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] overflow-hidden">
        <div className="p-4 md:p-5 border-b border-gray-100 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
          <div className="relative flex-1 max-w-[320px]">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input type="text" placeholder={`Search ${title.toLowerCase()}...`} className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-xl text-[13px] bg-white focus:outline-none focus:border-blue-400 font-medium" />
          </div>
          <div className="flex items-center gap-2">
            <select className="px-3 py-2 border border-gray-200 rounded-xl text-[12px] font-bold text-gray-600 bg-white focus:outline-none">
              <option>All Status</option>
              <option>Published</option>
              <option>Draft</option>
            </select>
            <select className="px-3 py-2 border border-gray-200 rounded-xl text-[12px] font-bold text-gray-600 bg-white focus:outline-none">
              <option>Latest First</option>
              <option>Oldest First</option>
              <option>Most Viewed</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[800px]">
            <thead className="border-b border-gray-100 bg-gray-50/50">
              <tr>
                <th className="py-4 pl-5 pr-2 w-10"><input type="checkbox" className="w-4 h-4 rounded border-gray-300 cursor-pointer" /></th>
                <th className="py-4 px-2 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Title</th>
                <th className="py-4 px-2 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">Category</th>
                <th className="py-4 px-2 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">Age</th>
                <th className="py-4 px-2 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">Status</th>
                <th className="py-4 px-2 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">Views</th>
                <th className="py-4 px-2 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">Downloads</th>
                <th className="py-4 px-2 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Updated</th>
                <th className="py-4 pr-5 pl-2 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {items.map((item, idx) => (
                <tr key={idx} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="py-3 pl-5 pr-2"><input type="checkbox" className="w-4 h-4 rounded border-gray-300 cursor-pointer" /></td>
                  <td className="py-3 px-2">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0 ${item.emojiBg}`}>{item.emoji}</div>
                      <div>
                        <div className="font-bold text-[#0B2046] text-[13px]">{item.title}</div>
                        <div className="text-gray-500 text-[11px]">{item.desc}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-2 text-center">
                    <span className={`inline-block px-2.5 py-1 rounded-lg text-[11px] font-bold ${item.catBg}`}>{item.category}</span>
                  </td>
                  <td className="py-3 px-2 text-center">
                    <span className={`inline-block px-2.5 py-1 rounded-lg text-[11px] font-bold ${item.ageBg}`}>{item.age}</span>
                  </td>
                  <td className="py-3 px-2">
                    <div className="flex items-center justify-center gap-1.5">
                      <div className={`w-1.5 h-1.5 rounded-full ${item.statusDot}`}></div>
                      <span className={`text-[12px] font-bold ${item.status === "Published" ? "text-green-600" : "text-gray-500"}`}>{item.status}</span>
                    </div>
                  </td>
                  <td className="py-3 px-2 text-center text-[12px] font-bold text-gray-600">{item.views}</td>
                  <td className="py-3 px-2 text-center text-[12px] font-bold text-gray-600">{item.downloads}</td>
                  <td className="py-3 px-2 text-[12px] font-medium text-gray-500">{item.updated}</td>
                  <td className="py-3 pr-5 pl-2 text-right">
                    <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1.5 text-gray-400 hover:text-blue-600 bg-gray-50 hover:bg-blue-50 rounded-lg transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                      </button>
                      <button className="p-1.5 text-gray-400 hover:text-green-600 bg-gray-50 hover:bg-green-50 rounded-lg transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                      <button className="p-1.5 text-gray-400 hover:text-red-500 bg-gray-50 hover:bg-red-50 rounded-lg transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 border-t border-gray-100 flex items-center justify-between">
          <div className="text-[12px] font-medium text-gray-500">Showing <span className="font-bold text-gray-700">1-{items.length}</span> of <span className="font-bold text-gray-700">{totalCount}</span> items</div>
          <div className="flex items-center gap-1">
            <button className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button className="w-8 h-8 rounded-lg bg-blue-600 text-white font-bold text-[13px] flex items-center justify-center shadow-sm">1</button>
            <button className="w-8 h-8 rounded-lg text-gray-600 font-bold text-[13px] hover:bg-gray-50 flex items-center justify-center">2</button>
            <button className="w-8 h-8 rounded-lg text-gray-600 font-bold text-[13px] hover:bg-gray-50 flex items-center justify-center">3</button>
            <button className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
