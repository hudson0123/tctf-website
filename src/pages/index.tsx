import Link from "next/link";
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
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl animate-reveal-delayed">
            <div className="absolute inset-0 bg-primary/20 flex items-center justify-center text-white/50">
              <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
            {/* Image would go here: <Image ... /> */}
          </div>
        </div>
      </section>

      {/* Stats / Impact Bar */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Children Helped", value: "100+" },
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

      {/* Mission Preview */}
      <section className="py-24 bg-white">
        <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div className="order-2 lg:order-1 relative aspect-square rounded-2xl overflow-hidden shadow-xl">
             <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400">
                <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
             </div>
           </div>
           <div className="order-1 lg:order-2">
             <p className="text-primary font-bold text-sm uppercase tracking-widest mb-4">Our Vision</p>
             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
               Every child deserves a <span className="text-primary">bright future</span>.
             </h2>
             <p className="text-lg text-gray-600 leading-relaxed mb-10">
               {siteConfig.mission.statement}
             </p>
             <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
               {siteConfig.mission.values.map((value) => (
                 <li key={value} className="flex items-center gap-3 text-gray-700 font-medium">
                   <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                   </svg>
                   {value}
                 </li>
               ))}
             </ul>
             <Link href="/mission" className="font-bold text-primary group flex items-center gap-2">
               Read Our Mission
               <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
               </svg>
             </Link>
           </div>
        </div>
      </section>

      {/* Support Tiers / Therapy Info Preview */}
      <section className="bg-gray-50 border-y border-gray-100">
        <div className="section-container text-center">
          <p className="text-primary font-bold text-sm uppercase tracking-widest mb-4">How We Help</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Accessing Care</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We bridge the gap between financial need and necessary mental health services for children in Athens.
          </p>
        </div>
        <div className="section-container pt-0 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Assessment",
              desc: "Connecting families with initial screenings and mental health evaluations.",
              icon: (
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              )
            },
            {
              title: "Financial Aid",
              desc: "Providing direct funding for therapy sessions for children in need.",
              icon: (
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              )
            },
            {
              title: "Expert Network",
              desc: "Partnering with licensed local therapists to ensure quality care.",
              icon: (
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.631.316a6 6 0 01-3.86.517L5.281 15.28a2 2 0 01-1.022-.547l-1.428-1.428a2 2 0 01-.547-1.022l-.477-2.387a6 6 0 01.517-3.86l.316-.631a6 6 0 01.517-3.86l-.477-2.387a2 2 0 01.547-1.022l1.428-1.428a2 2 0 011.022-.547l2.387-.477a6 6 0 013.86.517l.631-.316a6 6 0 013.86-.517l2.387.477a2 2 0 011.022.547l1.428 1.428a2 2 0 01.547 1.022l.477 2.387a6 6 0 01-.517 3.86l-.316.631a6 6 0 01-.517 3.86l.477 2.387a2 2 0 01-.547 1.022l-1.428 1.428z" />
                </svg>
              )
            }
          ].map((item) => (
            <div key={item.title} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm mb-6">
                {item.desc}
              </p>
              <Link href="/therapy" className="text-primary text-sm font-bold hover:underline">
                Learn how it works
              </Link>
            </div>
          ))}
        </div>
      </section>

      <NewsletterSignup />
      <Footer />
      <FloatingDonateButton />
    </div>
  );
}
