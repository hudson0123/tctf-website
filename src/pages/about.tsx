import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { siteConfig } from "@/config/siteConfig";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <SEO title="About Us" />
      <Navbar />

      <section className="pt-28 sm:pt-32 pb-10 bg-gray-50 border-b border-gray-100">
        <div className="section-container">
          <p className="text-primary font-bold text-sm uppercase tracking-widest mb-4 animate-reveal">Our Story</p>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 animate-reveal">
            Who We Are & <span className="text-primary">How We Began</span>
          </h1>
          <div className="max-w-3xl animate-reveal-delayed">
            <div className="prose prose-lg text-gray-600 leading-relaxed space-y-6">
              <p>
                Our foundation was born out of a simple but powerful observation: in the Northeast Georgia area, many children are not receiving the mental health support they desperately need because their families simply couldn't afford it.
              </p>
              <p>
                Our founder and a group of dedicated early childhood key stakeholders and community members saw this gap and decided to take action. They envisioned a community where financial status never dictates a child's timely access to mental health.
              </p>
              <p>
                Today, we partner with local schools, therapists, and families to identify children in need and provide the direct financial assistance required to begin their healing journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Data */}
      <section className="py-10 bg-white">
        <div className="section-container">
          <p className="text-primary font-bold text-xs uppercase tracking-widest mb-2">Why This Matters</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">The Data</h2>

          {/* Stat highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-primary/5 rounded-xl p-5 border border-primary/10 text-center">
              <p className="text-3xl sm:text-4xl font-bold text-primary mb-1">13.6%</p>
              <p className="text-sm text-gray-600">of children ages 4&ndash;11 have a diagnosable mental health disorder</p>
            </div>
            <div className="bg-primary/5 rounded-xl p-5 border border-primary/10 text-center">
              <p className="text-3xl sm:text-4xl font-bold text-primary mb-1">1.2</p>
              <p className="text-sm text-gray-600">child psychiatrists per 100k children in Georgia &mdash; vs. 4.5 nationally</p>
            </div>
            <div className="bg-primary/5 rounded-xl p-5 border border-primary/10 text-center">
              <p className="text-3xl sm:text-4xl font-bold text-primary mb-1">1 in 4</p>
              <p className="text-sm text-gray-600">children have a mental, emotional, or behavioral health concern</p>
            </div>
          </div>

          {/* Detail paragraphs */}
          <div className="space-y-4 text-gray-600 leading-relaxed text-base sm:text-lg">
            <p>
              In Georgia, 12.3% of adolescents experience major depression &mdash; exceeding the overall adult rate of 7.8%. The state has significantly fewer child psychiatrists per capita than the national average, leaving young people particularly vulnerable to extended wait times and gaps in care.
            </p>
            <p>
              Nationally, roughly 28% of boys and 23% of girls ages 3&ndash;17 have at least one mental, emotional, developmental, or behavioral health concern, with ADHD and anxiety disorders among the most common. Research shows that behavioral and cognitive behavioral therapy is highly effective for children ages 4&ndash;9, yet access remains limited &mdash; especially for families facing financial barriers.
            </p>
            <p>
              These numbers reinforce what we see every day in Northeast Georgia: children need timely access to evidence-based therapy, and cost should never be the reason they go without it.
            </p>
          </div>

          {/* Sources */}
          <div className="mt-6 pt-4 border-t border-gray-100">
            <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-2">Sources</p>
            <ul className="text-xs text-gray-400 space-y-1">
              <li>
                <a href="https://mhstats.org/states/georgia" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  MHStats.org &mdash; Georgia Mental Health Statistics
                </a>
              </li>
              <li>
                <a href="https://nschdata.org/browse/survey/results?q=11499&r=1&g=1195" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  National Survey of Children&apos;s Health (NSCH), 2023
                </a>
              </li>
              <li>
                <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10465658/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  PMC &mdash; Mental Health Interventions for Children Ages 4&ndash;9
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
