import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Instagram, Linkedin, Facebook } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import contactCraftImage from "@/assets/contact-craft.jpg";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Form data:", data);
    toast({
      title: "Message sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Need Help?</h1>
          <p className="text-xl text-muted-foreground">
            We hear you! Here's how you can get in touch:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="space-y-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Enter your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Enter your email address" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Enter your phone number" type="tel" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea 
                          placeholder="Enter your message"
                          className="min-h-[120px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full sm:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "SUBMIT"}
                </Button>
              </form>
            </Form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div>
                <p className="text-foreground font-medium mb-2">Phone: +91 9257052097</p>
                <p className="text-foreground font-medium mb-2">Email: Support@hancraft.com</p>
              </div>

              <div>
                <p className="text-foreground font-medium mb-4">Follow Us On:</p>
                <div className="flex space-x-3">
                  <Button variant="outline" size="sm" className="h-10 w-10 p-0">
                    <Instagram className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="sm" className="h-10 w-10 p-0">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="sm" className="h-10 w-10 p-0">
                    <Facebook className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Decorative Image */}
            <div className="mt-8">
              <img 
                src={contactCraftImage} 
                alt="Handcrafted wooden decorative cart" 
                className="w-full max-w-md mx-auto lg:mx-0 object-contain"
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactUs;