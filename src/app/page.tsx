"use client";

import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import FeaturesStrip from "@/components/FeaturesStrip";
import PackageCards from "@/components/PackageCards";
import KitItemsGrid from "@/components/KitItemsGrid";
import OrderForm from "@/components/OrderForm";

export default function Page() {
  const [selectedPackage, setSelectedPackage] = useState("hajj-male");
  const [kit, setKit] = useState<"male" | "female">("male");

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesStrip />
      <PackageCards selectedPackage={selectedPackage} onSelect={setSelectedPackage} />
      <KitItemsGrid kit={kit} onKitChange={setKit} />
      <OrderForm selectedPackage={selectedPackage} />

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="mx-auto max-w-5xl px-6 py-10 text-center">
          <p className="font-[Amiri] text-xl text-foreground mb-2">
            হজ্জ মাবরূর — May your pilgrimage be accepted 🕋
          </p>
          <p className="text-sm text-muted-foreground">
            Sunnah for Ummah — Your trusted Hajj & Umrah essentials provider
          </p>
        </div>
      </footer>
    </div>
  );
}
