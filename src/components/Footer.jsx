import { Facebook, Instagram, Twitter } from "lucide-react";

const menuLinks = ["Burgers", "Chicken", "Trays", "Milkshakes", "Sides"];
const companyLinks = ["About Us", "Locations", "Careers", "Franchise Info", "Contact"];

export default function Footer() {
  return (
    <footer className="bg-footernavy">
      <div className="max-w-6xl mx-auto px-5 pt-14 pb-8">
        <div className="grid sm:grid-cols-3 gap-10 mb-10">
          <div>
            <p className="font-extrabold text-lg mb-3 text-white font-heading">COOK OUT</p>
            <p className="text-sm leading-relaxed font-body text-white/60">
              Charbroiled burgers, famous trays, and 40+ milkshake flavors —
              open late, priced low, made fresh every day.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-4 font-body text-brandorangesoft">
              Menu
            </p>
            <ul className="space-y-2.5">
              {menuLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm font-body text-white/70">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-4 font-body text-brandorangesoft">
              Company
            </p>
            <ul className="space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm font-body text-white/70">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
          <p className="text-xs font-body text-white/45">
            © 2026 Cook Out Menu Concept. Fan-made design, not affiliated with
            Cook Out.
          </p>
          <div className="flex items-center gap-3">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10"
              >
                <Icon size={14} color="white" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
