import Eyebrow from "../components/ui/Eyebrow.jsx";

const topics = ["🔥 Behind the Grill", "🍦 Shake Recipes", "🍔 Food Science", "📈 Nutritional Guides"];

const featuredPosts = [
  {
    tag: "GUIDE",
    time: "4 min",
    title: "Why Hushpuppies and Onion Rings Rule Our Tray Combos",
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80",
  },
  {
    tag: "RECIPE",
    time: "6 min",
    title: "How to Customize a Milkshake Order with 3 Flavour Twists",
    img: "https://images.unsplash.com/photo-1481931715705-36f4e6e2b5a4?auto=format&fit=crop&w=1200&q=80",
  },
];

function TopicRail() {
  return (
    <div className="rounded-2xl bg-white border border-hline shadow-sm p-5">
      <p className="text-sm font-extrabold font-heading text-navy mb-4">Popular Topics</p>
      <div className="space-y-3 text-sm font-semibold">
        {topics.map((topic, index) => (
          <div key={topic} className={index === 0 ? "text-brandred" : "text-navysoft"}>
            {topic}
          </div>
        ))}
      </div>
    </div>
  );
}

function ExpertCard() {
  return (
    <div className="rounded-2xl bg-white border border-hline shadow-sm p-5 text-center">
      <div className="mx-auto w-16 h-16 rounded-full overflow-hidden mb-4 border border-hline">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80"
          alt="Dr. Leslie Karr"
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-lg font-extrabold font-heading text-navy">Dr. Leslie Karr, RD</p>
      <p className="text-xs text-navysoft mt-1">Registered Dietitian</p>
      <p className="text-sm leading-relaxed text-navysoft mt-4">
        Providing medical insight and clear caloric analysis for foodies who care about balance.
      </p>
    </div>
  );
}

function BlogCard({ post, onOpen }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="text-left rounded-2xl bg-white border border-hline shadow-sm overflow-hidden hover:-translate-y-0.5 transition-transform"
    >
      <img src={post.img} alt={post.title} className="w-full h-36 object-cover" />
      <div className="p-4">
        <div className="flex items-center justify-between gap-4 text-[11px] font-bold uppercase tracking-wide mb-2 font-body">
          <span className="text-teal">{post.tag}</span>
          <span className="text-navysoft">{post.time}</span>
        </div>
        <p className="text-sm font-extrabold leading-snug font-heading text-navy">{post.title}</p>
      </div>
    </button>
  );
}

function SkeletonCard() {
  return (
    <div className="rounded-2xl bg-white border border-hline shadow-sm p-4 space-y-3">
      <div className="h-32 rounded-xl bg-creamsoft" />
      <div className="h-2.5 rounded-full bg-creamsoft w-20" />
      <div className="h-4 rounded-full bg-creamsoft w-5/6" />
      <div className="h-4 rounded-full bg-creamsoft w-2/3" />
    </div>
  );
}

export default function BlogLandingPage({ onNavigate }) {
  return (
    <main className="bg-cream min-h-screen">
      <section className="max-w-6xl mx-auto px-4 sm:px-5 pt-8 pb-12">
        <div className="rounded-[2rem] overflow-hidden bg-white border border-hline shadow-sm grid lg:grid-cols-[1.05fr_0.95fr]">
          <img
            src="https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=1400&q=80"
            alt="Cook Out featured story"
            className="w-full h-[280px] lg:h-full object-cover"
          />
          <div className="p-6 sm:p-8 flex flex-col justify-center">
            <div className="flex items-center justify-between gap-4 mb-4">
              <span className="inline-flex items-center rounded-full bg-brandorange/15 text-brandorange px-3 py-1 text-[11px] font-bold tracking-widest uppercase">
                Featured Story
              </span>
              <span className="text-[11px] font-bold uppercase tracking-widest text-navysoft">8 min read</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-[1.05] font-heading text-navy">
              The History of Charbroiling: Why Fire-Grilling Always Wins Against Flat Griddles
            </h1>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-navysoft max-w-xl">
              From backyards to major kitchens, cooking over real flame locks in flavorful charred drippings and forms that famous caramelized shell fast food fans crave.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-hline shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
                  alt="Chef Marshall Vance"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-bold text-navy">Chef Marshall Vance</p>
                <p className="text-xs text-navysoft">Head of Culinary Curation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-5 pb-14">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-6 items-start">
          <div className="space-y-6">
            <TopicRail />
            <ExpertCard />
          </div>

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-5">
              {featuredPosts.map((post) => (
                <BlogCard key={post.title} post={post} onOpen={() => onNavigate?.("blog-post")} />
              ))}
            </div>

            <div className="rounded-2xl bg-white border border-hline shadow-sm p-4 sm:p-5">
              <p className="text-xs font-bold tracking-widest uppercase text-navysoft mb-4">Loading Next Stories…</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <SkeletonCard />
                <SkeletonCard />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}