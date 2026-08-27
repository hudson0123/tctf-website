import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import NewsletterSignup from "@/components/NewsletterSignup";
import FloatingDonateButton from "@/components/FloatingDonateButton";
import { siteConfig } from "@/config/siteConfig";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <SEO />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-24 pb-12 overflow-hidden bg-gray-50 border-b border-gray-100">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent z-0" />
        <div className="section-container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start animate-reveal">
            <span className="text-primary font-bold text-sm uppercase tracking-[0.2em] mb-4 bg-primary/10 px-4 py-1 rounded-full">
              Non-profit Foundation
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-8">
              {siteConfig.hero.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-xl">
              {siteConfig.hero.mission}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href={siteConfig.hero.ctaLink} className="btn-primary text-center">
                {siteConfig.hero.cta}
              </Link>
              <Link href="/about" className="px-6 py-3 rounded-md font-semibold text-gray-600 hover:text-primary transition-all border border-gray-200 hover:border-primary/20 text-center">
                Learn More
              </Link>
            </div>
          </div>
          {/* Circle Design — 2 Children (asymmetrical) */}
          <div className="relative w-full aspect-square max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl mx-auto animate-reveal-delayed">
            {/* Scattered accent dots */}
            <div className="absolute top-[8%] left-[10%] w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-amber-300/50 animate-pulse" />
            <div className="absolute bottom-[15%] right-[12%] w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-sky-300/40 animate-pulse" />
            <div className="absolute top-[45%] right-[5%] w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-primary/20 animate-pulse" />

            {/* Child 1 — Large */}
            <div className="absolute top-[0%] right-[0%] w-[65%] aspect-square">
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-sky-100 to-sky-200 border-3 sm:border-4 border-white shadow-2xl ring-2 sm:ring-4 ring-sky-300/25 overflow-hidden">
                <Image src="/images/hero-1.jpg" alt="Child 1" fill className="object-cover" />
              </div>
            </div>

            {/* Child 2 — Smaller, overlapping bottom-left */}
            <div className="absolute bottom-[-5%] left-[5%] w-[55%] aspect-square">
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-amber-100 to-amber-200 border-3 sm:border-4 border-white shadow-xl ring-2 sm:ring-4 ring-amber-300/25 overflow-hidden">
                <Image src="/images/hero-2.jpg" alt="Child 2" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Impact Bar */}
      <section className="bg-white py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: "Community Support", value: "Athens Area" },
            { label: "Non-profit Status", value: "501(c)(3)" },
            { label: "Founded", value: "2024" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-primary font-bold text-3xl mb-1">{stat.value}</p>
              <p className="text-gray-500 text-xs uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Preview — image left, text right */}
      <section className="py-16 bg-white">
        <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
            <Image src="/images/group-1.jpg" alt="Group of children" fill className="object-cover" />
          </div>
          <div>
            <p className="text-primary font-bold text-sm uppercase tracking-widest mb-4">Our Vision</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Every child deserves a <span className="text-primary">bright future</span>.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {siteConfig.mission.statement}
            </p>
            <Link href="/mission" className="font-bold text-primary group inline-flex items-center gap-2 hover:underline">
              Read Our Mission
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Accessing Care — text left, image right */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary font-bold text-sm uppercase tracking-widest mb-4">How We Help</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Accessing Care</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              We bridge the gap between financial need and necessary mental health services for children in Athens.
            </p>
            <div className="space-y-6 mb-10">
              {[
                { step: "1", title: "Assessment", desc: "Connecting families with initial screenings and mental health evaluations." },
                { step: "2", title: "Financial Aid", desc: "Providing direct funding for therapy sessions for children in need." },
                { step: "3", title: "Begin Therapy", desc: "Partnering with licensed local therapists to ensure quality care." },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <span className="text-2xl font-bold text-primary/20 shrink-0 w-8">{item.step}</span>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/therapy" className="text-primary font-bold group inline-flex items-center gap-2 hover:underline">
              See the full process
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
            <Image src="/images/child-1.jpg" alt="Child smiling" fill className="object-cover" />
          </div>
        </div>
      </section>

      <NewsletterSignup />
      <Footer />
      <FloatingDonateButton />
    </div>
  );
}
