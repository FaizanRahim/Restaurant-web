import { Link } from "react-router-dom";
import { Beef, Drumstick, Flame, Sandwich, Milk, Cookie, GlassWater } from "lucide-react";

const cats = [
  { label: "Burgers", icon: Beef, to: "/burgers" },
  { label: "Chicken", icon: Drumstick, to: "/chicken" },
  { label: "BBQ Special", icon: Flame, to: "/bbq" },
  { label: "Hot Dogs", icon: Sandwich, to: "/hot-dogs" },
  { label: "Milkshakes", icon: Milk, to: "/milkshakes" },
  { label: "Sides & Fries", icon: Cookie, to: "/sides" },
  { label: "Cold Drinks", icon: GlassWater, to: "/drinks" },
];

export default function Categories() {
  return (
    <div className="mt-14">
      <p className="text-sm font-bold mb-4 font-body text-navy">Popular Categories</p>
      <div className="flex flex-wrap gap-3">
        {cats.map(({ label, icon: Icon, to }) => (
          <Link
            key={label}
            to={to}
            className="flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold font-body bg-white border border-hline text-navy hover:opacity-80 hover:border-brandred transition-all"
          >
            <Icon size={15} className="text-brandred" />
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
