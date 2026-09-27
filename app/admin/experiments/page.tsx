import ContentSectionPage from "@/components/admin/ContentSectionPage";

export default function ExperimentsPage() {
  const items = [
    { title: "Volcano Experiment", desc: "Fun science experiment", emoji: "🌋", emojiBg: "bg-orange-200", category: "Science", catBg: "bg-blue-50 text-blue-600", age: "9-12", ageBg: "bg-purple-50 text-purple-600", status: "Published", statusDot: "bg-green-500", views: "980", downloads: "640", updated: "Sep 22, 2025" },
    { title: "Rainbow Milk Art", desc: "Colors in milk science magic", emoji: "🥛", emojiBg: "bg-gray-100", category: "Chemistry", catBg: "bg-cyan-50 text-cyan-600", age: "6-10", ageBg: "bg-pink-50 text-pink-600", status: "Published", statusDot: "bg-green-500", views: "1.4K", downloads: "520", updated: "Sep 20, 2025" },
    { title: "Invisible Ink Letters", desc: "Write secret messages", emoji: "✉️", emojiBg: "bg-amber-100", category: "Chemistry", catBg: "bg-cyan-50 text-cyan-600", age: "8-12", ageBg: "bg-purple-50 text-purple-600", status: "Published", statusDot: "bg-green-500", views: "1.1K", downloads: "480", updated: "Sep 18, 2025" },
    { title: "Grow Your Own Crystal", desc: "Salt crystal growing guide", emoji: "💎", emojiBg: "bg-blue-100", category: "Physics", catBg: "bg-violet-50 text-violet-600", age: "9-12", ageBg: "bg-purple-50 text-purple-600", status: "Published", statusDot: "bg-green-500", views: "860", downloads: "390", updated: "Sep 15, 2025" },
    { title: "Water Density Tower", desc: "Layer liquids by density", emoji: "🧪", emojiBg: "bg-teal-100", category: "Physics", catBg: "bg-violet-50 text-violet-600", age: "9-12", ageBg: "bg-purple-50 text-purple-600", status: "Draft", statusDot: "bg-gray-400", views: "320", downloads: "90", updated: "Sep 12, 2025" },
  ];

  return (
    <ContentSectionPage
      title="Experiments"
      subtitle="Manage fun science experiments and STEM projects."
      icon="🧪"
      typeLabel="Experiment"
      typeBg="bg-cyan-50 text-cyan-600"
      totalCount={13}
      publishedCount={11}
      draftCount={2}
      items={items}
      accentColor="bg-cyan-100"
    />
  );
}
