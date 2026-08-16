import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Home from "./pages/Home.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import NutritionPage from "./pages/NutritionPage.jsx";
import LocationsPage from "./pages/LocationsPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import BlogLandingPage from "./pages/BlogLandingPage.jsx";
import BlogPostPage from "./pages/BlogPostPage.jsx";
import HoursPage from "./pages/HoursPage.jsx";
import MilkshakeGalleryPage from "./pages/MilkshakeGalleryPage.jsx";
import { categories } from "./data/menuData.jsx";

export default function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const activePage = (() => {
    if (pathname === "/") return "home";
    if (pathname === "/nutrition") return "nutrition";
    if (pathname === "/locations") return "locations";
    if (pathname === "/about") return "about";
    if (pathname === "/hours") return "hours";
    if (pathname === "/milkshakes") return "milkshakes";
    if (pathname === "/blog") return "blog";
    if (pathname === "/blog-post") return "blog-post";
    if (pathname.slice(1) in categories) return "full-menu";
    return "home";
  })();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="bg-cream min-h-screen text-navy pt-20">
      <ScrollToTop />
      <Header activePage={activePage} onNavigate={handleNavigate} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/nutrition" element={<NutritionPage />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/hours" element={<HoursPage />} />
        <Route path="/milkshakes" element={<MilkshakeGalleryPage />} />
        <Route path="/blog" element={<BlogLandingPage onNavigate={handleNavigate} />} />
        <Route path="/blog-post" element={<BlogPostPage onNavigate={handleNavigate} />} />
        <Route path="/:slug" element={<CategoryPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}
