import Image from "next/image";

export default function FaqSidebarRight() {
  return (
    <div className="w-[300px] shrink-0 hidden lg:flex flex-col gap-6">
      {/* Still Need Help */}
      <div className="bg-[#fbf5fe] rounded-3xl p-6 relative flex flex-col items-center text-center">
        <div className="w-full flex justify-center mb-4">
          <Image src="/still_need_help.png" alt="Still Need Help" width={220} height={160} className="object-contain" />
        </div>
        <h3 className="font-black text-[#0B2046] text-xl mb-2">Still Need Help?</h3>
        <p className="text-sm text-gray-600 mb-5">Can't find what you're looking for?<br/>Our team is here to help.</p>
        <button className="w-full bg-[#0B2046] hover:bg-[#1a3a6e] text-white font-bold py-3.5 px-6 rounded-xl text-sm transition-colors flex items-center justify-center gap-2 shadow-md">
          <span className="text-lg leading-none">✉️</span> Contact Support
        </button>
      </div>

      {/* Quick Links */}
      <div className="bg-[#f9fafc] rounded-3xl p-6 border border-gray-100 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <div className="bg-blue-500 rounded-full w-7 h-7 flex items-center justify-center text-white text-sm shrink-0 shadow-sm">🔗</div>
          <h3 className="font-black text-[#0B2046] text-lg">Quick Links</h3>
        </div>
        <div className="space-y-0">
          {[
            "Safety & Privacy",
            "Parental Controls",
            "Subscription Plans",
            "Technical Support",
            "Content Guidelines"
          ].map((link, i) => (
            <div key={i} className="flex items-center justify-between py-3.5 border-b border-gray-200/60 last:border-0 cursor-pointer group">
              <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">{link}</span>
              <span className="text-gray-400 group-hover:text-blue-500 transition-colors font-bold">›</span>
            </div>
          ))}
        </div>
      </div>

      {/* Have a Suggestion? */}
      <div className="bg-gradient-to-b from-[#fdf6ff] to-[#f4f7fe] rounded-3xl p-6 flex flex-col items-center text-center border border-gray-100 shadow-sm">
        <div className="text-5xl mb-3">💡</div>
        <h3 className="font-black text-[#0B2046] text-xl mb-2">Have a Suggestion?</h3>
        <p className="text-sm text-gray-600 mb-6">We'd love to hear your ideas<br/>to make Kidzoo even better!</p>
        <button className="bg-white hover:bg-gray-50 text-gray-800 font-bold py-3 px-6 rounded-full text-sm shadow-sm border border-gray-100 transition-colors flex items-center gap-2">
          Share Feedback <span className="font-bold">→</span>
        </button>
      </div>
    </div>
  );
}
