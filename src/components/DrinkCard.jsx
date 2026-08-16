import PillButton from "./ui/PillButton.jsx";

export default function DrinkCard({ name, description, sizes, price, calRange, img, to = "/drinks" }) {
  return (
    <div className="rounded-2xl overflow-hidden bg-white border border-hline flex flex-col">
      <img
        src={img}
        alt={name}
        className="w-full h-32 sm:h-36 object-cover"
        loading="lazy"
      />
      <div className="p-4 flex flex-col flex-1">
        <p className="font-bold text-sm mb-1 font-heading text-navy">{name}</p>
        <p className="text-xs mb-3 font-body text-navysoft leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {sizes.map((s) => (
            <span
              key={s}
              className="text-[10px] font-bold px-2 py-1 rounded-full font-body bg-creamsoft text-navy border border-hline"
            >
              {s}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between mt-auto gap-3">
          <span className="font-extrabold text-base font-heading text-brandred">{price}</span>
          <span className="text-[11px] font-body text-teal font-semibold">{calRange} cal</span>
        </div>
        <div className="mt-4">
          <PillButton to={to} variant="outline" className="w-full justify-center px-4 py-1.5 text-[10px] !rounded-full">
            Order
          </PillButton>
        </div>
      </div>
    </div>
  );
}
