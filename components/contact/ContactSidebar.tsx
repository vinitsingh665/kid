import Image from "next/image";

export default function ContactSidebar() {
  return (
    <div className="flex-1 w-full flex flex-col gap-6">
      <div className="bg-white rounded-[32px] p-6 sm:p-8 lg:p-10 shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-500">
              <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M19.4 15C19.7 14.1 20 13.1 20 12C20 10.9 19.7 9.9 19.4 9L21.7 7.2L19.7 3.8L17 4.9C16.1 4.2 15.1 3.7 14 3.4L13.6 0.5H9.6L9.2 3.4C8.1 3.7 7.1 4.2 6.2 4.9L3.5 3.8L1.5 7.2L3.8 9C3.5 9.9 3.2 10.9 3.2 12C3.2 13.1 3.5 14.1 3.8 15L1.5 16.8L3.5 20.2L6.2 19.1C7.1 19.8 8.1 20.3 9.2 20.6L9.6 23.5H13.6L14 20.6C15.1 20.3 16.1 19.8 17 19.1L19.7 20.2L21.7 16.8L19.4 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-[#0B2046] leading-tight">Other Ways to Reach Us</h2>
        </div>
        <p className="text-gray-500 text-sm mb-8 max-w-[320px] ml-11">Prefer a different way? You can also contact us through these channels.</p>

        <div className="space-y-6">
          <div className="flex items-center gap-4 cursor-pointer group">
            <div className="w-10 h-10 flex items-center justify-center shrink-0">
              <span className="text-3xl drop-shadow-sm">💌</span>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-[#0B2046] text-sm sm:text-base mb-0.5">Email Us</h3>
              <p className="text-[11px] text-gray-500 mb-0.5">For general inquiries and support</p>
              <p className="text-xs font-bold text-blue-500 group-hover:text-blue-600 transition-colors">support@kidzoo.in</p>
            </div>
            <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-blue-400 group-hover:bg-blue-100 group-hover:text-blue-500 transition-colors shrink-0">
              <span className="text-xs font-bold">→</span>
            </div>
          </div>

          <div className="flex items-center gap-4 cursor-pointer group">
            <div className="w-10 h-10 flex items-center justify-center shrink-0">
              <span className="text-3xl drop-shadow-sm">💬</span>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-[#0B2046] text-sm sm:text-base mb-0.5">Help & Support</h3>
              <p className="text-[11px] text-gray-500 mb-0.5">Get help with your account or content</p>
              <p className="text-xs font-bold text-blue-500 group-hover:text-blue-600 transition-colors">help@kidzoo.in</p>
            </div>
            <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-blue-400 group-hover:bg-blue-100 group-hover:text-blue-500 transition-colors shrink-0">
              <span className="text-xs font-bold">→</span>
            </div>
          </div>

          <div className="flex items-center gap-4 cursor-pointer group">
            <div className="w-10 h-10 flex items-center justify-center shrink-0">
              <span className="text-3xl drop-shadow-sm">👥</span>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-[#0B2046] text-sm sm:text-base mb-0.5">Partnerships</h3>
              <p className="text-[11px] text-gray-500 mb-0.5">For collaborations and partnerships</p>
              <p className="text-xs font-bold text-blue-500 group-hover:text-blue-600 transition-colors">partnerships@kidzoo.in</p>
            </div>
            <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-blue-400 group-hover:bg-blue-100 group-hover:text-blue-500 transition-colors shrink-0">
              <span className="text-xs font-bold">→</span>
            </div>
          </div>

          <div className="flex items-center gap-4 cursor-pointer group">
            <div className="w-10 h-10 flex items-center justify-center shrink-0">
              <span className="text-3xl drop-shadow-sm">💡</span>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-[#0B2046] text-sm sm:text-base mb-0.5">Suggestions</h3>
              <p className="text-[11px] text-gray-500 mb-0.5">Share your ideas with us</p>
              <p className="text-xs font-bold text-blue-500 group-hover:text-blue-600 transition-colors">ideas@kidzoo.in</p>
            </div>
            <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-blue-400 group-hover:bg-blue-100 group-hover:text-blue-500 transition-colors shrink-0">
              <span className="text-xs font-bold">→</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#f6faff] to-[#e4effd] rounded-[32px] p-6 sm:p-8 flex items-center justify-between border border-blue-50 shadow-sm relative overflow-hidden min-h-[140px]">
        <div className="relative z-10 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-2xl font-bold shrink-0 shadow-md">
            🕒
          </div>
          <div>
            <h3 className="font-black text-[#0B2046] text-base sm:text-lg mb-1">Our Response Time</h3>
            <p className="text-[13px] sm:text-sm text-gray-600">We usually respond within 24-48 hours<br/>(Monday to Friday).</p>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 w-[140px] pointer-events-none">
          <Image src="/clock.png" alt="Response Time" width={180} height={120} className="w-full h-auto object-contain object-bottom-right drop-shadow-sm" />
        </div>
      </div>
    </div>
  );
}
