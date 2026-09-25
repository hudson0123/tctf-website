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
      <section className="pt-28 sm:pt-32 pb-10 bg-gray-50 border-b border-gray-100 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-[10%] w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-0 left-[20%] w-96 h-96 rounded-full bg-secondary/5 blur-3xl" />
        </div>
        <div className="section-container max-w-3xl text-center relative z-10">
          <p className="text-primary font-bold text-sm uppercase tracking-widest mb-4">Support Our Cause</p>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Make an <span className="text-primary">Impact</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto">
            95% of your donation funds therapy sessions for children in need in Athens, GA. Every contribution, no matter the size, helps a child thrive.
          </p>
          <a
            href={siteConfig.donate.givebutterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center justify-center gap-2 w-full sm:w-auto py-3 sm:py-4 px-8 sm:px-12 text-base sm:text-lg shadow-lg"
          >
            Donate Now
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <div className="flex items-center justify-center gap-1.5 mt-5 text-xs text-gray-400">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Secure
          </div>
        </div>
      </section>

      {/* What Your Support Makes Possible */}
      <section className="py-12 bg-white">
        <div className="section-container max-w-5xl">
          <div className="mb-10">
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">Your Impact</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-5">What Your Support Makes Possible</h2>
            <div className="max-w-3xl space-y-4 text-gray-600 leading-relaxed">
              <p>
                A single round of 10 therapy sessions can be the difference between a child remaining stuck in fear, anger, anxiety, or withdrawal — and a child beginning to understand their emotions, develop healthy coping skills, and build confidence. Every child&apos;s therapeutic journey looks different, but having access to a safe, supportive relationship with a trained therapist can create lasting change.
              </p>
              <p>
                Your support makes these life-changing services possible, ensuring that every child can receive the care they need, regardless of their family&apos;s ability to pay.
              </p>
              <p>
                When you help fund a child&apos;s therapy, you&apos;re not just covering an appointment — you&apos;re giving them a path back to feeling safe, understood, and like themselves again.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {[
              {
                number: "10",
                label: "therapy sessions",
                desc: "Each child receives up to 10 sessions with a licensed, trauma-informed therapist — at no cost to the family.",
              },
              {
                number: "95%",
                label: "direct to care",
                desc: "95 cents of every dollar goes toward covering the cost of therapy sessions for children in need.",
              },
              {
                number: "1",
                label: "turning point",
                desc: "A child learns to manage big emotions, a family begins to heal together, and a community grows stronger.",
              },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-3xl sm:text-4xl font-bold text-primary mb-1">{item.number}</p>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">{item.label}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Tax-Deductible Notice */}
          <div className="bg-primary/5 border border-primary/10 rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 mb-1">Tax-Deductible</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                All donations are tax-deductible. You&apos;ll receive an automated receipt via email.
              </p>
            </div>
            <span className="font-mono text-sm text-primary font-bold bg-white px-4 py-2 rounded-lg border border-primary/10 shrink-0">
              EIN: {siteConfig.global.ein}
            </span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
