import { useState } from "react";
import { ChevronDown } from "lucide-react";

const items = [
  {
    q: "What's included in the famous Cook Out Tray?",
    a: "Every tray comes with your choice of a main item, two sides, and a drink — all for one low price. Swap in any burger, chicken sandwich, or BBQ plate.",
  },
  {
    q: "Are your burgers really charbroiled?",
    a: "Yes — every burger is cooked over an open flame grill, never griddled, for that signature smoky char.",
  },
  {
    q: "How late are you open?",
    a: "Most locations stay open until 3 or 4 AM, seven days a week, so late-night cravings are always covered.",
  },
];

function FAQItem({ q, a, open, onClick }) {
  return (
    <div
      className="rounded-xl px-5 py-4 cursor-pointer transition-colors bg-creamsoft border border-hline"
      onClick={onClick}
    >
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-bold font-heading text-navy">{q}</p>
        <ChevronDown
          size={18}
          className={`text-brandred shrink-0 transition-transform ${open ? "rotate-180" : "rotate-0"}`}
        />
      </div>
      {open && (
        <p className="text-sm mt-3 leading-relaxed font-body text-navysoft">{a}</p>
      )}
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="max-w-4xl mx-auto px-5 py-16">
      <h2 className="text-2xl sm:text-3xl font-extrabold mb-7 font-heading text-navy">
        Frequently Asked Questions
      </h2>
      <div className="space-y-3">
        {items.map((it, i) => (
          <FAQItem
            key={it.q}
            q={it.q}
            a={it.a}
            open={open === i}
            onClick={() => setOpen(open === i ? -1 : i)}
          />
        ))}
      </div>
    </section>
  );
}
