import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { Phone, MapPin, User, CheckCircle2, ShoppingBag } from "lucide-react";
import { PACKAGES } from "@/data/products";

type Props = {
  selectedPackage: string;
};

const OrderForm = ({ selectedPackage }: Props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const pkg = PACKAGES.find((p) => p.id === selectedPackage) || PACKAGES[0];

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !address.trim()) {
      toast.error("Please fill in all fields");
      return;
    }
    setSubmitted(true);
    toast.success("Order placed successfully! We will contact you soon.");
  };

  const reset = () => {
    setSubmitted(false);
    setName("");
    setPhone("");
    setAddress("");
  };

  return (
    <section className="py-16">
      <div className="mx-auto max-w-xl px-6">
        <div className="mb-8 text-center">
          <h2 className="font-[Amiri] text-3xl font-bold text-foreground md:text-4xl">
            Place Your Order
          </h2>
          <p className="mt-2 text-muted-foreground">
            Get your kit delivered to your doorstep
          </p>
        </div>

        {submitted ? (
          <Card className="border-primary/30 bg-primary/5 overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary" />
            <CardContent className="flex flex-col items-center gap-4 p-10 text-center">
              <div className="rounded-full bg-primary/10 p-4">
                <CheckCircle2 className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Order Received!</h3>
              <p className="text-muted-foreground">
                Thank you, <strong className="text-foreground">{name}</strong>. We will contact you at{" "}
                <strong className="text-foreground">{phone}</strong> to confirm your order.
              </p>
              <Button variant="outline" onClick={reset} className="mt-2">
                Place Another Order
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Card className="border-border bg-card overflow-hidden shadow-lg">
            <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary" />
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleOrder} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2 text-foreground">
                    <User className="h-4 w-4 text-muted-foreground" /> Full Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2 text-foreground">
                    <Phone className="h-4 w-4 text-muted-foreground" /> Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="01XXXXXXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address" className="flex items-center gap-2 text-foreground">
                    <MapPin className="h-4 w-4 text-muted-foreground" /> Delivery Address
                  </Label>
                  <Input
                    id="address"
                    placeholder="Enter your full delivery address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="h-11"
                  />
                </div>

                {/* Order summary */}
                <div className="rounded-xl bg-secondary/70 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShoppingBag className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium text-foreground">{pkg.name}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-bold text-primary">৳{pkg.price.toLocaleString()}</span>
                      {pkg.originalPrice && (
                        <span className="ml-2 text-xs text-muted-foreground line-through">
                          ৳{pkg.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full text-base font-semibold h-12">
                  <ShoppingBag className="h-5 w-5 mr-2" />
                  Place Order — ৳{pkg.price.toLocaleString()}
                </Button>
              </form>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export default OrderForm;
