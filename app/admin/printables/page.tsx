import ContentSectionPage from "@/components/admin/ContentSectionPage";

export default function PrintablesPage() {
  const items = [
    { title: "Animal Coloring Pages", desc: "50+ animal coloring pages", emoji: "🦓", emojiBg: "bg-gray-200", category: "Coloring", catBg: "bg-purple-50 text-purple-600", age: "3-6", ageBg: "bg-orange-50 text-orange-600", status: "Published", statusDot: "bg-green-500", views: "3.1K", downloads: "2.8K", updated: "Sep 27, 2025" },
    { title: "Math Worksheets", desc: "Addition & subtraction", emoji: "🧮", emojiBg: "bg-yellow-200", category: "Math", catBg: "bg-blue-50 text-blue-600", age: "6-8", ageBg: "bg-pink-50 text-pink-600", status: "Published", statusDot: "bg-green-500", views: "1.8K", downloads: "1.2K", updated: "Sep 26, 2025" },
    { title: "Shapes Activity Pack", desc: "Learn and trace shapes", emoji: "🔷", emojiBg: "bg-blue-200", category: "Math", catBg: "bg-blue-50 text-blue-600", age: "3-6", ageBg: "bg-orange-50 text-orange-600", status: "Draft", statusDot: "bg-gray-400", views: "350", downloads: "180", updated: "Sep 20, 2025" },
    { title: "Letter Tracing A-Z", desc: "Handwriting practice sheets", emoji: "✏️", emojiBg: "bg-amber-100", category: "English", catBg: "bg-blue-50 text-blue-600", age: "3-6", ageBg: "bg-orange-50 text-orange-600", status: "Published", statusDot: "bg-green-500", views: "2.2K", downloads: "1.9K", updated: "Sep 24, 2025" },
    { title: "Mandala Coloring Kit", desc: "Relaxing patterns for kids", emoji: "🌸", emojiBg: "bg-rose-100", category: "Coloring", catBg: "bg-purple-50 text-purple-600", age: "6-10", ageBg: "bg-pink-50 text-pink-600", status: "Published", statusDot: "bg-green-500", views: "1.5K", downloads: "940", updated: "Sep 21, 2025" },
  ];

  return (
    <ContentSectionPage
      title="Printables"
      subtitle="Manage all printable worksheets, coloring pages and resources."
      icon="📄"
      typeLabel="Printable"
      typeBg="bg-pink-50 text-pink-600"
      totalCount={72}
      publishedCount={68}
      draftCount={4}
      items={items}
      accentColor="bg-pink-100"
    />
  );
}
