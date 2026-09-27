import Image from "next/image";

export default function DisclaimerContent() {
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
              <h2 className="text-lg sm:text-xl font-black text-[#0B2046] mb-2">General Information</h2>
              <p className="text-gray-700 text-[13px] sm:text-sm leading-relaxed max-w-[540px]">
                The information provided on Kidzoo (including games, printables, articles, activities, and other content) is for general educational, entertainment, and informational purposes only. While we strive to provide accurate, helpful, and updated content, we make no warranties or guarantees of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the content.
              </p>
            </div>
          </div>
          <div className="hidden sm:block shrink-0 relative z-10">
            <div className="text-6xl drop-shadow-sm mr-4">📝</div>
          </div>
        </div>

        {/* Section 02 */}
        <div className="bg-[#fff0f5] rounded-[32px] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative overflow-hidden">
          <div className="flex gap-4 sm:gap-6 relative z-10 w-full sm:w-auto">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center font-black text-lg sm:text-xl shrink-0">
              02
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-[#0B2046] mb-2">Not Professional Advice</h2>
              <p className="text-gray-700 text-[13px] sm:text-sm leading-relaxed max-w-[540px]">
                The content on Kidzoo is not intended to be a substitute for professional advice, including but not limited to educational, medical, psychological, or parenting advice. Always seek the guidance of a qualified professional for any concerns related to your child's health, development, or well-being.
              </p>
            </div>
          </div>
          <div className="hidden sm:block shrink-0 relative z-10">
            <div className="text-6xl drop-shadow-sm mr-4">💖</div>
          </div>
        </div>

        {/* Section 03 */}
        <div className="bg-[#fff9e6] rounded-[32px] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative overflow-hidden">
          <div className="flex gap-4 sm:gap-6 relative z-10 w-full sm:w-auto">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-amber-100 text-amber-500 flex items-center justify-center font-black text-lg sm:text-xl shrink-0">
              03
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-[#0B2046] mb-2">Use at Your Own Risk</h2>
              <p className="text-gray-700 text-[13px] sm:text-sm leading-relaxed max-w-[540px]">
                You use Kidzoo and its content at your own risk. We are not responsible for any losses, injuries, or damages arising from the use of our website, games, printables, or any other resources provided on this site.
              </p>
            </div>
          </div>
          <div className="hidden sm:block shrink-0 relative z-10">
            <div className="text-6xl drop-shadow-sm mr-4">⚠️</div>
          </div>
        </div>

        {/* Section 04 */}
        <div className="bg-[#eef8f5] rounded-[32px] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative overflow-hidden">
          <div className="flex gap-4 sm:gap-6 relative z-10 w-full sm:w-auto">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-black text-lg sm:text-xl shrink-0">
              04
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-[#0B2046] mb-2">External Links</h2>
              <p className="text-gray-700 text-[13px] sm:text-sm leading-relaxed max-w-[540px]">
                Our website may contain links to third-party websites (such as educational tools, product recommendations, or external resources) for your convenience. We do not control and are not responsible for the content, privacy practices, or policies of any third-party websites. Using such links is at your own discretion.
              </p>
            </div>
          </div>
          <div className="hidden sm:block shrink-0 relative z-10">
            <div className="text-6xl drop-shadow-sm mr-4">🔗</div>
          </div>
        </div>

        {/* Section 05 */}
        <div className="bg-[#eef2fc] rounded-[32px] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative overflow-hidden">
          <div className="flex gap-4 sm:gap-6 relative z-10 w-full sm:w-auto">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black text-lg sm:text-xl shrink-0">
              05
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-[#0B2046] mb-2">No Guarantees</h2>
              <p className="text-gray-700 text-[13px] sm:text-sm leading-relaxed max-w-[540px]">
                We do not guarantee that our website will always be available, error-free, secure, or free from viruses or other harmful components. We make no representations or warranties about the results that may be achieved by using our website or its content.
              </p>
            </div>
          </div>
          <div className="hidden sm:block shrink-0 relative z-10">
            <div className="text-6xl drop-shadow-sm mr-4">🛡️</div>
          </div>
        </div>

        {/* Section 06 */}
        <div className="bg-[#f0f7ff] rounded-[32px] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative overflow-hidden">
          <div className="flex gap-4 sm:gap-6 relative z-10 w-full sm:w-auto">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black text-lg sm:text-xl shrink-0">
              06
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-[#0B2046] mb-2">Children's Safety & Supervision</h2>
              <p className="text-gray-700 text-[13px] sm:text-sm leading-relaxed max-w-[540px]">
                While we aim to create a safe and child-friendly environment, we cannot guarantee that our website will be completely free from inappropriate content or unwanted interactions. We encourage parents and guardians to supervise their children's online activities and use parental controls where appropriate.
              </p>
            </div>
          </div>
          <div className="hidden sm:block shrink-0 relative z-10">
            <div className="text-6xl drop-shadow-sm mr-4">👥</div>
          </div>
        </div>

        {/* Section 07 */}
        <div className="bg-[#ffedf1] rounded-[32px] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative overflow-hidden">
          <div className="flex gap-4 sm:gap-6 relative z-10 w-full sm:w-auto">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center font-black text-lg sm:text-xl shrink-0">
              07
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-[#0B2046] mb-2">Changes to This Disclaimer</h2>
              <p className="text-gray-700 text-[13px] sm:text-sm leading-relaxed max-w-[540px]">
                We may update this Disclaimer from time to time. Any changes will be posted on this page with a revised effective date. Your continued use of the website means you accept the updated disclaimer.
              </p>
            </div>
          </div>
          <div className="hidden sm:block shrink-0 relative z-10">
            <div className="text-6xl drop-shadow-sm mr-4">🔄</div>
          </div>
        </div>

        {/* Section 08 */}
        <div className="bg-[#ffeef0] rounded-[32px] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative overflow-hidden">
          <div className="flex gap-4 sm:gap-6 relative z-10 w-full sm:w-auto">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center font-black text-lg sm:text-xl shrink-0">
              08
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-[#0B2046] mb-2">Contact Us</h2>
              <p className="text-gray-700 text-[13px] sm:text-sm leading-relaxed max-w-[540px]">
                If you have any questions about this Disclaimer, please contact us.
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
                General Information <span className="text-gray-300 group-hover:text-blue-400 transition-colors text-lg leading-none">›</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-between py-3 border-b border-gray-50 text-[13px] font-bold text-gray-600 hover:text-blue-600 transition-colors group">
                Not Professional Advice <span className="text-gray-300 group-hover:text-blue-400 transition-colors text-lg leading-none">›</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-between py-3 border-b border-gray-50 text-[13px] font-bold text-gray-600 hover:text-blue-600 transition-colors group">
                Use at Your Own Risk <span className="text-gray-300 group-hover:text-blue-400 transition-colors text-lg leading-none">›</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-between py-3 border-b border-gray-50 text-[13px] font-bold text-gray-600 hover:text-blue-600 transition-colors group">
                External Links <span className="text-gray-300 group-hover:text-blue-400 transition-colors text-lg leading-none">›</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-between py-3 border-b border-gray-50 text-[13px] font-bold text-gray-600 hover:text-blue-600 transition-colors group">
                No Guarantees <span className="text-gray-300 group-hover:text-blue-400 transition-colors text-lg leading-none">›</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-between py-3 border-b border-gray-50 text-[13px] font-bold text-gray-600 hover:text-blue-600 transition-colors group">
                Children's Safety <span className="text-gray-300 group-hover:text-blue-400 transition-colors text-lg leading-none">›</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-between py-3 border-b border-gray-50 text-[13px] font-bold text-gray-600 hover:text-blue-600 transition-colors group">
                Changes to Disclaimer <span className="text-gray-300 group-hover:text-blue-400 transition-colors text-lg leading-none">›</span>
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
              If you have any questions or concerns about this Disclaimer, feel free to reach out to us. We're happy to help!
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
