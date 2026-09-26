import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PrivacyHero from "@/components/privacy/PrivacyHero";
import PrivacyContent from "@/components/privacy/PrivacyContent";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />
      <main>
        <PrivacyHero />
        <PrivacyContent />
      </main>
      <Footer />
    </div>
  );
}
