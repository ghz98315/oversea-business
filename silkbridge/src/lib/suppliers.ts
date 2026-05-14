export interface Supplier {
  id: string;
  name: string;
  nameZh: string;
  city: string;
  cluster: string;
  established: number;
  employees: string;
  categories: string[];
  certifications: string[];
  isDirectFactory: boolean;
  verifiedDate: string;
  cooperationRating: number;
  qualityRating: number;
  moq: string;
  priceRange: string;
  sampleLeadTime: string;
  productionLeadTime: string;
  paymentMethods: string[];
  shippingPort: string;
  images: string[];
  productImages: string[];
  contactName: string;
  contactEmail: string;
  contactWechat: string;
  description: string;
  specialties: string[];
  isFree: boolean;
}

export const suppliers: Supplier[] = [
  {
    id: "yangjiang-kingstar",
    name: "Kingstar Knife Industry Co., Ltd",
    nameZh: "阳江金星刀具实业有限公司",
    city: "Yangjiang",
    cluster: "Knives & Hand Tools",
    established: 2008,
    employees: "200-500",
    categories: ["Kitchen Knives", "Chef Knives", "Knife Sets", "Scissors"],
    certifications: ["ISO 9001", "LFGB", "FDA", "SGS"],
    isDirectFactory: true,
    verifiedDate: "2026-03-15",
    cooperationRating: 5,
    qualityRating: 4,
    moq: "500 pieces",
    priceRange: "$3-12 per unit",
    sampleLeadTime: "5-7 days",
    productionLeadTime: "20-30 days",
    paymentMethods: ["T/T", "PayPal", "L/C"],
    shippingPort: "Guangzhou Port",
    images: ["https://images.unsplash.com/photo-1593618998160-e34014e67546?w=800&q=80"],
    productImages: ["https://images.unsplash.com/photo-1593618998160-e34014e67546?w=600&q=80"],
    contactName: "David Chen",
    contactEmail: "david@kingstarknife.com",
    contactWechat: "kingstar_david",
    description: "Established in 2008, Kingstar is a leading knife manufacturer in Yangjiang with over 15 years of export experience. Specializing in high-carbon stainless steel kitchen knives, they supply major brands across Europe and North America. Their factory covers 8,000 sqm with 6 production lines and strict QC at every stage.",
    specialties: ["High-carbon stainless steel", "Damascus pattern blades", "Custom handle materials", "OEM/ODM for major brands"],
    isFree: true,
  },
  {
    id: "dongguan-precision-tech",
    name: "Dongguan Precision Tech Manufacturing",
    nameZh: "东莞精密科技制造有限公司",
    city: "Dongguan",
    cluster: "Precision Parts & OEM",
    established: 2012,
    employees: "100-200",
    categories: ["CNC Machining", "Stamping", "Die Casting", "Surface Treatment"],
    certifications: ["ISO 9001", "ISO 14001", "IATF 16949"],
    isDirectFactory: true,
    verifiedDate: "2026-04-02",
    cooperationRating: 5,
    qualityRating: 5,
    moq: "100 pieces",
    priceRange: "$2-50 per unit (complexity dependent)",
    sampleLeadTime: "3-5 days",
    productionLeadTime: "15-25 days",
    paymentMethods: ["T/T", "PayPal"],
    shippingPort: "Shenzhen Port",
    images: ["https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80"],
    productImages: ["https://images.unsplash.com/photo-1586864387789-628af9feed72?w=600&q=80"],
    contactName: "Jason Liu",
    contactEmail: "jason@dgprecisiontech.com",
    contactWechat: "jason_precision",
    description: "A precision CNC machining specialist running Mazak and DMG Mori 5-axis machines. Serves automotive, medical device, and consumer electronics clients. ISO-certified with full CMM inspection capability. Known for tight tolerances (±0.01mm) and fast turnaround on prototypes.",
    specialties: ["5-axis CNC machining", "Tight tolerance ±0.01mm", "Rapid prototyping (3-day)", "Automotive-grade quality"],
    isFree: true,
  },
  {
    id: "foshan-alumax",
    name: "Foshan Alumax Building Materials",
    nameZh: "佛山铝美建材有限公司",
    city: "Foshan",
    cluster: "Aluminum & Building Hardware",
    established: 2005,
    employees: "500-1000",
    categories: ["Aluminum Extrusion", "Curtain Wall", "Window Profiles", "Industrial Profiles"],
    certifications: ["ISO 9001", "CE", "AS2047", "AAMA"],
    isDirectFactory: true,
    verifiedDate: "2026-02-20",
    cooperationRating: 4,
    qualityRating: 4,
    moq: "1 ton (per profile)",
    priceRange: "$2,800-3,500 per ton",
    sampleLeadTime: "7-10 days",
    productionLeadTime: "15-20 days",
    paymentMethods: ["T/T", "L/C"],
    shippingPort: "Guangzhou Port",
    images: ["https://images.unsplash.com/photo-1504917595217-d4dc5ebb6571?w=800&q=80"],
    productImages: ["https://images.unsplash.com/photo-1504917595217-d4dc5ebb6571?w=600&q=80"],
    contactName: "Michelle Wang",
    contactEmail: "michelle@alumaxfs.com",
    contactWechat: "alumax_michelle",
    description: "One of Foshan's largest aluminum extrusion manufacturers with 12 extrusion lines and annual capacity of 30,000 tons. Supplies architectural projects across Southeast Asia, Australia, and the Middle East. Full in-house anodizing, powder coating, and wood-grain transfer capabilities.",
    specialties: ["Custom profile design", "Anodizing & powder coating", "Large-scale architectural projects", "Australian standard compliance"],
    isFree: true,
  },
  {
    id: "guangzhou-uniforms-pro",
    name: "Guangzhou UniformsPro Garment Co.",
    nameZh: "广州优制服装有限公司",
    city: "Guangzhou",
    cluster: "Workwear & Corporate Uniforms",
    established: 2010,
    employees: "300-500",
    categories: ["Work Uniforms", "Safety Wear", "Corporate Apparel", "Hi-Vis Clothing"],
    certifications: ["ISO 9001", "BSCI", "OEKO-TEX"],
    isDirectFactory: true,
    verifiedDate: "2026-03-28",
    cooperationRating: 4,
    qualityRating: 4,
    moq: "300 pieces per style",
    priceRange: "$8-35 per piece",
    sampleLeadTime: "7-10 days",
    productionLeadTime: "25-35 days",
    paymentMethods: ["T/T", "PayPal", "Western Union"],
    shippingPort: "Guangzhou Port",
    images: ["https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80"],
    productImages: ["https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&q=80"],
    contactName: "Linda Zhang",
    contactEmail: "linda@uniformspro.cn",
    contactWechat: "uniformspro_linda",
    description: "Specializing in B2B workwear and corporate uniforms for international brands. Full vertical integration from fabric sourcing to finished garment. Experienced with EN ISO 20471 hi-vis standards, FR fabrics, and custom embroidery/printing. Flexible MOQ for first orders.",
    specialties: ["Hi-vis & FR workwear", "Custom embroidery & printing", "EN ISO 20471 compliance", "Flexible first-order MOQ"],
    isFree: false,
  },
  {
    id: "yangjiang-garden-master",
    name: "Yangjiang Garden Master Tools",
    nameZh: "阳江园艺大师工具有限公司",
    city: "Yangjiang",
    cluster: "Knives & Hand Tools",
    established: 2003,
    employees: "100-200",
    categories: ["Garden Shears", "Pruning Tools", "Hedge Trimmers", "Hand Tools"],
    certifications: ["ISO 9001", "GS", "CE"],
    isDirectFactory: true,
    verifiedDate: "2026-04-10",
    cooperationRating: 5,
    qualityRating: 5,
    moq: "1000 pieces",
    priceRange: "$2-15 per unit",
    sampleLeadTime: "5-7 days",
    productionLeadTime: "20-30 days",
    paymentMethods: ["T/T", "PayPal"],
    shippingPort: "Guangzhou Port",
    images: ["https://images.unsplash.com/photo-1590959651373-a3db0f38a961?w=800&q=80"],
    productImages: ["https://images.unsplash.com/photo-1590959651373-a3db0f38a961?w=600&q=80"],
    contactName: "Tom Wu",
    contactEmail: "tom@gardenmaster.cn",
    contactWechat: "gardenmaster_tom",
    description: "A 20+ year veteran in garden tool manufacturing. Supplies major European garden brands with pruning shears, loppers, and hedge tools. Known for ergonomic handle design and blade durability. GS-certified for the German market.",
    specialties: ["Ergonomic handle design", "SK5 steel blades", "German market specialist", "Private label for EU brands"],
    isFree: false,
  },
];

export function getAllSuppliers(): Supplier[] {
  return suppliers;
}

export function getSupplierById(id: string): Supplier | undefined {
  return suppliers.find((s) => s.id === id);
}

export function getFreeSuppliers(): Supplier[] {
  return suppliers.filter((s) => s.isFree);
}

export function getLockedSuppliers(): Supplier[] {
  return suppliers.filter((s) => !s.isFree);
}
