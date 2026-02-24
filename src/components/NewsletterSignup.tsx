import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1000);
  };

  return (
    <div className="bg-primary py-16 px-6 relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stay Connected</h2>
        <p className="text-white/80 mb-8 text-lg">
          Join our newsletter to stay updated on our mission, upcoming events, and stories of impact.
        </p>

        {status === "success" ? (
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 animate-reveal">
            <svg className="w-12 h-12 text-white mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <h3 className="text-xl font-bold text-white mb-2">Thank You!</h3>
            <p className="text-white/80">You've successfully joined our mailing list.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 rounded-full bg-white border-2 border-transparent focus:border-white/30 focus:outline-none text-gray-900 shadow-lg"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-8 py-4 rounded-full bg-white text-primary font-bold shadow-lg hover:bg-gray-100 transition-all active:scale-95 disabled:opacity-50"
            >
              {status === "loading" ? "Joining..." : "Join Newsletter"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
