import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SafetyHero from "@/components/safety/SafetyHero";
import SafetyCategoryBar from "@/components/safety/SafetyCategoryBar";
import SafetyContent from "@/components/safety/SafetyContent";

export const metadata = {
  title: "Safety & Privacy – KidZoo",
  description: "Your child's safety and privacy matter to us. Learn how we create a safe, positive and worry-free learning space.",
};

export default function SafetyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#FAFAFA] min-h-screen pb-20">
        <SafetyHero />
        <SafetyCategoryBar />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <SafetyContent />
        </div>
      </main>
      <Footer />
    </>
  );
}
