const games = [
  { id: 1, title: "Dinosaur Quiz", desc: "Test your dino knowledge with fun questions!", age: "6-12", tag: "GK", tagColor: "bg-blue-100 text-blue-700", emoji: "🦖", bg: "from-green-200 to-emerald-400" },
  { id: 2, title: "Math Adventure", desc: "Solve math problems to unlock new worlds!", age: "6-10", tag: "Math", tagColor: "bg-indigo-100 text-indigo-700", emoji: "➕", bg: "from-blue-200 to-cyan-400" },
  { id: 3, title: "Memory Match", desc: "Flip and match the cards!", age: "3-8", tag: "Memory", tagColor: "bg-purple-100 text-purple-700", emoji: "🧠", bg: "from-purple-200 to-fuchsia-400" },
  { id: 4, title: "Space Explorer", desc: "Explore the solar system and learn fun facts!", age: "6-12", tag: "Science", tagColor: "bg-blue-100 text-blue-700", emoji: "🚀", bg: "from-slate-800 to-indigo-900" },
  { id: 5, title: "Coloring Fun", desc: "Color your favorite animals, cartoons and more!", age: "3-8", tag: "Creativity", tagColor: "bg-pink-100 text-pink-700", emoji: "🖍️", bg: "from-pink-200 to-rose-400" },
  { id: 6, title: "Word Builder", desc: "Make words and improve your vocabulary!", age: "6-10", tag: "English", tagColor: "bg-blue-100 text-blue-700", emoji: "🔤", bg: "from-orange-200 to-amber-400" },
  { id: 7, title: "Animal Puzzle", desc: "Complete the puzzle and meet the animals!", age: "3-8", tag: "Puzzle", tagColor: "bg-indigo-100 text-indigo-700", emoji: "🧩", bg: "from-teal-200 to-emerald-400" },
  { id: 8, title: "Car Racing", desc: "A fun racing game for little speedsters!", age: "4-10", tag: "Action", tagColor: "bg-blue-100 text-blue-700", emoji: "🏎️", bg: "from-red-200 to-orange-500" },
  { id: 9, title: "Number Ninja", desc: "Solve numbers and become a number ninja!", age: "6-10", tag: "Math", tagColor: "bg-indigo-100 text-indigo-700", emoji: "🥷", bg: "from-gray-200 to-slate-400" },
  { id: 10, title: "Maze Challenge", desc: "Find your way through exciting mazes!", age: "4-10", tag: "Puzzle", tagColor: "bg-indigo-100 text-indigo-700", emoji: "🌀", bg: "from-green-200 to-lime-400" },
  { id: 11, title: "Spot the Difference", desc: "Can you find all the differences?", age: "4-10", tag: "Observation", tagColor: "bg-blue-100 text-blue-700", emoji: "🔍", bg: "from-yellow-200 to-amber-400" },
  { id: 12, title: "Jungle Adventure", desc: "Collect fruits and learn about animals!", age: "4-8", tag: "Adventure", tagColor: "bg-blue-100 text-blue-700", emoji: "🐒", bg: "from-green-400 to-emerald-600" },
];

export default function GamesGrid() {
  return (
    <div className="flex-1">
      {/* Grid Header */}
      <div className="flex flex-col mb-4 sm:mb-6 gap-2 sm:gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-blue-100 flex items-center justify-center text-xl sm:text-2xl shrink-0">
              🎮
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 leading-tight">All Games</h2>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <label className="text-sm text-gray-500 hidden sm:block">Sort by</label>
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-200 rounded-lg pl-3 pr-8 py-1.5 text-xs sm:text-sm font-medium text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer w-[120px] sm:w-[130px]">
                <option>Popular</option>
                <option>Newest</option>
                <option>A-Z</option>
              </select>
              <svg className="w-4 h-4 text-gray-500 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
        <p className="text-gray-500 text-xs sm:text-sm ml-10 sm:ml-13">Discover our collection of fun and educational games.</p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
        {games.map((game) => (
          <div key={game.id} className="bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group flex flex-col h-full">
            {/* Image Placeholder */}
            <div className={`w-full aspect-[4/3] rounded-lg sm:rounded-xl mb-3 sm:mb-4 bg-gradient-to-br ${game.bg} flex items-center justify-center overflow-hidden relative`}>
               <span className="text-4xl sm:text-6xl transform group-hover:scale-110 transition-transform duration-300">{game.emoji}</span>
               {/* Optional gloss overlay */}
               <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20 pointer-events-none" />
            </div>

            <div className="flex flex-col flex-1">
              <h3 className="font-bold text-gray-900 text-[13px] sm:text-lg mb-0.5 sm:mb-1 leading-tight">{game.title}</h3>
              <p className="text-gray-500 text-[10px] sm:text-xs mb-2 sm:mb-4 line-clamp-2 leading-snug">{game.desc}</p>
              
              <div className="flex flex-wrap items-center gap-1 sm:gap-2 mb-3 sm:mb-4 mt-auto">
                <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-amber-100 text-amber-700 text-[9px] sm:text-[10px] font-bold rounded-full whitespace-nowrap">
                  {game.age}
                </span>
                <span className={`px-2 sm:px-2.5 py-0.5 sm:py-1 text-[9px] sm:text-[10px] font-bold rounded-full whitespace-nowrap ${game.tagColor}`}>
                  {game.tag}
                </span>
              </div>

              <button className="w-full btn-primary text-xs sm:text-sm py-2 sm:py-2.5 flex items-center justify-center gap-1.5 sm:gap-2 group-hover:bg-gray-800 transition-colors">
                <span className="hidden sm:inline">Play Now</span>
                <span className="sm:hidden">Play</span>
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 mt-12">
        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white font-medium text-sm">1</button>
        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 font-medium text-sm hover:bg-gray-50">2</button>
        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 font-medium text-sm hover:bg-gray-50">3</button>
        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 font-medium text-sm hover:bg-gray-50">4</button>
        <span className="text-gray-400">...</span>
        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 font-medium text-sm hover:bg-gray-50">12</button>
        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </div>
  );
}
