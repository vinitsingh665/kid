export default function ExperimentsNewsletter() {
  return (
    <div className="w-full flex flex-col gap-6">
      {/* How it Works Banner */}
      <div
        className="w-full bg-purple-50 rounded-[32px] p-6 sm:p-8 flex flex-col lg:flex-row items-center gap-8 shadow-sm border border-purple-100"
      >
        <div className="flex items-center gap-4 shrink-0 lg:w-1/4">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-2xl flex items-center justify-center text-2xl sm:text-4xl shadow-sm rotate-[-5deg]">
            📋
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-[#0B2046] leading-tight">
              How it Works?
            </h2>
            <p className="text-gray-600 text-sm">
              Follow these simple steps to start experimenting!
            </p>
          </div>
        </div>

        <div className="flex-1 flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-between gap-4 w-full">
          <div className="flex flex-col items-center text-center max-w-[120px]">
            <div className="text-3xl mb-2 bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-sm">🧪</div>
            <p className="text-xs font-bold text-gray-700 leading-tight">1. Choose an<br/>Experiment</p>
          </div>
          <div className="hidden lg:block text-purple-200">→</div>
          <div className="flex flex-col items-center text-center max-w-[120px]">
            <div className="text-3xl mb-2 bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-sm">📖</div>
            <p className="text-xs font-bold text-gray-700 leading-tight">2. Read the<br/>Instructions</p>
          </div>
          <div className="hidden lg:block text-purple-200">→</div>
          <div className="flex flex-col items-center text-center max-w-[120px]">
            <div className="text-3xl mb-2 bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-sm">🧺</div>
            <p className="text-xs font-bold text-gray-700 leading-tight">3. Gather<br/>Materials</p>
          </div>
          <div className="hidden lg:block text-purple-200">→</div>
          <div className="flex flex-col items-center text-center max-w-[120px]">
            <div className="text-3xl mb-2 bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-sm">⚙️</div>
            <p className="text-xs font-bold text-gray-700 leading-tight">4. Follow<br/>Step-by-Step</p>
          </div>
          <div className="hidden lg:block text-purple-200">→</div>
          <div className="flex flex-col items-center text-center max-w-[120px]">
            <div className="text-3xl mb-2 bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-sm">🌟</div>
            <p className="text-xs font-bold text-gray-700 leading-tight">5. Have Fun<br/>and Learn!</p>
          </div>
        </div>
      </div>

      {/* Safety First Banner */}
      <div className="w-full bg-[#E8F5E9] rounded-[32px] p-6 flex flex-col sm:flex-row items-center gap-6 shadow-sm border border-green-200">
        <div className="w-16 h-16 shrink-0 bg-white rounded-full flex items-center justify-center text-3xl shadow-sm">
          🛡️
        </div>
        <div className="flex-1 text-center sm:text-left">
          <h2 className="text-xl font-black text-green-900 mb-1">Safety First!</h2>
          <p className="text-green-800 text-sm font-medium">
            All experiments are carefully selected and reviewed for safety. Always perform experiments under adult supervision.
          </p>
        </div>
        <div className="shrink-0 hidden md:block">
          <div className="text-5xl">🥽</div>
        </div>
      </div>
    </div>
  );
}
