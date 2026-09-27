import StatCards from "@/components/admin/StatCards";
import PerformanceChart from "@/components/admin/PerformanceChart";
import QuickCreate from "@/components/admin/QuickCreate";
import RecentContent from "@/components/admin/RecentContent";
import CategoryChart from "@/components/admin/CategoryChart";
import TopContent from "@/components/admin/TopContent";
import RecentActivity from "@/components/admin/RecentActivity";

export default function AdminDashboard() {
  return (
    <div className="max-w-[1500px] mx-auto pb-8">
      {/* Header section */}
      <div className="flex items-start justify-between mb-5 gap-4 pt-1">
        <div>
          <h1 className="text-[20px] md:text-2xl font-black text-[#0B2046] mb-1 flex items-center gap-1.5 md:gap-2">
            Good evening, Admin <span className="text-xl md:text-2xl">👋</span>
          </h1>
          <p className="text-gray-500 text-[11px] md:text-[13px]">Here's what's happening across Kidzoo today.</p>
        </div>
        
        {/* Date Selector for Mobile */}
        <div className="md:hidden flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200/60 rounded-xl shadow-sm shrink-0">
          <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-[11px] font-bold text-gray-700">Sep 1 - Sep 30, 2025</span>
          <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        <button className="hidden md:flex bg-[#0f172a] hover:bg-black text-white font-bold py-2.5 px-5 rounded-xl text-sm transition-colors items-center gap-2 shadow-md">
          <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Create Content
          <div className="w-px h-4 bg-white/20 mx-1"></div>
          <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Top Stats */}
      <div className="mb-5">
        <StatCards />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
        <div className="lg:col-span-2">
          <PerformanceChart />
        </div>
        <div className="lg:col-span-1">
          <QuickCreate />
        </div>
      </div>

      {/* Content Row */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mb-5">
        <div className="xl:col-span-2 flex flex-col gap-5">
          <RecentContent />
          <RecentActivity />
        </div>
        <div className="xl:col-span-1 flex flex-col gap-5">
          <CategoryChart />
          <TopContent />
        </div>
      </div>
    </div>
  );
}
