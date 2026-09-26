import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TosHero from "@/components/tos/TosHero";
import TosContent from "@/components/tos/TosContent";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />
      <main>
        <TosHero />
        <TosContent />
      </main>
      <Footer />
    </div>
  );
}
