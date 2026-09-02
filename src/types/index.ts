export interface ProductSpecification {
  airflowRange?: string; // e.g. "500 - 150,000 CFM"
  staticPressure?: string; // e.g. "Up to 3,500 Pa"
  impellerDiameter?: string; // e.g. "250mm - 2,400mm"
  driveType?: string; // e.g. "Direct Drive / V-Belt"
  motorRating?: string; // e.g. "0.37 kW to 250 kW, IE3/IE4"
  operatingTemp?: string; // e.g. "-20°C to +400°C (Fire Rated)"
  coolingCapacity?: string; // e.g. "1.0 TR to 120 TR"
  filtration?: string; // e.g. "EU4 Pre-filter + EU7 Microvee + HEPA (H13/H14)"
  casingConstruction?: string; // e.g. "25mm/50mm Double Skin PUF Injected (40 kg/m³)"
  coilSpecs?: string; // e.g. "Copper Tubes with Corrugated Hydrophilic Aluminum Fins"
  noiseLevel?: string; // e.g. "32 dBA - 58 dBA @ 1.5m"
  standards?: string[]; // e.g. ["AMCA 210", "ISO 5801", "EN 12101-3", "AHRI 410", "EN 1886"]
}

export interface Product {
  id: string;
  slug: string;
  aliases?: string[];
  name: string;
  category: string;
  subCategory?: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  heroBadge: string;
  image: string;
  cfdImage?: string;
  gallery?: string[];
  schematicSvgType: "centrifugal" | "axial" | "jet" | "inline" | "hvls" | "smoke" | "duct" | "scrubber" | "ahu" | "airwasher" | "fansection" | "cabinetexhaust" | "fcu";
  specs: ProductSpecification;
  keyFeatures: string[];
  applications: string[];
  aerodynamicHighlights: {
    title: string;
    description: string;
  }[];
  customOptions?: {
    title: string;
    description: string;
    badge?: string;
  }[];
}

export interface Industry {
  id: string;
  name: string;
  code: string;
  tagline: string;
  description: string;
  keyChallenges: string[];
  solutionsProvided: string[];
  recommendedProducts: string[];
  stats: { label: string; value: string };
  image: string;
  accentColor: string;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  category: "Metro & Rail" | "Automotive & Heavy Mfg" | "Commercial & IT Parks" | "Data Centers" | "Pharma & Cleanroom" | "Aviation & Logistics";
  location: string;
  scope: string;
  airflowCapacity: string;
  solutionsInstalled: string[];
  resultsAchieved: string[];
  image: string;
}

export interface QualityStep {
  step: string;
  title: string;
  code: string;
  description: string;
  methodology: string;
  complianceStandard: string;
  iconName: string;
}

export interface MetricHighlight {
  label: string;
  value: string;
  numericValue: number;
  suffix: string;
  description: string;
}

export interface ContactFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  projectType: string;
  estimatedAirflow?: string;
  productOfInterest?: string;
  location: string;
  message: string;
}
