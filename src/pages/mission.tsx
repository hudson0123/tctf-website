import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { siteConfig } from "@/config/siteConfig";

const valueIcons = [
  // Integrity — shield
  <svg key="integrity" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>,
  // Impact — lightning bolt
  <svg key="impact" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>,
  // Community — people
  <svg key="community" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>,
  // Trauma Informed — heart in hand
  <svg key="trauma" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>,
  // Holistic — circle/globe
  <svg key="holistic" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
];

export default function Mission() {
  return (
    <div className="min-h-screen bg-white">
      <SEO title="Our Mission" />
      <Navbar />

      {/* Hero */}
      <section className="pt-24 sm:pt-32 pb-10 bg-gray-50 border-b border-gray-100 overflow-hidden relative">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-[10%] w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-0 right-[15%] w-96 h-96 rounded-full bg-secondary/5 blur-3xl" />
        </div>
        <div className="section-container relative z-10">
          <p className="text-primary font-bold text-sm uppercase tracking-widest mb-4">Our Purpose</p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight max-w-4xl">
            Access to mental health is a{" "}
            <span className="text-primary underline decoration-2 decoration-primary/30 underline-offset-8">fundamental right</span>.
          </h1>
        </div>
      </section>

      {/* Mission & Vision — side by side cards */}
      <section className="py-10 bg-white">
        <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative bg-gray-50 rounded-2xl p-5 sm:p-8 md:p-10 border border-gray-100 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-4 sm:mb-6">Mission</p>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-800 leading-relaxed font-medium">
              &ldquo;{siteConfig.mission.statement}&rdquo;
            </p>
          </div>

          <div className="relative bg-gray-50 rounded-2xl p-5 sm:p-8 md:p-10 border border-gray-100 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-secondary" />
            <p className="text-secondary font-bold text-xs uppercase tracking-widest mb-4 sm:mb-6">Vision</p>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-800 leading-relaxed font-medium">
              {siteConfig.mission.vision}
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-10 bg-gray-50 border-y border-gray-100">
        <div className="section-container">
          <div className="text-center mb-8">
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">What Guides Us</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">Our Core Values</h2>
          </div>

          {/* Top row: 3 values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            {siteConfig.mission.values.slice(0, 3).map((value, idx) => (
              <div key={value.name} className="group bg-white rounded-2xl p-5 sm:p-8 border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {valueIcons[idx]}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{value.name}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{value.description}</p>
              </div>
            ))}
          </div>

          {/* Bottom row: 2 values, centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto lg:max-w-[66.666%]">
            {siteConfig.mission.values.slice(3).map((value, idx) => (
              <div key={value.name} className="group bg-white rounded-2xl p-5 sm:p-8 border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {valueIcons[idx + 3]}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{value.name}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Non-Discrimination Policy */}
      <section className="py-10 bg-white">
        <div className="section-container max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Non-Discrimination Policy</h2>
          </div>
          <div className="bg-gray-50 p-4 sm:p-8 rounded-2xl border border-gray-100 text-gray-600 leading-relaxed text-sm space-y-4">
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
