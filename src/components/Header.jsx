import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import cookoutLogo from "../assets/cookout-logo.svg";

const links = ["Home", "Full Menu", "Tray builder", "Milkshakes", "Locations", "Nutrition", "Blog", "Hours", "About"];

const routeByLabel = {
  Home: "/",
  "Full Menu": "/burgers",
  "Tray builder": "/#tray-builder",
  Milkshakes: "/milkshakes",
  Locations: "/locations",
  Nutrition: "/nutrition",
  Blog: "/blog",
  Hours: "/hours",
  About: "/about",
};

export default function Header({ activePage = "home", onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getNavClass = (label) => {
    const isActive =
      (label === "Full Menu" && activePage === "full-menu") ||
      (label === "Milkshakes" && activePage === "milkshakes") ||
      (label === "Nutrition" && activePage === "nutrition") ||
      (label === "Locations" && activePage === "locations") ||
      (label === "About" && activePage === "about") ||
      (label === "Blog" && (activePage === "blog" || activePage === "blog-post")) ||
      (label === "Hours" && activePage === "hours") ||
      (label === "Home" && activePage === "home");

    return isActive ? "text-brandred font-extrabold" : "text-navy font-semibold";
  };

  const handleNavigate = (page) => {
    onNavigate?.(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-40 bg-cream/90 backdrop-blur border-b border-hline">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-3 sm:gap-6 lg:gap-8 transform translate-x-2 lg:translate-x-4">
          <button
            type="button"
            onClick={() => handleNavigate("/")}
            className="flex items-center gap-3 shrink-0 text-left min-w-0"
          >
            <img
              src={cookoutLogo}
              alt="Cook Out Logo"
              className="h-16 w-auto rounded-lg shadow-sm"
            />
            <div className="min-w-0 hidden sm:block">
              <p className="leading-none text-base sm:text-lg font-extrabold tracking-tight font-heading text-navy truncate">
                COOK OUT
              </p>
              <p className="leading-none text-[9px] font-semibold tracking-widest font-body text-brandred truncate">
                MENU &amp; PRICES
              </p>
            </div>
          </button>

          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 flex-nowrap shrink-0">
            {links.map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => handleNavigate(routeByLabel[l] || "/")}
                className={`shrink-0 whitespace-nowrap text-[12px] xl:text-sm font-body transition-opacity hover:opacity-70 ${getNavClass(l)}`}
              >
                {l}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <div className="hidden md:flex items-center gap-2 rounded-full px-4 py-2 text-sm bg-white border border-hline text-navysoft max-w-[210px]">
              <Search size={15} className="shrink-0" />
              <span className="font-body truncate">Search menu…</span>
            </div>
            <button
              type="button"
              className="lg:hidden w-10 h-10 rounded-full border border-hline bg-white text-navy flex items-center justify-center"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen ? (
          <div className="lg:hidden mt-3 rounded-2xl border border-hline bg-white shadow-sm p-4 sm:p-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {links.map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => handleNavigate(routeByLabel[l] || "/")}
                  className={`rounded-xl px-4 py-3 text-left text-sm font-body transition-colors ${
                    getNavClass(l).includes("text-brandred")
                      ? "bg-brandred text-white font-extrabold"
                      : "bg-creamsoft text-navy font-semibold hover:bg-hline"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-2 rounded-full px-4 py-3 text-sm bg-creamsoft border border-hline text-navysoft">
              <Search size={15} className="shrink-0" />
              <span className="font-body truncate">Search menu…</span>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
