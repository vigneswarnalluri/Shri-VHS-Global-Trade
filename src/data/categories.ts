export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  itemCount: number;
  featuredProducts: string[];
  image: string;
}

export const categoriesData: Category[] = [
  {
    id: "rice-grains",
    name: "Rice & Grains",
    slug: "rice-grains",
    description: "Extra long grain Basmati, premium Sona Masoori, and traditional Jai Sri Ram rice varieties.",
    itemCount: 3,
    featuredProducts: ["basmati-rice", "jsr-rice", "sona-masoori"],
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "spices",
    name: "Spices",
    slug: "spices",
    description: "Sun-dried red chillies and high-curcumin golden turmeric powder sourced from top growing regions.",
    itemCount: 2,
    featuredProducts: ["dry-red-chillies", "turmeric-powder"],
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "fresh-fruits",
    name: "Fresh Fruits",
    slug: "fresh-fruits",
    description: "Naturally ripened Mangoes, sweet Pineapples, high-water Coconuts, and potassium-rich Bananas.",
    itemCount: 4,
    featuredProducts: ["mangoes", "pineapples", "coconuts", "bananas"],
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "fresh-vegetables",
    name: "Fresh Vegetables",
    slug: "fresh-vegetables",
    description: "Farm-fresh Onions, bright Green Chillies, and nutrient-dense Drumsticks handled with export care.",
    itemCount: 3,
    featuredProducts: ["fresh-onions", "fresh-green-chillies", "drumsticks"],
    image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cf?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "edible-oils",
    name: "Edible Oils",
    slug: "edible-oils",
    description: "100% pure high-oleic Groundnut Oil and cholesterol-free refined Sunflower Oil.",
    itemCount: 2,
    featuredProducts: ["groundnut-oil", "sunflower-oil"],
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "natural-agricultural",
    name: "Natural & Agricultural Products",
    slug: "natural-agricultural",
    description: "High-absorbency raw Cotton, pure natural Honey, fresh Coffee Seeds/Powder, and eco Banana Leaves.",
    itemCount: 4,
    featuredProducts: ["cotton", "pure-honey", "coffee", "banana-leaves"],
    image: "https://images.unsplash.com/photo-1587049352847-4a222e784d38?auto=format&fit=crop&q=80&w=800"
  }
];
