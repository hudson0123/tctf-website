import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { siteConfig } from "@/config/siteConfig";

export default function Donate() {
  return (
    <div className="min-h-screen bg-white">
      <SEO title="Donate" />
      <Navbar />

      <section className="pt-32 pb-12 bg-gray-50 border-b border-gray-100">
        <div className="section-container text-center">
          <p className="text-primary font-bold text-sm uppercase tracking-widest mb-4">Support Our Cause</p>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Make an <span className="text-primary">Impact</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-12">
            Your donation goes directly to funding therapy sessions for children in need in Athens, GA. 
            Every contribution, no matter the size, helps a child thrive.
          </p>

          <div className="max-w-md mx-auto bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
             <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
               </svg>
             </div>
             <h2 className="text-2xl font-bold text-gray-900 mb-4">Online Giving</h2>
             <p className="text-gray-500 text-sm mb-8 leading-relaxed">
               We use **Givebutter** for secure, easy online donations. You can donate via Credit Card, Venmo, or PayPal.
             </p>
             <a 
               href={siteConfig.donate.givebutterUrl}
               target="_blank"
               rel="noopener noreferrer"
               className="w-full btn-primary block py-4 text-lg shadow-lg"
             >
               Donate via Givebutter
             </a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="section-container">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             <div className="p-10 rounded-2xl bg-gray-50 border border-gray-100">
               <h3 className="text-2xl font-bold text-gray-900 mb-6">Other Ways to Give</h3>
               <ul className="space-y-6">
                 <li className="flex gap-4">
                   <div className="w-10 h-10 bg-white rounded-full flex-shrink-0 flex items-center justify-center shadow-sm border border-gray-100">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                   </div>
                   <div>
                     <h4 className="font-bold text-gray-900">By Mail</h4>
                     <p className="text-gray-600 text-sm leading-relaxed">
                       Send check payable to **Thriving Children Therapy Fund** to:<br />
                       123 Example St, Athens, GA 30601
                     </p>
                   </div>
                 </li>
                 <li className="flex gap-4">
                   <div className="w-10 h-10 bg-white rounded-full flex-shrink-0 flex items-center justify-center shadow-sm border border-gray-100">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                   </div>
                   <div>
                     <h4 className="font-bold text-gray-900">Corporate Match</h4>
                     <p className="text-gray-600 text-sm leading-relaxed">
                       Many employers will match your donation to a 501(c)(3) non-profit. Check if your company has a matching gift program.
                     </p>
                   </div>
                 </li>
               </ul>
             </div>
             
             <div className="flex flex-col justify-center">
               <h3 className="text-2xl font-bold text-gray-900 mb-6 font-heading tracking-tight">Tax-Deductible Contributions</h3>
               <p className="text-gray-600 leading-relaxed mb-6">
                 All donations are tax-deductible to the full extent of the law. You will receive an automated receipt via email for all online donations.
               </p>
               <div className="inline-block px-4 py-2 bg-primary/5 rounded font-mono text-xs text-primary font-bold">
                 Federal EIN: {siteConfig.global.ein}
               </div>
             </div>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
