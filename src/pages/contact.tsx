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

      <section className="pt-28 sm:pt-32 pb-10 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-primary font-bold text-sm uppercase tracking-widest mb-3">Get In Touch</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
            Have questions about our mission, how to donate, or how to access therapy? We&apos;re here to help.
          </p>

          {/* Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            <a href={`mailto:${siteConfig.global.email}`} className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100 hover:border-primary/20 transition-all overflow-hidden">
              <div className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Email</p>
                <p className="text-primary font-medium text-sm break-all">{siteConfig.global.email}</p>
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

          {/* Socials */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            <a href={siteConfig.socials[0].url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100 hover:border-primary/20 transition-all">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 text-white rounded-xl flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Instagram</p>
                <p className="text-gray-900 font-medium text-sm">@thrivingchildrentherapyfund</p>
              </div>
            </a>
            <a href={siteConfig.socials[1].url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100 hover:border-primary/20 transition-all">
              <div className="w-10 h-10 bg-[#1877F2] text-white rounded-xl flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Facebook</p>
                <p className="text-gray-900 font-medium text-sm">Thriving Children Therapy Fund</p>
              </div>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <div className="bg-primary text-gray-50 rounded-xl p-5">
              <h3 className="font-bold mb-3">Quick Links</h3>
              <div className="flex flex-col gap-3">
                {[
                  { label: "Apply for therapy funding", href: "/therapy" },
                  { label: "Make a donation", href: "/donate" },
                  { label: "Learn about our mission", href: "/mission" },
                ].map((link) => (
                  <Link key={link.href} href={link.href} className="text-white font-medium text-sm hover:underline py-1.5">
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
