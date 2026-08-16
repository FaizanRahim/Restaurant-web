const timeline = [
  {
    year: "1989",
    title: "The First Grill",
    body: "Greensboro, NC welcoming our first customer with $0.99 burgers.",
  },
  {
    year: "1998",
    title: "The Tray Is Born",
    body: "Introduced the first custom Cook Out Tray, redefining value.",
  },
  {
    year: "2010",
    title: "Expansion East",
    body: "Over 100 locations across North Carolina and neighboring states.",
  },
  {
    year: "2026",
    title: "300+ Strong",
    body: "Delivering the freshest charbroiled flavors across the American South.",
  },
];

function InfoCard({ title, body }) {
  return (
    <div className="rounded-2xl bg-white border border-hline shadow-sm p-5">
      <p className="text-base font-extrabold font-heading text-navy mb-2">{title}</p>
      <p className="text-sm leading-relaxed text-navysoft">{body}</p>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="bg-cream">
      <section className="max-w-6xl mx-auto px-4 sm:px-5 pt-10 pb-14">
        <div className="grid lg:grid-cols-[1fr_0.95fr] gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-brandred/10 px-3 py-1 text-[11px] font-bold tracking-widest uppercase text-brandred mb-5">
              The Cook Out Way
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.05] mb-5 font-heading text-navy">
              Real Fire. Real Fresh.
              <span className="block text-brandred">Since 1989.</span>
            </h1>
            <p className="text-base leading-relaxed max-w-xl font-body text-navysoft">
              Founded on the belief that fast food shouldn't compromise on flavor or freshness. Our burgers are always charbroiled over a real outdoor-style grill, and our legendary milkshakes are spun by hand, daily.
            </p>
          </div>

          <div className="rounded-[1.75rem] overflow-hidden shadow-xl border border-hline bg-white">
            <img
              src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80"
              alt="Charbroiled grill in the kitchen"
              className="w-full h-[300px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-5 pb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-[2.15rem] font-extrabold font-heading text-navy">Our Journey Through Time</h2>
          <p className="text-sm text-navysoft mt-2">How a single Greensboro grill became a Southern fast-food legend.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {timeline.map((item) => (
            <div key={item.year} className="rounded-2xl bg-creamsoft border border-hline shadow-sm p-5">
              <p className="text-3xl font-extrabold text-brandred font-heading mb-4">{item.year}</p>
              <p className="text-lg font-extrabold text-navy mb-2 font-heading">{item.title}</p>
              <p className="text-sm leading-relaxed text-navysoft">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brandorange/90 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-5 grid lg:grid-cols-[1.1fr_0.75fr] gap-8 items-center">
          <div>
            <div className="inline-flex items-center rounded-full bg-brandred text-white px-3 py-1 text-[11px] font-bold tracking-widest uppercase mb-4">
              By the Numbers
            </div>
            <h2 className="text-3xl sm:text-[2.25rem] font-extrabold font-heading text-navy leading-tight max-w-xl">
              Fast Food Value Built on Premium Standards
            </h2>
            <p className="mt-5 max-w-xl text-sm sm:text-base leading-relaxed text-navy/80">
              We source our fresh beef daily from regional farms, spinning real fruit and candy toppings directly into milkshakes. Here is why our standard stands tall.
            </p>
          </div>

          <div className="flex justify-start lg:justify-center">
            <div className="rounded-3xl bg-white shadow-lg px-8 py-7 text-center">
              <p className="text-4xl font-extrabold font-heading text-brandred">10M+</p>
              <p className="text-sm font-semibold text-navy mt-2">Happy Customers</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-5 py-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-[2.15rem] font-extrabold font-heading text-navy">Our Team &amp; Philosophy</h2>
          <p className="text-sm text-navysoft mt-2">We treat our staff like family, keeping the energy high and customer lines moving.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4">
          <InfoCard
            title="Cooked to Order Promise"
            body="We do not use warming drawers or microwaves. Your cheeseburger hits the heat the exact moment you place the order."
          />
          <InfoCard
            title="Legendary Value Trays"
            body="We keep prices fair because we believe a hearty meal should always remain accessible. Our legendary trays give you maximum food, zero compromise."
          />
        </div>
      </section>
    </main>
  );
}