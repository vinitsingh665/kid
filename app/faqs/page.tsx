import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FaqHero from "@/components/faqs/FaqHero";
import FaqCategoryBar from "@/components/faqs/FaqCategoryBar";
import FaqSidebarLeft from "@/components/faqs/FaqSidebarLeft";
import FaqSidebarRight from "@/components/faqs/FaqSidebarRight";
import FaqContent from "@/components/faqs/FaqContent";

export const metadata = {
  title: "FAQs – KidZoo",
  description: "Find quick answers to common questions about Kidzoo, our content, safety, subscriptions and more.",
};

export default function FaqsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#FAFAFA] min-h-screen pb-20 overflow-hidden">
        <FaqHero />
        
        {/* We place FaqCategoryBar here because it overlaps the hero section */}
        <FaqCategoryBar />

        {/* Desktop 3-column layout, Mobile single-column */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <FaqSidebarLeft />
            
            <FaqContent />
            
            {/* The right sidebar sits on desktop. On mobile, we might want a simpler version or just show it at the bottom. 
                Wait, looking at the mobile mockup, the mobile layout shows these right sidebar components AT THE BOTTOM of the page! 
                Let's make FaqSidebarRight handle both, but wait, the sidebar components I built are hidden on mobile using `hidden lg:flex`.
                Let's create a mobile-only bottom section for them, or just modify FaqSidebarRight to be visible on mobile?
                In the design, mobile shows "Still Need Help", "Have a Suggestion", "Quick Links".
                Let me just render FaqSidebarRight and change it to be visible on mobile, but placed at the bottom.
            */}
            
            <div className="w-full lg:w-auto lg:hidden">
              {/* Mobile version of Right Sidebar components */}
              <div className="flex flex-col gap-6 mt-4">
                {/* Still Need Help (Mobile) */}
                <div className="bg-[#fbf5fe] rounded-3xl p-6 relative flex flex-col sm:flex-row sm:items-center text-center sm:text-left gap-6 overflow-hidden">
                  <div className="flex-1 relative z-10">
                    <h3 className="font-black text-[#0B2046] text-xl mb-2">Still Need Help?</h3>
                    <p className="text-sm text-gray-600 mb-5">Can't find what you're looking for?<br/>Our team is here to help.</p>
                    <button className="bg-[#0B2046] hover:bg-[#1a3a6e] text-white font-bold py-3.5 px-6 rounded-xl text-sm transition-colors flex items-center justify-center sm:justify-start gap-2 shadow-md w-full sm:w-auto">
                      <span className="text-lg leading-none">✉️</span> Contact Support <span className="font-bold">→</span>
                    </button>
                  </div>
                  <div className="w-full sm:w-[200px] flex justify-center sm:justify-end shrink-0 relative z-10">
                     <img src="/still_need_help.png" alt="Still Need Help" className="w-[200px] h-auto object-contain" />
                  </div>
                </div>

                {/* Have a Suggestion (Mobile) */}
                <div className="bg-gradient-to-r from-[#fdf6ff] to-[#f4f7fe] rounded-3xl p-6 flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left border border-gray-100 shadow-sm gap-4">
                  <div className="flex items-center gap-4 flex-col sm:flex-row">
                    <div className="text-5xl">💡</div>
                    <div>
                      <h3 className="font-black text-[#0B2046] text-xl mb-1">Have a Suggestion?</h3>
                      <p className="text-sm text-gray-600">We'd love to hear your ideas to make Kidzoo even better!</p>
                    </div>
                  </div>
                  <button className="bg-white hover:bg-gray-50 text-gray-800 font-bold py-3 px-6 rounded-full text-sm shadow-sm border border-gray-100 transition-colors flex items-center gap-2 shrink-0 whitespace-nowrap">
                    Share Feedback <span className="font-bold">→</span>
                  </button>
                </div>

                {/* Quick Links (Mobile) */}
                <div className="bg-[#f9fafc] rounded-3xl p-6 border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="bg-blue-500 rounded-full w-7 h-7 flex items-center justify-center text-white text-sm shrink-0 shadow-sm">🔗</div>
                    <h3 className="font-black text-[#0B2046] text-lg">Quick Links</h3>
                  </div>
                  <div className="space-y-0">
                    {[
                      "Safety & Privacy",
                      "Parental Controls",
                      "Subscription Plans",
                      "Technical Support",
                      "Content Guidelines"
                    ].map((link, i) => (
                      <div key={i} className="flex items-center justify-between py-3.5 border-b border-gray-200/60 last:border-0 cursor-pointer group">
                        <span className="text-sm font-semibold text-gray-700">{link}</span>
                        <span className="text-gray-400 font-bold">›</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <FaqSidebarRight />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
