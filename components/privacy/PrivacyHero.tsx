import Image from "next/image";
import Link from "next/link";

export default function PrivacyHero() {
  return (
    <>
      {/* Desktop Hero */}
      <section className="relative w-full overflow-hidden hidden md:block" style={{ minHeight: "480px" }}>
        <Image
          src="/privacypchero.png"
          alt="Privacy Policy Hero"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent w-[65%]" />

        <div className="absolute inset-0 z-10 flex flex-col justify-start pt-[100px] lg:pt-[120px] px-4 sm:px-10 lg:px-16 pb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-sm font-bold text-gray-800 mb-6 w-max">
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <span>›</span>
              <span className="text-[#0B2046]">Privacy Policy</span>
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-[#0B2046] leading-[1.1] mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-800 text-sm lg:text-base mb-8 max-w-md font-medium leading-relaxed">
              Your child's privacy matters to us. Learn how we collect, use, and protect information to keep Kidzoo a safe and trusted place for every family.
            </p>
          </div>
        </div>
      </section>

      {/* Mobile Hero */}
      <section className="relative w-full overflow-hidden md:hidden flex flex-col justify-start" style={{ minHeight: "450px", height: "120vw", maxHeight: "600px" }}>
        <Image
          src="/phprivacyhero.png"
          alt="Privacy Policy Hero Mobile"
          fill
          priority
          sizes="100vw"
          className="object-cover object-bottom"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.8) 40%, transparent 75%)",
          }}
        />

        <div className="relative z-10 flex flex-col justify-start px-5" style={{ paddingTop: "70px" }}>
          <div className="flex items-center gap-2 text-[10px] sm:text-xs font-bold text-gray-800 mb-4 w-max">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>›</span>
            <span className="text-[#0B2046]">Privacy Policy</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black leading-tight tracking-tight text-[#0B2046] mb-3">
            Privacy Policy
          </h1>

          <p className="text-gray-800 text-sm leading-relaxed mb-5 max-w-[280px] font-medium">
            Your child's privacy matters to us. Learn how we collect, use, and protect information to keep Kidzoo a safe and trusted place for every family.
          </p>
        </div>
      </section>
    </>
  );
}
