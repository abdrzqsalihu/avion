import Cta from "./components/Cta";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Newsletter from "./components/Newsletter";
import ProductListings from "./components/ProductListings";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <ProductListings />
      <Cta />
      <Newsletter />
    </div>
  );
}
