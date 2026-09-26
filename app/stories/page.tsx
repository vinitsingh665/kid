import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StoriesHero from "@/components/stories/StoriesHero";
import StoriesCategoryBar from "@/components/stories/StoriesCategoryBar";
import StoriesSidebar from "@/components/stories/StoriesSidebar";
import StoriesContent from "@/components/stories/StoriesContent";
import MobileStoriesFilterModal from "@/components/stories/MobileStoriesFilterModal";
import StoriesNewsletter from "@/components/stories/StoriesNewsletter";

export default function StoriesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#FAFAFA] min-h-screen pb-20">
        <StoriesHero />
        <StoriesCategoryBar />
        
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <MobileStoriesFilterModal />
          
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="hidden lg:block">
              <StoriesSidebar />
            </div>
            <StoriesContent />
          </div>

          {/* Newsletter — outside the flex row so it always renders at full width */}
          <div className="mt-12 mb-4">
            <StoriesNewsletter />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
