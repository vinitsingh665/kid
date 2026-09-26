import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParentingHero from "@/components/parenting/ParentingHero";
import ParentingCategoryBar from "@/components/parenting/ParentingCategoryBar";
import ParentingSidebar from "@/components/parenting/ParentingSidebar";
import ParentingContent from "@/components/parenting/ParentingContent";
import MobileParentingFilterModal from "@/components/parenting/MobileParentingFilterModal";
import ParentingNewsletter from "@/components/parenting/ParentingNewsletter";

export const metadata = {
  title: "Parenting Tips – KidZoo",
  description: "Practical tips, expert advice and everyday ideas to help you support your child's learning, wellbeing and growth.",
};

export default function ParentingPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#FAFAFA] min-h-screen pb-20">
        <ParentingHero />
        <ParentingCategoryBar />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <MobileParentingFilterModal />

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="hidden lg:block">
              <ParentingSidebar />
            </div>
            <ParentingContent />
          </div>

          <ParentingNewsletter />
        </div>
      </main>
      <Footer />
    </>
  );
}
