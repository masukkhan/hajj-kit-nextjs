export type KitItem = {
  name: string;
  nameBn: string;
  price: number;
  category: "clothing" | "hygiene" | "accessories" | "spiritual" | "comfort";
};

export const MALE_ITEMS: KitItem[] = [
  { name: "Premium Towel Ihram (1 Set)", nameBn: "প্রিমিয়াম টাওয়েল ইহরাম", price: 1200, category: "clothing" },
  { name: "Hajj Bedding", nameBn: "হজ বেডিং", price: 450, category: "comfort" },
  { name: "Hajji Umbrella", nameBn: "হাজী ছাতা", price: 400, category: "accessories" },
  { name: "Air Pillow", nameBn: "হওয়ায় বালিশ", price: 350, category: "comfort" },
  { name: "Hajji Moisturizing Cream", nameBn: "হাজী ময়েশ্চারাইজিং", price: 310, category: "hygiene" },
  { name: "Waist Foam Belt", nameBn: "কোমরের ফোম বেল্ট", price: 290, category: "accessories" },
  { name: "Premium Sun Cap", nameBn: "প্রিমিয়াম সান ক্যাপ", price: 290, category: "clothing" },
  { name: "Unscented Hajji Shampoo", nameBn: "গন্ধবিহীন হাজী শ্যাম্পু", price: 280, category: "hygiene" },
  { name: "Waterproof Pocket Prayer Mat", nameBn: "ওয়াটারপ্রুফ পকেট জায়নামাজ", price: 270, category: "spiritual" },
  { name: "Hajji Soap (Unscented)", nameBn: "হাজী সাবান", price: 240, category: "hygiene" },
  { name: "Premium Back Bag", nameBn: "প্রিমিয়াম পিঠের ব্যাগ", price: 210, category: "accessories" },
  { name: "Rope", nameBn: "রশি", price: 180, category: "accessories" },
  { name: "Premium Chest Bag", nameBn: "প্রিমিয়াম বুকের ব্যাগ", price: 130, category: "accessories" },
  { name: "Miswak", nameBn: "মিসওয়াক", price: 70, category: "hygiene" },
  { name: "Foot Socks", nameBn: "পা মোজা", price: 70, category: "clothing" },
  { name: "Waterproof Shoe Bag", nameBn: "ওয়াটারপ্রুফ জুতার ব্যাগ", price: 60, category: "accessories" },
  { name: "Umrah Guidebook", nameBn: "উমরা গাইডবুক", price: 50, category: "spiritual" },
  { name: "Tawaf Tasbih", nameBn: "তাওয়াফ তাসবিহ", price: 40, category: "spiritual" },
  { name: "Tayammum Soil", nameBn: "তায়াম্মুমের মাটি", price: 40, category: "spiritual" },
  { name: "Stone Keeping Bag", nameBn: "পাথর রাখার ব্যাগ", price: 40, category: "accessories" },
  { name: "Head Shaving Razor", nameBn: "মাথা মুন্ডানোর রেজার", price: 35, category: "hygiene" },
  { name: "Dhikr Book", nameBn: "জিকিরের বই", price: 35, category: "spiritual" },
  { name: "Luggage Sticker", nameBn: "লাগেজ স্টিকার", price: 20, category: "accessories" },
];

export const FEMALE_ITEMS: KitItem[] = [
  { name: "Premium Towel Ihram (1 Set)", nameBn: "প্রিমিয়াম টাওয়েল ইহরাম", price: 1200, category: "clothing" },
  { name: "Umrah Khimar", nameBn: "উমরা খিমার", price: 1050, category: "clothing" },
  { name: "Hajj Bedding", nameBn: "হজ বেডিং", price: 450, category: "comfort" },
  { name: "Hajji Umbrella", nameBn: "হাজী ছাতা", price: 400, category: "accessories" },
  { name: "Air Pillow", nameBn: "হওয়ায় বালিশ", price: 350, category: "comfort" },
  { name: "Hajji Moisturizing Cream", nameBn: "হাজী ময়েশ্চারাইজিং", price: 310, category: "hygiene" },
  { name: "Waist Foam Belt", nameBn: "কোমরের ফোম বেল্ট", price: 290, category: "accessories" },
  { name: "Premium Sun Cap", nameBn: "প্রিমিয়াম সান ক্যাপ", price: 290, category: "clothing" },
  { name: "Unscented Hajji Shampoo", nameBn: "গন্ধবিহীন হাজী শ্যাম্পু", price: 280, category: "hygiene" },
  { name: "Waterproof Pocket Prayer Mat", nameBn: "ওয়াটারপ্রুফ পকেট জায়নামাজ", price: 270, category: "spiritual" },
  { name: "Hajji Soap (Unscented)", nameBn: "হাজী সাবান", price: 240, category: "hygiene" },
  { name: "Premium Back Bag", nameBn: "প্রিমিয়াম পিঠের ব্যাগ", price: 210, category: "accessories" },
  { name: "Rope", nameBn: "রশি", price: 180, category: "accessories" },
  { name: "Premium Chest Bag", nameBn: "প্রিমিয়াম বুকের ব্যাগ", price: 130, category: "accessories" },
  { name: "Hand Gloves", nameBn: "হাত মোজা", price: 70, category: "clothing" },
  { name: "Miswak", nameBn: "মিসওয়াক", price: 70, category: "hygiene" },
  { name: "Foot Socks", nameBn: "পা মোজা", price: 70, category: "clothing" },
  { name: "Waterproof Shoe Bag", nameBn: "ওয়াটারপ্রুফ জুতার ব্যাগ", price: 60, category: "accessories" },
  { name: "Umrah Guidebook", nameBn: "উমরা গাইডবুক", price: 50, category: "spiritual" },
  { name: "Tawaf Tasbih", nameBn: "তাওয়াফ তাসবিহ", price: 40, category: "spiritual" },
  { name: "Tayammum Soil", nameBn: "তায়াম্মুমের মাটি", price: 40, category: "spiritual" },
  { name: "Stone Keeping Bag", nameBn: "পাথর রাখার ব্যাগ", price: 40, category: "accessories" },
  { name: "Dhikr Book", nameBn: "জিকিরের বই", price: 35, category: "spiritual" },
  { name: "Luggage Sticker", nameBn: "লাগেজ স্টিকার", price: 20, category: "accessories" },
];

export const CATEGORY_LABELS: Record<KitItem["category"], { label: string; icon: string }> = {
  clothing: { label: "Clothing & Wear", icon: "👔" },
  hygiene: { label: "Hygiene & Care", icon: "🧴" },
  accessories: { label: "Bags & Accessories", icon: "🎒" },
  spiritual: { label: "Spiritual Essentials", icon: "📿" },
  comfort: { label: "Comfort & Bedding", icon: "🛏️" },
};

export const PACKAGES = [
  {
    id: "hajj-combo",
    name: "Hajj Package (Men & Women)",
    nameBn: "হজ্জ প্যাকেজ (পুরুষ ও মহিলা)",
    originalPrice: 9800,
    price: 9400,
    badge: "Best Value",
  },
  {
    id: "hajj-male",
    name: "Hajj Package (Men)",
    nameBn: "হজ্জ প্যাকেজ (পুরুষ)",
    price: 4900,
  },
  {
    id: "hajj-female",
    name: "Hajj Package (Women)",
    nameBn: "হজ্জ প্যাকেজ (মহিলা)",
    price: 4900,
  },
  {
    id: "umrah-combo",
    name: "Umrah Package (Men & Women)",
    nameBn: "উমরা প্যাকেজ (পুরুষ ও মহিলা)",
    originalPrice: 4900,
    price: 4700,
    badge: "Popular",
  },
  {
    id: "umrah-male",
    name: "Umrah Package (Men)",
    nameBn: "উমরা প্যাকেজ (পুরুষ)",
    price: 2500,
  },
  {
    id: "umrah-female",
    name: "Umrah Package (Women)",
    nameBn: "উমরা প্যাকেজ (মহিলা)",
    price: 2400,
  },
];
