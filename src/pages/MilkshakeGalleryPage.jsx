import { Heart, Star } from "lucide-react";

const categories = ["All Shakes", "Chocolate Base", "Fruit Flavors", "Nut Favorites", "Oreo Specials", "Cheesecake Mixes"];

const shakes = [
  {
    name: "Very Vanilla Classic",
    tags: ["Creamy", "Classic"],
    price: "$3.49",
    cal: 380,
    img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Mint Chocolate Chip",
    tags: ["Minty", "Refreshing"],
    price: "$3.49",
    cal: 410,
    img: "https://images.unsplash.com/photo-1502741224143-90386d7f8c82?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Fresh Summer Peach",
    tags: ["Fruit", "Seasonal"],
    price: "$3.49",
    cal: 370,
    img: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Fudge Chocolate Swirl",
    tags: ["Rich", "Chocolate"],
    price: "$3.49",
    cal: 480,
    img: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Peanut Butter Banana",
    tags: ["Nuts", "Fruit"],
    price: "$3.49",
    cal: 520,
    img: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Strawberry Cheesecake",
    tags: ["Cheesecake", "Decadent"],
    price: "$3.49",
    cal: 460,
    img: "https://images.unsplash.com/photo-1517578239113-b03992dcdd25?auto=format&fit=crop&w=900&q=80",
  },
];

function ShakeCard({ shake }) {
  return (
    <article className="rounded-2xl overflow-hidden bg-white border border-hline shadow-sm">
      <div className="relative">
        <img src={shake.img} alt={shake.name} className="w-full h-56 object-cover" />
        <button
          type="button"
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 text-brandred flex items-center justify-center shadow-sm"
          aria-label={`Favorite ${shake.name}`}
        >
          <Heart size={16} />
        </button>
      </div>
      <div className="p-4">
        <p className="text-base font-extrabold font-heading text-navy">{shake.name}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {shake.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-creamsoft px-2.5 py-1 text-[10px] font-semibold text-navysoft border border-hline">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-end justify-between gap-3">
          <div>
            <p className="text-lg font-extrabold text-brandred">{shake.price}</p>
            <p className="text-xs font-bold text-navysoft mt-1">Add extra whip on request</p>
          </div>
          <div className="flex items-center gap-1 text-teal text-xs font-bold uppercase">
            <Star size={13} fill="currentColor" />
            {shake.cal} cal
          </div>
        </div>
      </div>
    </article>
  );
}

export default function MilkshakeGalleryPage() {
  return (
    <main className="bg-cream min-h-screen">
      <section className="bg-brandorange/95 border-b border-white/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-5 py-10 sm:py-14">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
            <div>
              <div className="inline-flex items-center rounded-full bg-brandred text-white px-3 py-1 text-[11px] font-bold tracking-widest uppercase mb-5">
                Shake of the Month
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.03] font-heading text-navy max-w-xl">
                Oreo Mint Chocolate Extreme Shake
              </h1>
              <p className="mt-5 text-sm sm:text-base leading-relaxed text-navy/80 max-w-xl">
                Our limited edition masterpiece. Hand-spun vanilla cream blended with crunchy Oreo cookies, premium Hershey's chocolate syrup, and cool, fresh organic peppermint oil extract.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <p className="text-2xl sm:text-3xl font-extrabold text-brandred">$3.99</p>
                <p className="text-xs sm:text-sm font-bold text-white/90 tracking-widest uppercase">490 Calories</p>
              </div>
            </div>

            <div className="rounded-[1.75rem] overflow-hidden bg-white/10 shadow-xl border border-white/20">
              <img
                src="https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=1400&q=80"
                alt="Featured milkshake"
                className="w-full h-[310px] sm:h-[360px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-hline bg-white/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-5 py-4">
          <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
            {categories.map((category, index) => (
              <button
                key={category}
                type="button"
                className={`whitespace-nowrap rounded-full px-4 py-2 text-xs sm:text-sm font-semibold border transition-colors ${
                  index === 0 ? "bg-teal text-white border-teal" : "bg-white text-navy border-hline hover:bg-creamsoft"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-5 py-12">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-[2.15rem] font-extrabold font-heading text-navy">Discover Our 40+ Legendary Flavors</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {shakes.map((shake) => (
            <ShakeCard key={shake.name} shake={shake} />
          ))}
        </div>
      </section>
    </main>
  );
}