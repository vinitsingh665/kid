const printables = [
  {
    id: "printable-animal",
    icon: "🐘",
    title: "Animal Coloring Pages",
    bg: "linear-gradient(135deg, #ffecd2, #fcb69f)",
  },
  {
    id: "printable-alphabet",
    icon: "🔤",
    title: "Alphabet Tracing",
    bg: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
  },
  {
    id: "printable-math",
    icon: "🔢",
    title: "Math Worksheets",
    bg: "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
  },
  {
    id: "printable-maze",
    icon: "🌀",
    title: "Maze Challenges",
    bg: "linear-gradient(135deg, #d4fc79, #96e6a1)",
  },
  {
    id: "printable-wordsearch",
    icon: "🔍",
    title: "Word Search",
    bg: "linear-gradient(135deg, #fbc2eb, #a6c1ee)",
  },
  {
    id: "printable-dot",
    icon: "✏️",
    title: "Dot to Dot",
    bg: "linear-gradient(135deg, #fddb92, #d1fdff)",
  },
];

export default function PrintablesSection() {
  return (
    <section id="printables" className="py-12 bg-white" aria-labelledby="printables-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-7">
          <div>
            <h2 id="printables-heading" className="section-title">
              Popular Printables
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Download and print free worksheets, coloring pages and more.
            </p>
          </div>
          <a
            id="printables-view-all"
            href="#"
            className="text-sm font-700 text-gray-700 hover:text-[#FF6B35] flex items-center gap-1 transition-colors shrink-0"
          >
            View All
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {printables.map((item) => (
            <a
              key={item.id}
              id={item.id}
              href="#"
              className="group rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ textDecoration: "none" }}
            >
              {/* Image area */}
              <div
                className="w-full aspect-square flex items-center justify-center text-5xl"
                style={{ background: item.bg }}
              >
                <span className="transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </span>
              </div>
              {/* Label */}
              <div className="bg-white px-3 py-2.5 flex items-center justify-between">
                <span className="text-xs font-700 text-gray-800 leading-tight">{item.title}</span>
                <svg className="w-3.5 h-3.5 text-gray-400 shrink-0 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
