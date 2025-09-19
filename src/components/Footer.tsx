import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const supportLinks = [
    "Shipping Policy",
    "Return & Refund Policy", 
    "Privacy Policy",
    "Terms and Conditions",
    "FAQ's"
  ];

  const companyLinks = [
    "About Us",
    "Contact Us", 
    "Blogs",
    "Your Account"
  ];

  const helpdeskLinks = [
    "Track Your Order",
    "Bulk Orders",
    "Corporate Orders"
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-warm rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-sm">H</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary">Hancraft</h1>
                <p className="text-xs text-muted-foreground">Crafting Timeless Stories</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 max-w-sm">
              Hancraft crafts your dreams into reality with unique designs, exquisite decor, and unmatched artisanal elegance.
            </p>
            <p className="text-sm font-medium text-foreground mb-4">
              Get 10% Off. Unlock Exclusive Craft Stories & Offers
            </p>
            <div className="flex space-x-2">
              <Input 
                placeholder="Enter your email" 
                className="max-w-xs"
              />
              <Button variant="secondary" size="sm">
                Subscribe
              </Button>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <button className="text-muted-foreground hover:text-accent transition-colors text-sm text-left">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              <Link to="/about" className="block text-muted-foreground hover:text-accent transition-colors text-sm text-left">
                About Us
              </Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-accent transition-colors text-sm text-left">
                Contact Us
              </Link>
              {companyLinks.slice(2).map((link, index) => (
                <li key={index}>
                  <button className="text-muted-foreground hover:text-accent transition-colors text-sm text-left">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact us</h3>
            <div className="space-y-2">
              {helpdeskLinks.map((link, index) => (
                <button key={index} className="block text-muted-foreground hover:text-accent transition-colors text-sm text-left">
                  {link}
                </button>
              ))}
              <div className="pt-2">
                <p className="text-sm text-muted-foreground">Support@hancraft.com</p>
                <p className="text-sm text-muted-foreground">+91-9257052097</p>
              </div>
              <div className="flex space-x-2 pt-2">
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Facebook className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border/50 mt-8 pt-6">
          <p className="text-center text-sm text-muted-foreground">
            Copyright © 2025, Hancraft | All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;