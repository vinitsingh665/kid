import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ExperimentsHero from "@/components/experiments/ExperimentsHero";
import ExperimentsCategoryBar from "@/components/experiments/ExperimentsCategoryBar";
import ExperimentsSidebar from "@/components/experiments/ExperimentsSidebar";
import ExperimentsContent from "@/components/experiments/ExperimentsContent";
import MobileExperimentsFilterModal from "@/components/experiments/MobileExperimentsFilterModal";
import ExperimentsNewsletter from "@/components/experiments/ExperimentsNewsletter";

export default function ExperimentsPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navbar />
      
      <main className="pb-20">
        <ExperimentsHero />
        <ExperimentsCategoryBar />

        {/* Two Column Layout for Content */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <MobileExperimentsFilterModal />
          
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="hidden lg:block">
              <ExperimentsSidebar />
            </div>
            <ExperimentsContent />
          </div>

          <div className="mt-12">
            <ExperimentsNewsletter />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
