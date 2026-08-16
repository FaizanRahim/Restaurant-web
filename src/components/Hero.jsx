import { ArrowRight } from "lucide-react";
import Eyebrow from "./ui/Eyebrow.jsx";
import PillButton from "./ui/PillButton.jsx";
import Categories from "./Categories.jsx";

export default function Hero() {
  const handleDealsClick = () => {
    const target = document.getElementById("popular-deals");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    window.location.href = "/";
  };

  return (
    <section className="max-w-6xl mx-auto px-5 pt-14 pb-10">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <Eyebrow>Trusted by 10,000+ hungry regulars</Eyebrow>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.08] mb-5 font-heading text-navy">
            Explore the Complete Cook Out Menu with{" "}
            <span className="text-brandred">Prices, Calories &amp; Photos</span>
          </h1>
          <p className="text-base leading-relaxed mb-7 max-w-md font-body text-navysoft">
            Browse every burger, tray, and shake with up-to-date prices and
            real calorie counts, and see a photo before you order — so
            there's never a surprise at the window.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <PillButton to="/burgers" icon={<ArrowRight size={16} />}>View Full Menu</PillButton>
            <PillButton variant="outline" onClick={handleDealsClick}>See Today's Deals</PillButton>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-xl bg-navy">
          <img
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80"
            alt="Stacked charbroiled cheeseburger"
            className="w-full h-80 object-cover opacity-90"
          />
        </div>
      </div>

      <Categories />
    </section>
  );
}
