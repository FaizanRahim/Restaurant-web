import { AlertTriangle, ChevronRight, Flame, Salad, ShieldCheck, Sparkles } from "lucide-react";

const trayItems = [
  { step: "1. Select Your Main Entry", name: "Cook Out Double Cheeseburger", calories: 680, selected: true },
  { step: "2. Select Side Item #1", name: "Crispy French Fries (Small)", calories: 290 },
  { step: "3. Select Side Item #2", name: "Hushpuppies (Serving of 4)", calories: 240 },
  { step: "4. Select Beverage or Shake", name: "Fresh Strawberry Thick Milkshake", calories: 420 },
];

const macroRows = [
  ["Cook Out Double Cheeseburger", "680 kcal", "32 g", "38 g", "45 g", "1,520 mg"],
  ["Spicy Chicken Breast Sandwich", "510 kcal", "26 g", "22 g", "41 g", "880 mg"],
  ["Hickory Smoked BBQ Plate", "840 kcal", "42 g", "48 g", "52 g", "1,450 mg"],
  ["Charbroiled Hot Dog (Plain)", "280 kcal", "11 g", "14 g", "24 g", "610 mg"],
  ["Banana Pudding Milkshake", "420 kcal", "8 g", "12 g", "66 g", "280 mg"],
];

function Chip({ children, active = false }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold border ${
        active ? "bg-brandred text-white border-brandred" : "bg-white text-navy border-hline"
      }`}
    >
      {children}
    </span>
  );
}

function InfoCard({ title, body, accentClassName, titleClassName }) {
  return (
    <div className={`rounded-2xl border border-hline bg-white p-4 ${accentClassName || ""}`}>
      <p className={`text-sm font-extrabold font-heading text-navy mb-2 ${titleClassName || ""}`}>{title}</p>
      <p className="text-sm leading-relaxed text-navysoft">{body}</p>
    </div>
  );
}

export default function NutritionPage() {
  return (
    <main className="bg-cream">
      <section className="bg-creamsoft/70 border-b border-hline/70">
        <div className="max-w-6xl mx-auto px-5 pt-10 pb-12">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-brandred/10 px-3 py-1 text-[11px] font-bold tracking-widest uppercase text-brandred mb-5">
                <Sparkles size={13} />
                Nutrition &amp; Allergens
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1] mb-5 font-heading text-navy">
                Your Guide to Healthy
                <span className="block text-teal">Grilling &amp; Balance</span>
              </h1>
              <p className="text-base leading-relaxed max-w-xl font-body text-navysoft">
                Transparent calorie counts, protein weights, and allergen disclosures. Use our interactive tray calculator below to customize your Cook Out meal down to the exact carb.
              </p>
            </div>

            <div className="rounded-[1.75rem] overflow-hidden shadow-lg border border-hline bg-white">
              <img
                src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=80"
                alt="Fresh grilled meal in a bowl"
                className="w-full h-[265px] sm:h-[290px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 pt-12 pb-16">
        <div className="text-center mb-7">
          <p className="text-[11px] font-bold tracking-[0.28em] uppercase text-brandorange mb-2">
            Build a balanced meal
          </p>
          <h2 className="text-3xl sm:text-[2.1rem] font-extrabold font-heading text-navy">
            Interactive Tray &amp; Shake Counter
          </h2>
          <p className="mt-2 text-sm font-body text-navysoft max-w-xl mx-auto">
            Select your favorite main, side, and shake to instantly calculate the total macros for your customized combo order.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_0.72fr] gap-6 items-start min-h-[640px]">
          <div className="space-y-3">
            {trayItems.map((item) => (
              <div key={item.step}>
                <p className="text-[11px] font-bold tracking-wide text-navysoft mb-1.5">{item.step}</p>
                <div
                  className={`flex items-center justify-between gap-4 rounded-xl border px-4 py-3 shadow-sm ${
                    item.selected ? "bg-white border-brandorange/60" : "bg-white border-hline"
                  }`}
                >
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-navy truncate">{item.name}</p>
                  </div>
                  <p className={`${item.selected ? "text-brandred" : "text-navysoft"} text-sm font-bold whitespace-nowrap`}>
                    {item.calories} Calories
                  </p>
                </div>
              </div>
            ))}
          </div>

          <aside className="rounded-[1.5rem] border border-brandorange/50 bg-brandorange/10 p-5 lg:p-6 shadow-sm min-h-[640px]">
            <p className="text-lg font-extrabold font-heading text-navy mb-4">Your Meal Tally</p>
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="space-y-4 text-sm flex-1 pr-2">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-navysoft">Total Calories</span>
                  <span className="text-2xl font-extrabold text-brandred">1,630 kcal</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-navysoft">Protein Content</span>
                  <span className="font-bold text-teal">52 g</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-navysoft">Fat Content</span>
                  <span className="font-bold text-navy">74 g</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-navysoft">Total Carbs</span>
                  <span className="font-bold text-brandorange">118 g</span>
                </div>
              </div>

              <div className="w-24 h-80 rounded-[1.35rem] bg-white border border-hline relative overflow-hidden flex items-center justify-center shrink-0">
                <div className="absolute left-3 top-4 bottom-4 w-9 rounded-[1.1rem] border border-hline bg-creamsoft overflow-hidden">
                  <div className="absolute left-0 top-4 bottom-4 right-0 rounded-[1rem] border border-dashed border-teal/30" />
                  <div className="absolute left-1/2 top-6 -translate-x-1/2 w-7 h-7 rounded-full border-[3px] border-teal border-r-transparent border-b-transparent rotate-45" />
                </div>
                <div className="absolute left-[3.2rem] top-4 bottom-4 flex flex-col items-center justify-center gap-[2px] overflow-hidden">
                  {Array.from({ length: 34 }).map((_, index) => (
                    <span
                      key={index}
                      className={`text-[8px] font-bold tracking-[0.35em] leading-none rotate-90 ${
                        index < 10 ? "text-teal" : index < 20 ? "text-navy" : index < 28 ? "text-brandorange" : "text-hline"
                      }`}
                    >
                      DAILY NUTRITION
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 pb-12">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-brandorange mb-2">Calories &amp; Macro Table</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-navy">Calorie &amp; Macro Table</h2>
            <p className="text-sm text-navysoft mt-1">Comprehensive breakdown of items including sodium and fats.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Chip active>All</Chip>
            <Chip>Gluten-Free</Chip>
            <Chip>Low-Carb</Chip>
            <Chip>High-Protein</Chip>
            <Chip>Under 500 Cal</Chip>
          </div>
        </div>

        <div className="rounded-[1.75rem] overflow-hidden border border-hline shadow-sm bg-white">
          <div className="grid grid-cols-6 gap-0 bg-navy text-white text-[11px] font-bold tracking-wide uppercase">
            <div className="px-4 py-3 col-span-2">Menu Item</div>
            <div className="px-4 py-3">Calories</div>
            <div className="px-4 py-3">Protein</div>
            <div className="px-4 py-3">Fat</div>
            <div className="px-4 py-3">Carbs</div>
          </div>

          <div className="divide-y divide-hline">
            {macroRows.map((row, index) => (
              <div key={row[0]} className={`grid grid-cols-6 ${index % 2 === 0 ? "bg-white" : "bg-creamsoft"}`}>
                <div className="px-4 py-4 col-span-2 font-semibold text-navy">{row[0]}</div>
                <div className="px-4 py-4 font-bold text-brandred">{row[1]}</div>
                <div className="px-4 py-4 text-teal font-semibold">{row[2]}</div>
                <div className="px-4 py-4 text-navysoft font-semibold">{row[3]}</div>
                <div className="px-4 py-4 text-teal font-semibold">{row[4]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 pb-16">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-[1.75rem] bg-white border border-hline shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-brandred/10 text-brandred flex items-center justify-center">
                <AlertTriangle size={20} />
              </div>
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-brandred">Allergen Warning Index</p>
                <h3 className="text-xl font-extrabold font-heading text-navy">We handle ingredients carefully.</h3>
              </div>
            </div>
            <p className="font-body text-sm leading-relaxed text-navysoft mb-5">
              We handle wheat, dairy, soy, eggs, and peanuts in our kitchen. Please review our warnings before ordering.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-brandred/10 text-brandred px-3 py-2 text-sm font-semibold shadow-sm">
                <ShieldCheck size={16} />
                Shellfish Free
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-creamsoft text-navy px-3 py-2 text-sm font-semibold border border-hline">
                <Flame size={16} />
                We do not fry shellfish in our standard oil.
              </span>
            </div>
          </div>

          <div className="rounded-[1.75rem] bg-white border border-hline shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-teal/10 text-teal flex items-center justify-center">
                <Salad size={20} />
              </div>
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-teal">Nutrition Advice</p>
                <h3 className="text-xl font-extrabold font-heading text-navy">Simple swaps that keep flavor high.</h3>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <InfoCard
                title="Go Low-Carb Like a Pro"
                body="Swap buns for lettuce wraps or grilled chicken plates. Ask for extra vegetables and skip the fries when possible."
                accentClassName="bg-teal/5 border-teal/20"
                titleClassName="text-teal"
              />
              <InfoCard
                title="Calorie Budgeting"
                body="Enjoy a legendary tray meal within your limits by opting for a low-carb chicken tray or sharing a shake."
                accentClassName="bg-brandorange/10 border-brandorange/25"
                titleClassName="text-brandorange"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}