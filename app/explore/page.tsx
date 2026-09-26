import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ExploreHero from "@/components/explore/ExploreHero";
import ExploreCategoryBar from "@/components/explore/ExploreCategoryBar";
import ExploreSidebar from "@/components/explore/ExploreSidebar";
import ExploreContent from "@/components/explore/ExploreContent";
import MobileExploreFilterModal from "@/components/explore/MobileExploreFilterModal";
import ExploreNewsletter from "@/components/explore/ExploreNewsletter";

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navbar />
      
      <main className="pb-20">
        <ExploreHero />
        <ExploreCategoryBar />

        {/* Two Column Layout for Content */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <MobileExploreFilterModal />
          
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="hidden lg:block">
              <ExploreSidebar />
            </div>
            <ExploreContent />
          </div>

          <div className="mt-12">
            <ExploreNewsletter />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
