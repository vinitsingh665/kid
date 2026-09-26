import Link from "next/link";

export default function StoriesContent() {
  const featuredStories = [
    { title: "The Kind Little Elephant", desc: "A heartwarming story about kindness, friendship and helping others.", age: "4-8", time: "5 min", tag: "Moral", emoji: "🐘", bg: "from-blue-100 to-indigo-100 text-indigo-500", tagBg: "bg-purple-100 text-purple-700" },
    { title: "The Brave Little Explorer", desc: "Join a young explorer on an exciting journey to the hidden mountain.", age: "6-10", time: "8 min", tag: "Adventure", emoji: "🧗", bg: "from-red-100 to-orange-100 text-orange-500", tagBg: "bg-blue-100 text-blue-700" },
    { title: "The Little Star's Dream", desc: "A beautiful story about believing in yourself and shining bright.", age: "3-7", time: "6 min", tag: "Inspirational", emoji: "🌟", bg: "from-amber-100 to-yellow-100 text-yellow-500", tagBg: "bg-indigo-100 text-indigo-700" },
    { title: "The Lion and the Mouse", desc: "A classic tale that teaches us that even the smallest friend can make a big difference.", age: "3-6", time: "5 min", tag: "Classic", emoji: "🦁", bg: "from-orange-100 to-amber-100 text-orange-500", tagBg: "bg-purple-100 text-purple-700" },
  ];

  const genres = [
    { title: "Bedtime Stories", desc: "Calm and relaxing", emoji: "🌙", bg: "from-blue-50 to-indigo-50" },
    { title: "Moral Stories", desc: "Values and life lessons", emoji: "🦊", bg: "from-orange-50 to-amber-50" },
    { title: "Adventure Stories", desc: "Exciting journeys", emoji: "🗺️", bg: "from-green-50 to-emerald-50" },
    { title: "Animal Stories", desc: "Fun animal characters", emoji: "🐼", bg: "from-emerald-50 to-teal-50" },
    { title: "Fairy Tales", desc: "Magical worlds", emoji: "🏰", bg: "from-pink-50 to-rose-50" },
    { title: "Mythology Stories", desc: "Indian epics and gods", emoji: "🏹", bg: "from-amber-50 to-orange-50" },
    { title: "Funny Stories", desc: "Laugh and have fun", emoji: "🐒", bg: "from-sky-50 to-blue-50" },
    { title: "Festival Stories", desc: "Diwali, Holi and more", emoji: "🎆", bg: "from-purple-50 to-fuchsia-50" },
    { title: "Real Life Stories", desc: "Everyday heroes", emoji: "👮", bg: "from-gray-50 to-slate-50" },
    { title: "Educational Stories", desc: "Learn while you read", emoji: "🌍", bg: "from-teal-50 to-cyan-50" },
  ];

  const recentStories = [
    { title: "The Rainbow Butterfly", age: "3-5", time: "4 min", emoji: "🦋", bg: "from-sky-100 to-blue-100" },
    { title: "A Day at the Farm", age: "4-8", time: "6 min", emoji: "🐄", bg: "from-green-100 to-emerald-100" },
    { title: "The Clever Rabbit", age: "3-6", time: "5 min", emoji: "🐰", bg: "from-amber-100 to-orange-100" },
    { title: "The Magic Tree House", age: "6-10", time: "8 min", emoji: "🌳", bg: "from-indigo-100 to-blue-100" },
    { title: "The Lost Puppy", age: "4-8", time: "6 min", emoji: "🐶", bg: "from-orange-100 to-red-100" },
  ];

  return (
    <div className="flex-1 space-y-12 min-w-0">
      
      {/* Featured Stories */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="text-3xl sm:text-4xl">⭐</div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-[#0B2046] leading-tight">Featured Stories</h2>
              <p className="text-gray-500 text-xs sm:text-sm">Handpicked stories that kids love the most.</p>
            </div>
          </div>
          <Link href="#" className="hidden sm:flex items-center gap-1 text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors">
            View All
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>

        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory sm:snap-none" style={{ scrollbarWidth: "none" }}>
          {featuredStories.map((story, i) => (
            <div key={i} className="w-[85vw] md:w-auto shrink-0 md:shrink snap-center bg-white rounded-2xl p-3 sm:p-4 shadow-sm border border-gray-100 flex flex-col group hover:shadow-md transition-shadow cursor-pointer">
              <div className={`w-full aspect-[4/3] rounded-xl mb-4 bg-gradient-to-br ${story.bg} flex items-center justify-center overflow-hidden relative`}>
                 <span className="text-6xl transform group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">{story.emoji}</span>
              </div>
              <h3 className="font-bold text-[#0B2046] text-sm sm:text-base mb-1">{story.title}</h3>
              <p className="text-gray-500 text-[10px] sm:text-[11px] mb-4 line-clamp-2 leading-relaxed">{story.desc}</p>
              
              <div className="flex flex-wrap items-center gap-2 mt-auto mb-4">
                <span className="px-2.5 py-1 bg-amber-50 text-amber-600 border border-amber-100 text-[10px] font-bold rounded-full">{story.age}</span>
                <span className="px-2.5 py-1 bg-blue-50 text-blue-600 border border-blue-100 text-[10px] font-bold rounded-full">{story.time}</span>
                <span className={`px-2.5 py-1 text-[10px] font-bold rounded-full ${story.tagBg}`}>{story.tag}</span>
              </div>
              
              <button className="w-full bg-[#0B2046] text-white text-xs py-2.5 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-900 transition-colors font-bold mt-auto shadow-sm">
                Read Story
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Browse by Genre */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="text-3xl sm:text-4xl">📘</div>
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-[#0B2046] leading-tight">Browse by Genre</h2>
            <p className="text-gray-500 text-xs sm:text-sm">Explore stories by your child's favourite topics.</p>
          </div>
        </div>

        <div className="flex md:grid md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory sm:snap-none" style={{ scrollbarWidth: "none" }}>
          {genres.map((genre, i) => (
            <div key={i} className="w-[45vw] md:w-auto shrink-0 md:shrink snap-center bg-white rounded-2xl p-2.5 shadow-sm border border-gray-100 flex flex-col group hover:shadow-md transition-shadow cursor-pointer hover:-translate-y-1 transform duration-200">
              <div className={`w-full aspect-[16/9] rounded-xl mb-3 bg-gradient-to-br ${genre.bg} flex items-center justify-center overflow-hidden`}>
                 <span className="text-4xl transform group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">{genre.emoji}</span>
              </div>
              <h3 className="font-bold text-[#0B2046] text-xs sm:text-sm mb-0.5">{genre.title}</h3>
              <p className="text-gray-500 text-[9px] sm:text-[10px] line-clamp-1">{genre.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recently Added */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="text-3xl sm:text-4xl">🕒</div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-[#0B2046] leading-tight">Recently Added Stories</h2>
              <p className="text-gray-500 text-xs sm:text-sm">Fresh stories for your little readers.</p>
            </div>
          </div>
          <Link href="#" className="hidden sm:flex items-center gap-1 text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors">
            View All
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>

        <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory" style={{ scrollbarWidth: "none" }}>
          {recentStories.map((story, i) => (
            <div key={i} className="min-w-[160px] max-w-[160px] snap-center shrink-0 cursor-pointer group">
              <div className={`w-full aspect-video rounded-xl mb-3 bg-gradient-to-br ${story.bg} flex items-center justify-center overflow-hidden shadow-sm border border-gray-100 group-hover:shadow-md transition-shadow`}>
                 <span className="text-5xl transform group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">{story.emoji}</span>
              </div>
              <h3 className="font-bold text-[#0B2046] text-sm mb-1.5 leading-tight line-clamp-1">{story.title}</h3>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-amber-50 text-amber-600 text-[9px] font-bold rounded-full">{story.age}</span>
                <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[9px] font-bold rounded-full">{story.time}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
