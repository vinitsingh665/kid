import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GamesHero from "@/components/games/GamesHero";
import GamesCategoryBar from "@/components/games/GamesCategoryBar";
import GamesSidebar from "@/components/games/GamesSidebar";
import GamesGrid from "@/components/games/GamesGrid";
import MobileFilterModal from "@/components/games/MobileFilterModal";

export const metadata = {
  title: "Games - KidZoo",
  description: "Play, learn and explore with our collection of exciting games designed for kids of all ages.",
};

export default function GamesPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#FAFAFA] min-h-screen pb-20">
        <GamesHero />
        <GamesCategoryBar />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 mt-4 lg:mt-8">
          
          {/* Mobile Search Bar (visible only on smaller screens) */}
          <div className="lg:hidden mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search games..."
                className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            {/* Mobile Filter Button (interactive modal) */}
            <MobileFilterModal />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Sidebar (hidden on mobile, shown on lg screens) */}
            <div className="hidden lg:block sticky top-24">
              <GamesSidebar />
            </div>

            {/* Main Games Grid */}
            <GamesGrid />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
