import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ShopByArts from "@/components/ShopByArts";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";

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
      <Footer />
    </div>
  );
};

export default Index;
