import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ShopByArts from "@/components/ShopByArts";
import FeaturedProducts from "@/components/FeaturedProducts";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <ShopByArts />
        <FeaturedProducts />
      </main>
    </div>
  );
};

export default Index;
