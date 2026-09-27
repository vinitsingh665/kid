export default function UsersParentsPage() {
  const users = [
    { name: "Sarah Johnson", email: "sarah.j@email.com", avatar: "SJ", avatarBg: "bg-blue-500", plan: "Premium", planBg: "bg-purple-50 text-purple-600", children: 2, joined: "Jan 12, 2025", lastActive: "2 hours ago", status: "Active" },
    { name: "Michael Chen", email: "m.chen@email.com", avatar: "MC", avatarBg: "bg-green-500", plan: "Free", planBg: "bg-gray-100 text-gray-600", children: 1, joined: "Feb 3, 2025", lastActive: "1 day ago", status: "Active" },
    { name: "Emma Williams", email: "emma.w@email.com", avatar: "EW", avatarBg: "bg-purple-500", plan: "Premium", planBg: "bg-purple-50 text-purple-600", children: 3, joined: "Mar 15, 2025", lastActive: "3 hours ago", status: "Active" },
    { name: "Robert Garcia", email: "r.garcia@email.com", avatar: "RG", avatarBg: "bg-orange-500", plan: "Free", planBg: "bg-gray-100 text-gray-600", children: 2, joined: "Apr 7, 2025", lastActive: "1 week ago", status: "Inactive" },
    { name: "Priya Patel", email: "priya.p@email.com", avatar: "PP", avatarBg: "bg-rose-500", plan: "Premium", planBg: "bg-purple-50 text-purple-600", children: 1, joined: "May 20, 2025", lastActive: "5 hours ago", status: "Active" },
    { name: "James Kim", email: "j.kim@email.com", avatar: "JK", avatarBg: "bg-cyan-500", plan: "Free", planBg: "bg-gray-100 text-gray-600", children: 2, joined: "Jun 11, 2025", lastActive: "2 days ago", status: "Active" },
    { name: "Lily Thompson", email: "lily.t@email.com", avatar: "LT", avatarBg: "bg-amber-500", plan: "Premium", planBg: "bg-purple-50 text-purple-600", children: 4, joined: "Jul 4, 2025", lastActive: "30 min ago", status: "Active" },
    { name: "David Brown", email: "d.brown@email.com", avatar: "DB", avatarBg: "bg-slate-500", plan: "Free", planBg: "bg-gray-100 text-gray-600", children: 1, joined: "Aug 9, 2025", lastActive: "3 weeks ago", status: "Inactive" },
  ];

  return (
    <div className="max-w-[1500px] mx-auto pb-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 pt-1 flex-wrap gap-4">
        <div>
          <h1 className="text-[20px] md:text-[24px] font-black text-[#0B2046] mb-1">Users & Parents</h1>
          <p className="text-gray-500 text-[12px] md:text-[13px]">Manage parent accounts and their children profiles.</p>
        </div>
        <button className="bg-[#0f172a] hover:bg-black text-white font-bold py-2.5 px-5 rounded-xl text-[13px] transition-colors flex items-center gap-2 shadow-md">
          <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
          Invite User
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
        {[
          { label: "Total Parents", value: "3,842", change: "+124 this month", icon: "👨‍👩‍👧", bg: "bg-blue-50 text-blue-600", pos: true },
          { label: "Premium Members", value: "1,290", change: "+48 this month", icon: "⭐", bg: "bg-purple-50 text-purple-600", pos: true },
          { label: "Free Members", value: "2,552", change: "+76 this month", icon: "🆓", bg: "bg-gray-50 text-gray-600", pos: true },
          { label: "Avg Children", value: "1.8", change: "per account", icon: "👶", bg: "bg-pink-50 text-pink-600", pos: true },
        ].map((s, i) => (
          <div key={i} className="bg-white rounded-[16px] p-4 md:p-5 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] flex items-center gap-4">
            <div className={`w-11 h-11 rounded-[14px] flex items-center justify-center text-xl ${s.bg}`}>{s.icon}</div>
            <div>
              <div className="text-[11px] font-bold text-gray-500">{s.label}</div>
              <div className="text-[20px] font-black text-[#0B2046] leading-none my-0.5">{s.value}</div>
              <div className="text-[10px] text-green-600 font-bold">{s.change}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-[16px] md:rounded-[24px] shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] overflow-hidden">
        <div className="p-4 md:p-5 border-b border-gray-100 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
          <div className="relative flex-1 max-w-[320px]">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input type="text" placeholder="Search users..." className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-xl text-[13px] bg-white focus:outline-none focus:border-blue-400 font-medium" />
          </div>
          <div className="flex items-center gap-2">
            <select className="px-3 py-2 border border-gray-200 rounded-xl text-[12px] font-bold text-gray-600 bg-white focus:outline-none">
              <option>All Plans</option>
              <option>Premium</option>
              <option>Free</option>
            </select>
            <select className="px-3 py-2 border border-gray-200 rounded-xl text-[12px] font-bold text-gray-600 bg-white focus:outline-none">
              <option>All Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[800px]">
            <thead className="border-b border-gray-100 bg-gray-50/50">
              <tr>
                <th className="py-4 pl-5 pr-2 w-10"><input type="checkbox" className="w-4 h-4 rounded border-gray-300 cursor-pointer" /></th>
                <th className="py-4 px-2 text-[11px] font-bold text-gray-500 uppercase tracking-wider">User</th>
                <th className="py-4 px-2 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">Plan</th>
                <th className="py-4 px-2 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">Children</th>
                <th className="py-4 px-2 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Joined</th>
                <th className="py-4 px-2 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Last Active</th>
                <th className="py-4 px-2 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">Status</th>
                <th className="py-4 pr-5 pl-2 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {users.map((user, idx) => (
                <tr key={idx} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="py-3 pl-5 pr-2"><input type="checkbox" className="w-4 h-4 rounded border-gray-300 cursor-pointer" /></td>
                  <td className="py-3 px-2">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-full ${user.avatarBg} text-white flex items-center justify-center text-[12px] font-bold shrink-0`}>{user.avatar}</div>
                      <div>
                        <div className="font-bold text-[#0B2046] text-[13px]">{user.name}</div>
                        <div className="text-gray-400 text-[11px]">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-2 text-center">
                    <span className={`inline-block px-2.5 py-1 rounded-lg text-[11px] font-bold ${user.planBg}`}>{user.plan}</span>
                  </td>
                  <td className="py-3 px-2 text-center text-[13px] font-bold text-gray-600">{user.children}</td>
                  <td className="py-3 px-2 text-[12px] font-medium text-gray-500">{user.joined}</td>
                  <td className="py-3 px-2 text-[12px] font-medium text-gray-500">{user.lastActive}</td>
                  <td className="py-3 px-2 text-center">
                    <div className="flex items-center justify-center gap-1.5">
                      <div className={`w-1.5 h-1.5 rounded-full ${user.status === "Active" ? "bg-green-500" : "bg-gray-400"}`}></div>
                      <span className={`text-[12px] font-bold ${user.status === "Active" ? "text-green-600" : "text-gray-500"}`}>{user.status}</span>
                    </div>
                  </td>
                  <td className="py-3 pr-5 pl-2 text-right">
                    <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1.5 text-gray-400 hover:text-blue-600 bg-gray-50 hover:bg-blue-50 rounded-lg transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                      </button>
                      <button className="p-1.5 text-gray-400 hover:text-amber-500 bg-gray-50 hover:bg-amber-50 rounded-lg transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                      </button>
                      <button className="p-1.5 text-gray-400 hover:text-red-500 bg-gray-50 hover:bg-red-50 rounded-lg transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M5 10a2 2 0 110 4 2 2 0 010-4zm7 0a2 2 0 110 4 2 2 0 010-4zm7 0a2 2 0 110 4 2 2 0 010-4z" /></svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 border-t border-gray-100 flex items-center justify-between">
          <div className="text-[12px] font-medium text-gray-500">Showing <span className="font-bold text-gray-700">1-8</span> of <span className="font-bold text-gray-700">3,842</span> users</div>
          <div className="flex items-center gap-1">
            <button className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg></button>
            <button className="w-8 h-8 rounded-lg bg-blue-600 text-white font-bold text-[13px] flex items-center justify-center shadow-sm">1</button>
            <button className="w-8 h-8 rounded-lg text-gray-600 font-bold text-[13px] hover:bg-gray-50 flex items-center justify-center">2</button>
            <button className="w-8 h-8 rounded-lg text-gray-600 font-bold text-[13px] hover:bg-gray-50 flex items-center justify-center">3</button>
            <span className="w-8 h-8 text-gray-400 flex items-center justify-center">...</span>
            <button className="w-8 h-8 rounded-lg text-gray-600 font-bold text-[13px] hover:bg-gray-50 flex items-center justify-center">385</button>
            <button className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></button>
          </div>
        </div>
      </div>
    </div>
  );
}
