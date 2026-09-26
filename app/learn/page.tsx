import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LearnHero from "@/components/learn/LearnHero";
import LearnCategoryBar from "@/components/learn/LearnCategoryBar";
import LearnSidebar from "@/components/learn/LearnSidebar";
import LearnContent from "@/components/learn/LearnContent";
import MobileLearnFilterModal from "@/components/learn/MobileLearnFilterModal";
import LearnNewsletter from "@/components/learn/LearnNewsletter";

export const metadata = {
  title: "Learn - KidZoo",
  description: "Fun and interactive lessons to help kids explore, learn and grow.",
};

export default function LearnPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#FAFAFA] min-h-screen pb-20">
        <LearnHero />
        <LearnCategoryBar />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 mt-4 lg:mt-8">
          
          {/* Mobile Search Bar & Filter */}
          <div className="lg:hidden mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search lessons, topics, or anything..."
                className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            <MobileLearnFilterModal />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Sidebar (hidden on mobile, shown on lg screens) */}
            <div className="hidden lg:block sticky top-24">
              <LearnSidebar />
            </div>

            {/* Main Learn Content */}
            <LearnContent />
          </div>

          <LearnNewsletter />
        </div>
      </main>

      <Footer />
    </>
  );
}
