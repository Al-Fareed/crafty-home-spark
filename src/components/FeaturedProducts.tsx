import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import metalFrame from "@/assets/metal-frame.jpg";
import servingStand from "@/assets/serving-stand.jpg";

const FeaturedProducts = () => {
  const [activeCategory, setActiveCategory] = useState("Premium Metal");
  
  const categories = ["Premium Metal", "Kitchen & Dining", "Festive", "Vastu"];
  
  const products = [
    {
      id: 1,
      name: "Metal Panther Photo Frame (Set of 2)",
      price: 3799,
      originalPrice: 4999,
      discount: "24% off",
      image: metalFrame,
    },
    {
      id: 2,
      name: "Metal Bird Aluminum Photo Frame (Set of 2)",
      price: 2199,
      originalPrice: 2999,
      discount: "27% off",
      image: metalFrame,
    },
    {
      id: 3,
      name: "Rustic Bird Photo Frame Set of 2 - Home Decor Item",
      price: 2659,
      originalPrice: 3499,
      discount: "24% off",
      image: metalFrame,
    },
    {
      id: 4,
      name: "Metallic One-Tier Serving Stand - Kitchen Decor Item",
      price: 2659,
      originalPrice: 3499,
      discount: "24% off",
      image: servingStand,
    },
  ];

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-muted-foreground mb-2 italic">A showcase of what's winning hearts across all styles.</p>
          <h2 className="text-3xl font-bold text-foreground mb-6">Explore Our Most-Loved Picks</h2>
          
          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="rounded-full px-6"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="flex justify-end gap-2 mb-6">
          <Button variant="outline" size="sm" className="rounded-full w-10 h-10 p-0">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" className="rounded-full w-10 h-10 p-0">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden hover:shadow-craft transition-shadow duration-300">
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-sm text-foreground mb-3 line-clamp-2 leading-tight">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg font-bold text-foreground">₹{product.price.toLocaleString()}</span>
                  <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</span>
                  <span className="text-xs text-accent font-medium">({product.discount})</span>
                </div>
                <Button 
                  variant="secondary" 
                  className="w-full rounded-full font-medium"
                >
                  Add To Cart
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;