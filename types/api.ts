export type BaseEntity = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Entity<T> = {
  [K in keyof T]: T[K];
} & BaseEntity;

export type InventoryItem = Entity<{
  sku: string;
  name: string;
  description?: string;
  category: string;
  weight: number;
  weightUnit: 'kg' | 'lbs';
  dimensions: {
    length: number;
    width: number;
    height: number;
    unit: "in" | "cm";
  };
  size?: string;
  imageUrl: string;
  unitCost: number;
  requiresSpecialHandling: boolean;
  fragile: boolean;
  isActive: boolean;
}>

export type StockSummary = {
  inventoryItem: Pick<InventoryItem, "id" | "name">;
  locationCount: number;

  totalQuantity: number;
  totalAvailable: number;
  totalReserved: number;
  totalValue: number;
  lowStockLocations: number;
  locationsWithStock: StockLevel[]
};

export type StockLevel = {
  location: Pick<Location, "id" | "code" | "name">;

  quantity: number; // Total physical quantity
  reservedQuantity: number; // Allocated but not yet shipped
  availableQuantity: number; // quantity - reservedQuantity (can be computed)
  percentage: number;
  reorderPoint?: number; // Minimum threshold before reorder
  lastCountedAt?: Date; // Last physical inventory count
};

export type LocationType = 'warehouse' | 'store' | 'distribution_center' | 'office';

export type Location = Entity<{
  name: string;
  code: string;
  type: LocationType;
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  contactInfo: {
    phone?: string;
    email?: string;
    managerName?: string;
  };
  isActive: boolean;
}>

export type Transaction = Entity<{
  itemId: string;
  quantity: number;
  userId: string;
  shipmentId: string;
  notes: string;
}>

// export type User = Entity<{
//   email: string;
//   phone: string;
//   name: string;
//   role: "admin" | "staff" | "manager",
//   location: Location
//   isActive: boolean;
// }>


export type UserRole = "admin" | "manager" | "staff";

export type UserPermission =
  // Inventory permissions
  | "inventory:view"
  | "inventory:create"
  | "inventory:edit"
  | "inventory:delete"
  // Location permissions
  | "locations:view"
  | "locations:create"
  | "locations:edit"
  | "locations:delete"
  // Stock permissions
  | "stock:view"
  | "stock:adjust"
  | "stock:transfer"
  // Shipment permissions
  | "shipments:view"
  | "shipments:create"
  | "shipments:edit"
  | "shipments:cancel"
  | "shipments:delete"
  // User management permissions
  | "users:view"
  | "users:create"
  | "users:edit"
  | "users:deactivate"
  | "users:delete"
  // Report permissions
  | "reports:view"
  | "reports:export";

export type User = Entity<{
  email: string;
  phone?: string;
  name: string;
  // password: string; // Hashed, never plain text
  role: UserRole;

  // Location assignment
  locationId?: Location["id"]; // Optional - admins may not be tied to one location
  location?: Pick<Location, "id" | "code" | "name">; // Populated when needed

  // Account status
  isActive: boolean;
  emailVerified: boolean;
  // mustChangePassword: boolean; // Force password change on first login

  // Tracking
  lastLoginAt?: Date;
  // passwordChangedAt?: Date;

  // Created by tracking
  createdBy?: User["id"]; // Which admin created this user
}>;

export type ShipmentType = 'transfer' | 'customer_order' | 'return' | 'supplier_delivery';

export type ShipmentStatus =
  | 'draft'
  | 'pending'
  | 'confirmed'
  | 'in_transit'
  | 'out_for_delivery'
  | 'delivered'
  | 'cancelled'
  | 'failed';

export type CustomerInfo = {
  name: string;
  email?: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    postalCode?: string;
    country: string;
  };
};

export type BaseShipment = Entity<
  {
    shipmentNumber: string; // e.g., "SHP-2024-001"
    status: ShipmentStatus;

    originLocation: Pick<Location, "id" | "name" | "code" | "type">;

    // Dates
    estimatedShipDate: Date;
    estimatedDeliveryDate: Date;
    actualShipDate?: Date;
    actualDeliveryDate?: Date;

    itemCount: number;

    // Additional info
    notes?: string;
    internalNotes?: string; // Private notes not visible on tracking
    priority?: 'low' | 'normal' | 'high' | 'urgent';

    // Metadata
    createdBy: string; // User ID
    updatedBy?: string;
  }
>

export type Shipment = BaseShipment & ({
  type: "customer_order";
  carrier: string; // e.g., "FedEx", "UPS", "DHL"
  trackingNumber: string;
  shippingMethod: string; // e.g., "Ground", "Express", "Overnight"
  shippingCost: number;
  handlingFee: number;
  requiresSignature: boolean;
  totalCost: number; // shippingCost + handlingFee

  customerInfo: CustomerInfo;
} | {
  type: "transfer";
  destinationLocation: Pick<Location, "id" | "name" | "code" | "type">; // null if to customer
})

export type ShipmentItem = {
  shipmentId: string;
  inventoryItemId: string;
  quantity: number;
  unitCost?: number; // Snapshot of cost at time of shipment
  totalCost?: number; // unitCost * quantity
  notes?: string; // Item-specific notes (e.g., "Handle with care")
};

// ============================================
// STOCK ADJUSTMENT TYPES
// ============================================

export type AdjustmentReason =
  | 'damaged'
  | 'lost'
  | 'stolen'
  | 'expired'
  | 'physical_count'
  | 'return_to_supplier'
  | 'customer_return'
  | 'other';

export type StockAdjustment = {
  id: string;
  adjustmentNumber: string; // e.g., "ADJ-2024-001"
  inventoryItemId: string;
  locationId: string;
  quantityChange: number; // Positive for addition, negative for removal
  previousQuantity: number;
  newQuantity: number;
  reason: AdjustmentReason;
  notes?: string;
  referenceNumber?: string; // Link to related document (RMA, etc.)
  createdBy: string;
  approvedBy?: string;
  createdAt: Date;
  updatedAt: Date;
};

// ============================================
// ACTIVITY LOG TYPES
// ============================================

export type ActivityCategory =
  | "inventory"
  | "stock"
  | "shipment"
  | "location"
  | "user"
  | "system";

export type ActivityAction =
  | "created"
  | "updated"
  | "deleted"
  | "activated"
  | "deactivated"
  | "status_changed"
  | "adjusted"
  | "transferred"
  | "restocked"
  | "shipped"
  | "received"
  | "cancelled"
  | "invited"
  | "login"
  | "logout";

export type ActivitySeverity =
  | "info"      // Normal operations
  | "warning"   // Important but not critical
  | "critical"; // High-impact actions

export type ActivityLog = Entity<{
  category: ActivityCategory;
  action: ActivityAction;
  severity: ActivitySeverity;

  // Description
  title: string; // Short summary (e.g., "Inventory item created")
  description: string; // Detailed description

  // Context
  entityType: string; // e.g., "inventory_item", "shipment", "user"
  entityId?: string; // ID of the affected entity
  entityName?: string; // Display name of entity (e.g., "Wireless Mouse")

  changes?: {
    field: string;
    oldValue: any;
    newValue: any;
  }[];

  // Metadata
  metadata?: Record<string, any>; // Additional contextual data

  // User info
  performedBy: User["id"];
  performedByUser?: Pick<User, "id" | "name" | "email" | "role">;

  // Location context (where the action happened)
  locationId?: Location["id"];
  location?: Pick<Location, "id" | "code" | "name">;

  // IP and device info (for security)
  ipAddress?: string;
  userAgent?: string;
}>;

export type RecentActivity = Entity<Pick<ActivityLog, "id" | "category" | "title" | "performedByUser" | "createdAt">>
