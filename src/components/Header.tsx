import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navItems = [
    "Home Decor",
    "Kitchen & Dining", 
    "Spiritual",
    "Aroma",
    "Workspace Accessories",
    "Signature Collection",
    "Premium Gifting"
  ];

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      {/* Top bar */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-warm rounded-full flex items-center justify-center">
              <span className="text-primary font-bold text-sm">H</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">Hancraft</h1>
              <p className="text-xs text-muted-foreground">Crafting Timeless Stories</p>
            </div>
          </div>

          {/* Search bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Input 
                placeholder="Search For" 
                className="pr-12 bg-muted/50"
              />
              <Button 
                size="sm" 
                variant="secondary"
                className="absolute right-1 top-1 h-8 w-8 p-0"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              <User className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <ShoppingCart className="h-4 w-4" />
            </Button>
            {/* Mobile menu button */}
            <Button 
              variant="ghost" 
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation - Desktop */}
      <nav className="hidden md:block border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-8 py-3">
            {navItems.map((item, index) => (
              <button 
                key={index}
                className="text-sm text-foreground hover:text-accent transition-colors duration-200 py-2"
              >
                {item}
              </button>
            ))}
            <button className="text-sm text-accent font-medium py-2">
              Clearance Sale 🔥
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden border-t border-border/50 bg-background">
          <div className="container mx-auto px-4 py-4">
            {/* Mobile Search */}
            <div className="relative mb-4">
              <Input 
                placeholder="Search For" 
                className="pr-12 bg-muted/50"
              />
              <Button 
                size="sm" 
                variant="secondary"
                className="absolute right-1 top-1 h-8 w-8 p-0"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
            
            {/* Mobile Navigation Items */}
            <div className="space-y-2">
              {navItems.map((item, index) => (
                <button 
                  key={index}
                  className="block w-full text-left text-sm text-foreground hover:text-accent transition-colors duration-200 py-2"
                >
                  {item}
                </button>
              ))}
              <button className="block w-full text-left text-sm text-accent font-medium py-2">
                Clearance Sale 🔥
              </button>
              <Button variant="ghost" className="w-full justify-start mt-4">
                <User className="h-4 w-4 mr-2" />
                Account
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;