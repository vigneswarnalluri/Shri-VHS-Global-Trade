export interface Product {
  id: string;
  name: string;
  subtitle?: string;
  category: string;
  categoryId: string;
  tagline: string;
  description: string;
  features: string[];
  packaging: string[];
  image: string;
  isFeatured?: boolean;
}

export const productsData: Product[] = [
  {
    id: "basmati-rice",
    name: "Basmati Rice",
    subtitle: "1121 / Steam / Sella",
    category: "Rice & Grains",
    categoryId: "rice-grains",
    tagline: "Extra long grains. Extraordinary aroma. Excellence in every grain.",
    description: "Premium export quality Indian Basmati Rice available in 1121, Steam, and Sella processing. Known for its extra long slender grain, signature aroma, and non-sticky post-cooking texture.",
    features: ["Extra Long Grain", "Aromatic", "Non Sticky", "Sorted & Clean", "Premium Quality"],
    packaging: ["1kg", "5kg", "25kg", "50kg", "Jumbo Bags", "PP Bags"],
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=800",
    isFeatured: true
  },
  {
    id: "jsr-rice",
    name: "Jai Sri Ram (JSR) Rice",
    category: "Rice & Grains",
    categoryId: "rice-grains",
    tagline: "Traditional taste. Trusted for generations.",
    description: "Authentic Jai Sri Ram medium grain rice sourced from trusted traditional growers. Hygienically processed to preserve natural taste and nutrition.",
    features: ["Medium Grain", "Natural Aroma", "Great Taste", "Hygienically Packed", "Premium Quality"],
    packaging: ["1kg", "5kg", "25kg", "50kg", "Jumbo Bags", "PP Bags"],
    image: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?auto=format&fit=crop&q=80&w=800",
    isFeatured: false
  },
  {
    id: "sona-masoori",
    name: "Sona Masoori Rice",
    category: "Rice & Grains",
    categoryId: "rice-grains",
    tagline: "Perfectly aged. Naturally delicious. Loved worldwide.",
    description: "Lightweight, fragrant medium-grain rice aged to perfection. Extremely popular for daily consumption across international Indian dining markets.",
    features: ["Medium Grain", "Aromatic", "Non Sticky", "Aged to Perfection", "Premium Quality"],
    packaging: ["1kg", "5kg", "25kg", "50kg", "Jumbo Bags", "PP Bags"],
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=800",
    isFeatured: false
  },
  {
    id: "dry-red-chillies",
    name: "Dry Red Chillies",
    category: "Spices",
    categoryId: "spices",
    tagline: "Deep red. Bold heat. Pure & natural.",
    description: "Sun-dried whole red chillies with intense color and authentic spiciness. Free from artificial colors, chemical preservatives, or foreign additives.",
    features: ["Deep Red Colour", "Hot & Pungent", "No Added Colour", "Export Quality", "Sun-Dried"],
    packaging: ["100g", "200g", "500g", "1kg", "25kg"],
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800",
    isFeatured: true
  },
  {
    id: "turmeric-powder",
    name: "Turmeric Powder",
    category: "Spices",
    categoryId: "spices",
    tagline: "Golden purity. Rich in curcumin. Naturally vibrant.",
    description: "Vibrant yellow turmeric powder ground from select high-curcumin finger roots. Delivers distinct earthy aroma and rich golden coloring for culinary and health applications.",
    features: ["Deep Yellow Colour", "Aromatic", "No Added Colour", "High Curcumin", "Export Quality"],
    packaging: ["100g", "200g", "500g", "1kg", "25kg", "50kg"],
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800",
    isFeatured: true
  },
  {
    id: "mangoes",
    name: "Fresh Mangoes",
    category: "Fresh Fruits",
    categoryId: "fresh-fruits",
    tagline: "Naturally sweet. Farm fresh. Premium quality.",
    description: "Handpicked premium Indian mangoes, naturally ripened and sorted for international shipments. Carefully packed in ventilated export cartons to preserve freshness.",
    features: ["Naturally Ripened", "Sweet & Juicy", "Rich in Nutrients", "Carefully Packed", "Export Quality"],
    packaging: ["5kg", "10kg", "Carton Box"],
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=800",
    isFeatured: true
  },
  {
    id: "pineapples",
    name: "Pineapples",
    category: "Fresh Fruits",
    categoryId: "fresh-fruits",
    tagline: "Sweet & juicy. Handpicked with care.",
    description: "Selected fresh pineapples packed at optimal ripeness for long-distance transport. Rich in natural juices and natural vitamin C.",
    features: ["Hand Picked", "Rich in Taste", "Vitamin Rich", "Export Quality"],
    packaging: ["5kg", "10kg", "Carton Box"],
    image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&q=80&w=800",
    isFeatured: false
  },
  {
    id: "coconuts",
    name: "Coconuts",
    category: "Fresh Fruits",
    categoryId: "fresh-fruits",
    tagline: "Nature's goodness. Mature & aromatic. High water content.",
    description: "Naturally matured whole coconuts with thick kernel and high water volume. Sourced directly from tropical plantations and sorted for sound shell integrity.",
    features: ["Fresh & Natural", "High Water Content", "Export Quality", "Carefully Packed"],
    packaging: ["5kg", "10kg", "Carton Box"],
    image: "https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&q=80&w=800",
    isFeatured: true
  },
  {
    id: "bananas",
    name: "Bananas",
    category: "Fresh Fruits",
    categoryId: "fresh-fruits",
    tagline: "Naturally fresh. Rich in nutrients. Perfect for a healthy life.",
    description: "Uniform, nutrient-rich green and ripe bananas harvested from managed farms. Cold-chain compatible export packing ensures long freshness shelf life.",
    features: ["Farm Fresh", "Rich in Potassium", "Naturally Sweet", "Hygienically Packed"],
    packaging: ["5kg", "10kg", "Carton Box"],
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&q=80&w=800",
    isFeatured: false
  },
  {
    id: "fresh-onions",
    name: "Fresh Onions",
    category: "Fresh Vegetables",
    categoryId: "fresh-vegetables",
    tagline: "Farm fresh. Crisp & healthy. Natural goodness.",
    description: "Crisp red and pink Indian export onions with tight outer skin and long shelf life. Thoroughly dry-cleaned and mesh packed for optimal ventilation.",
    features: ["Fresh & Clean", "Great Shelf Life", "Carefully Handled", "Uniform Size"],
    packaging: ["1kg", "5kg", "10kg", "20kg", "25kg"],
    image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cf?auto=format&fit=crop&q=80&w=800",
    isFeatured: false
  },
  {
    id: "fresh-green-chillies",
    name: "Fresh Green Chillies",
    category: "Fresh Vegetables",
    categoryId: "fresh-vegetables",
    tagline: "Fresh & spicy. Handpicked for quality.",
    description: "Vibrant green fresh chillies harvested at peak crispness. Pungent and aromatic flavor profile free from chemical sprays.",
    features: ["Farm Fresh", "Bright Green", "Pungent & Spicy", "No Chemicals"],
    packaging: ["100g", "200g", "500g", "1kg", "25kg"],
    image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&q=80&w=800",
    isFeatured: false
  },
  {
    id: "drumsticks",
    name: "Drumsticks",
    category: "Fresh Vegetables",
    categoryId: "fresh-vegetables",
    tagline: "Naturally fresh. Rich in nutrients. Perfect for a healthy life.",
    description: "Tender, fresh Moringa drumsticks packed with natural vitamins and minerals. Carefully cut and bundle packed to maintain crisp green condition.",
    features: ["Farm Fresh", "Rich in Nutrients", "Boosts Immunity", "100% Natural"],
    packaging: ["5kg", "10kg", "Carton Box"],
    image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb19655?auto=format&fit=crop&q=80&w=800",
    isFeatured: false
  },
  {
    id: "groundnut-oil",
    name: "Groundnut Oil",
    category: "Edible Oils",
    categoryId: "edible-oils",
    tagline: "Rich in protein. Naturally nutritious. Finest quality.",
    description: "Cold-pressed pure groundnut oil extracted from select peanuts. Preserves natural nutty aroma, high smoke point, and high oleic nutrient density.",
    features: ["High Oleic Content", "Good for Health", "Clean & Sorted", "Export Quality"],
    packaging: ["1L", "5L", "15L", "20L Tin", "PET Bottles"],
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=800",
    isFeatured: true
  },
  {
    id: "sunflower-oil",
    name: "Sunflower Oil",
    category: "Edible Oils",
    categoryId: "edible-oils",
    tagline: "Pure. Light. Healthy choice for every kitchen.",
    description: "100% pure refined sunflower oil. Light texture, high in Vitamin E and Omega-6 essential fatty acids, completely cholesterol free.",
    features: ["100% Pure Refined", "Rich in Vitamin E", "Cholesterol Free", "Rich in Omega 6"],
    packaging: ["1L", "5L", "15L", "20L Tin", "PET Bottles"],
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=800",
    isFeatured: false
  },
  {
    id: "cotton",
    name: "Cotton",
    category: "Natural & Agricultural Products",
    categoryId: "natural-agricultural",
    tagline: "Soft by nature. Strong by quality. Trusted worldwide.",
    description: "High-grade natural raw Indian cotton processed for high staple length, fiber strength, and absorbency. Packed in standard compressed export bales.",
    features: ["100% Natural", "Soft & Pure", "High Absorbency", "Superior Quality"],
    packaging: ["1kg", "5kg", "10kg", "Bale Packing"],
    image: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?auto=format&fit=crop&q=80&w=800",
    isFeatured: false
  },
  {
    id: "banana-leaves",
    name: "Banana Leaves",
    category: "Natural & Agricultural Products",
    categoryId: "natural-agricultural",
    tagline: "Naturally fresh. Hygienically packed. Perfect for every use.",
    description: "Clean, fresh, durable green banana leaves harvested for food packaging and traditional dining. Eco-friendly biodegradable export packed.",
    features: ["Farm Fresh", "Naturally Hygienic", "Strong & Durable", "Eco Friendly"],
    packaging: ["5kg", "10kg", "Carton Box"],
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=800",
    isFeatured: false
  },
  {
    id: "pure-honey",
    name: "Pure Honey",
    category: "Natural & Agricultural Products",
    categoryId: "natural-agricultural",
    tagline: "Naturally pure. Rich in nutrients. Perfect for a healthy life.",
    description: "100% natural raw honey harvested from pristine floral regions. No added sugar, syrup, or artificial preservatives.",
    features: ["100% Natural", "Rich in Nutrients", "Boosts Immunity", "No Added Sugar"],
    packaging: ["250g", "500g", "1kg", "Bulk Packing"],
    image: "https://images.unsplash.com/photo-1587049352847-4a222e784d38?auto=format&fit=crop&q=80&w=800",
    isFeatured: false
  },
  {
    id: "coffee",
    name: "Coffee Seeds & Coffee Powder",
    category: "Natural & Agricultural Products",
    categoryId: "natural-agricultural",
    tagline: "Rich aroma. Strong & natural. Perfect for every brew.",
    description: "Select Indian coffee beans and freshly ground coffee powder. Deep roasted notes and rich natural aroma for international beverage markets.",
    features: ["Premium Quality Beans", "Rich in Aroma", "100% Natural", "Carefully Sorted"],
    packaging: ["250g", "500g", "1kg", "PP Bags"],
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=800",
    isFeatured: false
  }
];
