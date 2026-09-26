export default function ExploreNewsletter() {
  return (
    <div className="w-full bg-[#fcf5ff] rounded-[32px] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm border border-purple-100">
      <div className="flex items-center gap-4 sm:gap-6 w-full md:w-auto">
        <div className="text-5xl sm:text-6xl shrink-0 drop-shadow-sm">
          🧰
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-[#2e1065] leading-tight mb-1">
            Discover Something New Every Day!
          </h2>
          <p className="text-purple-900/70 text-xs sm:text-sm font-medium">
            Games, stories, activities, experiments and more — all in one magical place.
          </p>
        </div>
      </div>
      <button className="w-full md:w-auto bg-[#0B2046] hover:bg-blue-900 text-white font-bold py-3 px-8 rounded-xl shadow-md transition-colors shrink-0 text-sm">
        Explore Now →
      </button>
    </div>
  );
}
