import { Card } from "@/components/ui/card";
import { Hammer, MapPin, CreditCard, MessageCircle } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Hammer className="h-8 w-8 text-accent" />,
      title: "100% Handmade",
      description: "Every curve and edge shaped with heartfelt attention"
    },
    {
      icon: <MapPin className="h-8 w-8 text-accent" />,
      title: "Made in India",
      description: "Proudly handmade in India, where tradition meets excellence"
    },
    {
      icon: <CreditCard className="h-8 w-8 text-accent" />,
      title: "Cash on Delivery",
      description: "No upfront payments—get it first, pay with Cash on Delivery"
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-accent" />,
      title: "Quick Support",
      description: "Our team is just a message away. Get instant support"
    }
  ];

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-craft transition-shadow duration-300 border-border/50">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;