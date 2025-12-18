import { Shipment } from "@/types/api";

export const dummyShipments: Shipment[] = [
  // 1. Transfer Shipment - In Transit
  {
    id: "ship_001",
    shipmentNumber: "SHP-2024-001",
    type: "transfer",
    status: "in_transit",

    originLocation: {
      id: "loc_001",
      code: "WH-NYC",
      name: "Central Warehouse NYC",
      type: "warehouse"
    },
    destinationLocation: {
      id: "loc_002",
      code: "DC-LA",
      name: "Los Angeles Distribution Center",
      type: "distribution_center"
    },

    itemCount: 2,

    estimatedShipDate: new Date("2024-11-06T08:00:00Z"),
    actualShipDate: new Date("2024-11-06T09:30:00Z"),
    estimatedDeliveryDate: new Date("2024-11-08T17:00:00Z"),

    notes: "Urgent delivery for store restock",
    internalNotes: "Customer has requested expedited delivery",
    priority: "high",

    createdBy: "user_002", // Sarah Johnson (Manager)
    createdAt: new Date("2024-11-06T08:00:00Z"),
    updatedAt: new Date("2024-11-06T09:30:00Z")
  },
  {
    id: "ship_002",
    shipmentNumber: "SHP-2024-002",
    type: "customer_order",
    status: "pending",

    originLocation: {
      id: "loc_004",
      code: "STORE-MIA",
      name: "Miami Retail Store",
      type: "store"
    },

    customerInfo: {
      name: "John Doe",
      email: "john.doe@email.com",
      phone: "+1 (305) 555-1234",
      address: {
        street: "456 Ocean Drive",
        city: "Miami Beach",
        state: "FL",
        postalCode: "33139",
        country: "United States"
      }
    },

    itemCount: 5,

    carrier: "UPS",
    trackingNumber: "UPS987654321",
    shippingMethod: "Ground",
    shippingCost: 12.99,
    handlingFee: 2.00,
    totalCost: 14.99,
    requiresSignature: false,

    estimatedShipDate: new Date("2024-11-07T10:00:00Z"),
    estimatedDeliveryDate: new Date("2024-11-09T17:00:00Z"),

    notes: "Customer requested gift wrapping",
    priority: "normal",

    createdBy: "user_003", // Mike Chen (Staff)
    createdAt: new Date("2024-11-06T14:30:00Z"),
    updatedAt: new Date("2024-11-06T14:30:00Z")
  },

  // 3. Transfer Shipment - Delivered
  {
    id: "ship_003",
    shipmentNumber: "SHP-2024-003",
    type: "transfer",
    status: "delivered",

    originLocation: {
      id: "loc_003",
      code: "WH-CHI",
      name: "Chicago Warehouse",
      type: "warehouse"
    },
    destinationLocation: {
      id: "loc_006",
      code: "STORE-ATX",
      name: "Austin Retail Store",
      type: "store"
    },


    itemCount: 1,

    estimatedShipDate: new Date("2024-11-04T08:00:00Z"),
    actualShipDate: new Date("2024-11-04T10:15:00Z"),
    estimatedDeliveryDate: new Date("2024-11-05T17:00:00Z"),
    actualDeliveryDate: new Date("2024-11-05T15:30:00Z"),

    notes: "Monthly stock replenishment",
    priority: "normal",

    createdBy: "user_002", // Sarah Johnson (Manager)
    updatedBy: "user_006", // Staff at Austin store
    createdAt: new Date("2024-11-04T08:00:00Z"),
    updatedAt: new Date("2024-11-05T15:30:00Z")
  },

  // 4. Customer Order - In Transit
  {
    id: "ship_004",
    shipmentNumber: "SHP-2024-004",
    type: "customer_order",
    status: "in_transit",

    originLocation: {
      id: "loc_001",
      code: "WH-NYC",
      name: "Central Warehouse NYC",
      type: "warehouse"
    },

    customerInfo: {
      name: "Sarah Williams",
      email: "sarah.w@example.com",
      phone: "+1 (212) 555-9876",
      address: {
        street: "789 Broadway Ave, Apt 4B",
        city: "New York",
        state: "NY",
        postalCode: "10003",
        country: "United States"
      }
    },

    itemCount: 4,

    carrier: "FedEx",
    trackingNumber: "FDX987654321",
    shippingMethod: "Express",
    shippingCost: 24.99,
    handlingFee: 3.00,
    totalCost: 27.99,
    requiresSignature: true,

    estimatedShipDate: new Date("2024-11-05T08:00:00Z"),
    actualShipDate: new Date("2024-11-05T11:00:00Z"),
    estimatedDeliveryDate: new Date("2024-11-06T17:00:00Z"),

    notes: "Deliver between 9 AM - 5 PM",
    internalNotes: "Premium customer - ensure careful handling",
    priority: "high",

    createdBy: "user_001", // John Smith (Admin)
    createdAt: new Date("2024-11-05T08:00:00Z"),
    updatedAt: new Date("2024-11-05T11:00:00Z")
  },

  // 5. Transfer Shipment - Cancelled
  {
    id: "ship_005",
    shipmentNumber: "SHP-2024-005",
    type: "transfer",
    status: "cancelled",

    originLocation: {
      id: "loc_007",
      code: "WH-BOS",
      name: "Boston Warehouse",
      type: "warehouse"
    },
    destinationLocation: {
      id: "loc_009",
      code: "STORE-PDX",
      name: "Portland Retail Store",
      type: "store"
    },


    itemCount: 6,

    estimatedShipDate: new Date("2024-11-03T08:00:00Z"),
    estimatedDeliveryDate: new Date("2024-11-06T17:00:00Z"),

    notes: "Cancelled due to inventory recount",
    internalNotes: "Stock levels were incorrect, shipment no longer needed",
    priority: "low",

    createdBy: "user_002", // Sarah Johnson (Manager)
    updatedBy: "user_001", // John Smith (Admin) - who cancelled it
    createdAt: new Date("2024-11-03T08:00:00Z"),
    updatedAt: new Date("2024-11-03T14:00:00Z")
  }
];
