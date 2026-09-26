import Image from "next/image";
import Link from "next/link";

export default function ExperimentsHero() {
  return (
    <>
      {/* Desktop Hero */}
      <section className="relative w-full overflow-hidden hidden md:block pb-12" style={{ minHeight: "560px" }}>
        <Image
          src="/experimentshero.png"
          alt="Experiments Hero"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/30 to-transparent w-[50%]" />
        
        {/* Content */}
        <div className="absolute inset-0 z-10 flex flex-col justify-start pt-[100px] lg:pt-[120px] px-4 sm:px-10 lg:px-16 pb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-sm font-bold text-gray-800 mb-6 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm w-max">
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <span>›</span>
              <span className="text-[#0B2046]">Experiments</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-[#0B2046] leading-[1.1] mb-4">
              Amazing Experiments<br />for Curious Kids
            </h1>
            <p className="text-gray-700 text-sm lg:text-base mb-8 max-w-md font-medium">
              Try fun, safe and easy science experiments at home. Learn how the world works with simple materials and big ideas!
            </p>
            
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-gray-100 transition-transform hover:-translate-y-1 cursor-default">
                <span className="text-xl">🍃</span>
                <span className="text-xs font-bold text-gray-800 leading-tight">Easy to Follow<br/><span className="text-gray-500 font-normal">Instructions</span></span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-gray-100 transition-transform hover:-translate-y-1 cursor-default">
                <span className="text-xl">❤️</span>
                <span className="text-xs font-bold text-gray-800 leading-tight">Safe & Kid<br/><span className="text-gray-500 font-normal">Friendly</span></span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-gray-100 transition-transform hover:-translate-y-1 cursor-default">
                <span className="text-xl">🧺</span>
                <span className="text-xs font-bold text-gray-800 leading-tight">Uses Household<br/><span className="text-gray-500 font-normal">Materials</span></span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-gray-100 transition-transform hover:-translate-y-1 cursor-default">
                <span className="text-xl">⭐</span>
                <span className="text-xs font-bold text-gray-800 leading-tight">Fun &<br/><span className="text-gray-500 font-normal">Educational</span></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Hero */}
      <section className="relative w-full overflow-hidden md:hidden flex flex-col justify-between" style={{ minHeight: "500px", height: "125vw", maxHeight: "600px" }}>
        <Image
          src="/phexperimentshero.png"
          alt="Experiments Hero Mobile"
          fill
          priority
          sizes="100vw"
          className="object-cover object-bottom"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.6) 35%, transparent 65%)",
          }}
        />
        
        <div
          className="relative z-10 flex flex-col justify-start px-5"
          style={{ paddingTop: "60px" }}
        >
          <div className="flex items-center gap-2 text-[10px] sm:text-xs font-bold text-gray-800 mb-4 bg-white/70 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm w-max">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>›</span>
            <span className="text-[#0B2046]">Experiments</span>
          </div>
          
          <h1 className="text-3xl font-black text-[#0B2046] leading-[1.1] mb-3">
            Amazing<br />Experiments<br />for Curious Kids
          </h1>
          <p className="text-gray-700 text-sm leading-relaxed mb-5 max-w-[240px] font-medium">
            Try fun, safe and easy science experiments at home. Learn how the world works with simple materials and big ideas!
          </p>
          
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 bg-gradient-to-r from-white via-white/80 to-transparent rounded-l-full px-3 py-1.5 w-[180px] transition-transform hover:-translate-y-1 active:scale-95 cursor-default">
              <div className="w-5 flex justify-center text-xl">🍃</div>
              <span className="text-[10px] font-bold leading-tight">
                Easy to Follow<br/><span className="text-gray-500 font-normal">Instructions</span>
              </span>
            </div>
            <div className="flex items-center gap-2 bg-gradient-to-r from-white via-white/80 to-transparent rounded-l-full px-3 py-1.5 w-[180px] transition-transform hover:-translate-y-1 active:scale-95 cursor-default">
              <div className="w-5 flex justify-center text-xl">❤️</div>
              <span className="text-[10px] font-bold leading-tight">
                Safe & Kid<br/><span className="text-gray-500 font-normal">Friendly</span>
              </span>
            </div>
            <div className="flex items-center gap-2 bg-gradient-to-r from-white via-white/80 to-transparent rounded-l-full px-3 py-1.5 w-[180px] transition-transform hover:-translate-y-1 active:scale-95 cursor-default">
              <div className="w-5 flex justify-center text-xl">🧺</div>
              <span className="text-[10px] font-bold leading-tight">
                Uses Household<br/><span className="text-gray-500 font-normal">Materials</span>
              </span>
            </div>
            <div className="flex items-center gap-2 bg-gradient-to-r from-white via-white/80 to-transparent rounded-l-full px-3 py-1.5 w-[180px] transition-transform hover:-translate-y-1 active:scale-95 cursor-default">
              <div className="w-5 flex justify-center text-xl">⭐</div>
              <span className="text-[10px] font-bold leading-tight">
                Fun &<br/><span className="text-gray-500 font-normal">Educational</span>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
