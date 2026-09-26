import Image from "next/image";

export default function FaqSidebarLeft() {
  const categories = [
    { name: "All FAQs", icon: "?", active: true },
    { name: "General", icon: "🏠", active: false },
    { name: "Account & Subscription", icon: "👑", active: false },
    { name: "Content & Learning", icon: "📚", active: false },
    { name: "Safety & Privacy", icon: "🛡️", active: false },
    { name: "Technical Support", icon: "⚙️", active: false },
    { name: "For Parents", icon: "👨‍👩‍👧‍👦", active: false },
    { name: "For Educators", icon: "🎓", active: false },
  ];

  return (
    <div className="w-[280px] shrink-0 hidden lg:flex flex-col gap-6">
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
        <h3 className="font-black text-[#0B2046] text-lg mb-4">FAQ Categories</h3>
        <div className="space-y-1">
          {categories.map((cat, i) => (
            <button
              key={i}
              className={`w-full flex items-center justify-between p-3 rounded-xl transition-colors ${
                cat.active
                  ? "bg-[#f0f7ff] text-blue-700"
                  : "hover:bg-gray-50 text-gray-700"
              }`}
            >
              <div className="flex items-center gap-3">
                {cat.name === "All FAQs" ? (
                  <div className={`w-6 h-6 rounded-full ${cat.active ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-500'} flex items-center justify-center font-bold text-sm shrink-0`}>?</div>
                ) : (
                  <div className="text-xl w-6 flex items-center justify-center shrink-0">{cat.icon}</div>
                )}
                <span className={`text-sm ${cat.active ? "font-bold" : "font-semibold"}`}>
                  {cat.name}
                </span>
              </div>
              {cat.active && <span className="text-blue-500 font-bold">→</span>}
            </button>
          ))}
        </div>
      </div>

      {/* Still have a question? */}
      <div className="bg-[#f5f7fb] rounded-3xl pt-8 px-6 overflow-hidden relative flex flex-col items-center text-center h-[340px]">
        <h3 className="font-black text-[#0B2046] text-xl mb-2 relative z-10">Still have a question?</h3>
        <p className="text-sm text-gray-600 mb-5 relative z-10">We're here to help!</p>
        <button className="bg-[#0B2046] hover:bg-[#1a3a6e] text-white font-bold py-3 px-6 rounded-full text-sm transition-colors flex items-center gap-2 mb-4 relative z-10 shadow-md">
          Contact Us <span>→</span>
        </button>
        <div className="absolute bottom-0 left-0 right-0 h-[220px]">
          <Image src="/questionsafty.png" alt="Questions" fill className="object-cover object-top scale-110 translate-y-4" />
        </div>
      </div>
    </div>
  );
}
