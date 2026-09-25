import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";

export default function FloatingDonateButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling passed hero (approx 80vh)
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Link 
      href="/donate"
      className={`md:hidden fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[60] bg-primary text-white px-5 py-3 sm:px-6 sm:py-4 rounded-full font-bold text-sm sm:text-base shadow-2xl transition-all duration-500 flex items-center gap-2 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      }`}
    >
      <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
      Donate
    </Link>
  );
}
