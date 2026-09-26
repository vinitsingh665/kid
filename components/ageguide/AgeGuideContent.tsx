import Image from "next/image";

export default function AgeGuideContent() {
  const featured = [
    {
      title: "Your Baby's First Year",
      category: "0–2 Years",
      categoryColor: "bg-pink-100 text-pink-800",
      desc: "Key milestones, bonding tips and early learning ideas.",
      tags: ["Milestones", "Care Tips"],
      img: "👶",
      imgBg: "bg-gradient-to-br from-pink-100 to-rose-200",
    },
    {
      title: "Learning Through Play",
      category: "3–5 Years",
      categoryColor: "bg-yellow-100 text-yellow-800",
      desc: "Fun activities to build creativity, confidence and social skills.",
      tags: ["Activities", "Learning"],
      img: "🎨",
      imgBg: "bg-gradient-to-br from-yellow-100 to-amber-200",
    },
    {
      title: "Building Independence",
      category: "6–8 Years",
      categoryColor: "bg-blue-100 text-blue-800",
      desc: "Help your child develop focus, responsibility and problem-solving skills.",
      tags: ["Growth", "Life Skills"],
      img: "🚀",
      imgBg: "bg-gradient-to-br from-blue-100 to-cyan-200",
    },
    {
      title: "Growing with Confidence",
      category: "9–12 Years",
      categoryColor: "bg-purple-100 text-purple-800",
      desc: "Support emotional growth, friendships and healthy routines.",
      tags: ["Education", "Wellbeing"],
      img: "🌟",
      imgBg: "bg-gradient-to-br from-purple-100 to-fuchsia-200",
    },
  ];

  const milestones = [
    { age: "0–2 Years", color: "bg-pink-100 text-pink-700", points: ["Early responses", "Motor skills", "Language basics"], img: "👶" },
    { age: "3–5 Years", color: "bg-yellow-100 text-yellow-700", points: ["Imagination", "Social skills", "Early learning"], img: "🎨" },
    { age: "6–8 Years", color: "bg-blue-100 text-blue-700", points: ["Independence", "Problem-solving", "Academic growth"], img: "🚀" },
    { age: "9–12 Years", color: "bg-purple-100 text-purple-700", points: ["Confidence", "Friendships", "Hobbies & interests"], img: "🌟" },
    { age: "13–16 Years", color: "bg-green-100 text-green-700", points: ["Identity", "Life skills", "Future preparation"], img: "🎓" },
  ];

  const topics = [
    { name: "Health & Nutrition", icon: "🍎" },
    { name: "Sleep & Routine", icon: "🌙" },
    { name: "Learning & Education", icon: "🎓" },
    { name: "Behavior & Emotions", icon: "😊" },
    { name: "Screen Time", icon: "📱" },
    { name: "Social Skills", icon: "👨‍👩‍👧‍👦" },
    { name: "Activities & Play", icon: "🧩" },
    { name: "Expert Advice", icon: "💡" },
  ];

  const resources = [
    { title: "Daily Routine Chart", img: "☀️", color: "bg-blue-50" },
    { title: "Growth Tracker", img: "🦒", color: "bg-yellow-50" },
    { title: "Healthy Meal Planner", img: "🥗", color: "bg-green-50" },
    { title: "Chore Chart", img: "📝", color: "bg-pink-50" },
    { title: "Screen Time Tracker", img: "⏱️", color: "bg-purple-50" },
  ];

  return (
    <div className="flex-1 space-y-12 min-w-0">

      {/* Featured Age Guides */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="text-3xl">⭐</div>
            <div>
              <h2 className="text-2xl font-black text-[#0B2046] leading-tight">Featured Age Guides</h2>
              <p className="text-gray-500 text-sm">Guides tailored for each stage of your child's development.</p>
            </div>
          </div>
          <a href="#" className="text-sm font-bold text-gray-700 hover:text-blue-600 flex items-center gap-1">
            View All <span className="text-lg">→</span>
          </a>
        </div>

        <div className="flex overflow-x-auto gap-3 sm:gap-4 pb-4 snap-x snap-mandatory lg:grid lg:grid-cols-4 lg:overflow-visible lg:snap-none" style={{ scrollbarWidth: "none" }}>
          {featured.map((item, i) => (
            <div key={i} className="w-[45vw] sm:w-[300px] lg:w-auto shrink-0 snap-center bg-white rounded-2xl p-3 sm:p-4 shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow">
              <div className={`w-full aspect-[4/3] rounded-xl mb-3 sm:mb-4 ${item.imgBg} flex items-center justify-center relative overflow-hidden`}>
                <span className="absolute top-2 left-2 text-[10px] sm:text-xs font-bold px-2 py-1 rounded-full bg-white/80 backdrop-blur-sm text-gray-800 shadow-sm">{item.category}</span>
                <span className="text-5xl sm:text-6xl">{item.img}</span>
              </div>
              <h3 className="font-bold text-[#0B2046] text-[13px] sm:text-[15px] mb-1 leading-tight">{item.title}</h3>
              <p className="text-gray-500 text-[10px] sm:text-xs mb-3 sm:mb-4 line-clamp-2 flex-1">{item.desc}</p>

              <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4 mt-auto">
                {item.tags.map((tag, j) => (
                  <span key={j} className="bg-gray-100 text-gray-600 text-[9px] sm:text-[10px] font-semibold px-2 py-0.5 sm:py-1 rounded-full">{tag}</span>
                ))}
              </div>

              <button className="w-full bg-[#0B2046] hover:bg-[#1a3a6e] text-white text-[10px] sm:text-xs font-bold py-2 sm:py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2">
                View Guide <span className="text-sm">→</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Development Milestones */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="text-3xl">📊</div>
          <div>
            <h2 className="text-2xl font-black text-[#0B2046] leading-tight">Development Milestones</h2>
            <p className="text-gray-500 text-sm">See what to expect at each stage of your child's journey.</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6 lg:p-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-stretch gap-6 lg:gap-4 relative">
            {/* Connecting line (desktop) */}
            <div className="hidden lg:block absolute top-[40px] left-10 right-10 h-0.5 bg-gray-100 z-0"></div>
            
            {milestones.map((m, i) => (
              <div key={i} className="flex-1 flex flex-row lg:flex-col items-center lg:items-center gap-4 lg:gap-4 w-full lg:w-auto relative z-10 group">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-3xl sm:text-4xl shadow-md border-4 border-white ${m.color.replace('text-', 'bg-').replace('700', '100')} shrink-0 group-hover:scale-110 transition-transform`}>
                  {m.img}
                </div>
                
                {/* Connecting line (mobile) */}
                {i < milestones.length - 1 && (
                  <div className="lg:hidden absolute left-8 top-16 bottom-[-24px] w-0.5 bg-gray-100 -z-10"></div>
                )}
                
                <div className="flex-1 lg:text-center w-full">
                  <span className={`inline-block text-[10px] sm:text-xs font-bold px-2 py-1 rounded-full mb-2 sm:mb-3 ${m.color.replace('text-', 'bg-').replace('700', '100')} ${m.color.split(' ')[1]}`}>
                    {m.age}
                  </span>
                  <ul className="text-left text-gray-500 text-[11px] sm:text-sm space-y-1 sm:space-y-1.5 lg:mx-auto lg:w-max">
                    {m.points.map((p, j) => (
                      <li key={j} className="flex items-center gap-1.5">
                        <span className="text-gray-300">✓</span> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore by Topic */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="text-3xl">📖</div>
            <div>
              <h2 className="text-2xl font-black text-[#0B2046] leading-tight">Explore by Topic</h2>
              <p className="text-gray-500 text-sm">Find age-specific advice and activities on what matters most.</p>
            </div>
          </div>
          <a href="#" className="text-sm font-bold text-gray-700 hover:text-blue-600 flex items-center gap-1">
            View All <span className="text-lg">→</span>
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {topics.map((topic, i) => (
            <a key={i} href="#" className="flex items-center justify-between p-3 sm:p-4 rounded-xl border border-gray-100 bg-white hover:shadow-md transition-all group">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{topic.icon}</span>
                <span className="font-bold text-[#0B2046] text-[11px] sm:text-sm leading-tight group-hover:text-blue-600 transition-colors">{topic.name}</span>
              </div>
              <span className="text-gray-300 font-bold group-hover:text-blue-500 group-hover:translate-x-1 transition-all">→</span>
            </a>
          ))}
        </div>
      </section>

      {/* Helpful Resources */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="text-3xl">🗂️</div>
            <div>
              <h2 className="text-2xl font-black text-[#0B2046] leading-tight">Helpful Resources</h2>
              <p className="text-gray-500 text-sm">Download printables, checklists and planners for every age.</p>
            </div>
          </div>
          <a href="#" className="text-sm font-bold text-gray-700 hover:text-blue-600 flex items-center gap-1">
            View All <span className="text-lg">→</span>
          </a>
        </div>

        <div className="flex overflow-x-auto gap-3 sm:gap-4 pb-4 snap-x snap-mandatory lg:grid lg:grid-cols-5 lg:overflow-visible lg:snap-none" style={{ scrollbarWidth: "none" }}>
          {resources.map((item, i) => (
            <a key={i} href="#" className="w-[40vw] sm:w-[160px] lg:w-auto shrink-0 snap-center bg-white rounded-2xl p-3 sm:p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col group">
              <div className={`w-full aspect-square rounded-xl mb-3 ${item.color} flex items-center justify-center`}>
                <span className="text-4xl sm:text-5xl">{item.img}</span>
              </div>
              <h3 className="font-bold text-[#0B2046] text-[11px] sm:text-sm mb-2 leading-tight group-hover:text-blue-600 transition-colors flex-1">{item.title}</h3>
              <div className="flex items-center justify-between mt-auto">
                <span className="bg-pink-50 text-pink-700 text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
                  <span className="text-[8px]">📄</span> Printable
                </span>
                <span className="text-blue-500 font-bold text-sm group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </a>
          ))}
        </div>
      </section>

    </div>
  );
}
