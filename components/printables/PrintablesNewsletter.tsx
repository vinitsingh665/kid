export default function PrintablesNewsletter() {
  return (
    <div className="mt-12 mb-4 w-full">
      {/* Mobile Newsletter */}
      <div
        style={{
          background: "linear-gradient(135deg, #fdf2f8 0%, #f3e8ff 100%)",
          borderRadius: "24px",
          padding: "32px 20px",
          border: "1px solid #fbcfe8",
        }}
        className="md:hidden"
      >
        <div
          style={{
            width: "64px",
            height: "64px",
            background: "white",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "28px",
            margin: "0 auto 16px auto",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          🎁
        </div>
        <h2
          style={{
            fontSize: "22px",
            fontWeight: 900,
            color: "#0B2046",
            textAlign: "center",
            marginBottom: "10px",
            lineHeight: "1.3",
            fontFamily: "inherit",
          }}
        >
          Get 20 Free Printables!
        </h2>
        <p
          style={{
            fontSize: "14px",
            color: "#4B5563",
            textAlign: "center",
            lineHeight: "1.6",
            marginBottom: "24px",
            maxWidth: "340px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Join thousands of parents and get a free activity pack in your inbox.
        </p>
        <input
          type="email"
          placeholder="Enter your email address"
          style={{
            display: "block",
            width: "100%",
            padding: "13px 16px",
            borderRadius: "12px",
            border: "1px solid #e5e7eb",
            fontSize: "14px",
            color: "#111827",
            background: "white",
            marginBottom: "12px",
            boxSizing: "border-box",
            outline: "none",
            boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
          }}
        />
        <button
          style={{
            display: "block",
            width: "100%",
            background: "#0B2046",
            color: "white",
            fontWeight: 700,
            fontSize: "15px",
            padding: "13px 24px",
            borderRadius: "12px",
            border: "none",
            cursor: "pointer",
            fontFamily: "inherit",
            boxSizing: "border-box",
          }}
        >
          Subscribe
        </button>
      </div>

      {/* Desktop Newsletter */}
      <section className="hidden md:flex bg-gradient-to-r from-pink-50 to-purple-50 rounded-[32px] p-8 items-center justify-between gap-6 shadow-sm border border-pink-100">
        <div className="flex items-start gap-6 text-left w-full md:w-auto">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0 text-4xl">
            🎁
          </div>
          <div>
            <h2 className="text-2xl font-black text-[#0B2046] mb-1">Get 20 Free Printables!</h2>
            <p className="text-gray-600 text-sm max-w-md">Join thousands of parents and get a free activity pack in your inbox.</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 w-auto shrink-0">
           <input type="email" placeholder="Enter your email address" className="w-[280px] px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500 shadow-sm text-sm" />
           <button className="bg-[#0B2046] text-white font-bold px-8 py-3.5 rounded-xl hover:bg-blue-900 transition-colors shadow-sm text-sm whitespace-nowrap">
             Subscribe
           </button>
        </div>
      </section>
    </div>
  );
}
