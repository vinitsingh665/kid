import ContentSectionPage from "@/components/admin/ContentSectionPage";

export default function GamesPage() {
  const items = [
    { title: "Dinosaur Quiz", desc: "Fun quiz about dinosaurs", emoji: "🦖", emojiBg: "bg-green-200", category: "Animals", catBg: "bg-green-50 text-green-600", age: "6-8", ageBg: "bg-pink-50 text-pink-600", status: "Published", statusDot: "bg-green-500", views: "2.4K", downloads: "892", updated: "Sep 28, 2025" },
    { title: "Math Challenge", desc: "Race against the clock", emoji: "🔢", emojiBg: "bg-purple-200", category: "Math", catBg: "bg-purple-50 text-purple-600", age: "6-10", ageBg: "bg-orange-50 text-orange-600", status: "Published", statusDot: "bg-green-500", views: "1.9K", downloads: "654", updated: "Sep 26, 2025" },
    { title: "Ocean Animals Quiz", desc: "Test your knowledge", emoji: "🐋", emojiBg: "bg-blue-200", category: "Animals", catBg: "bg-green-50 text-green-600", age: "6-10", ageBg: "bg-orange-50 text-orange-600", status: "Published", statusDot: "bg-green-500", views: "1.2K", downloads: "860", updated: "Sep 23, 2025" },
    { title: "Space Adventure", desc: "Explore the solar system", emoji: "🚀", emojiBg: "bg-indigo-900", category: "Science", catBg: "bg-blue-50 text-blue-600", age: "9-12", ageBg: "bg-purple-50 text-purple-600", status: "Published", statusDot: "bg-green-500", views: "2.9K", downloads: "1.1K", updated: "Sep 26, 2025" },
    { title: "Word Builder", desc: "Build words from letters", emoji: "🔤", emojiBg: "bg-amber-200", category: "English", catBg: "bg-blue-50 text-blue-600", age: "4-8", ageBg: "bg-orange-50 text-orange-600", status: "Draft", statusDot: "bg-gray-400", views: "890", downloads: "320", updated: "Sep 22, 2025" },
  ];

  return (
    <ContentSectionPage
      title="Games"
      subtitle="Manage all interactive games and quizzes."
      icon="🎮"
      typeLabel="Game"
      typeBg="bg-blue-50 text-blue-600"
      totalCount={68}
      publishedCount={61}
      draftCount={7}
      items={items}
      accentColor="bg-blue-100"
    />
  );
}
