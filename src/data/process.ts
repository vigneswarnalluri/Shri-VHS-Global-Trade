export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Source",
    subtitle: "Direct Farm Procurement",
    description: "Procuring directly from trusted farming communities and verified local growers across India's prime agricultural regions."
  },
  {
    step: "02",
    title: "Select",
    subtitle: "Quality & Origin Audit",
    description: "Inspecting crop maturity, purity, size, moisture content, and aroma to meet strict export benchmarks."
  },
  {
    step: "03",
    title: "Sort & Grade",
    subtitle: "Precision Sorting",
    description: "Removing impurities using optical sorters and manual grading to deliver uniform, defect-free batches."
  },
  {
    step: "04",
    title: "Pack",
    subtitle: "Hygienic & Bulk Packaging",
    description: "Packaging in moisture-resistant PP bags, cartons, PET bottles, or jumbo bags tailored for international transport."
  },
  {
    step: "05",
    title: "Documentation",
    subtitle: "Export Compliance",
    description: "Completing phytosanitary certifications, certificate of origin, customs paperwork, and shipping documentation."
  },
  {
    step: "06",
    title: "Ship",
    subtitle: "Port Freight Logistics",
    description: "Coordinating sea and air freight through reliable global shipping lines with temperature and humidity controls."
  },
  {
    step: "07",
    title: "Deliver",
    subtitle: "On-Time Global Arrival",
    description: "Ensuring safe, seamless delivery to destination ports and warehouses worldwide with complete order tracking."
  }
];
