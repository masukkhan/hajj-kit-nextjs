import { Truck, ShieldCheck, HeadphonesIcon, PackageCheck } from "lucide-react";

const features = [
  { icon: PackageCheck, label: "Quality Assured", desc: "Every item hand-checked" },
  { icon: Truck, label: "Home Delivery", desc: "Across Bangladesh" },
  { icon: ShieldCheck, label: "100% Authentic", desc: "Sunnah-compliant products" },
  { icon: HeadphonesIcon, label: "24/7 Support", desc: "Always here to help" },
];

const FeaturesStrip = () => {
  return (
    <section className="border-y border-border bg-card py-8">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {features.map((f) => (
            <div key={f.label} className="flex flex-col items-center gap-2 text-center">
              <div className="rounded-full bg-primary/10 p-3">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <p className="text-sm font-semibold text-foreground">{f.label}</p>
              <p className="text-xs text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesStrip;
