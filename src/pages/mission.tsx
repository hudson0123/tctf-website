import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { siteConfig } from "@/config/siteConfig";

export default function Mission() {
  return (
    <div className="min-h-screen bg-white">
      <SEO title="Our Mission" />
      <Navbar />

      <section className="pt-32 pb-16 bg-gray-50 border-b border-gray-100 overflow-hidden relative">
        <div className="absolute inset-0 bg-primary/5 animate-pulse" />
        <div className="section-container relative z-10">
          <p className="text-primary font-bold text-sm uppercase tracking-widest mb-4">Our Purpose</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight max-w-4xl">
            Access to mental health is a <span className="text-primary underline decoration-2 decoration-primary/30 underline-offset-8">fundamental right</span>.
          </h1>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Mission */}
          <div className="animate-reveal">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-4">
              <span className="w-12 h-px bg-primary" />
              Mission
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed italic">
              "{siteConfig.mission.statement}"
            </p>
          </div>

          {/* Vision */}
          <div className="animate-reveal-delayed">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-4">
              <span className="w-12 h-px bg-primary" />
              Vision
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {siteConfig.mission.vision}
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="section-container">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteConfig.mission.values.map((value, idx) => (
              <div key={value} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                <span className="text-4xl text-primary font-bold mb-4 block">0{idx + 1}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="py-24 bg-white">
        <div className="section-container max-w-4xl">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Non-Discrimination Policy</h2>
            <div className="bg-gray-100 p-8 rounded-xl text-gray-600 leading-relaxed text-sm">
              {siteConfig.mission.nonDiscrimination}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
