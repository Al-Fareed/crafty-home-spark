import aluminumArt from "@/assets/aluminum-art.jpg";
import ceramicArt from "@/assets/ceramic-art.jpg";
import brassArt from "@/assets/brass-art.jpg";
import copperArt from "@/assets/copper-art.jpg";
import ironArt from "@/assets/iron-art.jpg";
import glassArt from "@/assets/glass-art.jpg";
import handwovenArt from "@/assets/handwoven-art.jpg";
import kansaArt from "@/assets/kansa-art.jpg";

const ShopByArts = () => {
  const artCategories = [
    { name: "Aluminum Art", image: aluminumArt },
    { name: "Brass Art", image: brassArt },
    { name: "Ceramic Art", image: ceramicArt },
    { name: "Copper Art", image: copperArt },
    { name: "Glass Art", image: glassArt },
    { name: "Iron Art", image: ironArt },
    { name: "Handwoven Art", image: handwovenArt },
    { name: "Kansa Art", image: kansaArt },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Shop by Arts</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our most-loved pieces, crafted by skilled artisans from across the country
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 mb-8">
          {artCategories.map((category, index) => (
            <div key={index} className="text-center group cursor-pointer">
              <div className="relative mb-3 overflow-hidden rounded-full shadow-craft transition-transform duration-300 group-hover:scale-105">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-full"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              </div>
              <h3 className="text-sm font-medium text-foreground group-hover:text-accent transition-colors duration-200">
                {category.name}
              </h3>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <div className="w-2 h-2 bg-muted rounded-full"></div>
            <div className="w-2 h-2 bg-muted rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopByArts;