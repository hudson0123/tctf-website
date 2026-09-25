import { useState, useEffect } from "react";
import Link from "next/link";

export default function FloatingDonateButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`md:hidden fixed bottom-0 inset-x-0 z-[60] transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-gradient-to-t from-white via-white to-transparent pt-6 pb-4 px-4">
        <Link
          href="/donate"
          className="block w-full py-3.5 rounded-full bg-primary text-white text-center font-bold text-base shadow-lg active:scale-[0.98] transition-transform"
        >
          Donate Now
        </Link>
      </div>
    </div>
  );
}
