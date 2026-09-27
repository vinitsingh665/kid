export default function PerformanceChart() {
  return (
    <div className="bg-white rounded-[16px] md:rounded-[24px] p-4 md:p-5 border-none shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] flex flex-col h-full">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 md:mb-5 gap-3">
        <div>
          <h3 className="text-[16px] font-bold text-[#0B2046]">Content Performance</h3>
          <p className="text-gray-500 text-[11px] md:text-[13px]">Views and downloads over the last 30 days</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
            <span className="text-[12px] font-bold text-gray-600">Views</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-purple-500"></div>
            <span className="text-[12px] font-bold text-gray-600">Downloads</span>
          </div>
          <div className="flex items-center gap-1 border border-gray-200 rounded-lg px-3 py-1.5 ml-2 cursor-pointer">
            <span className="text-[12px] font-bold text-gray-600">Last 30 days</span>
            <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* SVG Chart Placeholder */}
      <div className="flex-1 min-h-[220px] relative w-full flex">
        {/* Y-axis labels */}
        <div className="flex flex-col justify-between h-full text-[11px] font-semibold text-gray-400 pr-4 pb-6">
          <span>2K</span>
          <span>1.5K</span>
          <span>1K</span>
          <span>500</span>
          <span>0</span>
        </div>

        <div className="flex-1 relative h-full">
          {/* Horizontal Grid lines */}
          <div className="absolute inset-0 flex flex-col justify-between pb-6">
            <div className="w-full h-px bg-gray-100"></div>
            <div className="w-full h-px bg-gray-100"></div>
            <div className="w-full h-px bg-gray-100"></div>
            <div className="w-full h-px bg-gray-100"></div>
            <div className="w-full h-px bg-gray-200"></div>
          </div>

          {/* SVG Lines */}
          <div className="absolute inset-0 pb-6 overflow-hidden">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 200">
              <defs>
                <linearGradient id="viewsGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="dlGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#a855f7" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                </linearGradient>
              </defs>
              
              {/* Downloads area & line */}
              <path d="M0,170 C40,170 60,160 100,160 C140,160 160,140 200,140 C240,140 260,155 300,155 C340,155 360,120 400,120 C440,120 460,140 500,140 C540,140 560,110 600,110 C640,110 660,140 700,140 C740,140 760,90 800,90 C840,90 860,130 900,130 C940,130 960,145 1000,145 L1000,200 L0,200 Z" fill="url(#dlGrad)" />
              <path d="M0,170 C40,170 60,160 100,160 C140,160 160,140 200,140 C240,140 260,155 300,155 C340,155 360,120 400,120 C440,120 460,140 500,140 C540,140 560,110 600,110 C640,110 660,140 700,140 C740,140 760,90 800,90 C840,90 860,130 900,130 C940,130 960,145 1000,145" fill="none" stroke="#a855f7" strokeWidth="2" vectorEffect="non-scaling-stroke" />
              
              {/* Views area & line */}
              <path d="M0,130 C40,130 60,110 100,110 C140,110 160,70 200,70 C240,70 260,95 300,95 C340,95 360,50 400,50 C440,50 460,80 500,80 C540,80 560,30 600,30 C640,30 660,80 700,80 C740,80 760,20 800,20 C840,20 860,60 900,60 C940,60 960,80 1000,80 L1000,200 L0,200 Z" fill="url(#viewsGrad)" />
              <path d="M0,130 C40,130 60,110 100,110 C140,110 160,70 200,70 C240,70 260,95 300,95 C340,95 360,50 400,50 C440,50 460,80 500,80 C540,80 560,30 600,30 C640,30 660,80 700,80 C740,80 760,20 800,20 C840,20 860,60 900,60 C940,60 960,80 1000,80" fill="none" stroke="#3b82f6" strokeWidth="2" vectorEffect="non-scaling-stroke" />

              {/* Data points for Views */}
              <circle cx="100" cy="110" r="3.5" fill="white" stroke="#3b82f6" strokeWidth="2" vectorEffect="non-scaling-stroke" />
              <circle cx="200" cy="70" r="3.5" fill="white" stroke="#3b82f6" strokeWidth="2" vectorEffect="non-scaling-stroke" />
              <circle cx="300" cy="95" r="3.5" fill="white" stroke="#3b82f6" strokeWidth="2" vectorEffect="non-scaling-stroke" />
              <circle cx="400" cy="50" r="3.5" fill="white" stroke="#3b82f6" strokeWidth="2" vectorEffect="non-scaling-stroke" />
              <circle cx="500" cy="80" r="3.5" fill="white" stroke="#3b82f6" strokeWidth="2" vectorEffect="non-scaling-stroke" />
              <circle cx="600" cy="30" r="3.5" fill="white" stroke="#3b82f6" strokeWidth="2" vectorEffect="non-scaling-stroke" />
              <circle cx="700" cy="80" r="3.5" fill="white" stroke="#3b82f6" strokeWidth="2" vectorEffect="non-scaling-stroke" />
              <circle cx="800" cy="20" r="3.5" fill="white" stroke="#3b82f6" strokeWidth="2" vectorEffect="non-scaling-stroke" />
              <circle cx="900" cy="60" r="3.5" fill="white" stroke="#3b82f6" strokeWidth="2" vectorEffect="non-scaling-stroke" />
              
            </svg>
          </div>

          {/* X-axis labels */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[11px] font-semibold text-gray-400 transform translate-y-1">
            <span>Sep 1</span>
            <span>Sep 4</span>
            <span>Sep 7</span>
            <span>Sep 10</span>
            <span>Sep 13</span>
            <span>Sep 16</span>
            <span>Sep 19</span>
            <span>Sep 22</span>
            <span>Sep 25</span>
            <span>Sep 28</span>
            <span>Sep 30</span>
          </div>
        </div>
      </div>
    </div>
  );
}
