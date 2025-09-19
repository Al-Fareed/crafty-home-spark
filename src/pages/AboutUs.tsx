import Header from "@/components/Header";
import Footer from "@/components/Footer";
import potteryHero from "@/assets/pottery-hero.jpg";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[400px] md:h-[500px] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${potteryHero})` }}
          >
            <div className="absolute inset-0 bg-primary/60"></div>
          </div>
          <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Carving Timeless Stories
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                Crafting Heritage Through Artisanal Excellence
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
                Our Story
              </h2>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-center text-lg">
                  At Hancraft, we believe in the power of handcrafted artistry to tell stories and connect communities. Our mission is to empower artisans across India by bringing their timeless craftsmanship to the forefront, offering you unique, eco-friendly products that celebrate the rich heritage of our culture.
                </p>
                
                <p className="text-center text-lg">
                  Each piece in our collection is a testament to the skill, passion, and creativity of our artisans, crafted with care and designed to leave a lasting impression. We are committed to sustainable practices, ensuring that every purchase not only supports local communities but also contributes to a greener planet.
                </p>
                
                <p className="text-center text-lg">
                  At Hancraft, we are more than just a brand—we are a movement dedicated to artisan empowerment and community engagement, creating a world where traditional art forms thrive and every product has a story to tell.
                </p>
              </div>

              {/* Values Section */}
              <div className="grid md:grid-cols-3 gap-8 mt-16">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Artisan Empowerment</h3>
                  <p className="text-muted-foreground">Supporting skilled craftspeople and preserving traditional techniques for future generations.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Sustainable Craft</h3>
                  <p className="text-muted-foreground">Eco-friendly practices that respect our environment and create lasting positive impact.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📖</span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Timeless Stories</h3>
                  <p className="text-muted-foreground">Every piece carries the heritage and narrative of its maker, connecting past with present.</p>
                </div>
              </div>

              {/* Address Section */}
              <div className="mt-16 p-8 bg-muted/30 rounded-lg text-center">
                <h3 className="text-2xl font-semibold text-primary mb-4">Visit Our Workshop</h3>
                <p className="text-muted-foreground mb-2">
                  <strong>Address:</strong>
                </p>
                <p className="text-muted-foreground">
                  First Floor, Plot No.21, Sudarshanpura Industrial Area, Near 22 Godam, Jaipur Rajasthan 302006
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;