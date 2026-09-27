import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DisclaimerHero from "@/components/disclaimer/DisclaimerHero";
import DisclaimerContent from "@/components/disclaimer/DisclaimerContent";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />
      <main>
        <DisclaimerHero />
        <DisclaimerContent />
      </main>
      <Footer />
    </div>
  );
}
