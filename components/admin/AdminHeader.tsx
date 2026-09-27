import Link from "next/link";

export default function AdminHeader({ onMenuClick }: { onMenuClick?: () => void }) {
  return (
    <header className="h-[64px] md:h-[72px] bg-white md:bg-transparent flex items-center justify-between px-4 md:px-8 sticky top-0 z-40 border-b border-gray-100 md:border-none">
      {/* Mobile Left Actions */}
      <div className="flex md:hidden items-center gap-3">
        <button onClick={onMenuClick} className="p-2 -ml-2 text-gray-700">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <Link href="/" className="flex items-center gap-1.5">
          <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="22" r="13" fill="#FF6B35" />
            <path d="M12.5 12C12.5 15.0376 15.8579 17.5 20 17.5C24.1421 17.5 27.5 15.0376 27.5 12C27.5 8.96243 24.1421 6.5 20 6.5C15.8579 6.5 12.5 8.96243 12.5 12Z" fill="#FF6B35" />
            <circle cx="16" cy="19" r="2.5" fill="white" />
            <circle cx="24" cy="19" r="2.5" fill="white" />
            <circle cx="16" cy="19" r="1" fill="#1e293b" />
            <circle cx="24" cy="19" r="1" fill="#1e293b" />
            <path d="M18 24C18.5 25 21.5 25 22 24" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M11 10C9 8 5 9 6 13C6.5 15 9.5 13.5 11 13" fill="#FF6B35" />
            <path d="M29 10C31 8 35 9 34 13C33.5 15 30.5 13.5 29 13" fill="#FF6B35" />
          </svg>
          <span className="font-black text-xl tracking-tight text-[#FF6B35]">Kid<span className="text-[#FFC837]">zoo</span></span>
        </Link>
      </div>
      {/* Search Bar (Desktop) */}
      <div className="hidden md:block relative w-full max-w-[480px]">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-16 py-2.5 border border-gray-200/60 rounded-full leading-5 bg-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 text-[13px] shadow-sm transition-colors"
          placeholder="Search content, categories, users..."
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <span className="text-gray-400 text-[10px] font-bold bg-gray-50 border border-gray-200 px-2 py-1 rounded-md">
            Ctrl K
          </span>
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-3 md:gap-5">
        {/* Mobile Search Button */}
        <button className="md:hidden p-2 text-gray-700 bg-gray-50 rounded-full">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>

        {/* Date Selector (Desktop only) */}
        <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-white border border-gray-200/60 rounded-full cursor-pointer hover:bg-gray-50 transition-colors shadow-sm">
          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-[13px] font-bold text-gray-700">Sep 1, 2025 - Sep 30, 2025</span>
          <svg className="w-4 h-4 text-gray-400 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        <div className="w-px h-6 bg-gray-200"></div>

        {/* Notifications */}
        <button className="relative p-2 text-gray-500 hover:text-gray-700 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className="absolute top-1.5 right-1.5 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
        </button>

        {/* Profile Avatar */}
        <button className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-[#1e293b] text-white flex items-center justify-center font-bold text-xs shadow-sm ring-2 ring-white cursor-pointer hover:ring-gray-100 transition-all">
            A
          </div>
        </button>
      </div>
    </header>
  );
}
