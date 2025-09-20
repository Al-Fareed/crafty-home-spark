import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Share2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";
import metalFrame from "@/assets/metal-frame.jpg";
import servingStand from "@/assets/serving-stand.jpg";

// Sample product data - in a real app this would come from an API
const productData: Record<string, any> = {
  "1": {
    id: 1,
    name: "Handcrafted Green Marble Inlay Coasters (Set of 6) - Pacchikari Stone Inlay Technique",
    price: 3799,
    originalPrice: 5429,
    discount: "31%",
    images: [metalFrame, servingStand, metalFrame, servingStand],
    description: "Bring sophistication to your home with these Handcrafted Marble Inlay Coasters. These Coasters are made from the Pacchikari Stone Inlay Technique, which was used in the making of the Taj Mahal. It is made up of white marble and semi-precious stones, including Green Aventurine (Green), Orange Aventurine (Orange), Lapis Lazuli (Dark Blue), Yellow Aventurine (Yellow), Jaisalmeri (Yellow), Turquoise (Light Blue), and Red Jasper (Red). Floral patterns have been hand-carved by skilled artisans on the marble, and vibrant semi-precious stones are inlaid between marble. A smooth marble base keeps the surface cool and adds natural weight for stability. This product is a blend of exquisite artistry and functionality, which protects the table surface while serving beverages.",
    additionalInfo: "This set includes 6 marble inlay coasters on a white Marble stand. This product is used to protect surfaces from water stains on surface from cold and hot beverages. When coasters are placed on top, they will prevent spills or keep insects out of beverages. These coasters will elevate home decor with their unique design and colours. It is the perfect gift for weddings, anniversaries or housewarming parties. It is customary to keep coasters as per table etiquette, as it helps maintain furniture longevity.",
    category: "Kitchen & Dining",
    sku: "NAT-MC-001"
  }
};

const ProductDescription = () => {
  const { id } = useParams();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  // Get product data or use default
  const product = productData[id || "1"] || productData["1"];
  
  const handleBuyNow = () => {
    // Navigate to checkout with product data
    window.location.href = `/checkout?product=${product.id}`;
  };

  return (
    <>
      <Helmet>
        <title>{product.name} | Hancraft</title>
        <meta name="description" content={product.description.substring(0, 160)} />
        <meta name="keywords" content="handmade, marble inlay, coasters, pacchikari, home decor" />
        <meta property="og:title" content={product.name} />
        <meta property="og:description" content={product.description.substring(0, 160)} />
        <meta property="og:image" content={product.images[0]} />
        <meta property="og:type" content="product" />
        
        {/* Structured Data for Product */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": product.name,
            "image": product.images,
            "description": product.description,
            "sku": product.sku,
            "brand": {
              "@type": "Brand",
              "name": "Hancraft"
            },
            "offers": {
              "@type": "Offer",
              "url": window.location.href,
              "priceCurrency": "INR",
              "price": product.price,
              "availability": "https://schema.org/InStock",
              "seller": {
                "@type": "Organization",
                "name": "Hancraft"
              }
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20">
          {/* Breadcrumb */}
          <nav className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">{product.name}</span>
            </div>
          </nav>

          {/* Product Section */}
          <section className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              
              {/* Image Gallery */}
              <div className="space-y-4">
                {/* Main Image */}
                <Card className="aspect-square overflow-hidden">
                  <img
                    src={product.images[selectedImageIndex]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </Card>
                
                {/* Thumbnail Images */}
                <div className="grid grid-cols-4 gap-2">
                  {product.images.map((image, index) => (
                    <Card 
                      key={index}
                      className={`aspect-square overflow-hidden cursor-pointer transition-all duration-200 ${
                        selectedImageIndex === index ? 'ring-2 ring-primary' : 'hover:opacity-80'
                      }`}
                      onClick={() => setSelectedImageIndex(index)}
                    >
                      <img
                        src={image}
                        alt={`${product.name} view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </Card>
                  ))}
                </div>
              </div>

              {/* Product Details */}
              <div className="space-y-6">
                {/* Header with Share */}
                <div className="flex items-start justify-between">
                  <h1 className="text-2xl lg:text-3xl font-bold text-foreground leading-tight">
                    {product.name}
                  </h1>
                  <Button variant="ghost" size="sm" className="flex items-center gap-2">
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                </div>

                {/* Pricing */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold text-foreground">
                      ₹{product.price.toLocaleString()}
                    </span>
                    <span className="text-lg text-muted-foreground line-through">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                    <span className="text-sm font-medium text-accent bg-accent/10 px-2 py-1 rounded">
                      Save {product.discount}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {product.additionalInfo}
                  </p>
                </div>

                {/* Buy Now Button */}
                <div className="pt-4">
                  <Button 
                    onClick={handleBuyNow}
                    className="w-full bg-gradient-warm text-white hover:shadow-glow transition-all duration-300 py-3 text-lg font-medium"
                    size="lg"
                  >
                    Buy Now
                  </Button>
                </div>

                {/* Product Details */}
                <Card className="p-4">
                  <h3 className="font-semibold text-foreground mb-3">Product Details</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Category:</span>
                      <span className="text-foreground">{product.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">SKU:</span>
                      <span className="text-foreground">{product.sku}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Material:</span>
                      <span className="text-foreground">Marble & Semi-precious stones</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Technique:</span>
                      <span className="text-foreground">Pacchikari Stone Inlay</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ProductDescription;