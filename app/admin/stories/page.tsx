import ContentSectionPage from "@/components/admin/ContentSectionPage";

export default function StoriesPage() {
  const items = [
    { title: "The Little Star", desc: "A bedtime story for kids", emoji: "⭐", emojiBg: "bg-yellow-200", category: "Bedtime", catBg: "bg-indigo-50 text-indigo-600", age: "4-8", ageBg: "bg-orange-50 text-orange-600", status: "Published", statusDot: "bg-green-500", views: "1.5K", downloads: "320", updated: "Sep 21, 2025" },
    { title: "The Brave Little Turtle", desc: "A story about courage", emoji: "🐢", emojiBg: "bg-green-200", category: "Adventure", catBg: "bg-blue-50 text-blue-600", age: "3-7", ageBg: "bg-pink-50 text-pink-600", status: "Published", statusDot: "bg-green-500", views: "1.1K", downloads: "280", updated: "Sep 19, 2025" },
    { title: "Magical Rainbow Forest", desc: "A journey through enchanted woods", emoji: "🌈", emojiBg: "bg-rose-100", category: "Fantasy", catBg: "bg-purple-50 text-purple-600", age: "4-8", ageBg: "bg-orange-50 text-orange-600", status: "Published", statusDot: "bg-green-500", views: "920", downloads: "240", updated: "Sep 17, 2025" },
    { title: "The Curious Elephant", desc: "Elephant learns about the world", emoji: "🐘", emojiBg: "bg-gray-200", category: "Educational", catBg: "bg-green-50 text-green-600", age: "3-7", ageBg: "bg-pink-50 text-pink-600", status: "Draft", statusDot: "bg-gray-400", views: "450", downloads: "120", updated: "Sep 15, 2025" },
    { title: "Robot's First Day", desc: "A robot learns to feel", emoji: "🤖", emojiBg: "bg-blue-100", category: "Science", catBg: "bg-blue-50 text-blue-600", age: "6-10", ageBg: "bg-purple-50 text-purple-600", status: "Published", statusDot: "bg-green-500", views: "780", downloads: "195", updated: "Sep 14, 2025" },
  ];

  return (
    <ContentSectionPage
      title="Stories"
      subtitle="Manage all children's stories and tales."
      icon="📚"
      typeLabel="Story"
      typeBg="bg-purple-50 text-purple-600"
      totalCount={18}
      publishedCount={15}
      draftCount={3}
      items={items}
      accentColor="bg-purple-100"
    />
  );
}
