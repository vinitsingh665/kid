"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Games", href: "/games" },
  { label: "Printables", href: "/printables" },
  { label: "Learn", href: "/learn" },
  { label: "Stories", href: "/stories" },
  { label: "Activities", href: "/activities" },
  { label: "Experiments", href: "/experiments" },
  { label: "Explore", href: "/explore" },
];

function KidzooIcon({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="20" cy="22" r="13" fill="#FF6B35" />
      <ellipse cx="10" cy="13" rx="5" ry="6" fill="#FF6B35" />
      <ellipse cx="30" cy="13" rx="5" ry="6" fill="#FF6B35" />
      <ellipse cx="10" cy="13" rx="3" ry="4" fill="#FFB89A" />
      <ellipse cx="30" cy="13" rx="3" ry="4" fill="#FFB89A" />
      <ellipse cx="20" cy="24" rx="9" ry="7" fill="#FFB89A" />
      <circle cx="16" cy="20" r="2.2" fill="#1a1a2e" />
      <circle cx="24" cy="20" r="2.2" fill="#1a1a2e" />
      <circle cx="16.8" cy="19.2" r="0.8" fill="white" />
      <circle cx="24.8" cy="19.2" r="0.8" fill="white" />
      <ellipse cx="20" cy="24" rx="2" ry="1.3" fill="#c0392b" />
      <path d="M17 26.5 Q20 29 23 26.5" stroke="#c0392b" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <line x1="7" y1="23" x2="14" y2="24" stroke="#FFD4C2" strokeWidth="0.9" strokeLinecap="round" />
      <line x1="7" y1="25.5" x2="14" y2="25.5" strokeLinecap="round" stroke="#FFD4C2" strokeWidth="0.9" />
      <line x1="33" y1="23" x2="26" y2="24" stroke="#FFD4C2" strokeWidth="0.9" strokeLinecap="round" />
      <line x1="33" y1="25.5" x2="26" y2="25.5" stroke="#FFD4C2" strokeWidth="0.9" strokeLinecap="round" />
    </svg>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname() || "";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled || menuOpen || searchOpen
          ? "rgba(255,255,255,1)"
          : "rgba(255,255,255,0)",
        boxShadow: scrolled ? "0 1px 12px rgba(0,0,0,0.08)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6">
        <div className="flex items-center justify-between h-16 gap-1 xl:gap-4">

          {/* Logo */}
          <a href="/" id="nav-logo" className="flex items-center gap-1.5 shrink-0">
            <KidzooIcon size={34} />
            <span className="text-xl font-black tracking-tight leading-none">
              <span className="text-[#FF6B35]">Kid</span>
              <span className="text-[#4ECDC4]">z</span>
              <span className="text-[#A855F7]">oo</span>
            </span>
          </a>

          {/* Desktop Nav Links — visible only at xl+ */}
          <nav className="hidden xl:flex items-center gap-3.5 flex-1 justify-start ml-4" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-semibold transition-all duration-200 px-3 py-1.5 rounded-full whitespace-nowrap ${
                  pathname.startsWith(link.href)
                    ? "bg-white text-[#FF6B35] shadow-sm border border-gray-100"
                    : "text-gray-800 hover:text-[#FF6B35] hover:bg-white/80"
                }`}
                id={`nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right — visible only at xl+ */}
          <div className="hidden xl:flex items-center gap-3 shrink-0">
            <div className="relative">
              <input
                type="text"
                id="nav-search"
                placeholder="Search games, worksheets..."
                className="w-56 pl-4 pr-9 py-2 text-sm bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 focus:outline-none focus:border-[#4ECDC4] focus:bg-white transition-all duration-200 placeholder:text-gray-400"
              />
              <button className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#FF6B35] transition-colors" aria-label="Search" id="nav-search-btn">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
            <button id="nav-signin" className="text-sm font-bold text-gray-800 hover:text-[#FF6B35] bg-white border border-gray-200 shadow-sm px-4 py-2 rounded-full transition-colors whitespace-nowrap">
              Sign In
            </button>
            <button id="nav-get-started" className="btn-primary text-sm px-5 py-2 whitespace-nowrap">
              Get Started
            </button>
          </div>

          {/* Mobile/Tablet Actions — visible below xl */}
          <div className="flex xl:hidden items-center gap-2">
            <button id="mobile-search-btn" onClick={() => setSearchOpen(!searchOpen)} className="p-2 rounded-full hover:bg-black/10 transition-colors" aria-label="Toggle search">
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button id="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)} className="p-2 rounded-full hover:bg-black/10 transition-colors" aria-label="Toggle menu">
              {menuOpen
                ? <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                : <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              }
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        {searchOpen && (
          <div className="xl:hidden pb-3 bg-white px-2 rounded-b-2xl">
            <div className="relative">
              <input id="mobile-search-input" type="text" placeholder="Search games, worksheets..." className="w-full pl-4 pr-10 py-2.5 text-sm bg-gray-50 rounded-full border border-gray-200 focus:outline-none focus:border-[#4ECDC4]" />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" aria-label="Search">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </button>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="xl:hidden pb-4 pt-3 bg-white rounded-b-2xl border-t border-gray-100" aria-label="Mobile navigation">
            <div className="flex flex-col gap-0.5">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} id={`mobile-nav-${link.label.toLowerCase()}`}
                  className={`px-3 py-2.5 text-sm font-semibold rounded-lg transition-colors ${
                    pathname.startsWith(link.href)
                      ? "text-[#FF6B35] bg-orange-50"
                      : "text-gray-700 hover:text-[#FF6B35] hover:bg-orange-50"
                  }`}
                  onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              ))}
              <div className="flex gap-3 mt-3 px-3">
                <button className="flex-1 py-2.5 rounded-full border-2 border-gray-200 text-sm font-bold text-gray-700 hover:border-[#FF6B35] hover:text-[#FF6B35] transition-colors">Sign In</button>
                <button className="flex-1 btn-primary text-sm py-2.5">Get Started</button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
