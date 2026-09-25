interface ActivityCardProps {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  gradient: string;
  accentColor: string;
}

function ActivityCard({ id, icon, title, subtitle, gradient, accentColor }: ActivityCardProps) {
  return (
    <a
      id={id}
      href="#"
      className="group relative rounded-2xl overflow-hidden flex-1 min-w-[160px] cursor-pointer"
      style={{ textDecoration: "none" }}
    >
      {/* Card illustration area */}
      <div
        className="w-full aspect-[4/3] flex items-center justify-center relative overflow-hidden"
        style={{ background: gradient }}
      >
        <span className="text-6xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
          {icon}
        </span>
        {/* Decorative circles */}
        <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full opacity-20 bg-white" />
        <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full opacity-15 bg-white" />
      </div>
      {/* Card footer */}
      <div className="bg-white px-4 py-3 flex items-center justify-between">
        <div>
          <p className="font-800 text-gray-900 text-sm">{title}</p>
          <p className="text-xs text-gray-500">{subtitle}</p>
        </div>
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-110"
          style={{ background: accentColor }}
        >
          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </a>
  );
}

const activities = [
  {
    id: "activity-dino",
    icon: "🦕",
    title: "Dinosaur Quiz",
    subtitle: "Test your dino knowledge",
    gradient: "linear-gradient(135deg, #a8e063, #56ab2f)",
    accentColor: "#56ab2f",
  },
  {
    id: "activity-coloring",
    icon: "🎨",
    title: "Coloring Pages",
    subtitle: "100+ printable designs",
    gradient: "linear-gradient(135deg, #ffecd2, #fcb69f)",
    accentColor: "#fcb69f",
  },
  {
    id: "activity-math",
    icon: "🔢",
    title: "Math Games",
    subtitle: "Practice while you play",
    gradient: "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
    accentColor: "#60A5FA",
  },
  {
    id: "activity-space",
    icon: "🚀",
    title: "Space Adventure",
    subtitle: "Explore the universe",
    gradient: "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)",
    accentColor: "#A855F7",
  },
];

export default function WhatsNewSection() {
  return (
    <section id="whats-fun" className="py-12 bg-white" aria-labelledby="whats-fun-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 id="whats-fun-heading" className="section-title flex items-center gap-2">
              What&apos;s Fun Today? <span className="text-yellow-400">✨</span>
            </h2>
            <p className="text-gray-500 text-sm mt-1">Handpicked activities to keep kids curious and happy.</p>
          </div>
          <a
            id="whats-fun-view-all"
            href="#"
            className="text-sm font-700 text-gray-700 hover:text-[#FF6B35] flex items-center gap-1 transition-colors shrink-0"
          >
            View All
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Cards */}
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
          {activities.map((act) => (
            <ActivityCard key={act.id} {...act} />
          ))}
        </div>
      </div>
    </section>
  );
}
