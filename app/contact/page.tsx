import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactSidebar from "@/components/contact/ContactSidebar";
import ContactBottom from "@/components/contact/ContactBottom";

export const metadata = {
  title: "Contact Us – KidZoo",
  description: "Get in touch with the KidZoo team. We're here to help!",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#eff5ff] min-h-screen pb-20 overflow-hidden">
        <ContactHero />
        
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch relative z-20 -mt-8 sm:-mt-12 lg:-mt-16">
            <ContactForm />
            <ContactSidebar />
          </div>
          
          <ContactBottom />
        </div>
      </main>
      <Footer />
    </>
  );
}
