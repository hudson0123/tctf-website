import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { siteConfig } from "@/config/siteConfig";

const externalIcon = (
  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const sessions = [
  {
    badge: "Before Session 1",
    title: "Getting Ready",
    desc: "Before meeting the child, the therapist usually connects with a parent or caregiver to understand what\u2019s going on \u2014 recent changes at home, behaviors that are showing up, things that have already been tried.",
    accent: "bg-gray-100 text-gray-600",
  },
  {
    badge: "Sessions 1\u20132",
    title: "Building Trust",
    desc: "For many children, therapy doesn\u2019t start with talking about feelings \u2014 it starts with building trust. During the first few sessions, the therapist\u2019s primary goal is to become a safe, consistent, and predictable presence. Depending on the child\u2019s age, personality, and needs, this may happen through conversation, play, creative activities, games, or other age-appropriate approaches.\n\nAs the child becomes more comfortable, the therapist carefully observes how they communicate, interact, solve problems, express emotions, and respond to new situations. They begin to identify patterns, strengths, challenges, and the experiences that may be influencing the child\u2019s well-being. These early sessions help the therapist understand the child as a whole person while creating a supportive environment where the child feels accepted, understood, and safe enough to begin the therapeutic process.",
    accent: "bg-primary/10 text-primary",
  },
  {
    badge: "Sessions 3\u20135",
    title: "The Child\u2019s Story Starts to Show",
    desc: "As children begin to feel safe, they also become more comfortable expressing themselves. In play therapy, this often happens through play, with toys, stories, or repeated themes reflecting experiences and emotions they may not have words for. In other forms of therapy, children may express themselves through conversation, art, games, or other activities. The therapist follows the child\u2019s lead, notices patterns, reflects what they observe, and helps the child explore emotions and experiences in a way that feels safe and supportive.",
    accent: "bg-primary/10 text-primary",
  },
  {
    badge: "Sessions 6\u20138",
    title: "Working Through It",
    desc: "As therapy continues, children begin to practice new ways of handling challenges. In play therapy, this may be seen through changes in their play and stories. In other types of therapy, it may happen through conversation, activities, or practicing new skills. The therapist helps children build healthy coping strategies, manage emotions, and solve problems. Parents and caregivers are often given simple tools to support their child\u2019s progress at home.",
    accent: "bg-primary/10 text-primary",
  },
  {
    badge: "Sessions 9\u201310",
    title: "Noticing Progress, Planning Ahead",
    desc: "As therapy comes to a close, the therapist reflects with the child and family on the progress that has been made. Whether growth has been shown through play, conversation, or other therapeutic activities, the focus is on recognizing positive changes, celebrating new skills, and determining the next steps. Together, the therapist and family decide whether additional therapy is needed or if the child has the tools to continue growing with support at home.",
    accent: "bg-secondary/10 text-secondary",
  },
];

export default function Therapy() {
  return (
    <div className="min-h-screen bg-white">
      <SEO title="Therapy Services" />
      <Navbar />

      {/* Hero */}
      <section className="pt-24 sm:pt-32 pb-10 bg-gray-50 border-b border-gray-100 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-[10%] w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-0 left-[20%] w-96 h-96 rounded-full bg-secondary/5 blur-3xl" />
        </div>
        <div className="section-container relative z-10">
          <p className="text-primary font-bold text-sm uppercase tracking-widest mb-4">Families & Caregivers</p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 max-w-4xl leading-tight">
            Accessing <span className="text-primary">Mental Health Support</span>
          </h1>
          <p className="text-base sm:text-xl text-gray-600 max-w-2xl leading-relaxed">
            We understand that seeking therapy for your child can be overwhelming. We are here to help remove the financial burden.
          </p>
        </div>
      </section>

      {/* How To Start — horizontal steps */}
      <section className="py-12 bg-white">
        <div className="section-container">
          <div className="text-center mb-10">
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">Getting Started</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">How To Start</h2>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Connecting line — desktop */}
            <div className="hidden md:block absolute top-10 left-[calc(16.67%+1.5rem)] right-[calc(16.67%+1.5rem)] h-0.5 bg-primary/10 z-0" />

            {[
              {
                step: "1",
                title: "Submit Intake Form",
                desc: "Fill out our brief Google Form intake and pre-therapy survey to let us know you\u2019re interested.",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
              },
              {
                step: "2",
                title: "Match to Local Therapist",
                desc: "We review your interest form and match you with one of our approved local therapist partners.",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
              },
              {
                step: "3",
                title: "Begin Care",
                desc: "Once approved, we pay the therapist directly, allowing your child to start sessions.",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
              },
            ].map((item, idx) => (
              <div key={item.step} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-lg mb-4">
                  {item.icon}
                </div>
                {/* Arrow — desktop only, between cards */}
                {idx < 2 && (
                  <div className="hidden md:block absolute top-4 -right-4 z-20">
                    <svg className="w-5 h-5 text-primary/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
                <p className="text-xs font-bold text-primary/40 uppercase tracking-widest mb-1">Step {item.step}</p>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm max-w-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — Ready to Start */}
      <section className="bg-gray-50 border-y border-gray-100">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-0 rounded-2xl overflow-hidden shadow-lg">
            <div className="md:col-span-3 bg-primary p-8 md:p-10 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Start?</h2>
              <p className="text-white/70 leading-relaxed mb-6 max-w-lg">
                Fill out our intake form to begin the process. This is the first step in receiving funding support for your child&apos;s therapy.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={siteConfig.therapy.intakeFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 bg-white text-primary rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg inline-flex items-center justify-center gap-2"
                >
                  Intake Form
                  {externalIcon}
                </a>
              </div>
            </div>
            <div className="md:col-span-2 bg-primary/90 p-8 md:p-10 flex flex-col justify-center border-t md:border-t-0 md:border-l border-white/10">
              <p className="text-white/50 font-bold text-xs uppercase tracking-widest mb-4">Pre-Therapy Surveys</p>
              <div className="flex flex-col gap-3">
                <a
                  href={siteConfig.therapy.surveyCaregiver}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 bg-white/10 text-white rounded-xl font-semibold text-sm hover:bg-white/20 transition-all inline-flex items-center justify-between gap-3"
                >
                  Caregiver Survey
                  {externalIcon}
                </a>
                <a
                  href={siteConfig.therapy.surveyParticipant}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 bg-white/10 text-white rounded-xl font-semibold text-sm hover:bg-white/20 transition-all inline-flex items-center justify-between gap-3"
                >
                  Participant Survey (Ages 14–17)
                  {externalIcon}
                </a>
              </div>
              <p className="mt-4 text-xs text-white/30">
                Your information is kept strictly confidential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What 10 Sessions Look Like — timeline */}
      <section className="py-12 bg-white">
        <div className="section-container max-w-4xl">
          <div className="text-center mb-8">
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">The Journey</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">What 10 Sessions of Therapy Look Like</h2>
          </div>

          <div className="bg-primary/5 rounded-2xl p-6 md:p-8 border border-primary/10 mb-10">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Why 10 sessions?</h3>
            <p className="text-gray-600 leading-relaxed">
              Every child&apos;s path looks a little different — some need more time, some need less. But these 10 sessions represent a real, tested rhythm of building trust, uncovering what&apos;s underneath, and helping a child come out the other side steadier than they went in.
            </p>
          </div>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gray-200" />

            <div className="space-y-0">
              {sessions.map((session, idx) => (
                <div key={idx} className="relative flex gap-6 md:gap-8 group">
                  {/* Timeline dot */}
                  <div className="relative z-10 shrink-0 pt-6">
                    <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-white border-2 border-gray-200 group-hover:border-primary transition-colors flex items-center justify-center">
                      <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-primary/60 group-hover:bg-primary transition-colors" />
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="flex-1 pb-6 pt-4">
                    <div className="bg-gray-50 rounded-2xl p-5 md:p-6 border border-gray-100 group-hover:border-primary/10 group-hover:shadow-md transition-all duration-300">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 ${session.accent}`}>
                        {session.badge}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{session.title}</h3>
                      <div className="text-gray-500 leading-relaxed text-sm space-y-3">
                        {session.desc.split("\n\n").map((paragraph, pIdx) => (
                          <p key={pIdx}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Timeline end dot */}
            <div className="absolute left-4 md:left-6 bottom-0 z-10">
              <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-secondary/10 border-2 border-secondary/30 flex items-center justify-center -translate-x-[calc(50%-0.5px)]">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Therapist CTA */}
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-14 h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mx-auto mb-5">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">Are you a therapist?</h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto mb-6 leading-relaxed">
              We are always expanding our network of local Athens therapists. If you&apos;d like to partner with us to provide care, we&apos;d love to hear from you.
            </p>
            <a
              href={siteConfig.therapy.therapistApplicationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-all shadow-lg inline-flex items-center gap-2"
            >
              Apply to Join Our Network
              {externalIcon}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
