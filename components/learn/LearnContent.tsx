export default function LearnContent() {
  return (
    <div className="flex-1 space-y-12 w-full min-w-0">
      
      {/* Featured Learning Topics */}
      <section>
        <div className="flex items-end justify-between mb-6 gap-4">
          <div className="flex items-center gap-3">
            <div className="text-3xl sm:text-4xl">⭐</div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-[#0B2046] leading-tight">Featured Learning Topics</h2>
              <p className="text-gray-500 text-xs sm:text-sm">Popular and carefully selected topics to kickstart your child's learning journey.</p>
            </div>
          </div>
          <button className="hidden sm:flex items-center gap-1 text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors shrink-0">
            View All
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {[
            { title: "Alphabet & Phonics", desc: "Learn letters, sounds and simple words with fun examples.", age: "3-6", lessons: "24 Lessons", tag: "English", tagBg: "bg-blue-100 text-blue-800", emoji: "🔤", bg: "from-blue-50 to-blue-100" },
            { title: "Numbers & Counting", desc: "Explore numbers, counting, addition and more.", age: "3-6", lessons: "28 Lessons", tag: "Math", tagBg: "bg-orange-100 text-orange-800", emoji: "🔢", bg: "from-orange-50 to-orange-100" },
            { title: "Animals Around the World", desc: "Discover amazing animals, their habitats and fun facts.", age: "4-8", lessons: "32 Lessons", tag: "Animals", tagBg: "bg-green-100 text-green-800", emoji: "🦁", bg: "from-green-50 to-green-100" },
            { title: "Space & Our Universe", desc: "Explore planets, stars and mysteries of space.", age: "6-12", lessons: "24 Lessons", tag: "Science", tagBg: "bg-indigo-100 text-indigo-800", emoji: "🚀", bg: "from-indigo-50 to-indigo-100" },
          ].map((topic, i) => (
            <div key={i} className="bg-white rounded-2xl p-2.5 sm:p-4 shadow-sm border border-gray-100 flex flex-col h-full group hover:shadow-md transition-shadow min-w-0">
              <div className={`w-full aspect-[4/3] rounded-xl mb-3 sm:mb-4 bg-gradient-to-br ${topic.bg} flex items-center justify-center overflow-hidden relative`}>
                <span className="text-4xl sm:text-6xl transform group-hover:scale-110 transition-transform duration-300">{topic.emoji}</span>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20 pointer-events-none" />
                <span className={`absolute bottom-2 left-2 px-2 sm:px-2.5 py-0.5 sm:py-1 text-[9px] sm:text-[10px] font-bold rounded-lg ${topic.tagBg}`}>
                  {topic.tag}
                </span>
              </div>
              <h3 className="font-bold text-[#0B2046] text-xs sm:text-base mb-1 leading-tight truncate sm:whitespace-normal">{topic.title}</h3>
              <p className="text-gray-500 text-[9px] sm:text-xs mb-3 sm:mb-4 line-clamp-2 leading-snug">{topic.desc}</p>
              
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4 mt-auto">
                <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-amber-100 text-amber-700 text-[9px] sm:text-[10px] font-bold rounded-full">{topic.age}</span>
                <span className="text-[9px] sm:text-[10px] font-bold text-gray-700">{topic.lessons}</span>
              </div>
              
              <button className="w-full bg-[#0B2046] text-white text-[10px] sm:text-sm py-2 sm:py-2.5 rounded-xl flex items-center justify-center gap-1.5 sm:gap-2 hover:bg-blue-600 transition-colors font-bold shrink-0">
                <span className="truncate">Start Learning</span>
                <svg className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Explore All Subjects */}
      <section>
        <div className="flex items-end justify-between mb-6 gap-4">
          <div className="flex items-center gap-3">
            <div className="text-3xl sm:text-4xl">🌍</div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-[#0B2046] leading-tight">Explore All Subjects</h2>
              <p className="text-gray-500 text-xs sm:text-sm">Choose a subject and start learning with interactive lessons, videos and quizzes.</p>
            </div>
          </div>
          <button className="hidden sm:flex items-center gap-1 text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors shrink-0">
            View All
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {[
            { title: "English", desc: "Reading, writing, phonics and more", count: "50+ lessons", emoji: "🔠" },
            { title: "Math", desc: "Numbers, addition, shapes and more", count: "60+ lessons", emoji: "🧮" },
            { title: "Science", desc: "Experiments, nature, body and more", count: "45+ lessons", emoji: "🔬" },
            { title: "Animals", desc: "Wildlife, pets, habitats and more", count: "40+ lessons", emoji: "🦁" },
            { title: "General Knowledge", desc: "Countries, inventions, people and more", count: "35+ lessons", emoji: "🌍" },
            { title: "Indian Culture", desc: "Festivals, history, monuments and more", count: "30+ lessons", emoji: "🪔" },
            { title: "Art & Creativity", desc: "Drawing, crafts, DIY and more", count: "40+ lessons", emoji: "🎨" },
            { title: "Life Skills", desc: "Good habits, emotions, safety and more", count: "30+ lessons", emoji: "💡" },
          ].map((sub, i) => (
            <div key={i} className="bg-white rounded-2xl p-3 sm:p-4 shadow-sm border border-gray-100 flex items-center gap-3 group hover:border-blue-200 transition-colors cursor-pointer">
              <div className="w-12 h-12 sm:w-16 sm:h-16 shrink-0 bg-gray-50 rounded-xl flex items-center justify-center text-3xl sm:text-4xl group-hover:scale-110 transition-transform">
                {sub.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-[#0B2046] text-sm sm:text-base leading-tight truncate">{sub.title}</h3>
                <p className="text-gray-500 text-[9px] sm:text-[10px] md:text-xs truncate">{sub.desc}</p>
                <p className="text-gray-400 text-[9px] sm:text-[10px] mt-1 font-medium">{sub.count}</p>
              </div>
              <div className="w-6 h-6 sm:w-8 sm:h-8 shrink-0 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Learning Paths */}
      <section>
        <div className="flex items-end justify-between mb-6 gap-4">
          <div className="flex items-center gap-3">
            <div className="text-3xl sm:text-4xl">📊</div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-[#0B2046] leading-tight">Popular Learning Paths</h2>
              <p className="text-gray-500 text-xs sm:text-sm">Step-by-step learning journeys designed for different age groups.</p>
            </div>
          </div>
          <button className="hidden sm:flex items-center gap-1 text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors shrink-0">
            View All
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </button>
        </div>

        <div 
          className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory sm:snap-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {[
            { title: "Early Learners Path", desc: "A perfect start for 3–5 year olds", age: "3-5 Years", lessons: "45 Lessons", emoji: "🐰", bg: "from-pink-50 to-pink-100" },
            { title: "Curious Minds Path", desc: "Build knowledge with fun lessons", age: "6-8 Years", lessons: "60 Lessons", emoji: "🔍", bg: "from-blue-50 to-blue-100" },
            { title: "Young Explorers Path", desc: "Go deeper with exciting topics", age: "9-12 Years", lessons: "70 Lessons", emoji: "🏕️", bg: "from-green-50 to-green-100" },
            { title: "Indian Heritage Path", desc: "Discover India's rich culture", age: "6-12 Years", lessons: "40 Lessons", emoji: "🛕", bg: "from-orange-50 to-orange-100" },
          ].map((path, i) => (
            <div key={i} className="w-[85vw] md:w-auto shrink-0 md:shrink snap-center bg-white rounded-2xl p-3 sm:p-4 shadow-sm border border-gray-100 flex flex-col group hover:shadow-md transition-shadow cursor-pointer">
              <div className={`w-full aspect-[2/1] rounded-xl mb-4 bg-gradient-to-br ${path.bg} flex items-center justify-center overflow-hidden relative`}>
                 <span className="text-5xl sm:text-6xl transform group-hover:scale-110 transition-transform duration-300">{path.emoji}</span>
              </div>
              <h3 className="font-bold text-[#0B2046] text-sm sm:text-base mb-1">{path.title}</h3>
              <p className="text-gray-500 text-[10px] sm:text-xs mb-4">{path.desc}</p>
              
              <div className="flex flex-wrap items-center gap-2 mt-auto">
                <span className="px-2.5 py-1 bg-amber-100 text-amber-700 text-[10px] font-bold rounded-full">{path.age}</span>
                <span className="px-2.5 py-1 bg-gray-100 text-gray-600 text-[10px] font-bold rounded-full">{path.lessons}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Keep Learning Banner */}
      <section className="bg-gradient-to-r from-purple-100 to-indigo-50 rounded-2xl sm:rounded-[32px] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm border border-purple-50">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0 text-4xl">
            🏆
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-[#0B2046] mb-1">Keep Learning, Keep Growing!</h2>
            <p className="text-gray-600 text-sm">Complete lessons, take quizzes and earn rewards.</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto overflow-x-auto sm:overflow-visible pb-2 sm:pb-0">
           <div className="flex flex-col items-center gap-2 min-w-[60px]">
             <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-yellow-500">⭐</div>
             <span className="text-[10px] font-bold text-gray-600">Learn</span>
           </div>
           <div className="w-8 sm:w-12 h-0.5 bg-purple-200" />
           <div className="flex flex-col items-center gap-2 min-w-[60px]">
             <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-green-500">✅</div>
             <span className="text-[10px] font-bold text-gray-600">Complete</span>
           </div>
           <div className="w-8 sm:w-12 h-0.5 bg-purple-200" />
           <div className="flex flex-col items-center gap-2 min-w-[60px]">
             <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-blue-500">🏅</div>
             <span className="text-[10px] font-bold text-gray-600">Earn Badges</span>
           </div>
           <div className="w-8 sm:w-12 h-0.5 bg-purple-200" />
           <div className="flex flex-col items-center gap-2 min-w-[60px] opacity-50">
             <div className="w-10 h-10 rounded-full bg-white/50 border border-purple-200 flex items-center justify-center text-gray-400">🔒</div>
             <span className="text-[10px] font-bold text-gray-500">Unlock More</span>
           </div>
        </div>
      </section>

    </div>
  );
}
