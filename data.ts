import { Location, User } from "./types/api";

export const inventory = [
  {
    id: "1",
    name: "Vaseline Jelly",
    sku: "2ijwi",
    categoryId: "Cosmetcis",
    quantity: 203,
    unit: "Packs",
    supplierId: "Julie",
    locationId: "Zone YKX",
    batchId: "OP901D",
    createdAt: '2022'
  },
  {
    id: "2",
    name: "Vaseline Lotion",
    sku: "tehr5",
    categoryId: "Cosmetcis",
    quantity: 39,
    unit: "Packs",
    supplierId: "Julie",
    locationId: "Zone YKX",
    batchId: "OP901D",
    createdAt: '2022'
  },
];


export const users: User[] = [
  {
    id: "1",
    name: "Gandalf Grey",
    email: "gandalfDgrey@gmail.com ",
    phone: "+1 (713) 123 4567",
    emailVerified: true,
    role: "admin",
    isActive: true,
    createdAt: new Date("2023-01-15T08:30:00Z"),
    updatedAt: new Date("2024-10-28T14:20:00Z")
  },
  {
    id: "2",
    name: "Blues clues",
    email: "bluey@gmail.com",
    phone: "+1 (713) 123 4567",
    emailVerified: true,
    createdBy: "Gandalf Grey",
    role: "staff",
    isActive: true,
    location: {
      id: "loc_002",
      name: "Los Angeles Distribution Center",
      code: "DC-LA",
    },
    createdAt: new Date("2023-01-15T08:30:00Z"),
    updatedAt: new Date("2024-10-28T14:20:00Z")
  },
]