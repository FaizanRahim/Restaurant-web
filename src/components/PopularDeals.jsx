import Eyebrow from "./ui/Eyebrow.jsx";
import PillButton from "./ui/PillButton.jsx";

const deals = [
  {
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80",
    name: "Cook Out Double Cheeseburger",
    cal: 720,
    protein: 38,
    price: "$5.99",
    to: "/burgers",
  },
  {
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
    name: "Hickory Smoked BBQ Plate",
    cal: 640,
    protein: 42,
    price: "$6.49",
    to: "/bbq",
  },
  {
    img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=600&q=80",
    name: "Spicy Chicken Breast Sandwich",
    cal: 580,
    protein: 34,
    price: "$4.79",
    to: "/chicken",
  },
];

function DealCard({ img, name, cal, protein, price, to }) {
  return (
    <div className="rounded-2xl overflow-hidden bg-white border border-hline">
      <img src={img} alt={name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <p className="font-bold text-sm mb-1.5 font-heading text-navy">{name}</p>
        <p className="text-xs mb-3 font-body text-navysoft">
          <span className="text-brandorange font-bold">{cal} cal</span>
          {"  ·  "}
          {protein}g protein
        </p>
        <div className="flex items-center justify-between">
          <span className="font-extrabold text-base font-heading text-brandred">{price}</span>
          <PillButton to={to} variant="outline" className="px-4 py-1.5 text-[10px] !rounded-full">
            Order
          </PillButton>
        </div>
      </div>
    </div>
  );
}

export default function PopularDeals() {
  return (
    <section id="popular-deals" className="max-w-6xl mx-auto px-5 py-10">
      <div className="flex items-end justify-between mb-6">
        <div>
          <Eyebrow>Cook Out Favorites</Eyebrow>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-navy">
            Most Popular Fresh Charbroiled Deals
          </h2>
        </div>
        <PillButton to="/burgers" variant="outline" className="hidden sm:inline-flex">
          View Full Menu
        </PillButton>
      </div>
      <div className="grid sm:grid-cols-3 gap-5">
        {deals.map((d) => (
          <DealCard key={d.name} {...d} />
        ))}
      </div>
    </section>
  );
}
