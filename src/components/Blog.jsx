import Eyebrow from "./ui/Eyebrow.jsx";
import PillButton from "./ui/PillButton.jsx";

const posts = [
  {
    img: "https://images.unsplash.com/photo-1517578239113-b03992dcdd25?auto=format&fit=crop&w=600&q=80",
    tag: "Menu News",
    date: "Jul 28",
    title: "The Secret Menu Items Cook Out Employees Won't Tell You",
  },
  {
    img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
    tag: "Behind The Grill",
    date: "Jul 15",
    title: "What Charbroiling Really Means (And Why It Tastes Better)",
  },
  {
    img: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80",
    tag: "Fan Favorites",
    date: "Jul 02",
    title: "Top 10 Cook Out Trays Ranked by Calories & Value",
  },
];

function BlogCard({ img, tag, date, title }) {
  return (
    <div className="rounded-2xl overflow-hidden bg-white border border-hline">
      <img src={img} alt={title} className="w-full h-36 object-cover" />
      <div className="p-4">
        <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wide mb-2 font-body">
          <span className="text-brandred">{tag}</span>
          <span className="text-navysoft">· {date}</span>
        </div>
        <p className="text-sm font-bold leading-snug font-heading text-navy">{title}</p>
      </div>
    </div>
  );
}

export default function Blog() {
  return (
    <section className="max-w-6xl mx-auto px-5 py-16">
      <div className="flex items-end justify-between mb-6">
        <div>
          <Eyebrow>Cook Out Chronicle</Eyebrow>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-navy">
            The Cook Out Chronicle
          </h2>
        </div>
        <PillButton variant="outline" className="hidden sm:inline-flex">
          View All Articles
        </PillButton>
      </div>
      <div className="grid sm:grid-cols-3 gap-5">
        {posts.map((p) => (
          <BlogCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
