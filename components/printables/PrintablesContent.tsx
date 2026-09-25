export default function PrintablesContent() {
  const printables = [
    { title: "Animal Coloring Pages", desc: "50+ cute animal designs", age: "3-8", tag: "Coloring", tagBg: "bg-blue-100 text-blue-800", emoji: "🐘", bg: "bg-gray-50 border-gray-200" },
    { title: "Math Worksheets", desc: "Addition, subtraction and more", age: "4-8", tag: "Math", tagBg: "bg-indigo-100 text-indigo-800", emoji: "➕", bg: "bg-white border-gray-200" },
    { title: "Alphabet Tracing", desc: "Letters A to Z with tracing guides", age: "3-6", tag: "English", tagBg: "bg-blue-100 text-blue-800", emoji: "Aa", bg: "bg-white border-gray-200 text-3xl font-serif text-gray-400" },
    { title: "Dinosaur Coloring Pages", desc: "Roar-some dino drawings", age: "4-10", tag: "Coloring", tagBg: "bg-blue-100 text-blue-800", emoji: "🦕", bg: "bg-gray-50 border-gray-200" },
    { title: "Maze Challenges", desc: "Fun and tricky mazes", age: "4-10", tag: "Puzzle", tagBg: "bg-purple-100 text-purple-800", emoji: "🌀", bg: "bg-white border-gray-200" },
    { title: "Word Search", desc: "Find the hidden words", age: "6-12", tag: "English", tagBg: "bg-blue-100 text-blue-800", emoji: "🔍", bg: "bg-gray-50 border-gray-200" },
    { title: "Dot to Dot", desc: "Connect the dots and color", age: "3-8", tag: "Creativity", tagBg: "bg-green-100 text-green-800", emoji: "🦒", bg: "bg-white border-gray-200" },
    { title: "Flashcards", desc: "Printable flashcards for kids", age: "3-6", tag: "Learning", tagBg: "bg-orange-100 text-orange-800", emoji: "🍎", bg: "bg-red-50 border-red-100" },
    { title: "Shapes Worksheets", desc: "Learn and trace shapes", age: "3-6", tag: "Math", tagBg: "bg-indigo-100 text-indigo-800", emoji: "🔺", bg: "bg-white border-gray-200" },
    { title: "Space Coloring Pages", desc: "Explore the universe", age: "5-10", tag: "Science", tagBg: "bg-teal-100 text-teal-800", emoji: "🚀", bg: "bg-gray-50 border-gray-200" },
    { title: "Festival Activity Pack", desc: "Diwali, Holi and more", age: "4-10", tag: "Festivals", tagBg: "bg-pink-100 text-pink-800", emoji: "🪔", bg: "bg-white border-gray-200" },
    { title: "Number Tracing", desc: "Trace and learn numbers", age: "3-6", tag: "Math", tagBg: "bg-indigo-100 text-indigo-800", emoji: "123", bg: "bg-gray-50 border-gray-200 font-serif text-3xl text-gray-400" },
  ];

  return (
    <div className="flex-1 space-y-8 min-w-0">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="text-3xl sm:text-4xl">🖨️</div>
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-[#0B2046] leading-tight">Popular Printables</h2>
            <p className="text-gray-500 text-xs sm:text-sm">Most loved worksheets and activity sheets by kids and parents.</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 sm:self-start">
          <span className="text-sm font-medium text-gray-500 whitespace-nowrap">Sort by</span>
          <div className="relative">
            <select className="appearance-none bg-white border border-gray-200 rounded-lg pl-3 pr-8 py-1.5 text-xs sm:text-sm font-medium text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-[120px]">
              <option>Popular</option>
              <option>Newest</option>
              <option>Age: Low to High</option>
              <option>Age: High to Low</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
        {printables.map((item, i) => (
          <div key={i} className="bg-white rounded-2xl p-2.5 sm:p-4 shadow-sm border border-gray-100 flex flex-col h-full group hover:shadow-md transition-shadow min-w-0">
            {/* Image Placeholder */}
            <div className={`w-full aspect-[4/3] rounded-xl mb-3 sm:mb-4 border flex items-center justify-center overflow-hidden relative ${item.bg}`}>
               <span className={item.bg.includes("text-") ? "" : "text-5xl sm:text-6xl transform group-hover:scale-110 transition-transform duration-300"}>
                 {item.emoji}
               </span>
            </div>
            
            <h3 className="font-bold text-[#0B2046] text-xs sm:text-sm mb-1 leading-tight truncate sm:whitespace-normal">{item.title}</h3>
            <p className="text-gray-500 text-[9px] sm:text-[10px] md:text-xs mb-3 sm:mb-4 line-clamp-1 sm:line-clamp-2 leading-snug">{item.desc}</p>
            
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4 mt-auto">
              <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-amber-50 text-amber-600 border border-amber-100 text-[9px] sm:text-[10px] font-bold rounded-full">{item.age}</span>
              <span className={`px-2 sm:px-2.5 py-0.5 sm:py-1 text-[9px] sm:text-[10px] font-bold rounded-full ${item.tagBg}`}>{item.tag}</span>
            </div>
            
            <div className="grid grid-cols-2 gap-2 mt-auto">
              <button className="w-full bg-white border border-gray-200 text-gray-700 text-[9px] sm:text-xs py-1.5 sm:py-2 rounded-xl flex items-center justify-center gap-1 hover:bg-gray-50 transition-colors font-bold shrink-0 shadow-sm">
                Preview
              </button>
              <button className="w-full bg-[#0B2046] text-white text-[9px] sm:text-xs py-1.5 sm:py-2 rounded-xl flex items-center justify-center gap-1 hover:bg-blue-700 transition-colors font-bold shrink-0 shadow-sm">
                Download
                <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
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

      {/* Keep Learning Banner (Get 20 Free Printables) */}
      <section className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl sm:rounded-[32px] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm border border-pink-100 mt-12">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0 text-4xl">
            🎁
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-[#0B2046] mb-1">Get 20 Free Printables!</h2>
            <p className="text-gray-600 text-sm">Join thousands of parents and get a free activity pack in your inbox.</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-2 w-full md:w-auto">
           <input type="email" placeholder="Enter your email address" className="w-full md:w-[250px] px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm" />
           <button className="w-full sm:w-auto bg-[#0B2046] text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-900 transition-colors shadow-sm whitespace-nowrap">
             Subscribe
           </button>
        </div>
      </section>

    </div>
  );
}
