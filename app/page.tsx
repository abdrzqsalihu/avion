import Features from "./components/Features";
import Hero from "./components/Hero";
import ProductListings from "./components/ProductListings";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <ProductListings />
    </div>
  );
}
