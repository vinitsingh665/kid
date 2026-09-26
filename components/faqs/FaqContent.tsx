export default function FaqContent() {
  const sections = [
    {
      title: "General",
      icon: "🏠",
      color: "text-red-500",
      bg: "bg-[#fff5f5]",
      questions: [
        "What is Kidzoo?",
        "Who is Kidzoo for?",
        "Is Kidzoo free to use?",
        "Do I need to create an account?"
      ]
    },
    {
      title: "Account & Subscription",
      icon: "👑",
      color: "text-amber-600",
      bg: "bg-[#fffbf0]",
      questions: [
        "How do I create an account?",
        "Is there a premium plan?",
        "What's included in the premium plan?",
        "Can I cancel my subscription anytime?"
      ]
    },
    {
      title: "Content & Learning",
      icon: "📚",
      color: "text-[#0B2046]",
      bg: "bg-[#f2faef]",
      questions: [
        "What kind of content does Kidzoo offer?",
        "Are the activities age-appropriate?",
        "Can I download and print worksheets?",
        "Do you add new content regularly?"
      ]
    },
    {
      title: "Safety & Privacy",
      icon: "🛡️",
      color: "text-[#0B2046]",
      bg: "bg-[#f8f9fc]",
      questions: [
        "Is the content safe for children?",
        "Does Kidzoo show ads?",
        "Can you collect my child's personal information?",
        "How do you keep data secure?"
      ]
    },
    {
      title: "Technical Support",
      icon: "⚙️",
      color: "text-[#0B2046]",
      bg: "bg-[#f5f3ff]",
      questions: [
        "The website isn't loading. What should I do?",
        "I can't download a printable. Why?",
        "Which devices are supported?",
        "How can I report a technical issue?"
      ]
    },
    {
      title: "For Parents & Educators",
      icon: "👨‍👩‍👧‍👦",
      color: "text-[#0B2046]",
      bg: "bg-[#fff0f5]",
      questions: [
        "Can Kidzoo be used in schools or classrooms?",
        "Do you provide resources for homeschooling?",
        "Can I suggest a topic or activity?",
        "How can I collaborate with Kidzoo?"
      ]
    }
  ];

  return (
    <div className="flex-1 flex flex-col gap-6 w-full max-w-[600px] lg:max-w-none mx-auto min-w-0">
      {/* Mobile Top Header (hidden on desktop) */}
      <div className="lg:hidden flex items-center gap-3 mb-2 px-2">
        <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-xl leading-none shrink-0 shadow-sm">?</div>
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-[#0B2046] leading-tight">Frequently Asked Questions</h2>
          <p className="text-gray-500 text-sm">Find answers to the most common questions about Kidzoo.</p>
        </div>
      </div>

      {/* Desktop Header */}
      <div className="hidden lg:flex justify-between items-start mb-2 mt-4">
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-2xl leading-none mt-1 shrink-0 shadow-md">?</div>
          <div>
            <h2 className="text-2xl font-black text-[#0B2046] leading-tight mb-1">Frequently Asked Questions</h2>
            <p className="text-gray-500 text-sm">Find answers to the most common questions about Kidzoo.</p>
          </div>
        </div>
        <div className="relative w-[240px]">
          <input 
            type="text" 
            placeholder="Search FAQs..." 
            className="w-full bg-[#f9fafc] border border-gray-200 rounded-full py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-shadow"
          />
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="lg:hidden relative w-full mb-2">
        <input 
          type="text" 
          placeholder="Search FAQs..." 
          className="w-full bg-[#f9fafc] border border-gray-200 rounded-full py-3.5 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 shadow-sm"
        />
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </div>
      </div>

      {/* FAQ Sections */}
      <div className="flex flex-col gap-6 sm:gap-8">
        {sections.map((section, idx) => (
          <div key={idx} className={`${section.bg} rounded-3xl p-5 sm:p-6 lg:p-7 shadow-sm border border-black/5`}>
            <div className="flex items-center gap-3 mb-5">
              <div className="text-3xl">{section.icon}</div>
              <h3 className={`font-black text-lg sm:text-xl ${section.color}`}>{section.title}</h3>
            </div>
            <div className="flex flex-col gap-3">
              {section.questions.map((q, i) => (
                <div key={i} className="bg-white rounded-xl p-4 sm:p-5 flex justify-between items-center cursor-pointer shadow-sm hover:shadow-md transition-shadow">
                  <span className="font-semibold text-sm text-gray-800 leading-tight">{q}</span>
                  <span className="text-gray-400 font-bold ml-4 shrink-0">⌄</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
