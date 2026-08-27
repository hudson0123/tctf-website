import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { siteConfig } from "@/config/siteConfig";

export default function Donate() {
  return (
    <div className="min-h-screen bg-white">
      <SEO title="Donate" />
      <Navbar />

      {/* Hero + CTA */}
      <section className="pt-32 pb-16 bg-gray-50 border-b border-gray-100 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-[10%] w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-0 left-[20%] w-96 h-96 rounded-full bg-secondary/5 blur-3xl" />
        </div>
        <div className="section-container max-w-3xl text-center relative z-10">
          <p className="text-primary font-bold text-sm uppercase tracking-widest mb-4">Support Our Cause</p>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Make an <span className="text-primary">Impact</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-xl mx-auto">
            Your donation goes directly to funding therapy sessions for children in need in Athens, GA. Every contribution helps a child thrive.
          </p>
          <a
            href={siteConfig.donate.givebutterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 py-4 px-12 text-lg shadow-lg"
          >
            Donate Now
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <div className="flex items-center justify-center gap-6 mt-6 text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Secure
            </span>
            <span>Credit Card</span>
            <span>Venmo</span>
            <span>PayPal</span>
          </div>
        </div>
      </section>

      {/* Impact + Ways to Give */}
      <section className="py-16 bg-white">
        <div className="section-container max-w-5xl">
          {/* What Your Support Makes Possible */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-3 mb-2">
              <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">Your Impact</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Your Support Makes Possible</h2>
            </div>
            {[
              {
                number: "10",
                label: "therapy sessions",
                desc: "Each child receives up to 10 sessions with a licensed, trauma-informed therapist — at no cost to the family.",
              },
              {
                number: "100%",
                label: "direct to care",
                desc: "Every dollar goes directly toward covering the cost of therapy sessions. No middlemen, no overhead surprises.",
              },
              {
                number: "1",
                label: "turning point",
                desc: "A child learns to manage big emotions, a family begins to heal together, and a community grows stronger.",
              },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-4xl font-bold text-primary mb-1">{item.number}</p>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">{item.label}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Other Ways to Give */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl p-8 flex flex-col">
              <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">By Mail</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Send a check payable to Thriving Children Therapy Fund to 123 Example St, Athens, GA 30601.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 flex flex-col">
              <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Corporate Match</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Many employers match donations to 501(c)(3) non-profits. Check if your company has a matching gift program.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 flex flex-col">
              <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Tax-Deductible</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                All donations are tax-deductible. You&apos;ll receive an automated receipt via email.
              </p>
              <span className="mt-3 font-mono text-xs text-primary font-bold bg-primary/5 px-2.5 py-1 rounded self-start">
                EIN: {siteConfig.global.ein}
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
