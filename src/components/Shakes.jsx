import Eyebrow from "./ui/Eyebrow.jsx";
import PillButton from "./ui/PillButton.jsx";

const shakes = [
  {
    name: "Banana Pudding",
    price: "$3.79",
    cal: 640,
    bg: "#FBEBC7",
    img: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Fresh Strawberry",
    price: "$3.79",
    cal: 610,
    bg: "#FBDDE1",
    img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Cookie Dough",
    price: "$4.19",
    cal: 720,
    bg: "#EFDFC8",
    img: "https://images.unsplash.com/photo-1607190074257-dd4b7af0309b?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Mint Chocolate Chip",
    price: "$3.99",
    cal: 590,
    bg: "#D9EEE4",
    img: "https://images.unsplash.com/photo-1502741224143-90386d7f8c82?auto=format&fit=crop&w=500&q=80",
  },
];

function ShakeCard({ img, name, price, cal, bg }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: bg }}>
      <img src={img} alt={name} className="w-full h-32 object-cover" />
      <div className="p-3.5">
        <p className="font-bold text-sm mb-1 font-heading text-navy">{name}</p>
        <div className="flex items-center justify-between text-xs font-body">
          <span className="font-extrabold text-brandred">{price}</span>
          <span className="text-navysoft">{cal} cal</span>
        </div>
      </div>
    </div>
  );
}

export default function Shakes() {
  return (
    <section className="max-w-6xl mx-auto px-5 py-14">
      <div className="flex items-end justify-between mb-6">
        <div>
          <Eyebrow color="text-teal">40+ flavors, zero shortcuts</Eyebrow>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-navy">
            Browse Our Famous 40+ Shakes
          </h2>
        </div>
        <PillButton variant="outline" className="hidden sm:inline-flex">
          View Full Shake Menu
        </PillButton>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {shakes.map((s) => (
          <ShakeCard key={s.name} {...s} />
        ))}
      </div>
    </section>
  );
}
