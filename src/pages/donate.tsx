import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { siteConfig } from "@/config/siteConfig";

export default function Donate() {
  return (
    <div className="min-h-screen bg-white">
      <SEO title="Donate" />
      <Navbar />

      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-8 sm:pb-10 bg-white">
        <div className="section-container max-w-3xl">
          <p className="text-primary font-bold text-xs uppercase tracking-widest mb-2">Support Our Cause</p>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Help a child access the care they deserve.
          </h1>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-6">
            95% of every dollar donated goes directly toward funding therapy sessions for children in Athens, GA. No middlemen, no overhead bloat — just care.
          </p>
          <a
            href={siteConfig.donate.givebutterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 bg-primary text-white rounded-md font-semibold text-base transition-opacity hover:opacity-90 active:scale-[0.98]"
          >
            Donate Now
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <p className="flex items-center gap-1.5 mt-3 text-xs text-gray-400">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Secure &middot; Powered by Givebutter
          </p>
        </div>
      </section>

      {/* Impact numbers */}
      <section className="py-8 sm:py-10 bg-gray-50 border-y border-gray-100">
        <div className="section-container max-w-4xl">
          <div className="grid grid-cols-3 gap-4 text-center">
            {[
              { number: "10", label: "Sessions per child" },
              { number: "95%", label: "Direct to care" },
              { number: "$0", label: "Cost to families" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">{item.number}</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What your support does */}
      <section className="py-8 sm:py-10 bg-white">
        <div className="section-container max-w-3xl">
          <p className="text-primary font-bold text-xs uppercase tracking-widest mb-1">Your Impact</p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">What your support makes possible</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
            <p>
              A single round of 10 therapy sessions can be the difference between a child remaining stuck in fear, anger, anxiety, or withdrawal — and a child beginning to understand their emotions, develop healthy coping skills, and build confidence.
            </p>
            <p>
              When you help fund a child&apos;s therapy, you&apos;re not just covering an appointment — you&apos;re giving them a path back to feeling safe, understood, and like themselves again.
            </p>
          </div>
        </div>
      </section>

      {/* Other ways to give + tax info */}
      <section className="py-8 sm:py-10 bg-gray-50 border-t border-gray-100">
        <div className="section-container max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Tax deductible */}
            <div className="border-l-4 border-primary pl-4 sm:pl-5">
              <h3 className="font-bold text-gray-900 mb-1">Tax-Deductible</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-2">
                All donations are tax-deductible. You&apos;ll receive an automated receipt via email.
              </p>
              <p className="font-mono text-sm text-primary font-bold">
                EIN: {siteConfig.global.ein}
              </p>
            </div>
            {/* Other ways */}
            <div className="border-l-4 border-secondary pl-4 sm:pl-5">
              <h3 className="font-bold text-gray-900 mb-1">Other Ways to Give</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Interested in corporate sponsorship, in-kind donations, or hosting a fundraiser? <a href={`mailto:${siteConfig.global.email}`} className="text-primary font-semibold hover:underline">Reach out to us</a> and we&apos;ll work with you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
