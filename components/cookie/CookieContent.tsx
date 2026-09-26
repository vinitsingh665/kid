import Image from "next/image";

export default function CookieContent() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-10 mb-20 relative z-20">
      {/* Main Content Area */}
      <div className="flex-1 w-full space-y-4 sm:space-y-6">
        {/* Section 01 */}
        <div className="bg-[#f0f7ff] rounded-[32px] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative overflow-hidden">
          <div className="flex gap-4 sm:gap-6 relative z-10 w-full sm:w-auto">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black text-lg sm:text-xl shrink-0">
              01
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-[#0B2046] mb-2">What Are Cookies?</h2>
              <p className="text-gray-700 text-[13px] sm:text-sm leading-relaxed max-w-[540px]">
                Cookies are small text files that are stored on your device when you visit a website. They help us remember your preferences, understand how you use our site, and make your experience better.
              </p>
            </div>
          </div>
          <div className="hidden sm:block shrink-0 relative z-10">
            <div className="text-6xl drop-shadow-sm mr-4">🍪</div>
          </div>
        </div>

        {/* Section 02 */}
        <div className="bg-[#fff0f5] rounded-[32px] p-6 sm:p-8">
          <div className="flex gap-4 sm:gap-6 mb-6">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center font-black text-lg sm:text-xl shrink-0">
              02
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-[#0B2046] mb-2">How We Use Cookies</h2>
              <p className="text-gray-700 text-[13px] sm:text-sm leading-relaxed max-w-[500px]">
                We use cookies for the following purposes:
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/60 rounded-3xl p-5 border border-pink-50 flex items-center md:items-start gap-4">
              <div className="text-4xl shrink-0 text-green-500">⚙️</div>
              <div>
                <h3 className="font-bold text-[#0B2046] text-sm mb-1.5">Essential Cookies</h3>
                <p className="text-gray-600 text-xs leading-relaxed">Required for the website to function properly.</p>
              </div>
            </div>
            <div className="bg-white/60 rounded-3xl p-5 border border-pink-50 flex items-center md:items-start gap-4">
              <div className="text-4xl shrink-0 text-pink-500">📊</div>
              <div>
                <h3 className="font-bold text-[#0B2046] text-sm mb-1.5">Performance Cookies</h3>
                <p className="text-gray-600 text-xs leading-relaxed">Help us understand how visitors use our website.</p>
              </div>
            </div>
            <div className="bg-white/60 rounded-3xl p-5 border border-pink-50 flex items-center md:items-start gap-4">
              <div className="text-4xl shrink-0 text-amber-500">⭐</div>
              <div>
                <h3 className="font-bold text-[#0B2046] text-sm mb-1.5">Functional Cookies</h3>
                <p className="text-gray-600 text-xs leading-relaxed">Remember your preferences (e.g., language, settings).</p>
              </div>
            </div>
            <div className="bg-white/60 rounded-3xl p-5 border border-pink-50 flex items-center md:items-start gap-4">
              <div className="text-4xl shrink-0 text-purple-500">👤</div>
              <div>
                <h3 className="font-bold text-[#0B2046] text-sm mb-1.5">Advertising Cookies</h3>
                <p className="text-gray-600 text-xs leading-relaxed">Used to show relevant content and offers (with your consent).</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 03 */}
        <div className="bg-[#fff9e6] rounded-[32px] p-6 sm:p-8">
          <div className="flex gap-4 sm:gap-6 mb-6">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-amber-100 text-amber-500 flex items-center justify-center font-black text-lg sm:text-xl shrink-0">
              03
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-[#0B2046] mb-2">Types of Cookies We Use</h2>
              <p className="text-gray-700 text-[13px] sm:text-sm leading-relaxed max-w-[500px]">
                We use both first-party and third-party cookies on Kidzoo:
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/60 rounded-3xl p-5 border border-amber-50 flex items-center md:items-start gap-4">
              <div className="text-4xl shrink-0 text-blue-500">🏠</div>
              <div>
                <h3 className="font-bold text-[#0B2046] text-sm mb-1.5">First-Party Cookies</h3>
                <p className="text-gray-600 text-xs leading-relaxed">Set by Kidzoo to make our website work and improve your experience.</p>
              </div>
            </div>
            <div className="bg-white/60 rounded-3xl p-5 border border-amber-50 flex items-center md:items-start gap-4">
              <div className="text-4xl shrink-0 text-purple-500">🔗</div>
              <div>
                <h3 className="font-bold text-[#0B2046] text-sm mb-1.5">Third-Party Cookies</h3>
                <p className="text-gray-600 text-xs leading-relaxed">Set by trusted partners (such as analytics or advertising providers) to help us understand usage and show relevant content.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 04 */}
        <div className="bg-[#eef2fc] rounded-[32px] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="flex gap-4 sm:gap-6 relative z-10 w-full lg:w-2/3">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black text-lg sm:text-xl shrink-0">
              04
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-[#0B2046] mb-2">Managing Cookies</h2>
              <p className="text-gray-700 text-[13px] sm:text-sm leading-relaxed mb-4">
                You can control or manage cookies through your browser settings. You can choose to:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center gap-2 text-[13px] text-gray-700 font-medium"><span className="text-green-500 text-lg">✅</span> Accept or reject cookies</li>
                <li className="flex items-center gap-2 text-[13px] text-gray-700 font-medium"><span className="text-green-500 text-lg">✅</span> Delete existing cookies</li>
                <li className="flex items-center gap-2 text-[13px] text-gray-700 font-medium"><span className="text-green-500 text-lg">✅</span> Be notified when cookies are set</li>
                <li className="flex items-center gap-2 text-[13px] text-gray-700 font-medium"><span className="text-green-500 text-lg">✅</span> Block certain types of cookies</li>
              </ul>
              <p className="text-gray-600 text-xs leading-relaxed">
                Please note that disabling some cookies may affect the functionality and features of our website.
              </p>
            </div>
          </div>
          <div className="hidden md:flex shrink-0">
            <div className="text-7xl drop-shadow-sm mr-4">⚙️</div>
          </div>
        </div>

        {/* Section 05 */}
        <div className="bg-[#fcf0f7] rounded-[32px] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative overflow-hidden">
          <div className="flex gap-4 sm:gap-6 relative z-10 w-full sm:w-auto">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-black text-lg sm:text-xl shrink-0">
              05
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-[#0B2046] mb-2">Third-Party Cookies</h2>
              <p className="text-gray-700 text-[13px] sm:text-sm leading-relaxed max-w-[540px]">
                We may use third-party services (such as Google Analytics or ad networks) that set their own cookies. These cookies are subject to the privacy policies of those third parties, and we recommend reviewing their policies for more information.
              </p>
            </div>
          </div>
          <div className="hidden sm:block shrink-0 relative z-10">
            <div className="text-6xl drop-shadow-sm mr-4">🔗</div>
          </div>
        </div>

        {/* Section 06 */}
        <div className="bg-[#eef8f5] rounded-[32px] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative overflow-hidden">
          <div className="flex gap-4 sm:gap-6 relative z-10 w-full sm:w-auto">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-black text-lg sm:text-xl shrink-0">
              06
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-[#0B2046] mb-2">Updates to This Cookie Policy</h2>
              <p className="text-gray-700 text-[13px] sm:text-sm leading-relaxed max-w-[540px]">
                We may update this Cookie Policy from time to time to reflect changes in technology, legal requirements, or how we use cookies. Any updates will be posted on this page with a revised effective date.
              </p>
            </div>
          </div>
          <div className="hidden sm:block shrink-0 relative z-10">
            <div className="text-6xl drop-shadow-sm mr-4">🔄</div>
          </div>
        </div>

        {/* Section 07 */}
        <div className="bg-[#ffeef0] rounded-[32px] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative overflow-hidden">
          <div className="flex gap-4 sm:gap-6 relative z-10 w-full sm:w-auto">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center font-black text-lg sm:text-xl shrink-0">
              07
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-[#0B2046] mb-2">Contact Us</h2>
              <p className="text-gray-700 text-[13px] sm:text-sm leading-relaxed max-w-[540px]">
                If you have any questions about our use of cookies, feel free to contact us.
              </p>
            </div>
          </div>
          <div className="hidden sm:block shrink-0 relative z-10">
            <div className="text-6xl drop-shadow-sm mr-4">✉️</div>
          </div>
        </div>

      </div>

      {/* Sidebar (Right) */}
      <div className="w-full lg:w-[340px] shrink-0 flex flex-col gap-6 relative z-10">
        {/* Navigation */}
        <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl shadow-sm">
              🔗
            </div>
            <h2 className="text-xl font-black text-[#0B2046]">Quick Links</h2>
          </div>
          
          <ul className="space-y-1">
            <li>
              <a href="#" className="flex items-center justify-between py-3 border-b border-gray-50 text-[13px] font-bold text-gray-600 hover:text-blue-600 transition-colors group">
                What Are Cookies? <span className="text-gray-300 group-hover:text-blue-400 transition-colors text-lg leading-none">›</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-between py-3 border-b border-gray-50 text-[13px] font-bold text-gray-600 hover:text-blue-600 transition-colors group">
                How We Use Cookies <span className="text-gray-300 group-hover:text-blue-400 transition-colors text-lg leading-none">›</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-between py-3 border-b border-gray-50 text-[13px] font-bold text-gray-600 hover:text-blue-600 transition-colors group">
                Types of Cookies <span className="text-gray-300 group-hover:text-blue-400 transition-colors text-lg leading-none">›</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-between py-3 border-b border-gray-50 text-[13px] font-bold text-gray-600 hover:text-blue-600 transition-colors group">
                Managing Cookies <span className="text-gray-300 group-hover:text-blue-400 transition-colors text-lg leading-none">›</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-between py-3 border-b border-gray-50 text-[13px] font-bold text-gray-600 hover:text-blue-600 transition-colors group">
                Third-Party Cookies <span className="text-gray-300 group-hover:text-blue-400 transition-colors text-lg leading-none">›</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-between py-3 border-b border-gray-50 text-[13px] font-bold text-gray-600 hover:text-blue-600 transition-colors group">
                Updates to This Policy <span className="text-gray-300 group-hover:text-blue-400 transition-colors text-lg leading-none">›</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-between py-3 text-[13px] font-bold text-gray-600 hover:text-blue-600 transition-colors group">
                Contact Us <span className="text-gray-300 group-hover:text-blue-400 transition-colors text-lg leading-none">›</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Have Questions */}
        <div className="bg-[#f4f9ff] rounded-[32px] overflow-hidden border border-blue-50 shadow-sm flex flex-col relative z-20">
          <div className="w-full relative bg-[#e3f0ff]">
            <Image src="/questionaboutourprivacy.png" alt="Have questions" width={400} height={300} className="w-full h-auto object-contain object-bottom" />
          </div>
          <div className="p-8 text-center">
            <h2 className="text-2xl font-black text-[#0B2046] mb-3 leading-tight">Still Have Questions?</h2>
            <p className="text-gray-600 text-[13px] leading-relaxed mb-6 font-medium">
              If you have any questions or concerns about our Cookie Policy, feel free to reach out to us. We're happy to help!
            </p>
            <button className="w-full bg-[#0B2046] hover:bg-[#1a3a6e] text-white font-bold py-4 px-6 rounded-2xl text-sm transition-colors flex items-center justify-center gap-2 shadow-sm">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Contact Us <span className="font-bold">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
