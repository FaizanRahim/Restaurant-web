const cols = ["Cook Out", "Competitor A", "Competitor B", "Competitor C"];
const rows = [
  ["Average Tray Price", "$5.99 — starts low", "$8.49", "$7.99", "$8.99"],
  ["Milkshake Flavors", "40+ rotating flavors", "6 flavors", "4 flavors", "5 flavors"],
  ["Charbroiled Burgers", "Yes, always charbroiled", "Flame-broiled", "Griddled", "Griddled"],
  ["Late Night Hours", "Open until 3–4 AM", "11 PM close", "12 AM close", "1 AM close"],
];

export default function Compare() {
  return (
    <section className="py-16 bg-creamsoft">
      <div className="max-w-5xl mx-auto px-5">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-2 font-heading text-navy">
            How Cook Out Compares
          </h2>
          <p className="font-body text-navysoft">
            See how Cook Out stacks up against the other drive-thru favorites
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-hline">
          <table className="w-full text-sm font-body">
            <thead>
              <tr className="bg-navy">
                <th className="text-left px-5 py-3.5 font-semibold text-white/70 text-xs uppercase tracking-wide">
                  Feature
                </th>
                {cols.map((col, i) => (
                  <th
                    key={col}
                    className={`text-left px-5 py-3.5 font-bold text-xs uppercase tracking-wide ${
                      i === 0 ? "text-brandorangesoft" : "text-white/70"
                    }`}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r[0]} className={i % 2 === 0 ? "bg-white" : "bg-creamsoft"}>
                  <td className="px-5 py-4 font-semibold text-navy">{r[0]}</td>
                  <td className="px-5 py-4 font-bold text-brandred">{r[1]}</td>
                  <td className="px-5 py-4 text-navysoft">{r[2]}</td>
                  <td className="px-5 py-4 text-navysoft">{r[3]}</td>
                  <td className="px-5 py-4 text-navysoft">{r[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
