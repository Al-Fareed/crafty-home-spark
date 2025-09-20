import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ChevronRight, CreditCard, Building2, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";
import metalFrame from "@/assets/metal-frame.jpg";

// Sample product data - in a real app this would come from an API
const productData: Record<string, any> = {
  "1": {
    id: 1,
    name: "Handcrafted Green Marble Inlay Coasters (Set of 6) - Pacchikari Stone Inlay Technique",
    price: 3799,
    originalPrice: 5429,
    discount: "31%",
    image: metalFrame,
    sku: "NAT-MC-001"
  }
};

const Checkout = () => {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("product") || "1";
  const product = productData[productId] || productData["1"];
  
  const [paymentMethod, setPaymentMethod] = useState("netbanking");
  const [formData, setFormData] = useState({
    // Billing Address
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    
    // Payment Data
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
    bankName: ""
  });

  const deliveryCharge = 99;
  const total = product.price + deliveryCharge;
  const savings = product.originalPrice - product.price;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleProceedPayment = () => {
    // Handle payment processing
    console.log("Processing payment with:", { formData, paymentMethod, product });
  };

  return (
    <>
      <Helmet>
        <title>Checkout - Secure Payment | Hancraft</title>
        <meta name="description" content="Complete your purchase securely with multiple payment options including credit card and net banking." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-muted/30">
        <Header />
        
        <main className="pt-20">
          {/* Breadcrumb */}
          <nav className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link to={`/product/${product.id}`} className="hover:text-foreground transition-colors">
                {product.name.substring(0, 30)}...
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">Checkout</span>
            </div>
          </nav>

          {/* Checkout Content */}
          <section className="container mx-auto px-4 pb-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Checkout Form */}
              <div className="lg:col-span-2 space-y-6">
                
                {/* Billing Address */}
                <Card className="p-6">
                  <h2 className="text-xl font-semibold text-foreground mb-6">Billing Address</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                        placeholder="Enter your full name"
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="Enter your email"
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="Enter your phone number"
                        className="mt-1"
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <Label htmlFor="address">Address *</Label>
                      <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) => handleInputChange("address", e.target.value)}
                        placeholder="Enter your complete address"
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => handleInputChange("city", e.target.value)}
                        placeholder="Enter your city"
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="state">State *</Label>
                      <Input
                        id="state"
                        value={formData.state}
                        onChange={(e) => handleInputChange("state", e.target.value)}
                        placeholder="Enter your state"
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="pincode">Pincode *</Label>
                      <Input
                        id="pincode"
                        value={formData.pincode}
                        onChange={(e) => handleInputChange("pincode", e.target.value)}
                        placeholder="Enter pincode"
                        className="mt-1"
                      />
                    </div>
                  </div>
                </Card>

                {/* Payment Method */}
                <Card className="p-6">
                  <h2 className="text-xl font-semibold text-foreground mb-6">Payment Method</h2>
                  
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
                    <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <RadioGroupItem value="netbanking" id="netbanking" />
                      <Label htmlFor="netbanking" className="flex items-center cursor-pointer flex-1">
                        <Building2 className="h-5 w-5 mr-3 text-primary" />
                        <div>
                          <div className="font-medium">Net Banking</div>
                          <div className="text-sm text-muted-foreground">Pay securely using your bank account</div>
                        </div>
                      </Label>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <RadioGroupItem value="credit-card" id="credit-card" />
                      <Label htmlFor="credit-card" className="flex items-center cursor-pointer flex-1">
                        <CreditCard className="h-5 w-5 mr-3 text-primary" />
                        <div>
                          <div className="font-medium">Credit/Debit Card</div>
                          <div className="text-sm text-muted-foreground">Visa, Mastercard, RuPay accepted</div>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>

                  {/* Net Banking Details */}
                  {paymentMethod === "netbanking" && (
                    <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                      <Label htmlFor="bankName">Select Your Bank</Label>
                      <Input
                        id="bankName"
                        value={formData.bankName}
                        onChange={(e) => handleInputChange("bankName", e.target.value)}
                        placeholder="Enter or select your bank name"
                        className="mt-2"
                      />
                    </div>
                  )}

                  {/* Credit Card Details */}
                  {paymentMethod === "credit-card" && (
                    <div className="mt-6 space-y-4">
                      <div>
                        <Label htmlFor="cardNumber">Card Number *</Label>
                        <Input
                          id="cardNumber"
                          value={formData.cardNumber}
                          onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                          placeholder="1234 5678 9012 3456"
                          className="mt-1"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiryDate">Expiry Date *</Label>
                          <Input
                            id="expiryDate"
                            value={formData.expiryDate}
                            onChange={(e) => handleInputChange("expiryDate", e.target.value)}
                            placeholder="MM/YY"
                            className="mt-1"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="cvv">CVV *</Label>
                          <Input
                            id="cvv"
                            value={formData.cvv}
                            onChange={(e) => handleInputChange("cvv", e.target.value)}
                            placeholder="123"
                            className="mt-1"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="cardName">Cardholder Name *</Label>
                        <Input
                          id="cardName"
                          value={formData.cardName}
                          onChange={(e) => handleInputChange("cardName", e.target.value)}
                          placeholder="Name as on card"
                          className="mt-1"
                        />
                      </div>
                    </div>
                  )}
                </Card>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  
                  {/* Product Details */}
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Order Summary</h3>
                    
                    <div className="flex gap-4 pb-4 border-b">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-sm text-foreground leading-tight">
                          {product.name}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1">SKU: {product.sku}</p>
                        <p className="text-sm font-medium text-foreground mt-1">₹{product.price.toLocaleString()}</p>
                      </div>
                    </div>
                  </Card>

                  {/* Payment Summary */}
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Payment Summary</h3>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Item Total</span>
                        <span className="text-foreground">₹{product.price.toLocaleString()}</span>
                      </div>
                      
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Delivery Charges</span>
                        <span className="text-foreground">₹{deliveryCharge}</span>
                      </div>
                      
                      <div className="flex justify-between text-sm text-green-600">
                        <span>You Save</span>
                        <span>-₹{savings.toLocaleString()}</span>
                      </div>
                      
                      <div className="border-t pt-3">
                        <div className="flex justify-between font-semibold text-lg">
                          <span className="text-foreground">Total Amount</span>
                          <span className="text-foreground">₹{total.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Proceed to Payment */}
                  <Button 
                    onClick={handleProceedPayment}
                    className="w-full bg-gradient-warm text-white hover:shadow-glow transition-all duration-300 py-3 text-lg font-medium"
                    size="lg"
                  >
                    <Shield className="h-5 w-5 mr-2" />
                    Proceed with {paymentMethod === "netbanking" ? "Net Banking" : "Card Payment"}
                  </Button>

                  <div className="text-center text-xs text-muted-foreground">
                    <p>🔒 Your payment information is secure and encrypted</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Checkout;