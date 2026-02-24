import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/config/siteConfig";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <SEO title="Contact Us" />
      <Navbar />

      <section className="pt-32 pb-24 bg-gray-50 border-b border-gray-100">
        <div className="section-container">
          <p className="text-primary font-bold text-sm uppercase tracking-widest mb-4">Get In Touch</p>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            Have questions about our mission, how to donate, or how to access therapy? 
            We are here to help.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="section-container grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Contact Details */}
          <div className="lg:col-span-4 flex flex-col gap-12">
            <div>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Contact Info</h3>
              <ul className="space-y-8">
                <li className="flex gap-5" title="Email">
                  <div className="w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-primary/20">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Email Us</h4>
                    <a href={`mailto:${siteConfig.global.email}`} className="text-primary hover:underline font-medium">
                      {siteConfig.global.email}
                    </a>
                  </div>
                </li>
                <li className="flex gap-5" title="Phone">
                  <div className="w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-primary/20">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Call Us</h4>
                    <p className="text-gray-600 font-medium">
                      {siteConfig.global.phone}
                    </p>
                  </div>
                </li>
                <li className="flex gap-5" title="Location">
                  <div className="w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-primary/20">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Our Location</h4>
                    <p className="text-gray-600 font-medium whitespace-pre-line">
                      {siteConfig.global.location}
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-primary text-white">
              <h3 className="text-xl font-bold mb-4 font-heading tracking-tight">Socials</h3>
              <div className="flex gap-4">
                {siteConfig.socials.map((social) => (
                   <a key={social.name} href={social.url} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all font-bold">
                     {social.name[0]}
                   </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-8">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Send a Message</h3>
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
