export default function LearnNewsletter() {
  return (
    <div className="mt-12 mb-4 w-full">
      {/* Keep Learning Banner */}
      <section className="w-full bg-gradient-to-r from-purple-50 to-indigo-50 rounded-[32px] p-6 sm:p-8 flex flex-col lg:flex-row items-center gap-8 shadow-sm border border-purple-100">
        <div className="flex items-center gap-4 shrink-0 lg:w-1/3">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center text-2xl sm:text-4xl shadow-sm">
            🏆
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-[#0B2046] leading-tight mb-1">
              Keep Learning,<br className="hidden lg:block"/> Keep Growing!
            </h2>
            <p className="text-gray-600 text-sm">
              Complete lessons, take quizzes and earn rewards.
            </p>
          </div>
        </div>

        <div className="flex-1 flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-between gap-4 w-full">
          <div className="flex flex-col items-center text-center max-w-[100px]">
            <div className="text-3xl mb-2 bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-sm text-yellow-500">⭐</div>
            <p className="text-[11px] font-bold text-gray-700 leading-tight">Learn</p>
          </div>
          <div className="hidden lg:block text-purple-200">→</div>
          <div className="flex flex-col items-center text-center max-w-[100px]">
            <div className="text-3xl mb-2 bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-sm text-green-500">✅</div>
            <p className="text-[11px] font-bold text-gray-700 leading-tight">Complete</p>
          </div>
          <div className="hidden lg:block text-purple-200">→</div>
          <div className="flex flex-col items-center text-center max-w-[100px]">
            <div className="text-3xl mb-2 bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-sm text-blue-500">🏅</div>
            <p className="text-[11px] font-bold text-gray-700 leading-tight">Earn Badges</p>
          </div>
          <div className="hidden lg:block text-purple-200">→</div>
          <div className="flex flex-col items-center text-center max-w-[100px] opacity-50">
            <div className="text-2xl mb-2 bg-white/50 border border-purple-200 w-12 h-12 rounded-full flex items-center justify-center text-gray-400">🔒</div>
            <p className="text-[11px] font-bold text-gray-500 leading-tight">Unlock More</p>
          </div>
        </div>
      </section>
    </div>
  );
}
