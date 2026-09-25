const ageGroups = [
  {
    id: "age-3-5",
    range: "3–5 Years",
    description: "Early learning, coloring, simple games",
    emoji: "🦁",
    bg: "#FFF3EE",
    emojiColor: "#FF6B35",
    arrowBg: "#FF6B35",
    border: "#FFD4C2",
  },
  {
    id: "age-6-8",
    range: "6–8 Years",
    description: "Math puzzles, fun worksheets",
    emoji: "🐼",
    bg: "#FFFBEB",
    emojiColor: "#F59E0B",
    arrowBg: "#F59E0B",
    border: "#FDE68A",
  },
  {
    id: "age-9-12",
    range: "9–12 Years",
    description: "Quizzes, science, creative activities",
    emoji: "🦉",
    bg: "#EFF6FF",
    emojiColor: "#60A5FA",
    arrowBg: "#60A5FA",
    border: "#BFDBFE",
  },
  {
    id: "age-parents",
    range: "For Parents",
    description: "Tips, guides and resources",
    emoji: "🌸",
    bg: "#F5F0FF",
    emojiColor: "#A855F7",
    arrowBg: "#A855F7",
    border: "#DDD6FE",
  },
];

export default function AgeGroupsSection() {
  return (
    <section id="age-groups" className="py-12 bg-gray-50" aria-labelledby="age-groups-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-7">
          <h2 id="age-groups-heading" className="section-title">
            Activities for Every Age
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Find the perfect activities for your child&apos;s learning stage.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {ageGroups.map((group) => (
            <a
              key={group.id}
              id={group.id}
              href="#"
              className="group rounded-2xl p-5 flex flex-col justify-between min-h-[160px] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
              style={{
                background: group.bg,
                border: `1.5px solid ${group.border}`,
                textDecoration: "none",
              }}
            >
              <div>
                <p className="font-800 text-gray-900 text-base leading-tight">{group.range}</p>
                <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">{group.description}</p>
              </div>
              <div className="flex items-end justify-between mt-4">
                {/* Character emoji */}
                <span className="text-4xl transition-transform duration-300 group-hover:scale-110">
                  {group.emoji}
                </span>
                {/* Arrow button */}
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                  style={{ background: group.arrowBg }}
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
