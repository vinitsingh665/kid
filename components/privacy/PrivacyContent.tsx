import Image from "next/image";

export default function PrivacyContent() {
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
              <h2 className="text-lg sm:text-xl font-black text-[#0B2046] mb-2">Overview</h2>
              <p className="text-gray-700 text-[13px] sm:text-sm leading-relaxed max-w-[540px]">
                At Kidzoo, we are committed to protecting the privacy and safety of children and families. This Privacy Policy explains what information we collect, how we use it, and the steps we take to keep it safe.
              </p>
            </div>
          </div>
          <div className="hidden sm:block shrink-0 relative z-10">
            <div className="text-6xl drop-shadow-sm mr-4">📝</div>
          </div>
        </div>

        {/* Section 02 */}
        <div className="bg-[#fff0f5] rounded-[32px] p-6 sm:p-8">
          <div className="flex gap-4 sm:gap-6 mb-6">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center font-black text-lg sm:text-xl shrink-0">
              02
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-[#0B2046] mb-2">Information We Collect</h2>
              <p className="text-gray-700 text-[13px] sm:text-sm leading-relaxed max-w-[500px]">
                We only collect the information needed to provide and improve our services.
              </p>
            </div>
            <div className="hidden sm:block ml-auto text-6xl drop-shadow-sm mr-4">📊</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/60 rounded-3xl p-5 border border-pink-50 flex flex-col sm:flex-row md:flex-col gap-4">
              <div className="text-4xl">👤</div>
              <div>
                <h3 className="font-bold text-[#0B2046] text-sm mb-1.5">Account Information</h3>
                <p className="text-gray-600 text-xs leading-relaxed">Such as name, email address (parent/guardian) and profile details.</p>
              </div>
            </div>
            <div className="bg-white/60 rounded-3xl p-5 border border-pink-50 flex flex-col sm:flex-row md:flex-col gap-4">
              <div className="text-4xl">📱</div>
              <div>
                <h3 className="font-bold text-[#0B2046] text-sm mb-1.5">Usage Information</h3>
                <p className="text-gray-600 text-xs leading-relaxed">How you and your child use Kidzoo, like pages visited and features used.</p>
              </div>
            </div>
            <div className="bg-white/60 rounded-3xl p-5 border border-pink-50 flex flex-col sm:flex-row md:flex-col gap-4">
              <div className="text-4xl">💬</div>
              <div>
                <h3 className="font-bold text-[#0B2046] text-sm mb-1.5">Information You Share</h3>
                <p className="text-gray-600 text-xs leading-relaxed">Content or feedback you choose to send us (e.g., messages or suggestions).</p>
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
              <h2 className="text-lg sm:text-xl font-black text-[#0B2046] mb-2">How We Use Information</h2>
              <p className="text-gray-700 text-[13px] sm:text-sm leading-relaxed max-w-[500px]">
                We use the information we collect to:
              </p>
            </div>
            <div className="hidden sm:block ml-auto text-6xl drop-shadow-sm mr-4">⭐</div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/60 rounded-3xl p-4 sm:p-6 border border-amber-50 flex flex-col items-center text-center gap-3">
              <div className="text-3xl mb-1">⚙️</div>
              <p className="text-[#0B2046] text-xs sm:text-[13px] font-semibold leading-relaxed">Provide and maintain our services</p>
            </div>
            <div className="bg-white/60 rounded-3xl p-4 sm:p-6 border border-amber-50 flex flex-col items-center text-center gap-3">
              <div className="text-3xl mb-1">⭐</div>
              <p className="text-[#0B2046] text-xs sm:text-[13px] font-semibold leading-relaxed">Improve and personalize your experience</p>
            </div>
            <div className="bg-white/60 rounded-3xl p-4 sm:p-6 border border-amber-50 flex flex-col items-center text-center gap-3">
              <div className="text-3xl mb-1">👥</div>
              <p className="text-[#0B2046] text-xs sm:text-[13px] font-semibold leading-relaxed">Ensure a safe and age-appropriate environment</p>
            </div>
            <div className="bg-white/60 rounded-3xl p-4 sm:p-6 border border-amber-50 flex flex-col items-center text-center gap-3">
              <div className="text-3xl mb-1">❤️</div>
              <p className="text-[#0B2046] text-xs sm:text-[13px] font-semibold leading-relaxed">Communicate with parents/guardians when needed</p>
            </div>
          </div>
        </div>

        {/* Section 04 */}
        <div className="bg-[#eef2fc] rounded-[32px] p-6 sm:p-8">
          <div className="flex gap-4 sm:gap-6 mb-6">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black text-lg sm:text-xl shrink-0">
              04
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-[#0B2046] mb-2">Children's Privacy</h2>
              <p className="text-gray-700 text-[13px] sm:text-sm leading-relaxed max-w-[500px]">
                Kidzoo is designed for children, and we follow strict privacy practices:
              </p>
            </div>
            <div className="hidden sm:block ml-auto text-6xl drop-shadow-sm mr-4">🛡️</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
             <div className="bg-white/60 rounded-3xl p-5 border border-blue-50 flex items-center md:items-start gap-4 md:gap-3">
               <div className="text-3xl shrink-0">✅</div>
               <p className="text-gray-700 font-medium text-xs leading-relaxed">We do not collect unnecessary personal information from children.</p>
             </div>
             <div className="bg-white/60 rounded-3xl p-5 border border-blue-50 flex items-center md:items-start gap-4 md:gap-3">
               <div className="text-3xl shrink-0">🚫</div>
               <p className="text-gray-700 font-medium text-xs leading-relaxed">We do not show third-party ads to kids.</p>
             </div>
             <div className="bg-white/60 rounded-3xl p-5 border border-blue-50 flex items-center md:items-start gap-4 md:gap-3">
               <div className="text-3xl shrink-0">👥</div>
               <p className="text-gray-700 font-medium text-xs leading-relaxed">Parental consent is required for certain features.</p>
             </div>
          </div>
        </div>

        {/* Section 05 */}
        <div className="bg-[#eaf8ee] rounded-[32px] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex gap-4 sm:gap-6">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-black text-lg sm:text-xl shrink-0">
              05
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-[#0B2046] mb-2">Data Security</h2>
              <p className="text-gray-700 text-[13px] sm:text-sm leading-relaxed max-w-[540px]">
                We use industry-standard security measures to protect information from unauthorized access, loss, or misuse.
              </p>
            </div>
          </div>
          <div className="hidden sm:block shrink-0">
            <div className="text-6xl drop-shadow-sm mr-4">🔒</div>
          </div>
        </div>

        {/* Section 06 */}
        <div className="bg-[#fcf0f7] rounded-[32px] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex gap-4 sm:gap-6">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-black text-lg sm:text-xl shrink-0">
              06
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-[#0B2046] mb-2">Cookies & Similar Technologies</h2>
              <p className="text-gray-700 text-[13px] sm:text-sm leading-relaxed max-w-[540px]">
                We use cookies to make Kidzoo work better, understand how it is used, and improve your experience. You can manage cookie settings in your browser.
              </p>
            </div>
          </div>
          <div className="hidden sm:block shrink-0">
            <div className="text-6xl drop-shadow-sm mr-4">🍪</div>
          </div>
        </div>

        {/* Section 07 */}
        <div className="bg-[#ffedf1] rounded-[32px] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex gap-4 sm:gap-6">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center font-black text-lg sm:text-xl shrink-0">
              07
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-[#0B2046] mb-2">Third-Party Services</h2>
              <p className="text-gray-700 text-[13px] sm:text-sm leading-relaxed max-w-[540px]">
                We may use trusted third-party services (such as analytics or cloud services) to help us run Kidzoo. These partners are also required to protect your information.
              </p>
            </div>
          </div>
          <div className="hidden sm:block shrink-0">
            <div className="text-6xl drop-shadow-sm mr-4">🔗</div>
          </div>
        </div>

        {/* Section 08 */}
        <div className="bg-[#fffae8] rounded-[32px] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="flex gap-4 sm:gap-6 relative z-10 w-full lg:w-2/3">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-amber-100 text-amber-500 flex items-center justify-center font-black text-lg sm:text-xl shrink-0">
              08
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-[#0B2046] mb-2">Your Rights</h2>
              <p className="text-gray-700 text-[13px] sm:text-sm leading-relaxed mb-4">
                Depending on your location, you may have the right to:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-[#0B2046] font-medium"><span className="text-green-500 text-lg">✅</span> Access or update your information</li>
                <li className="flex items-center gap-2 text-sm text-[#0B2046] font-medium"><span className="text-green-500 text-lg">✅</span> Request deletion of your information</li>
                <li className="flex items-center gap-2 text-sm text-[#0B2046] font-medium"><span className="text-green-500 text-lg">✅</span> Opt out of certain data uses</li>
                <li className="flex items-center gap-2 text-sm text-[#0B2046] font-medium"><span className="text-green-500 text-lg">✅</span> Contact us with questions at any time</li>
              </ul>
            </div>
          </div>
          <div className="hidden md:flex absolute -right-10 bottom-0 z-0">
            <div className="text-[120px] opacity-70">👥</div>
          </div>
        </div>

        {/* Section 09 */}
        <div className="bg-[#f0f7ff] rounded-[32px] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex gap-4 sm:gap-6">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center font-black text-lg sm:text-xl shrink-0">
              09
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-[#0B2046] mb-2">Updates to This Policy</h2>
              <p className="text-gray-700 text-[13px] sm:text-sm leading-relaxed max-w-[540px]">
                We may update this Privacy Policy from time to time. We will notify you of significant changes on this page. Please check back periodically.
              </p>
            </div>
          </div>
          <div className="hidden sm:block shrink-0">
            <div className="text-6xl drop-shadow-sm mr-4">🔔</div>
          </div>
        </div>

      </div>

      {/* Sidebar */}
      <div className="w-full lg:w-[340px] shrink-0 flex flex-col gap-6 relative z-10">
        {/* Quick Links */}
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
                Overview <span className="text-gray-300 group-hover:text-blue-400 transition-colors text-lg leading-none">›</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-between py-3 border-b border-gray-50 text-[13px] font-bold text-gray-600 hover:text-blue-600 transition-colors group">
                Information We Collect <span className="text-gray-300 group-hover:text-blue-400 transition-colors text-lg leading-none">›</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-between py-3 border-b border-gray-50 text-[13px] font-bold text-gray-600 hover:text-blue-600 transition-colors group">
                How We Use Information <span className="text-gray-300 group-hover:text-blue-400 transition-colors text-lg leading-none">›</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-between py-3 border-b border-gray-50 text-[13px] font-bold text-gray-600 hover:text-blue-600 transition-colors group">
                Children's Privacy <span className="text-gray-300 group-hover:text-blue-400 transition-colors text-lg leading-none">›</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-between py-3 border-b border-gray-50 text-[13px] font-bold text-gray-600 hover:text-blue-600 transition-colors group">
                Data Security <span className="text-gray-300 group-hover:text-blue-400 transition-colors text-lg leading-none">›</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-between py-3 border-b border-gray-50 text-[13px] font-bold text-gray-600 hover:text-blue-600 transition-colors group">
                Cookies & Technologies <span className="text-gray-300 group-hover:text-blue-400 transition-colors text-lg leading-none">›</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-between py-3 border-b border-gray-50 text-[13px] font-bold text-gray-600 hover:text-blue-600 transition-colors group">
                Third-Party Services <span className="text-gray-300 group-hover:text-blue-400 transition-colors text-lg leading-none">›</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-between py-3 border-b border-gray-50 text-[13px] font-bold text-gray-600 hover:text-blue-600 transition-colors group">
                Your Rights <span className="text-gray-300 group-hover:text-blue-400 transition-colors text-lg leading-none">›</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-between py-3 text-[13px] font-bold text-gray-600 hover:text-blue-600 transition-colors group">
                Policy Updates <span className="text-gray-300 group-hover:text-blue-400 transition-colors text-lg leading-none">›</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Questions About Your Privacy */}
        <div className="bg-[#f4f9ff] rounded-[32px] overflow-hidden border border-blue-50 shadow-sm flex flex-col relative z-20 mt-4">
          <div className="w-full relative bg-[#e3f0ff]">
            <Image src="/questionaboutourprivacy.png" alt="Questions about privacy" width={400} height={300} className="w-full h-auto object-contain object-bottom" />
          </div>
          <div className="p-8">
            <h2 className="text-2xl font-black text-[#0B2046] mb-3 leading-tight">Questions About Your Privacy?</h2>
            <p className="text-gray-600 text-[13px] leading-relaxed mb-6 font-medium">
              If you have any questions or concerns about this Privacy Policy, feel free to contact us.
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
