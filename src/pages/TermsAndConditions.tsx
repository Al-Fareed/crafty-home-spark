import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8 text-center">Terms of Service</h1>
          
          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
              <p className="leading-relaxed">
                Welcome to Natriel, a brand by Ekaaya E-Kraft Pvt. Ltd. These Terms of Service ("Terms") govern your use of our website, located at https://natriel.com (the "Service"). By accessing or using our Service, you agree to be bound by these Terms, as well as our Privacy Policy, which outlines how we collect, safeguard, and disclose information resulting from your use of our website. If you do not agree with these Terms, please refrain from using the Service and contact us at support@natriel.com for assistance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Communications</h2>
              <p className="leading-relaxed">
                By using our Service, you consent to receive newsletters, marketing materials, and other communications from us. If you prefer not to receive such communications, you can unsubscribe at any time by following the unsubscribe link provided in our emails or by contacting us at support@natriel.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Purchases</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Information Provided:</h3>
                  <p className="leading-relaxed">
                    When making a purchase through our Service, you may be asked to provide specific information, including your credit or debit card details, billing address, and shipping information. You confirm that all information provided is accurate and that you have the legal right to use the payment methods supplied. We may use third-party services to facilitate payment and order processing. By submitting your payment information, you authorize us to share it with these third parties in accordance with our Privacy Policy.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Order Refusal:</h3>
                  <p className="leading-relaxed">
                    We reserve the right to refuse or cancel your order for reasons including, but not limited to, product availability, inaccuracies in pricing or product descriptions, or suspected fraudulent activity. If we suspect unauthorized or illegal transactions, we may cancel your order without prior notice.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Contests, Sweepstakes, and Promotions</h2>
              <p className="leading-relaxed">
                Any contests, sweepstakes, or promotions made available through our Service may be governed by separate rules. If you participate in any such promotions, please review the applicable rules along with these Terms. In the event of a conflict between promotion rules and these Terms, the promotion rules will prevail.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Cancellation, Return, and Refund Policy</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Cancellation Policy:</h3>
                  <p className="leading-relaxed">
                    Cancellation requests are only accepted if made before the order has been shipped. Once the order has been shipped, cancellations are no longer allowed. However, customers may choose to return the product in accordance with our return policy after shipment.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Return Policy:</h3>
                  <div className="space-y-3">
                    <p className="leading-relaxed">
                      At Natriel, we offer a 5-day return policy. Customers can initiate a return within 5 days of receiving their order by contacting us at support@natriel.com. Once your return request is accepted and a return ticket is issued, we will provide you with return shipping details.
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Products returned without an official return request ticket will not be accepted and are not eligible for a refund.</li>
                      <li>In the unlikely event of damaged, defective, or different/wrong items delivered to you, please write to us at Support@natriel.com with the details and supporting image(s)/video(s). We consider all such cases individually.</li>
                      <li>Upon receipt of the grievance, we will conduct a full and thorough examination and notify you within a reasonable time. Please note that we accept order-related concerns (e.g., damage, defective, different product(s)) only up to 48 hours from the time of delivery.</li>
                      <li>There is no return policy for breakable items, such as those in the ceramic, terracotta, and blue pottery categories.</li>
                      <li>To be eligible for a refund, the product must be in its original condition—unworn, unused, with tags, in its original packaging, and accompanied by the original invoice.</li>
                      <li>For any queries regarding returns, please contact us at support@natriel.com.</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Refund Policy:</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-foreground">Order Cancellation:</h4>
                      <p className="leading-relaxed">
                        If an order is cancelled before shipment, the paid amount will be automatically refunded to your original payment method (in case of online payment) within 7-10 working days.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Return:</h4>
                      <p className="leading-relaxed">
                        Once we receive and inspect your returned product, we will notify you of the approval status. Upon approval, the refund will be processed and automatically credited to your original payment method within 7-10 working days. Please note that your bank or credit card company may take additional time to process and post the refund.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Cash on Delivery (COD) Orders:</h4>
                      <p className="leading-relaxed">
                        If the order was paid for using the cash on delivery option, Natriel will confirm the bank account details with the customer via email. The refund will only be processed to a bank account in the name of the original customer. The refund will be credited within 7-10 working days after confirmation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Content and Images</h2>
              <p className="leading-relaxed">
                All content and images on our website are the property of Natriel (Ekaaya E-Kraft Pvt. Ltd.) or are used with permission. You may not distribute, modify, transmit, reuse, download, repost, copy, or use such content for commercial or personal gain without express written permission from us. You agree to use our Service only for lawful purposes and in accordance with these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Prohibited Uses</h2>
              <p className="leading-relaxed mb-3">
                You agree not to use our Service for any unlawful or prohibited activities, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Violating any applicable laws or regulations.</li>
                <li>Exploiting or harming minors in any way.</li>
                <li>Transmitting unsolicited advertising or promotional material (spam).</li>
                <li>Impersonating Natriel, its employees, or any other person.</li>
                <li>Infringing on the rights of others or engaging in fraudulent activities.</li>
                <li>Introducing malicious software or interfering with the proper functioning of our Service.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Analytics</h2>
              <p className="leading-relaxed">
                We may use third-party service providers to monitor and analyze the use of our Service to improve its performance and user experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Accounts</h2>
              <p className="leading-relaxed">
                When creating an account with us, you agree to provide accurate and complete information. You are responsible for maintaining the confidentiality of your account details and for any activities under your account. Notify us immediately if you suspect any unauthorized use of your account. We reserve the right to terminate accounts, refuse service, or cancel orders at our discretion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Copyright Policy</h2>
              <p className="leading-relaxed">
                We respect intellectual property rights and respond to claims of copyright infringement. If you believe that content on our Service infringes on your copyright, please contact us at support@natriel.com with the subject line "Copyright Infringement" and provide detailed information about the alleged infringement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Links to Other Websites</h2>
              <p className="leading-relaxed">
                Our Service may contain links to third-party websites that are not operated by Natriel. We have no control over the content or practices of these sites and are not responsible for their policies. We encourage you to review the terms and privacy policies of any third-party websites you visit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">12. Disclaimer of Warranty</h2>
              <p className="leading-relaxed">
                Our Service and products are provided on an "as is" and "as available" basis. We make no warranties, express or implied, regarding the operation of our Service, the information provided, or the products offered. Your use of our Service is at your own risk, and we disclaim all warranties, including but not limited to merchantability, non-infringement, and fitness for a particular purpose.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">13. Limitation of Liability</h2>
              <p className="leading-relaxed">
                Except as prohibited by law, Natriel and its affiliates will not be liable for any indirect, punitive, incidental, or consequential damages arising out of or related to your use of the Service or these Terms. Our liability will be limited to the amount paid for the products or services, and no consequential or punitive damages will be awarded.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">14. Termination</h2>
              <p className="leading-relaxed">
                We may terminate or suspend your account immediately, without prior notice, for any reason, including breach of these Terms. If you wish to terminate your account, simply discontinue using the Service. Certain provisions of these Terms will survive termination, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">15. Amendments to Terms & Conditions</h2>
              <p className="leading-relaxed">
                We reserve the right to amend these Terms at any time by posting the updated Terms on our website. Your continued use of the Service after any changes are made constitutes your acceptance of the new Terms. We encourage you to review this page regularly to stay informed of any updates.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">16. Governing Law and Jurisdiction</h2>
              <p className="leading-relaxed">
                These conditions are governed by and construed in accordance with the laws of India. You agree to submit to the exclusive jurisdiction of the courts in Jaipur, India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">17. Severability</h2>
              <p className="leading-relaxed">
                The provisions contained in these Terms of Service are enforceable independently of each other. If any provision is determined by a competent court to be unenforceable, the other provisions will continue in effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">18. Acknowledgement</h2>
              <p className="leading-relaxed">
                By using our Service or purchasing products from Natriel, you acknowledge that you have read these Terms of Service and agree to be bound by them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">19. Feedback</h2>
              <p className="leading-relaxed">
                We value your feedback and strive to continually improve our Service. By submitting feedback, suggestions, or ideas to Natriel, you agree that such submissions are non-confidential and shall become the sole property of Natriel (Ekaaya E-Kraft Pvt. Ltd.). We reserve the right to use, reproduce, disclose, and distribute the feedback for any purpose without any obligation to you. If you have any specific concerns or suggestions, please reach out to us at support@natriel.com.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;