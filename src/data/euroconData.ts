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
    contactPerson: "Ashok Dhull",
    address: "Kh no 118//2/2, Rohad Dehkora Road, Vill. Rohad",
    city: "Bahadurgarh, Haryana 124501, India",
    phone: "+91 98912 21991",
    email: "sales@eurocon.in",
    salesEmail: "sales@eurocon.in",
    supportEmail: "sales@eurocon.in",
    workingHours: "Mon – Sat: 08:30 AM – 06:30 PM IST"
  }
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
    id: "prod-fan-section",
    slug: "fan-section",
    aliases: ["fansection", "fan-sections", "plug-fan-section", "blower-section", "modular-fan-section"],
    name: "Fan Section",
    category: "Ventilation & Exhaust Systems",
    subCategory: "Modular Plenum & Blower Series",
    tagline: "Precision-engineered modular fan plenums with DIDW blower and aerofoil fan assemblies.",
    shortDescription: "Modular Fan Sections housing direct-drive fans or DIDW backward curved blowers on vibration-isolated sub-bases, optimized for AHU retrofits, fresh air intake, and process exhaust.",
    fullDescription: "EUROCON Fan Sections are self-contained aerodynamic supply and exhaust modules designed for seamless integration into built-up HVAC air systems, custom plenums, and industrial processes. Built within high-rigidity extruded aluminum frameworks with 25mm / 50mm double-skin PUF insulated panels (40 kg/m³ density), Eurocon Fan Sections feature direct-drive backward curved aerofoil plug fans or DIDW centrifugal blowers statically and dynamically balanced for whisper-quiet vibration-free operation.",
    heroBadge: "High Efficiency Modular Blower",
    image: "/images/products/fan-section1.png",
    gallery: [
      "/images/products/fan-section1.png"
    ],
    cfdImage: "/images/products/cfd-fan-section.jpg",
    schematicSvgType: "fansection",
    specs: {
      airflowRange: "2,000 to 11,00,000 CFM",
      staticPressure: "Up to 3,000 Pa",
      impellerDiameter: "280 mm to 1,600 mm",
      casingConstruction: "Single or Double-Skin 25mm / 50mm PUF Casing with Quick-Access Doors",
      driveType: "Direct-Drive Unhoused Plug Fan / Belt-Drive DIDW Centrifugal / EC Motor",
      motorRating: "IE3 to IE5",
      operatingTemp: "-20°C to +80°C (High-temperature rated options up to 250°C)",
      standards: ["High Aerodynamic Performance", "Dynamic Precision Balancing"]
    },
    keyFeatures: [
      "Unhoused direct-drive plug fans with backward-curved 3D aerofoil blades for maximum static efficiency",
      "Single or double-skin 25mm/50mm insulated casing lined with high-density PUF",
      "Heavy-duty spring anti-vibration mounts (AVMs) with 95%+ vibration isolation efficiency",
      "Flexible neoprene/canvas connection sleeves preventing mechanical vibration transmission into ductwork",
      "Quick-release hinged access doors with double-cam latches and acrylic inspection viewing ports",
      "Factory-installed airflow piezometer rings for real-time CFM monitoring and VFD modulation"
    ],
    applications: [
      "Custom AHU Supply & Return Air Modular Plenums",
      "Cleanroom Auxiliary Air Recirculation & Pressurization",
      "Industrial Factory Fresh Air Supply & General Ventilation",
      "Commercial Building Ventilation & Air Filtration Plenums",
      "Process Exhaust & Fume Extraction Booster Stations"
    ],
    aerodynamicHighlights: [
      {
        title: "Bellmouth Inlet Optimization",
        description: "Spun aluminum inlet cone creates smooth laminar flow transition into the impeller eye, minimizing entry losses and noise."
      },
      {
        title: "Plug Fan Free Discharge",
        description: "Pressurizes the entire plenum chamber evenly, reducing downstream system effect and eliminating duct transition losses."
      }
    ],
    customOptions: [
      { title: "Impeller Type", description: "Backward curved plug fan, aerofoil centrifugal, or forward curved double inlet blower.", badge: "Plug / DIDW" },
      { title: "Motor Efficiency", description: "IE3, IE4, IE5 High Efficiency induction or EC Brushless motors.", badge: "IE3 - IE5" },
      { title: "Access Layout", description: "Left-hand or Right-hand quick-access inspection door with viewing window and marine light.", badge: "Custom Access" },
      { title: "Mounting Isolation", description: "Internal spring isolators with seismic restraints or external rubber-in-shear mounts.", badge: "Vibration Free" }
    ]
  },
  {
    id: "prod-airwashers",
    slug: "airwashers",
    aliases: ["air-washer", "industrial-airwashers", "air-washers", "evaporative-cooling", "airwasher"],
    name: "Air Washer",
    category: "Air Handling Solutions",
    subCategory: "Industrial Evaporative Cooling",
    tagline: "High-saturation Celdek 5090 evaporative cooling air washer systems with heavy-gauge SS304 sump.",
    shortDescription: "Industrial Double-Skin Evaporative Air Washers delivering up to 90% saturation efficiency with cross-fluted cellulose pads, multi-tier spray distribution, and heavy-duty stainless steel water sumps.",
    fullDescription: "EUROCON Industrial Evaporative Air Washers offer highly efficient, energy-saving cooling and humidification for factories, manufacturing facilities, textile mills, printing plants, and large public spaces. Featuring 25mm/50mm double-skin PUF panels and heavy-gauge SS304 stainless steel sumps, Eurocon Air Washers utilize premium Celdek 5090 fluted media with multi-nozzle spray manifolds to achieve up to 90% adiabatic cooling efficiency while filtering ambient dust and airborne contaminants.",
    heroBadge: "90% Saturation Efficiency",
    image: "/images/products/industrial-airwashers.png",
    gallery: [
      "/images/products/industrial-airwashers.png"
    ],
    cfdImage: "/images/products/cfd-airwashers.jpg",
    schematicSvgType: "airwasher",
    specs: {
      airflowRange: "2,000 to 120,000 CFM (3,400 to 204,000 m³/h)",
      staticPressure: "Up to 1,500 Pa (6.0 in. wg)",
      casingConstruction: "25mm / 50mm Double-Skin PUF Injected (40 kg/m³) with SS304/SS316 Water Sump",
      filtration: "EU4 Pre-Filter + Celdek 5090 Evaporative Cooling / Scrubbing Media",
      driveType: "Direct-Drive EC Plug Fan / V-Belt DIDW Centrifugal Blower",
      motorRating: "1.5 kW to 90 kW (IE3 / IE4 / EC High Efficiency)",
      operatingTemp: "Ambient to +55°C",
      standards: ["High Saturation Efficiency", "Hygienic Evaporative Design", "Dual-Drive Capability"]
    },
    keyFeatures: [
      "High-efficiency cross-fluted Celdek 5090 / Munters evaporative cooling media with 90%+ saturation efficiency",
      "Heavy-gauge SS304 / SS316 welded stainless steel water collection tank with sloped bottom drain",
      "Low-clog multi-tier brass/PVC atomizing spray nozzles ensuring uniform water curtain distribution",
      "High-efficiency PVC 4-bend moisture eliminator blades eliminating downstream droplet carryover",
      "Self-priming monobloc centrifugal water recirculation pump with automated low-water cutoff float switch",
      "Double-skin insulated casing preventing sweat condensation and reducing acoustic transmission"
    ],
    applications: [
      "Textile Spinning, Weaving Mills & Dyeing Units (Precise Humidity & Dust Control)",
      "Automotive Shopfloors, Assembly Bays & Large Warehouses",
      "Packaging, Paper & Commercial Printing Facilities",
      "Commercial Food Processing, Confectionery & Agro Warehouses",
      "Turbine Intake Air Pre-cooling for Power Generation"
    ],
    aerodynamicHighlights: [
      {
        title: "Uniform Face Velocity Profile",
        description: "Engineered baffle and media aspect ratio guarantees uniform air velocity across the wetting pad face, preventing dry spots and bypass air."
      },
      {
        title: "Droplet Entrainment Elimination",
        description: "Specially contoured 4-pass PVC drift eliminators trap water droplets exceeding 20 microns without adding parasitic pressure drop."
      }
    ],
    customOptions: [
      { title: "Media Thickness", description: "100mm, 150mm, or 200mm Celdek 5090 / 7090 or high-density honeycomb PVC media.", badge: "Media Options" },
      { title: "Sump Metallurgy", description: "SS304 (standard) or marine grade SS316L for corrosive or saline water sources.", badge: "SS304 / SS316" },
      { title: "Filtration Stages", description: "Washable aluminum pre-filters, synthetic EU4 panel filters, or high-capacity bag filters.", badge: "Multi-Stage" },
      { title: "Pump Redundancy", description: "Dual pump automatic changeover skid (1 Duty + 1 Standby) with control panel.", badge: "Dual Pump" }
    ]
  },
  {
    id: "prod-ahu",
    slug: "ahu",
    aliases: ["air-handling-unit", "air-handling-units", "modular-ahu", "double-skin-ahu"],
    name: "Air Handling Unit (AHU)",
    category: "Air Handling Solutions",
    subCategory: "Modular Double-Skin Series",
    tagline: "Custom modular & thermal-break double-skin AHUs.",
    shortDescription: "Engineered modular Double-Skin Air Handling Units (AHUs) with thermal-break extruded aluminum profiles, EU4 to HEPA multi-stage filtration, and high-efficiency direct-drive EC/Plug fans.",
    fullDescription: "EUROCON Double Skin Air Handling Units (AHUs) are engineered to deliver conditioned, filtered, and precisely balanced air across commercial complexes, cleanroom facilities, pharmaceutical labs, data centers, and industrial facilities. Built with 25mm / 50mm injected PUF insulation (40 kg/m³ density) in thermal-break extruded aluminum profiles, Eurocon AHUs eliminate condensation and thermal bridging while ensuring whisper-quiet acoustic damping and minimal casing air leakage.",
    image: "/images/products/AHU.png",
    gallery: [
      "/images/products/AHU.png"
    ],
    cfdImage: "/images/products/cfd-ahu.jpg",
    schematicSvgType: "ahu",
    specs: {
      airflowRange: "400 to 40,000 CFM (680 to 68,000 m³/h)",
      staticPressure: "Up to 2,000 Pa (8.0 in. wg)",
      coolingCapacity: "1.0 TR to 100 TR (Chilled Water / DX Direct Expansion)",
      casingConstruction: "25mm / 50mm Double-Skin PUF Injected (40 kg/m³) with Thermal Break Profile",
      filtration: "EU4 Pre-Filter + EU7/EU9 Microvee + HEPA H13/H14 Optional",
      coilSpecs: "Copper Tubes with Hydrophilic Blue/Gold Aluminum Fins",
      driveType: "Direct-Drive EC Motor / Backward Curved Plug Fan / V-Belt Centrifugal",
      motorRating: "1.5 kW to 90 kW (IE3 / IE4 / EC Brushless)",
      operatingTemp: "-15°C to +65°C Continuous",
      standards: ["Thermal Break Construction", "High Efficiency Plug Fan", "Low Acoustic Profile"]
    },
    keyFeatures: [
      "Thermal Break extruded aluminum profile framework preventing exterior surface condensation",
      "25mm / 50mm CFC-free injected Polyurethane Foam (PUF) insulation with 40 kg/m³ density",
      "Direct-drive high efficiency Backward Curved Plug Fan / EC Motor eliminating belt dust and maintenance",
      "Multi-stage modular filtration tracks accommodating EU4 Pre, EU7/EU9 Fine, and Terminal HEPA filters",
      "Sloped SS304 stainless steel drain pan with dual-sided drainage preventing microbial buildup",
      "Modular sectional design allowing easy on-site rigging, plant room transit, and custom assembly"
    ],
    applications: [
      "Pharmaceutical Manufacturing & Sterile Cleanrooms (Class 100 - 100,000 Cleanrooms)",
      "Commercial IT Parks, Corporate Headquarters & High-Rise Towers",
      "Hospitals, Operation Theatres & Critical Healthcare Facilities",
      "Data Centers, Semiconductor Fabrication & Electronics Assembly",
      "Industrial Precision Labs, Battery Manufacturing & Automotive Plants"
    ],
    aerodynamicHighlights: [
      {
        title: "Thermal-Break Profile (TB2 Class)",
        description: "Polyvinyl chloride (PVC) / Polyamide isolator inserts interrupt the metallic thermal bridge between inner and outer casing skins, eliminating condensation even in high tropical humidity."
      },
      {
        title: "Plug Fan Aero-Plenum Design",
        description: "Direct-drive plug fan pressurizes the discharge plenum evenly without sharp 90-degree transitions, reducing casing turbulence and dynamic velocity losses."
      }
    ],
    customOptions: [
      { title: "Casing Thickness", description: "25mm standard or 50mm heavy-duty double-skin panels with thermal-break profiles.", badge: "25mm / 50mm" },
      { title: "Fan Technology", description: "Direct-drive EC motor plug fan array or belt-driven backward inclined DIDW blower.", badge: "EC / Plug" },
      { title: "Coil Metallurgy", description: "Copper/Aluminum, Hydrophilic coated fins, or full Copper-Copper for corrosive environments.", badge: "Hydrophilic Fins" },
      { title: "Airflow Monitoring", description: "Factory-calibrated differential pressure transmitters for automated VAV CFM feedback.", badge: "Smart VAV" }
    ]
  },
  {
    id: "prod-fcu",
    slug: "fcu",
    aliases: ["fan-coil-unit", "fan-coil-units", "ceiling-fcu", "concealed-fcu", "cassette-fcu"],
    name: "FCU (Fan Coil Unit)",
    category: "Air Handling Solutions",
    subCategory: "Ceiling Concealed & Cassette Series",
    tagline: "Ultra-slim, whisper-quiet ceiling concealed chilled water & DX fan coil units.",
    shortDescription: "Low-profile ceiling-concealed and cassette Fan Coil Units (FCU) engineered with multi-speed or EC brushless motors, hydrophilic-finned copper coils, and sloped condensation drain trays.",
    fullDescription: "EUROCON Fan Coil Units (FCU) are precision-engineered for zonal climate control in commercial offices, luxury hotels, hospital patient rooms, and residential towers. Featuring an ultra-slim chassis (as low as 220mm height) that easily fits tight ceiling voids, low-noise dynamically balanced multi-blade blowers, and high-efficiency copper tube heat exchangers with hydrophilic coated fins.",
    heroBadge: "Ultra-Slim 220mm Profile & 28 dBA",
    image: "/images/products/FCU-(fancoilunit).png",
    gallery: [
      "/images/products/FCU-(fancoilunit).png"
    ],
    schematicSvgType: "fcu",
    specs: {
      airflowRange: "200 to 3,000 CFM (340 to 5,100 m³/h)",
      staticPressure: "ESP 30 Pa (Standard) to 180 Pa (High Static Pressure Series)",
      coolingCapacity: "0.5 TR to 7.5 TR (1.8 kW to 26 kW)",
      coilSpecs: "2-Row / 3-Row / 4-Row Seamless Copper Tubes + Hydrophilic Corrugated Fins",
      noiseLevel: "28 dBA to 42 dBA (Ultra-Quiet Performance)",
      driveType: "Direct Drive with 3-Speed PSC Motor or Continuous 0-10V EC Motor",
      motorRating: "35 W to 450 W (Energy Efficient Brushless DC / PSC)",
      operatingTemp: "Chilled Water 4°C - 12°C / Hot Water up to 80°C",
      standards: ["Ultra-Quiet Acoustic Design", "Zero-Condensation Drain Pan", "Low-Profile Chassis"]
    },
    keyFeatures: [
      "Ultra-compact slim chassis height starting at just 220mm, ideal for restricted false ceiling heights",
      "High-efficiency seamless copper tubes mechanically expanded into hydrophilic corrugated aluminum fins",
      "One-piece deep-drawn galvanized steel drain pan insulated with 6mm closed-cell PE foam for zero condensation",
      "Dynamically balanced wide-diameter forward-curved galvanized DIDW centrifugal impellers",
      "Choice of 3-Speed PSC motor or high-efficiency Electronically Commutated (EC) brushless DC motor",
      "Washable nylon / synthetic fiber pre-filter easily removable from bottom or rear access tracks"
    ],
    applications: [
      "Premium Hotel Guest Rooms & Luxury Resort Suites",
      "Commercial IT Offices, Executive Cabins & Conference Rooms",
      "Hospital Patient Wards & Consultation Chambers",
      "High-End Residential Apartments & Condominiums",
      "Retail Showrooms & Boutique Commercial Stores"
    ],
    aerodynamicHighlights: [
      {
        title: "Acoustic Impeller Casing",
        description: "Dual-inlet scroll housing engineered with optimized cutoff angle suppresses blade-pass noise down to a library-quiet 28 dBA."
      },
      {
        title: "Hydrophilic Coil Heat Transfer",
        description: "Hydrophilic blue coating prevents water bridge droplet formation between fins, ensuring uninterrupted airflow and maximum heat exchange."
      }
    ],
    customOptions: [
      { title: "System Type", description: "2-Pipe Cooling / Heating or 4-Pipe Independent Simultaneous System.", badge: "2-Pipe / 4-Pipe" },
      { title: "Static Pressure Range", description: "Low Static (12-30 Pa) for direct discharge or High Static (50-180 Pa) for ducted distribution.", badge: "High ESP" },
      { title: "Motor Option", description: "Standard 3-Speed PSC Motor or Smart 0-10V Modulating EC Brushless Motor.", badge: "EC Brushless" },
      { title: "Control Valve Integration", description: "Factory-fitted 2-way or 3-way motorized modulating valve package with smart thermostat.", badge: "Smart BMS" }
    ]
  },
  {
    id: "prod-tfa",
    slug: "tfa",
    aliases: ["tfa-unit", "treated-fresh-air-unit", "fresh-air-handling-unit", "treated-fanair-unit", "tfa"],
    name: "TFA (Treated Fresh Air Unit)",
    category: "Air Handling Solutions",
    subCategory: "Dedicated Outdoor Air System (DOAS)",
    tagline: "100% Outdoor fresh air treatment units featuring total enthalpy heat recovery wheels, multi-tier filtration, and deep cooling coils.",
    shortDescription: "Engineered Treated Fresh Air Units (TFA) delivering 100% conditioned fresh air to commercial and healthcare facilities with energy recovery enthalpy wheels, EU4/EU7/EU9 filtration, and precision humidity control.",
    fullDescription: "EUROCON Treated Fresh Air (TFA) Units are purpose-built to condition, dehumidify, and filter 100% outside ambient air for modern indoor air quality (IAQ) and fresh air ventilation performance. Designed with double-skin 25mm / 50mm injected PUF insulation and thermal-break aluminum extrusions, Eurocon TFAs incorporate rotary enthalpy heat recovery wheels (recovering up to 75% sensible and latent exhaust energy), multi-stage filtration tracks (EU4 Pre, EU7 Microvee, and optional H14 HEPA), and high-efficiency deep cooling coils for maximum efficiency and fresh air purity.",
    heroBadge: "100% Fresh Air & Heat Recovery",
    image: "/images/products/tfa-unit.png",
    gallery: [
      "/images/products/tfa-unit.png"
    ],
    cfdImage: "/images/products/cfd-ahu.jpg",
    schematicSvgType: "ahu",
    specs: {
      airflowRange: "1,000 to 50,000 CFM (1,700 to 85,000 m³/h)",
      staticPressure: "Up to 1,800 Pa (7.2 in. wg)",
      coolingCapacity: "4.0 TR to 140 TR (Chilled Water / DX Coil)",
      casingConstruction: "25mm / 50mm Double-Skin PUF Injected (40 kg/m³) with Thermal Break Profile",
      filtration: "EU4 Pre-Filter + EU7/EU9 Fine Filter + Carbon / HEPA Optional",
      coilSpecs: "6-Row / 8-Row Copper Tubes with Hydrophilic Fins",
      driveType: "Direct-Drive EC Plug Fan / V-Belt Centrifugal",
      motorRating: "2.2 kW to 75 kW (IE3 / IE4 / EC High Efficiency)",
      operatingTemp: "-10°C to +55°C Ambient",
      standards: ["Fresh Air Ventilation Design", "Thermal Break Construction", "Enthalpy Energy Recovery"]
    },
    keyFeatures: [
      "100% Outdoor air conditioning with integrated rotary total enthalpy heat recovery wheel",
      "Multi-stage filtration tracks accommodating EU4 Pre, EU7/EU9 Microvee, and VOC chemical filters",
      "Thermal-Break extruded aluminum profile with 25mm/50mm injected PUF insulation (40 kg/m³)",
      "Deep 6-row / 8-row chilled water or DX cooling coils for intensive dehumidification",
      "Energy-efficient direct-drive backward curved plug fan with variable speed EC motor",
      "Acoustically lined casing ensuring whisper-quiet sound attenuation below 54 dBA"
    ],
    applications: [
      "Commercial Office Complexes & IT Parks (Fresh Air Ventilation Standards)",
      "Hospitals, Surgical Theaters & Healthcare Isolation Wards",
      "Pharmaceutical Formulations & Cleanroom Conditioning",
      "Luxury Hotels, Banquet Halls & Convention Centers",
      "Educational Campuses & High-Occupancy Auditoriums"
    ],
    aerodynamicHighlights: [
      {
        title: "Enthalpy Energy Recovery Wheel",
        description: "Transfers sensible and latent heat between exhaust and outdoor fresh air streams, reducing chiller plant tonnage by up to 35%."
      },
      {
        title: "Deep Dehumidification Coil Track",
        description: "Engineered high face-velocity cooling coils achieve deep moisture extraction for precise indoor relative humidity control."
      }
    ],
    customOptions: [
      { title: "Energy Recovery", description: "Rotary total enthalpy wheel, sensible heat wheel, or run-around coil loop.", badge: "Enthalpy Wheel" },
      { title: "Filtration Grade", description: "EU4 Pre + EU7/EU9 Fine + Chemical Gas-Phase Carbon or Terminal HEPA.", badge: "EU4 to HEPA" },
      { title: "Cooling & Heating", description: "Chilled Water coil, DX refrigerant coil, hot water coil, or electric heater bank.", badge: "CW / DX / Heat" },
      { title: "Bypass Dampers", description: "Modulating face & bypass dampers for economizer free-cooling operation.", badge: "Economizer" }
    ]
  },
  {
    id: "prod-cabinet-exhaust",
    slug: "cabinet-exhaust-unit",
    aliases: ["cabnet-exhaust-unit", "cabinet-exhaust", "cabnet-exhaust", "cabinet-exhaust-fan", "cabinet-fans", "inline-cabinet-unit"],
    name: "Cabinet Exhaust Unit",
    category: "Ventilation & Exhaust Systems",
    subCategory: "Acoustic In-Line Box Series",
    tagline: "Sound-attenuated in-line double-skin cabinet exhaust units for commercial and industrial ventilation.",
    shortDescription: "Heavy-duty acoustic cabinet exhaust fans engineered with double-inlet centrifugal DIDW wheels, internal sound-absorbing acoustic lining, and multi-position inlet/outlet spigots.",
    fullDescription: "EUROCON Cabinet Exhaust Units are ultra-quiet, enclosed in-line extraction systems tailored for commercial kitchen hood exhaust, laboratory fume clearance, multi-story bathroom exhaust, and factory ventilation. Fabricated with a robust extruded aluminum pentapost frame and double-skin acoustic panels lined with high-density rockwool / PUF insulation, Eurocon Cabinet Exhaust Units provide powerful extraction while operating at whisper-quiet sound levels.",
    heroBadge: "Acoustic Double Skin & Low Noise",
    image: "/images/products/cabinet-exhaust.png",
    gallery: [
      "/images/products/cabinet-exhaust.png"
    ],
    cfdImage: "/images/products/cfd-cabinet-exhaust.jpg",
    schematicSvgType: "cabinetexhaust",
    specs: {
      airflowRange: "500 to 38,000 CFM (850 to 64,500 m³/h)",
      staticPressure: "Up to 1,400 Pa (5.6 in. wg)",
      noiseLevel: "34 dBA to 56 dBA @ 1.5m",
      driveType: "Direct-Drive Multi-Speed / V-Belt Driven Centrifugal DIDW Blower",
      motorRating: "0.37 kW to 30 kW (Class F / Class H High-Temp Rated)",
      operatingTemp: "Continuous up to +70°C (Emergency smoke options up to 250°C / 2 hrs)",
      casingConstruction: "25mm Double-Skin Acoustic Insulated Panels with Internal Neoprene Gaskets",
      standards: ["Acoustic Sound Attenuated", "High-Temp Fire Smoke Exhaust", "Heavy-Duty Fire Rated Construction"]
    },
    keyFeatures: [
      "Acoustically lined double-skin panels with high-density mineral wool absorbing low and high-frequency blower noise",
      "Forward or backward curved double-inlet double-width (DIDW) dynamically balanced centrifugal impellers",
      "Flexible multi-orientation discharge configuration (Top discharge, Horizontal inline, or Side outlet)",
      "Motor mounted outside or inside airflow stream depending on grease/smoke temperature requirements",
      "Inspectable quick-access door panels with ergonomic cam latches for rapid cleaning and belt adjustment",
      "Integrated grease-drain port and slope for commercial kitchen extraction"
    ],
    applications: [
      "Commercial Kitchen Canopy Hood Fume & Grease Extraction",
      "Multi-Story Hotel, Hospital & Residential Toilet Exhaust Systems",
      "Industrial Process Degreasing & Solvent Vapor Exhaust",
      "Underground Basement & Carpark General Exhaust Networks",
      "Laboratory Fume Hood & Chemical Cabinet Ventilation"
    ],
    aerodynamicHighlights: [
      {
        title: "Acoustic Attenuation Baffle",
        description: "Internal double-skin acoustic lining damps casing breakout noise by up to 14 dBA compared to single-skin fans."
      },
      {
        title: "Low Turbulence Scroll Design",
        description: "Optimized scroll expansion delivers maximum static regain from high-velocity discharge air, cutting motor power by 12%."
      }
    ],
    customOptions: [
      { title: "Drive Arrangement", description: "Belt-driven with external motor (kitchen hood rated) or compact direct-drive.", badge: "Internal / External" },
      { title: "Insulation Spec", description: "25mm polyurethane foam (PUF) or 50mm non-combustible high-density rockwool.", badge: "PUF / Rockwool" },
      { title: "Inlet/Outlet Spigots", description: "Circular spigots with rubber lip seals or rectangular flange connections.", badge: "Round / Square" },
      { title: "Grease Drain", description: "Bottom sloped SS drain tray with 1-inch BSP brass plug for kitchen grease extraction.", badge: "Kitchen Spec" }
    ]
  },
  {
    id: "prod-scrubber-systems",
    slug: "scrubber-systems",
    aliases: ["scrubber-dry-and-wet", "dry-and-wet-scrubber", "industrial-scrubbers", "wet-scrubber", "dry-scrubber", "scrubbers"],
    name: "Scrubber Dry & Wet",
    category: "Pollution Control Systems",
    subCategory: "Pollution Control & Fume Treatment",
    tagline: "High-efficiency wet packed-bed & dry chemical scrubber systems for industrial fumes, acids, and VOC emissions.",
    shortDescription: "Industrial Wet and Dry Air Scrubber systems engineered with corrosion-resistant PP/FRP/SS casings, multi-tier packed beds, spray headers, and activated carbon stages for 99%+ gas absorption.",
    fullDescription: "EUROCON Industrial Air Scrubbing Systems utilize advanced mass-transfer packed columns, high-energy venturi nozzles, and chemical neutralizing spray headers to scrub hazardous gaseous pollutants from industrial exhausts. Available in Wet Scrubber configurations (with Tellerette packing and multi-tier spray headers) and Dry Scrubber configurations (with impregnated activated carbon and chemisorbent media), Eurocon Scrubbers neutralize acidic gases (SOx, NOx, HCl, Cl2) and VOCs with up to 99.5% efficiency.",
    heroBadge: "99.5% Gas Absorption Efficiency",
    image: "/images/products/wet-scrubber.png",
    gallery: [
      "/images/products/wet-scrubber.png"
    ],
    schematicSvgType: "scrubber",
    specs: {
      airflowRange: "1,000 to 40,000 CFM (1,700 to 68,000 m³/h)",
      staticPressure: "Up to 2,000 Pa",
      impellerDiameter: "Tower Diameters: 600 mm to 4,200 mm custom modular",
      driveType: "Corrosion-resistant PP/FRP centrifugal induction blower",
      motorRating: "Pump & Fan ratings tailored from 2.2 kW to 75 kW",
      operatingTemp: "Up to 120°C (Special thermal PP/PVDF resins available)",
      standards: ["High Mist Elimination Efficiency", "Industrial Acid Resistant", "Chemical Grade Dual Laminate"]
    },
    keyFeatures: [
      "Dual technology: Wet packed-bed absorption column or dry chemical adsorbent media stage",
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
      "Foundry, Smelting & Metal Finishing Particulate Separation"
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
    ],
    customOptions: [
      { title: "Configuration", description: "Wet packed-bed vertical tower, horizontal crossflow, or dry chemisorbent carbon bed.", badge: "Wet / Dry" },
      { title: "Material of Construction", description: "PP, PP+FRP, PVDF, or SS316L for high-temperature and extreme chemical conditions.", badge: "PP / FRP / SS" },
      { title: "Dosing Skid", description: "Automatic chemical dosing pumps with integrated digital pH transmitter and PLC controller.", badge: "Auto Dosing" },
      { title: "Mist Elimination", description: "Chevron blade profile or knitted wire mesh pad for sub-micron mist capture.", badge: "Demister" }
    ]
  },
  {
    id: "prod-cabinet-inline-unit",
    slug: "cabinet-inline-unit",
    aliases: ["cabinet-inline-fan", "inline-unit", "inline-fans", "cabinet-inline", "inline-cabinet"],
    name: "Cabinet Inline Unit",
    category: "Ventilation & Exhaust Systems",
    subCategory: "In-Line Acoustic Duct Blower",
    tagline: "Compact acoustic double-skin in-line cabinet fans engineered for whisper-quiet duct boosting and fresh air supply.",
    shortDescription: "Galvanized double-skin Cabinet Inline Units engineered with internal acoustic insulation, backward/forward curved blowers, and inline rectangular flanges for space-saving ceiling and duct installations.",
    fullDescription: "EUROCON Cabinet Inline Units are engineered for in-duct ventilation, continuous fresh air supply, and quiet exhaust in commercial complexes, hotels, hospitals, and educational facilities. Constructed with galvanized steel double-skin insulated panels that dampen acoustic breakout to under 42 dBA, Eurocon Cabinet Inline Units feature inspectable side access panels, external electrical terminal boxes, and aerodynamically optimized impellers capable of overcoming high duct static pressures while maintaining ultra-low energy consumption.",
    heroBadge: "Compact Acoustic In-Line",
    image: "/images/products/cabinet-inline-unit.png",
    gallery: [
      "/images/products/cabinet-inline-unit.png"
    ],
    schematicSvgType: "inline",
    specs: {
      airflowRange: "500 to 25,000 CFM (850 to 42,500 m³/h)",
      staticPressure: "Up to 1,200 Pa (4.8 in. wg)",
      noiseLevel: "36 dBA to 52 dBA @ 1.5m",
      driveType: "Direct-Drive EC Motor / Belt Drive DIDW Blower",
      motorRating: "0.37 kW to 18.5 kW, Class F / IP55 (IE3/IE4)",
      operatingTemp: "-20°C to +60°C Continuous",
      casingConstruction: "Galvanized Sheet Steel Double-Skin with Acoustic Insulation",
      standards: ["Low-Profile In-Line Design", "Acoustically Insulated", "Dynamic Balancing"]
    },
    keyFeatures: [
      "Compact rectangular in-line configuration fitting easily within shallow false ceiling spaces",
      "Double-skin galvanized steel casing with internal acoustic glass wool lining for silent operation",
      "Dynamically balanced forward or backward curved centrifugal impellers for high aerodynamic efficiency",
      "Removable side service access panels allowing easy motor and impeller inspection without dismantling ductwork",
      "External IP55 electrical junction box for simple wiring and maintenance",
      "Optional speed modulation via 0-10V EC motor control or multi-tap induction motors"
    ],
    applications: [
      "Commercial Office False Ceiling Supply & Return Booster Fans",
      "Hotel Guest Room & Corridor Ventilation Networks",
      "School Classrooms, Auditoriums & Library Quiet Zones",
      "Hospital Ward & Clinical Consultation Room Exhaust",
      "Retail Stores, Showrooms & Gym Fresh Air Induction"
    ],
    aerodynamicHighlights: [
      {
        title: "Direct In-Line Flow Path",
        description: "Straight-through airflow geometry eliminates 90-degree bend losses, reducing static pressure drops by up to 22%."
      },
      {
        title: "Acoustic Internal Lining",
        description: "Internal sound-absorbing perforated skin absorbs blade-pass frequency noise, delivering whisper-quiet sound levels."
      }
    ],
    customOptions: [
      { title: "Motor Technology", description: "Direct-drive brushless EC motor or standard multi-speed AC motor.", badge: "EC / AC" },
      { title: "Filter Section", description: "Integrated slide-in EU4 / EU7 filter cassette for fresh air filtration.", badge: "Filter Track" },
      { title: "Acoustic Casing", description: "Standard 25mm double-skin acoustic lining or heavy-duty 50mm PUF casing.", badge: "Acoustic Box" },
      { title: "Mounting Orientation", description: "Horizontal ceiling suspended or vertical wall mounted configurations.", badge: "Ceiling / Wall" }
    ]
  }
];

export const INDUSTRIES_DATA: Industry[] = [
  {
    id: "ind-commercial",
    name: "Commercial & Corporate Towers",
    code: "COM-01",
    tagline: "Acoustic comfort, high IAQ and energy-efficient climate distribution.",
    description: "Modern commercial headquarters and high-rise office towers demand whisper-quiet ventilation, ultra-reliable fresh air delivery, and intelligent demand-controlled HVAC integration for high-performance energy-efficient building standards.",
    keyChallenges: [
      "Strict noise criteria (NC 35 or lower) across occupied tenant zones",
      "Energy costs from 24/7 continuous air handling and fresh air pressurization",
      "Fire and smoke compartmentalization engineering guidelines"
    ],
    solutionsProvided: [
      "Double-skin acoustic cabinet inline fans with EC modulation",
      "Sealed pre-insulated precision ducting networks",
      "Dedicated outdoor air systems (DOAS) with energy recovery wheels",
      "Emergency stairwell & elevator shaft fire pressurization blowers"
    ],
    recommendedProducts: [
      "Cabinet Inline Unit",
      "Cabinet Exhaust Unit",
      "Air Handling Unit (AHU)"
    ],
    stats: { label: "Energy Reduction", value: "Up to 28%" },
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
    accentColor: "#010A6D"
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
      "Fan Section",
      "Air Washer",
      "Scrubber Dry & Wet"
    ],
    stats: { label: "Shopfloor Air Turnover", value: "18+ ACH" },
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80",
    accentColor: "#010A6D"
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
      "Spark-resistant industrial centrifugal blowers",
      "Laminar flow supply plenums with micro-filtration",
      "Thermal oxidizer / scrubber interface ducting",
      "Underfloor downdraft exhaust extraction networks"
    ],
    recommendedProducts: [
      "Fan Section",
      "TFA (Treated Fresh Air Unit)",
      "Scrubber Dry & Wet"
    ],
    stats: { label: "Paint Booth Air Uniformity", value: "99.4%" },
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1000&q=80",
    accentColor: "#010A6D"
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
      "Heavy-duty fire safety systems requiring 300°C / 400°C high-temperature ventilation"
    ],
    solutionsProvided: [
      "High-thrust reversible impulse and tunnel jet fans",
      "Large-diameter station trackway exhaust fans (OTEs/UTEs)",
      "Overpressure relief dampers and acoustic splitters",
      "Central SCADA-integrated emergency smoke control systems"
    ],
    recommendedProducts: [
      "Cabinet Exhaust Unit",
      "TFA (Treated Fresh Air Unit)",
      "Cabinet Exhaust Unit"
    ],
    stats: { label: "Emergency Thrust", value: "Up to 120 N" },
    image: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=1000&q=80",
    accentColor: "#010A6D"
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
      "Cabinet Inline Unit",
      "Air Handling Unit (AHU)",
      "Fan Section"
    ],
    stats: { label: "PUE Efficiency Gain", value: "14% Avg" },
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80",
    accentColor: "#010A6D"
  },
  {
    id: "ind-pharma",
    name: "Pharma, Biotech & Cleanrooms",
    code: "PHA-06",
    tagline: "HEPA-integrated air handling and positive pressure cascade control.",
    description: "Pharmaceutical cleanrooms and biotech labs demand strict air classification, precise relative humidity control, and positive/negative room pressure cascades to prevent cross-contamination.",
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
      "Fan Section",
      "Scrubber Dry & Wet",
      "Air Handling Unit (AHU)"
    ],
    stats: { label: "Cleanroom Class Support", value: "Class 100 – 100K" },
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
      "Air Washer",
      "TFA (Treated Fresh Air Unit)",
      "Cabinet Inline Unit"
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
      "Cabinet Exhaust Unit",
      "Cabinet Exhaust Unit",
      "Fan Section"
    ],
    stats: { label: "Passenger IAQ Rating", value: "Class A" },
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=80",
    accentColor: "#010A6D"
  }
];

export const QUALITY_STEPS: QualityStep[] = [
  {
    step: "01",
    code: "CFD & CAD",
    title: "Aerodynamic Simulation & Computational Modeling",
    description: "Every impeller geometry and casing profile undergoes extensive Computational Fluid Dynamics (CFD) simulation to eliminate boundary separation, turbulence, and unnecessary vortex drag.",
    methodology: "ANSYS Fluent 3D Navier-Stokes numerical airflow modeling",
    complianceStandard: "Aerodynamic Simulation Rig Protocols",
    iconName: "Cpu"
  },
  {
    step: "02",
    code: "MAT-QC",
    title: "Raw Material Metallurgy & Spectro Analysis",
    description: "Incoming sheet steel, structural channels, aluminum ingots, and stainless alloys are inspected and evaluated for tensile strength, elongation, and zinc coating thickness (GSM) before cutting.",
    methodology: "Optical emission spectroscopy & ultrasonic flaw detection",
    complianceStandard: "Industrial Metallurgical & Galvanizing Norms",
    iconName: "CheckCircle2"
  },
  {
    step: "03",
    code: "CNC-MFG",
    title: "Precision CNC Laser Cutting & Automated Forming",
    description: "Components are cut on high-precision fiber laser tables and formed on multi-axis CNC press brakes, ensuring microscopic tolerances and perfect modular interchangeability.",
    methodology: "Fiber Laser 0.05mm tolerance nesting and robotic roll forming",
    complianceStandard: "Precision Engineering Standards",
    iconName: "Settings"
  },
  {
    step: "04",
    code: "DYN-BAL",
    title: "Dual-Plane Digital Dynamic Balancing",
    description: "Every assembled impeller undergoes dual-plane digital dynamic balancing on calibrated computerized balancing machines to ensure whisper-quiet rotation and extended bearing longevity.",
    methodology: "Two-plane dynamic balance correction at operating RPMs",
    complianceStandard: "Precision Dual-Plane Balance Grade",
    iconName: "Activity"
  },
  {
    step: "05",
    code: "RIG-TEST",
    title: "Full-Scale Aerodynamic & Acoustic Chamber Testing",
    description: "Finished fans are mounted onto automated multi-nozzle chamber test rigs to measure real CFM vs Static Pressure curves, motor power draw, and octave-band sound power levels.",
    methodology: "Multi-nozzle aerodynamic test chamber with precision pressure transducers",
    complianceStandard: "Airflow & Acoustic Laboratory Standards",
    iconName: "Sliders"
  },
  {
    step: "06",
    code: "QC-DISP",
    title: "Pre-Dispatch Inspection & Assembly Sign-Off",
    description: "Before release, a comprehensive quality inspection confirms mechanical assembly, thermal isolation integrity, and dimensional tolerances before secure crating.",
    methodology: "Full mechanical, electrical, and dimensional sign-off report with traceable serial identifier",
    complianceStandard: "Factory Dispatch Quality Inspection Protocol",
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
      "High-Temp F300 Dual-Speed Induction Jet Fans (100% Reversible)",
      "High-Capacity Trackway Exhaust (OTE) Heavy Duty Axial Blowers",
      "Aerodynamic Acoustic Silencer Splitter Banks"
    ],
    resultsAchieved: [
      "Rapid life-safety smoke clearance validation within 180 seconds during simulated fire trials",
      "Achieved station platform acoustic levels under 58 dBA during peak train transit"
    ],
    image: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "proj-auto-paint",
    title: "Automotive Paint Shop Cleanroom & VOC Scrubber Network",
    category: "Automotive & Heavy Mfg",
    location: "Automotive Manufacturing Corridor, Western Hub",
    scope: "Turnkey supply of spark-resistant centrifugal supply fans, laminar clean air plenums, and packed-bed acid fume scrubbing systems for a new robotic paint line.",
    airflowCapacity: "920,000 CFM Air Handling & VOC Neutralization",
    solutionsInstalled: [
      "Spark-Resistant Centrifugal Fans with Backward Inclined Impellers",
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
    scope: "Design and fabrication of high-static EC plug fan arrays, acoustic discharge plenums, and sealed underfloor distribution ducting for 24MW critical IT load.",
    airflowCapacity: "1,450,000 CFM Precision Air Delivery",
    solutionsInstalled: [
      "EC-Driven Intelligent Variable Speed Cabinet Fans",
      "Heavy-Gauge Zinc-Coated Factory Pre-Fabricated Ducting",
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
      "Enabled project to achieve peak green building energy efficiency benchmarks",
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
      "Achieved sterile cleanroom balance with zero airflow validation non-conformances",
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
    title: "Engineered Life-Safety Reliability",
    description: "Our smoke management systems and high-temperature fans are engineered according to stringent fire-safety ventilation standards to ensure dependable emergency operation.",
    stat: "400°C / 2h",
    statLabel: "Fire-Rated High-Temperature Rating"
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
    question: "What standards and specifications do Eurocon System LLP products comply with?",
    answer: "Our air management equipment is designed and manufactured with precision engineering tolerances to ensure optimal aerodynamic performance, low acoustic signatures, dependable fire smoke exhaust, and rugged mechanical durability in accordance with national and international engineering guidelines."
  },
  {
    question: "Can Eurocon custom-engineer fans for corrosive or hazardous chemical environments?",
    answer: "Yes. We engineer customized industrial solutions utilizing SS304/SS316 stainless steel, Polypropylene/FRP dual laminates, and spark-resistant aluminum alloys complying with spark-resistant construction guidelines for hazardous operating environments."
  },
  {
    question: "How do Cabinet Inline and Exhaust units compare to open ventilation fans?",
    answer: "Eurocon double-skin acoustic cabinet units enclose the blower assembly within sound-absorbing insulated casing. This reduces breakout noise to under 42 dBA, allows direct inline duct mounting in shallow ceiling voids or plant rooms, and eliminates noise transfer into occupied spaces."
  },
  {
    question: "What is the typical lead time for custom engineered AHUs, TFAs, and Air Washers?",
    answer: "Standard modular fan sections and cabinet inline units typically ship within 1 to 2 weeks. Custom-engineered double-skin AHUs, Treated Fresh Air (TFA) units with heat recovery wheels, industrial air washers, and wet scrubber systems are manufactured and dispatched within 3 to 5 weeks depending on project specifications."
  },
  {
    question: "Does Eurocon offer on-site commissioning and air balancing services?",
    answer: "Yes. Our qualified application engineering team provides comprehensive on-site support, including duct air balancing (TAB), vibration FFT spectrum analysis, on-site dynamic balancing, and acoustic sound level analysis to ensure design parameters match real-world operation."
  }
];

export const CORE_EUROCON_NAV_PRODUCTS = [
  {
    name: "Fan Section",
    slug: "fan-section",
    shortName: "Fan Section",
    category: "Plenum & Blower Module",
    desc: "Direct-drive fans & DIDW blower modules with dynamic balance",
    href: "/products/fan-section",
    schematicSvgType: "fansection" as const,
    badge: "Precision Balanced"
  },
  {
    name: "Air Washer",
    slug: "airwashers",
    shortName: "Air Washer",
    category: "Evaporative Cooling",
    desc: "Industrial Celdek pad air washers with SS304 sump & 90% saturation",
    href: "/products/airwashers",
    schematicSvgType: "airwasher" as const,
    badge: "90% Saturation"
  },
  {
    name: "Air Handling Unit (AHU)",
    slug: "ahu",
    shortName: "AHU",
    category: "Modular Double-Skin AHU",
    desc: "Thermal-break double-skin AHU with cooling coils & plug fan",
    href: "/products/ahu",
    schematicSvgType: "ahu" as const,
    badge: "Thermal Break Design"
  },
  {
    name: "FCU (Fan Coil Unit)",
    slug: "fcu",
    shortName: "FCU",
    category: "Ceiling Concealed",
    desc: "Ultra-slim 220mm chilled water & DX fan coils with 28 dBA acoustics",
    href: "/products/fcu",
    schematicSvgType: "fcu" as const,
    badge: "Ultra-Slim 220mm"
  },
  {
    name: "TFA (Treated Fresh Air Unit)",
    slug: "tfa",
    shortName: "TFA Unit",
    category: "Dedicated Outdoor Air",
    desc: "100% Outdoor air unit with total enthalpy recovery wheel & multi-stage filtration",
    href: "/products/tfa",
    schematicSvgType: "ahu" as const,
    badge: "100% Fresh Air"
  },
  {
    name: "Cabinet Exhaust Unit",
    slug: "cabinet-exhaust-unit",
    shortName: "Cabinet Exhaust",
    category: "Acoustic Box Blower",
    desc: "Double-skin sound-attenuated box fans for kitchen & fume extraction",
    href: "/products/cabinet-exhaust-unit",
    schematicSvgType: "cabinetexhaust" as const,
    badge: "Low Noise Box"
  },
  {
    name: "Scrubber Dry & Wet",
    slug: "scrubber-systems",
    shortName: "Scrubber Unit",
    category: "Pollution Control",
    desc: "Industrial packed-bed wet & activated carbon dry scrubbers for fume neutralization",
    href: "/products/scrubber-systems",
    schematicSvgType: "scrubber" as const,
    badge: "99% Neutralization"
  },
  {
    name: "Cabinet Inline Unit",
    slug: "cabinet-inline-unit",
    shortName: "Cabinet Inline",
    category: "In-Line Duct Blower",
    desc: "Compact double-skin in-line acoustic cabinet units for ducted air boosting",
    href: "/products/cabinet-inline-unit",
    schematicSvgType: "inline" as const,
    badge: "Acoustic In-Line"
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  const normalizedSlug = slug.toLowerCase().trim();
  return PRODUCTS_DATA.find((p) => {
    if (p.slug.toLowerCase() === normalizedSlug) return true;
    if (p.id.toLowerCase() === normalizedSlug || p.id.toLowerCase() === `prod-${normalizedSlug}`) return true;
    if (p.aliases && p.aliases.some((alias) => alias.toLowerCase() === normalizedSlug)) return true;
    return false;
  });
}

export function getAllProductSlugs(): string[] {
  const slugs: string[] = [];
  PRODUCTS_DATA.forEach((p) => {
    slugs.push(p.slug);
    if (p.aliases) {
      slugs.push(...p.aliases);
    }
  });
  return Array.from(new Set(slugs));
}

