import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { siteConfig } from "@/config/siteConfig";

export default function Therapy() {
  return (
    <div className="min-h-screen bg-white">
      <SEO title="Therapy Services" />
      <Navbar />

      <section className="pt-32 pb-24 bg-gray-50 border-b border-gray-100">
        <div className="section-container">
          <p className="text-primary font-bold text-sm uppercase tracking-widest mb-4">Families & Caregivers</p>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 max-w-4xl">
            Accessing <span className="text-primary">Mental Health Support</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            We understand that seeking therapy for your child can be overwhelming. We are here to help remove the financial burden.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">How It Works</h2>
            <div className="space-y-12">
              {[
                {
                  step: "01",
                  title: "Submit Interest",
                  desc: "Fill out our brief Google Form intake to let us know you're interested in funding support."
                },
                {
                  step: "02",
                  title: "Initial Assessment",
                  desc: "We review your interest form and match you with one of our approved local therapist partners."
                },
                {
                  step: "03",
                  title: "Begin Care",
                  desc: "Once approved, we pay the therapist directly, allowing your child to start sessions immediately."
                }
              ].map((item) => (
                <div key={item.step} className="flex gap-6">
                  <span className="text-4xl font-bold text-primary/20 shrink-0">{item.step}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100 flex flex-col items-center text-center justify-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Ready to Start?</h2>
            <p className="text-gray-600 mb-10 leading-relaxed">
              Click below to fill out our intake form via Google Forms. This is the first step in receiving funding support.
            </p>
            <a 
              href={siteConfig.therapy.intakeFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-primary/90 transition-all shadow-xl inline-flex items-center gap-2"
            >
              Intake Google Form
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <p className="mt-8 text-xs text-gray-400">
              Your information is kept strictly confidential according to our privacy policy.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Are you a therapist?</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12">
            We are always expanding our network of local Athens therapists. If you'd like to partner with us to provide care, we'd love to hear from you.
          </p>
          <Link href="/contact" className="px-8 py-4 bg-white text-primary rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg">
            Join Our Network
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
