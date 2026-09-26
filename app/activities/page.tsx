import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ActivitiesHero from "@/components/activities/ActivitiesHero";
import ActivitiesCategoryBar from "@/components/activities/ActivitiesCategoryBar";
import ActivitiesSidebar from "@/components/activities/ActivitiesSidebar";
import ActivitiesContent from "@/components/activities/ActivitiesContent";
import MobileActivitiesFilterModal from "@/components/activities/MobileActivitiesFilterModal";
import ActivitiesNewsletter from "@/components/activities/ActivitiesNewsletter";

export default function ActivitiesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#FAFAFA] min-h-screen pb-20">
        <ActivitiesHero />
        <ActivitiesCategoryBar />
        
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <MobileActivitiesFilterModal />
          
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="hidden lg:block">
              <ActivitiesSidebar />
            </div>
            <ActivitiesContent />
          </div>

          <ActivitiesNewsletter />
        </div>
      </main>
      <Footer />
    </>
  );
}
