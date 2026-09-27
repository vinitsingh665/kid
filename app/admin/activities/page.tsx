import ContentSectionPage from "@/components/admin/ContentSectionPage";

export default function ActivitiesPage() {
  const items = [
    { title: "Paper Boat Craft", desc: "Easy DIY activity for kids", emoji: "⛵", emojiBg: "bg-red-200", category: "Crafts", catBg: "bg-red-50 text-red-600", age: "4-8", ageBg: "bg-orange-50 text-orange-600", status: "Draft", statusDot: "bg-gray-400", views: "420", downloads: "210", updated: "Sep 25, 2025" },
    { title: "Build a Birdhouse", desc: "Woodworking for kids", emoji: "🏠", emojiBg: "bg-amber-200", category: "Crafts", catBg: "bg-red-50 text-red-600", age: "8-12", ageBg: "bg-purple-50 text-purple-600", status: "Published", statusDot: "bg-green-500", views: "890", downloads: "430", updated: "Sep 23, 2025" },
    { title: "Garden Planting Kit", desc: "Grow seeds at home", emoji: "🌱", emojiBg: "bg-green-200", category: "Nature", catBg: "bg-green-50 text-green-600", age: "6-12", ageBg: "bg-pink-50 text-pink-600", status: "Published", statusDot: "bg-green-500", views: "1.2K", downloads: "560", updated: "Sep 21, 2025" },
    { title: "Scavenger Hunt Outdoor", desc: "Fun outdoor exploration", emoji: "🔍", emojiBg: "bg-yellow-100", category: "Outdoor", catBg: "bg-amber-50 text-amber-600", age: "6-10", ageBg: "bg-orange-50 text-orange-600", status: "Published", statusDot: "bg-green-500", views: "980", downloads: "380", updated: "Sep 19, 2025" },
    { title: "Finger Painting Set", desc: "Creative finger art guide", emoji: "🎨", emojiBg: "bg-pink-200", category: "Art", catBg: "bg-pink-50 text-pink-600", age: "2-6", ageBg: "bg-pink-50 text-pink-600", status: "Published", statusDot: "bg-green-500", views: "1.5K", downloads: "820", updated: "Sep 17, 2025" },
  ];

  return (
    <ContentSectionPage
      title="Activities"
      subtitle="Manage hands-on activities, crafts and creative projects."
      icon="💡"
      typeLabel="Activity"
      typeBg="bg-amber-50 text-amber-600"
      totalCount={32}
      publishedCount={27}
      draftCount={5}
      items={items}
      accentColor="bg-amber-100"
    />
  );
}
