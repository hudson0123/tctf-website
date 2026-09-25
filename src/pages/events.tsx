import { useMemo } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const events = [
  {
    title: "Jeni\u2019s Ice Cream Fundraiser",
    type: "Fundraiser",
    date: "2026-10-15",
    time: "4:00 PM \u2013 7:00 PM",
    location: "Jeni\u2019s Five Points \u00b7 1710 S. Lumpkin Street, Athens, GA",
    description:
      "Come enjoy scoops of your favorite flavors at Jeni\u2019s Five Points and 25% of your purchase will be donated back to Thriving Children Therapy Fund!",
    image: "/images/jenis.JPEG",
  },
];

function formatDate(dateStr: string) {
  const [year, month, day] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function Events() {
  const upcoming = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return events.filter((e) => {
      const [y, m, d] = e.date.split("-").map(Number);
      return new Date(y, m - 1, d) >= today;
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SEO title="Events" />
      <Navbar />

      <section className="pt-28 sm:pt-32 pb-10 bg-gray-50 border-b border-gray-100">
        <div className="section-container">
          <p className="text-primary font-bold text-sm uppercase tracking-widest mb-4">
            Get Involved
          </p>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Upcoming Events
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Join us at our community events to support children&apos;s mental
            health in Northeast Georgia.
          </p>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="section-container">
          {upcoming.length > 0 ? (
            <div className="flex flex-col gap-10">
              {upcoming.map((event) => (
                <div
                  key={event.date + event.title}
                  className="max-w-3xl mx-auto bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm"
                >
                  {event.image && (
                    <div className="relative aspect-2/1">
                      <Image
                        src={event.image}
                        alt={`${event.title} — ${formatDate(event.date)}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6 sm:p-8">
                    <p className="text-primary font-bold text-sm uppercase tracking-widest mb-2">
                      {event.type}
                    </p>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                      {event.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {event.description}
                    </p>
                    <div className="flex flex-col gap-3 text-sm text-gray-700">
                      <div className="flex items-center gap-3">
                        <svg
                          className="w-5 h-5 text-primary shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span className="font-medium">
                          {formatDate(event.date)} &middot; {event.time}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <svg
                          className="w-5 h-5 text-primary shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">
                No upcoming events right now. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
