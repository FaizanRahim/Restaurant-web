import Eyebrow from "./ui/Eyebrow.jsx";
import PillButton from "./ui/PillButton.jsx";

const rows = [
  { label: "Double Cheeseburger", val: "720 cal" },
  { label: "Large Fries", val: "470 cal" },
  { label: "Chocolate Milkshake", val: "640 cal" },
];

export default function MealFavorite() {
  return (
    <section className="max-w-6xl mx-auto px-5 pb-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="rounded-2xl p-6 bg-creamsoft border border-hline">
          <p className="font-bold text-sm mb-4 font-heading text-navy">My Meal Favorite</p>
          <div className="space-y-3 mb-4">
            {rows.map((r) => (
              <div
                key={r.label}
                className="flex items-center justify-between rounded-xl px-4 py-3 bg-white border border-hline"
              >
                <span className="text-sm font-medium font-body text-navy">{r.label}</span>
                <span className="text-sm font-semibold font-body text-navysoft">{r.val}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between px-1">
            <span className="text-sm font-bold font-body text-navy">Total Calories</span>
            <span className="text-sm font-extrabold font-body text-teal">1,830 cal</span>
          </div>
        </div>

        <div>
          <Eyebrow color="text-teal">Nutrition, made simple</Eyebrow>
          <h3 className="text-2xl font-extrabold mb-3 leading-snug font-heading text-navy">
            Customize Your Meal with Real Calories &amp; Macros
          </h3>
          <p className="mb-6 max-w-md font-body text-navysoft">
            Swap sides, resize your shake, or go bunless — our calculator
            updates calories, protein, and macros instantly as you build
            your tray.
          </p>
          <PillButton variant="teal">Try The Calculator</PillButton>
        </div>
      </div>
    </section>
  );
}
