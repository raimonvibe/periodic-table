export interface EarthItem {
  name: string;
  use: string;
}

export interface Element {
  name: string;
  symbol: string;
  atomicNumber: number;
  properties: {
    atomicMass: number;
    category: string;
    group?: number | null;
    period?: number;
    block?: string;
    electronConfiguration?: string;
    electronegativity?: number | null;
    atomicRadius?: number | null;
    ionizationEnergy?: number | null;
    density?: number | null;
    meltingPoint?: number | null;
    boilingPoint?: number | null;
    discoveredBy?: string;
    yearDiscovered?: number | null;
  };
  earthItems: EarthItem[];
}

export const elements: Element[] = [
  {
    name: "Hydrogen",
    symbol: "H",
    atomicNumber: 1,
    properties: {
      atomicMass: 1.008,
      category: "nonmetal",
      group: 1,
      period: 1,
      block: "s",
      electronConfiguration: "1s¹",
      electronegativity: 2.2,
      atomicRadius: 120,
      ionizationEnergy: 13.598,
      density: 0.00008988,
      meltingPoint: -259.16,
      boilingPoint: -252.879,
      discoveredBy: "Henry Cavendish",
      yearDiscovered: 1766
    },
    earthItems: [
      { name: "Water", use: "Essential component of all living organisms" },
      { name: "Fossil Fuels", use: "Energy production" },
      { name: "Hydrogen Fuel Cells", use: "Clean energy technology" }
    ]
  },
  {
    name: "Helium",
    symbol: "He",
    atomicNumber: 2,
    properties: {
      atomicMass: 4.0026,
      category: "noble gas",
      group: 18,
      period: 1,
      block: "s",
      electronConfiguration: "1s²",
      electronegativity: null,
      atomicRadius: 140,
      ionizationEnergy: 24.587,
      density: 0.0001785,
      meltingPoint: -272.2,
      boilingPoint: -268.93,
      discoveredBy: "Pierre Janssen, Norman Lockyer",
      yearDiscovered: 1868
    },
    earthItems: [
      { name: "Balloons", use: "Lighter than air applications" },
      { name: "MRI Machines", use: "Cooling superconducting magnets" },
      { name: "Deep-sea Diving", use: "Mixed with oxygen for breathing" }
    ]
  },
  {
    name: "Lithium",
    symbol: "Li",
    atomicNumber: 3,
    properties: {
      atomicMass: 6.94,
      category: "alkali metal",
      group: 1,
      period: 2,
      block: "s",
      electronConfiguration: "[He]2s¹",
      electronegativity: 0.98,
      atomicRadius: 182,
      ionizationEnergy: 5.392,
      density: 0.534,
      meltingPoint: 180.54,
      boilingPoint: 1342,
      discoveredBy: "Johan August Arfwedson",
      yearDiscovered: 1817
    },
    earthItems: [
      { name: "Batteries", use: "Energy storage in electronics" },
      { name: "Medication", use: "Treatment for bipolar disorder" },
      { name: "Aerospace", use: "Alloys for aircraft construction" }
    ]
  },
  {
    name: "Beryllium",
    symbol: "Be",
    atomicNumber: 4,
    properties: {
      atomicMass: 9.0122,
      category: "alkaline earth metal",
      group: 2,
      period: 2,
      block: "s",
      electronConfiguration: "[He]2s²",
      electronegativity: 1.57,
      atomicRadius: 112,
      ionizationEnergy: 9.323,
      density: 1.85,
      meltingPoint: 1287,
      boilingPoint: 2470,
      discoveredBy: "Louis Nicolas Vauquelin",
      yearDiscovered: 1798
    },
    earthItems: [
      { name: "Aerospace Components", use: "Lightweight structural materials" },
      { name: "X-ray Equipment", use: "Windows for X-ray tubes" },
      { name: "Nuclear Reactors", use: "Neutron reflector and moderator" }
    ]
  },
  {
    name: "Boron",
    symbol: "B",
    atomicNumber: 5,
    properties: {
      atomicMass: 10.81,
      category: "metalloid",
      group: 13,
      period: 2,
      block: "p",
      electronConfiguration: "[He]2s²2p¹",
      electronegativity: 2.04,
      atomicRadius: 98,
      ionizationEnergy: 8.298,
      density: 2.34,
      meltingPoint: 2076,
      boilingPoint: 3927,
      discoveredBy: "Joseph Louis Gay-Lussac, Louis Jacques Thénard",
      yearDiscovered: 1808
    },
    earthItems: [
      { name: "Borax", use: "Household cleaning products" },
      { name: "Borosilicate Glass", use: "Heat-resistant glassware" },
      { name: "Semiconductors", use: "Electronics manufacturing" }
    ]
  },
  {
    name: "Carbon",
    symbol: "C",
    atomicNumber: 6,
    properties: {
      atomicMass: 12.011,
      category: "nonmetal",
      group: 14,
      period: 2,
      block: "p",
      electronConfiguration: "[He]2s²2p²",
      electronegativity: 2.55,
      atomicRadius: 170,
      ionizationEnergy: 11.260,
      density: 2.267,
      meltingPoint: 3550,
      boilingPoint: 4027,
      discoveredBy: "Ancient",
      yearDiscovered: null
    },
    earthItems: [
      { name: "Diamond", use: "Jewelry and industrial cutting" },
      { name: "Graphite", use: "Pencils and lubricants" },
      { name: "Coal", use: "Fuel for energy production" },
      { name: "Organic Compounds", use: "Building blocks of life" }
    ]
  },
  {
    name: "Nitrogen",
    symbol: "N",
    atomicNumber: 7,
    properties: {
      atomicMass: 14.007,
      category: "nonmetal",
      group: 15,
      period: 2,
      block: "p",
      electronConfiguration: "[He]2s²2p³",
      electronegativity: 3.04,
      atomicRadius: 155,
      ionizationEnergy: 14.534,
      density: 0.001251,
      meltingPoint: -210.1,
      boilingPoint: -195.79,
      discoveredBy: "Daniel Rutherford",
      yearDiscovered: 1772
    },
    earthItems: [
      { name: "Air", use: "Major component of Earth's atmosphere" },
      { name: "Fertilizers", use: "Agricultural productivity" },
      { name: "Liquid Nitrogen", use: "Cryogenic applications" }
    ]
  },
  {
    name: "Oxygen",
    symbol: "O",
    atomicNumber: 8,
    properties: {
      atomicMass: 15.999,
      category: "nonmetal",
      group: 16,
      period: 2,
      block: "p",
      electronConfiguration: "[He]2s²2p⁴",
      electronegativity: 3.44,
      atomicRadius: 152,
      ionizationEnergy: 13.618,
      density: 0.001429,
      meltingPoint: -218.79,
      boilingPoint: -182.962,
      discoveredBy: "Carl Wilhelm Scheele, Joseph Priestley",
      yearDiscovered: 1774
    },
    earthItems: [
      { name: "Air", use: "Essential for respiration" },
      { name: "Water", use: "Vital component for all life" },
      { name: "Oxides", use: "Compounds in rocks and minerals" }
    ]
  },
  {
    name: "Fluorine",
    symbol: "F",
    atomicNumber: 9,
    properties: {
      atomicMass: 18.998,
      category: "halogen",
      group: 17,
      period: 2,
      block: "p",
      electronConfiguration: "[He]2s²2p⁵",
      electronegativity: 3.98,
      atomicRadius: 135,
      ionizationEnergy: 17.423,
      density: 0.001696,
      meltingPoint: -219.67,
      boilingPoint: -188.12,
      discoveredBy: "Henri Moissan",
      yearDiscovered: 1886
    },
    earthItems: [
      { name: "Toothpaste", use: "Cavity prevention" },
      { name: "Teflon", use: "Non-stick cookware coating" },
      { name: "Refrigerants", use: "Cooling systems" }
    ]
  },
  {
    name: "Neon",
    symbol: "Ne",
    atomicNumber: 10,
    properties: {
      atomicMass: 20.180,
      category: "noble gas",
      group: 18,
      period: 2,
      block: "p",
      electronConfiguration: "[He]2s²2p⁶",
      electronegativity: null,
      atomicRadius: 154,
      ionizationEnergy: 21.565,
      density: 0.0008999,
      meltingPoint: -248.59,
      boilingPoint: -246.08,
      discoveredBy: "William Ramsay, Morris Travers",
      yearDiscovered: 1898
    },
    earthItems: [
      { name: "Neon Signs", use: "Advertising and decoration" },
      { name: "Cryogenics", use: "Low-temperature research" },
      { name: "Lasers", use: "Medical and industrial applications" }
    ]
  },
  {
    name: "Sodium",
    symbol: "Na",
    atomicNumber: 11,
    properties: {
      atomicMass: 22.990,
      category: "alkali metal",
      group: 1,
      period: 3,
      block: "s",
      electronConfiguration: "[Ne]3s¹",
      electronegativity: 0.93,
      atomicRadius: 227,
      ionizationEnergy: 5.139,
      density: 0.971,
      meltingPoint: 97.72,
      boilingPoint: 883,
      discoveredBy: "Humphry Davy",
      yearDiscovered: 1807
    },
    earthItems: [
      { name: "Table Salt", use: "Food seasoning and preservation" },
      { name: "Street Lights", use: "Sodium vapor lamps" },
      { name: "Soap", use: "Cleaning products" }
    ]
  },
  {
    name: "Magnesium",
    symbol: "Mg",
    atomicNumber: 12,
    properties: {
      atomicMass: 24.305,
      category: "alkaline earth metal",
      group: 2,
      period: 3,
      block: "s",
      electronConfiguration: "[Ne]3s²",
      electronegativity: 1.31,
      atomicRadius: 173,
      ionizationEnergy: 7.646,
      density: 1.738,
      meltingPoint: 650,
      boilingPoint: 1090,
      discoveredBy: "Joseph Black",
      yearDiscovered: 1755
    },
    earthItems: [
      { name: "Chlorophyll", use: "Photosynthesis in plants" },
      { name: "Alloys", use: "Lightweight structural materials" },
      { name: "Fireworks", use: "Bright white light production" }
    ]
  },
  {
    name: "Aluminum",
    symbol: "Al",
    atomicNumber: 13,
    properties: {
      atomicMass: 26.982,
      category: "post-transition metal",
      group: 13,
      period: 3,
      block: "p",
      electronConfiguration: "[Ne]3s²3p¹",
      electronegativity: 1.61,
      atomicRadius: 143,
      ionizationEnergy: 5.986,
      density: 2.7,
      meltingPoint: 660.32,
      boilingPoint: 2519,
      discoveredBy: "Hans Christian Ørsted",
      yearDiscovered: 1825
    },
    earthItems: [
      { name: "Cans", use: "Beverage containers" },
      { name: "Foil", use: "Food packaging" },
      { name: "Aircraft", use: "Lightweight structural components" }
    ]
  },
  {
    name: "Silicon",
    symbol: "Si",
    atomicNumber: 14,
    properties: {
      atomicMass: 28.085,
      category: "metalloid",
      group: 14,
      period: 3,
      block: "p",
      electronConfiguration: "[Ne]3s²3p²",
      electronegativity: 1.9,
      atomicRadius: 111,
      ionizationEnergy: 8.152,
      density: 2.33,
      meltingPoint: 1414,
      boilingPoint: 3265,
      discoveredBy: "Jöns Jacob Berzelius",
      yearDiscovered: 1824
    },
    earthItems: [
      { name: "Computer Chips", use: "Electronic devices" },
      { name: "Solar Panels", use: "Renewable energy generation" },
      { name: "Glass", use: "Windows and containers" }
    ]
  },
  {
    name: "Phosphorus",
    symbol: "P",
    atomicNumber: 15,
    properties: {
      atomicMass: 30.974,
      category: "nonmetal",
      group: 15,
      period: 3,
      block: "p",
      electronConfiguration: "[Ne]3s²3p³",
      electronegativity: 2.19,
      atomicRadius: 98,
      ionizationEnergy: 10.487,
      density: 1.82,
      meltingPoint: 44.15,
      boilingPoint: 280.5,
      discoveredBy: "Hennig Brand",
      yearDiscovered: 1669
    },
    earthItems: [
      { name: "Fertilizers", use: "Agricultural productivity" },
      { name: "DNA/RNA", use: "Genetic material in living organisms" },
      { name: "Matches", use: "Ignition source" }
    ]
  },
  {
    name: "Sulfur",
    symbol: "S",
    atomicNumber: 16,
    properties: {
      atomicMass: 32.06,
      category: "nonmetal",
      group: 16,
      period: 3,
      block: "p",
      electronConfiguration: "[Ne]3s²3p⁴",
      electronegativity: 2.58,
      atomicRadius: 127,
      ionizationEnergy: 10.36,
      density: 2.067,
      meltingPoint: 115.21,
      boilingPoint: 444.72,
      discoveredBy: "Ancient",
      yearDiscovered: null
    },
    earthItems: [
      { name: "Sulfuric Acid", use: "Industrial chemical production" },
      { name: "Gunpowder", use: "Explosives" },
      { name: "Vulcanized Rubber", use: "Tires and industrial products" }
    ]
  },
  {
    name: "Chlorine",
    symbol: "Cl",
    atomicNumber: 17,
    properties: {
      atomicMass: 35.45,
      category: "halogen",
      group: 17,
      period: 3,
      block: "p",
      electronConfiguration: "[Ne]3s²3p⁵",
      electronegativity: 3.16,
      atomicRadius: 175,
      ionizationEnergy: 12.968,
      density: 0.003214,
      meltingPoint: -101.5,
      boilingPoint: -34.04,
      discoveredBy: "Carl Wilhelm Scheele",
      yearDiscovered: 1774
    },
    earthItems: [
      { name: "Bleach", use: "Disinfection and cleaning" },
      { name: "PVC", use: "Plastic pipes and construction materials" },
      { name: "Swimming Pools", use: "Water purification" }
    ]
  },
  {
    name: "Argon",
    symbol: "Ar",
    atomicNumber: 18,
    properties: {
      atomicMass: 39.948,
      category: "noble gas",
      group: 18,
      period: 3,
      block: "p",
      electronConfiguration: "[Ne]3s²3p⁶",
      electronegativity: null,
      atomicRadius: 188,
      ionizationEnergy: 15.760,
      density: 0.0017837,
      meltingPoint: -189.35,
      boilingPoint: -185.85,
      discoveredBy: "Lord Rayleigh, William Ramsay",
      yearDiscovered: 1894
    },
    earthItems: [
      { name: "Light Bulbs", use: "Inert gas filling" },
      { name: "Welding", use: "Shielding gas" },
      { name: "Windows", use: "Insulation in double-paned windows" }
    ]
  },
  {
    name: "Potassium",
    symbol: "K",
    atomicNumber: 19,
    properties: {
      atomicMass: 39.098,
      category: "alkali metal",
      group: 1,
      period: 4,
      block: "s",
      electronConfiguration: "[Ar]4s¹",
      electronegativity: 0.82,
      atomicRadius: 243,
      ionizationEnergy: 4.341,
      density: 0.862,
      meltingPoint: 63.38,
      boilingPoint: 759,
      discoveredBy: "Humphry Davy",
      yearDiscovered: 1807
    },
    earthItems: [
      { name: "Fertilizers", use: "Agricultural productivity" },
      { name: "Bananas", use: "Essential nutrient in foods" },
      { name: "Soap", use: "Manufacturing of soft soaps" }
    ]
  },
  {
    name: "Calcium",
    symbol: "Ca",
    atomicNumber: 20,
    properties: {
      atomicMass: 40.078,
      category: "alkaline earth metal",
      group: 2,
      period: 4,
      block: "s",
      electronConfiguration: "[Ar]4s²",
      electronegativity: 1.0,
      atomicRadius: 194,
      ionizationEnergy: 6.113,
      density: 1.54,
      meltingPoint: 842,
      boilingPoint: 1484,
      discoveredBy: "Humphry Davy",
      yearDiscovered: 1808
    },
    earthItems: [
      { name: "Bones and Teeth", use: "Structural support in organisms" },
      { name: "Limestone", use: "Building material and cement production" },
      { name: "Milk", use: "Essential nutrient in dairy products" }
    ]
  },
  {
    name: "Scandium",
    symbol: "Sc",
    atomicNumber: 21,
    properties: {
      atomicMass: 44.956,
      category: "transition metal",
      group: 3,
      period: 4,
      block: "d",
      electronConfiguration: "[Ar]3d¹4s²",
      electronegativity: 1.36,
      atomicRadius: 184,
      ionizationEnergy: 6.561,
      density: 2.989,
      meltingPoint: 1541,
      boilingPoint: 2836,
      discoveredBy: "Lars Fredrik Nilson",
      yearDiscovered: 1879
    },
    earthItems: [
      { name: "Aerospace Alloys", use: "Lightweight high-strength materials" },
      { name: "Sports Equipment", use: "Bicycle frames and baseball bats" },
      { name: "High-Intensity Lamps", use: "Stadium lighting" }
    ]
  },
  {
    name: "Titanium",
    symbol: "Ti",
    atomicNumber: 22,
    properties: {
      atomicMass: 47.867,
      category: "transition metal",
      group: 4,
      period: 4,
      block: "d",
      electronConfiguration: "[Ar]3d²4s²",
      electronegativity: 1.54,
      atomicRadius: 176,
      ionizationEnergy: 6.828,
      density: 4.54,
      meltingPoint: 1668,
      boilingPoint: 3287,
      discoveredBy: "William Gregor",
      yearDiscovered: 1791
    },
    earthItems: [
      { name: "Aircraft Parts", use: "Lightweight structural components" },
      { name: "Medical Implants", use: "Biocompatible prosthetics" },
      { name: "White Paint", use: "Titanium dioxide pigment" }
    ]
  },
  {
    name: "Vanadium",
    symbol: "V",
    atomicNumber: 23,
    properties: {
      atomicMass: 50.942,
      category: "transition metal",
      group: 5,
      period: 4,
      block: "d",
      electronConfiguration: "[Ar]3d³4s²",
      electronegativity: 1.63,
      atomicRadius: 171,
      ionizationEnergy: 6.746,
      density: 6.11,
      meltingPoint: 1910,
      boilingPoint: 3407,
      discoveredBy: "Andrés Manuel del Río",
      yearDiscovered: 1801
    },
    earthItems: [
      { name: "Steel Alloys", use: "Strengthening agent" },
      { name: "Aerospace Components", use: "High-strength applications" },
      { name: "Catalysts", use: "Chemical manufacturing" }
    ]
  },
  {
    name: "Chromium",
    symbol: "Cr",
    atomicNumber: 24,
    properties: {
      atomicMass: 51.996,
      category: "transition metal",
      group: 6,
      period: 4,
      block: "d",
      electronConfiguration: "[Ar]3d⁵4s¹",
      electronegativity: 1.66,
      atomicRadius: 166,
      ionizationEnergy: 6.767,
      density: 7.15,
      meltingPoint: 1907,
      boilingPoint: 2671,
      discoveredBy: "Louis Nicolas Vauquelin",
      yearDiscovered: 1797
    },
    earthItems: [
      { name: "Stainless Steel", use: "Corrosion-resistant alloys" },
      { name: "Chrome Plating", use: "Decorative and protective coatings" },
      { name: "Tanning", use: "Leather production" }
    ]
  },
  {
    name: "Manganese",
    symbol: "Mn",
    atomicNumber: 25,
    properties: {
      atomicMass: 54.938,
      category: "transition metal",
      group: 7,
      period: 4,
      block: "d",
      electronConfiguration: "[Ar]3d⁵4s²",
      electronegativity: 1.55,
      atomicRadius: 161,
      ionizationEnergy: 7.434,
      density: 7.44,
      meltingPoint: 1246,
      boilingPoint: 2061,
      discoveredBy: "Carl Wilhelm Scheele, Johan Gottlieb Gahn",
      yearDiscovered: 1774
    },
    earthItems: [
      { name: "Steel", use: "Strengthening agent" },
      { name: "Batteries", use: "Alkaline batteries" },
      { name: "Fertilizers", use: "Plant nutrition supplement" }
    ]
  },
  {
    name: "Iron",
    symbol: "Fe",
    atomicNumber: 26,
    properties: {
      atomicMass: 55.845,
      category: "transition metal",
      group: 8,
      period: 4,
      block: "d",
      electronConfiguration: "[Ar]3d⁶4s²",
      electronegativity: 1.83,
      atomicRadius: 126,
      ionizationEnergy: 7.902,
      density: 7.874,
      meltingPoint: 1538,
      boilingPoint: 2861,
      discoveredBy: "Ancient",
      yearDiscovered: null
    },
    earthItems: [
      { name: "Steel", use: "Construction and manufacturing" },
      { name: "Hemoglobin", use: "Oxygen transport in blood" },
      { name: "Tools", use: "Various implements and machinery" },
      { name: "Magnets", use: "Electromagnetic applications" }
    ]
  },
  {
    name: "Cobalt",
    symbol: "Co",
    atomicNumber: 27,
    properties: {
      atomicMass: 58.933,
      category: "transition metal",
      group: 9,
      period: 4,
      block: "d",
      electronConfiguration: "[Ar]3d⁷4s²",
      electronegativity: 1.88,
      atomicRadius: 152,
      ionizationEnergy: 7.881,
      density: 8.90,
      meltingPoint: 1495,
      boilingPoint: 2927,
      discoveredBy: "Georg Brandt",
      yearDiscovered: 1735
    },
    earthItems: [
      { name: "Magnets", use: "Strong permanent magnets" },
      { name: "Lithium-ion Batteries", use: "Cathode material" },
      { name: "Paint", use: "Blue pigments" }
    ]
  },
  {
    name: "Nickel",
    symbol: "Ni",
    atomicNumber: 28,
    properties: {
      atomicMass: 58.693,
      category: "transition metal",
      group: 10,
      period: 4,
      block: "d",
      electronConfiguration: "[Ar]3d⁸4s²",
      electronegativity: 1.91,
      atomicRadius: 149,
      ionizationEnergy: 7.640,
      density: 8.908,
      meltingPoint: 1455,
      boilingPoint: 2913,
      discoveredBy: "Axel Fredrik Cronstedt",
      yearDiscovered: 1751
    },
    earthItems: [
      { name: "Coins", use: "Currency" },
      { name: "Stainless Steel", use: "Corrosion-resistant alloys" },
      { name: "Batteries", use: "Rechargeable batteries" }
    ]
  },
  {
    name: "Copper",
    symbol: "Cu",
    atomicNumber: 29,
    properties: {
      atomicMass: 63.546,
      category: "transition metal",
      group: 11,
      period: 4,
      block: "d",
      electronConfiguration: "[Ar]3d¹⁰4s¹",
      electronegativity: 1.90,
      atomicRadius: 145,
      ionizationEnergy: 7.726,
      density: 8.96,
      meltingPoint: 1084.62,
      boilingPoint: 2562,
      discoveredBy: "Ancient",
      yearDiscovered: null
    },
    earthItems: [
      { name: "Electrical Wiring", use: "Electrical conductivity" },
      { name: "Plumbing", use: "Water pipes and fixtures" },
      { name: "Coins", use: "Currency" },
      { name: "Electronics", use: "Circuit boards and components" }
    ]
  },
  {
    name: "Zinc",
    symbol: "Zn",
    atomicNumber: 30,
    properties: {
      atomicMass: 65.38,
      category: "transition metal",
      group: 12,
      period: 4,
      block: "d",
      electronConfiguration: "[Ar]3d¹⁰4s²",
      electronegativity: 1.65,
      atomicRadius: 142,
      ionizationEnergy: 9.394,
      density: 7.14,
      meltingPoint: 419.53,
      boilingPoint: 907,
      discoveredBy: "Indian metallurgists",
      yearDiscovered: 1000
    },
    earthItems: [
      { name: "Galvanized Steel", use: "Corrosion protection" },
      { name: "Batteries", use: "Dry cell batteries" },
      { name: "Sunscreen", use: "UV protection" },
      { name: "Dietary Supplements", use: "Essential mineral for health" }
    ]
  },
  {
    name: "Gallium",
    symbol: "Ga",
    atomicNumber: 31,
    properties: {
      atomicMass: 69.723,
      category: "post-transition metal",
      group: 13,
      period: 4,
      block: "p",
      electronConfiguration: "[Ar]3d¹⁰4s²4p¹",
      electronegativity: 1.81,
      atomicRadius: 136,
      ionizationEnergy: 5.999,
      density: 5.91,
      meltingPoint: 29.76,
      boilingPoint: 2204,
      discoveredBy: "Lecoq de Boisbaudran",
      yearDiscovered: 1875
    },
    earthItems: [
      { name: "LEDs", use: "Light-emitting diodes" },
      { name: "Solar Panels", use: "Photovoltaic cells" },
      { name: "Thermometers", use: "High-temperature measurement" }
    ]
  },
  {
    name: "Germanium",
    symbol: "Ge",
    atomicNumber: 32,
    properties: {
      atomicMass: 72.630,
      category: "metalloid",
      group: 14,
      period: 4,
      block: "p",
      electronConfiguration: "[Ar]3d¹⁰4s²4p²",
      electronegativity: 2.01,
      atomicRadius: 125,
      ionizationEnergy: 7.900,
      density: 5.323,
      meltingPoint: 938.25,
      boilingPoint: 2833,
      discoveredBy: "Clemens Winkler",
      yearDiscovered: 1886
    },
    earthItems: [
      { name: "Transistors", use: "Early semiconductor devices" },
      { name: "Fiber Optics", use: "Infrared optical systems" },
      { name: "Solar Cells", use: "Photovoltaic applications" }
    ]
  },
  {
    name: "Arsenic",
    symbol: "As",
    atomicNumber: 33,
    properties: {
      atomicMass: 74.922,
      category: "metalloid",
      group: 15,
      period: 4,
      block: "p",
      electronConfiguration: "[Ar]3d¹⁰4s²4p³",
      electronegativity: 2.18,
      atomicRadius: 114,
      ionizationEnergy: 9.815,
      density: 5.727,
      meltingPoint: 816,
      boilingPoint: 614,
      discoveredBy: "Ancient",
      yearDiscovered: null
    },
    earthItems: [
      { name: "Wood Preservatives", use: "Protection against insects and fungi" },
      { name: "Semiconductors", use: "Gallium arsenide in electronics" },
      { name: "Pesticides", use: "Agricultural applications" }
    ]
  },
  {
    name: "Selenium",
    symbol: "Se",
    atomicNumber: 34,
    properties: {
      atomicMass: 78.971,
      category: "nonmetal",
      group: 16,
      period: 4,
      block: "p",
      electronConfiguration: "[Ar]3d¹⁰4s²4p⁴",
      electronegativity: 2.55,
      atomicRadius: 103,
      ionizationEnergy: 9.752,
      density: 4.81,
      meltingPoint: 221,
      boilingPoint: 685,
      discoveredBy: "Jöns Jakob Berzelius",
      yearDiscovered: 1817
    },
    earthItems: [
      { name: "Photocopiers", use: "Photoconductor in xerography" },
      { name: "Solar Cells", use: "Photovoltaic applications" },
      { name: "Glass", use: "Red coloring agent" }
    ]
  },
  {
    name: "Bromine",
    symbol: "Br",
    atomicNumber: 35,
    properties: {
      atomicMass: 79.904,
      category: "halogen",
      group: 17,
      period: 4,
      block: "p",
      electronConfiguration: "[Ar]3d¹⁰4s²4p⁵",
      electronegativity: 2.96,
      atomicRadius: 120,
      ionizationEnergy: 11.814,
      density: 3.12,
      meltingPoint: -7.3,
      boilingPoint: 58.8,
      discoveredBy: "Antoine Jérôme Balard",
      yearDiscovered: 1826
    },
    earthItems: [
      { name: "Flame Retardants", use: "Fire prevention in textiles and plastics" },
      { name: "Photography", use: "Silver bromide in film" },
      { name: "Pesticides", use: "Agricultural applications" }
    ]
  },
  {
    name: "Krypton",
    symbol: "Kr",
    atomicNumber: 36,
    properties: {
      atomicMass: 83.798,
      category: "noble gas",
      group: 18,
      period: 4,
      block: "p",
      electronConfiguration: "[Ar]3d¹⁰4s²4p⁶",
      electronegativity: null,
      atomicRadius: 202,
      ionizationEnergy: 14.000,
      density: 0.003733,
      meltingPoint: -157.36,
      boilingPoint: -153.22,
      discoveredBy: "William Ramsay, Morris Travers",
      yearDiscovered: 1898
    },
    earthItems: [
      { name: "High-Powered Lamps", use: "Photography flashes" },
      { name: "Lasers", use: "Medical and scientific applications" },
      { name: "Windows", use: "Insulation in multi-paned windows" }
    ]
  },
  {
    name: "Rubidium",
    symbol: "Rb",
    atomicNumber: 37,
    properties: {
      atomicMass: 85.468,
      category: "alkali metal",
      group: 1,
      period: 5,
      block: "s",
      electronConfiguration: "[Kr]5s¹",
      electronegativity: 0.82,
      atomicRadius: 265,
      ionizationEnergy: 4.177,
      density: 1.532,
      meltingPoint: 39.31,
      boilingPoint: 688,
      discoveredBy: "Robert Bunsen, Gustav Kirchhoff",
      yearDiscovered: 1861
    },
    earthItems: [
      { name: "Atomic Clocks", use: "Precise time measurement" },
      { name: "Photocells", use: "Light detection" },
      { name: "Vacuum Tubes", use: "Electronics" }
    ]
  },
  {
    name: "Strontium",
    symbol: "Sr",
    atomicNumber: 38,
    properties: {
      atomicMass: 87.62,
      category: "alkaline earth metal",
      group: 2,
      period: 5,
      block: "s",
      electronConfiguration: "[Kr]5s²",
      electronegativity: 0.95,
      atomicRadius: 219,
      ionizationEnergy: 5.695,
      density: 2.64,
      meltingPoint: 777,
      boilingPoint: 1382,
      discoveredBy: "William Cruickshank",
      yearDiscovered: 1790
    },
    earthItems: [
      { name: "Fireworks", use: "Red color in pyrotechnics" },
      { name: "Glow-in-the-dark Products", use: "Luminescent materials" },
      { name: "CRT Televisions", use: "Glass for screens" }
    ]
  },
  {
    name: "Yttrium",
    symbol: "Y",
    atomicNumber: 39,
    properties: {
      atomicMass: 88.906,
      category: "transition metal",
      group: 3,
      period: 5,
      block: "d",
      electronConfiguration: "[Kr]4d¹5s²",
      electronegativity: 1.22,
      atomicRadius: 212,
      ionizationEnergy: 6.217,
      density: 4.472,
      meltingPoint: 1526,
      boilingPoint: 3336,
      discoveredBy: "Johan Gadolin",
      yearDiscovered: 1794
    },
    earthItems: [
      { name: "LED Lights", use: "Red phosphors" },
      { name: "Camera Lenses", use: "Optical glass" },
      { name: "Superconductors", use: "High-temperature superconductivity" }
    ]
  },
  {
    name: "Zirconium",
    symbol: "Zr",
    atomicNumber: 40,
    properties: {
      atomicMass: 91.224,
      category: "transition metal",
      group: 4,
      period: 5,
      block: "d",
      electronConfiguration: "[Kr]4d²5s²",
      electronegativity: 1.33,
      atomicRadius: 206,
      ionizationEnergy: 6.634,
      density: 6.52,
      meltingPoint: 1855,
      boilingPoint: 4409,
      discoveredBy: "Martin Heinrich Klaproth",
      yearDiscovered: 1789
    },
    earthItems: [
      { name: "Nuclear Reactors", use: "Fuel rod cladding" },
      { name: "Cubic Zirconia", use: "Diamond substitute in jewelry" },
      { name: "Ceramics", use: "High-temperature applications" }
    ]
  },
  {
    name: "Niobium",
    symbol: "Nb",
    atomicNumber: 41,
    properties: {
      atomicMass: 92.906,
      category: "transition metal",
      group: 5,
      period: 5,
      block: "d",
      electronConfiguration: "[Kr]4d⁴5s¹",
      electronegativity: 1.6,
      atomicRadius: 198,
      ionizationEnergy: 6.759,
      density: 8.57,
      meltingPoint: 2477,
      boilingPoint: 4744,
      discoveredBy: "Charles Hatchett",
      yearDiscovered: 1801
    },
    earthItems: [
      { name: "Superconducting Magnets", use: "MRI machines" },
      { name: "Steel Alloys", use: "High-strength applications" },
      { name: "Jewelry", use: "Hypoallergenic materials" }
    ]
  },
  {
    name: "Molybdenum",
    symbol: "Mo",
    atomicNumber: 42,
    properties: {
      atomicMass: 95.95,
      category: "transition metal",
      group: 6,
      period: 5,
      block: "d",
      electronConfiguration: "[Kr]4d⁵5s¹",
      electronegativity: 2.16,
      atomicRadius: 190,
      ionizationEnergy: 7.092,
      density: 10.28,
      meltingPoint: 2623,
      boilingPoint: 4639,
      discoveredBy: "Carl Wilhelm Scheele",
      yearDiscovered: 1778
    },
    earthItems: [
      { name: "Steel Alloys", use: "High-strength applications" },
      { name: "Lubricants", use: "Molybdenum disulfide" },
      { name: "Catalysts", use: "Petroleum refining" }
    ]
  },
  {
    name: "Technetium",
    symbol: "Tc",
    atomicNumber: 43,
    properties: {
      atomicMass: 98,
      category: "transition metal",
      group: 7,
      period: 5,
      block: "d",
      electronConfiguration: "[Kr]4d⁵5s²",
      electronegativity: 1.9,
      atomicRadius: 183,
      ionizationEnergy: 7.28,
      density: 11,
      meltingPoint: 2157,
      boilingPoint: 4265,
      discoveredBy: "Carlo Perrier, Emilio Segrè",
      yearDiscovered: 1937
    },
    earthItems: [
      { name: "Medical Imaging", use: "Nuclear medicine scans" },
      { name: "Nuclear Batteries", use: "Long-life power sources" },
      { name: "Scientific Research", use: "Radioactive tracer" }
    ]
  },
  {
    name: "Ruthenium",
    symbol: "Ru",
    atomicNumber: 44,
    properties: {
      atomicMass: 101.07,
      category: "transition metal",
      group: 8,
      period: 5,
      block: "d",
      electronConfiguration: "[Kr]4d⁷5s¹",
      electronegativity: 2.2,
      atomicRadius: 178,
      ionizationEnergy: 7.361,
      density: 12.45,
      meltingPoint: 2334,
      boilingPoint: 4150,
      discoveredBy: "Karl Ernst Claus",
      yearDiscovered: 1844
    },
    earthItems: [
      { name: "Electronics", use: "Electrical contacts" },
      { name: "Catalysts", use: "Chemical reactions" },
      { name: "Solar Cells", use: "Dye-sensitized solar cells" }
    ]
  },
  {
    name: "Rhodium",
    symbol: "Rh",
    atomicNumber: 45,
    properties: {
      atomicMass: 102.91,
      category: "transition metal",
      group: 9,
      period: 5,
      block: "d",
      electronConfiguration: "[Kr]4d⁸5s¹",
      electronegativity: 2.28,
      atomicRadius: 173,
      ionizationEnergy: 7.459,
      density: 12.41,
      meltingPoint: 1964,
      boilingPoint: 3695,
      discoveredBy: "William Hyde Wollaston",
      yearDiscovered: 1803
    },
    earthItems: [
      { name: "Catalytic Converters", use: "Emission control in vehicles" },
      { name: "Jewelry", use: "White gold plating" },
      { name: "Laboratory Equipment", use: "Crucibles and thermocouples" }
    ]
  },
  {
    name: "Palladium",
    symbol: "Pd",
    atomicNumber: 46,
    properties: {
      atomicMass: 106.42,
      category: "transition metal",
      group: 10,
      period: 5,
      block: "d",
      electronConfiguration: "[Kr]4d¹⁰",
      electronegativity: 2.2,
      atomicRadius: 169,
      ionizationEnergy: 8.337,
      density: 12.02,
      meltingPoint: 1554.9,
      boilingPoint: 2963,
      discoveredBy: "William Hyde Wollaston",
      yearDiscovered: 1803
    },
    earthItems: [
      { name: "Catalytic Converters", use: "Emission control in vehicles" },
      { name: "Electronics", use: "Multilayer ceramic capacitors" },
      { name: "Jewelry", use: "White gold alloys" },
      { name: "Hydrogen Storage", use: "Fuel cells and purification" }
    ]
  },
  {
    name: "Silver",
    symbol: "Ag",
    atomicNumber: 47,
    properties: {
      atomicMass: 107.868,
      category: "transition metal",
      group: 11,
      period: 5,
      block: "d",
      electronConfiguration: "[Kr]4d¹⁰5s¹",
      electronegativity: 1.93,
      atomicRadius: 165,
      ionizationEnergy: 7.576,
      density: 10.49,
      meltingPoint: 961.78,
      boilingPoint: 2162,
      discoveredBy: "Ancient",
      yearDiscovered: null
    },
    earthItems: [
      { name: "Jewelry", use: "Decorative items" },
      { name: "Photography", use: "Traditional film and development" },
      { name: "Electronics", use: "Conductive material" },
      { name: "Silverware", use: "Cutlery and dining items" }
    ]
  },
  {
    name: "Cadmium",
    symbol: "Cd",
    atomicNumber: 48,
    properties: {
      atomicMass: 112.411,
      category: "transition metal",
      group: 12,
      period: 5,
      block: "d",
      electronConfiguration: "[Kr]4d¹⁰5s²",
      electronegativity: 1.69,
      atomicRadius: 161,
      ionizationEnergy: 8.994,
      density: 8.65,
      meltingPoint: 321.07,
      boilingPoint: 767,
      discoveredBy: "Karl Samuel Leberecht Hermann, Friedrich Stromeyer",
      yearDiscovered: 1817
    },
    earthItems: [
      { name: "Rechargeable Batteries", use: "Nickel-cadmium batteries" },
      { name: "Pigments", use: "Yellow and red colors in paints" },
      { name: "Nuclear Reactors", use: "Neutron absorption" }
    ]
  },
  {
    name: "Indium",
    symbol: "In",
    atomicNumber: 49,
    properties: {
      atomicMass: 114.818,
      category: "post-transition metal",
      group: 13,
      period: 5,
      block: "p",
      electronConfiguration: "[Kr]4d¹⁰5s²5p¹",
      electronegativity: 1.78,
      atomicRadius: 156,
      ionizationEnergy: 5.786,
      density: 7.31,
      meltingPoint: 156.6,
      boilingPoint: 2072,
      discoveredBy: "Ferdinand Reich, Hieronymous Theodor Richter",
      yearDiscovered: 1863
    },
    earthItems: [
      { name: "Touchscreens", use: "Transparent conductive coatings (ITO)" },
      { name: "Solders", use: "Low-temperature soldering" },
      { name: "Semiconductors", use: "Transistors and photovoltaics" }
    ]
  },
  {
    name: "Tin",
    symbol: "Sn",
    atomicNumber: 50,
    properties: {
      atomicMass: 118.710,
      category: "post-transition metal",
      group: 14,
      period: 5,
      block: "p",
      electronConfiguration: "[Kr]4d¹⁰5s²5p²",
      electronegativity: 1.96,
      atomicRadius: 145,
      ionizationEnergy: 7.344,
      density: 7.31,
      meltingPoint: 231.93,
      boilingPoint: 2602,
      discoveredBy: "Ancient",
      yearDiscovered: null
    },
    earthItems: [
      { name: "Food Cans", use: "Protective coating for steel" },
      { name: "Solder", use: "Joining electronic components" },
      { name: "Bronze", use: "Alloy with copper for tools and art" },
      { name: "Pewter", use: "Decorative items and tableware" }
    ]
  },
  {
    name: "Antimony",
    symbol: "Sb",
    atomicNumber: 51,
    properties: {
      atomicMass: 121.760,
      category: "metalloid",
      group: 15,
      period: 5,
      block: "p",
      electronConfiguration: "[Kr]4d¹⁰5s²5p³",
      electronegativity: 2.05,
      atomicRadius: 133,
      ionizationEnergy: 8.64,
      density: 6.697,
      meltingPoint: 630.63,
      boilingPoint: 1587,
      discoveredBy: "Ancient",
      yearDiscovered: null
    },
    earthItems: [
      { name: "Flame Retardants", use: "Fire prevention in textiles" },
      { name: "Batteries", use: "Lead-acid batteries" },
      { name: "Semiconductors", use: "Infrared detectors" }
    ]
  },
  {
    name: "Tellurium",
    symbol: "Te",
    atomicNumber: 52,
    properties: {
      atomicMass: 127.60,
      category: "metalloid",
      group: 16,
      period: 5,
      block: "p",
      electronConfiguration: "[Kr]4d¹⁰5s²5p⁴",
      electronegativity: 2.1,
      atomicRadius: 123,
      ionizationEnergy: 9.010,
      density: 6.24,
      meltingPoint: 449.51,
      boilingPoint: 988,
      discoveredBy: "Franz-Joseph Müller von Reichenstein",
      yearDiscovered: 1782
    },
    earthItems: [
      { name: "Solar Panels", use: "Cadmium telluride photovoltaics" },
      { name: "Steel", use: "Improves machinability" },
      { name: "Thermoelectric Devices", use: "Power generation" }
    ]
  },
  {
    name: "Iodine",
    symbol: "I",
    atomicNumber: 53,
    properties: {
      atomicMass: 126.904,
      category: "halogen",
      group: 17,
      period: 5,
      block: "p",
      electronConfiguration: "[Kr]4d¹⁰5s²5p⁵",
      electronegativity: 2.66,
      atomicRadius: 115,
      ionizationEnergy: 10.451,
      density: 4.933,
      meltingPoint: 113.7,
      boilingPoint: 184.3,
      discoveredBy: "Bernard Courtois",
      yearDiscovered: 1811
    },
    earthItems: [
      { name: "Disinfectants", use: "Wound treatment and water purification" },
      { name: "Salt", use: "Iodized table salt for thyroid health" },
      { name: "Contrast Media", use: "Medical imaging" },
      { name: "Photography", use: "Silver iodide in film" }
    ]
  },
  {
    name: "Xenon",
    symbol: "Xe",
    atomicNumber: 54,
    properties: {
      atomicMass: 131.293,
      category: "noble gas",
      group: 18,
      period: 5,
      block: "p",
      electronConfiguration: "[Kr]4d¹⁰5s²5p⁶",
      electronegativity: 2.6,
      atomicRadius: 216,
      ionizationEnergy: 12.130,
      density: 0.005887,
      meltingPoint: -111.8,
      boilingPoint: -108.1,
      discoveredBy: "William Ramsay, Morris Travers",
      yearDiscovered: 1898
    },
    earthItems: [
      { name: "High-Intensity Lamps", use: "Car headlights and projectors" },
      { name: "MRI Machines", use: "Medical imaging" },
      { name: "Ion Propulsion", use: "Spacecraft engines" }
    ]
  },
  {
    name: "Cesium",
    symbol: "Cs",
    atomicNumber: 55,
    properties: {
      atomicMass: 132.905,
      category: "alkali metal",
      group: 1,
      period: 6,
      block: "s",
      electronConfiguration: "[Xe]6s¹",
      electronegativity: 0.79,
      atomicRadius: 298,
      ionizationEnergy: 3.894,
      density: 1.93,
      meltingPoint: 28.44,
      boilingPoint: 671,
      discoveredBy: "Robert Bunsen, Gustav Kirchhoff",
      yearDiscovered: 1860
    },
    earthItems: [
      { name: "Atomic Clocks", use: "Precise time measurement" },
      { name: "Oil Drilling", use: "Drilling fluid" },
      { name: "Vacuum Tubes", use: "Photoelectric cells" }
    ]
  },
  {
    name: "Barium",
    symbol: "Ba",
    atomicNumber: 56,
    properties: {
      atomicMass: 137.327,
      category: "alkaline earth metal",
      group: 2,
      period: 6,
      block: "s",
      electronConfiguration: "[Xe]6s²",
      electronegativity: 0.89,
      atomicRadius: 253,
      ionizationEnergy: 5.212,
      density: 3.51,
      meltingPoint: 727,
      boilingPoint: 1897,
      discoveredBy: "Carl Wilhelm Scheele",
      yearDiscovered: 1772
    },
    earthItems: [
      { name: "Medical Imaging", use: "Barium meal for X-ray contrast" },
      { name: "Fireworks", use: "Green color in pyrotechnics" },
      { name: "Glass", use: "Increases refractive index" },
      { name: "Drilling Fluids", use: "Oil and gas exploration" }
    ]
  },
  {
    name: "Lanthanum",
    symbol: "La",
    atomicNumber: 57,
    properties: {
      atomicMass: 138.905,
      category: "lanthanide",
      group: 3,
      period: 6,
      block: "f",
      electronConfiguration: "[Xe]5d¹6s²",
      electronegativity: 1.1,
      atomicRadius: 240,
      ionizationEnergy: 5.577,
      density: 6.162,
      meltingPoint: 920,
      boilingPoint: 3464,
      discoveredBy: "Carl Gustaf Mosander",
      yearDiscovered: 1839
    },
    earthItems: [
      { name: "Camera Lenses", use: "High-quality optical glass" },
      { name: "Carbon Arc Lights", use: "Studio and projection lighting" },
      { name: "Hybrid Car Batteries", use: "Nickel-metal hydride batteries" }
    ]
  },
  {
    name: "Cerium",
    symbol: "Ce",
    atomicNumber: 58,
    properties: {
      atomicMass: 140.116,
      category: "lanthanide",
      group: null,
      period: 6,
      block: "f",
      electronConfiguration: "[Xe]4f¹5d¹6s²",
      electronegativity: 1.12,
      atomicRadius: 235,
      ionizationEnergy: 5.539,
      density: 6.770,
      meltingPoint: 798,
      boilingPoint: 3443,
      discoveredBy: "Martin Heinrich Klaproth, Jöns Jakob Berzelius, Wilhelm Hisinger",
      yearDiscovered: 1803
    },
    earthItems: [
      { name: "Self-cleaning Ovens", use: "Catalytic converter coating" },
      { name: "Lighter Flints", use: "Ferrocerium alloy" },
      { name: "Glass Polishing", use: "Cerium oxide polish" }
    ]
  },
  {
    name: "Praseodymium",
    symbol: "Pr",
    atomicNumber: 59,
    properties: {
      atomicMass: 140.908,
      category: "lanthanide",
      group: null,
      period: 6,
      block: "f",
      electronConfiguration: "[Xe]4f³6s²",
      electronegativity: 1.13,
      atomicRadius: 239,
      ionizationEnergy: 5.464,
      density: 6.77,
      meltingPoint: 931,
      boilingPoint: 3520,
      discoveredBy: "Carl Auer von Welsbach",
      yearDiscovered: 1885
    },
    earthItems: [
      { name: "Aircraft Engines", use: "High-strength alloy with magnesium" },
      { name: "Glasses", use: "Yellow-orange coloring in glass" },
      { name: "Permanent Magnets", use: "Component in strong magnets" }
    ]
  },
  {
    name: "Neodymium",
    symbol: "Nd",
    atomicNumber: 60,
    properties: {
      atomicMass: 144.242,
      category: "lanthanide",
      group: null,
      period: 6,
      block: "f",
      electronConfiguration: "[Xe]4f⁴6s²",
      electronegativity: 1.14,
      atomicRadius: 229,
      ionizationEnergy: 5.525,
      density: 7.01,
      meltingPoint: 1016,
      boilingPoint: 3074,
      discoveredBy: "Carl Auer von Welsbach",
      yearDiscovered: 1885
    },
    earthItems: [
      { name: "Powerful Magnets", use: "Neodymium-iron-boron magnets" },
      { name: "Lasers", use: "Neodymium-doped YAG lasers" },
      { name: "Glass", use: "Purple and violet coloring" }
    ]
  },
  {
    name: "Promethium",
    symbol: "Pm",
    atomicNumber: 61,
    properties: {
      atomicMass: 145,
      category: "lanthanide",
      group: null,
      period: 6,
      block: "f",
      electronConfiguration: "[Xe]4f⁵6s²",
      electronegativity: 1.13,
      atomicRadius: 236,
      ionizationEnergy: 5.582,
      density: 7.26,
      meltingPoint: 1042,
      boilingPoint: 3000,
      discoveredBy: "Chien Shiung Wu, Emilio Segrè, Hans Bethe",
      yearDiscovered: 1945
    },
    earthItems: [
      { name: "Nuclear Batteries", use: "Long-life power sources" },
      { name: "Luminous Paint", use: "Self-illuminating materials" },
      { name: "Thickness Gauges", use: "Industrial measurement" }
    ]
  },
  {
    name: "Samarium",
    symbol: "Sm",
    atomicNumber: 62,
    properties: {
      atomicMass: 150.36,
      category: "lanthanide",
      group: null,
      period: 6,
      block: "f",
      electronConfiguration: "[Xe]4f⁶6s²",
      electronegativity: 1.17,
      atomicRadius: 229,
      ionizationEnergy: 5.644,
      density: 7.52,
      meltingPoint: 1072,
      boilingPoint: 1794,
      discoveredBy: "Paul Émile Lecoq de Boisbaudran",
      yearDiscovered: 1879
    },
    earthItems: [
      { name: "Permanent Magnets", use: "Samarium-cobalt magnets" },
      { name: "Cancer Treatment", use: "Radiation therapy" },
      { name: "Carbon Arc Lights", use: "Studio and projection lighting" }
    ]
  },
  {
    name: "Europium",
    symbol: "Eu",
    atomicNumber: 63,
    properties: {
      atomicMass: 151.964,
      category: "lanthanide",
      group: null,
      period: 6,
      block: "f",
      electronConfiguration: "[Xe]4f⁷6s²",
      electronegativity: 1.2,
      atomicRadius: 233,
      ionizationEnergy: 5.670,
      density: 5.24,
      meltingPoint: 822,
      boilingPoint: 1529,
      discoveredBy: "Eugène-Anatole Demarçay",
      yearDiscovered: 1901
    },
    earthItems: [
      { name: "Euro Banknotes", use: "Anti-counterfeiting security features" },
      { name: "TV and Computer Screens", use: "Red phosphor" },
      { name: "Fluorescent Lamps", use: "Phosphor coating" }
    ]
  },
  {
    name: "Gadolinium",
    symbol: "Gd",
    atomicNumber: 64,
    properties: {
      atomicMass: 157.25,
      category: "lanthanide",
      group: null,
      period: 6,
      block: "f",
      electronConfiguration: "[Xe]4f⁷5d¹6s²",
      electronegativity: 1.2,
      atomicRadius: 237,
      ionizationEnergy: 6.150,
      density: 7.90,
      meltingPoint: 1313,
      boilingPoint: 3273,
      discoveredBy: "Jean Charles Galissard de Marignac",
      yearDiscovered: 1880
    },
    earthItems: [
      { name: "MRI Contrast Agents", use: "Medical imaging" },
      { name: "Nuclear Reactors", use: "Neutron absorber" },
      { name: "Magnetic Refrigeration", use: "Cryogenic cooling" }
    ]
  },
  {
    name: "Terbium",
    symbol: "Tb",
    atomicNumber: 65,
    properties: {
      atomicMass: 158.925,
      category: "lanthanide",
      group: null,
      period: 6,
      block: "f",
      electronConfiguration: "[Xe]4f⁹6s²",
      electronegativity: 1.2,
      atomicRadius: 221,
      ionizationEnergy: 5.864,
      density: 8.23,
      meltingPoint: 1356,
      boilingPoint: 3230,
      discoveredBy: "Carl Gustaf Mosander",
      yearDiscovered: 1843
    },
    earthItems: [
      { name: "Fluorescent Lamps", use: "Green phosphors" },
      { name: "Sonar Systems", use: "Magnetostrictive materials" },
      { name: "Fuel Cells", use: "Solid oxide fuel cells" }
    ]
  },
  {
    name: "Dysprosium",
    symbol: "Dy",
    atomicNumber: 66,
    properties: {
      atomicMass: 162.500,
      category: "lanthanide",
      group: null,
      period: 6,
      block: "f",
      electronConfiguration: "[Xe]4f¹⁰6s²",
      electronegativity: 1.22,
      atomicRadius: 229,
      ionizationEnergy: 5.939,
      density: 8.55,
      meltingPoint: 1412,
      boilingPoint: 2567,
      discoveredBy: "Paul Émile Lecoq de Boisbaudran",
      yearDiscovered: 1886
    },
    earthItems: [
      { name: "Wind Turbines", use: "Permanent magnets in generators" },
      { name: "Data Storage", use: "Hard disk drives" },
      { name: "Nuclear Reactors", use: "Control rods" }
    ]
  },
  {
    name: "Holmium",
    symbol: "Ho",
    atomicNumber: 67,
    properties: {
      atomicMass: 164.930,
      category: "lanthanide",
      group: null,
      period: 6,
      block: "f",
      electronConfiguration: "[Xe]4f¹¹6s²",
      electronegativity: 1.23,
      atomicRadius: 216,
      ionizationEnergy: 6.022,
      density: 8.80,
      meltingPoint: 1474,
      boilingPoint: 2700,
      discoveredBy: "Marc Delafontaine, Jacques-Louis Soret",
      yearDiscovered: 1878
    },
    earthItems: [
      { name: "Lasers", use: "Medical and dental procedures" },
      { name: "Magnetic Flux Concentrators", use: "High-strength magnets" },
      { name: "Nuclear Reactors", use: "Control rods" }
    ]
  },
  {
    name: "Erbium",
    symbol: "Er",
    atomicNumber: 68,
    properties: {
      atomicMass: 167.259,
      category: "lanthanide",
      group: null,
      period: 6,
      block: "f",
      electronConfiguration: "[Xe]4f¹²6s²",
      electronegativity: 1.24,
      atomicRadius: 235,
      ionizationEnergy: 6.108,
      density: 9.07,
      meltingPoint: 1529,
      boilingPoint: 2868,
      discoveredBy: "Carl Gustaf Mosander",
      yearDiscovered: 1843
    },
    earthItems: [
      { name: "Fiber Optic Cables", use: "Signal amplification" },
      { name: "Lasers", use: "Medical and dental procedures" },
      { name: "Sunglasses", use: "Pink and purple coloring in glass" }
    ]
  },
  {
    name: "Thulium",
    symbol: "Tm",
    atomicNumber: 69,
    properties: {
      atomicMass: 168.934,
      category: "lanthanide",
      group: null,
      period: 6,
      block: "f",
      electronConfiguration: "[Xe]4f¹³6s²",
      electronegativity: 1.25,
      atomicRadius: 227,
      ionizationEnergy: 6.184,
      density: 9.32,
      meltingPoint: 1545,
      boilingPoint: 1950,
      discoveredBy: "Per Teodor Cleve",
      yearDiscovered: 1879
    },
    earthItems: [
      { name: "Portable X-ray Machines", use: "Medical diagnostics" },
      { name: "Lasers", use: "Medical and industrial applications" },
      { name: "Ceramic Magnets", use: "High-temperature magnets" }
    ]
  },
  {
    name: "Ytterbium",
    symbol: "Yb",
    atomicNumber: 70,
    properties: {
      atomicMass: 173.045,
      category: "lanthanide",
      group: null,
      period: 6,
      block: "f",
      electronConfiguration: "[Xe]4f¹⁴6s²",
      electronegativity: 1.1,
      atomicRadius: 222,
      ionizationEnergy: 6.254,
      density: 6.90,
      meltingPoint: 819,
      boilingPoint: 1196,
      discoveredBy: "Jean Charles Galissard de Marignac",
      yearDiscovered: 1878
    },
    earthItems: [
      { name: "Fiber Optic Technology", use: "Signal amplifiers" },
      { name: "Stainless Steel", use: "Improving grain refinement" },
      { name: "Radiation Source", use: "Portable X-ray machines" }
    ]
  },
  {
    name: "Lutetium",
    symbol: "Lu",
    atomicNumber: 71,
    properties: {
      atomicMass: 174.967,
      category: "lanthanide",
      group: 3,
      period: 6,
      block: "d",
      electronConfiguration: "[Xe]4f¹⁴5d¹6s²",
      electronegativity: 1.27,
      atomicRadius: 217,
      ionizationEnergy: 5.426,
      density: 9.84,
      meltingPoint: 1663,
      boilingPoint: 3402,
      discoveredBy: "Georges Urbain",
      yearDiscovered: 1907
    },
    earthItems: [
      { name: "PET Scanners", use: "Medical imaging" },
      { name: "Oil Refining", use: "Catalytic cracking" },
      { name: "LED Bulbs", use: "Phosphors for lighting" }
    ]
  },
  {
    name: "Hafnium",
    symbol: "Hf",
    atomicNumber: 72,
    properties: {
      atomicMass: 178.49,
      category: "transition metal",
      group: 4,
      period: 6,
      block: "d",
      electronConfiguration: "[Xe]4f¹⁴5d²6s²",
      electronegativity: 1.3,
      atomicRadius: 208,
      ionizationEnergy: 6.825,
      density: 13.31,
      meltingPoint: 2233,
      boilingPoint: 4603,
      discoveredBy: "Dirk Coster, George de Hevesy",
      yearDiscovered: 1923
    },
    earthItems: [
      { name: "Nuclear Reactors", use: "Control rods" },
      { name: "Plasma Cutting Torches", use: "High-temperature applications" },
      { name: "Superalloys", use: "Aerospace components" }
    ]
  },
  {
    name: "Tantalum",
    symbol: "Ta",
    atomicNumber: 73,
    properties: {
      atomicMass: 180.948,
      category: "transition metal",
      group: 5,
      period: 6,
      block: "d",
      electronConfiguration: "[Xe]4f¹⁴5d³6s²",
      electronegativity: 1.5,
      atomicRadius: 200,
      ionizationEnergy: 7.89,
      density: 16.69,
      meltingPoint: 3017,
      boilingPoint: 5458,
      discoveredBy: "Anders Gustaf Ekeberg",
      yearDiscovered: 1802
    },
    earthItems: [
      { name: "Electronics", use: "Capacitors in mobile devices" },
      { name: "Surgical Implants", use: "Biocompatible medical devices" },
      { name: "Chemical Processing", use: "Corrosion-resistant equipment" }
    ]
  },
  {
    name: "Tungsten",
    symbol: "W",
    atomicNumber: 74,
    properties: {
      atomicMass: 183.84,
      category: "transition metal",
      group: 6,
      period: 6,
      block: "d",
      electronConfiguration: "[Xe]4f¹⁴5d⁴6s²",
      electronegativity: 2.36,
      atomicRadius: 193,
      ionizationEnergy: 7.98,
      density: 19.25,
      meltingPoint: 3422,
      boilingPoint: 5555,
      discoveredBy: "Fausto and Juan José de Elhuyar",
      yearDiscovered: 1783
    },
    earthItems: [
      { name: "Light Bulb Filaments", use: "Incandescent lighting" },
      { name: "Cutting Tools", use: "Tungsten carbide drill bits" },
      { name: "Armor-Piercing Ammunition", use: "Military applications" },
      { name: "Welding Electrodes", use: "TIG welding" }
    ]
  },
  {
    name: "Rhenium",
    symbol: "Re",
    atomicNumber: 75,
    properties: {
      atomicMass: 186.207,
      category: "transition metal",
      group: 7,
      period: 6,
      block: "d",
      electronConfiguration: "[Xe]4f¹⁴5d⁵6s²",
      electronegativity: 1.9,
      atomicRadius: 188,
      ionizationEnergy: 7.88,
      density: 21.02,
      meltingPoint: 3186,
      boilingPoint: 5596,
      discoveredBy: "Masataka Ogawa",
      yearDiscovered: 1908
    },
    earthItems: [
      { name: "Jet Engines", use: "High-temperature superalloys" },
      { name: "Catalysts", use: "Petroleum refining" },
      { name: "Thermocouples", use: "High-temperature measurement" }
    ]
  },
  {
    name: "Osmium",
    symbol: "Os",
    atomicNumber: 76,
    properties: {
      atomicMass: 190.23,
      category: "transition metal",
      group: 8,
      period: 6,
      block: "d",
      electronConfiguration: "[Xe]4f¹⁴5d⁶6s²",
      electronegativity: 2.2,
      atomicRadius: 185,
      ionizationEnergy: 8.7,
      density: 22.59,
      meltingPoint: 3033,
      boilingPoint: 5012,
      discoveredBy: "Smithson Tennant",
      yearDiscovered: 1803
    },
    earthItems: [
      { name: "Fountain Pen Tips", use: "Durable writing instruments" },
      { name: "Electrical Contacts", use: "High-wear applications" },
      { name: "Fingerprint Detection", use: "Osmium tetroxide in forensics" }
    ]
  },
  {
    name: "Iridium",
    symbol: "Ir",
    atomicNumber: 77,
    properties: {
      atomicMass: 192.217,
      category: "transition metal",
      group: 9,
      period: 6,
      block: "d",
      electronConfiguration: "[Xe]4f¹⁴5d⁷6s²",
      electronegativity: 2.2,
      atomicRadius: 180,
      ionizationEnergy: 9.1,
      density: 22.56,
      meltingPoint: 2446,
      boilingPoint: 4428,
      discoveredBy: "Smithson Tennant",
      yearDiscovered: 1803
    },
    earthItems: [
      { name: "Spark Plugs", use: "High-performance engines" },
      { name: "Crucibles", use: "High-temperature laboratory equipment" },
      { name: "Watch Bearings", use: "Precision timepieces" }
    ]
  },
  {
    name: "Platinum",
    symbol: "Pt",
    atomicNumber: 78,
    properties: {
      atomicMass: 195.084,
      category: "transition metal",
      group: 10,
      period: 6,
      block: "d",
      electronConfiguration: "[Xe]4f¹⁴5d⁹6s¹",
      electronegativity: 2.28,
      atomicRadius: 177,
      ionizationEnergy: 9.0,
      density: 21.45,
      meltingPoint: 1768.3,
      boilingPoint: 3825,
      discoveredBy: "Antonio de Ulloa",
      yearDiscovered: 1735
    },
    earthItems: [
      { name: "Jewelry", use: "Precious metal for rings and necklaces" },
      { name: "Catalytic Converters", use: "Emission control in vehicles" },
      { name: "Laboratory Equipment", use: "Crucibles and electrodes" },
      { name: "Cancer Treatment", use: "Chemotherapy drugs" }
    ]
  },
  {
    name: "Gold",
    symbol: "Au",
    atomicNumber: 79,
    properties: {
      atomicMass: 196.967,
      category: "transition metal",
      group: 11,
      period: 6,
      block: "d",
      electronConfiguration: "[Xe]4f¹⁴5d¹⁰6s¹",
      electronegativity: 2.54,
      atomicRadius: 144,
      ionizationEnergy: 9.226,
      density: 19.3,
      meltingPoint: 1064.18,
      boilingPoint: 2856,
      discoveredBy: "Ancient",
      yearDiscovered: null
    },
    earthItems: [
      { name: "Jewelry", use: "Decorative items and status symbols" },
      { name: "Electronics", use: "Conductive material in circuits" },
      { name: "Currency", use: "Backing for monetary systems" },
      { name: "Dentistry", use: "Dental fillings and crowns" }
    ]
  },
  {
    name: "Mercury",
    symbol: "Hg",
    atomicNumber: 80,
    properties: {
      atomicMass: 200.59,
      category: "transition metal",
      group: 12,
      period: 6,
      block: "d",
      electronConfiguration: "[Xe]4f¹⁴5d¹⁰6s²",
      electronegativity: 2.0,
      atomicRadius: 171,
      ionizationEnergy: 10.438,
      density: 13.546,
      meltingPoint: -38.83,
      boilingPoint: 356.73,
      discoveredBy: "Ancient",
      yearDiscovered: null
    },
    earthItems: [
      { name: "Thermometers", use: "Temperature measurement (historical)" },
      { name: "Dental Amalgams", use: "Tooth fillings" },
      { name: "Fluorescent Lamps", use: "Lighting" }
    ]
  },
  {
    name: "Thallium",
    symbol: "Tl",
    atomicNumber: 81,
    properties: {
      atomicMass: 204.383,
      category: "post-transition metal",
      group: 13,
      period: 6,
      block: "p",
      electronConfiguration: "[Xe]4f¹⁴5d¹⁰6s²6p¹",
      electronegativity: 1.62,
      atomicRadius: 156,
      ionizationEnergy: 6.108,
      density: 11.85,
      meltingPoint: 304,
      boilingPoint: 1473,
      discoveredBy: "William Crookes",
      yearDiscovered: 1861
    },
    earthItems: [
      { name: "Rat Poison", use: "Rodenticide (historical)" },
      { name: "Electronics", use: "Infrared detectors" },
      { name: "Medical Imaging", use: "Cardiac stress tests" }
    ]
  },
  {
    name: "Lead",
    symbol: "Pb",
    atomicNumber: 82,
    properties: {
      atomicMass: 207.2,
      category: "post-transition metal",
      group: 14,
      period: 6,
      block: "p",
      electronConfiguration: "[Xe]4f¹⁴5d¹⁰6s²6p²",
      electronegativity: 2.33,
      atomicRadius: 154,
      ionizationEnergy: 7.417,
      density: 11.34,
      meltingPoint: 327.46,
      boilingPoint: 1749,
      discoveredBy: "Ancient",
      yearDiscovered: null
    },
    earthItems: [
      { name: "Car Batteries", use: "Lead-acid batteries" },
      { name: "Radiation Shielding", use: "X-ray protection" },
      { name: "Plumbing", use: "Water pipes (historical)" },
      { name: "Fishing Weights", use: "Sinkers" }
    ]
  },
  {
    name: "Bismuth",
    symbol: "Bi",
    atomicNumber: 83,
    properties: {
      atomicMass: 208.980,
      category: "post-transition metal",
      group: 15,
      period: 6,
      block: "p",
      electronConfiguration: "[Xe]4f¹⁴5d¹⁰6s²6p³",
      electronegativity: 2.02,
      atomicRadius: 143,
      ionizationEnergy: 7.289,
      density: 9.78,
      meltingPoint: 271.4,
      boilingPoint: 1564,
      discoveredBy: "Claude François Geoffroy",
      yearDiscovered: 1753
    },
    earthItems: [
      { name: "Pepto-Bismol", use: "Medication for digestive issues" },
      { name: "Cosmetics", use: "Pigments in makeup" },
      { name: "Fishing Tackle", use: "Non-toxic alternative to lead" },
      { name: "Crystal Growing", use: "Bismuth crystals for display" }
    ]
  },
  {
    name: "Polonium",
    symbol: "Po",
    atomicNumber: 84,
    properties: {
      atomicMass: 209,
      category: "post-transition metal",
      group: 16,
      period: 6,
      block: "p",
      electronConfiguration: "[Xe]4f¹⁴5d¹⁰6s²6p⁴",
      electronegativity: 2.0,
      atomicRadius: 135,
      ionizationEnergy: 8.417,
      density: 9.32,
      meltingPoint: 254,
      boilingPoint: 962,
      discoveredBy: "Marie Curie",
      yearDiscovered: 1898
    },
    earthItems: [
      { name: "Antistatic Brushes", use: "Removing static from photographic film" },
      { name: "Nuclear Batteries", use: "Spacecraft power sources" },
      { name: "Thermoelectric Generators", use: "Power for remote locations" }
    ]
  },
  {
    name: "Astatine",
    symbol: "At",
    atomicNumber: 85,
    properties: {
      atomicMass: 210,
      category: "halogen",
      group: 17,
      period: 6,
      block: "p",
      electronConfiguration: "[Xe]4f¹⁴5d¹⁰6s²6p⁵",
      electronegativity: 2.2,
      atomicRadius: 127,
      ionizationEnergy: 9.5,
      density: 7,
      meltingPoint: 302,
      boilingPoint: 337,
      discoveredBy: "Dale R. Corson, Kenneth Ross MacKenzie, Emilio Segrè",
      yearDiscovered: 1940
    },
    earthItems: [
      { name: "Medical Research", use: "Cancer treatment research" },
      { name: "Scientific Study", use: "Radioactive tracer" },
      { name: "Nuclear Medicine", use: "Experimental radiotherapy" }
    ]
  },
  {
    name: "Radon",
    symbol: "Rn",
    atomicNumber: 86,
    properties: {
      atomicMass: 222,
      category: "noble gas",
      group: 18,
      period: 6,
      block: "p",
      electronConfiguration: "[Xe]4f¹⁴5d¹⁰6s²6p⁶",
      electronegativity: null,
      atomicRadius: 120,
      ionizationEnergy: 10.745,
      density: 0.00973,
      meltingPoint: -71,
      boilingPoint: -61.7,
      discoveredBy: "Friedrich Ernst Dorn",
      yearDiscovered: 1900
    },
    earthItems: [
      { name: "Home Testing Kits", use: "Detecting radon gas in basements" },
      { name: "Cancer Treatment", use: "Radiation therapy (historical)" },
      { name: "Groundwater Research", use: "Tracing water movement" }
    ]
  },
  {
    name: "Francium",
    symbol: "Fr",
    atomicNumber: 87,
    properties: {
      atomicMass: 223,
      category: "alkali metal",
      group: 1,
      period: 7,
      block: "s",
      electronConfiguration: "[Rn]7s¹",
      electronegativity: 0.7,
      atomicRadius: 260,
      ionizationEnergy: 4.073,
      density: 1.87,
      meltingPoint: 27,
      boilingPoint: 677,
      discoveredBy: "Marguerite Perey",
      yearDiscovered: 1939
    },
    earthItems: [
      { name: "Scientific Research", use: "Atomic structure studies" },
      { name: "Medical Research", use: "Cancer treatment research" },
      { name: "Physics Experiments", use: "Atomic physics research" }
    ]
  },
  {
    name: "Radium",
    symbol: "Ra",
    atomicNumber: 88,
    properties: {
      atomicMass: 226,
      category: "alkaline earth metal",
      group: 2,
      period: 7,
      block: "s",
      electronConfiguration: "[Rn]7s²",
      electronegativity: 0.9,
      atomicRadius: 223,
      ionizationEnergy: 5.279,
      density: 5.5,
      meltingPoint: 700,
      boilingPoint: 1737,
      discoveredBy: "Marie Curie, Pierre Curie",
      yearDiscovered: 1898
    },
    earthItems: [
      { name: "Luminous Paint", use: "Watch dials (historical)" },
      { name: "Cancer Treatment", use: "Radiation therapy (historical)" },
      { name: "Scientific Research", use: "Radioactive source" }
    ]
  },
  {
    name: "Actinium",
    symbol: "Ac",
    atomicNumber: 89,
    properties: {
      atomicMass: 227,
      category: "actinide",
      group: 3,
      period: 7,
      block: "f",
      electronConfiguration: "[Rn]6d¹7s²",
      electronegativity: 1.1,
      atomicRadius: 215,
      ionizationEnergy: 5.17,
      density: 10.07,
      meltingPoint: 1050,
      boilingPoint: 3200,
      discoveredBy: "Friedrich Oskar Giesel",
      yearDiscovered: 1902
    },
    earthItems: [
      { name: "Neutron Sources", use: "Scientific research" },
      { name: "Cancer Treatment", use: "Targeted alpha therapy research" },
      { name: "Thermoelectric Generators", use: "Space applications research" }
    ]
  },
  {
    name: "Thorium",
    symbol: "Th",
    atomicNumber: 90,
    properties: {
      atomicMass: 232.038,
      category: "actinide",
      group: null,
      period: 7,
      block: "f",
      electronConfiguration: "[Rn]6d²7s²",
      electronegativity: 1.3,
      atomicRadius: 206,
      ionizationEnergy: 6.3067,
      density: 11.72,
      meltingPoint: 1750,
      boilingPoint: 4788,
      discoveredBy: "Jöns Jakob Berzelius",
      yearDiscovered: 1829
    },
    earthItems: [
      { name: "Gas Mantles", use: "Camping lanterns (historical)" },
      { name: "Welding Rods", use: "TIG welding electrodes" },
      { name: "Nuclear Fuel", use: "Experimental thorium reactors" }
    ]
  },
  {
    name: "Protactinium",
    symbol: "Pa",
    atomicNumber: 91,
    properties: {
      atomicMass: 231.036,
      category: "actinide",
      group: null,
      period: 7,
      block: "f",
      electronConfiguration: "[Rn]5f²6d¹7s²",
      electronegativity: 1.5,
      atomicRadius: 200,
      ionizationEnergy: 5.89,
      density: 15.37,
      meltingPoint: 1568,
      boilingPoint: 4027,
      discoveredBy: "William Crookes, Otto Hahn, Lise Meitner",
      yearDiscovered: 1913
    },
    earthItems: [
      { name: "Scientific Research", use: "Nuclear physics studies" },
      { name: "Radiometric Dating", use: "Age determination of materials" },
      { name: "Nuclear Forensics", use: "Tracing nuclear materials" }
    ]
  },
  {
    name: "Uranium",
    symbol: "U",
    atomicNumber: 92,
    properties: {
      atomicMass: 238.029,
      category: "actinide",
      group: null,
      period: 7,
      block: "f",
      electronConfiguration: "[Rn]5f³6d¹7s²",
      electronegativity: 1.38,
      atomicRadius: 196,
      ionizationEnergy: 6.1941,
      density: 19.1,
      meltingPoint: 1132.2,
      boilingPoint: 4131,
      discoveredBy: "Martin Heinrich Klaproth",
      yearDiscovered: 1789
    },
    earthItems: [
      { name: "Nuclear Fuel", use: "Power generation" },
      { name: "Military Applications", use: "Nuclear weapons" },
      { name: "Radiation Shielding", use: "High-density protection" },
      { name: "Colored Glass", use: "Uranium glass with fluorescent properties" }
    ]
  },
  {
    name: "Neptunium",
    symbol: "Np",
    atomicNumber: 93,
    properties: {
      atomicMass: 237,
      category: "actinide",
      group: null,
      period: 7,
      block: "f",
      electronConfiguration: "[Rn]5f⁴6d¹7s²",
      electronegativity: 1.36,
      atomicRadius: 190,
      ionizationEnergy: 6.2657,
      density: 20.45,
      meltingPoint: 644,
      boilingPoint: 4000,
      discoveredBy: "Edwin McMillan, Philip Abelson",
      yearDiscovered: 1940
    },
    earthItems: [
      { name: "Neutron Detectors", use: "Nuclear monitoring" },
      { name: "Nuclear Batteries", use: "Space applications" },
      { name: "Scientific Research", use: "Nuclear physics studies" }
    ]
  },
  {
    name: "Plutonium",
    symbol: "Pu",
    atomicNumber: 94,
    properties: {
      atomicMass: 244,
      category: "actinide",
      group: null,
      period: 7,
      block: "f",
      electronConfiguration: "[Rn]5f⁶7s²",
      electronegativity: 1.28,
      atomicRadius: 187,
      ionizationEnergy: 6.0262,
      density: 19.84,
      meltingPoint: 640,
      boilingPoint: 3228,
      discoveredBy: "Glenn T. Seaborg, Arthur Wahl, Joseph W. Kennedy, Edwin McMillan",
      yearDiscovered: 1940
    },
    earthItems: [
      { name: "Nuclear Weapons", use: "Military applications" },
      { name: "Space Missions", use: "Radioisotope thermoelectric generators" },
      { name: "Nuclear Reactors", use: "MOX fuel" }
    ]
  },
  {
    name: "Americium",
    symbol: "Am",
    atomicNumber: 95,
    properties: {
      atomicMass: 243,
      category: "actinide",
      group: null,
      period: 7,
      block: "f",
      electronConfiguration: "[Rn]5f⁷7s²",
      electronegativity: 1.3,
      atomicRadius: 180,
      ionizationEnergy: 5.9738,
      density: 13.69,
      meltingPoint: 1176,
      boilingPoint: 2607,
      discoveredBy: "Glenn T. Seaborg, Ralph A. James, Leon O. Morgan, Albert Ghiorso",
      yearDiscovered: 1944
    },
    earthItems: [
      { name: "Smoke Detectors", use: "Ionization-type detectors" },
      { name: "Industrial Gauges", use: "Measuring thickness of materials" },
      { name: "Medical Applications", use: "Cancer treatment research" }
    ]
  },
  {
    name: "Curium",
    symbol: "Cm",
    atomicNumber: 96,
    properties: {
      atomicMass: 247,
      category: "actinide",
      group: null,
      period: 7,
      block: "f",
      electronConfiguration: "[Rn]5f⁷6d¹7s²",
      electronegativity: 1.3,
      atomicRadius: 169,
      ionizationEnergy: 5.9915,
      density: 13.51,
      meltingPoint: 1345,
      boilingPoint: 3110,
      discoveredBy: "Glenn T. Seaborg, Ralph A. James, Albert Ghiorso",
      yearDiscovered: 1944
    },
    earthItems: [
      { name: "Radioisotope Power", use: "Space exploration" },
      { name: "Scientific Research", use: "Neutron sources" },
      { name: "Alpha Particle Sources", use: "Analytical instruments" }
    ]
  },
  {
    name: "Berkelium",
    symbol: "Bk",
    atomicNumber: 97,
    properties: {
      atomicMass: 247,
      category: "actinide",
      group: null,
      period: 7,
      block: "f",
      electronConfiguration: "[Rn]5f⁹7s²",
      electronegativity: 1.3,
      atomicRadius: 170,
      ionizationEnergy: 6.1979,
      density: 14.78,
      meltingPoint: 1050,
      boilingPoint: null,
      discoveredBy: "Glenn T. Seaborg, Stanley G. Thompson, Albert Ghiorso",
      yearDiscovered: 1949
    },
    earthItems: [
      { name: "Scientific Research", use: "Nuclear physics studies" },
      { name: "Element Synthesis", use: "Creating heavier elements" },
      { name: "Neutron Sources", use: "Laboratory research" }
    ]
  },
  {
    name: "Californium",
    symbol: "Cf",
    atomicNumber: 98,
    properties: {
      atomicMass: 251,
      category: "actinide",
      group: null,
      period: 7,
      block: "f",
      electronConfiguration: "[Rn]5f¹⁰7s²",
      electronegativity: 1.3,
      atomicRadius: null,
      ionizationEnergy: 6.2817,
      density: 15.1,
      meltingPoint: 900,
      boilingPoint: null,
      discoveredBy: "Stanley G. Thompson, Kenneth Street Jr., Albert Ghiorso, Glenn T. Seaborg",
      yearDiscovered: 1950
    },
    earthItems: [
      { name: "Neutron Moisture Gauges", use: "Oil well logging" },
      { name: "Metal Detectors", use: "Starting neutron source" },
      { name: "Cancer Treatment", use: "Radiation therapy research" }
    ]
  },
  {
    name: "Einsteinium",
    symbol: "Es",
    atomicNumber: 99,
    properties: {
      atomicMass: 252,
      category: "actinide",
      group: null,
      period: 7,
      block: "f",
      electronConfiguration: "[Rn]5f¹¹7s²",
      electronegativity: 1.3,
      atomicRadius: null,
      ionizationEnergy: 6.42,
      density: 8.84,
      meltingPoint: 860,
      boilingPoint: null,
      discoveredBy: "Albert Ghiorso, Glenn T. Seaborg",
      yearDiscovered: 1952
    },
    earthItems: [
      { name: "Scientific Research", use: "Nuclear physics studies" },
      { name: "Element Synthesis", use: "Creating heavier elements" },
      { name: "Radiation Studies", use: "Understanding radioactive decay" }
    ]
  },
  {
    name: "Fermium",
    symbol: "Fm",
    atomicNumber: 100,
    properties: {
      atomicMass: 257,
      category: "actinide",
      group: null,
      period: 7,
      block: "f",
      electronConfiguration: "[Rn]5f¹²7s²",
      electronegativity: 1.3,
      atomicRadius: null,
      ionizationEnergy: 6.5,
      density: null,
      meltingPoint: 1527,
      boilingPoint: null,
      discoveredBy: "Albert Ghiorso, Glenn T. Seaborg",
      yearDiscovered: 1952
    },
    earthItems: [
      { name: "Scientific Research", use: "Nuclear physics studies" },
      { name: "Element Synthesis", use: "Creating heavier elements" },
      { name: "Radiation Studies", use: "Understanding radioactive decay" }
    ]
  },
  {
    name: "Mendelevium",
    symbol: "Md",
    atomicNumber: 101,
    properties: {
      atomicMass: 258,
      category: "actinide",
      group: null,
      period: 7,
      block: "f",
      electronConfiguration: "[Rn]5f¹³7s²",
      electronegativity: 1.3,
      atomicRadius: null,
      ionizationEnergy: 6.58,
      density: null,
      meltingPoint: 827,
      boilingPoint: null,
      discoveredBy: "Albert Ghiorso, Glenn T. Seaborg, Bernard Harvey, Gregory Choppin, Stanley G. Thompson",
      yearDiscovered: 1955
    },
    earthItems: [
      { name: "Scientific Research", use: "Nuclear physics studies" },
      { name: "Element Synthesis", use: "Creating heavier elements" },
      { name: "Radiation Studies", use: "Understanding radioactive decay" }
    ]
  },
  {
    name: "Nobelium",
    symbol: "No",
    atomicNumber: 102,
    properties: {
      atomicMass: 259,
      category: "actinide",
      group: null,
      period: 7,
      block: "f",
      electronConfiguration: "[Rn]5f¹⁴7s²",
      electronegativity: 1.3,
      atomicRadius: null,
      ionizationEnergy: 6.65,
      density: null,
      meltingPoint: 827,
      boilingPoint: null,
      discoveredBy: "Albert Ghiorso, Glenn T. Seaborg",
      yearDiscovered: 1958
    },
    earthItems: [
      { name: "Scientific Research", use: "Nuclear physics studies" },
      { name: "Element Synthesis", use: "Creating heavier elements" },
      { name: "Radiation Studies", use: "Understanding radioactive decay" }
    ]
  },
  {
    name: "Lawrencium",
    symbol: "Lr",
    atomicNumber: 103,
    properties: {
      atomicMass: 262,
      category: "actinide",
      group: 3,
      period: 7,
      block: "d",
      electronConfiguration: "[Rn]5f¹⁴7s²7p¹",
      electronegativity: 1.3,
      atomicRadius: null,
      ionizationEnergy: 4.9,
      density: null,
      meltingPoint: 1627,
      boilingPoint: null,
      discoveredBy: "Albert Ghiorso, Torbjørn Sikkeland, Almon Larsh, Robert M. Latimer",
      yearDiscovered: 1961
    },
    earthItems: [
      { name: "Scientific Research", use: "Nuclear physics studies" },
      { name: "Element Synthesis", use: "Creating heavier elements" },
      { name: "Radiation Studies", use: "Understanding radioactive decay" }
    ]
  },
  {
    name: "Rutherfordium",
    symbol: "Rf",
    atomicNumber: 104,
    properties: {
      atomicMass: 267,
      category: "transition metal",
      group: 4,
      period: 7,
      block: "d",
      electronConfiguration: "[Rn]5f¹⁴6d²7s²",
      electronegativity: null,
      atomicRadius: null,
      ionizationEnergy: 6.0,
      density: 23.2,
      meltingPoint: 2100,
      boilingPoint: 5500,
      discoveredBy: "Joint Institute for Nuclear Research, Lawrence Berkeley National Laboratory",
      yearDiscovered: 1964
    },
    earthItems: [
      { name: "Scientific Research", use: "Nuclear physics studies" },
      { name: "Element Synthesis", use: "Creating heavier elements" },
      { name: "Chemical Research", use: "Understanding transactinide chemistry" }
    ]
  },
  {
    name: "Dubnium",
    symbol: "Db",
    atomicNumber: 105,
    properties: {
      atomicMass: 268,
      category: "transition metal",
      group: 5,
      period: 7,
      block: "d",
      electronConfiguration: "[Rn]5f¹⁴6d³7s²",
      electronegativity: null,
      atomicRadius: null,
      ionizationEnergy: null,
      density: 29.3,
      meltingPoint: null,
      boilingPoint: null,
      discoveredBy: "Joint Institute for Nuclear Research, Lawrence Berkeley National Laboratory",
      yearDiscovered: 1967
    },
    earthItems: [
      { name: "Scientific Research", use: "Nuclear physics studies" },
      { name: "Element Synthesis", use: "Creating heavier elements" },
      { name: "Chemical Research", use: "Understanding transactinide chemistry" }
    ]
  },
  {
    name: "Seaborgium",
    symbol: "Sg",
    atomicNumber: 106,
    properties: {
      atomicMass: 269,
      category: "transition metal",
      group: 6,
      period: 7,
      block: "d",
      electronConfiguration: "[Rn]5f¹⁴6d⁴7s²",
      electronegativity: null,
      atomicRadius: null,
      ionizationEnergy: null,
      density: 35.0,
      meltingPoint: null,
      boilingPoint: null,
      discoveredBy: "Lawrence Berkeley National Laboratory",
      yearDiscovered: 1974
    },
    earthItems: [
      { name: "Scientific Research", use: "Nuclear physics studies" },
      { name: "Element Synthesis", use: "Creating heavier elements" },
      { name: "Chemical Research", use: "Understanding transactinide chemistry" }
    ]
  },
  {
    name: "Bohrium",
    symbol: "Bh",
    atomicNumber: 107,
    properties: {
      atomicMass: 270,
      category: "transition metal",
      group: 7,
      period: 7,
      block: "d",
      electronConfiguration: "[Rn]5f¹⁴6d⁵7s²",
      electronegativity: null,
      atomicRadius: null,
      ionizationEnergy: null,
      density: 37.1,
      meltingPoint: null,
      boilingPoint: null,
      discoveredBy: "Gesellschaft für Schwerionenforschung",
      yearDiscovered: 1981
    },
    earthItems: [
      { name: "Scientific Research", use: "Nuclear physics studies" },
      { name: "Element Synthesis", use: "Creating heavier elements" },
      { name: "Chemical Research", use: "Understanding transactinide chemistry" }
    ]
  },
  {
    name: "Hassium",
    symbol: "Hs",
    atomicNumber: 108,
    properties: {
      atomicMass: 269,
      category: "transition metal",
      group: 8,
      period: 7,
      block: "d",
      electronConfiguration: "[Rn]5f¹⁴6d⁶7s²",
      electronegativity: null,
      atomicRadius: null,
      ionizationEnergy: null,
      density: 40.7,
      meltingPoint: null,
      boilingPoint: null,
      discoveredBy: "Gesellschaft für Schwerionenforschung",
      yearDiscovered: 1984
    },
    earthItems: [
      { name: "Scientific Research", use: "Nuclear physics studies" },
      { name: "Element Synthesis", use: "Creating heavier elements" },
      { name: "Chemical Research", use: "Understanding transactinide chemistry" }
    ]
  },
  {
    name: "Meitnerium",
    symbol: "Mt",
    atomicNumber: 109,
    properties: {
      atomicMass: 278,
      category: "transition metal",
      group: 9,
      period: 7,
      block: "d",
      electronConfiguration: "[Rn]5f¹⁴6d⁷7s²",
      electronegativity: null,
      atomicRadius: null,
      ionizationEnergy: null,
      density: 37.4,
      meltingPoint: null,
      boilingPoint: null,
      discoveredBy: "Gesellschaft für Schwerionenforschung",
      yearDiscovered: 1982
    },
    earthItems: [
      { name: "Scientific Research", use: "Nuclear physics studies" },
      { name: "Element Synthesis", use: "Creating heavier elements" },
      { name: "Chemical Research", use: "Understanding transactinide chemistry" }
    ]
  },
  {
    name: "Darmstadtium",
    symbol: "Ds",
    atomicNumber: 110,
    properties: {
      atomicMass: 281,
      category: "transition metal",
      group: 10,
      period: 7,
      block: "d",
      electronConfiguration: "[Rn]5f¹⁴6d⁸7s²",
      electronegativity: null,
      atomicRadius: null,
      ionizationEnergy: null,
      density: 34.8,
      meltingPoint: null,
      boilingPoint: null,
      discoveredBy: "Gesellschaft für Schwerionenforschung",
      yearDiscovered: 1994
    },
    earthItems: [
      { name: "Scientific Research", use: "Nuclear physics studies" },
      { name: "Element Synthesis", use: "Creating heavier elements" },
      { name: "Chemical Research", use: "Understanding transactinide chemistry" }
    ]
  },
  {
    name: "Roentgenium",
    symbol: "Rg",
    atomicNumber: 111,
    properties: {
      atomicMass: 282,
      category: "transition metal",
      group: 11,
      period: 7,
      block: "d",
      electronConfiguration: "[Rn]5f¹⁴6d⁹7s²",
      electronegativity: null,
      atomicRadius: null,
      ionizationEnergy: null,
      density: 28.7,
      meltingPoint: null,
      boilingPoint: null,
      discoveredBy: "Gesellschaft für Schwerionenforschung",
      yearDiscovered: 1994
    },
    earthItems: [
      { name: "Scientific Research", use: "Nuclear physics studies" },
      { name: "Element Synthesis", use: "Creating heavier elements" },
      { name: "Chemical Research", use: "Understanding transactinide chemistry" }
    ]
  },
  {
    name: "Copernicium",
    symbol: "Cn",
    atomicNumber: 112,
    properties: {
      atomicMass: 285,
      category: "transition metal",
      group: 12,
      period: 7,
      block: "d",
      electronConfiguration: "[Rn]5f¹⁴6d¹⁰7s²",
      electronegativity: null,
      atomicRadius: null,
      ionizationEnergy: null,
      density: 23.7,
      meltingPoint: null,
      boilingPoint: null,
      discoveredBy: "Gesellschaft für Schwerionenforschung",
      yearDiscovered: 1996
    },
    earthItems: [
      { name: "Scientific Research", use: "Nuclear physics studies" },
      { name: "Element Synthesis", use: "Creating heavier elements" },
      { name: "Chemical Research", use: "Understanding transactinide chemistry" }
    ]
  },
  {
    name: "Nihonium",
    symbol: "Nh",
    atomicNumber: 113,
    properties: {
      atomicMass: 286,
      category: "post-transition metal",
      group: 13,
      period: 7,
      block: "p",
      electronConfiguration: "[Rn]5f¹⁴6d¹⁰7s²7p¹",
      electronegativity: null,
      atomicRadius: null,
      ionizationEnergy: null,
      density: 16,
      meltingPoint: 700,
      boilingPoint: 1400,
      discoveredBy: "RIKEN",
      yearDiscovered: 2004
    },
    earthItems: [
      { name: "Scientific Research", use: "Nuclear physics studies" },
      { name: "Element Synthesis", use: "Creating heavier elements" },
      { name: "Chemical Research", use: "Understanding superheavy element chemistry" }
    ]
  },
  {
    name: "Flerovium",
    symbol: "Fl",
    atomicNumber: 114,
    properties: {
      atomicMass: 289,
      category: "post-transition metal",
      group: 14,
      period: 7,
      block: "p",
      electronConfiguration: "[Rn]5f¹⁴6d¹⁰7s²7p²",
      electronegativity: null,
      atomicRadius: null,
      ionizationEnergy: null,
      density: 14,
      meltingPoint: 340,
      boilingPoint: 420,
      discoveredBy: "Joint Institute for Nuclear Research",
      yearDiscovered: 1999
    },
    earthItems: [
      { name: "Scientific Research", use: "Nuclear physics studies" },
      { name: "Element Synthesis", use: "Creating heavier elements" },
      { name: "Chemical Research", use: "Understanding superheavy element chemistry" }
    ]
  },
  {
    name: "Moscovium",
    symbol: "Mc",
    atomicNumber: 115,
    properties: {
      atomicMass: 290,
      category: "post-transition metal",
      group: 15,
      period: 7,
      block: "p",
      electronConfiguration: "[Rn]5f¹⁴6d¹⁰7s²7p³",
      electronegativity: null,
      atomicRadius: null,
      ionizationEnergy: null,
      density: 13.5,
      meltingPoint: 700,
      boilingPoint: 1400,
      discoveredBy: "Joint Institute for Nuclear Research, Lawrence Livermore National Laboratory",
      yearDiscovered: 2003
    },
    earthItems: [
      { name: "Scientific Research", use: "Nuclear physics studies" },
      { name: "Element Synthesis", use: "Creating heavier elements" },
      { name: "Chemical Research", use: "Understanding superheavy element chemistry" }
    ]
  },
  {
    name: "Livermorium",
    symbol: "Lv",
    atomicNumber: 116,
    properties: {
      atomicMass: 293,
      category: "post-transition metal",
      group: 16,
      period: 7,
      block: "p",
      electronConfiguration: "[Rn]5f¹⁴6d¹⁰7s²7p⁴",
      electronegativity: null,
      atomicRadius: null,
      ionizationEnergy: null,
      density: 12.9,
      meltingPoint: 709,
      boilingPoint: 1085,
      discoveredBy: "Joint Institute for Nuclear Research, Lawrence Livermore National Laboratory",
      yearDiscovered: 2000
    },
    earthItems: [
      { name: "Scientific Research", use: "Nuclear physics studies" },
      { name: "Element Synthesis", use: "Creating heavier elements" },
      { name: "Chemical Research", use: "Understanding superheavy element chemistry" }
    ]
  },
  {
    name: "Tennessine",
    symbol: "Ts",
    atomicNumber: 117,
    properties: {
      atomicMass: 294,
      category: "halogen",
      group: 17,
      period: 7,
      block: "p",
      electronConfiguration: "[Rn]5f¹⁴6d¹⁰7s²7p⁵",
      electronegativity: null,
      atomicRadius: null,
      ionizationEnergy: null,
      density: 7.2,
      meltingPoint: 723,
      boilingPoint: 883,
      discoveredBy: "Joint Institute for Nuclear Research, Oak Ridge National Laboratory",
      yearDiscovered: 2010
    },
    earthItems: [
      { name: "Scientific Research", use: "Nuclear physics studies" },
      { name: "Element Synthesis", use: "Creating heavier elements" },
      { name: "Chemical Research", use: "Understanding superheavy element chemistry" }
    ]
  },
  {
    name: "Oganesson",
    symbol: "Og",
    atomicNumber: 118,
    properties: {
      atomicMass: 294,
      category: "noble gas",
      group: 18,
      period: 7,
      block: "p",
      electronConfiguration: "[Rn]5f¹⁴6d¹⁰7s²7p⁶",
      electronegativity: null,
      atomicRadius: null,
      ionizationEnergy: null,
      density: 5,
      meltingPoint: 325,
      boilingPoint: 450,
      discoveredBy: "Joint Institute for Nuclear Research, Lawrence Livermore National Laboratory",
      yearDiscovered: 2002
    },
    earthItems: [
      { name: "Scientific Research", use: "Nuclear physics studies" },
      { name: "Element Synthesis", use: "Creating heavier elements" },
      { name: "Chemical Research", use: "Understanding superheavy element chemistry" }
    ]
  }
];

export const getElementByAtomicNumber = (atomicNumber: number): Element | undefined => {
  return elements.find(element => element.atomicNumber === atomicNumber);
};

export const getElementBySymbol = (symbol: string): Element | undefined => {
  return elements.find(element => element.symbol === symbol);
};

export const getElementByName = (name: string): Element | undefined => {
  return elements.find(element => element.name.toLowerCase() === name.toLowerCase());
};
