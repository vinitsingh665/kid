import Image from "next/image";

export default function ContactBottom() {
  return (
    <div className="flex flex-col gap-10 lg:gap-14 w-full mt-10 lg:mt-16">
      {/* Common Inquiries */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-2xl leading-none shadow-sm">?</div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-[#0B2046] leading-tight">Common Inquiries</h2>
              <p className="text-gray-500 text-sm">You might find your answer here.</p>
            </div>
          </div>
          <button className="hidden sm:flex items-center gap-2 text-sm font-bold text-[#0B2046] hover:text-blue-600 transition-colors">
            View All FAQs <span className="text-lg leading-none">→</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#fff0f5] rounded-3xl p-6 flex flex-col justify-between border border-pink-50">
            <div>
              <div className="text-4xl mb-4">👤</div>
              <h3 className="font-black text-[#0B2046] text-sm sm:text-base mb-2">Account & Subscription</h3>
              <p className="text-xs text-gray-600 mb-6 leading-relaxed">Questions about accounts, premium plans and billing.</p>
            </div>
            <button className="w-full bg-white text-gray-800 font-bold py-3 rounded-full text-xs shadow-sm flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors border border-gray-100">
              Go to FAQs <span className="font-bold">→</span>
            </button>
          </div>

          <div className="bg-[#f0f7ff] rounded-3xl p-6 flex flex-col justify-between border border-blue-50">
            <div>
              <div className="text-4xl mb-4">📖</div>
              <h3 className="font-black text-[#0B2046] text-sm sm:text-base mb-2">Content & Learning</h3>
              <p className="text-xs text-gray-600 mb-6 leading-relaxed">Questions about games, printables, and educational content.</p>
            </div>
            <button className="w-full bg-white text-gray-800 font-bold py-3 rounded-full text-xs shadow-sm flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors border border-gray-100">
              Go to FAQs <span className="font-bold">→</span>
            </button>
          </div>

          <div className="bg-[#f2faef] rounded-3xl p-6 flex flex-col justify-between border border-green-50">
            <div>
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="font-black text-[#0B2046] text-sm sm:text-base mb-2">Safety & Privacy</h3>
              <p className="text-xs text-gray-600 mb-6 leading-relaxed">Questions about child safety, privacy and data protection.</p>
            </div>
            <button className="w-full bg-white text-gray-800 font-bold py-3 rounded-full text-xs shadow-sm flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors border border-gray-100">
              Go to FAQs <span className="font-bold">→</span>
            </button>
          </div>

          <div className="bg-[#f9f3ff] rounded-3xl p-6 flex flex-col justify-between border border-purple-50">
            <div>
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="font-black text-[#0B2046] text-sm sm:text-base mb-2">Technical Support</h3>
              <p className="text-xs text-gray-600 mb-6 leading-relaxed">Having trouble with the website or downloads?</p>
            </div>
            <button className="w-full bg-white text-gray-800 font-bold py-3 rounded-full text-xs shadow-sm flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors border border-gray-100">
              Go to FAQs <span className="font-bold">→</span>
            </button>
          </div>
        </div>
        
        <div className="sm:hidden flex justify-center mt-6">
          <button className="flex items-center gap-2 text-sm font-bold text-[#0B2046] hover:text-blue-600 transition-colors">
            View All FAQs <span className="text-lg leading-none">→</span>
          </button>
        </div>
      </div>

      {/* Help Us Make Kidzoo Better */}
      <div className="bg-gradient-to-r from-[#fffae8] to-[#fff3c8] rounded-[32px] p-6 lg:px-10 lg:py-6 relative flex flex-col lg:flex-row items-center justify-between border border-orange-50 shadow-sm min-h-[180px]">
        <div className="relative z-10 lg:max-w-[450px] w-full text-center lg:text-left mb-6 lg:mb-0">
          <div className="inline-flex items-center justify-center w-8 h-8 bg-red-100 text-red-500 rounded-full text-sm mb-2 shadow-sm shrink-0">
            ❤️
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#0B2046] leading-tight mb-2">
            Help Us Make Kidzoo Better!
          </h2>
          <p className="text-gray-700 text-[13px] sm:text-sm mb-4 max-w-sm mx-auto lg:mx-0 leading-relaxed">
            Your feedback helps us create more engaging, safe and educational content for kids around the world.
          </p>
          <button className="bg-[#0B2046] hover:bg-[#1a3a6e] text-white font-bold py-2.5 px-5 rounded-full text-[13px] transition-colors flex items-center justify-center lg:justify-start gap-2 shadow-md w-max mx-auto lg:mx-0">
            Share Your Feedback <span>→</span>
          </button>
        </div>
        
        <div className="relative lg:absolute lg:-bottom-4 lg:right-12 lg:left-auto flex justify-center lg:justify-end w-full lg:w-[45%] pointer-events-none z-20 mt-2 lg:mt-0">
          <Image src="/contact.png" alt="Make Kidzoo Better" width={500} height={300} className="w-full max-w-[280px] lg:max-w-[350px] h-auto object-contain object-bottom drop-shadow-md -mb-8 lg:-mb-0" />
        </div>
      </div>
    </div>
  );
}
