import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { siteConfig } from "@/config/siteConfig";

const values = siteConfig.mission.values;

const valueIcons = [
  // Integrity — shield
  <svg key="integrity" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>,
  // Impact — lightning bolt
  <svg key="impact" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>,
  // Community — people
  <svg key="community" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>,
  // Trauma Informed — heart
  <svg key="trauma" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>,
  // Holistic — globe
  <svg key="holistic" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
];

export default function Mission() {
  return (
    <div className="min-h-screen bg-white">
      <SEO title="Our Mission" />
      <Navbar />

      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-8 sm:pb-10 bg-gray-50 border-b border-gray-100">
        <div className="section-container">
          <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">Our Purpose</p>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 leading-tight max-w-3xl">
            Access to mental health is a{" "}
            <span className="text-primary">fundamental right</span>.
          </h1>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-8 sm:py-10 bg-white">
        <div className="section-container max-w-4xl space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-6">
          <div className="border-l-4 border-primary pl-4 sm:pl-5">
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-2">Mission</p>
            <p className="text-gray-800 leading-relaxed text-sm sm:text-base">
              {siteConfig.mission.statement}
            </p>
          </div>
          <div className="border-l-4 border-secondary pl-4 sm:pl-5">
            <p className="text-secondary font-bold text-xs uppercase tracking-widest mb-2">Vision</p>
            <p className="text-gray-800 leading-relaxed text-sm sm:text-base">
              {siteConfig.mission.vision}
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-8 sm:py-10 bg-gray-50 border-y border-gray-100">
        <div className="section-container max-w-4xl">
          <p className="text-primary font-bold text-xs uppercase tracking-widest mb-1">What Guides Us</p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-5 sm:mb-8">Core Values</h2>

          {/* Mobile: compact list */}
          <div className="flex flex-col gap-4 md:hidden">
            {values.map((value, idx) => (
              <div key={value.name} className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  {valueIcons[idx]}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900">{value.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: card grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-4">
            {values.slice(0, 3).map((value, idx) => (
              <div key={value.name} className="bg-white rounded-xl p-5 border border-gray-100">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                  {valueIcons[idx]}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-1">{value.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
          <div className="hidden md:grid md:grid-cols-2 gap-4 mt-4 max-w-[66.666%] mx-auto">
            {values.slice(3).map((value, idx) => (
              <div key={value.name} className="bg-white rounded-xl p-5 border border-gray-100">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                  {valueIcons[idx + 3]}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-1">{value.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* One-Pager */}
      <section className="py-8 sm:py-10 bg-white">
        <div className="section-container max-w-4xl">
          <p className="text-primary font-bold text-xs uppercase tracking-widest mb-1">Overview</p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-5 sm:mb-6">Our One-Pager</h2>
          <div className="rounded-xl border border-gray-200 overflow-hidden">
            <iframe
              src="/documents/1pager.pdf"
              title="TCTF One-Pager"
              className="w-full h-[50vh] sm:h-[65vh] min-h-[350px]"
            />
          </div>
          <p className="mt-3 text-center">
            <a
              href="/documents/1pager.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold text-sm hover:underline inline-flex items-center gap-1"
            >
              Open full document
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </p>
        </div>
      </section>

      {/* Non-Discrimination Policy */}
      <section className="py-8 sm:py-10 bg-gray-50 border-t border-gray-100">
        <div className="section-container max-w-4xl">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Non-Discrimination Policy</h2>
          <div className="text-gray-600 leading-relaxed text-xs sm:text-sm space-y-3">
            {siteConfig.mission.nonDiscrimination.split("\n\n").map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
