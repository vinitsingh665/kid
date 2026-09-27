import ContentSectionPage from "@/components/admin/ContentSectionPage";

export default function LearningPage() {
  const items = [
    { title: "Alphabet Tracing", desc: "Letters A to Z with guides", emoji: "Aa", emojiBg: "bg-white border border-gray-200 font-serif text-gray-800", category: "English", catBg: "bg-blue-50 text-blue-600", age: "3-6", ageBg: "bg-orange-50 text-orange-600", status: "Published", statusDot: "bg-green-500", views: "3.6K", downloads: "2.1K", updated: "Sep 24, 2025" },
    { title: "Solar System Facts", desc: "Discover the planets", emoji: "🪐", emojiBg: "bg-indigo-100", category: "Science", catBg: "bg-blue-50 text-blue-600", age: "8-12", ageBg: "bg-purple-50 text-purple-600", status: "Published", statusDot: "bg-green-500", views: "2.1K", downloads: "780", updated: "Sep 23, 2025" },
    { title: "Number Recognition", desc: "Learn numbers 1–20", emoji: "🔢", emojiBg: "bg-green-100", category: "Math", catBg: "bg-purple-50 text-purple-600", age: "2-5", ageBg: "bg-pink-50 text-pink-600", status: "Published", statusDot: "bg-green-500", views: "1.7K", downloads: "1.3K", updated: "Sep 21, 2025" },
    { title: "Colors & Shapes", desc: "Identify basic shapes", emoji: "🎨", emojiBg: "bg-pink-100", category: "Basics", catBg: "bg-amber-50 text-amber-600", age: "2-4", ageBg: "bg-pink-50 text-pink-600", status: "Published", statusDot: "bg-green-500", views: "1.4K", downloads: "920", updated: "Sep 19, 2025" },
    { title: "World Maps Guide", desc: "Learn about countries", emoji: "🌍", emojiBg: "bg-blue-100", category: "Geography", catBg: "bg-green-50 text-green-600", age: "9-12", ageBg: "bg-purple-50 text-purple-600", status: "Draft", statusDot: "bg-gray-400", views: "640", downloads: "210", updated: "Sep 17, 2025" },
  ];

  return (
    <ContentSectionPage
      title="Learning Resources"
      subtitle="Manage educational content and guided learning modules."
      icon="📖"
      typeLabel="Learning Resource"
      typeBg="bg-green-50 text-green-600"
      totalCount={45}
      publishedCount={40}
      draftCount={5}
      items={items}
      accentColor="bg-green-100"
    />
  );
}
