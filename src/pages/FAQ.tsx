import { Helmet } from "react-helmet";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FAQ = () => {
  const faqData = [
    {
      question: "When will I receive my order?",
      answer: "We strive to deliver your order as quickly as possible. Typically, orders are shipped within 1-2 business days from our warehouse. Depending on your location, delivery can take between 3 to 15 days. We appreciate your patience and understanding."
    },
    {
      question: "Can I track my order?",
      answer: "Absolutely! Once your order is shipped, you will receive a Tracking number within 1-2 days. You can track your order using this number on our Tracking Page. If you encounter any issues while tracking, feel free to contact us at Support@natriel.com"
    },
    {
      question: "Why is my order being shipped in different packages?",
      answer: "To ensure the fastest delivery, your items may be shipped from different warehouses depending on availability. If certain items in your order are in high demand, they might be shipped separately to avoid delays. Rest assured, you will receive all your items promptly."
    },
    {
      question: "How can I cancel my order?",
      answer: "You can cancel your order before it has been shipped. Once your order has shipped, cancellations are no longer possible. However, you can initiate a return once the item has been delivered. For more details, refer to our Cancellation Policy."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 5-day return policy. You can return any eligible item within 5 days of receiving it. The product must be in its original condition, unused, and with all tags and packaging intact. To initiate a return, please contact us at Support@natriel.com."
    },
    {
      question: "How will I receive my refund?",
      answer: "Refunds will be processed within 7-10 business days once we receive and inspect the returned product. If you paid online, the refund will be credited to your original payment method. For Cash on Delivery (COD) orders, we will request your bank details to process the refund."
    },
    {
      question: "Are the products on Natriel handmade?",
      answer: "Yes! Natriel products are handcrafted by skilled artisans from various regions. Each piece reflects traditional craftsmanship and carries the uniqueness of handwork, making your purchase one of a kind."
    },
    {
      question: "How can I care for my Natriel products?",
      answer: "Care instructions vary depending on the material and craftsmanship of each product. We recommend checking the specific care instructions provided with your purchase. If you have any additional questions, feel free to reach out to us at Support@natriel.com."
    },
    {
      question: "How can I contact Natriel for further inquiries?",
      answer: "We're here to help! You can reach us via email at Support@natriel.com for any questions or concerns."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>FAQ's - Hancraft | Frequently Asked Questions</title>
        <meta 
          name="description" 
          content="Find answers to frequently asked questions about Hancraft orders, shipping, returns, refunds, and handcrafted products. Get help with tracking, cancellations, and care instructions." 
        />
        <meta name="keywords" content="FAQ, frequently asked questions, Hancraft help, order tracking, returns, refunds, handmade products" />
        <link rel="canonical" href="https://hancraft.com/faq" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <div className="bg-muted/30 pt-20 pb-6">
          <div className="container mx-auto px-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>FAQ's</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        {/* Page Header */}
        <div className="container mx-auto px-4 pt-8 pb-12">
          <h1 className="text-4xl font-bold text-center text-foreground mb-8">
            FAQ's
          </h1>
          
          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border rounded-lg shadow-sm bg-card"
                >
                  <AccordionTrigger className="px-6 py-4 text-left font-medium text-foreground hover:bg-muted/50 rounded-lg">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          {/* Contact Section */}
          <div className="text-center mt-12 p-6 bg-muted/30 rounded-lg max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Still have questions?
            </h2>
            <p className="text-muted-foreground mb-4">
              Can't find the answer you're looking for? Please chat to our friendly team.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default FAQ;