import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AgeGuideHero from "@/components/ageguide/AgeGuideHero";
import AgeGuideCategoryBar from "@/components/ageguide/AgeGuideCategoryBar";
import AgeGuideSidebar from "@/components/ageguide/AgeGuideSidebar";
import AgeGuideContent from "@/components/ageguide/AgeGuideContent";
import MobileAgeGuideFilterModal from "@/components/ageguide/MobileAgeGuideFilterModal";
import AgeGuideNewsletter from "@/components/ageguide/AgeGuideNewsletter";

export const metadata = {
  title: "Age Guide – KidZoo",
  description: "Expert-guided tips, activities and resources to support your child's growth, learning and happiness at every stage.",
};

export default function AgeGuidePage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#FAFAFA] min-h-screen pb-20">
        <AgeGuideHero />
        <AgeGuideCategoryBar />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <MobileAgeGuideFilterModal />

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="hidden lg:block">
              <AgeGuideSidebar />
            </div>
            <AgeGuideContent />
          </div>

          <AgeGuideNewsletter />
        </div>
      </main>
      <Footer />
    </>
  );
}
