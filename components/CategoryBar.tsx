/** Inline SVG icons matching the reference illustration style */
function GamepadIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="8" width="24" height="14" rx="7" fill="#6B7280" />
      <rect x="2" y="8" width="24" height="14" rx="7" fill="url(#g1)" />
      {/* D-pad */}
      <rect x="7" y="13.5" width="5" height="2" rx="1" fill="white" opacity="0.9"/>
      <rect x="8.5" y="12" width="2" height="5" rx="1" fill="white" opacity="0.9"/>
      {/* Buttons */}
      <circle cx="19" cy="13" r="1.5" fill="white" opacity="0.9"/>
      <circle cx="22" cy="15.5" r="1.5" fill="white" opacity="0.9"/>
      <circle cx="19" cy="18" r="1.5" fill="white" opacity="0.9"/>
      <circle cx="16" cy="15.5" r="1.5" fill="white" opacity="0.9"/>
      <defs>
        <linearGradient id="g1" x1="2" y1="8" x2="26" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6366F1"/>
          <stop offset="1" stopColor="#8B5CF6"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

function PrinterIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Paper out */}
      <rect x="9" y="4" width="10" height="8" rx="1.5" fill="#FFB3C6"/>
      <rect x="9" y="4" width="10" height="8" rx="1.5" fill="url(#p2)"/>
      {/* Printer body */}
      <rect x="4" y="11" width="20" height="10" rx="2.5" fill="url(#p1)"/>
      {/* Output paper */}
      <rect x="9" y="18" width="10" height="7" rx="1.5" fill="white" opacity="0.95"/>
      <line x1="11" y1="21" x2="17" y2="21" stroke="#FFB3C6" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="11" y1="23" x2="15" y2="23" stroke="#FFB3C6" strokeWidth="1.2" strokeLinecap="round"/>
      {/* Printer light */}
      <circle cx="20" cy="15.5" r="1.5" fill="white" opacity="0.7"/>
      <defs>
        <linearGradient id="p1" x1="4" y1="11" x2="24" y2="21" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F472B6"/>
          <stop offset="1" stopColor="#EC4899"/>
        </linearGradient>
        <linearGradient id="p2" x1="9" y1="4" x2="19" y2="12" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FDE68A"/>
          <stop offset="1" stopColor="#F59E0B"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

function BooksIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Book 3 (back) */}
      <rect x="17" y="6" width="7" height="18" rx="2" fill="#34D399"/>
      {/* Book 2 */}
      <rect x="10" y="8" width="7" height="16" rx="2" fill="#F59E0B"/>
      {/* Book 1 (front) */}
      <rect x="4" y="10" width="7" height="14" rx="2" fill="#6366F1"/>
      {/* Spines */}
      <rect x="4" y="10" width="2" height="14" rx="1" fill="#4F46E5"/>
      <rect x="10" y="8" width="2" height="16" rx="1" fill="#D97706"/>
      <rect x="17" y="6" width="2" height="18" rx="1" fill="#10B981"/>
      {/* Highlight lines */}
      <line x1="8" y1="13" x2="8" y2="21" stroke="white" strokeWidth="0.8" strokeLinecap="round" opacity="0.5"/>
      <line x1="14" y1="11" x2="14" y2="21" stroke="white" strokeWidth="0.8" strokeLinecap="round" opacity="0.5"/>
    </svg>
  );
}

function PaletteIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14" cy="14" r="10" fill="url(#pal1)"/>
      {/* Color dots */}
      <circle cx="9" cy="11" r="2.2" fill="#EF4444"/>
      <circle cx="14" cy="8" r="2.2" fill="#F59E0B"/>
      <circle cx="19" cy="11" r="2.2" fill="#10B981"/>
      <circle cx="19" cy="17" r="2.2" fill="#3B82F6"/>
      <circle cx="9" cy="17" r="2.2" fill="#A855F7"/>
      {/* Thumb hole */}
      <circle cx="17" cy="18" r="3.5" fill="white"/>
      <defs>
        <linearGradient id="pal1" x1="4" y1="4" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FDE68A"/>
          <stop offset="1" stopColor="#FCA5A5"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

function OpenBookIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Left page */}
      <path d="M3 7C3 7 8 7 14 10V23C10 21 3 21 3 21V7Z" fill="url(#ob1)"/>
      {/* Right page */}
      <path d="M25 7C25 7 20 7 14 10V23C18 21 25 21 25 21V7Z" fill="url(#ob2)"/>
      {/* Lines on left */}
      <line x1="6" y1="12" x2="11" y2="12.5" stroke="white" strokeWidth="0.9" strokeLinecap="round" opacity="0.7"/>
      <line x1="6" y1="14.5" x2="11" y2="15" stroke="white" strokeWidth="0.9" strokeLinecap="round" opacity="0.7"/>
      <line x1="6" y1="17" x2="11" y2="17.5" stroke="white" strokeWidth="0.9" strokeLinecap="round" opacity="0.7"/>
      {/* Lines on right */}
      <line x1="22" y1="12" x2="17" y2="12.5" stroke="white" strokeWidth="0.9" strokeLinecap="round" opacity="0.7"/>
      <line x1="22" y1="14.5" x2="17" y2="15" stroke="white" strokeWidth="0.9" strokeLinecap="round" opacity="0.7"/>
      <line x1="22" y1="17" x2="17" y2="17.5" stroke="white" strokeWidth="0.9" strokeLinecap="round" opacity="0.7"/>
      {/* Spine */}
      <line x1="14" y1="10" x2="14" y2="23" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.9"/>
      <defs>
        <linearGradient id="ob1" x1="3" y1="7" x2="14" y2="23" gradientUnits="userSpaceOnUse">
          <stop stopColor="#818CF8"/>
          <stop offset="1" stopColor="#6366F1"/>
        </linearGradient>
        <linearGradient id="ob2" x1="25" y1="7" x2="14" y2="23" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A5B4FC"/>
          <stop offset="1" stopColor="#818CF8"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

function FlaskIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Flask body */}
      <path d="M10 4H18V14L23 22C23 23.1 22.1 24 21 24H7C5.9 24 5 23.1 5 22L10 14V4Z" fill="url(#fl1)"/>
      {/* Liquid */}
      <path d="M7 20C7 20 10 17 14 18C18 19 21 20 21 20L22 22C22 22.6 21.6 23 21 23H7C6.4 23 6 22.6 6 22L7 20Z" fill="#34D399" opacity="0.8"/>
      {/* Bubbles */}
      <circle cx="13" cy="19" r="1" fill="white" opacity="0.7"/>
      <circle cx="16" cy="20.5" r="0.7" fill="white" opacity="0.6"/>
      {/* Top bar */}
      <rect x="8" y="3" width="12" height="2.5" rx="1.25" fill="#14B8A6"/>
      <defs>
        <linearGradient id="fl1" x1="5" y1="4" x2="23" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5EEAD4"/>
          <stop offset="1" stopColor="#0D9488"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14" cy="14" r="11" fill="url(#gl1)"/>
      {/* Continents */}
      <ellipse cx="11" cy="12" rx="4" ry="3" fill="#34D399" opacity="0.8"/>
      <ellipse cx="18" cy="16" rx="3" ry="2.5" fill="#34D399" opacity="0.8"/>
      <ellipse cx="8" cy="18" rx="2" ry="1.5" fill="#34D399" opacity="0.7"/>
      {/* Latitude lines */}
      <ellipse cx="14" cy="14" rx="11" ry="4" stroke="white" strokeWidth="0.8" strokeDasharray="2 2" fill="none" opacity="0.4"/>
      {/* Longitude */}
      <path d="M14 3C14 3 17 8.5 17 14C17 19.5 14 25 14 25" stroke="white" strokeWidth="0.8" fill="none" opacity="0.4"/>
      <path d="M14 3C14 3 11 8.5 11 14C11 19.5 14 25 14 25" stroke="white" strokeWidth="0.8" fill="none" opacity="0.4"/>
      {/* Border */}
      <circle cx="14" cy="14" r="11" stroke="white" strokeWidth="1" strokeOpacity="0.3" fill="none"/>
      <defs>
        <linearGradient id="gl1" x1="3" y1="3" x2="25" y2="25" gradientUnits="userSpaceOnUse">
          <stop stopColor="#60A5FA"/>
          <stop offset="1" stopColor="#2563EB"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

const categories = [
  {
    id: "cat-games",
    icon: <GamepadIcon />,
    label: "Games",
    sub: "Fun & educational",
    bg: "#EEF0FF",
  },
  {
    id: "cat-printables",
    icon: <PrinterIcon />,
    label: "Printables",
    sub: "Worksheets & more",
    bg: "#FFF0F6",
  },
  {
    id: "cat-learn",
    icon: <BooksIcon />,
    label: "Learn",
    sub: "ABC, Maths, Science",
    bg: "#ECFDF5",
  },
  {
    id: "cat-activities",
    icon: <PaletteIcon />,
    label: "Activities",
    sub: "Creative & fun ideas",
    bg: "#FFF7ED",
  },
  {
    id: "cat-stories",
    icon: <OpenBookIcon />,
    label: "Stories",
    sub: "Bedtime & moral",
    bg: "#EEF0FF",
  },
  {
    id: "cat-experiments",
    icon: <FlaskIcon />,
    label: "Experiments",
    sub: "Try at home",
    bg: "#ECFDF5",
  },
  {
    id: "cat-explore",
    icon: <GlobeIcon />,
    label: "Explore",
    sub: "Discover the world",
    bg: "#EFF6FF",
  },
];

export default function CategoryBar() {
  return (
    <section
      id="categories"
      className="relative z-10 -mt-10 pb-2"
      aria-label="Browse categories"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 px-4 sm:px-8 py-5">

          {/* ── Mobile: horizontal scroll row ── */}
          <div
            className="flex lg:hidden gap-4 overflow-x-auto pb-1"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/* Reference mobile shows 6 categories — no "Explore" */}
            {categories.filter((cat) => cat.label !== "Explore").map((cat) => (
              <a
                key={cat.id}
                id={`mob-${cat.id}`}
                href={`#${cat.label.toLowerCase()}`}
                className="group flex flex-col items-center gap-2 cursor-pointer shrink-0"
                style={{ textDecoration: "none", minWidth: "68px" }}
              >
                {/* Icon square */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-active:scale-95"
                  style={{ background: cat.bg }}
                >
                  {cat.icon}
                </div>
                {/* Labels */}
                <div className="text-center">
                  <p className="text-[11px] font-bold text-gray-800 leading-tight whitespace-nowrap">{cat.label}</p>
                  <p className="text-[9px] text-gray-500 leading-tight mt-0.5 whitespace-nowrap">{cat.sub}</p>
                </div>
              </a>
            ))}
          </div>

          {/* ── Desktop: 7-column grid ── */}
          <div className="hidden lg:grid grid-cols-7 gap-2">
            {categories.map((cat) => (
              <a
                key={cat.id}
                id={cat.id}
                href={`#${cat.label.toLowerCase()}`}
                className="group flex flex-col items-center gap-2 cursor-pointer"
                style={{ textDecoration: "none" }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-md"
                  style={{ background: cat.bg }}
                >
                  {cat.icon}
                </div>
                <div className="text-center">
                  <p className="text-xs font-bold text-gray-800 leading-tight">{cat.label}</p>
                  <p className="text-[10px] text-gray-500 leading-tight mt-0.5">{cat.sub}</p>
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

