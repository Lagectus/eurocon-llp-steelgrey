import { Product, Industry, ProjectCaseStudy, QualityStep, MetricHighlight } from "@/types";

export const COMPANY_INFO = {
  name: "EUROCON SYSTEM LLP",
  shortName: "EUROCON",
  tagline: "Engineered Airflow. Built For Performance.",
  subTagline: "Advanced air management, industrial ventilation, and HVAC engineering solutions engineered for peak aerodynamic efficiency, uncompromising safety, and lifecycle reliability.",
  establishedPlaceholder: "20+ Years of Engineering Heritage",
  cin: "LLP Identification: AAH-8942-IND",
  panIndiaPresence: "Presence across 14+ Regional Hubs & Industrial Corridors",
  headquarters: {
    address: "Eurocon Industrial Hub, Sector 58, Phase II, Industrial Area",
    city: "National Capital Region / Gurugram - 122001, India",
    phone: "+91 (0124) 498-7200 / +91 98110 54321",
    email: "solutions@euroconsystem.com",
    salesEmail: "sales@euroconsystem.com",
    supportEmail: "engineering@euroconsystem.com",
    workingHours: "Mon – Sat: 08:30 AM – 06:30 PM IST"
  },
  certifications: [
    "AMCA Standard 210 & 300 Aerodynamic & Acoustic Testing",
    "EN 12101-3 Fire Smoke Certification (F300 / F400 Rating)",
    "ISO 9001:2015 Quality Management System",
    "ISO 14001:2015 Environmental Management Standard",
    "SMACNA HVAC Duct Construction Standards"
  ]
};

export const METRIC_HIGHLIGHTS: MetricHighlight[] = [
  {
    label: "Airflow Engineered",
    value: "25M+",
    numericValue: 25,
    suffix: "M+ CFM",
    description: "Continuous airflow managed across critical installations"
  },
  {
    label: "Projects Delivered",
    value: "650+",
    numericValue: 650,
    suffix: "+",
    description: "Industrial, commercial & infrastructure installations"
  },
  {
    label: "Engineered Product Lines",
    value: "45+",
    numericValue: 45,
    suffix: " Series",
    description: "Customized aerodynamic & ventilation solutions"
  },
  {
    label: "Pan-India Support",
    value: "100%",
    numericValue: 100,
    suffix: "% Support",
    description: "Rapid technical assistance & commissioning network"
  }
];

export const PRODUCTS_DATA: Product[] = [
  {
    id: "prod-centrifugal-fans",
    slug: "centrifugal-fans",
    name: "Industrial Centrifugal Fans",
    category: "Air Management Systems",
    subCategory: "High Static Pressure Series",
    tagline: "Backward curved, aerofoil & radial blade configurations for severe-duty industrial processes.",
    shortDescription: "High-efficiency centrifugal fans engineered with aerodynamically contoured backward curved or aerofoil impellers, delivering high static pressure and low acoustic signatures.",
    fullDescription: "EUROCON Centrifugal Air Movement Systems are precision-engineered for heavy industrial exhaust, HVAC air handling, boiler draft, cleanroom pressurization, and corrosive fume evacuation. Constructed from heavy-gauge mild steel, stainless steel (SS304/SS316), or spark-resistant aluminum.",
    heroBadge: "AMCA 210 Certified Impeller Profiles",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    schematicSvgType: "centrifugal",
    specs: {
      airflowRange: "1,000 to 180,000 CFM (1,700 to 305,000 m³/h)",
      staticPressure: "Up to 4,500 Pa (18 in. wg)",
      impellerDiameter: "315 mm to 2,200 mm",
      driveType: "Direct Drive / V-Belt Drive / Coupling Drive",
      motorRating: "0.75 kW to 315 kW (IE3/IE4 Premium Efficiency)",
      operatingTemp: "-25°C to +400°C (Insulated / Gas Tight casing available)",
      standards: ["AMCA 210", "ISO 5801:2017", "ISO 1940 Grade G2.5 Dynamic Balancing"]
    },
    keyFeatures: [
      "Aerofoil & Backward Curved Impeller blades with up to 88% total mechanical efficiency",
      "Dynamically balanced to ISO 1940 Grade G2.5 on precision digital dual-plane balancing rigs",
      "Heavy-duty continuously welded housing with aerodynamic scroll inlet cone",
      "Optional spark-proof construction (AMCA Type A, B, C) and anti-corrosive epoxy/FRP lining",
      "Heavy-duty split spherical roller bearings with external re-greasable lube lines"
    ],
    applications: [
      "Industrial Plant Ventilation & Process Exhaust",
      "Central HVAC Air Handling Units (AHUs)",
      "High-Pressure Fume & Dust Collection Systems",
      "Automotive Paint Shops & Clean Air Booths",
      "Power Plants & Chemical Processing Facilities"
    ],
    aerodynamicHighlights: [
      {
        title: "Aerofoil Contour Efficiency",
        description: "Reduces boundary layer separation and turbulence at high discharge velocities, saving up to 18% in power consumption."
      },
      {
        title: "Vibration Isolating Base",
        description: "Monolithic structural channel base with spring/elastomeric anti-vibration mounts for whisper-quiet plant room integration."
      }
    ]
  },
  {
    id: "prod-axial-fans",
    slug: "axial-fans",
    name: "High-Volume Axial Flow Fans",
    category: "Air Management Systems",
    subCategory: "Vane & Tube Axial Series",
    tagline: "Adjustable pitch aerofoil blades for high-volume ventilation and tunnel air displacement.",
    shortDescription: "Direct and belt-driven axial flow fans featuring cast aluminum aerofoil blades with on-site pitch adjustability for exact airflow modulation and energy optimization.",
    fullDescription: "EUROCON Axial Flow Series delivers massive air displacement across long duct runs, basement ventilation shafts, factory floors, and marine/offshore installations. Available in standard casing, long casing, bifurcated motor-isolated design for hostile environments, and guide-vane high pressure series.",
    heroBadge: "Die-Cast Aerofoil Blades",
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80",
    schematicSvgType: "axial",
    specs: {
      airflowRange: "2,000 to 220,000 CFM (3,400 to 375,000 m³/h)",
      staticPressure: "Up to 1,800 Pa (7.2 in. wg)",
      impellerDiameter: "315 mm to 2,400 mm",
      driveType: "Direct Drive / Belt-Driven Bifurcated (Motor out of airstream)",
      motorRating: "0.37 kW to 160 kW, IP55/IP65 Foot/Flange Mounted",
      operatingTemp: "-20°C to +300°C for 2 Hours (Class F300/F400 Smoke Rated)",
      standards: ["EN 12101-3", "AMCA 300 Acoustic Testing", "ISO 13348 Grade AN3"]
    },
    keyFeatures: [
      "High-pressure die-cast LM6 grade aluminum alloy aerofoil blades with adjustable pitch angles",
      "Hot-dip galvanized heavy-gauge sheet steel tubular casing for superior corrosion defense",
      "Bifurcated configuration isolates drive motor from hostile, saturated, or hot gas streams",
      "Precision bellmouth aerodynamic inlets for minimal suction turbulence",
      "Factory fitted inspection doors, wire guards, matching companion flanges, and mounting feet"
    ],
    applications: [
      "Basement & Multi-Level Car Park Ventilation",
      "Industrial Factory Floor Cooling & Cross-Ventilation",
      "Emergency Smoke Spill & Life Safety Pressurization",
      "Mining Shafts & Deep Underground Infrastructure",
      "Marine Engine Rooms & Transformer Yard Cooling"
    ],
    aerodynamicHighlights: [
      {
        title: "Variable Pitch Precision",
        description: "Allows fine-tuning of CFM and pressure on-site during final air balancing without changing motors or pulleys."
      },
      {
        title: "Bifurcated Airstream Chamber",
        description: "Central motor chamber draws clean ambient air while the corrosive process gas bypasses harmlessly around the motor tunnel."
      }
    ]
  },
  {
    id: "prod-jet-fans",
    slug: "jet-fans",
    name: "Impulse & Induction Jet Fans",
    category: "Smoke Exhaust Systems",
    subCategory: "Car Park & Tunnel Series",
    tagline: "Ductless high-velocity thrust systems for car park ventilation and emergency smoke routing.",
    shortDescription: "Sleek low-profile impulse and induction jet fans designed to eliminate costly ductwork in enclosed parking structures and highway tunnels, providing dynamic CO clearing and high-temperature smoke extraction.",
    fullDescription: "EUROCON Jet Ventilation Systems utilize impulse momentum theory to induce and steer air masses across open underground volumes toward main exhaust shafts. Available in unidirectional and 100% reversible symmetric thrust variants, certified for continuous ventilation and extreme emergency fire scenarios.",
    heroBadge: "300°C / 2-Hour Fire Certified",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    schematicSvgType: "jet",
    specs: {
      airflowRange: "Thrust range: 25 N to 120 N (Impulse) | 4,000 to 12,500 CFM (Induction)",
      staticPressure: "High velocity discharge up to 34 m/s",
      impellerDiameter: "315 mm, 355 mm, 400 mm, 450 mm Slim Profile",
      driveType: "Direct Drive Dual-Speed Dahlander Motor",
      motorRating: "0.75 / 3.0 kW Dual Speed (Low speed CO mode / High speed Fire mode)",
      operatingTemp: "Dual rated: Continuous 50°C & Emergency 300°C / 2 Hours (EN 12101-3 F300)",
      standards: ["EN 12101-3 Class F300/F400", "BS 7346-7", "NFPA 130/502 Tunnel Safety"]
    },
    keyFeatures: [
      "Ultra-low profile design (as low as 310 mm) preserving crucial overhead vehicle clearances",
      "Integrated dual high-density acoustic silencers with perforated internal liners for quiet daily operation",
      "Aerodynamic directional discharge deflectors to steer air jet away from ceiling beams and conduits",
      "Dual-speed motors for energy-efficient daily CO monitoring and instant full-thrust fire response",
      "Heavy duty stainless steel vibration-damped ceiling suspension brackets"
    ],
    applications: [
      "Commercial Mall & Airport Multi-Level Basements",
      "Road, Rail & Metro Underground Transit Tunnels",
      "Cargo Logistics Loading Bays & Enclosed Terminals",
      "Hazardous Fume Evacuation in Subterranean Facilities"
    ],
    aerodynamicHighlights: [
      {
        title: "Momentum Transfer Induction",
        description: "Discharges a high-velocity jet stream that entrains surrounding ambient air, moving up to 10x its own volume with zero sheet-metal ductwork."
      },
      {
        title: "Integrated Sound Attenuation",
        description: "Internal non-hygroscopic acoustic media keeps sound levels under 62 dBA at 3 meters in standard low-speed ventilation mode."
      }
    ]
  },
  {
    id: "prod-inline-fans",
    slug: "inline-fans",
    name: "Acoustic Cabinet & Mixed-Flow Inline Fans",
    category: "Air Distribution",
    subCategory: "Low Noise Ducted Systems",
    tagline: "Compact, whisper-quiet inline ventilation units for false ceilings and restricted plant spaces.",
    shortDescription: "Ultra-quiet inline centrifugal and mixed-flow fans enclosed in double-skin insulated acoustic cabinets, engineered for false-ceiling installations in premium commercial, hospital, and residential buildings.",
    fullDescription: "EUROCON Inline Fan Series combines high static pressure capability with acoustic comfort. Designed with mixed-flow aerodynamic impellers or forward/backward curved centrifugal wheels, these units fit seamlessly into straight duct runs to provide fresh air supply, toilet exhaust, and zone pressurization.",
    heroBadge: "Whisper-Quiet Acoustic Lining",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80",
    schematicSvgType: "inline",
    specs: {
      airflowRange: "250 to 18,000 CFM (425 to 30,500 m³/h)",
      staticPressure: "Up to 1,200 Pa (4.8 in. wg)",
      impellerDiameter: "150 mm to 710 mm",
      driveType: "Direct Drive External Rotor / EC Intelligent Variable Speed Motor",
      motorRating: "45 W to 11 kW with integrated thermal overload protection",
      operatingTemp: "-20°C to +60°C continuous",
      standards: ["AMCA 300 Noise Criterion", "ISO 5801", "CE Compliance"]
    },
    keyFeatures: [
      "Acoustic double-wall galvanized steel cabinet lined with 25mm/50mm high-density thermal-acoustic glass wool",
      "High-efficiency mixed-flow or backward curved external rotor motors with maintenance-free ball bearings",
      "Circular and rectangular standardized slip-fit spigots for rapid airtight duct connection",
      "Removable service access panels on both sides for effortless motor and impeller inspection",
      "Available with built-in EC (Electronically Commutated) brushless motors for 0-10V intelligent BMS control"
    ],
    applications: [
      "Corporate Headquarters, Hotels & Luxury Condominiums",
      "Hospital Isolation Rooms & Healthcare Exhaust",
      "Commercial Restroom & Kitchen Secondary Ventilation",
      "Cleanroom Auxiliary Recirculation & Plenums",
      "Auditoriums, Theaters & Recording Studios"
    ],
    aerodynamicHighlights: [
      {
        title: "Mixed-Flow Blade Dynamics",
        description: "Blends the high airflow volume of axial fans with the static pressure punch of centrifugal blowers in a compact in-line body."
      },
      {
        title: "EC Smart Modulation",
        description: "Enables stepless speed control from 10% to 100% based on real-time CO2, humidity, or temperature sensors."
      }
    ]
  },
  {
    id: "prod-hvls-fans",
    slug: "hvls-fans",
    name: "HVLS Large Industrial Ceiling Fans",
    category: "Air Management Systems",
    subCategory: "High Volume Low Speed",
    tagline: "Massive, non-turbulent air destratification for expansive warehouses and manufacturing shop floors.",
    shortDescription: "Engineered with aviation-grade extruded aerofoil blades and permanent magnet synchronous motors (PMSM), moving immense air volumes with minimal electrical consumption.",
    fullDescription: "EUROCON HVLS Fans create a continuous, soothing breeze that breaks up thermal stratification in high-ceiling structures. By lowering perceived indoor temperatures by 4°C to 7°C, they drastically reduce cooling energy costs while keeping workers comfortable and preventing moisture condensation on inventory.",
    heroBadge: "PMSM Direct Drive Gearless Technology",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    schematicSvgType: "hvls",
    specs: {
      airflowRange: "80,000 to 450,000 CFM per fan unit",
      staticPressure: "Large area destratification coverage up to 1,800 m² (19,000 sq.ft)",
      impellerDiameter: "3.0 m (10 ft) to 7.3 m (24 ft) Blade Span",
      driveType: "PMSM Gearless Direct Drive / Helical Industrial Gearbox",
      motorRating: "0.75 kW to 1.8 kW (Consumes less power than a small industrial heater)",
      operatingTemp: "Ambient -10°C to +55°C",
      standards: ["AMCA 230", "UL 507", "CE Certified Safety Restraints"]
    },
    keyFeatures: [
      "Aviation 6063-T6 tempered aluminum aerofoil blades with aerodynamic winglets to minimize vortex drag",
      "Silent PMSM direct drive motor operating below 38 dBA with zero gearbox oil maintenance required",
      "Multi-tier fail-safe safety system: high-tensile safety cables, retention brackets, and blade hub safety rings",
      "Intelligent touch-screen touchscreen controller with forward/reverse destratification winter modes",
      "Reduces HVAC energy loads by up to 30% when paired with central air conditioning systems"
    ],
    applications: [
      "Automated Logistics Warehouses & Distribution Hubs",
      "Automotive Assembly Plants & Heavy Machining Bays",
      "Railway Terminals, Aircraft Hangars & Metro Depots",
      "Sports Arenas, Gymnasiums & Exhibition Centers",
      "Agricultural Greenhouses & Dairy Barns"
    ],
    aerodynamicHighlights: [
      {
        title: "Aviation Winglet Aerodynamics",
        description: "Suppresses tip vortices, channeling air downwards in a smooth, conical column that spreads 360 degrees along the floor."
      },
      {
        title: "Thermal Destratification",
        description: "Recycles trapped ceiling hot air downwards in winter and creates evaporative chill breezes in summer."
      }
    ]
  },
  {
    id: "prod-smoke-exhaust",
    slug: "smoke-exhaust-systems",
    name: "Life-Safety Smoke Exhaust & Pressurization Systems",
    category: "Smoke Exhaust Systems",
    subCategory: "Fire & Life Safety Certified",
    tagline: "High-temperature emergency ventilation certified to operate at 400°C for up to 2 hours.",
    shortDescription: "Certified high-temperature smoke extract fans and staircase pressurization units engineered to keep escape routes clear of toxic fumes and heat during critical fire incidents.",
    fullDescription: "EUROCON Life-Safety Smoke Management Systems comply with rigorous global fire safety benchmarks (EN 12101-3, BS 7346, NFPA 92). From high-pressure centrifugal smoke extract units to roof-mounted vertical discharge cowls and lobby pressurization fans, every system is designed for instant emergency startup.",
    heroBadge: "EN 12101-3 F400 Certified",
    image: "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&w=1200&q=80",
    schematicSvgType: "smoke",
    specs: {
      airflowRange: "1,500 to 160,000 CFM",
      staticPressure: "Up to 3,000 Pa (12 in. wg)",
      impellerDiameter: "315 mm to 2,000 mm",
      driveType: "Direct Drive with Class H High-Temp Motor",
      motorRating: "1.1 kW to 110 kW, Class H Insulation, IP55/IP66",
      operatingTemp: "300°C for 2 Hours (F300) / 400°C for 2 Hours (F400)",
      standards: ["EN 12101-3:2015", "NBC 2016 Fire Norms", "ISO 21927-3"]
    },
    keyFeatures: [
      "Heavy duty heat-treated steel casing with high-temperature silicone ceramic protective coatings",
      "Dynamically balanced high-strength heat-resistant steel / aluminum impellers",
      "Integrated emergency fire rated terminal boxes and high-temperature shielded wiring",
      "Staircase and lift lobby pressurization control algorithms with modulating bypass dampers",
      "High reliability dual-feed redundant power terminal design for emergency generator transfer"
    ],
    applications: [
      "High-Rise Commercial Towers & Residential Skyscraper Stairwells",
      "Underground Metro Station Platforms & Egress Corridors",
      "Hospital Emergency Wards & Fire Refuge Floors",
      "Hazardous Industrial Chemical Storage Facilities"
    ],
    aerodynamicHighlights: [
      {
        title: "Thermal Expansion Tolerance",
        description: "Precision engineered blade-to-casing clearances prevent binding or friction under extreme 400°C thermal expansion."
      },
      {
        title: "Zero-Failure Emergency Run",
        description: "Motor electronics feature bypass modes that ignore internal thermal cutoff safeties to run continuously during life-safety extraction."
      }
    ]
  },
  {
    id: "prod-pre-fab-ducts",
    slug: "pre-fabricated-ducts",
    name: "Pre-Fabricated SMACNA Engineered Duct Systems",
    category: "Air Distribution",
    subCategory: "Factory Fabricated Infrastructure",
    tagline: "Spiral, rectangular & pre-insulated ductwork engineered for zero air leakage and rapid site erection.",
    shortDescription: "CNC-fabricated galvanized iron (GI), stainless steel, and phenolic pre-insulated ducting systems engineered to SMACNA Class A leakage standards for optimal airflow delivery.",
    fullDescription: "EUROCON Pre-Fabricated Duct Systems eliminate manual on-site sheet metal fabrication errors. Produced on automated CNC coil lines with integrated TDF/TDC four-bolt flange connections, our ducts guarantee tight seam seals, precise geometric tolerances, and minimal static pressure loss across complex HVAC layouts.",
    heroBadge: "SMACNA Class A Air Leakage Compliant",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80",
    schematicSvgType: "duct",
    specs: {
      airflowRange: "Engineered for 500 to 250,000 CFM duct runs",
      staticPressure: "Rated up to 2,500 Pa positive / negative static pressure",
      impellerDiameter: "Duct dimensions: 100mm to 3,000mm side / diameter",
      driveType: "Galvanized Zinc Coating: 120 gsm to 275 gsm (IS 277 / ASTM A653)",
      motorRating: "Sheet Gauge: 26G (0.5mm) to 16G (1.6mm) heavy gauge",
      operatingTemp: "-40°C to +250°C",
      standards: ["SMACNA HVAC Duct Construction Standards", "DW 144", "IS 655"]
    },
    keyFeatures: [
      "Automated CNC lock-seaming and plasma precision cutting ensures exact angles and zero dimensional distortion",
      "Transverse Duct Flange (TDF / TDC) integrated rolling saves up to 40% in site erection time",
      "Factory-applied elastomeric gasket sealant delivers airtight class A/B joint performance",
      "Spiral round ducting available with double-gasket EPDM self-sealing rubber rings",
      "Available in Galvanized Iron (GI), Stainless Steel (SS304/SS316), and Aluminum alloys"
    ],
    applications: [
      "Central Air Conditioning & Thermal Distribution Networks",
      "Cleanroom Supply & Return Air Plenums",
      "Kitchen Hood Exhaust & Grease Duct Systems",
      "Data Center Underfloor & Overhead Containment Ducts"
    ],
    aerodynamicHighlights: [
      {
        title: "Laminar Flow Inner Surface",
        description: "Smooth continuous interior seam eliminates burrs and eddies, reducing system friction loss by up to 14%."
      },
      {
        title: "Structural Rigidity Beading",
        description: "Continuous machine-beaded ribs provide maximum hoop strength against vacuum collapse and pressure pulsation."
      }
    ]
  },
  {
    id: "prod-scrubber-systems",
    slug: "scrubber-systems",
    name: "Industrial Wet & Dry Air Scrubber Systems",
    category: "Air Handling Solutions",
    subCategory: "Pollution Control & Fume Treatment",
    tagline: "High-efficiency packed bed, venturi, and chemical absorption scrubbers for industrial emissions.",
    shortDescription: "Engineered pollution control scrubbers removing toxic fumes, acid mists, organic vapors, and particulate emissions to ensure strict environmental regulatory compliance.",
    fullDescription: "EUROCON Industrial Air Scrubbing Systems utilize advanced mass-transfer packed columns, high-energy venturi nozzles, and chemical neutralizing spray headers to scrub hazardous gaseous pollutants from industrial exhausts. Manufactured in corrosion-proof PP/FRP, SS316L, or lined carbon steel.",
    heroBadge: "99.5% Gas Absorption Efficiency",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80",
    schematicSvgType: "scrubber",
    specs: {
      airflowRange: "1,000 to 85,000 CFM (1,700 to 145,000 m³/h)",
      staticPressure: "System pressure drop: 500 Pa to 3,500 Pa depending on bed depth",
      impellerDiameter: "Tower Diameters: 600 mm to 4,200 mm custom modular",
      driveType: "Corrosion-resistant PP/FRP centrifugal induction blower",
      motorRating: "Pump & Fan ratings tailored from 2.2 kW to 75 kW",
      operatingTemp: "Up to 120°C (Special thermal PP/PVDF resins available)",
      standards: ["CPCB Pollution Norms", "EPA Method 5 & 26 Compliant", "ASTM D3299"]
    },
    keyFeatures: [
      "Custom polypropylene (PP) / fiberglass-reinforced plastic (FRP) dual laminate construction for extreme chemical immunity",
      "High surface-area Tellerette or Pall ring random packing media for maximum gas-liquid interfacial contact",
      "Non-clogging spiral spray nozzles with wide-angle uniform liquid distribution patterns",
      "High-efficiency chevron mist eliminators removing 99.9% of entrained water droplets down to 15 microns",
      "Automated pH, ORP, and conductivity dosing control skid for turnkey continuous operation"
    ],
    applications: [
      "Chemical & Agrochemical Synthesis Plants",
      "Electroplating, Anodizing & Metal Pickling Tanks",
      "Pharmaceutical API Manufacturing Reactors",
      "Battery Manufacturing Acid Fume Scrubbing",
      "Foundry & Smelting Particulate Separation"
    ],
    aerodynamicHighlights: [
      {
        title: "Low Delta-P Packing Geometry",
        description: "Optimized void fraction of over 92% provides maximum gas absorption with minimal blower horsepower requirements."
      },
      {
        title: "Venturi Cyclonic Separation",
        description: "High-velocity throat atomizes scrubbing liquor to capture sub-micron particulates before the packed bed stage."
      }
    ]
  }
];

export const INDUSTRIES_DATA: Industry[] = [
  {
    id: "ind-commercial",
    name: "Commercial & Corporate Towers",
    code: "COM-01",
    tagline: "Acoustic comfort, high IAQ and energy-efficient climate distribution.",
    description: "Modern commercial headquarters and high-rise office towers demand whisper-quiet ventilation, ultra-reliable fresh air delivery, and intelligent demand-controlled HVAC integration for LEED/GRIHA certified building efficiency.",
    keyChallenges: [
      "Strict noise criteria (NC 35 or lower) across occupied tenant zones",
      "Energy costs from 24/7 continuous air handling and fresh air pressurization",
      "Stringent NBC fire and smoke compartmentalization codes"
    ],
    solutionsProvided: [
      "Double-skin acoustic cabinet inline fans with EC modulation",
      "SMACNA Class A sealed pre-insulated ducting networks",
      "Dedicated outdoor air systems (DOAS) with energy recovery wheels",
      "Emergency stairwell & elevator shaft fire pressurization blowers"
    ],
    recommendedProducts: [
      "Acoustic Cabinet & Mixed-Flow Inline Fans",
      "Life-Safety Smoke Exhaust & Pressurization Systems",
      "Pre-Fabricated SMACNA Engineered Duct Systems"
    ],
    stats: { label: "Energy Reduction", value: "Up to 28%" },
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
    accentColor: "#0284C7"
  },
  {
    id: "ind-manufacturing",
    name: "Heavy Manufacturing & Assembly",
    code: "MFG-02",
    tagline: "Robust process exhaust, heat clearance, and severe-duty ventilation.",
    description: "Heavy manufacturing bays generate massive internal heat loads, welding fumes, and metal particulates. Our rugged industrial fans and ventilation systems ensure continuous air turnover and safe worker environments.",
    keyChallenges: [
      "High thermal loads from furnaces, presses, and heat treatment lines",
      "Airborne dust, oil mist, and toxic process gases",
      "Continuous 24/7 heavy-duty operation in high ambient temperatures"
    ],
    solutionsProvided: [
      "Heavy-gauge industrial centrifugal fans with wear-resistant impellers",
      "High-Volume Low-Speed (HVLS) massive destratification fans",
      "Fume extraction hoods and high-pressure collection ductwork",
      "Wet scrubbing systems for acidic and caustic exhaust streams"
    ],
    recommendedProducts: [
      "Industrial Centrifugal Fans",
      "HVLS Large Industrial Ceiling Fans",
      "Industrial Wet & Dry Air Scrubber Systems"
    ],
    stats: { label: "Shopfloor Air Turnover", value: "18+ ACH" },
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80",
    accentColor: "#0EA5E9"
  },
  {
    id: "ind-automotive",
    name: "Automotive Plants & Paint Booths",
    code: "AUTO-03",
    tagline: "Laminar cleanroom airflow and volatile organic compound (VOC) management.",
    description: "Automotive manufacturing facilities require extreme cleanliness in paint shops combined with powerful exhaust in welding and robotic assembly corridors. Eurocon delivers precision airflow velocity control and spark-resistant systems.",
    keyChallenges: [
      "Zero particulate tolerance in robotic paint spray booths",
      "High concentration of flammable solvent vapors (VOCs)",
      "Uniform downward air velocity across vehicle conveyor bodies"
    ],
    solutionsProvided: [
      "ATEX / Spark-proof AMCA Type A centrifugal blowers",
      "Laminar flow supply plenums with micro-filtration",
      "Thermal oxidizer / scrubber interface ducting",
      "Underfloor downdraft exhaust extraction networks"
    ],
    recommendedProducts: [
      "Industrial Centrifugal Fans",
      "High-Volume Axial Flow Fans",
      "Industrial Wet & Dry Air Scrubber Systems"
    ],
    stats: { label: "Paint Booth Air Uniformity", value: "99.4%" },
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1000&q=80",
    accentColor: "#06B6D4"
  },
  {
    id: "ind-metro",
    name: "Metro, Rail & Transit Tunnels",
    code: "TUN-04",
    tagline: "High-thrust tunnel jet ventilation and emergency station evacuation.",
    description: "Underground rapid transit systems rely on massive airflow dynamics for piston-effect pressure relief, station comfort cooling, and emergency smoke extraction during tunnel fire incidents.",
    keyChallenges: [
      "Overpressure and aerodynamic drag from high-speed train transit",
      "Confined underground spaces with limited egress routes",
      "Extreme fire safety compliance requiring 300°C / 400°C certified ventilation"
    ],
    solutionsProvided: [
      "High-thrust reversible impulse and tunnel jet fans",
      "Large-diameter station trackway exhaust fans (OTEs/UTEs)",
      "Overpressure relief dampers and acoustic splitters",
      "Central SCADA-integrated emergency smoke control systems"
    ],
    recommendedProducts: [
      "Impulse & Induction Jet Fans",
      "High-Volume Axial Flow Fans",
      "Life-Safety Smoke Exhaust & Pressurization Systems"
    ],
    stats: { label: "Emergency Thrust", value: "Up to 120 N" },
    image: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=1000&q=80",
    accentColor: "#0284C7"
  },
  {
    id: "ind-datacenters",
    name: "Mission-Critical Data Centers",
    code: "DATA-05",
    tagline: "High static pressure, thermal containment and 100% uptime cooling airflow.",
    description: "Data centers generate extreme server rack heat densities. Eurocon designs precision air delivery infrastructure, CRAH plenum ducting, and hot/cold aisle containment systems engineered for continuous 99.999% uptime.",
    keyChallenges: [
      "High thermal heat flux per rack requiring precise CFM delivery",
      "Risk of hot spots and recirculating discharge air",
      "Zero tolerance for equipment failure or pressure drops"
    ],
    solutionsProvided: [
      "EC-driven high static pressure plenum plug fans",
      "Factory-sealed underfloor air distribution duct networks",
      "Acoustic attenuator baffles for low perimeter sound",
      "Automated redundancy switchover ventilation skids"
    ],
    recommendedProducts: [
      "Acoustic Cabinet & Mixed-Flow Inline Fans",
      "Pre-Fabricated SMACNA Engineered Duct Systems",
      "Industrial Centrifugal Fans"
    ],
    stats: { label: "PUE Efficiency Gain", value: "14% Avg" },
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80",
    accentColor: "#3B82F6"
  },
  {
    id: "ind-pharma",
    name: "Pharma, Biotech & Cleanrooms",
    code: "PHA-06",
    tagline: "HEPA-integrated air handling and positive pressure cascade control.",
    description: "Pharmaceutical cleanrooms and biotech labs demand strict ISO 14644 classification, precise relative humidity control, and positive/negative room pressure cascades to prevent cross-contamination.",
    keyChallenges: [
      "High static resistance across multi-stage HEPA/ULPA filters",
      "Preventing active pharmaceutical ingredient (API) fume cross-contamination",
      "Full stainless steel sanitizable ducting requirements"
    ],
    solutionsProvided: [
      "High-pressure cleanroom supply centrifugal fans with vibration isolation",
      "Fully welded SS316 pharmaceutical grade ductwork",
      "Dedicated biosafety cabinet exhaust scrubbers",
      "Room pressurization cascade balancing dampers"
    ],
    recommendedProducts: [
      "Industrial Centrifugal Fans",
      "Industrial Wet & Dry Air Scrubber Systems",
      "Pre-Fabricated SMACNA Engineered Duct Systems"
    ],
    stats: { label: "Cleanroom Class Support", value: "ISO 4 – 8" },
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80",
    accentColor: "#10B981"
  },
  {
    id: "ind-warehouses",
    name: "Logistics & High-Bay Warehousing",
    code: "LOG-07",
    tagline: "Expansive air destratification, condensation control, and worker comfort.",
    description: "Sprawling e-commerce fulfillment hubs and cold chain staging areas suffer from extreme thermal stratification between the floor and 15-meter roof peaks. Eurocon HVLS and inline fans maintain uniform temperature.",
    keyChallenges: [
      "Severe temperature differential between floor and ceiling levels",
      "Moisture condensation on inventory cartons and slippery polished concrete",
      "Huge energy costs if relying solely on localized mechanical air conditioners"
    ],
    solutionsProvided: [
      "Large-span PMSM gearless HVLS destratification fans (up to 24ft diameter)",
      "High-velocity supply jet throw nozzles for dead zones",
      "Loading dock curtain fans and exhaust relief cowls",
      "Automated seasonal destratification BMS integration"
    ],
    recommendedProducts: [
      "HVLS Large Industrial Ceiling Fans",
      "High-Volume Axial Flow Fans",
      "Acoustic Cabinet & Mixed-Flow Inline Fans"
    ],
    stats: { label: "Temperature Homogeneity", value: "±1.5°C" },
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80",
    accentColor: "#F59E0B"
  },
  {
    id: "ind-aviation",
    name: "Aviation Terminals & Hangars",
    code: "AVN-08",
    tagline: "Vast volume ventilation, jet bridge conditioning, and smoke safety.",
    description: "International airports require massive fresh air exchange for millions of passengers while maintaining strict architectural integration, low acoustic noise, and emergency smoke spill readiness.",
    keyChallenges: [
      "Vast open atrium architectures with continuous passenger traffic",
      "Jet fuel exhaust fumes near baggage handling and tarmac areas",
      "Stringent international life-safety codes"
    ],
    solutionsProvided: [
      "High-capacity centrifugal supply and return air handling fans",
      "Induction jet fans for baggage sorting tunnels",
      "Heavy-duty smoke extract fans rated for 400°C continuous operation",
      "Large-format acoustic silencers and attenuator banks"
    ],
    recommendedProducts: [
      "Life-Safety Smoke Exhaust & Pressurization Systems",
      "Impulse & Induction Jet Fans",
      "Industrial Centrifugal Fans"
    ],
    stats: { label: "Passenger IAQ Rating", value: "Class A" },
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=80",
    accentColor: "#0284C7"
  }
];

export const QUALITY_STEPS: QualityStep[] = [
  {
    step: "01",
    code: "CFD & CAD",
    title: "Aerodynamic Simulation & Computational Modeling",
    description: "Every impeller geometry and casing profile undergoes extensive Computational Fluid Dynamics (CFD) simulation to eliminate boundary separation, turbulence, and unnecessary vortex drag.",
    methodology: "ANSYS Fluent 3D Navier-Stokes numerical airflow modeling",
    complianceStandard: "AMCA 210 Aerodynamic Rig Protocols",
    iconName: "Cpu"
  },
  {
    step: "02",
    code: "MAT-QC",
    title: "Raw Material Metallurgy & Spectro Analysis",
    description: "Incoming sheet steel, structural channels, aluminum ingots, and stainless alloys are tested for tensile strength, elongation, and zinc coating thickness (GSM) before cutting.",
    methodology: "Optical emission spectroscopy & ultrasonic flaw detection",
    complianceStandard: "IS 2062 / ASTM A653 / IS 277 Galvanizing Norms",
    iconName: "ShieldCheck"
  },
  {
    step: "03",
    code: "CNC-MFG",
    title: "Precision CNC Laser Cutting & Automated Forming",
    description: "Components are cut on high-precision fiber laser tables and formed on multi-axis CNC press brakes, ensuring microscopic tolerances and perfect modular interchangeability.",
    methodology: "Fiber Laser 0.05mm tolerance nesting and robotic roll forming",
    complianceStandard: "ISO 2768-m Precision Engineering Standards",
    iconName: "Settings"
  },
  {
    step: "04",
    code: "DYN-BAL",
    title: "Dual-Plane Digital Dynamic Balancing",
    description: "Every assembled impeller undergoes dual-plane digital dynamic balancing on calibrated computerized balancing machines to ensure whisper-quiet rotation and extended bearing longevity.",
    methodology: "Two-plane dynamic balance correction at operating RPMs",
    complianceStandard: "ISO 1940-1 Grade G2.5 / G1.0 Balance Grade",
    iconName: "Activity"
  },
  {
    step: "05",
    code: "RIG-TEST",
    title: "Full-Scale Aerodynamic & Acoustic Chamber Testing",
    description: "Finished fans are mounted onto automated multi-nozzle chamber test rigs to measure real CFM vs Static Pressure curves, motor power draw, and octave-band sound power levels.",
    methodology: "Multi-nozzle AMCA chamber with precision pressure transducers",
    complianceStandard: "AMCA 210 / AMCA 300 / ISO 5801 Laboratory Standards",
    iconName: "Sliders"
  },
  {
    step: "06",
    code: "FAT-DISP",
    title: "Factory Acceptance Testing (FAT) & Dispatch Certification",
    description: "Before release, a comprehensive 2-hour continuous test run records vibration FFT spectrums, thermal motor winding rise, and paint film DFT thickness before tamper-evident crating.",
    methodology: "Full electrical, vibration, and dimensional sign-off report with traceable serial barcode",
    complianceStandard: "ISO 9001:2015 Quality Dispatch Protocol",
    iconName: "CheckCircle2"
  }
];

export const PROJECT_CASE_STUDIES: ProjectCaseStudy[] = [
  {
    id: "proj-metro-tunnel",
    title: "Underground Metro Corridor Smoke Management & Ventilation",
    category: "Metro & Rail",
    location: "Major Metropolitan Metro Transit Phase II",
    scope: "Engineering, manufacture, and commissioning of high-thrust dual-speed reversible jet fans and tunnel overpressure dampers across 9 underground stations.",
    airflowCapacity: "1,850,000 CFM Combined Extraction Capacity",
    solutionsInstalled: [
      "EN 12101-3 F300 Dual-Speed Induction Jet Fans (100% Reversible)",
      "High-Capacity Trackway Exhaust (OTE) Heavy Duty Axial Blowers",
      "Aerodynamic Acoustic Silencer Splitter Banks"
    ],
    resultsAchieved: [
      "Full NFPA 130 life-safety smoke clearance validation within 180 seconds during simulated fire trials",
      "Achieved station platform acoustic levels under 58 dBA during peak train transit"
    ],
    image: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "proj-auto-paint",
    title: "Automotive Paint Shop Cleanroom & VOC Scrubber Network",
    category: "Automotive & Heavy Mfg",
    location: "Automotive Manufacturing Corridor, Western Hub",
    scope: "Turnkey supply of ATEX spark-resistant centrifugal supply fans, laminar clean air plenums, and packed-bed acid fume scrubbing systems for a new robotic paint line.",
    airflowCapacity: "920,000 CFM Air Handling & VOC Neutralization",
    solutionsInstalled: [
      "AMCA Spark-Proof Type A Centrifugal Fans with Backward Inclined Impellers",
      "PP/FRP Multi-Stage Chemical Scrubber Towers with Automated Dosing",
      "Stainless Steel SS304 Welded Ductwork"
    ],
    resultsAchieved: [
      "99.6% VOC and solvent mist removal efficiency, exceeding local environmental emissions norms",
      "Zero paint finish defect rate attributed to airflow turbulence or particulate contamination"
    ],
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "proj-data-center",
    title: "Tier-IV Hyperscale Data Center Cold-Aisle Pressurization",
    category: "Data Centers",
    location: "Technology Special Economic Zone, Cyber Corridor",
    scope: "Design and fabrication of high-static EC plug fan arrays, acoustic discharge plenums, and SMACNA Class A sealed underfloor distribution ducting for 24MW critical IT load.",
    airflowCapacity: "1,450,000 CFM Precision Air Delivery",
    solutionsInstalled: [
      "EC-Driven Intelligent Variable Speed Cabinet Fans",
      "SMACNA Heavy-Gauge Zinc-Coated Factory Pre-Fabricated Ducting",
      "Low-Resistance Acoustic Attenuator Modules"
    ],
    resultsAchieved: [
      "Reduced cooling parasitic load by 16.5%, contributing to an annualized PUE of 1.28",
      "Seamless N+2 redundancy switchover with zero static pressure dip across server bays"
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "proj-commercial-hq",
    title: "50-Story Commercial Skyscraper HVAC & Life Safety",
    category: "Commercial & IT Parks",
    location: "Central Business District Financial Center",
    scope: "Supply of primary AHU backward curved centrifugal fans, emergency stairwell pressurization systems, and low-noise ducted inline exhaust across 50 floors and 4 basements.",
    airflowCapacity: "2,200,000 CFM Total Building Ventilation",
    solutionsInstalled: [
      "Double-Skin Acoustic Cabinet Inline Fans",
      "High-Temperature 400°C / 2-Hour Smoke Spill Centrifugal Blowers",
      "Automated Modulating Pressure Relief Dampers"
    ],
    resultsAchieved: [
      "Enabled project to secure LEED Platinum green building certification",
      "Maintained constant 50 Pa positive stairwell pressurization across all 50 floors in simulated fire tests"
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "proj-pharma-sterile",
    title: "Sterile Injectable Pharmaceutical Facility Cleanroom Air Systems",
    category: "Pharma & Cleanroom",
    location: "Pharma City Industrial Park",
    scope: "Custom fabrication of cleanroom air recirculation centrifugal fans, sanitary stainless steel duct networks, and toxic API powder exhaust scrubbers.",
    airflowCapacity: "480,000 CFM Controlled Atmosphere Airflow",
    solutionsInstalled: [
      "Sanitary Double-Skin Air Handling Centrifugal Fans with Direct IE4 Drives",
      "SS316L Fully Welded Leak-Free Duct Systems",
      "High-Efficiency Venturi Wet Scrubbing Column"
    ],
    resultsAchieved: [
      "Passed US-FDA and WHO-GMP cleanroom audit with zero airflow validation non-conformances",
      "Continuous positive pressure differential maintained across 32 individual sterile suites"
    ],
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "proj-logistics-hub",
    title: "1.2 Million Sq.Ft Automated E-Commerce Fulfillment Center",
    category: "Aviation & Logistics",
    location: "Logistics Hub Gateway Corridor",
    scope: "Deployment of 24-ft industrial HVLS destratification fans and high-capacity roof exhaust units across mega-warehouse footprint.",
    airflowCapacity: "3,800,000 CFM Floor-Level Air Displacement",
    solutionsInstalled: [
      "PMSM Direct-Drive 24-ft HVLS Ceiling Fans with Smart BMS Automation",
      "High-Volume Roof Mounted Upblast Axial Exhausters",
      "Dock Door High-Velocity Air Curtains"
    ],
    resultsAchieved: [
      "Eliminated summer heat stress with a 5.5°C perceived cooling effect across all packing stations",
      "Reduced winter heating stratification losses by 29%"
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80"
  }
];

export const WHY_EUROCON_PILLARS = [
  {
    id: "pillar-engineering",
    number: "01",
    title: "Aerodynamic Precision & CFD Modeling",
    description: "Every EUROCON impeller profile is validated via 3D computational fluid dynamics (CFD) to maximize static efficiency and reduce turbulence, lowering operating electricity costs across the product lifecycle.",
    stat: "Up to 88%",
    statLabel: "Total Mechanical Efficiency"
  },
  {
    id: "pillar-safety",
    number: "02",
    title: "Certified Life-Safety Compliance",
    description: "Our smoke management systems and high-temperature fans are certified to stringent EN 12101-3, AMCA 210, and NBC standards to ensure flawless emergency operation when lives depend on it.",
    stat: "400°C / 2h",
    statLabel: "Fire-Rated Extreme Certification"
  },
  {
    id: "pillar-manufacturing",
    number: "03",
    title: "Advanced CNC Manufacturing Infrastructure",
    description: "Utilizing automated fiber laser cutting, CNC multi-axis press brakes, automated TDF lock-forming, and digital dynamic balancing rigs for zero-tolerance mechanical consistency.",
    stat: "±0.05 mm",
    statLabel: "CNC Machining Tolerance"
  },
  {
    id: "pillar-acoustics",
    number: "04",
    title: "Engineered Acoustic Comfort",
    description: "Advanced double-skin acoustic cabinets, aerofoil blade profiles, and custom splitter silencers deliver high static pressure while maintaining whisper-quiet sound criteria for modern architecture.",
    stat: "< 55 dBA",
    statLabel: "Low-Noise Operating Envelope"
  },
  {
    id: "pillar-lifecycle",
    number: "05",
    title: "Heavy-Duty Industrial Reliability",
    description: "Built with heavy-gauge galvanized steel, stainless alloys, and premium split roller bearings engineered for 100,000+ hours of continuous industrial runtime with minimal servicing.",
    stat: "100k+ Hrs",
    statLabel: "L10 Bearing Service Life"
  },
  {
    id: "pillar-support",
    number: "06",
    title: "Pan-India Engineering & Field Support",
    description: "From initial airflow calculations and duct design consultation to on-site acoustic testing, dynamic balancing, and rapid spare delivery, our engineering team supports your project from day one.",
    stat: "24-48 Hrs",
    statLabel: "Rapid Technical Response"
  }
];

export const FAQ_ITEMS = [
  {
    question: "What standards and certifications do Eurocon System LLP products comply with?",
    answer: "Our air management equipment is designed, manufactured, and tested in strict accordance with global benchmarks including AMCA 210 (Aerodynamic Laboratory Methods), AMCA 300 (Reverberant Room Sound Testing), EN 12101-3 (High-Temperature Smoke and Heat Exhaust F300/F400), ISO 1940-1 (Dynamic Balance Grade G2.5), and SMACNA HVAC Duct Construction Standards."
  },
  {
    question: "Can Eurocon custom-engineer fans for corrosive or hazardous chemical environments?",
    answer: "Yes. We engineer customized industrial solutions utilizing SS304/SS316 stainless steel, Polypropylene/FRP dual laminates, and spark-resistant aluminum alloys complying with AMCA Type A, B, and C spark-proof construction norms, as well as ATEX hazardous area requirements."
  },
  {
    question: "How do Jet Fan ventilation systems compare to conventional ducted basement systems?",
    answer: "Impulse and induction jet ventilation systems eliminate the vast majority of overhead sheet metal ductwork in car parks and tunnels. This drastically lowers head-height clearance requirements, speeds up installation by up to 60%, eliminates dead airflow pockets, and provides dynamic dual-speed control for everyday CO clearing and emergency smoke evacuation."
  },
  {
    question: "What is the typical lead time for custom engineered centrifugal and axial fans?",
    answer: "Standard catalog models and modular pre-fabricated ducting components typically ship within 1 to 2 weeks. Custom-engineered high-pressure centrifugal fans, fire-rated smoke exhaust units, and turnkey wet scrubber towers are manufactured and dispatched within 3 to 5 weeks depending on project specifications."
  },
  {
    question: "Does Eurocon offer on-site commissioning and air balancing services?",
    answer: "Yes. Our qualified application engineering team provides comprehensive on-site support, including duct air balancing (TAB), vibration FFT spectrum analysis, on-site dynamic balancing, and acoustic sound level verification to ensure design parameters match real-world operation."
  }
];
