import { CheckCircle2 } from "lucide-react";
import PillButton from "./ui/PillButton.jsx";

const items = [
  { title: "Pick Your Main", body: "Choose a burger, chicken sandwich, or BBQ plate" },
  { title: "Add Two Sides", body: "Hushpuppies, fries, onion rings & more" },
  { title: "Choose Your Drink", body: "Any fountain drink or one of our famous shakes" },
];

export default function BuildTray() {
  return (
    <section id="tray-builder" className="py-16 bg-brandorange">
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-block text-xs font-bold tracking-widest uppercase mb-3 px-3 py-1 rounded-full font-body bg-brandred text-white">
            Build Your Own Tray
          </span>
          <h2 className="text-3xl font-extrabold mb-4 leading-tight font-heading text-navy">
            Build Your Own Famous Cook Out Tray
          </h2>
          <p className="mb-6 max-w-md font-body text-[#4A3722]">
            Pick a main, two sides, and a drink — the tray that made Cook Out
            famous, built exactly how you like it, every single time.
          </p>
          <div className="space-y-4 mb-7">
            {items.map((it) => (
              <div key={it.title} className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-brandred mt-0.5 shrink-0" />
                <div>
                  <p className="font-bold text-sm font-heading text-navy">{it.title}</p>
                  <p className="text-sm font-body text-[#4A3722]">{it.body}</p>
                </div>
              </div>
            ))}
          </div>
          <PillButton to="/burgers">Build Your Tray</PillButton>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=900&q=80"
            alt="Cook Out tray with burger, fries and shake"
            className="w-full h-80 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
