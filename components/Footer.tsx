
import Image from "next/image";

const quickLinks = [
  { id: "footer-games", label: "Games", href: "/games" },
  { id: "footer-printables", label: "Printables", href: "#" },
  { id: "footer-learn", label: "Learn", href: "/learn" },
  { id: "footer-stories", label: "Stories", href: "#" },
  { id: "footer-activities", label: "Activities", href: "#" },
  { id: "footer-experiments", label: "Experiments", href: "#" },
  { id: "footer-explore", label: "Explore", href: "#" },
];

const forParents = [
  { id: "footer-parenting-tips", label: "Parenting Tips", href: "/parenting" },
  { id: "footer-age-guide", label: "Age Guide", href: "#" },
  { id: "footer-learning-resources", label: "Learning Resources", href: "#" },
  { id: "footer-safety-privacy", label: "Safety & Privacy", href: "#" },
  { id: "footer-faqs", label: "FAQs", href: "#" },
  { id: "footer-contact-us", label: "Contact Us", href: "#" },
];

const legal = [
  { id: "footer-privacy-policy", label: "Privacy Policy", href: "#" },
  { id: "footer-terms", label: "Terms of Service", href: "#" },
  { id: "footer-cookie-policy", label: "Cookie Policy", href: "#" },
  { id: "footer-child-safety", label: "Child Safety", href: "#" },
  { id: "footer-disclaimer", label: "Disclaimer", href: "#" },
];

const socialLinks = [
  {
    id: "social-youtube",
    label: "YouTube",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    bg: "#FF0000",
  },
  {
    id: "social-instagram",
    label: "Instagram",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    bg: "#E1306C",
  },
  {
    id: "social-pinterest",
    label: "Pinterest",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
      </svg>
    ),
    bg: "#E60023",
  },
  {
    id: "social-facebook",
    label: "Facebook",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    bg: "#1877F2",
  },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative overflow-hidden bg-[#151525]"
      aria-label="Site footer"
    >
      {/* ── Full-bleed Footer Background ── */}
      <div className="absolute inset-0 pointer-events-none select-none">
        
        {/* Desktop Image (hidden on mobile) */}
        <div className="hidden lg:block relative w-full h-full">
          <Image
            src="/footer.png"
            alt="Night reading scene with kids and dog"
            fill
            className="object-cover object-right-bottom"
            sizes="(max-width: 1024px) 100vw, 100vw"
          />
          {/* Dark overlay on the left for desktop */}
          <div
            className="absolute inset-0 z-10"
            style={{
              background: "linear-gradient(to right, rgba(21,21,37,0.8) 0%, rgba(21,21,37,0.5) 40%, transparent 80%)",
            }}
          />
        </div>

        {/* Mobile Image (hidden on desktop) */}
        <div className="block lg:hidden relative w-full h-full">
          <Image
            src="/mobfooter-new.png"
            alt="Night reading scene with kids and dog"
            fill
            className="object-cover object-bottom"
            sizes="(max-width: 1024px) 100vw, 100vw"
          />
          {/* Dark overlay top-to-bottom for mobile since layout is vertical */}
          <div
            className="absolute inset-0 z-10"
            style={{
              background: "linear-gradient(to bottom, rgba(21,21,37,0.85) 0%, rgba(21,21,37,0.6) 50%, transparent 90%)",
            }}
          />
        </div>

      </div>

      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 lg:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <a href="/" id="footer-logo" className="flex items-center gap-1 mb-4">
              <span className="text-2xl font-black">
                <span className="text-[#38BDF8]">Kid</span>
                <span className="text-[#4ADE80]">z</span>
                <span className="text-[#FCD34D]">oo</span>
              </span>
              <span className="text-xl">🦁</span>
            </a>
            <p className="text-white/70 text-xs leading-relaxed max-w-xs">
              A joyful place for kids to learn, play, create and explore. Fun content for curious minds and helpful resources for parents.
            </p>
            {/* Social Links */}
            <div className="flex gap-2 mt-5">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  id={social.id}
                  href={social.href}
                  aria-label={social.label}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white transition-transform hover:scale-110"
                  style={{ background: social.bg }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-800 text-sm mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    id={link.id}
                    href={link.href}
                    className="text-white/70 text-xs hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* For Parents */}
          <div>
            <h3 className="text-white font-800 text-sm mb-4">For Parents</h3>
            <ul className="space-y-2">
              {forParents.map((link) => (
                <li key={link.id}>
                  <a
                    id={link.id}
                    href={link.href}
                    className="text-white/70 text-xs hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-800 text-sm mb-4">Legal</h3>
            <ul className="space-y-2">
              {legal.map((link) => (
                <li key={link.id}>
                  <a
                    id={link.id}
                    href={link.href}
                    className="text-white/70 text-xs hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-xs">
            © 2026 Kidzoo.in. All rights reserved.
          </p>
          <a
            id="back-to-top"
            href="#hero"
            className="flex items-center gap-2 text-white/70 text-xs hover:text-white transition-colors group"
          >
            Back to Top
            <div className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white transition-colors">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}
