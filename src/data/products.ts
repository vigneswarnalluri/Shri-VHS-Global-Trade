export interface ProductSpec {
  variety?: string;
  grainType?: string;
  grade?: string;
  processing?: string;
  moisture?: string;
  purity?: string;
  broken?: string;
  origin?: string;
  packaging?: string;
  moq?: string;
  dispatchPorts?: string;
  shelfLife?: string;
}

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
  specs: ProductSpec;
}

export const productsData: Product[] = [
  {
    id: "basmati-rice",
    name: "Basmati Rice",
    subtitle: "1121 / Steam / Sella",
    category: "Rice & Grains",
    categoryId: "rice-grains",
    tagline: "Extra long grains. Distinct aroma. Non-sticky culinary finish.",
    description: "Premium export-grade Indian Basmati Rice available in 1121, Pusa, Steam, and Parboiled (Sella) processing. Characterized by extra-long slender grains (8.35mm+ average), high elongation ratio, and delicate natural fragrance.",
    features: ["1121 & Pusa Varietals", "Steam / Sella / Raw", "Sortex Cleaned 99.5%", "Moisture ≤ 12.5%", "Extra Long Slender Grain"],
    packaging: ["1kg", "5kg", "25kg", "50kg", "Jumbo Bulk Bags", "PP Woven Bags"],
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=800",
    isFeatured: true,
    specs: {
      variety: "1121 / Pusa / Traditional Basmati",
      grainType: "Extra Long Slender Grain (8.35mm+ avg)",
      grade: "Export Grade A",
      processing: "Steam / Sella (Parboiled) / Raw Milled",
      moisture: "≤ 12.5% Max",
      broken: "< 1.0% Max",
      purity: "99.5% Sortex Cleaned",
      origin: "Northern / Southern India",
      moq: "1 x 20' FCL (~24–26 MT)",
      dispatchPorts: "JNPT (Nhava Sheva) / Mundra",
      packaging: "1kg to 50kg PP / Non-Woven / Jute Sacks",
      shelfLife: "24 Months in dry storage"
    }
  },
  {
    id: "jsr-rice",
    name: "Jai Sri Ram (JSR) Rice",
    subtitle: "Traditional Medium Grain Rice",
    category: "Rice & Grains",
    categoryId: "rice-grains",
    tagline: "Traditional medium grain rice sourced from established grower collectives.",
    description: "Authentic Jai Sri Ram (JSR / BPT 5204) medium-grain rice cultivated in Telangana and Andhra Pradesh. Milled under strict hygienic conditions to ensure consistent texture, low broken percentage, and high table yield.",
    features: ["JSR / BPT 5204 Varietal", "Medium Slender Grain", "Machine Sortexed", "Moisture ≤ 13.0%", "Aged Harvest"],
    packaging: ["5kg", "10kg", "25kg", "50kg", "PP Woven Sacks"],
    image: "https://images.unsplash.com/photo-1594488518337-33e144d18ec3?auto=format&fit=crop&q=80&w=800",
    isFeatured: false,
    specs: {
      variety: "Jai Sri Ram (JSR / BPT 5204 Selection)",
      grainType: "Medium Slender Grain (5.0mm – 5.5mm)",
      grade: "Export Grade A",
      processing: "Raw Milled / Steam Processed",
      moisture: "≤ 13.0% Max",
      broken: "< 2.0% Max",
      purity: "99.0% Min",
      origin: "Telangana & Andhra Pradesh, India",
      moq: "1 x 20' FCL (~24–26 MT)",
      dispatchPorts: "Chennai / Visakhapatnam / Krishnapatnam",
      packaging: "25kg & 50kg PP Woven Bags",
      shelfLife: "24 Months"
    }
  },
  {
    id: "sona-masoori",
    name: "Sona Masoori Rice",
    subtitle: "Aged Lightweight Medium Grain",
    category: "Rice & Grains",
    categoryId: "rice-grains",
    tagline: "Aged medium-grain rice favored across international retail and catering.",
    description: "Lightweight, aromatic medium-grain rice aged 12+ months to achieve optimum cooking elongation and non-sticky separation. Widely exported to Middle Eastern, North American, and Southeast Asian retail channels.",
    features: ["BPT 5204 Cultivar", "Aged 12+ Months", "Double Polished Silky", "Moisture ≤ 13.0%", "Sortex Cleaned"],
    packaging: ["5kg", "10kg", "20kg", "25kg", "50kg", "PP Bags"],
    image: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?auto=format&fit=crop&q=80&w=800",
    isFeatured: false,
    specs: {
      variety: "Sona Masoori (HMT / BPT)",
      grainType: "Medium Slender Grain",
      grade: "Commercial Export Grade",
      processing: "Silky Double Polished / Raw Milled",
      moisture: "≤ 13.0% Max",
      broken: "< 1.5% Max",
      purity: "99.0% Min Sortexed",
      origin: "Telangana & Andhra Pradesh, India",
      moq: "1 x 20' FCL (~24–26 MT)",
      dispatchPorts: "Chennai / Visakhapatnam Port",
      packaging: "10kg, 20kg, 25kg, 50kg PP Bags",
      shelfLife: "24 Months"
    }
  },
  {
    id: "dry-red-chillies",
    name: "Dry Red Chillies",
    subtitle: "Guntur Teja / Sannam S4",
    category: "Spices",
    categoryId: "spices",
    tagline: "High-heat, high-color sun-dried whole red chillies.",
    description: "Export-grade sun-dried whole red chillies sourced directly from Guntur and Warangal spice belts. Available in Teja (S17), Sannam (S4), and Byadgi varietals with verified ASTA color values and tested capsaicin heat levels.",
    features: ["Guntur Teja / S4 / Byadgi", "SHU: 25,000–65,000", "Stemless / With Stem", "Moisture ≤ 10.5%", "Aflatoxin Tested"],
    packaging: ["5kg", "10kg", "25kg", "Jute Bags", "Poly Bags"],
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800",
    isFeatured: true,
    specs: {
      variety: "Guntur Teja (S17) / Sannam (S4) / Byadgi",
      grade: "Grade A Export (Stemless / With Stem)",
      processing: "Sun-Dried / Machine Cleaned",
      moisture: "≤ 10.5% Max",
      purity: "99.0% Min",
      origin: "Guntur & Warangal, India",
      moq: "1 x 40' HC Container (~14–15 MT Bulk)",
      dispatchPorts: "Chennai / Krishnapatnam / Vizag",
      packaging: "5kg, 10kg, 25kg Jute Sacks & Cartons",
      shelfLife: "12 Months"
    }
  },
  {
    id: "turmeric-powder",
    name: "Turmeric Powder & Fingers",
    subtitle: "High Curcumin Nizamabad / Salem",
    category: "Spices",
    categoryId: "spices",
    tagline: "High-curcumin finger roots and micro-pulverized turmeric powder.",
    description: "Vibrant golden-yellow turmeric sourced from Nizamabad and Salem farming clusters. Available as double-polished whole finger roots or 80–100 mesh fine powder with certified natural curcumin content (3.0% to 5.0%).",
    features: ["Salem & Nizamabad Sourcing", "Curcumin 3.0%–5.0%", "Mesh 80–100 Powder", "Moisture ≤ 9.0%", "No Added Colorants"],
    packaging: ["100g", "500g", "1kg", "25kg", "50kg", "HDPE Bags"],
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800",
    isFeatured: true,
    specs: {
      variety: "Nizamabad / Salem / Erode",
      grade: "Export Certified Grade A",
      processing: "Finger Polish / Pulverized Powder (Mesh 80-100)",
      moisture: "≤ 9.0% Max",
      purity: "Curcumin 3.0% to 5.0% (HPLC Verified)",
      origin: "Telangana & Tamil Nadu, India",
      moq: "1 x 20' FCL (~18–20 MT)",
      dispatchPorts: "Chennai / JNPT Mumbai",
      packaging: "25kg & 50kg Multiwall Paper / HDPE Bags",
      shelfLife: "24 Months"
    }
  },
  {
    id: "mangoes",
    name: "Fresh Mangoes",
    subtitle: "Alphonso / Kesar / Banganapalli",
    category: "Fresh Fruits",
    categoryId: "fresh-fruits",
    tagline: "Export-graded fresh Indian mangoes with phytosanitary compliance.",
    description: "Premium GI-tagged Indian mango varietals harvested at commercial maturity. Processed through registered packhouses with Hot Water Treatment (HWT) or Vapor Heat Treatment (VHT) for air freight and cold-chain sea shipments.",
    features: ["Alphonso / Kesar / Banganapalli", "Hot Water / VHT Treated", "Brix 16°–20°", "Global GAP Verified", "Ventilated Cartons"],
    packaging: ["3.5kg", "4.5kg", "5kg", "Export Corrugated Box"],
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=800",
    isFeatured: true,
    specs: {
      variety: "Alphonso / Kesar / Banganapalli / Totapuri",
      grade: "Class 1 Export Grade",
      processing: "Desapped, Washed, HWT / VHT Treated",
      moisture: "Brix 16° to 20° Natural Sugar",
      purity: "Uniform Weight Grading (250g–400g/fruit)",
      origin: "Andhra Pradesh, Telangana & Maharashtra",
      moq: "Air: 1,000 kg / Sea: 1 x 40' Reefer (~16 MT)",
      dispatchPorts: "Hyderabad RGIA (Air) / JNPT Mumbai (Sea)",
      packaging: "3.5kg – 5kg CFB Ventilated Cartons",
      shelfLife: "14–21 Days under +10°C to +13°C cold chain"
    }
  },
  {
    id: "pineapples",
    name: "Fresh Pineapples",
    subtitle: "Queen / Giant Kew",
    category: "Fresh Fruits",
    categoryId: "fresh-fruits",
    tagline: "Crown-trimmed, wax-coated fresh pineapples for long-distance transit.",
    description: "Export-sorted Queen and Giant Kew pineapples harvested at color break 1–2. Crown-trimmed and cold-chain preserved to deliver high natural sweetness, firm internal pulp, and extended shelf life.",
    features: ["Queen / Giant Kew", "Brix 12.0°–14.5°", "Crown Trimmed & Treated", "Reefer Cold Chain", "Count Graded"],
    packaging: ["10kg", "12kg", "Export Master Cartons"],
    image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&q=80&w=800",
    isFeatured: false,
    specs: {
      variety: "Queen / Giant Kew",
      grade: "Grade A Commercial Export",
      processing: "Washed, Fungicidal Dip, Crown Trimmed",
      moisture: "Brix 12.0° to 14.5% Min",
      purity: "Count 6, 7, 8, 9 per master box",
      origin: "Southern / Northeast India",
      moq: "1 x 40' Reefer Container (~16–18 MT)",
      dispatchPorts: "Chennai / Cochin Port",
      packaging: "10kg – 12kg Corrugated Export Boxes",
      shelfLife: "25–30 Days at +7°C to +10°C"
    }
  },
  {
    id: "coconuts",
    name: "Semi-Husked Coconuts",
    subtitle: "Mature Whole Pollachi / Godavari",
    category: "Fresh Fruits",
    categoryId: "fresh-fruits",
    tagline: "Semi-husked mature coconuts graded for shell thickness and high water content.",
    description: "Graded mature whole coconuts sourced from premier coconut belts in Andhra Pradesh and Tamil Nadu. Semi-husked with clean crown tuft, thick kernel meat, sound shell integrity, and high water content.",
    features: ["Semi-Husked Mature", "Weight: 550g–650g+", "High Water Content", "PP Mesh Bag Packed", "60+ Days Shelf Life"],
    packaging: ["13kg (25 nuts)", "28kg (50 nuts)", "PP Mesh Bags"],
    image: "https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&q=80&w=800",
    isFeatured: true,
    specs: {
      variety: "Pollachi / Godavari Mature Coconut",
      grade: "Export Grade A (550g to 650g+ per nut)",
      processing: "Semi-Husked, Crown Cleaned, Graded",
      moisture: "High Internal Liquid Content (250–350ml)",
      purity: "Shell Thickness 3.0mm – 4.5mm",
      origin: "Andhra Pradesh & Tamil Nadu, India",
      moq: "1 x 40' High Cube Container (~40,000–45,000 nuts)",
      dispatchPorts: "Chennai / Tuticorin / Visakhapatnam",
      packaging: "13kg – 14kg PP Mesh Bags (25 nuts/bag)",
      shelfLife: "60 to 75 Days in dry ventilated containers"
    }
  },
  {
    id: "bananas",
    name: "Fresh Bananas",
    subtitle: "Cavendish Grand Naine (G9)",
    category: "Fresh Fruits",
    categoryId: "fresh-fruits",
    tagline: "Pre-cooled Cavendish bananas packed in modified atmosphere cartons.",
    description: "Uniform Grand Naine (G9) Cavendish bananas harvested at pre-climacteric green stage. Calibrated for finger length (7.5–9.0 inches) and diameter (39–47mm), washed in food-grade alum bath, and vacuum packed.",
    features: ["Cavendish G9 Varietal", "Calibration: 39mm–47mm", "Length: 7.5–9.0 Inches", "Pre-Cooled CA Reefer", "Export Master Cartons"],
    packaging: ["7kg", "13kg", "Top-Bottom Ventilated Cartons"],
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&q=80&w=800",
    isFeatured: false,
    specs: {
      variety: "Grand Naine (G9 Cavendish)",
      grade: "Export Grade A (Calibration 39mm–47mm)",
      processing: "Alum Washed, Fungicidal Treated, Vacuum Packed",
      moisture: "Firm Pre-Ripened Green Pulp",
      purity: "Finger Length 7.5 to 9.0 Inches (18–22cm)",
      origin: "Andhra Pradesh & Maharashtra, India",
      moq: "1 x 40' Reefer Container (~1,540 Cartons / 20 MT)",
      dispatchPorts: "JNPT Mumbai / Chennai Port",
      packaging: "7kg & 13kg CFB Telescopic Cartons",
      shelfLife: "30–35 Days at +13.5°C Controlled Atmosphere"
    }
  },
  {
    id: "fresh-onions",
    name: "Fresh Red Onions",
    subtitle: "Nashik & Kurnool Red / Pink",
    category: "Fresh Vegetables",
    categoryId: "fresh-vegetables",
    tagline: "Dry-cured red and pink onions with firm papery outer skin.",
    description: "Indian export red and pink onions harvested from Nashik and Kurnool hubs. Graded by equatorial diameter (45mm to 60mm+), dry-cured for outer skin retention, and packed in leno mesh bags for ocean transit ventilation.",
    features: ["Nashik / Kurnool Red & Pink", "Size: 45mm–60mm+", "Dry-Cured Outer Skin", "Leno Mesh Ventilation", "Long Ocean Transit Life"],
    packaging: ["5kg", "10kg", "25kg", "50kg", "Leno Mesh Bags"],
    image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cf?auto=format&fit=crop&q=80&w=800",
    isFeatured: false,
    specs: {
      variety: "Medium Red / Dark Red / Pink Onion",
      grade: "Commercial Export Graded (45mm, 50mm, 55mm+)",
      processing: "Field Cured, Mechanically Sorted, Dry-Cleaned",
      moisture: "Firm bulbs with intact papery layers",
      purity: "Defect Tolerance < 1.0% Max",
      origin: "Maharashtra (Nashik) & Andhra Pradesh (Kurnool)",
      moq: "1 x 40' Ventilated/Reefer FCL (~28–29 MT)",
      dispatchPorts: "JNPT Mumbai / Chennai",
      packaging: "5kg to 50kg Leno Mesh Bags",
      shelfLife: "45–60 Days under well-ventilated storage"
    }
  },
  {
    id: "fresh-green-chillies",
    name: "Fresh Green Chillies",
    subtitle: "G4 & Bullet High Pungency",
    category: "Fresh Vegetables",
    categoryId: "fresh-vegetables",
    tagline: "Firm, vibrant green chillies with intact calyx and high pungency.",
    description: "Export-grade fresh green chillies (G4 and Bullet varietals) harvested at optimum pod maturity. Packed in breathable corrugated boxes or insulated thermocol cartons with ice pads for rapid air freight.",
    features: ["G4 & Bullet Varietals", "Length: 7cm–12cm", "Intact Fresh Calyx", "Pre-Cooled Cold Chain", "Thermocol / CFB Packing"],
    packaging: ["3.5kg", "4kg", "5kg", "Cartons & Thermocol"],
    image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&q=80&w=800",
    isFeatured: false,
    specs: {
      variety: "G4 / Bullet / Jwala",
      grade: "Export Class 1",
      processing: "Hand-Harvested, Pre-Cooled, Graded",
      moisture: "High Fresh Moisture with Crisp Texture",
      purity: "Length 7cm to 12cm Uniform Pods",
      origin: "Telangana & Andhra Pradesh, India",
      moq: "Air Freight: 500kg / Sea Reefer: 1 x 20' FCL",
      dispatchPorts: "Hyderabad RGIA (Air) / JNPT (Sea)",
      packaging: "3.5kg, 4kg, 5kg Corrugated / Thermocol Boxes",
      shelfLife: "10–14 Days at +8°C to +10°C"
    }
  },
  {
    id: "drumsticks",
    name: "Fresh Drumsticks (Moringa)",
    subtitle: "PKM-1 / PKM-2 Hybrid Pods",
    category: "Fresh Vegetables",
    categoryId: "fresh-vegetables",
    tagline: "Straight, tender Moringa pods harvested for international culinary markets.",
    description: "Cultivated PKM-1 and PKM-2 Moringa pods selected for tender seeds, rich inner pulp, and uniform straight length (45cm to 60cm). Bundled and packed in ventilated export cartons for air cargo delivery.",
    features: ["PKM-1 / PKM-2 Hybrid", "Length: 45cm–60cm", "Tender Green Pods", "Air Cargo Delivery", "Export Graded"],
    packaging: ["5kg", "10kg", "Export Corrugated Boxes"],
    image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb19655?auto=format&fit=crop&q=80&w=800",
    isFeatured: false,
    specs: {
      variety: "PKM-1 / PKM-2 Moringa Oleifera",
      grade: "Export Grade A",
      processing: "Size Trimmed, Bundled, Pre-Cooled",
      moisture: "Fresh Green Pod Integrity",
      purity: "Uniform Straight Length (45cm–60cm)",
      origin: "Telangana & Tamil Nadu, India",
      moq: "Air Cargo: 500kg / Sea Reefer available",
      dispatchPorts: "Hyderabad RGIA / Chennai International",
      packaging: "5kg & 10kg Corrugated Master Cartons",
      shelfLife: "7–10 Days under cold chain (+8°C to +10°C)"
    }
  },
  {
    id: "groundnut-oil",
    name: "Groundnut Oil",
    subtitle: "Cold-Pressed Mechanical Expeller",
    category: "Edible Oils",
    categoryId: "edible-oils",
    tagline: "Virgin cold-pressed peanut oil with high monounsaturated oleic profile.",
    description: "Mechanical expeller cold-pressed pure groundnut oil extracted from select Saurashtra and Telangana peanuts. Unrefined, filtered, and free from mineral oils, preserving natural smoke point (230°C) and authentic nutty profile.",
    features: ["Cold-Pressed Virgin", "Smoke Point: ~230°C", "Free Fatty Acid ≤ 1.5%", "No Chemical Solvents", "Bulk Flexitank & Bottled"],
    packaging: ["1L", "5L PET Bottles", "15L Tin", "Flexitank 21 MT"],
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=800",
    isFeatured: true,
    specs: {
      variety: "Pure Cold-Pressed Peanut Oil (Arachis hypogaea)",
      grade: "Export Grade Virgin Oil",
      processing: "Mechanical Cold Expeller Pressed & Micro-Filtered",
      moisture: "Moisture & Insoluble Impurities ≤ 0.10% Max",
      purity: "Free Fatty Acid (FFA) ≤ 1.5% as Oleic Acid",
      origin: "Telangana & Gujarat, India",
      moq: "1 x 20' FCL (21 MT Flexitank or 1,200 Cartons Bottled)",
      dispatchPorts: "JNPT Mumbai / Chennai / Vizag",
      packaging: "1L, 5L PET Bottles, 15L Tins, 21 MT Flexitanks",
      shelfLife: "18 Months in food-grade sealed containers"
    }
  },
  {
    id: "sunflower-oil",
    name: "Refined Sunflower Oil",
    subtitle: "RBD & Winterized Grade A",
    category: "Edible Oils",
    categoryId: "edible-oils",
    tagline: "Refined, bleached, deodorized, and winterized pure sunflower oil.",
    description: "100% pure refined sunflower oil processed to international food standards. Winterized for crystal clarity at low temperatures, high in natural Vitamin E and Omega-6 polyunsaturated fatty acids, with zero trans fats.",
    features: ["RBD & Winterized", "FFA ≤ 0.10%", "Trans Fat 0%", "High Vitamin E", "Flexitank & Retail Pack"],
    packaging: ["1L", "5L PET Bottles", "15L Tin", "Flexitank 21 MT"],
    image: "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?auto=format&fit=crop&q=80&w=800",
    isFeatured: false,
    specs: {
      variety: "Refined Sunflower Seed Oil (Helianthus annuus)",
      grade: "Grade A Refined Cooking Oil",
      processing: "Refined, Bleached, Deodorized, Winterized (RBDW)",
      moisture: "Moisture ≤ 0.05% Max",
      purity: "Free Fatty Acid (FFA) ≤ 0.10% Max",
      origin: "India",
      moq: "1 x 20' FCL (~21 MT Flexitank or Retail FCL)",
      dispatchPorts: "JNPT Mumbai / Chennai",
      packaging: "1L & 5L PET Bottles, 15L Tins, Flexitanks",
      shelfLife: "24 Months"
    }
  },
  {
    id: "cotton",
    name: "Raw Cotton (Lint)",
    subtitle: "Shankar-6 & MCU-5 Export Bales",
    category: "Natural & Agricultural Products",
    categoryId: "natural-agricultural",
    tagline: "High-staple Indian raw cotton compressed into standard export bales.",
    description: "Export-grade raw ginned cotton lint sourced from Telangana, Gujarat, and Maharashtra ginning centers. Characterized by 28.5mm to 31.0mm staple length, high fiber strength (29.0+ GPT), and low trash content.",
    features: ["Shankar-6 & MCU-5", "Staple: 28.5mm–31.0mm", "Micronaire: 3.8–4.2 NCL", "Strength: 29.0–31.5 GPT", "Standard 170kg Bales"],
    packaging: ["Standard 170kg Compressed Export Bales"],
    image: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?auto=format&fit=crop&q=80&w=800",
    isFeatured: false,
    specs: {
      variety: "Shankar-6 (S-6) / MCU-5 / Bunny",
      grade: "Export Grade Medium-Long Staple",
      processing: "Mechanically Saw Ginned & Pre-Cleaned",
      moisture: "≤ 8.5% Max Moisture Content",
      purity: "Trash Content ≤ 2.5% to 3.0% Max",
      origin: "Telangana, Gujarat & Maharashtra, India",
      moq: "1 x 40' HC Container (~90 Bales / 15.5 MT)",
      dispatchPorts: "JNPT Mumbai / Mundra / Pipavav",
      packaging: "Standard 170kg (+/- 5%) Compressed Export Bales",
      shelfLife: "Indefinite under dry warehouse storage"
    }
  },
  {
    id: "banana-leaves",
    name: "Fresh Banana Leaves",
    subtitle: "Full-Cut Sanitized Sheets",
    category: "Natural & Agricultural Products",
    categoryId: "natural-agricultural",
    tagline: "Clean, fresh, durable green banana fronds for food packaging and dining.",
    description: "Sanitarily cleaned and trimmed natural banana leaves (Musa Cavendish) harvested for commercial dining and traditional food wrap packaging. Shipped in moisture-barrier cartons under controlled cold storage.",
    features: ["100% Natural Musa Leaves", "Full Cut (35–45cm × 60–90cm)", "Hygienically Cleaned", "Moisture Barrier Pack", "Air Cargo Delivery"],
    packaging: ["5kg", "10kg", "Export Corrugated Cartons"],
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=800",
    isFeatured: false,
    specs: {
      variety: "Musa Cavendish Green Fronds",
      grade: "Export Sanitized Food Grade",
      processing: "Dry Cleaned, Edge Trimmed, Moisture Wrapped",
      moisture: "Fresh Cellular Hydration Maintained",
      purity: "Zero Pesticide Residue / 100% Biodegradable",
      origin: "Andhra Pradesh & Tamil Nadu, India",
      moq: "Air Cargo: 300kg – 500kg minimum",
      dispatchPorts: "Hyderabad RGIA / Chennai International",
      packaging: "5kg & 10kg CFB Boxes with Poly Moisture Liner",
      shelfLife: "7–10 Days at +4°C to +8°C"
    }
  },
  {
    id: "pure-honey",
    name: "Pure Natural Honey",
    subtitle: "Raw Multi-Flora & Mustard",
    category: "Natural & Agricultural Products",
    categoryId: "natural-agricultural",
    tagline: "Raw, unadulterated multi-flora and mustard honey tested for export purity.",
    description: "100% raw, antibiotic-free natural honey harvested from registered apiaries. Tested for C3/C4 sugar adulteration via NMR spectroscopy, with moisture ≤ 18.0% and high natural diastase activity.",
    features: ["Raw Multi-Flora & Mustard", "Moisture ≤ 18.0%", "NMR Tested Zero Sugar Syrup", "Antibiotic Free", "Bulk Drums & Retail Jars"],
    packaging: ["250g", "500g", "1kg Jars", "300kg Food Grade Drums"],
    image: "https://images.unsplash.com/photo-1587049352847-4a222e784d38?auto=format&fit=crop&q=80&w=800",
    isFeatured: false,
    specs: {
      variety: "Multi-Flora / Mustard / Forest Floral",
      grade: "Export Grade Pure Honey",
      processing: "Cold Settled & Micro-Filtered (Unpasteurized option)",
      moisture: "≤ 18.0% Max Moisture",
      purity: "Nil C3/C4 Synthetic Sugars (NMR & LC-IRMS Compliant)",
      origin: "Himachal Pradesh & Central India",
      moq: "1 x 20' FCL (~19–20 MT in Bulk Drums)",
      dispatchPorts: "JNPT Mumbai / Mundra",
      packaging: "250g–1kg Jars & 300kg Epoxy-Lined Steel Drums",
      shelfLife: "24 Months"
    }
  },
  {
    id: "coffee",
    name: "Coffee Beans & Powder",
    subtitle: "Arabica Plantation A & Robusta Cherry",
    category: "Natural & Agricultural Products",
    categoryId: "natural-agricultural",
    tagline: "Specialty green coffee beans and freshly roasted ground coffee.",
    description: "Single-origin shade-grown Indian coffee beans from Chikkamagaluru and Araku Valley. Graded by screen size (Screen 17–19 for Plantation A), defect-sorted, and packed in GrainPro hermetic bags to preserve volatile aromatic compounds.",
    features: ["Arabica Plantation A & Robusta", "Screen Size: 17–19", "Moisture ≤ 12.0%", "Defect Sorted", "Jute + GrainPro Liners"],
    packaging: ["250g", "500g", "1kg Pouches", "60kg Jute Bags"],
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=800",
    isFeatured: false,
    specs: {
      variety: "Arabica Plantation A / Robusta Cherry AB",
      grade: "Specialty Export Grade (Screen 17–19)",
      processing: "Washed (Wet Milled) / Sun-Dried Natural",
      moisture: "≤ 12.0% Max",
      purity: "Defects < 5 PB per 300g Sample",
      origin: "Chikkamagaluru & Araku Valley, India",
      moq: "1 x 20' FCL (~18–19 MT in 60kg Bags)",
      dispatchPorts: "Chennai / Cochin Port",
      packaging: "60kg Jute Bags with Hermetic GrainPro Liners",
      shelfLife: "18 Months (Green Beans) / 12 Months (Roasted)"
    }
  }
];
