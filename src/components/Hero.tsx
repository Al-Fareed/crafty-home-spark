import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-crafting.jpg";

const Hero = () => {
  return (
    <section className="relative h-[600px] bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Artisan crafting pottery"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-primary/60"></div>
      </div>

      {/* Navigation arrows */}
      <button className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          {/* Lotus icon */}
          <div className="mb-6">
            <svg className="w-12 h-12 text-secondary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
            </svg>
          </div>

          <h1 className="text-5xl md:text-6xl font-light text-white mb-4 leading-tight">
            Celebrating<br />
            the art of<br />
            <span className="font-medium">Handmade</span>
          </h1>

          <div className="w-24 h-px bg-secondary mb-8"></div>

          <Button 
            variant="outline" 
            size="lg"
            className="bg-transparent border-white text-white hover:bg-white hover:text-primary transition-all duration-300"
          >
            SHOP NOW
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;