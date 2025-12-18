import { Location } from "@/types/api";

export const dummyLocations: Location[] = [
  {
    id: "loc_001",
    name: "Central Warehouse NYC",
    code: "WH-NYC",
    type: "warehouse",
    address: {
      street: "789 Industrial Parkway",
      city: "Brooklyn",
      state: "NY",
      postalCode: "11220",
      country: "United States"
    },
    contactInfo: {
      phone: "+1 (718) 555-0123",
      email: "nyc.warehouse@company.com",
      managerName: "Michael Chen"
    },
    isActive: true,
    createdAt: new Date("2023-01-15T08:30:00Z"),
    updatedAt: new Date("2024-10-28T14:20:00Z")
  },
  {
    id: "loc_002",
    name: "Los Angeles Distribution Center",
    code: "DC-LA",
    type: "distribution_center",
    address: {
      street: "1550 Commerce Drive",
      city: "Los Angeles",
      state: "CA",
      postalCode: "90021",
      country: "United States"
    },
    contactInfo: {
      phone: "+1 (213) 555-0456",
      email: "la.distribution@company.com",
      managerName: "Sarah Martinez"
    },
    isActive: true,
    createdAt: new Date("2023-03-22T10:00:00Z"),
    updatedAt: new Date("2024-10-30T09:15:00Z")
  },
  {
    id: "loc_003",
    name: "Chicago Warehouse",
    code: "WH-CHI",
    type: "warehouse",
    address: {
      street: "2340 W Fulton Street",
      city: "Chicago",
      state: "IL",
      postalCode: "60612",
      country: "United States"
    },
    contactInfo: {
      phone: "+1 (312) 555-0789",
      email: "chicago.warehouse@company.com",
      managerName: "David Johnson"
    },
    isActive: true,
    createdAt: new Date("2023-05-10T11:45:00Z"),
    updatedAt: new Date("2024-10-29T16:30:00Z")
  },
  {
    id: "loc_004",
    name: "Miami Retail Store",
    code: "STORE-MIA",
    type: "store",
    address: {
      street: "8900 Biscayne Boulevard",
      city: "Miami",
      state: "FL",
      postalCode: "33138",
      country: "United States"
    },
    contactInfo: {
      phone: "+1 (305) 555-0234",
      email: "miami.store@company.com",
      managerName: "Isabella Rodriguez"
    },
    isActive: true,
    createdAt: new Date("2023-07-08T09:00:00Z"),
    updatedAt: new Date("2024-10-31T10:45:00Z")
  },
  {
    id: "loc_005",
    name: "Seattle Distribution Hub",
    code: "DC-SEA",
    type: "distribution_center",
    address: {
      street: "4567 Airport Way South",
      city: "Seattle",
      state: "WA",
      postalCode: "98108",
      country: "United States"
    },
    contactInfo: {
      phone: "+1 (206) 555-0567",
      email: "seattle.distribution@company.com",
      managerName: "Robert Kim"
    },
    isActive: true,
    createdAt: new Date("2023-08-19T13:20:00Z"),
    updatedAt: new Date("2024-10-30T11:00:00Z")
  },
  {
    id: "loc_006",
    name: "Austin Retail Store",
    code: "STORE-ATX",
    type: "store",
    address: {
      street: "1234 South Congress Avenue",
      city: "Austin",
      state: "TX",
      postalCode: "78704",
      country: "United States"
    },
    contactInfo: {
      phone: "+1 (512) 555-0890",
      email: "austin.store@company.com",
      managerName: "Jennifer Williams"
    },
    isActive: true,
    createdAt: new Date("2023-09-25T08:15:00Z"),
    updatedAt: new Date("2024-10-29T15:20:00Z")
  },
  {
    id: "loc_007",
    name: "Boston Warehouse",
    code: "WH-BOS",
    type: "warehouse",
    address: {
      street: "567 Harbor View Road",
      city: "Boston",
      state: "MA",
      postalCode: "02210",
      country: "United States"
    },
    contactInfo: {
      phone: "+1 (617) 555-0123",
      email: "boston.warehouse@company.com",
      managerName: "Patrick O'Brien"
    },
    isActive: true,
    createdAt: new Date("2023-11-03T10:30:00Z"),
    updatedAt: new Date("2024-10-28T13:45:00Z")
  },
  {
    id: "loc_008",
    name: "Phoenix Distribution Center",
    code: "DC-PHX",
    type: "distribution_center",
    address: {
      street: "7890 East Valley Drive",
      city: "Phoenix",
      state: "AZ",
      postalCode: "85034",
      country: "United States"
    },
    contactInfo: {
      phone: "+1 (602) 555-0456",
      email: "phoenix.distribution@company.com",
      managerName: "Maria Garcia"
    },
    isActive: true,
    createdAt: new Date("2024-01-17T09:00:00Z"),
    updatedAt: new Date("2024-10-30T08:30:00Z")
  },
  {
    id: "loc_009",
    name: "Portland Retail Store",
    code: "STORE-PDX",
    type: "store",
    address: {
      street: "2345 NW 23rd Avenue",
      city: "Portland",
      state: "OR",
      postalCode: "97210",
      country: "United States"
    },
    contactInfo: {
      phone: "+1 (503) 555-0789",
      email: "portland.store@company.com",
      managerName: "Emily Thompson"
    },
    isActive: true,
    createdAt: new Date("2024-02-14T11:00:00Z"),
    updatedAt: new Date("2024-10-31T09:15:00Z")
  },
  {
    id: "loc_010",
    name: "Denver Warehouse",
    code: "WH-DEN",
    type: "warehouse",
    address: {
      street: "3456 Industrial Boulevard",
      city: "Denver",
      state: "CO",
      postalCode: "80216",
      country: "United States"
    },
    contactInfo: {
      phone: "+1 (303) 555-0234",
      email: "denver.warehouse@company.com",
      managerName: "James Anderson"
    },
    isActive: true,
    createdAt: new Date("2024-03-22T14:30:00Z"),
    updatedAt: new Date("2024-10-29T17:00:00Z")
  },
  {
    id: "loc_011",
    name: "Atlanta Corporate Office",
    code: "OFF-ATL",
    type: "office",
    address: {
      street: "1500 Peachtree Street NE",
      city: "Atlanta",
      state: "GA",
      postalCode: "30309",
      country: "United States"
    },
    contactInfo: {
      phone: "+1 (404) 555-0567",
      email: "atlanta.office@company.com",
      managerName: "Lisa Brooks"
    },
    isActive: true,
    createdAt: new Date("2023-02-28T08:00:00Z"),
    updatedAt: new Date("2024-10-30T12:00:00Z")
  },
  {
    id: "loc_012",
    name: "San Francisco Retail Store",
    code: "STORE-SF",
    type: "store",
    address: {
      street: "789 Market Street",
      city: "San Francisco",
      state: "CA",
      postalCode: "94103",
      country: "United States"
    },
    contactInfo: {
      phone: "+1 (415) 555-0890",
      email: "sf.store@company.com",
      managerName: "Kevin Nguyen"
    },
    isActive: true,
    createdAt: new Date("2024-04-12T10:00:00Z"),
    updatedAt: new Date("2024-10-31T11:30:00Z")
  },
  {
    id: "loc_013",
    name: "Dallas Distribution Center",
    code: "DC-DFW",
    type: "distribution_center",
    address: {
      street: "5678 Interstate 35 East",
      city: "Dallas",
      state: "TX",
      postalCode: "75203",
      country: "United States"
    },
    contactInfo: {
      phone: "+1 (214) 555-0123",
      email: "dallas.distribution@company.com",
      managerName: "Amanda Davis"
    },
    isActive: true,
    createdAt: new Date("2024-05-20T09:30:00Z"),
    updatedAt: new Date("2024-10-28T14:45:00Z")
  },
  {
    id: "loc_014",
    name: "Philadelphia Warehouse - OLD",
    code: "WH-PHL-OLD",
    type: "warehouse",
    address: {
      street: "4321 Delaware Avenue",
      city: "Philadelphia",
      state: "PA",
      postalCode: "19125",
      country: "United States"
    },
    contactInfo: {
      phone: "+1 (215) 555-0456",
      email: "philly.old@company.com",
      managerName: "Thomas Wright"
    },
    isActive: false,
    createdAt: new Date("2022-11-10T07:00:00Z"),
    updatedAt: new Date("2024-06-15T16:00:00Z")
  },
  {
    id: "loc_015",
    name: "Nashville Retail Store",
    code: "STORE-NSH",
    type: "store",
    address: {
      street: "1200 Broadway",
      city: "Nashville",
      state: "TN",
      postalCode: "37203",
      country: "United States"
    },
    contactInfo: {
      phone: "+1 (615) 555-0789",
      email: "nashville.store@company.com",
      managerName: "Rachel Cooper"
    },
    isActive: true,
    createdAt: new Date("2024-06-30T12:00:00Z"),
    updatedAt: new Date("2024-10-30T10:30:00Z")
  },
  {
    id: "loc_016",
    name: "Minneapolis Warehouse",
    code: "WH-MSP",
    type: "warehouse",
    address: {
      street: "6789 Hennepin Avenue",
      city: "Minneapolis",
      state: "MN",
      postalCode: "55403",
      country: "United States"
    },
    contactInfo: {
      phone: "+1 (612) 555-0234",
      email: "minneapolis.warehouse@company.com",
      managerName: "Andrew Peterson"
    },
    isActive: true,
    createdAt: new Date("2024-07-18T08:45:00Z"),
    updatedAt: new Date("2024-10-29T12:15:00Z")
  },
  {
    id: "loc_017",
    name: "Las Vegas Distribution Center",
    code: "DC-LAS",
    type: "distribution_center",
    address: {
      street: "8901 Las Vegas Boulevard",
      city: "Las Vegas",
      state: "NV",
      postalCode: "89123",
      country: "United States"
    },
    contactInfo: {
      phone: "+1 (702) 555-0567",
      email: "vegas.distribution@company.com",
      managerName: "Nicole Taylor"
    },
    isActive: true,
    createdAt: new Date("2024-08-05T13:00:00Z"),
    updatedAt: new Date("2024-10-31T08:00:00Z")
  },
  {
    id: "loc_018",
    name: "Detroit Warehouse - Closed",
    code: "WH-DET",
    type: "warehouse",
    address: {
      street: "2345 Michigan Avenue",
      city: "Detroit",
      state: "MI",
      postalCode: "48216",
      country: "United States"
    },
    contactInfo: {
      phone: "+1 (313) 555-0890",
      email: "detroit.closed@company.com",
      managerName: "Mark Stevens"
    },
    isActive: false,
    createdAt: new Date("2022-08-20T09:00:00Z"),
    updatedAt: new Date("2024-03-10T17:00:00Z")
  }
];

// Additional helper data for stock summaries (optional)
export const dummyLocationStockSummary: Record<string, {
  totalItems: number;
  totalSkus: number;
  lowStockItems: number;
  outOfStock: number;
  totalValue: number;
  lastCounted: Date;
}> = {
  "loc_001": {
    totalItems: 1245,
    totalSkus: 487,
    lowStockItems: 12,
    outOfStock: 3,
    totalValue: 245890.50,
    lastCounted: new Date("2024-10-28T10:00:00Z")
  },
  "loc_002": {
    totalItems: 3892,
    totalSkus: 623,
    lowStockItems: 8,
    outOfStock: 1,
    totalValue: 478920.75,
    lastCounted: new Date("2024-10-29T14:30:00Z")
  },
  "loc_003": {
    totalItems: 2156,
    totalSkus: 512,
    lowStockItems: 15,
    outOfStock: 5,
    totalValue: 312450.25,
    lastCounted: new Date("2024-10-27T09:15:00Z")
  },
  "loc_004": {
    totalItems: 456,
    totalSkus: 189,
    lowStockItems: 6,
    outOfStock: 2,
    totalValue: 89750.00,
    lastCounted: new Date("2024-10-30T16:00:00Z")
  },
  "loc_005": {
    totalItems: 4127,
    totalSkus: 701,
    lowStockItems: 10,
    outOfStock: 0,
    totalValue: 556780.50,
    lastCounted: new Date("2024-10-30T08:00:00Z")
  },
  "loc_006": {
    totalItems: 678,
    totalSkus: 234,
    lowStockItems: 9,
    outOfStock: 4,
    totalValue: 123890.00,
    lastCounted: new Date("2024-10-28T12:30:00Z")
  },
  "loc_007": {
    totalItems: 1834,
    totalSkus: 445,
    lowStockItems: 11,
    outOfStock: 2,
    totalValue: 267540.75,
    lastCounted: new Date("2024-10-26T11:00:00Z")
  },
  "loc_008": {
    totalItems: 2945,
    totalSkus: 578,
    lowStockItems: 7,
    outOfStock: 1,
    totalValue: 389670.25,
    lastCounted: new Date("2024-10-29T15:45:00Z")
  },
  "loc_009": {
    totalItems: 523,
    totalSkus: 198,
    lowStockItems: 8,
    outOfStock: 3,
    totalValue: 98450.50,
    lastCounted: new Date("2024-10-30T13:00:00Z")
  },
  "loc_010": {
    totalItems: 1567,
    totalSkus: 423,
    lowStockItems: 13,
    outOfStock: 6,
    totalValue: 234780.00,
    lastCounted: new Date("2024-10-27T10:30:00Z")
  },
  "loc_011": {
    totalItems: 89,
    totalSkus: 45,
    lowStockItems: 2,
    outOfStock: 0,
    totalValue: 15670.00,
    lastCounted: new Date("2024-10-25T09:00:00Z")
  },
  "loc_012": {
    totalItems: 812,
    totalSkus: 267,
    lowStockItems: 10,
    outOfStock: 5,
    totalValue: 145890.75,
    lastCounted: new Date("2024-10-31T08:30:00Z")
  },
  "loc_013": {
    totalItems: 3456,
    totalSkus: 645,
    lowStockItems: 9,
    outOfStock: 2,
    totalValue: 467230.50,
    lastCounted: new Date("2024-10-28T14:00:00Z")
  },
  "loc_014": {
    totalItems: 0,
    totalSkus: 0,
    lowStockItems: 0,
    outOfStock: 0,
    totalValue: 0,
    lastCounted: new Date("2024-06-15T16:00:00Z")
  },
  "loc_015": {
    totalItems: 634,
    totalSkus: 221,
    lowStockItems: 7,
    outOfStock: 3,
    totalValue: 112340.25,
    lastCounted: new Date("2024-10-29T11:30:00Z")
  },
  "loc_016": {
    totalItems: 1923,
    totalSkus: 467,
    lowStockItems: 14,
    outOfStock: 4,
    totalValue: 278920.00,
    lastCounted: new Date("2024-10-28T15:00:00Z")
  },
  "loc_017": {
    totalItems: 2789,
    totalSkus: 534,
    lowStockItems: 6,
    outOfStock: 1,
    totalValue: 367890.75,
    lastCounted: new Date("2024-10-30T12:45:00Z")
  },
  "loc_018": {
    totalItems: 0,
    totalSkus: 0,
    lowStockItems: 0,
    outOfStock: 0,
    totalValue: 0,
    lastCounted: new Date("2024-03-10T17:00:00Z")
  }
};