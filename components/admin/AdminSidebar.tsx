"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminSidebar({ isOpen = false, setIsOpen }: { isOpen?: boolean, setIsOpen?: (v: boolean) => void }) {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", href: "/admin", icon: "🏠" },
    { name: "Content", href: "/admin/content", icon: "📄", hasSubmenu: true },
    { name: "Games", href: "/admin/games", icon: "🎮" },
    { name: "Printables", href: "/admin/printables", icon: "🖨️" },
    { name: "Learning", href: "/admin/learning", icon: "📖" },
    { name: "Activities", href: "/admin/activities", icon: "💡" },
    { name: "Stories", href: "/admin/stories", icon: "📚" },
    { name: "Experiments", href: "/admin/experiments", icon: "🧪" },
  ];

  const manageItems = [
    { name: "Categories", href: "/admin/content/categories", icon: "🗂️" },
    { name: "Media Library", href: "/admin/media-library", icon: "🖼️" },
    { name: "Users / Parents", href: "/admin/users", icon: "👥" },
    { name: "Analytics", href: "/admin/analytics", icon: "📊" },
    { name: "Settings", href: "/admin/settings", icon: "⚙️" },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-[#0B2046]/20 backdrop-blur-sm z-40 md:hidden transition-opacity"
          onClick={() => setIsOpen?.(false)}
        />
      )}
      <aside className={`w-[240px] h-screen bg-white border-r border-gray-100 shadow-[4px_0_24px_rgba(0,0,0,0.02)] flex flex-col fixed left-0 top-0 overflow-y-auto no-scrollbar z-50 transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}>
        {/* Logo */}
      <div className="p-6 sticky top-0 bg-white z-10 flex items-center justify-center">
        <Link href="/" className="flex items-center gap-1.5">
          <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="22" r="13" fill="#FF6B35" />
            <ellipse cx="10" cy="13" rx="5" ry="6" fill="#FF6B35" />
            <ellipse cx="30" cy="13" rx="5" ry="6" fill="#FF6B35" />
            <ellipse cx="10" cy="13" rx="3" ry="4" fill="#FFB89A" />
            <ellipse cx="30" cy="13" rx="3" ry="4" fill="#FFB89A" />
            <ellipse cx="20" cy="24" rx="9" ry="7" fill="#FFB89A" />
            <circle cx="16" cy="20" r="2.2" fill="#1a1a2e" />
            <circle cx="24" cy="20" r="2.2" fill="#1a1a2e" />
            <circle cx="16.8" cy="19.2" r="0.8" fill="white" />
            <circle cx="24.8" cy="19.2" r="0.8" fill="white" />
            <ellipse cx="20" cy="24" rx="2" ry="1.3" fill="#c0392b" />
          </svg>
          <span className="text-2xl font-black tracking-tight leading-none">
            <span className="text-[#FF6B35]">Kid</span>
            <span className="text-[#4ECDC4]">z</span>
            <span className="text-[#A855F7]">oo</span>
          </span>
        </Link>
      </div>

      {/* Main Nav */}
      <div className="px-4 flex-1">
        <ul className="space-y-1 mb-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href));
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-[13px] font-bold transition-colors ${
                    isActive
                      ? "bg-[#F4F7FE] text-blue-600"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-[16px] ${isActive ? "text-blue-600" : ""}`}>{item.icon}</span>
                    {item.name}
                  </div>
                  {item.hasSubmenu && (
                    <svg className={`w-3.5 h-3.5 ${isActive ? "text-blue-600" : "text-gray-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={isActive ? "M5 15l7-7 7 7" : "M9 5l7 7-7 7"} />
                    </svg>
                  )}
                </Link>
                {isActive && item.name === "Content" && (
                  <ul className="mt-1 mb-2 ml-11 space-y-1 relative before:absolute before:left-[-15px] before:top-2 before:bottom-2 before:w-px before:bg-gray-200">
                    <li>
                      <Link href="/admin/content" className="block py-1.5 px-3 text-[12px] font-bold text-blue-600 bg-blue-50/50 rounded-lg relative before:absolute before:left-[-15px] before:top-1/2 before:w-2.5 before:h-px before:bg-blue-300">
                        All Content
                      </Link>
                    </li>
                    <li>
                      <Link href="/admin/content/add-new" className="block py-1.5 px-3 text-[12px] font-medium text-gray-500 hover:text-gray-900 transition-colors">
                        Add New
                      </Link>
                    </li>
                    <li>
                      <Link href="/admin/content/categories" className="block py-1.5 px-3 text-[12px] font-medium text-gray-500 hover:text-gray-900 transition-colors">
                        Categories
                      </Link>
                    </li>
                    <li>
                      <Link href="/admin/content/tags" className="block py-1.5 px-3 text-[12px] font-medium text-gray-500 hover:text-gray-900 transition-colors">
                        Tags
                      </Link>
                    </li>
                    <li>
                      <Link href="/admin/content/trashed" className="block py-1.5 px-3 text-[12px] font-medium text-gray-500 hover:text-gray-900 transition-colors">
                        Trashed
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            );
          })}
        </ul>

        {/* Divider */}
        <div className="h-px bg-gray-200 mx-4 mb-6"></div>

        {/* Secondary Nav */}
        <ul className="space-y-1 mb-8">
          {manageItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href);
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-[13px] font-bold transition-colors ${isActive ? "bg-[#F4F7FE] text-blue-600" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`}
                >
                  <span className="text-[16px]">{item.icon}</span>
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Bottom Actions */}
      <div className="p-4 mt-auto">
        <Link
          href="#"
          className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-[13px] font-bold text-gray-600 hover:bg-gray-50 transition-colors mb-4"
        >
          <span className="text-[16px] font-black text-red-500">?</span>
          Help & Support
        </Link>
        
        {/* User Profile */}
        <div className="flex items-center justify-between px-4 py-3 bg-white rounded-2xl border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] cursor-pointer hover:border-gray-200 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#1a202c] text-white flex items-center justify-center font-bold text-xs relative">
              A
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-white rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
            </div>
            <div>
              <div className="text-[13px] font-bold text-[#0B2046] leading-none mb-1">Admin</div>
              <div className="text-[11px] font-semibold text-gray-400 leading-none">Super Admin</div>
            </div>
          </div>
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          </svg>
        </div>
      </div>
      {/* Close Button on Mobile */}
      {isOpen && (
        <button 
          onClick={() => setIsOpen?.(false)}
          className="md:hidden absolute top-6 right-4 p-2 text-gray-400 hover:text-gray-600 bg-gray-50 rounded-full"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </aside>
    </>
  );
}
