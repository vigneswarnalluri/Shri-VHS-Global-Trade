export interface CompanyDetails {
  name: string;
  tagline: string;
  subline: string;
  description: string;
  vision: string;
  contact: {
    phone: string;
    email: string;
    website: string;
    address: string;
  };
  socials: {
    twitter?: string;
    instagram?: string;
  };
  trustPillars: {
    title: string;
    description: string;
  }[];
  whyChooseUs: {
    title: string;
    description: string;
  }[];
}

export const companyData: CompanyDetails = {
  name: "Shri VHS Global Trade Private Limited",
  tagline: "Connecting Indian Agriculture to Global Markets",
  subline: "Delivering India's finest agricultural products to global markets with quality, reliability, and trust.",
  description: "Shri VHS Global Trade Private Limited is a trusted Indian merchant exporter committed to delivering premium-quality agricultural products to global markets. We source directly from reliable farming communities and certified suppliers, ensuring every product meets the highest standards of quality, freshness, and international compliance.",
  vision: "To become a globally recognised export company by promoting India's finest agricultural products through innovation, reliability, sustainable sourcing, and long-term business relationships.",
  contact: {
    phone: "+91 70958 51852",
    email: "info@shrivhsglobaltrade.com",
    website: "shrivhsglobaltrade.com",
    address: "Hyderabad, India",
  },
  socials: {
    twitter: "https://x.com/VHSGlobalTrade",
    instagram: "https://www.instagram.com",
  },
  trustPillars: [
    {
      title: "Quality Assured",
      description: "Stringent multi-stage inspection and sorting ensure export-grade quality standards."
    },
    {
      title: "Ethical Sourcing",
      description: "Direct partnerships with verified farming communities ensuring fair trade and transparent supply chains."
    },
    {
      title: "Sustainable Farming",
      description: "Promoting eco-friendly farming practices and natural agricultural cultivation across India."
    },
    {
      title: "Global Delivery",
      description: "Seamless international logistics with export documentation, secure packing, and on-time dispatch."
    }
  ],
  whyChooseUs: [
    {
      title: "Premium Quality Agricultural Products",
      description: "Handpicked and stringently tested commodities delivering authentic taste, color, and nutritional value."
    },
    {
      title: "Direct Sourcing from Trusted Farmers",
      description: "Eliminating unnecessary intermediaries to provide pure, farm-fresh produce directly from origin."
    },
    {
      title: "International Quality Standards",
      description: "Strict adherence to international compliance, phytosanitary requirements, and food safety protocols."
    },
    {
      title: "Reliable Global Supply Chain",
      description: "Established freight forwarding and port handling ensuring uninterrupted shipment schedules."
    },
    {
      title: "Competitive Export Pricing",
      description: "Optimized direct sourcing allows highly competitive wholesale B2B pricing for global buyers."
    },
    {
      title: "Secure Packaging & Timely Delivery",
      description: "Hygienic, moisture-resistant, and bulk export packaging engineered for long ocean voyages."
    },
    {
      title: "Customer-Centric Service",
      description: "Dedicated account support providing real-time shipment updates and customized order specifications."
    },
    {
      title: "Long-Term Business Partnerships",
      description: "Building enduring commercial relationships based on transparency, consistency, and mutual trust."
    }
  ]
};
