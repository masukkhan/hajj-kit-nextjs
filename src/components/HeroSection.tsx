import { useState, useEffect } from "react";
import { Star, CheckCircle2, ChevronDown } from "lucide-react";

const SLIDES = [
  { src: "/kaaba.jpg", label: "The Holy Kaaba — Mecca" },
  { src: "/masjid-nabawi.jpg", label: "Masjid an-Nabawi — Medina" },
  { src: "/mount-arafat.jpg", label: "Mount Arafat" },
  { src: "/mina-tents.jpg", label: "Mina — Tent City" },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden text-primary-foreground" style={{ minHeight: 520 }}>
      {SLIDES.map((slide, i) => (
        <img
          key={i}
          src={slide.src}
          alt={slide.label}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms]"
          style={{ opacity: i === currentSlide ? 1 : 0 }}
          {...(i === 0 ? {} : { loading: "lazy" as const })}
        />
      ))}
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90" />

      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center justify-center px-6 py-20 text-center md:py-28">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/20 px-5 py-2 text-sm font-medium backdrop-blur-md">
          <Star className="h-4 w-4 fill-accent text-accent" />
          <span>সম্পূর্ণ হজ্জ ও উমরাহ সামগ্রী</span>
        </div>

        {/* Main heading */}
        <h1 className="mb-5 font-[Amiri] text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
          <span className="block drop-shadow-lg">Hajj Mabroor</span>
          <span className="mt-2 block text-accent text-3xl md:text-4xl font-normal">হজ্জ মাবরূর</span>
        </h1>

        <p className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-primary-foreground/85">
          Everything you need for a blessed journey — carefully curated, quality-assured, 
          and packed in one convenient kit.
        </p>

        {/* Stats */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-8 text-sm">
          <div className="flex flex-col items-center gap-1">
            <span className="text-3xl font-bold text-accent">21+</span>
            <span className="text-primary-foreground/70">Essential Items</span>
          </div>
          <div className="h-10 w-px bg-primary-foreground/20" />
          <div className="flex flex-col items-center gap-1">
            <span className="text-3xl font-bold text-accent">6</span>
            <span className="text-primary-foreground/70">Package Options</span>
          </div>
          <div className="h-10 w-px bg-primary-foreground/20" />
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-1">
              <CheckCircle2 className="h-6 w-6 text-accent" />
            </div>
            <span className="text-primary-foreground/70">Quality Assured</span>
          </div>
        </div>

        {/* Slide dots */}
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs tracking-widest text-primary-foreground/60 uppercase">
            {SLIDES[currentSlide].label}
          </p>
          <div className="flex gap-2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  i === currentSlide ? "w-8 bg-accent" : "w-2 bg-primary-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-8 animate-bounce">
          <ChevronDown className="h-6 w-6 text-primary-foreground/50" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
