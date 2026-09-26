import Image from "next/image";

export default function SafetyContent() {
  return (
    <div className="w-full space-y-12">
      {/* A Safe, Positive and Trusted Learning Space */}
      <section className="bg-[#f0faeb] rounded-3xl p-6 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4 shadow-sm">
        {/* Left Column: Text */}
        <div className="flex-1 lg:max-w-[340px]">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold mb-4">
            <span className="text-sm">✅</span> OUR PROMISE
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0B2046] leading-tight mb-4">
            A Safe, Positive and<br />Trusted Learning Space
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-6 font-medium">
            We are committed to providing a secure, child-friendly and supportive environment where kids can explore, learn and grow with confidence — while giving parents peace of mind.
          </p>
          <button className="bg-[#0B2046] hover:bg-[#1a3a6e] text-white font-bold py-3 px-6 rounded-full text-sm transition-colors flex items-center gap-2 w-max">
            Learn More <span>→</span>
          </button>
        </div>
        
        {/* Middle Column: Image */}
        <div className="shrink-0 w-full md:w-[60%] lg:w-[350px]">
          <Image src="/safty1.png" alt="Safe Learning Space" width={600} height={400} className="w-full h-auto object-contain drop-shadow-lg lg:scale-110" />
        </div>
        
        {/* Right Column: Checkmarks */}
        <div className="flex-1 flex flex-col gap-4 lg:max-w-[300px]">
          <div className="flex items-center gap-3">
            <div className="bg-green-500 rounded-full w-5 h-5 flex items-center justify-center text-white text-xs shrink-0">✓</div>
            <span className="text-sm font-semibold text-gray-700">Age-appropriate content</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-green-500 rounded-full w-5 h-5 flex items-center justify-center text-white text-xs shrink-0">✓</div>
            <span className="text-sm font-semibold text-gray-700">No harmful or inappropriate material</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-green-500 rounded-full w-5 h-5 flex items-center justify-center text-white text-xs shrink-0">✓</div>
            <span className="text-sm font-semibold text-gray-700">Privacy-focused platform</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-green-500 rounded-full w-5 h-5 flex items-center justify-center text-white text-xs shrink-0">✓</div>
            <span className="text-sm font-semibold text-gray-700">Safe and respectful community</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-green-500 rounded-full w-5 h-5 flex items-center justify-center text-white text-xs shrink-0">✓</div>
            <span className="text-sm font-semibold text-gray-700">Designed for curious young minds</span>
          </div>
        </div>
      </section>

      {/* Child Safety */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="text-3xl text-green-500">🛡️</div>
          <div>
            <h2 className="text-2xl font-black text-[#0B2046] leading-tight">Child Safety</h2>
            <p className="text-gray-500 text-sm">We carefully review all content to make sure it's safe, age-appropriate and beneficial for kids.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-pink-50 rounded-2xl p-6 flex items-start gap-4">
            <div className="text-4xl shrink-0">📋</div>
            <div>
              <h3 className="font-bold text-[#0B2046] mb-1">Age-Appropriate Content</h3>
              <p className="text-sm text-gray-600">All games, stories and resources are curated for different age groups.</p>
            </div>
          </div>
          <div className="bg-orange-50 rounded-2xl p-6 flex items-start gap-4">
            <div className="text-4xl shrink-0">🚫</div>
            <div>
              <h3 className="font-bold text-[#0B2046] mb-1">No Ads for Kids</h3>
              <p className="text-sm text-gray-600">We do not show third-party ads to ensure a distraction-free and safe experience.</p>
            </div>
          </div>
          <div className="bg-blue-50 rounded-2xl p-6 flex items-start gap-4">
            <div className="text-4xl shrink-0">👥</div>
            <div>
              <h3 className="font-bold text-[#0B2046] mb-1">Trusted Content</h3>
              <p className="text-sm text-gray-600">All content is reviewed and created with educational value in mind.</p>
            </div>
          </div>
          <div className="bg-green-50 rounded-2xl p-6 flex items-start gap-4">
            <div className="text-4xl shrink-0">✅</div>
            <div>
              <h3 className="font-bold text-[#0B2046] mb-1">Regular Monitoring</h3>
              <p className="text-sm text-gray-600">We continuously monitor our platform to keep it safe and positive for children.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy & Data Protection */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="text-3xl text-purple-500">🔒</div>
          <div>
            <h2 className="text-2xl font-black text-[#0B2046] leading-tight">Privacy & Data Protection</h2>
            <p className="text-gray-500 text-sm">We respect your privacy and follow strict data protection practices.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-purple-50 rounded-2xl p-6 flex items-start gap-4">
            <div className="text-4xl shrink-0">🗄️</div>
            <div>
              <h3 className="font-bold text-[#0B2046] mb-1">Minimal Data Collection</h3>
              <p className="text-sm text-gray-600">We only collect essential information needed to provide a better experience.</p>
            </div>
          </div>
          <div className="bg-green-50 rounded-2xl p-6 flex items-start gap-4">
            <div className="text-4xl shrink-0">🛡️</div>
            <div>
              <h3 className="font-bold text-[#0B2046] mb-1">Your Data is Secure</h3>
              <p className="text-sm text-gray-600">All data is safely stored and protected using industry-standard security measures.</p>
            </div>
          </div>
          <div className="bg-red-50 rounded-2xl p-6 flex items-start gap-4">
            <div className="text-4xl shrink-0">👁️‍🗨️</div>
            <div>
              <h3 className="font-bold text-[#0B2046] mb-1">No Sharing with Third Parties</h3>
              <p className="text-sm text-gray-600">We do not sell or share your child's personal information.</p>
            </div>
          </div>
          <div className="bg-blue-50 rounded-2xl p-6 flex items-start gap-4">
            <div className="text-4xl shrink-0">📝</div>
            <div>
              <h3 className="font-bold text-[#0B2046] mb-1">Parental Consent</h3>
              <p className="text-sm text-gray-600">We follow child privacy laws and seek parental consent where required.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Parental Controls */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="text-3xl text-blue-500">⚙️</div>
          <div>
            <h2 className="text-2xl font-black text-[#0B2046] leading-tight">Parental Controls</h2>
            <p className="text-gray-500 text-sm">Tools to help you manage your child's experience.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-amber-50 rounded-2xl p-6 flex items-start gap-4">
            <div className="text-4xl shrink-0">⏱️</div>
            <div>
              <h3 className="font-bold text-[#0B2046] mb-1">Set Screen Time</h3>
              <p className="text-sm text-gray-600">Manage how long your child spends on Kidzoo.</p>
            </div>
          </div>
          <div className="bg-cyan-50 rounded-2xl p-6 flex items-start gap-4">
            <div className="text-4xl shrink-0">🎚️</div>
            <div>
              <h3 className="font-bold text-[#0B2046] mb-1">Choose Age Group</h3>
              <p className="text-sm text-gray-600">Filter content based on your child's age.</p>
            </div>
          </div>
          <div className="bg-pink-50 rounded-2xl p-6 flex items-start gap-4">
            <div className="text-4xl shrink-0">🔲</div>
            <div>
              <h3 className="font-bold text-[#0B2046] mb-1">Access Learning Only</h3>
              <p className="text-sm text-gray-600">Enable learning-focused mode for a distraction-free experience.</p>
            </div>
          </div>
          <div className="bg-green-50 rounded-2xl p-6 flex items-start gap-4">
            <div className="text-4xl shrink-0">📊</div>
            <div>
              <h3 className="font-bold text-[#0B2046] mb-1">Monitor Activity</h3>
              <p className="text-sm text-gray-600">Keep track of what your child explores.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Online Safety Tips */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="text-3xl text-yellow-500">💡</div>
          <div>
            <h2 className="text-2xl font-black text-[#0B2046] leading-tight">Online Safety Tips</h2>
            <p className="text-gray-500 text-sm">Simple tips to help kids and parents stay safe online.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-32 bg-gray-100 relative">
               <div className="absolute inset-0 flex items-center justify-center text-4xl">👨‍💻</div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-[#0B2046] text-sm mb-1 leading-tight">Talk About Online Safety</h3>
              <p className="text-xs text-gray-500">Have open conversations about safe internet use.</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-32 bg-gray-100 relative">
               <div className="absolute inset-0 flex items-center justify-center text-4xl">⏱️</div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-[#0B2046] text-sm mb-1 leading-tight">Set Healthy Limits</h3>
              <p className="text-xs text-gray-500">Balance screen time with other activities.</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-32 bg-gray-100 relative">
               <div className="absolute inset-0 flex items-center justify-center text-4xl">✅</div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-[#0B2046] text-sm mb-1 leading-tight">Encourage Questions</h3>
              <p className="text-xs text-gray-500">Let them ask if they feel uncomfortable about anything.</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-32 bg-gray-100 relative">
               <div className="absolute inset-0 flex items-center justify-center text-4xl">🤝</div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-[#0B2046] text-sm mb-1 leading-tight">Explore Together</h3>
              <p className="text-xs text-gray-500">Stay involved and explore content with your child.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs & Contact */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-xl leading-none">?</div>
            <h2 className="text-xl font-black text-[#0B2046] leading-tight">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-3">
            {[
              "Is Kidzoo safe for my child?",
              "What data do you collect?",
              "Do you show ads to kids?",
              "How do you ensure content is age-appropriate?",
              "Can I control what my child sees?"
            ].map((q, i) => (
              <div key={i} className="bg-white rounded-xl p-4 border border-gray-100 flex justify-between items-center cursor-pointer hover:shadow-sm transition-shadow">
                <span className="font-semibold text-sm text-gray-800">{q}</span>
                <span className="text-gray-400">⌄</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#eaf4ff] rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden min-h-[340px]">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-2xl">✉️</div>
              <h2 className="text-xl font-black text-[#0B2046] leading-tight">Still Have Questions?</h2>
            </div>
            <p className="text-gray-700 text-sm mb-6 max-w-[260px]">
              If you have any questions or concerns about safety, privacy or your child's experience, we're here to help.
            </p>
            <button className="bg-[#0B2046] hover:bg-[#1a3a6e] text-white font-bold py-3 px-6 rounded-full text-sm transition-colors flex items-center gap-2 w-max">
              Contact Us <span className="text-xs">→</span>
            </button>
          </div>
          
          <div className="absolute right-0 bottom-0 w-[280px] sm:w-[320px] lg:w-[380px] -mr-4 -mb-2 pointer-events-none">
            <Image src="/questionsafty.png" alt="Questions" width={400} height={300} className="w-full h-auto object-contain object-bottom-right drop-shadow-md" />
          </div>
        </div>
      </section>

    </div>
  );
}
