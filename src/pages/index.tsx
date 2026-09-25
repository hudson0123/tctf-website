import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FloatingDonateButton from "@/components/FloatingDonateButton";
import { siteConfig } from "@/config/siteConfig";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <SEO />
      <Navbar />

      {/* Hero Section */}
      <section data-testid="hero" className="relative min-h-svh">
        {/* Image area */}
        <div className="relative h-[60vh] sm:h-[65vh] lg:h-[70vh]">
          {/* Mobile: hero-1, Desktop: child-1 */}
          <Image
            src="/images/hero-1.jpg"
            alt="Child smiling"
            fill
            className="object-cover object-top lg:hidden"
            priority
          />
          <Image
            src="/images/hero-2.jpg"
            alt="Child smiling"
            fill
            className="object-cover hidden lg:block"
            style={{ objectPosition: "center 30%" }}
            priority
          />
          {/* Fade to white at bottom */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-white to-transparent" />
        </div>

        {/* Text below image, bottom of viewport */}
        <div className="bg-white px-6 sm:px-10 lg:px-16 pb-10 pt-4">
          <div className="max-w-2xl mx-auto text-center animate-reveal">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary leading-[1.1] mb-4 sm:mb-6">
              {siteConfig.hero.title}
            </h1>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
              {siteConfig.hero.mission}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/donate"
                className="px-6 py-3 min-h-11 rounded-md font-semibold bg-primary text-white transition-opacity hover:opacity-90 active:scale-95 text-center"
              >
                Donate Now
              </Link>
              <Link
                href="/therapy"
                className="px-6 py-3 min-h-11 rounded-md font-semibold text-primary border-2 border-primary transition-colors hover:bg-primary/5 text-center"
              >
                Seek Care
              </Link>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              Are you a therapist?{" "}
              <Link href="/therapy" className="text-primary font-semibold hover:underline">
                Join our network
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Mission Preview — image left, text right */}
      <section className="py-10 bg-white">
        <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-4/5 rounded-2xl overflow-hidden">
            <Image src="/images/group-1.jpg" alt="Group of children" fill className="object-cover" />
          </div>
          <div>
            <p className="text-primary font-bold text-sm uppercase tracking-widest mb-3">Our Vision</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Every child deserves a <span className="text-primary">bright future</span>.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
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
      <section className="py-10 bg-gray-50 border-y border-gray-100">
        <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-primary font-bold text-sm uppercase tracking-widest mb-3">How We Help</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Accessing Care</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We bridge the gap between financial need and necessary mental health services for children in Athens.
            </p>
            <div className="space-y-5 mb-8">
              {[
                { step: "1", title: "Submit Intake Form", desc: "Fill out our brief Google Form intake and pre-therapy survey to let us know you're interested." },
                { step: "2", title: "Match to Local Therapist", desc: "We review your interest form and match you with one of our approved local therapist partners." },
                { step: "3", title: "Begin Care", desc: "Once approved, we pay the therapist directly, allowing your child to start sessions." },
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
          <div className="relative aspect-video lg:aspect-4/3 rounded-2xl overflow-hidden">
            <Image src="/images/child-1.jpg" alt="Child smiling" fill className="object-cover" />
          </div>
        </div>
      </section>

      <Footer />
      <FloatingDonateButton />
    </div>
  );
}
