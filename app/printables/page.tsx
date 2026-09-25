import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PrintablesHero from "@/components/printables/PrintablesHero";
import PrintablesCategoryBar from "@/components/printables/PrintablesCategoryBar";
import PrintablesSidebar from "@/components/printables/PrintablesSidebar";
import PrintablesContent from "@/components/printables/PrintablesContent";
import MobilePrintablesFilterModal from "@/components/printables/MobilePrintablesFilterModal";

export default function PrintablesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#FAFAFA] min-h-screen pb-20">
        <PrintablesHero />
        <PrintablesCategoryBar />
        
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <MobilePrintablesFilterModal />
          
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="hidden lg:block">
              <PrintablesSidebar />
            </div>
            <PrintablesContent />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
