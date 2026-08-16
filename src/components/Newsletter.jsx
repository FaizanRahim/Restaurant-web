import { useState } from "react";
import { Mail } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section className="py-16 bg-teal">
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-center">
        <div className="rounded-3xl overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=900&q=80"
            alt="Strawberry milkshake splash"
            className="w-full h-64 object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 leading-snug text-white font-heading">
            Get Exclusive Cook Out Coupons &amp; Secret Menu Alerts
          </h2>
          <p className="mb-6 max-w-md font-body text-white/85">
            Join the list for weekly deals, secret menu drops, and first
            access to new shake flavors — straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md">
            <div className="flex items-center gap-2 flex-1 rounded-full px-4 py-3 bg-white">
              <Mail size={16} className="text-navysoft" />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full text-sm outline-none font-body text-navy"
              />
            </div>
            <button
              onClick={() => email && setSent(true)}
              className="rounded-full px-6 py-3 text-sm font-bold shrink-0 font-body bg-brandred text-white hover:bg-brandreddark"
            >
              {sent ? "Subscribed!" : "Subscribe"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
