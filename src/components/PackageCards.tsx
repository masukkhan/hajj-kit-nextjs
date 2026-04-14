import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { PACKAGES } from "@/data/products";

type Props = {
  selectedPackage: string;
  onSelect: (id: string) => void;
};

const PackageCards = ({ selectedPackage, onSelect }: Props) => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 text-center">
          <h2 className="font-[Amiri] text-3xl font-bold text-foreground md:text-4xl">
            Choose Your Package
          </h2>
          <p className="mt-2 text-muted-foreground">
            Select the perfect kit for your sacred journey
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PACKAGES.map((pkg) => (
            <Card
              key={pkg.id}
              onClick={() => onSelect(pkg.id)}
              className={`relative cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                selectedPackage === pkg.id
                  ? "border-2 border-primary ring-2 ring-primary/20 shadow-lg"
                  : "border-border hover:border-primary/40"
              }`}
            >
              {pkg.badge && (
                <Badge className="absolute -top-2.5 right-4 bg-accent text-accent-foreground font-semibold px-3">
                  {pkg.badge}
                </Badge>
              )}
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground">{pkg.name}</h3>
                <p className="mt-0.5 text-sm text-muted-foreground font-[Amiri]">{pkg.nameBn}</p>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-primary">৳{pkg.price.toLocaleString()}</span>
                  {pkg.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      ৳{pkg.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                {pkg.originalPrice && (
                  <p className="mt-1 text-xs font-medium text-primary">
                    Save ৳{(pkg.originalPrice - pkg.price).toLocaleString()}
                  </p>
                )}
                {selectedPackage === pkg.id && (
                  <div className="mt-3 flex items-center gap-1.5 text-sm font-medium text-primary">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    Selected
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackageCards;
