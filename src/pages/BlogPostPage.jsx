import { MessageCircle, Share2, UserRound } from "lucide-react";

const toc = [
  "The Charcoal Advantage",
  "The Chemistry of the Maillard Reaction",
  "Flavor Vaporization",
  "Crafting the Perfect Patty",
  "Insider Grill Hacks",
];

const relatedStories = [
  {
    title: "The Secret History of Our 40 Legendary Shake Flavors",
    subtitle: "How we crafted the hand-spun legacy.",
    img: "https://images.unsplash.com/photo-1505253716362-afaea6e1c346?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Top 10 Cook Out Tray Side Combos You Haven't Tried",
    subtitle: "Unlock the ultimate value codes.",
    img: "https://images.unsplash.com/photo-1512003867696-6d5ce6835040?auto=format&fit=crop&w=900&q=80",
  },
];

function TableOfContents() {
  return (
    <aside className="rounded-2xl bg-white border border-hline shadow-sm p-5 sticky top-24">
      <p className="text-sm font-extrabold font-heading text-navy mb-4">Table of Contents</p>
      <ol className="space-y-3 text-sm font-semibold">
        {toc.map((item, index) => (
          <li key={item} className={index === 0 ? "text-brandred" : "text-navysoft"}>
            {index + 1}. {item}
          </li>
        ))}
      </ol>

      <div className="mt-6 pt-5 border-t border-hline">
        <p className="text-[11px] font-bold tracking-widest uppercase text-navysoft mb-3">Share This Post</p>
        <div className="flex items-center gap-3">
          {[Share2, MessageCircle, UserRound].map((Icon, index) => (
            <button
              key={index}
              type="button"
              className="w-8 h-8 rounded-full border border-hline bg-creamsoft flex items-center justify-center text-navy hover:bg-hline transition-colors"
            >
              <Icon size={14} />
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}

function RelatedCard({ item }) {
  return (
    <div className="rounded-2xl overflow-hidden bg-white border border-hline shadow-sm">
      <img src={item.img} alt={item.title} className="w-full h-36 object-cover" />
      <div className="p-4">
        <p className="text-sm font-extrabold leading-snug font-heading text-navy">{item.title}</p>
        <p className="text-xs text-navysoft mt-2">{item.subtitle}</p>
      </div>
    </div>
  );
}

export default function BlogPostPage({ onNavigate }) {
  return (
    <main className="bg-cream min-h-screen">
      <section className="bg-white border-b border-hline">
        <div className="max-w-6xl mx-auto px-4 sm:px-5 py-12 sm:py-16">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="inline-flex items-center rounded-full bg-brandred/10 text-brandred px-3 py-1 text-[11px] font-bold tracking-widest uppercase">
                Grill Secrets
              </span>
              <span className="text-[11px] font-bold tracking-widest uppercase text-navysoft">8 min read</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.06] font-heading text-navy max-w-4xl">
              The Secret Science Behind Cook Out's Real Charcoal Charbroiled Burgers
            </h1>

            <div className="mt-6 flex items-center gap-3 text-sm text-navysoft">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-hline shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
                  alt="Chef Marshall Vance"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-navy">Chef Marshall Vance</p>
                <p className="text-xs">Published October 12, 2026 • 24 Comments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-5 py-10 sm:py-12">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-6 items-start">
          <TableOfContents />

          <article className="space-y-8">
            <div className="rounded-[1.75rem] overflow-hidden border border-hline shadow-sm bg-white">
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1400&q=80"
                alt="Stacked burger"
                className="w-full h-[320px] sm:h-[420px] object-cover"
              />
            </div>

            <p className="text-sm sm:text-base leading-relaxed text-navysoft max-w-3xl">
              There’s a reason why a Cook Out burger tastes distinctly different from any other fast-food patty you’ve ever had. While most national chains rely on flat-top metal griddles or automated flame-conveyor belts, we stick strictly to the classic, authentic method: cooking over real charcoal embers.
            </p>

            <section className="space-y-4 max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-navy">1. The Charcoal Advantage</h2>
              <p className="text-sm sm:text-base leading-relaxed text-navysoft">
                Charcoal grills cook with intense radiant heat. Unlike gas or electric flattops, which transfer heat through direct metal contact, charcoal emits high-intensity infrared waves. This cooks the meat rapidly, locking in juices while instantly caramelizing the outer surface.
              </p>
              <blockquote className="text-lg sm:text-xl font-extrabold leading-relaxed text-brandred border-l-4 border-brandred pl-4">
                “We don't just cook burgers; we capture the true essence of an outdoor summer cookout on every single bun.”
              </blockquote>
            </section>

            <section className="space-y-4 max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-navy">2. The Chemistry of the Maillard Reaction</h2>
              <p className="text-sm sm:text-base leading-relaxed text-navysoft">
                When our fresh, never-frozen beef hits the custom-grated grill surfaces, the Maillard reaction occurs. Amino acids and reducing sugars rearrange to create hundreds of brand-new flavor compounds. It creates the delicious, dark crust that defines Cook Out quality.
              </p>

              <div className="rounded-[1.5rem] overflow-hidden border border-hline shadow-sm bg-white">
                <img
                  src="https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1400&q=80"
                  alt="Charcoal burgers"
                  className="w-full h-[260px] object-cover"
                />
              </div>
              <p className="text-xs italic text-navysoft">Fresh patties hand-prepared daily and grilled to smoky perfection.</p>
            </section>

            <section className="rounded-[1.75rem] bg-white border border-hline shadow-sm p-5 sm:p-6 max-w-3xl">
              <h3 className="text-2xl font-extrabold font-heading text-navy mb-4">Discussion (3 Comments)</h3>
              <div className="space-y-4">
                <div className="flex gap-3 pb-4 border-b border-hline">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-hline shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=200&q=80"
                      alt="Sarah Jenkins"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-4 text-xs text-navysoft mb-1">
                      <p className="font-bold text-navy">Sarah Jenkins</p>
                      <span>2 hours ago</span>
                    </div>
                    <p className="text-sm text-navysoft">The double cheeseburger Cook Out style is the absolute gold standard. Learning about the actual charcoal process makes me appreciate it even more!</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-bold text-navy mb-3">Leave a Reply</p>
                  <textarea
                    className="w-full min-h-[120px] rounded-2xl border border-hline bg-creamsoft px-4 py-3 text-sm outline-none focus:border-brandred"
                    placeholder="Join the conversation..."
                  />
                  <button className="mt-4 rounded-full bg-brandred px-5 py-2.5 text-sm font-bold text-white hover:bg-brandreddark transition-colors">
                    Post Comment
                  </button>
                </div>
              </div>
            </section>

            <section className="max-w-3xl">
              <h3 className="text-2xl font-extrabold font-heading text-navy mb-4">Related Stories</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {relatedStories.map((item) => (
                  <RelatedCard key={item.title} item={item} />
                ))}
              </div>
            </section>
          </article>
        </div>
      </section>

      <section className="bg-teal text-white py-12 sm:py-14 mt-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-5 grid lg:grid-cols-[1.1fr_0.9fr] gap-6 items-center">
          <div>
            <h2 className="text-3xl sm:text-[2.1rem] font-extrabold font-heading leading-tight max-w-xl">
              Get Exclusive Cook Out Coupons &amp; Secret Menu Alerts
            </h2>
            <p className="mt-4 text-sm sm:text-base text-white/90 max-w-2xl">
              Join our mailing list to receive monthly free milkshake coupons, local store grand opening notices, and secret menu hacks.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
            <input
              className="w-full sm:w-[320px] rounded-full bg-white px-5 py-3 text-sm text-navy outline-none"
              placeholder="Enter your email address"
            />
            <button className="rounded-full bg-brandred px-6 py-3 text-sm font-bold text-white hover:bg-brandreddark transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}