import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      {/* ═══════════════════════════════════════════════
          MOBILE HERO  (visible below lg breakpoint)
          Uses mobhero.png — portrait 1159×1358
      ══════════════════════════════════════════════ */}
      <section
        id="hero-mobile"
        className="relative w-full overflow-hidden lg:hidden"
        style={{ aspectRatio: "1159 / 1358" }}
        aria-labelledby="hero-heading-mobile"
      >
        {/* Full-bleed mobile image */}
        <Image
          src="/mobhero.png"
          alt="Kids learning and playing with KidZoo on mobile"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />

        {/* Very subtle top gradient — only to help badge/text readability, not fog the image */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,252,235,0.45) 0%, rgba(255,252,235,0.25) 20%, transparent 45%)",
          }}
        />

        {/* Mobile text content — pushed down by navbar height */}
        <div
          className="absolute inset-0 z-10 flex flex-col justify-start px-5"
          style={{ paddingTop: "72px" }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-700 text-[11px] font-bold px-3 py-1.5 rounded-full mb-4 self-start">
            <span>⭐</span>
            <span>A joyful place for young minds</span>
          </div>

          {/* Headline */}
          <h1
            id="hero-heading-mobile"
            className="text-3xl font-black leading-tight tracking-tight text-gray-900 mb-3"
          >
            Learn, Play &amp;
            <br />
            Create with
            <br />
            <span>
              <span className="text-[#FF6B35]">Kid</span>
              <span className="text-[#4ECDC4]">z</span>
              <span className="text-[#A855F7]">oo</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-700 text-sm leading-relaxed mb-6 max-w-[220px]">
            Fun games, printable activities, stories and more — all in one place for curious kids and happy parents.
          </p>

          {/* CTA Buttons — stacked on mobile */}
          <div className="flex flex-col gap-3 items-start">
            <a
              href="#activities"
              id="hero-explore-btn-mobile"
              className="btn-primary text-sm px-6 py-3"
            >
              Explore Activities
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <button id="hero-watch-btn-mobile" className="btn-secondary text-sm px-6 py-3">
              <span className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center shrink-0">
                <svg className="w-3 h-3 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              Watch Video
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          DESKTOP HERO  (visible from lg breakpoint up)
          Uses hero.png — landscape 1983×793
          ⚠️ UNCHANGED from original implementation
      ══════════════════════════════════════════════ */}
      <section
        id="hero"
        className="relative w-full overflow-hidden pb-24 hidden lg:block"
        style={{
          aspectRatio: "1983 / 793",
          maxHeight: "700px",
          minHeight: "400px",
        }}
        aria-labelledby="hero-heading"
      >
        {/* Full-bleed desktop hero image */}
        <Image
          src="/hero.png"
          alt="Kids learning and playing with KidZoo — a child reading with a dog beside a treehouse"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />

        {/* Left text overlay gradient — subtle, not foggy */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(255,252,240,0.78) 0%, rgba(255,252,240,0.55) 25%, rgba(255,252,240,0.15) 45%, transparent 60%)",
          }}
        />

        {/* Text content */}
        <div
          className="absolute inset-0 z-10 flex items-center"
          style={{ paddingTop: "64px" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <div className="max-w-md lg:max-w-[42%]">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-700 text-xs font-bold px-4 py-1.5 rounded-full mb-4">
                <span>⭐</span>
                <span>A joyful place for young minds</span>
              </div>

              {/* Headline */}
              <h1
                id="hero-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-gray-900 mb-3"
              >
                Learn, Play &amp;
                <br />
                Create with
                <br />
                <span>
                  <span className="text-[#FF6B35]">Kid</span>
                  <span className="text-[#4ECDC4]">z</span>
                  <span className="text-[#A855F7]">oo</span>
                </span>
              </h1>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 max-w-xs sm:max-w-sm">
                Fun games, printable activities, stories and more — all in one place for curious kids and happy parents.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a href="#activities" id="hero-explore-btn" className="btn-primary text-sm px-6 py-3">
                  Explore Activities
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <button id="hero-watch-btn" className="btn-secondary text-sm px-6 py-3">
                  <span className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  Watch Video
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
