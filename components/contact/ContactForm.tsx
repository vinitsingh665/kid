export default function ContactForm() {
  return (
    <div className="w-full lg:w-[55%] shrink-0">
      <div className="bg-white rounded-[32px] p-6 sm:p-8 lg:p-10 shadow-sm border border-gray-100 h-full">
        <div className="flex items-center gap-4 mb-2">
          <div className="w-12 h-12 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-blue-500">
              <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0B2046] leading-tight">Send Us a Message</h2>
        </div>
        <p className="text-gray-500 text-sm mb-8 ml-16">Fill out the form below and we'll get back to you as soon as possible.</p>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-bold text-[#0B2046] mb-2">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-shadow"
            />
          </div>
          
          <div>
            <label className="block text-sm font-bold text-[#0B2046] mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-shadow"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-[#0B2046] mb-2">
              Subject <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select defaultValue="" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-shadow appearance-none text-gray-500">
                <option value="" disabled>Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="feedback">Feedback & Suggestions</option>
                <option value="partnership">Partnerships</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-[#0B2046] mb-2">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              placeholder="Tell us how we can help..."
              rows={5}
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-shadow resize-none"
            />
          </div>

          <button type="button" className="w-full bg-[#0B2046] hover:bg-[#1a3a6e] text-white font-bold py-4 px-6 rounded-xl text-sm transition-colors flex items-center justify-center gap-2 mt-2 shadow-md">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
              <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Send Message <span>→</span>
          </button>
        </form>
      </div>
    </div>
  );
}
