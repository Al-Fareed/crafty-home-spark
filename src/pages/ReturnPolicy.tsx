import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ReturnPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8 text-center">Refund Policy</h1>
          
          <div className="space-y-8 text-muted-foreground">
            <div className="bg-muted/20 border border-border rounded-lg p-4">
              <p className="font-medium text-foreground">
                Note: Return policy does not apply to items in the Clearance Sale collection.
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">A. Return Policy:</h2>
              <p className="leading-relaxed mb-4">
                At Natriel, we offer a 5 days return policy. Customers can initiate a return within 5 days of receiving their order by contacting us at support@natriel.com. Once your return request is accepted and a return ticket is issued, we will provide you with return shipping details.
              </p>
              
              <p className="leading-relaxed mb-3 font-medium text-foreground">Please note:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Products returned without an official return request ticket will not be accepted and are not eligible for a refund.</li>
                <li>However, in the unlikely event of breakable, damaged, defective or different / wrong items delivered to you, please write to us at Support@natriel.com with the details and supporting image(s)/video(s). We consider all such cases individually.</li>
                <li>Upon receipt of the grievance, we will conduct a full and thorough examination and notify you within a reasonable time. Please note that we accept order-related concerns (e.g., damage, defective, different product(s)) only up to 48 hours from the time of delivery.</li>
                <li>There is no return policy for breakable items, such as those in the ceramic, terracotta, and blue pottery etc (categories).</li>
                <li>To be eligible for a refund, the product must be in its original condition—unworn, unused, with tags, in its original packaging, and accompanied by the original invoice.</li>
                <li>For any queries regarding returns, please contact us at support@natriel.com.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">B. Refund Policy:</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">In case of order cancellation:</h3>
                  <p className="leading-relaxed">
                    If an order is cancelled before shipment, the paid amount will be automatically refunded to your original payment method (in case of online payment) within 7-10 working days.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">In case of return:</h3>
                  <p className="leading-relaxed">
                    Once we receive and inspect your returned product, we will notify you of the approval status. Upon approval, the refund will be processed and automatically credited to your original payment method within 7-10 working days. Please note that your bank or credit card company may take additional time to process and post the refund.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">For cash on delivery (COD) orders:</h3>
                  <p className="leading-relaxed">
                    If the order was paid for using the cash on delivery option, Natriel will confirm the bank account details with the customer via email. The refund will only be processed to a bank account in the name of the original customer. The refund will be credited within 7-10 working days after confirmation.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">C. Cancellation Policy:</h2>
              <p className="leading-relaxed">
                Cancellation requests are only accepted if made before the order has been shipped. Once the order has been shipped, cancellations are no longer allowed. However, customers may choose to return the product in accordance with our return policy after shipment.
              </p>
            </section>

            <div className="bg-muted/20 border border-border rounded-lg p-4">
              <p className="font-medium text-foreground">
                Note: Return policy does not apply to items in the Clearance Sale collection.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ReturnPolicy;