import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";
import { MALE_ITEMS, FEMALE_ITEMS, CATEGORY_LABELS, type KitItem } from "@/data/products";

type Props = {
  kit: "male" | "female";
  onKitChange: (kit: "male" | "female") => void;
};

const KitItemsGrid = ({ kit, onKitChange }: Props) => {
  const [activeCategory, setActiveCategory] = useState<KitItem["category"] | "all">("all");
  const items = kit === "male" ? MALE_ITEMS : FEMALE_ITEMS;

  const filtered = activeCategory === "all" ? items : items.filter((i) => i.category === activeCategory);

  const categories: Array<KitItem["category"]> = ["clothing", "hygiene", "accessories", "spiritual", "comfort"];

  const totalValue = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="py-16 bg-secondary/30">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-8 text-center">
          <h2 className="font-[Amiri] text-3xl font-bold text-foreground md:text-4xl">
            What's Inside the Kit
          </h2>
          <p className="mt-2 text-muted-foreground">
            {items.length} premium items — Total value{" "}
            <span className="font-semibold text-primary">৳{totalValue.toLocaleString()}</span>
          </p>
        </div>

        {/* Kit toggle */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex rounded-xl bg-card border border-border p-1.5 shadow-sm">
            {(["male", "female"] as const).map((gender) => (
              <button
                key={gender}
                onClick={() => onKitChange(gender)}
                className={`rounded-lg px-6 py-2.5 text-sm font-medium transition-all ${
                  kit === gender
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {gender === "male" ? "🧔 Men's Kit" : "👩 Women's Kit"}
              </button>
            ))}
          </div>
        </div>

        {/* Category filter */}
        <div className="mb-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setActiveCategory("all")}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
              activeCategory === "all"
                ? "bg-primary text-primary-foreground"
                : "bg-card border border-border text-muted-foreground hover:border-primary/40"
            }`}
          >
            All ({items.length})
          </button>
          {categories.map((cat) => {
            const count = items.filter((i) => i.category === cat).length;
            if (count === 0) return null;
            const info = CATEGORY_LABELS[cat];
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-muted-foreground hover:border-primary/40"
                }`}
              >
                {info.icon} {info.label} ({count})
              </button>
            );
          })}
        </div>

        {/* Items grid */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, i) => (
            <Card key={`${item.name}-${i}`} className="border-border bg-card hover:shadow-md transition-shadow group">
              <CardContent className="flex items-center justify-between gap-3 p-4">
                <div className="flex items-center gap-3 min-w-0">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary group-hover:scale-110 transition-transform" />
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{item.name}</p>
                    <p className="text-xs text-muted-foreground font-[Amiri]">{item.nameBn}</p>
                  </div>
                </div>
                <Badge variant="secondary" className="shrink-0 text-xs font-semibold">
                  ৳{item.price}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KitItemsGrid;
