import { InventoryItem, StockLevel, StockSummary } from "@/types/api";

export const dummyInventoryItems: InventoryItem[] = [
  {
    id: "item_001",
    sku: "WM-2024-001",
    name: "Wireless Mouse",
    description: "Ergonomic wireless mouse with 2.4GHz connectivity and adjustable DPI settings. Features 6 programmable buttons and rechargeable battery with up to 60 days of use.",
    category: "Electronics",
    weight: 0.15,
    weightUnit: "kg",
    dimensions: {
      length: 12.5,
      width: 7.5,
      height: 4.2,
      unit: "cm"
    },
    size: "Medium",
    imageUrl: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400",
    unitCost: 24.99,
    requiresSpecialHandling: false,
    fragile: true,
    isActive: true,
    createdAt: new Date("2024-01-15T08:30:00Z"),
    updatedAt: new Date("2024-10-30T14:20:00Z")
  },
  {
    id: "item_002",
    sku: "KB-MECH-001",
    name: "Mechanical Keyboard",
    description: "Full-size mechanical keyboard with RGB backlighting, hot-swappable switches, and aluminum frame. Cherry MX Blue switches for tactile feedback.",
    category: "Electronics",
    weight: 1.2,
    weightUnit: "kg",
    dimensions: {
      length: 44,
      width: 13.5,
      height: 3.8,
      unit: "cm"
    },
    size: "Full Size",
    imageUrl: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=400",
    unitCost: 89.99,
    requiresSpecialHandling: false,
    fragile: true,
    isActive: true,
    createdAt: new Date("2024-01-20T10:00:00Z"),
    updatedAt: new Date("2024-10-28T09:15:00Z")
  },
  {
    id: "item_003",
    sku: "CAB-USB-C-001",
    name: "USB-C Cable 2M",
    description: "Braided USB-C to USB-C cable, 2 meters length. Supports 100W power delivery and USB 3.1 Gen 2 data transfer speeds up to 10Gbps.",
    category: "Accessories",
    weight: 0.05,
    weightUnit: "kg",
    dimensions: {
      length: 200,
      width: 0.6,
      height: 0.6,
      unit: "cm"
    },
    imageUrl: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400",
    unitCost: 12.99,
    requiresSpecialHandling: false,
    fragile: false,
    isActive: true,
    createdAt: new Date("2024-02-05T11:30:00Z"),
    updatedAt: new Date("2024-10-29T16:45:00Z")
  },
  {
    id: "item_004",
    sku: "LS-ADJ-001",
    name: "Adjustable Laptop Stand",
    description: "Aluminum laptop stand with 6 adjustable height positions. Compatible with 10-17 inch laptops. Includes cable management and cooling ventilation.",
    category: "Office",
    weight: 0.85,
    weightUnit: "kg",
    dimensions: {
      length: 26,
      width: 25,
      height: 5.5,
      unit: "cm"
    },
    size: "Universal",
    imageUrl: "https://images.unsplash.com/photo-1625225233840-695456021cde?w=400",
    unitCost: 45.00,
    requiresSpecialHandling: false,
    fragile: false,
    isActive: true,
    createdAt: new Date("2024-02-12T14:00:00Z"),
    updatedAt: new Date("2024-10-30T11:00:00Z")
  },
  {
    id: "item_005",
    sku: "HD-USB-4PORT",
    name: "4-Port USB Hub",
    description: "Compact 4-port USB 3.0 hub with individual power switches. Supports data transfer speeds up to 5Gbps. Plug and play, no drivers needed.",
    category: "Accessories",
    weight: 0.12,
    weightUnit: "kg",
    dimensions: {
      length: 10,
      width: 3.5,
      height: 1.8,
      unit: "cm"
    },
    imageUrl: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400",
    unitCost: 18.50,
    requiresSpecialHandling: false,
    fragile: false,
    isActive: true,
    createdAt: new Date("2024-02-18T09:00:00Z"),
    updatedAt: new Date("2024-10-27T13:30:00Z")
  },
  {
    id: "item_006",
    sku: "WC-HD-001",
    name: "HD Webcam 1080p",
    description: "Full HD 1080p webcam with built-in microphone and automatic light correction. 90-degree field of view, perfect for video conferencing and streaming.",
    category: "Electronics",
    weight: 0.18,
    weightUnit: "kg",
    dimensions: {
      length: 8.5,
      width: 3,
      height: 5,
      unit: "cm"
    },
    imageUrl: "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=400",
    unitCost: 55.00,
    requiresSpecialHandling: false,
    fragile: true,
    isActive: true,
    createdAt: new Date("2024-03-01T10:30:00Z"),
    updatedAt: new Date("2024-10-29T15:20:00Z")
  },
  {
    id: "item_007",
    sku: "HP-BT-001",
    name: "Bluetooth Headphones",
    description: "Over-ear wireless Bluetooth headphones with active noise cancellation. 30-hour battery life, comfortable memory foam cushions, and built-in microphone.",
    category: "Electronics",
    weight: 0.25,
    weightUnit: "kg",
    dimensions: {
      length: 18,
      width: 16,
      height: 8,
      unit: "cm"
    },
    size: "One Size",
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    unitCost: 79.99,
    requiresSpecialHandling: false,
    fragile: true,
    isActive: true,
    createdAt: new Date("2024-03-10T12:00:00Z"),
    updatedAt: new Date("2024-10-31T08:45:00Z")
  },
  {
    id: "item_008",
    sku: "MP-XL-001",
    name: "Extended Mouse Pad",
    description: "Extra-large gaming mouse pad with stitched edges and non-slip rubber base. Water-resistant surface, 90cm x 40cm.",
    category: "Accessories",
    weight: 0.4,
    weightUnit: "kg",
    dimensions: {
      length: 90,
      width: 40,
      height: 0.3,
      unit: "cm"
    },
    size: "XL",
    imageUrl: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400",
    unitCost: 15.99,
    requiresSpecialHandling: false,
    fragile: false,
    isActive: true,
    createdAt: new Date("2024-03-15T11:00:00Z"),
    updatedAt: new Date("2024-10-28T10:30:00Z")
  },
  {
    id: "item_009",
    sku: "MON-27-001",
    name: '27" LED Monitor',
    description: "27-inch Full HD LED monitor with IPS panel, 75Hz refresh rate, and HDMI/DisplayPort inputs. VESA mount compatible with built-in speakers.",
    category: "Electronics",
    weight: 4.5,
    weightUnit: "kg",
    dimensions: {
      length: 61,
      width: 18,
      height: 45,
      unit: "cm"
    },
    imageUrl: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400",
    unitCost: 189.99,
    requiresSpecialHandling: true,
    fragile: true,
    isActive: true,
    createdAt: new Date("2024-03-22T09:30:00Z"),
    updatedAt: new Date("2024-10-30T14:00:00Z")
  },
  {
    id: "item_010",
    sku: "DK-ORG-001",
    name: "Desk Organizer Set",
    description: "5-piece bamboo desk organizer set including pen holder, document tray, drawer organizer, and card holder. Eco-friendly and modern design.",
    category: "Office",
    weight: 1.1,
    weightUnit: "kg",
    dimensions: {
      length: 25,
      width: 15,
      height: 10,
      unit: "cm"
    },
    imageUrl: "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=400",
    unitCost: 32.50,
    requiresSpecialHandling: false,
    fragile: false,
    isActive: true,
    createdAt: new Date("2024-04-01T08:00:00Z"),
    updatedAt: new Date("2024-10-29T12:15:00Z")
  },
  {
    id: "item_011",
    sku: "CH-ERG-001",
    name: "Ergonomic Office Chair",
    description: "Adjustable ergonomic office chair with lumbar support, breathable mesh back, and adjustable armrests. 360-degree swivel and smooth-rolling casters.",
    category: "Office",
    weight: 15.5,
    weightUnit: "kg",
    dimensions: {
      length: 60,
      width: 60,
      height: 120,
      unit: "cm"
    },
    imageUrl: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=400",
    unitCost: 199.99,
    requiresSpecialHandling: true,
    fragile: false,
    isActive: true,
    createdAt: new Date("2024-04-10T10:00:00Z"),
    updatedAt: new Date("2024-10-27T09:00:00Z")
  },
  {
    id: "item_012",
    sku: "PB-20K-001",
    name: "20000mAh Power Bank",
    description: "High-capacity portable charger with dual USB outputs and USB-C input/output. Fast charging support, LED battery indicator, and compact design.",
    category: "Accessories",
    weight: 0.35,
    weightUnit: "kg",
    dimensions: {
      length: 15,
      width: 7,
      height: 2.5,
      unit: "cm"
    },
    imageUrl: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400",
    unitCost: 29.99,
    requiresSpecialHandling: true,
    fragile: false,
    isActive: true,
    createdAt: new Date("2024-04-15T11:30:00Z"),
    updatedAt: new Date("2024-10-30T16:20:00Z")
  },
  {
    id: "item_013",
    sku: "TB-PRO-001",
    name: "Graphics Tablet",
    description: "Digital drawing tablet with 8192 pressure levels and battery-free stylus. 10x6 inch active area, compatible with Windows and Mac.",
    category: "Electronics",
    weight: 0.65,
    weightUnit: "kg",
    dimensions: {
      length: 35,
      width: 22,
      height: 0.8,
      unit: "cm"
    },
    imageUrl: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400",
    unitCost: 75.00,
    requiresSpecialHandling: false,
    fragile: true,
    isActive: true,
    createdAt: new Date("2024-05-01T09:00:00Z"),
    updatedAt: new Date("2024-10-28T11:45:00Z")
  },
  {
    id: "item_014",
    sku: "LT-RING-001",
    name: "LED Ring Light",
    description: '10" LED ring light with tripod stand and phone holder. Dimmable with 3 color modes, perfect for video calls, streaming, and photography.',
    category: "Electronics",
    weight: 1.2,
    weightUnit: "kg",
    dimensions: {
      length: 26,
      width: 26,
      height: 45,
      unit: "cm"
    },
    imageUrl: "https://images.unsplash.com/photo-1598641795816-a84ac9eac903?w=400",
    unitCost: 42.00,
    requiresSpecialHandling: false,
    fragile: true,
    isActive: true,
    createdAt: new Date("2024-05-10T14:00:00Z"),
    updatedAt: new Date("2024-10-29T13:00:00Z")
  },
  {
    id: "item_015",
    sku: "SD-512GB-001",
    name: "512GB SD Card",
    description: "High-speed 512GB SDXC memory card with UHS-I U3 and V30 speed class. Read speeds up to 100MB/s, ideal for 4K video recording.",
    category: "Accessories",
    weight: 0.002,
    weightUnit: "kg",
    dimensions: {
      length: 3.2,
      width: 2.4,
      height: 0.2,
      unit: "cm"
    },
    imageUrl: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400",
    unitCost: 65.00,
    requiresSpecialHandling: false,
    fragile: false,
    isActive: true,
    createdAt: new Date("2024-05-20T10:30:00Z"),
    updatedAt: new Date("2024-10-30T08:00:00Z")
  },
  {
    id: "item_016",
    sku: "SP-BT-001",
    name: "Bluetooth Speaker",
    description: "Portable waterproof Bluetooth speaker with 360-degree sound. 12-hour battery life, IPX7 waterproof rating, and built-in microphone.",
    category: "Electronics",
    weight: 0.5,
    weightUnit: "kg",
    dimensions: {
      length: 18,
      width: 7,
      height: 7,
      unit: "cm"
    },
    imageUrl: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
    unitCost: 48.99,
    requiresSpecialHandling: false,
    fragile: true,
    isActive: true,
    createdAt: new Date("2024-06-01T11:00:00Z"),
    updatedAt: new Date("2024-10-31T09:30:00Z")
  },
  {
    id: "item_017",
    sku: "BAG-LAPTOP-15",
    name: '15" Laptop Backpack',
    description: "Professional laptop backpack with padded compartment for 15-inch laptops. Multiple pockets, USB charging port, and water-resistant material.",
    category: "Accessories",
    weight: 0.8,
    weightUnit: "kg",
    dimensions: {
      length: 45,
      width: 30,
      height: 15,
      unit: "cm"
    },
    imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    unitCost: 39.99,
    requiresSpecialHandling: false,
    fragile: false,
    isActive: true,
    createdAt: new Date("2024-06-10T09:00:00Z"),
    updatedAt: new Date("2024-10-28T14:30:00Z")
  },
  {
    id: "item_018",
    sku: "CM-DOCK-001",
    name: "USB-C Docking Station",
    description: "11-in-1 USB-C hub with dual HDMI, ethernet, SD/TF card reader, USB 3.0 ports, and 100W power delivery. Compatible with MacBook and Windows laptops.",
    category: "Accessories",
    weight: 0.22,
    weightUnit: "kg",
    dimensions: {
      length: 12,
      width: 5,
      height: 1.5,
      unit: "cm"
    },
    imageUrl: "https://images.unsplash.com/photo-1625225233840-695456021cde?w=400",
    unitCost: 68.00,
    requiresSpecialHandling: false,
    fragile: false,
    isActive: true,
    createdAt: new Date("2024-06-18T10:30:00Z"),
    updatedAt: new Date("2024-10-29T11:15:00Z")
  },
  {
    id: "item_019",
    sku: "WB-GLASS-001",
    name: "Glass Whiteboard",
    description: "Frameless tempered glass whiteboard, 90cm x 60cm. Magnetic surface with mounting hardware and marker tray included. Easy to clean and stain-resistant.",
    category: "Office",
    weight: 6.5,
    weightUnit: "kg",
    dimensions: {
      length: 90,
      width: 60,
      height: 0.6,
      unit: "cm"
    },
    imageUrl: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=400",
    unitCost: 85.00,
    requiresSpecialHandling: true,
    fragile: true,
    isActive: true,
    createdAt: new Date("2024-07-01T08:00:00Z"),
    updatedAt: new Date("2024-10-30T10:00:00Z")
  },
  {
    id: "item_020",
    sku: "FT-STAND-ADJ",
    name: "Adjustable Footrest",
    description: "Ergonomic footrest with adjustable height and tilt angle. Non-slip surface and sturdy construction for improved posture and comfort.",
    category: "Office",
    weight: 1.8,
    weightUnit: "kg",
    dimensions: {
      length: 45,
      width: 35,
      height: 15,
      unit: "cm"
    },
    imageUrl: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=400",
    unitCost: 28.50,
    requiresSpecialHandling: false,
    fragile: false,
    isActive: true,
    createdAt: new Date("2024-07-10T11:00:00Z"),
    updatedAt: new Date("2024-10-27T15:45:00Z")
  },
  {
    id: "item_021",
    sku: "PR-LASER-001",
    name: "Wireless Laser Pointer",
    description: "USB wireless presenter with laser pointer and page control. 30-meter range, plug-and-play, perfect for presentations and lectures.",
    category: "Accessories",
    weight: 0.045,
    weightUnit: "kg",
    dimensions: {
      length: 14,
      width: 2.5,
      height: 1.5,
      unit: "cm"
    },
    imageUrl: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400",
    unitCost: 22.99,
    requiresSpecialHandling: false,
    fragile: false,
    isActive: true,
    createdAt: new Date("2024-07-20T09:30:00Z"),
    updatedAt: new Date("2024-10-28T12:00:00Z")
  },
  {
    id: "item_022",
    sku: "NB-COOL-001",
    name: "Laptop Cooling Pad",
    description: "Laptop cooling pad with 5 quiet fans and adjustable height. Fits 12-17 inch laptops, dual USB ports, and LED lighting.",
    category: "Accessories",
    weight: 0.75,
    weightUnit: "kg",
    dimensions: {
      length: 38,
      width: 28,
      height: 3.5,
      unit: "cm"
    },
    imageUrl: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400",
    unitCost: 34.99,
    requiresSpecialHandling: false,
    fragile: false,
    isActive: true,
    createdAt: new Date("2024-08-01T10:00:00Z"),
    updatedAt: new Date("2024-10-29T14:20:00Z")
  },
  {
    id: "item_023",
    sku: "DP-HDMI-001",
    name: "DisplayPort to HDMI Cable",
    description: "DisplayPort to HDMI cable, 2 meters. Supports 4K@60Hz resolution, gold-plated connectors, and unidirectional connection.",
    category: "Accessories",
    weight: 0.08,
    weightUnit: "kg",
    dimensions: {
      length: 200,
      width: 0.8,
      height: 0.8,
      unit: "cm"
    },
    imageUrl: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400",
    unitCost: 16.50,
    requiresSpecialHandling: false,
    fragile: false,
    isActive: true,
    createdAt: new Date("2024-08-10T11:30:00Z"),
    updatedAt: new Date("2024-10-30T09:45:00Z")
  },
  {
    id: "item_024",
    sku: "TRP-PHONE-001",
    name: "Phone Tripod Mount",
    description: "Flexible phone tripod with Bluetooth remote. Adjustable height up to 110cm, 360-degree rotation, fits phones 2.2-3.3 inches wide.",
    category: "Accessories",
    weight: 0.35,
    weightUnit: "kg",
    dimensions: {
      length: 32,
      width: 8,
      height: 8,
      unit: "cm"
    },
    imageUrl: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=400",
    unitCost: 25.99,
    requiresSpecialHandling: false,
    fragile: false,
    isActive: true,
    createdAt: new Date("2024-08-20T09:00:00Z"),
    updatedAt: new Date("2024-10-31T10:15:00Z")
  },
  {
    id: "item_025",
    sku: "MT-ARM-DUAL",
    name: "Dual Monitor Arm Mount",
    description: "Dual monitor mount arm for 13-27 inch screens. Full motion adjustment, cable management, and VESA compatible (75x75, 100x100mm).",
    category: "Office",
    weight: 5.2,
    weightUnit: "kg",
    dimensions: {
      length: 60,
      width: 15,
      height: 50,
      unit: "cm"
    },
    imageUrl: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=400",
    unitCost: 95.00,
    requiresSpecialHandling: false,
    fragile: false,
    isActive: true,
    createdAt: new Date("2024-09-01T10:00:00Z"),
    updatedAt: new Date("2024-10-28T13:30:00Z")
  },
  {
    id: "item_026",
    sku: "KB-WRIST-001",
    name: "Keyboard Wrist Rest",
    description: "Memory foam keyboard wrist rest with non-slip rubber base. Ergonomic design to reduce wrist strain, 44cm length for full-size keyboards.",
    category: "Accessories",
    weight: 0.28,
    weightUnit: "kg",
    dimensions: {
      length: 44,
      width: 9,
      height: 2.5,
      unit: "cm"
    },
    imageUrl: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400",
    unitCost: 14.99,
    requiresSpecialHandling: false,
    fragile: false,
    isActive: true,
    createdAt: new Date("2024-09-10T11:00:00Z"),
    updatedAt: new Date("2024-10-29T15:00:00Z")
  },
  {
    id: "item_027",
    sku: "HD-EXT-2TB",
    name: "2TB External Hard Drive",
    description: "Portable 2TB external hard drive with USB 3.0 connectivity. Shock-resistant, compact design with automatic backup software included.",
    category: "Electronics",
    weight: 0.16,
    weightUnit: "kg",
    dimensions: {
      length: 11,
      width: 8,
      height: 1.5,
      unit: "cm"
    },
    imageUrl: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400",
    unitCost: 72.00,
    requiresSpecialHandling: false,
    fragile: true,
    isActive: true,
    createdAt: new Date("2024-09-20T09:30:00Z"),
    updatedAt: new Date("2024-10-30T11:30:00Z")
  },
  {
    id: "item_028",
    sku: "LMP-DESK-LED",
    name: "LED Desk Lamp",
    description: "Modern LED desk lamp with touch control and 5 brightness levels. USB charging port, adjustable arm, and energy-efficient design.",
    category: "Office",
    weight: 0.95,
    weightUnit: "kg",
    dimensions: {
      length: 38,
      width: 15,
      height: 45,
      unit: "cm"
    },
    imageUrl: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=400",
    unitCost: 36.99,
    requiresSpecialHandling: false,
    fragile: true,
    isActive: true,
    createdAt: new Date("2024-10-01T10:00:00Z"),
    updatedAt: new Date("2024-10-31T09:00:00Z")
  },
  {
    id: "item_029",
    sku: "WC-CHRG-3IN1",
    name: "3-in-1 Wireless Charger",
    description: "Wireless charging station for phone, watch, and earbuds. Fast charging support, foldable design, and LED indicator lights.",
    category: "Accessories",
    weight: 0.32,
    weightUnit: "kg",
    dimensions: {
      length: 18,
      width: 8,
      height: 2,
      unit: "cm"
    },
    imageUrl: "https://images.unsplash.com/photo-1591290619762-c588f7b4101b?w=400",
    unitCost: 42.50,
    requiresSpecialHandling: false,
    fragile: false,
    isActive: true,
    createdAt: new Date("2024-10-10T11:30:00Z"),
    updatedAt: new Date("2024-10-30T14:45:00Z")
  },
  {
    id: "item_030",
    sku: "OLD-PRINTER-001",
    name: "Inkjet Printer - Discontinued",
    description: "Legacy inkjet printer model, no longer in production. Limited parts availability.",
    category: "Electronics",
    weight: 5.8,
    weightUnit: "kg",
    dimensions: {
      length: 42,
      width: 36,
      height: 18,
      unit: "cm"
    },
    imageUrl: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400",
    unitCost: 85.00,
    requiresSpecialHandling: false,
    fragile: true,
    isActive: false,
    createdAt: new Date("2023-05-15T08:00:00Z"),
    updatedAt: new Date("2024-07-20T16:00:00Z")
  }
];

// Stock levels for the inventory items
// Single Inventory Item with Complete Stock Levels

export const sampleInventoryItem: InventoryItem = {
  id: "item_001",
  sku: "WM-2024-001",
  name: "Wireless Mouse",
  description: "Ergonomic wireless mouse with 2.4GHz connectivity and adjustable DPI settings. Features 6 programmable buttons and rechargeable battery with up to 60 days of use.",
  category: "Electronics",
  weight: 0.15,
  weightUnit: "kg",
  dimensions: {
    length: 12.5,
    width: 7.5,
    height: 4.2,
    unit: "cm"
  },
  size: "Medium",
  imageUrl: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400",
  unitCost: 24.99,
  requiresSpecialHandling: false,
  fragile: true,
  isActive: true,
  createdAt: new Date("2024-01-15T08:30:00Z"),
  updatedAt: new Date("2024-10-30T14:20:00Z")
};


export const sampleStockSummary: StockSummary = {
  inventoryItem: {
    id: "item_001",
    name: "Wireless Mouse",
  },
  totalQuantity: 1570, // Sum of all quantities
  totalReserved: 58, // Sum of all reserved
  totalAvailable: 1512, // Sum of all available
  locationCount: 8, // Number of locations with stock
  totalValue: 39213.30, // 1570 × $24.99
  lowStockLocations: 2,
  locationsWithStock: [
    {
      location: {
        id: "loc_001",
        code: "WH-NYC",
        name: "Central Warehouse NYC",
      },
      quantity: 450,
      reservedQuantity: 20,
      availableQuantity: 430,
      reorderPoint: 25,
      percentage: 28.7 // (450/1570) × 100
    },
    {
      location: {
        id: "loc_002",
        code: "DC-LA",
        name: "Los Angeles Distribution Center",
      },
      quantity: 320,
      reservedQuantity: 10,
      availableQuantity: 310,
      percentage: 20.4
    },
    {
      location: {
        id: "loc_003",
        code: "WH-CHI",
        name: "Chicago Warehouse",
      },
      quantity: 215,
      reservedQuantity: 5,
      availableQuantity: 210,
      percentage: 13.7
    },
    {
      location: {
        id: "loc_007",
        code: "WH-BOS",
        name: "Boston Warehouse",
      },
      quantity: 185,
      reservedQuantity: 7,
      availableQuantity: 178,
      percentage: 11.8
    },
    {
      location: {
        id: "loc_005",
        code: "DC-SEA",
        name: "Seattle Distribution Hub",
      },
      quantity: 165,
      reservedQuantity: 8,
      availableQuantity: 157,
      percentage: 10.5
    },
    {
      location: {
        id: "loc_004",
        code: "STORE-MIA",
        name: "Miami Retail Store",
      },
      quantity: 95,
      reservedQuantity: 5,
      availableQuantity: 90,
      percentage: 6.1
    },
    {
      location: {
        id: "loc_006",
        code: "STORE-ATX",
        name: "Austin Retail Store",
      },
      quantity: 78,
      reservedQuantity: 3,
      availableQuantity: 75,
      percentage: 5.0
    },
    {
      location: {
        id: "loc_009",
        code: "STORE-PDX",
        name: "Portland Retail Store",
      },
      quantity: 62,
      reservedQuantity: 0,
      availableQuantity: 62,
      percentage: 3.9
    }
  ]
};
