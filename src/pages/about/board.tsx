import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import BODCard from "@/components/BODCard";
import { siteConfig } from "@/config/siteConfig";

const boardMembers = [
  {
    name: "Robin Schafer",
    role: "Founder / Executive Director",
    bio: "Robin is a Licensed Clinical Social Worker (LCSW) with a passion for helping children and families navigate mental health challenges. With over 15 years of experience in the Athens area, she saw firsthand the barriers created by high therapy costs and founded TCTF to bridge that gap. She believes that mental health is a fundamental right, not a privilege reserved for those who can afford it.",
    image: "", // Placeholder
  },
  {
    name: "Jane Doe",
    role: "President",
    bio: "Jane has been a community advocate in Athens for over a decade. Her background in educational leadership and non-profit management provides the strategic vision necessary to lead our board. She is dedicated to expanding our reach across all schools in the district.",
    image: "",
  },
  {
    name: "John Smith",
    role: "Treasurer",
    bio: "John brings 20 years of financial expertise to the TCTF board. As a CPA, he ensures that every donation is handled with absolute transparency and that we maintain our commitment to fiscal responsibility as a 501(c)(3).",
    image: "",
  },
  {
    name: "Alice Johnson",
    role: "Secretary",
    bio: "Alice is a local educator who sees the daily impact of mental health on student performance. She keeps our records organized and helps us maintain strong relationships with local schools and counselors.",
    image: "",
  },
];

export default function BoardOfDirectors() {
  return (
    <div className="min-h-screen bg-white">
      <SEO title="Board of Directors" />
      <Navbar />

      <section className="pt-32 pb-24 bg-gray-50 border-b border-gray-100">
        <div className="section-container text-center">
          <p className="text-primary font-bold text-sm uppercase tracking-widest mb-4">Our Leadership</p>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Board of Directors
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            The dedicated individuals behind our mission to support the children of Athens.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {boardMembers.map((member) => (
              <BODCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-white/5 opacity-50 flex items-center justify-center font-bold text-[20vw] select-none pointer-events-none">
          TCTF
        </div>
        <div className="section-container text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Interested in joining our board?</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            We are always looking for passionate community members who want to donate their time and expertise to help the children of Athens.
          </p>
          <a href="/contact" className="px-10 py-4 bg-white text-primary rounded-full font-bold text-lg hover:bg-gray-100 transition-all inline-block shadow-xl">
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
