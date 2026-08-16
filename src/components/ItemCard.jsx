import PillButton from "./ui/PillButton.jsx";

export default function ItemCard({ name, rating, cal, price, img, to = "/burgers" }) {
  return (
    <div className="rounded-2xl overflow-hidden bg-white border border-hline flex flex-col">
      <img
        src={img}
        alt={name}
        className="w-full h-36 sm:h-40 object-cover"
        loading="lazy"
      />
      <div className="p-4 flex flex-col flex-1">
        <p className="font-bold text-sm mb-1.5 font-heading text-navy">{name}</p>
        <p className="text-xs mb-3 font-body text-navysoft">
          <span className="text-brandorange font-bold">★ {rating}</span>
          {"  ·  "}
          {cal} cal
        </p>
        <div className="flex items-center justify-between mt-auto">
          <span className="font-extrabold text-base font-heading text-brandred">{price}</span>
          <PillButton to={to} variant="outline" className="px-4 py-1.5 text-[10px] !rounded-full">
            Order
          </PillButton>
        </div>
      </div>
    </div>
  );
}
