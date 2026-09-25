import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoryBar from "@/components/CategoryBar";
import WhatsNewSection from "@/components/WhatsNewSection";
import AgeGroupsSection from "@/components/AgeGroupsSection";
import WorksheetGenerator from "@/components/WorksheetGenerator";
import PrintablesSection from "@/components/PrintablesSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Fixed navbar floats over the hero — outside normal document flow */}
      <Navbar />

      <main>
        {/* Hero starts at top: 0 and extends behind the fixed navbar */}
        <HeroSection />
        <CategoryBar />
        <WhatsNewSection />
        <AgeGroupsSection />
        <WorksheetGenerator />
        <PrintablesSection />
        <NewsletterSection />
        <Footer />
      </main>
    </>
  );
}
