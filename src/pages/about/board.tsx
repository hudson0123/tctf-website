import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function BoardOfDirectors() {
  return (
    <div className="min-h-screen bg-white">
      <SEO title="Board of Directors" />
      <Navbar />

      <section className="pt-36 sm:pt-44 pb-10 bg-gray-50 border-b border-gray-100">
        <div className="section-container text-center">
          <p className="text-primary font-bold text-sm uppercase tracking-widest mb-4">Our Leadership</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Board of Directors
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Board member profiles are coming soon. Check back shortly!
          </p>
        </div>
      </section>

      {/* Board member cards — hidden until pics/bios are ready */}
      {/*
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {boardMembers.map((member) => (
              <BODCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>
      */}

      <section className="py-10 sm:py-16 bg-primary text-white overflow-hidden relative">
        <div className="section-container text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Interested in joining our board?</h2>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto mb-6 sm:mb-8">
            We are always looking for passionate community members who want to donate their time and expertise to help the children of Athens.
          </p>
          <a href="/contact" className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 bg-white text-primary rounded-full font-bold text-base sm:text-lg hover:bg-gray-100 transition-all inline-block text-center shadow-xl">
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
