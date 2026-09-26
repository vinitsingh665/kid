export default function ParentingNewsletter() {
  return (
    <div className="mt-12 mb-4 w-full">
      {/* Mobile Newsletter */}
      <div
        className="md:hidden rounded-[28px] overflow-hidden p-6 text-center"
        style={{ background: "linear-gradient(135deg, #fdf4ff 0%, #e0f2fe 100%)" }}
      >
        <div className="text-4xl mb-3">👨‍👩‍👧‍👦</div>
        <h2 className="text-2xl font-black text-[#0B2046] mb-2 leading-tight">
          Parenting is a Journey,<br />Not a Destination
        </h2>
        <p className="text-gray-600 text-sm mb-5 leading-relaxed">
          Get expert tips, activity ideas and parenting resources delivered to your inbox.
        </p>
        <div className="flex flex-col gap-3">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full px-4 py-3 rounded-full border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300 bg-white"
          />
          <button className="w-full bg-[#0B2046] hover:bg-[#1a3a6e] text-white font-bold py-3 rounded-full text-sm transition-colors">
            Subscribe
          </button>
        </div>
      </div>

      {/* Desktop Newsletter */}
      <div
        className="hidden md:flex items-center gap-8 rounded-[32px] overflow-hidden px-8 py-8 lg:px-12"
        style={{ background: "linear-gradient(135deg, #fdf4ff 0%, #e0f2fe 100%)" }}
      >
        <div className="text-6xl shrink-0">👨‍👩‍👧‍👦</div>
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl lg:text-3xl font-black text-[#0B2046] mb-1 leading-tight">
            Parenting is a Journey, Not a Destination
          </h2>
          <p className="text-gray-600 text-sm">
            Get expert tips, activity ideas and parenting resources delivered to your inbox.
          </p>
        </div>
        <div className="flex gap-3 shrink-0 items-center">
          <input
            type="email"
            placeholder="Enter your email address"
            className="px-5 py-3 rounded-full border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300 bg-white w-64"
          />
          <button className="bg-[#0B2046] hover:bg-[#1a3a6e] text-white font-bold px-6 py-3 rounded-full text-sm transition-colors whitespace-nowrap">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
