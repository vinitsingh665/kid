import Image from "next/image";

export default function GamesHero() {
  return (
    <>
      {/* ═══════════════════════════════════════════════
          MOBILE HERO (visible below lg breakpoint)
          Uses phgamehero.png — portrait 1086×1448
      ══════════════════════════════════════════════ */}
      <section
        className="relative w-full overflow-hidden lg:hidden flex flex-col justify-between"
        style={{ minHeight: "450px", height: "125vw", maxHeight: "600px" }}
        aria-labelledby="games-hero-heading-mobile"
      >
        <Image
          src="/phgamehero.png"
          alt="Kids playing games on KidZoo"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "80% 100%" }}
          sizes="(max-width: 1024px) 100vw, 100vw"
        />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(240,249,255,0.95) 0%, rgba(240,249,255,0.6) 35%, transparent 65%)",
          }}
        />

        <div
          className="relative z-10 flex flex-col justify-start px-5"
          style={{ paddingTop: "80px" }}
        >
          <h1
            id="games-hero-heading-mobile"
            className="text-3xl font-black leading-tight tracking-tight text-[#0f172a] mb-2"
          >
            Fun Games
            <br />
            for Curious Minds
          </h1>
          <p className="text-gray-700 text-sm leading-relaxed mb-5 max-w-[240px] font-medium">
            Play, learn and explore with our collection of exciting games designed for kids of all ages.
          </p>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 bg-gradient-to-r from-white via-white/80 to-transparent rounded-l-full px-3 py-1.5 w-[180px]">
              <div className="w-5 flex justify-center text-blue-500 text-lg">🎮</div>
              <span className="text-[10px] font-bold leading-tight">
                100+<br/><span className="text-gray-500 font-normal">Games</span>
              </span>
            </div>
            <div className="flex items-center gap-2 bg-gradient-to-r from-white via-white/80 to-transparent rounded-l-full px-3 py-1.5 w-[180px]">
              <div className="w-5 flex justify-center text-amber-400 text-lg">⭐</div>
              <span className="text-[10px] font-bold leading-tight">
                100%<br/><span className="text-gray-500 font-normal">Safe & Ad-Light</span>
              </span>
            </div>
            <div className="flex items-center gap-2 bg-gradient-to-r from-white via-white/80 to-transparent rounded-l-full px-3 py-1.5 w-[180px]">
              <div className="w-5 flex justify-center text-pink-400 text-lg">❤️</div>
              <span className="text-[10px] font-bold leading-tight">
                Learn<br/><span className="text-gray-500 font-normal">While You Play</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          DESKTOP HERO (visible from lg breakpoint up)
          Uses gamehero.png — landscape 2079×756
      ══════════════════════════════════════════════ */}
      <section
        className="relative w-full overflow-hidden pb-24 hidden lg:block"
        style={{
          aspectRatio: "2079 / 756",
          maxHeight: "600px",
          minHeight: "400px",
        }}
        aria-labelledby="games-hero-heading"
      >
        <Image
          src="/gamehero.png"
          alt="Kids playing games on KidZoo"
          fill
          priority
          className="object-cover object-top"
          sizes="(max-width: 1024px) 100vw, 100vw"
        />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(240,249,255,0.8) 0%, rgba(240,249,255,0.4) 30%, transparent 60%)",
          }}
        />

        <div
          className="absolute inset-0 z-10 flex items-center"
          style={{ paddingTop: "64px" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <div className="max-w-md lg:max-w-[45%]">
              <h1
                id="games-hero-heading"
                className="text-4xl lg:text-5xl font-black leading-tight tracking-tight text-[#0f172a] mb-4"
              >
                Fun Games
                <br />
                for Curious Minds
              </h1>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-8 max-w-sm font-medium">
                Play, learn and explore with our collection of exciting games designed for kids of all ages.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-3 bg-white rounded-full px-4 py-2 shadow-sm transition-transform hover:-translate-y-1 min-w-[170px]">
                  <div className="w-6 flex justify-center text-blue-500 text-xl">🎮</div>
                  <span className="text-xs font-bold leading-tight">
                    100+<br/><span className="text-gray-500 font-normal">Games</span>
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-full px-4 py-2 shadow-sm transition-transform hover:-translate-y-1 min-w-[170px]">
                  <div className="w-6 flex justify-center text-amber-400 text-xl">⭐</div>
                  <span className="text-xs font-bold leading-tight">
                    100%<br/><span className="text-gray-500 font-normal">Safe & Ad-Light</span>
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-full px-4 py-2 shadow-sm transition-transform hover:-translate-y-1 min-w-[170px]">
                  <div className="w-6 flex justify-center text-pink-400 text-xl">❤️</div>
                  <span className="text-xs font-bold leading-tight">
                    Learn<br/><span className="text-gray-500 font-normal">While You Play</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
