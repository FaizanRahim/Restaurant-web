import { useMemo, useState } from "react";
import { Building2, ChevronRight, Clock3, MapPin, Store, Truck, X, MapPinned, Route } from "lucide-react";

const locations = [
  {
    name: "Raleigh Downtown",
    state: "NC",
    distance: "1.2 miles away",
    address: "120 S Wilmington St, Raleigh, NC 27601",
    phone: "(919) 856-1140",
    open: "Open until 3:00 AM",
    directions: [
      "Head south on S Wilmington St toward E Martin St",
      "Continue for 0.8 miles and merge onto I-40 E",
      "Take exit 295 for Downtown Raleigh",
      "Your destination will be on the right",
    ],
    mapQuery: "120+S+Wilmington+St+Raleigh+NC",
  },
  {
    name: "Chapel Hill West",
    state: "NC",
    distance: "4.8 miles away",
    address: "425 W Franklin St, Chapel Hill, NC 27516",
    phone: "(919) 968-3840",
    open: "Open until 4:00 AM",
    directions: [
      "Drive east on W Franklin St toward Mallette St",
      "Turn right onto NC-54 W",
      "Continue 3.7 miles to the Chapel Hill West location",
      "The store will be on your left",
    ],
    mapQuery: "425+W+Franklin+St+Chapel+Hill+NC",
  },
  {
    name: "Charlotte University",
    state: "NC",
    distance: "8.4 miles away",
    address: "8520 University City Blvd, Charlotte, NC 28213",
    phone: "(704) 547-3850",
    open: "Open until 3:00 AM",
    directions: [
      "Head east on University City Blvd",
      "Continue past the main campus corridor",
      "Take the next right into the Cook Out parking area",
      "You’ll see the sign directly ahead",
    ],
    mapQuery: "8520+University+City+Blvd+Charlotte+NC",
  },
  {
    name: "Greenville East",
    state: "SC",
    distance: "11.6 miles away",
    address: "2215 E North St, Greenville, SC 29607",
    phone: "(864) 555-2100",
    open: "Open until 4:00 AM",
    directions: [
      "Merge onto E North St from the interstate",
      "Continue straight for 2.1 miles",
      "Turn right at the Cook Out sign",
      "Parking is available in front of the store",
    ],
    mapQuery: "2215+E+North+St+Greenville+SC",
  },
];

const states = ["All States", "NC", "SC"];

function LocationCard({ item, onDirections }) {
  return (
    <div className="rounded-2xl bg-white border border-hline shadow-sm p-4 sm:p-5">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          <h3 className="text-xl font-extrabold font-heading text-navy">{item.name}</h3>
          <p className="text-sm text-navysoft mt-1">{item.address}</p>
          <p className="text-sm text-navysoft">{item.phone}</p>
        </div>
        <p className="text-xs sm:text-sm font-bold text-teal whitespace-nowrap">{item.distance}</p>
      </div>

      <div className="flex items-center gap-2 text-sm text-teal mb-4">
        <span className="w-2 h-2 rounded-full bg-teal" />
        <span className="font-semibold">{item.open}</span>
      </div>

      <div className="flex items-center justify-between gap-3 text-navysoft mb-4">
        <div className="flex items-center gap-3 text-sm">
          <Store size={15} />
          <Building2 size={15} />
          <Truck size={15} />
        </div>
        <ChevronRight size={16} />
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => onDirections(item)}
          className="rounded-full border border-navy text-navy text-sm font-bold py-2.5 px-4 hover:bg-creamsoft transition-colors sm:col-span-2"
        >
          GET DIRECTIONS
        </button>
      </div>
    </div>
  );
}

export default function LocationsPage() {
  const [selectedState, setSelectedState] = useState("All States");
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  const filteredLocations = useMemo(() => {
    if (selectedState === "All States") {
      return locations;
    }

    return locations.filter((location) => location.state === selectedState);
  }, [selectedState]);

  return (
    <main className="bg-cream min-h-screen">
      <section className="bg-footernavy border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-5 pt-8 pb-0">
          <div className="rounded-t-[2rem] overflow-hidden border border-white/5 shadow-xl bg-black">
            <iframe
              title="Cook Out locations map"
              src="https://www.google.com/maps?q=Raleigh+NC+Cook+Out&output=embed"
              className="w-full h-[210px] sm:h-[300px] md:h-[380px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-5 py-10 sm:py-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-navy">Find a Cook Out Near You</h1>
            <p className="text-sm sm:text-base text-navysoft mt-2 max-w-2xl">
              Over 300 locations across the South. Fresh cooked meals, always close to home.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <label className="rounded-full bg-white border border-hline px-4 py-2.5 text-sm font-semibold text-navy flex items-center justify-between gap-2 sm:w-[170px]">
              <span className="sr-only">Select State</span>
              <select
                value={selectedState}
                onChange={(event) => setSelectedState(event.target.value)}
                className="w-full bg-transparent outline-none text-sm font-semibold text-navy"
              >
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
              <ChevronRight size={14} className="rotate-90 shrink-0 text-navysoft" />
            </label>
            <div className="rounded-full bg-white border border-hline px-4 py-2.5 text-sm text-navysoft flex items-center gap-2 sm:w-[260px]">
              <MapPin size={15} className="shrink-0 text-brandred" />
              <span className="truncate">Enter Zip Code or City…</span>
            </div>
            <button className="rounded-full border border-brandred text-brandred px-5 py-2.5 text-sm font-bold bg-white hover:bg-brandred hover:text-white transition-colors">
              Search
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6 items-start">
          <div className="space-y-4">
            {filteredLocations.map((item) => (
              <LocationCard key={item.name} item={item} onDirections={setSelectedLocation} />
            ))}
            {filteredLocations.length === 0 ? (
              <div className="rounded-2xl bg-white border border-hline shadow-sm p-6 text-center text-navysoft">
                No locations found for {selectedState}.
              </div>
            ) : null}
          </div>

          <aside className="rounded-[1.75rem] border border-brandorange/40 bg-white shadow-sm overflow-hidden">
            <div className="p-4 sm:p-5 border-b border-hline">
              <p className="text-xl font-extrabold font-heading text-navy mb-1">Featured Location</p>
              <div className="rounded-2xl overflow-hidden mt-4 mb-4">
                <iframe
                  title="Featured Cook Out location"
                  src={`https://www.google.com/maps?q=${selectedLocation?.mapQuery || "Raleigh+NC+Cook+Out"}&output=embed`}
                  className="w-full h-[190px] border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="inline-flex items-center gap-2 rounded-full bg-brandred/10 text-brandred px-3 py-1 text-[11px] font-bold tracking-widest uppercase mb-3">
                Our Flagship Store
              </div>
              <h3 className="text-2xl font-extrabold font-heading text-navy">{selectedLocation?.name || "Greensboro #01 (Original)"}</h3>
              <p className="text-sm leading-relaxed text-navysoft mt-3">
                {selectedLocation?.address || "Where the legend began in 1989. Serving the Greensboro community with fresh, charbroiled grill favorites."}
              </p>

              <div className="mt-5 rounded-2xl border border-hline bg-creamsoft p-4 flex items-center gap-3 text-sm font-semibold text-navy">
                <Clock3 size={16} className="text-brandorange shrink-0" />
                Over 37 Years of Fresh Grilling
              </div>
            </div>
          </aside>
        </div>
      </section>

      {selectedLocation ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-footernavy/70 px-4" role="dialog" aria-modal="true">
          <div className="w-full max-w-lg rounded-[1.75rem] bg-white shadow-2xl border border-hline overflow-hidden">
            <div className="flex items-start justify-between gap-4 p-5 border-b border-hline bg-creamsoft">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-brandred/10 text-brandred px-3 py-1 text-[11px] font-bold tracking-widest uppercase mb-3">
                  <Route size={13} />
                  Directions
                </div>
                <h3 className="text-2xl font-extrabold font-heading text-navy">{selectedLocation.name}</h3>
                <p className="text-sm text-navysoft mt-1">{selectedLocation.address}</p>
              </div>
              <button
                type="button"
                aria-label="Close directions"
                onClick={() => setSelectedLocation(null)}
                className="rounded-full border border-hline bg-white p-2 text-navy hover:bg-creamsoft"
              >
                <X size={16} />
              </button>
            </div>

            <div className="p-5">
              <p className="text-sm font-semibold text-navy mb-4">How to get there:</p>
              <ol className="space-y-3 text-sm text-navysoft">
                {selectedLocation.directions.map((step) => (
                  <li key={step} className="flex gap-3 items-start">
                    <span className="w-6 h-6 rounded-full bg-brandred text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {selectedLocation.directions.indexOf(step) + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>

              <div className="mt-6 flex justify-between gap-3">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedLocation.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 rounded-full bg-brandred text-white text-sm font-bold py-3 text-center hover:bg-brandreddark transition-colors"
                >
                  OPEN MAP
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedLocation(null)}
                  className="flex-1 rounded-full border border-navy text-navy text-sm font-bold py-3 hover:bg-creamsoft transition-colors"
                >
                  CLOSE
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}