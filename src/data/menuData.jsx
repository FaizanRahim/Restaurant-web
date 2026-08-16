import { Beef, Drumstick, Flame, Sandwich, Milk, Cookie, GlassWater } from "lucide-react";
import { fetchCookOutMenuData } from "./externalMenuData.js";

// Burgers
import burgerHero from "../assets/menu/burger_hero.webp";
import burger1 from "../assets/menu/burger_1_bigdouble.webp";
import burger2 from "../assets/menu/burger_2_classic.webp";
import burger3 from "../assets/menu/burger_3_hickorybbq.webp";
import burger4 from "../assets/menu/burger_4_baconcheddar.webp";
import burger5 from "../assets/menu/burger_5_steakstyle.webp";
import burger6 from "../assets/menu/burger_6_cajunspice.webp";

// Chicken
import chickenHero from "../assets/menu/chicken_hero.webp";
import chicken1 from "../assets/menu/chicken_1_crispyselects.webp";
import chicken2 from "../assets/menu/chicken_2_spicysandwich.webp";
import chicken3 from "../assets/menu/chicken_3_charbroiledgrill.webp";
import chicken4 from "../assets/menu/chicken_4_quesadilla.webp";
import chicken5 from "../assets/menu/chicken_5_cajungrilled.webp";
import chicken6 from "../assets/menu/chicken_6_clubsandwich.webp";

// BBQ
import bbqHero from "../assets/menu/bbq_hero.webp";
import bbq1 from "../assets/menu/bbq_1_hickorysandwich.webp";
import bbq2 from "../assets/menu/bbq_2_porkplatter.webp";
import bbq3 from "../assets/menu/bbq_3_ribsplate.webp";

// Hot Dogs
import hotdogHero from "../assets/menu/hotdog_hero.webp";
import hotdog1 from "../assets/menu/hotdog_1_premiumgrilled.webp";
import hotdog2 from "../assets/menu/hotdog_2_chilicheddar.webp";
import hotdog3 from "../assets/menu/hotdog_3_southernslaw.webp";
import hotdog4 from "../assets/menu/hotdog_4_corndog.webp";
import hotdog5 from "../assets/menu/hotdog_5_relishdog.webp";

// Sides
import sidesHero from "../assets/menu/sides_hero.webp";
import sides1 from "../assets/menu/sides_1_hushpuppies.webp";
import sides2 from "../assets/menu/sides_2_cajunfries.webp";
import sides3 from "../assets/menu/sides_3_onionrings.webp";
import sides4 from "../assets/menu/sides_4_cheddarbites.webp";
import sides5 from "../assets/menu/sides_5_coleslaw.webp";
import sides6 from "../assets/menu/sides_6_quesadilla.webp";

// Drinks
import drinkHero from "../assets/menu/drink_hero.webp";
import drink1 from "../assets/menu/drink_1_cheerwine.webp";
import drink2 from "../assets/menu/drink_2_sweettea.webp";
import drink3 from "../assets/menu/drink_3_lemonade.webp";
import drink4 from "../assets/menu/drink_4_cocacola.webp";
import drink5 from "../assets/menu/drink_5_hugetea.webp";
import drink6 from "../assets/menu/drink_6_dasani.webp";

export const categories = {
  burgers: {
    label: "Burgers",
    icon: Beef,
    heroImg: burgerHero,
    eyebrow: "Charbroiled Perfection",
    title: "Our Signature Burgers",
    description:
      "Cook Out burgers are grilled over a real flame for that authentic backyard flavor. Prepared fresh with 100% real beef and served hot, all day and night.",
    sectionTitle: "Flame-Grilled Burger Favorites",
    items: [
      { name: "Big Double Burger", rating: 4.9, cal: 680, price: "$4.99", img: burger1 },
      { name: "Cook Out Classic Burger", rating: 4.8, cal: 540, price: "$3.49", img: burger2 },
      { name: "Hickory BBQ Burger", rating: 4.7, cal: 610, price: "$4.29", img: burger3 },
      { name: "Bacon Cheddar Burger", rating: 4.9, cal: 710, price: "$4.79", img: burger4 },
      { name: "Steak Style Burger", rating: 4.6, cal: 590, price: "$4.49", img: burger5 },
      { name: "Cajun Spice Burger", rating: 4.7, cal: 520, price: "$3.99", img: burger6 },
    ],
    cta: {
      eyebrow: "Want it your way?",
      title: "Customize It!",
      desc: "Choose your size, style (Cook Out, Out West, Steak, or Cheddar), and add any of our free toppings. Built just the way you crave it.",
      button: "Customize Your Burger",
    },
  },

  chicken: {
    label: "Chicken",
    icon: Drumstick,
    heroImg: chickenHero,
    eyebrow: "Crispy & Tender",
    title: "Premium Chicken Selection",
    description:
      "From our golden-crisp chicken breast selects to custom grilled charbroiled sandwiches and classic quesadillas, we cook our chicken fresh to order.",
    sectionTitle: "Crispy & Grilled Chicken Items",
    items: [
      { name: "Crispy Chicken Selects (5 Pc)", rating: 4.9, cal: 650, price: "$5.99", img: chicken1 },
      { name: "Spicy Chicken Sandwich", rating: 4.8, cal: 510, price: "$4.49", img: chicken2 },
      { name: "Charbroiled Chicken Grill", rating: 4.7, cal: 430, price: "$4.79", img: chicken3 },
      { name: "Cook Out Chicken Quesadilla", rating: 4.8, cal: 350, price: "$2.99", img: chicken4 },
      { name: "Cajun Grilled Chicken", rating: 4.6, cal: 460, price: "$4.69", img: chicken5 },
      { name: "Chicken Club Sandwich", rating: 4.8, cal: 580, price: "$4.99", img: chicken6 },
    ],
    cta: {
      eyebrow: "Chicken Combo Savings",
      title: "Build Your Chicken Tray",
      desc: "Get any of our premium chicken sandwiches or quesadillas as part of the legendary Cook Out Tray. Customize with 2 sides and a milkshake of your choice.",
      button: "Build Chicken Tray",
    },
  },

  bbq: {
    label: "BBQ Special",
    icon: Flame,
    heroImg: bbqHero,
    eyebrow: "Hickory Smoked",
    title: "North Carolina BBQ",
    description:
      "True slow-cooked, hickory smoked pork barbecue. Hand-pulled and seasoned with real Carolinas vinegar-base recipes. A Southern legend.",
    sectionTitle: "Barbecue Platters & Sandwiches",
    items: [
      { name: "Hickory Smoked BBQ Sandwich", rating: 4.8, cal: 490, price: "$3.99", img: bbq1 },
      { name: "BBQ Pork Platter", rating: 4.9, cal: 820, price: "$6.79", img: bbq2 },
      { name: "Smoky BBQ Ribs Plate", rating: 4.7, cal: 940, price: "$7.99", img: bbq3 },
    ],
    cta: {
      eyebrow: "Southern Sides Matchmaker",
      title: "Perfect BBQ Pairings",
      desc: "Nothing pairs better with slow-cooked barbecue than our signature hushpuppies, hand-battered onion rings, and a giant glass of freshly brewed sweet Southern tea.",
      button: "View Sides",
    },
  },

  "hot-dogs": {
    label: "Hot Dogs",
    icon: Sandwich,
    heroImg: hotdogHero,
    eyebrow: "Premium Beef",
    title: "Grilled Hot Dogs",
    description:
      "Cook Out's premium beef hot dogs are grilled fresh over an open flame and served in a warm, fluffy bun. Packed with classic and specialty toppings.",
    sectionTitle: "Classic & Gourmet Hot Dog Styles",
    items: [
      { name: "Premium Grilled Hot Dog", rating: 4.7, cal: 310, price: "$2.49", img: hotdog1 },
      { name: "Chili Cheddar Dog", rating: 4.8, cal: 410, price: "$2.89", img: hotdog2 },
      { name: "Southern Slaw Dog", rating: 4.6, cal: 380, price: "$2.79", img: hotdog3 },
      { name: "Classic Corn Dog", rating: 4.5, cal: 280, price: "$1.99", img: hotdog4 },
      { name: "All-American Relish Dog", rating: 4.6, cal: 330, price: "$2.59", img: hotdog5 },
    ],
    cta: {
      eyebrow: "Build Your Hero Dog",
      title: "Our Famous Fresh Toppings",
      desc: "Customize any hot dog with your choice of premium toppings — homemade chili, shredded cheese, sweet coleslaw, crispy onions, pickle relish, and cajun spice, mixed fresh daily.",
      button: "Customize Your Dog",
    },
  },

  milkshakes: {
    label: "Milkshakes",
    icon: Milk,
    heroImg: null,
    heroTileBg: "#D9EEE4",
    eyebrow: "Hand-Spun Perfection",
    title: "40+ Famous Milkshake Flavors",
    description:
      "Thick, hand-spun shakes made fresh with real ice cream. From classic banana pudding to rotating seasonal flavors, there's one for every craving.",
    sectionTitle: "Fan-Favorite Shake Flavors",
    items: [
      {
        name: "Banana Pudding",
        cal: 640,
        price: "$3.79",
        rating: 4.9,
        img: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=500&q=80",
      },
      {
        name: "Fresh Strawberry",
        cal: 610,
        price: "$3.79",
        rating: 4.8,
        img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80",
      },
      {
        name: "Cookie Dough",
        cal: 720,
        price: "$4.19",
        rating: 4.9,
        img: "https://images.unsplash.com/photo-1607190074257-dd4b7af0309b?auto=format&fit=crop&w=500&q=80",
      },
      {
        name: "Mint Chocolate Chip",
        cal: 590,
        price: "$3.99",
        rating: 4.7,
        img: "https://images.unsplash.com/photo-1502741224143-90386d7f8c82?auto=format&fit=crop&w=500&q=80",
      },
    ],
    cta: {
      eyebrow: "Shake It Up",
      title: "Try The Shake Calculator",
      desc: "See real calories and macros before you order — swap size, flavor, or add mix-ins and watch the numbers update instantly.",
      button: "Try The Calculator",
    },
  },

  sides: {
    label: "Sides & Fries",
    icon: Cookie,
    heroImg: sidesHero,
    eyebrow: "The Perfect Sides",
    title: "World-Famous Sides & Fries",
    description:
      "Complete your Cook Out meal with our crispy crinkle-cut French fries, hand-battered hushpuppies, cheddar cheese bites, and legendary quesadilla sides.",
    sectionTitle: "Signature Cook Out Sides",
    items: [
      { name: "Signature Hushpuppies (12 Pc)", rating: 4.9, cal: 410, price: "$2.89", img: sides1 },
      { name: "Cajun Fries", rating: 4.8, cal: 380, price: "$2.29", img: sides2 },
      { name: "Onion Rings (Basket)", rating: 4.7, cal: 440, price: "$2.99", img: sides3 },
      { name: "Cheddar Cheese Bites", rating: 4.8, cal: 460, price: "$3.29", img: sides4 },
      { name: "Fresh Coleslaw", rating: 4.5, cal: 180, price: "$1.89", img: sides5 },
      { name: "Chicken Quesadilla Side", rating: 4.9, cal: 350, price: "$2.99", img: sides6 },
    ],
    cta: {
      eyebrow: "Better Together",
      title: "Side Pairing Combos",
      desc: "The Southern Classic, The Spice Lover, or The Mega Value — pair any two sides with a main and save on your favorite combo.",
      button: "View Combos",
    },
  },

  drinks: {
    label: "Cold Drinks",
    icon: GlassWater,
    heroImg: drinkHero,
    type: "drinks",
    eyebrow: "Thirst Quenchers",
    title: "Ice Cold Southern Beverages & Legendary Huge Teas",
    description:
      "Nothing pairs better with a fire-grilled Cook Out double burger than our freshly brewed Sweet Tea or authentic Carolina Cheerwine.",
    sectionTitle: "Our Beverage Collection",
    items: [
      { name: "Cheerwine", description: "The legendary wild cherry Carolina soda", sizes: ["Regular", "Large", "Huge"], price: "$1.99", calRange: "150-390", img: drink1 },
      { name: "Fresh Brewed Sweet Tea", description: "Authentic southern style, brewed fresh hourly", sizes: ["Regular", "Large", "Huge"], price: "$1.99", calRange: "120-310", img: drink2 },
      { name: "Homemade Lemonade", description: "Hand-squeezed real lemons, sweet and tart", sizes: ["Regular", "Large", "Huge"], price: "$2.19", calRange: "140-360", img: drink3 },
      { name: "Coca-Cola Classic", description: "Crisp, cold sparkling carbonated original", sizes: ["Regular", "Large", "Huge"], price: "$1.89", calRange: "140-380", img: drink4 },
      { name: "Huge Tea", description: "A massive, legendary southern-brewed classic", sizes: ["Regular", "Large", "Huge"], price: "$2.49", calRange: "240-620", img: drink5 },
      { name: "Dasani Purified Water", description: "Pure hydration to perfectly balance your grill tray", sizes: ["Regular", "Large", "Huge"], price: "$1.59", calRange: "0", img: drink6 },
    ],
    cta: {
      eyebrow: "Legendary Tray Pairing",
      title: "The Southern Classic Tray",
      desc: "Hickory Smoked BBQ Main + Hushpuppies + Sweet Tea — the pairing that made Cook Out famous.",
      button: "Build This Tray",
    },
  },
};

export async function getMenuData() {
  const remoteData = await fetchCookOutMenuData();

  if (remoteData) {
    return remoteData;
  }

  return categories;
}
