import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieHero from "@/components/cookie/CookieHero";
import CookieContent from "@/components/cookie/CookieContent";

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />
      <main>
        <CookieHero />
        <CookieContent />
      </main>
      <Footer />
    </div>
  );
}
