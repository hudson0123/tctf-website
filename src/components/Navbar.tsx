import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      data-testid="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white ${
        scrolled ? "shadow-md py-2 md:py-2" : "py-4 md:py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/images/tctf-logo-side.JPEG"
            alt={siteConfig.global.name}
            className="h-20 sm:h-20 md:h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-medium text-gray-600 hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}

          {/* Top Right Donate Button */}
          <Link
            href="/donate"
            className="bg-primary text-white px-5 py-2.5 rounded-full font-bold hover:opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Donate
          </Link>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          data-testid="mobile-menu-button"
          className="md:hidden text-gray-600 p-2 -m-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        data-testid="mobile-menu"
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-screen py-4 opacity-100" : "max-h-0 py-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-4 sm:px-6">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-base text-gray-600 transition-colors block py-3"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/donate"
            className="text-base text-primary font-bold py-3 border-t border-gray-100 mt-1"
            onClick={() => setIsOpen(false)}
          >
            Donate
          </Link>
        </div>
      </div>
    </nav>
  );
}
