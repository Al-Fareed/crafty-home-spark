import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8 text-center">Privacy Policy</h1>
          
          <div className="space-y-8 text-muted-foreground">
            <section>
              <p className="leading-relaxed">
                At Natriel, a brand under Ekaaya E-Kraft Pvt. Ltd., we are dedicated to safeguarding your privacy. We understand the importance of protecting your personal information and are committed to using it responsibly and transparently. Should we request information that identifies you while using our website, rest assured that it will only be used in accordance with this privacy statement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to Our Policy</h2>
              <p className="leading-relaxed">
                Natriel may update this policy periodically by making changes to this page. We encourage you to review this page regularly to stay informed about how we are protecting your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Cookies Policy</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-3">Why We Collect Information</h3>
                  <p className="leading-relaxed mb-3">
                    We collect certain information to better understand your needs and to provide you with improved services. Specifically, this information helps us to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Enhance our website and services to better align with your preferences.</li>
                    <li>Ensure the security and protection of your data.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-foreground mb-3">Security of Your Information</h3>
                  <p className="leading-relaxed">
                    We are committed to ensuring that your personal information is secure. We have implemented suitable physical, electronic, and managerial procedures to prevent unauthorized access or disclosure and to safeguard the information we collect online.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-foreground mb-3">How We Use Cookies</h3>
                  <p className="leading-relaxed mb-3">
                    Cookies are small files that are placed on your computer's hard drive with your permission. These cookies help us analyze web traffic and tailor our website to your needs by collecting and remembering information about your preferences. We use traffic log cookies to identify which pages are being visited, helping us analyze data to improve our website.
                  </p>
                  <p className="leading-relaxed mb-3">Please note:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Cookies do not give us access to your computer or any personal information beyond what you choose to share.</li>
                    <li>You have the option to accept or decline cookies through your web browser settings. However, declining cookies may limit your ability to fully experience our website.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Links to Other Websites</h2>
              <p className="leading-relaxed">
                Our website may contain links to external sites of interest. However, once you leave our site, please note that we do not have control over external websites. We cannot be responsible for the protection and privacy of any information you provide while visiting such sites, which are not governed by this privacy statement. We encourage you to review the privacy policy of any website you visit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Sharing Your Information</h2>
              <p className="leading-relaxed">
                We do not sell, distribute, or lease your personal information to third parties without your permission unless required by law. With your consent, we may use your personal information to send you promotional information about third parties that we believe may interest you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Accessing Your Information</h2>
              <p className="leading-relaxed mb-3">
                You may request details of the personal information we hold about you under the Data Protection Act 1998. A small fee may apply. If you would like a copy of the information we have on file for you, please contact us at support@natriel.com.
              </p>
              <p className="leading-relaxed">
                If you believe any information we hold is incorrect or incomplete, please write to or email us as soon as possible at the above address. We will promptly correct any inaccuracies.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;