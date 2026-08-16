import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import PopularDeals from "../components/PopularDeals.jsx";
import BuildTray from "../components/BuildTray.jsx";
import Shakes from "../components/Shakes.jsx";
import MealFavorite from "../components/MealFavorite.jsx";
import Compare from "../components/Compare.jsx";
import Blog from "../components/Blog.jsx";
import FAQ from "../components/FAQ.jsx";
import Newsletter from "../components/Newsletter.jsx";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    const timer = setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [location.hash]);

  return (
    <>
      <Hero />
      <PopularDeals />
      <BuildTray />
      <Shakes />
      <MealFavorite />
      <Compare />
      <Blog />
      <FAQ />
      <Newsletter />
    </>
  );
}
