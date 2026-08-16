import { Clock3, Search, Sunrise, Utensils, CalendarRange } from "lucide-react";

const weeklyHours = [
  ["Monday", "10:30 AM - 1:00 AM", "10:30 AM - 3:00 AM"],
  ["Tuesday", "10:30 AM - 1:00 AM", "10:30 AM - 3:00 AM"],
  ["Wednesday", "10:30 AM - 1:00 AM", "10:30 AM - 3:00 AM"],
  ["Thursday", "10:30 AM - 2:00 AM", "10:30 AM - 3:30 AM"],
  ["Friday", "10:30 AM - 3:00 AM", "10:30 AM - 4:30 AM"],
  ["Saturday", "10:30 AM - 3:00 AM", "10:30 AM - 4:30 AM"],
  ["Sunday", "10:30 AM - 1:00 AM", "10:30 AM - 3:00 AM"],
];

function InfoCard({ title, body, className = "" }) {
  return (
    <div className={`rounded-2xl bg-white border border-hline shadow-sm p-5 sm:p-6 ${className}`}>
      <p className="text-lg font-extrabold font-heading text-navy mb-2">{title}</p>
      <p className="text-sm leading-relaxed text-navysoft">{body}</p>
    </div>
  );
}

export default function HoursPage() {
  return (
    <main className="bg-cream min-h-screen">
      <section className="bg-creamsoft/80 border-b border-hline/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-5 pt-10 pb-12">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-teal/10 px-3 py-1 text-[11px] font-bold tracking-widest uppercase text-teal mb-5">
                <Clock3 size={13} />
                Open Late
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.05] mb-5 font-heading text-navy">
                When Are We Open?
                <span className="block text-brandred">Anytime You Need Us</span>
              </h1>
              <p className="text-base leading-relaxed max-w-xl font-body text-navysoft">
                Most Cook Out locations are open daily from 10:00 AM until 3:00 AM or 4:00 AM on weekends. Check your local restaurant's exact schedule below.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3 max-w-xl">
                <div className="flex-1 rounded-full bg-white border border-hline px-4 py-3 text-sm text-navysoft flex items-center gap-2">
                  <Search size={15} className="shrink-0 text-navysoft" />
                  <span className="truncate">Enter city, state or zip code…</span>
                </div>
                <button className="rounded-full bg-brandred text-white px-5 py-3 text-sm font-bold hover:bg-brandreddark transition-colors whitespace-nowrap">
                  Search Hours
                </button>
              </div>
            </div>

            <div className="rounded-[1.75rem] overflow-hidden shadow-xl border border-hline bg-white">
              <img
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80"
                alt="Night Cook Out restaurant"
                className="w-full h-[300px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-5 py-14">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-[2.15rem] font-extrabold font-heading text-navy">Standard Weekly Hours</h2>
          <p className="text-sm text-navysoft mt-2">These hours apply to over 90% of our locations across the Southeast.</p>
        </div>

        <div className="rounded-[1.75rem] overflow-hidden border border-hline shadow-sm bg-white">
          <div className="grid grid-cols-3 bg-navy text-white text-xs sm:text-sm font-bold uppercase tracking-wide">
            <div className="px-4 sm:px-5 py-4">Day of Week</div>
            <div className="px-4 sm:px-5 py-4">Dine-In Hours</div>
            <div className="px-4 sm:px-5 py-4">Drive-Thru Hours</div>
          </div>

          <div className="divide-y divide-hline">
            {weeklyHours.map((row) => {
              const isWeekend = row[0] === "Friday" || row[0] === "Saturday";

              return (
                <div key={row[0]} className={`grid grid-cols-3 text-sm sm:text-base ${isWeekend ? "bg-brandorange/10" : "bg-white"}`}>
                  <div className={`px-4 sm:px-5 py-4 font-semibold ${isWeekend ? "text-brandred" : "text-navy"}`}>{row[0]}</div>
                  <div className="px-4 sm:px-5 py-4 text-navysoft">{row[1]}</div>
                  <div className="px-4 sm:px-5 py-4 font-semibold text-navy">{row[2]}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-creamsoft/70 border-y border-hline/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-5 py-14">
          <div className="grid lg:grid-cols-[1fr_0.95fr] gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-brandorange/15 px-3 py-1 text-[11px] font-bold tracking-widest uppercase text-brandorange mb-5">
                <Sunrise size={13} />
                Beat the rush
              </div>
              <h2 className="text-3xl sm:text-[2.15rem] font-extrabold font-heading text-navy">
                Plan Your Visit: Daily Traffic Guides
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-navysoft max-w-xl">
                Our drive-thrus are famously efficient, but lunch and late-night post-bar hours are our busiest peaks. Check our flow schedule to find the speediest experience.
              </p>

              <div className="mt-5 space-y-3 text-sm text-navysoft">
                <div className="flex items-start gap-3"><span className="mt-1 w-2.5 h-2.5 rounded-full bg-teal shrink-0" />Moderate (Fastest Flow): 10:30 AM – 11:30 AM, 2:00 PM – 5:00 PM</div>
                <div className="flex items-start gap-3"><span className="mt-1 w-2.5 h-2.5 rounded-full bg-brandorange shrink-0" />Busy (Moderate Wait): 11:45 AM – 1:30 PM, 6:00 PM – 8:30 PM</div>
                <div className="flex items-start gap-3"><span className="mt-1 w-2.5 h-2.5 rounded-full bg-brandred shrink-0" />Late Night Peak (Full Energy): 11:30 PM – 2:30 AM</div>
              </div>
            </div>

            <div className="rounded-[1.75rem] overflow-hidden shadow-xl border border-hline bg-white">
              <img
                src="https://images.unsplash.com/photo-1515548219734-0c2f3f8e8b27?auto=format&fit=crop&w=1200&q=80"
                alt="Busy drive-thru line"
                className="w-full h-[300px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-5 py-14">
        <div className="grid lg:grid-cols-2 gap-6">
          <InfoCard
            title="Holiday Operating Schedule"
            body="We believe our hard-working family deserves time off to celebrate. Please note our adjusted schedule on these major dates: Thanksgiving Day closed, Christmas Eve closes at 6:00 PM, Christmas Day closed, and New Year’s Eve / Day regular late-night schedule."
          />
          <InfoCard
            title="Late Night Service Highlights"
            body="Unlike other establishments, we don't shut down grills early. Our entire menu, from the charbroiled double cheeseburgers to all 40+ thick shake flavors, is cooked-to-order until the final minute of business."
          />
        </div>

        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          <div className="rounded-2xl bg-white border border-hline shadow-sm p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-brandred/10 text-brandred flex items-center justify-center shrink-0">
              <CalendarRange size={22} />
            </div>
            <div>
              <p className="text-sm font-extrabold font-heading text-navy">Open Daily</p>
              <p className="text-sm text-navysoft mt-1">Most stores follow 10:30 AM to late-night close.</p>
            </div>
          </div>
          <div className="rounded-2xl bg-white border border-hline shadow-sm p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-teal/10 text-teal flex items-center justify-center shrink-0">
              <Utensils size={22} />
            </div>
            <div>
              <p className="text-sm font-extrabold font-heading text-navy">Order Till Close</p>
              <p className="text-sm text-navysoft mt-1">Kitchen stays open through peak late-night hours.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}