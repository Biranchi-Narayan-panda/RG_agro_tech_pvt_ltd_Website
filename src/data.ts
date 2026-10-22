export const company = {
  name: "Radha Gobinda Agro Tech Private Limited",
  shortName: "RG Agro Tech",
  tagline: "Sustainable Farming | Pure Nutrition | A Better Future",
  phone: "06742915041",
  phoneHref: "tel:+916742915041",
  email: "hr@rgagrotechpvtltd.com",
  registeredOffice: [
    "Plot No: 616/2776, Phase-3, Duplex-1,",
    "Metro Satellite City, Hanspal, Post: Naharakanta,",
    "Near Puri Canal Road, Bhubaneswar,",
    "Dist: Khordha, Odisha - 752101",
  ],
  factoryAddress: ["At: Sana Maitapur,", "Po: Ranital,", "Dist: Balasore, Odisha - 756111"],
};

export const verticals = [
  {
    id: "dairy",
    icon: "cow",
    title: "Dairy Farming",
    subtitle: "Gir, Sahiwal, HF & Cross Breed",
    body: "A 1500-strong herd of indigenous and high-yield breeds raised in free-stall, climate-controlled sheds with scientific nutrition, veterinary care and RFID-tagged health tracking.",
    points: ["1500 cow capacity", "Indigenous A2 breeds", "24x7 vet supervision"],
  },
  {
    id: "milk",
    icon: "milk",
    title: "Milk Processing",
    subtitle: "Milk, Curd, Paneer, Ghee, Butter & More",
    body: "Automated milking parlours feed a chilled, fully traceable processing line producing fresh milk and a full value-added range — all packed within hours of milking.",
    points: ["30,000 litres / day", "Zero-touch milking", "Cold chain to doorstep"],
  },
  {
    id: "water",
    icon: "water",
    title: "Mineral Water",
    subtitle: "Our Own Bottling Plant",
    body: "A dedicated packaged drinking water unit with multi-stage RO, UV and ozone treatment, automated rinsing-filling-capping and in-house laboratory testing of every batch.",
    points: ["BIS-grade process", "Automated bottling", "Batch lab testing"],
  },
  {
    id: "solar",
    icon: "solar",
    title: "Solar Power",
    subtitle: "Clean & Renewable Energy",
    body: "Rooftop and ground-mounted solar arrays across sheds and the processing block power the campus with clean energy and keep our carbon footprint remarkably low.",
    points: ["Shed-top solar arrays", "Lower energy cost", "Green campus"],
  },
  {
    id: "bio",
    icon: "leaf",
    title: "Bio Power Plant",
    subtitle: "From Waste to Green Energy",
    body: "Cow dung and farm waste are converted into biogas and organic manure — closing the loop so that nothing leaves our farm as waste.",
    points: ["Biogas generation", "Organic manure", "Zero-waste cycle"],
  },
] as const;
