import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import NewsletterSignup from "@/components/NewsletterSignup";
import { siteConfig } from "@/config/siteConfig";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <SEO title="About Us" />
      <Navbar />

      <section className="pt-32 pb-24 bg-gray-50 border-b border-gray-100">
        <div className="section-container">
          <p className="text-primary font-bold text-sm uppercase tracking-widest mb-4 animate-reveal">Our Story</p>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 animate-reveal">
            Who We Are & <span className="text-primary">How We Began</span>
          </h1>
          <div className="max-w-3xl animate-reveal-delayed">
            <div className="prose prose-lg text-gray-600 leading-relaxed space-y-6">
              <p>
                Our foundation was born out of a simple but powerful observation: in the Northeast Georgia area, many children were not receiving the mental health support they desperately needed because their families simply couldn't afford it.
              </p>
              <p>
                Our founder, Robin, and a group of dedicated community members saw this gap and decided to take action. They envisioned a community where financial status never dictates a child's access to mental health.
              </p>
              <p>
                Today, as a 501(c)(3) non-profit, we partner with local schools, therapists, and families to identify children in need and provide the direct financial assistance required to begin their healing journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="bg-primary/5 p-12 rounded-3xl border border-primary/10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              We are committed to transparency, inclusivity, and rapid action. Every dollar donated goes directly into a fund specifically for children's therapy costs.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-2xl font-bold text-primary italic">501</div>
                <p className="text-sm text-gray-700 font-bold uppercase tracking-wider">Registered 501(c)(3) Non-Profit</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Looking Forward</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Expansion is on our horizon. We hope to not only support direct therapy but also fund community-wide educational programs that help normalize mental health support for children.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Based in Athens, GA, we are proud to serve our local neighbors and contribute to the well-being of the next generation.
            </p>
          </div>
        </div>
      </section>

      <NewsletterSignup />
      <Footer />
    </div>
  );
}
