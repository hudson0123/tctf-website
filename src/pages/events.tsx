import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import NewsletterSignup from "@/components/NewsletterSignup";
import { siteConfig } from "@/config/siteConfig";

const events = [
  {
    title: "Inaugural Charity Night",
    date: "Coming Fall 2026",
    location: "Downtown Athens, GA",
    desc: "Join us for an evening of awareness and fundraising to launch our mission in the community.",
    type: "Fundraiser"
  },
  {
    title: "10% Night at Local Cafe",
    date: "TBD",
    location: "Regional Partner Locations",
    desc: "A percentage of all sales during these events go directly to our therapy fund.",
    type: "Percent Night"
  },
];

export default function Events() {
  return (
    <div className="min-h-screen bg-white">
      <SEO title="Upcoming Events" />
      <Navbar />

      <section className="pt-32 pb-24 bg-gray-50 border-b border-gray-100">
        <div className="section-container">
          <p className="text-primary font-bold text-sm uppercase tracking-widest mb-4">Community & Events</p>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Supporting <span className="text-primary">Together</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            From fundraising galas to local percent nights, our community events power our ability to serve children in need.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event) => (
              <div key={event.title} className="p-10 rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-start">
                <span className="px-3 py-1 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full mb-6">
                  {event.type}
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{event.title}</h3>
                <div className="flex flex-col gap-1 mb-6">
                  <p className="text-gray-900 font-bold text-sm flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {event.date}
                  </p>
                  <p className="text-gray-500 text-sm flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {event.location}
                  </p>
                </div>
                <p className="text-gray-600 leading-relaxed text-base mb-8">
                  {event.desc}
                </p>
              </div>
            ))}
          </div>

          {events.length === 0 && (
            <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
               <p className="text-gray-500 font-medium">No public events currently scheduled. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      <NewsletterSignup />
      <Footer />
    </div>
  );
}
