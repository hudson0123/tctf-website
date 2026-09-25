import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { siteConfig } from "@/config/siteConfig";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <SEO title="Contact Us" />
      <Navbar />

      <section className="pt-32 pb-10 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-primary font-bold text-sm uppercase tracking-widest mb-3">Get In Touch</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
            Have questions about our mission, how to donate, or how to access therapy? We&apos;re here to help.
          </p>

          {/* Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            <a href={`mailto:${siteConfig.global.email}`} className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100 hover:border-primary/20 transition-all">
              <div className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Email</p>
                <p className="text-primary font-medium text-sm">{siteConfig.global.email}</p>
              </div>
            </a>
            <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100">
              <div className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Phone</p>
                <p className="text-gray-900 font-medium text-sm">{siteConfig.global.phone}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100">
              <div className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Location</p>
                <p className="text-gray-900 font-medium text-sm">{siteConfig.global.location}</p>
              </div>
            </div>
          </div>

          {/* Socials + Quick Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-primary text-gray-50 rounded-xl p-5 border border-gray-100">
              <h3 className="font-bold mb-3">Quick Links</h3>
              <div className="flex flex-col gap-3">
                {[
                  { label: "Apply for therapy funding", href: "/therapy" },
                  { label: "Make a donation", href: "/donate" },
                  { label: "Learn about our mission", href: "/mission" },
                ].map((link) => (
                  <Link key={link.href} href={link.href} className="text-white font-medium text-sm hover:underline">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
