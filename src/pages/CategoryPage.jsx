import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Eyebrow from "../components/ui/Eyebrow.jsx";
import PillButton from "../components/ui/PillButton.jsx";
import ItemCard from "../components/ItemCard.jsx";
import DrinkCard from "../components/DrinkCard.jsx";
import { categories } from "../data/menuData.jsx";

export default function CategoryPage() {
  const { slug } = useParams();
  const data = categories[slug];

  if (!data) {
    return (
      <div className="max-w-3xl mx-auto px-5 py-24 text-center">
        <h1 className="text-2xl font-extrabold mb-3 font-heading text-navy">
          Page Not Found
        </h1>
        <p className="mb-6 font-body text-navysoft">
          This menu category doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-bold font-body text-brandred"
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>
    );
  }

  const Icon = data.icon;

  return (
    <div>
      <section className="max-w-6xl mx-auto px-5 pt-10 pb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs font-bold font-body text-navysoft hover:text-brandred transition-colors mb-6"
        >
          <ArrowLeft size={14} /> Back to Home
        </Link>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <Eyebrow>{data.eyebrow}</Eyebrow>
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4 font-heading text-navy">
              {data.title}
            </h1>
            <p className="text-base leading-relaxed max-w-md font-body text-navysoft">
              {data.description}
            </p>
          </div>

          {data.heroImg ? (
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src={data.heroImg}
                alt={data.title}
                className="w-full h-56 sm:h-72 object-cover"
              />
            </div>
          ) : (
            <div
              className="rounded-3xl h-56 sm:h-72 flex items-center justify-center shadow-xl"
              style={{ background: data.heroTileBg || "#EAF3E4" }}
            >
              <Icon size={96} className="text-navy/50" strokeWidth={1.2} />
            </div>
          )}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 pb-16">
        <h2 className="text-xl sm:text-2xl font-extrabold mb-6 font-heading text-navy">
          {data.sectionTitle}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.items.map((item) =>
            data.type === "drinks" ? (
              <DrinkCard key={item.name} {...item} to={`/${slug}`} />
            ) : (
              <ItemCard key={item.name} {...item} to={`/${slug}`} />
            )
          )}
        </div>
      </section>

      {data.cta && (
        <section className="py-14 bg-brandorange">
          <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="inline-block text-xs font-bold tracking-widest uppercase mb-3 px-3 py-1 rounded-full font-body bg-brandred text-white">
                {data.cta.eyebrow}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-2 leading-tight font-heading text-navy">
                {data.cta.title}
              </h3>
              <p className="max-w-lg font-body text-[#4A3722]">{data.cta.desc}</p>
            </div>
            <PillButton className="shrink-0" to={`/${slug}`}>
              {data.cta.button}
            </PillButton>
          </div>
        </section>
      )}
    </div>
  );
}
