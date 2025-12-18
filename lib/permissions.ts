import { User, UserPermission, UserRole } from "@/types/api";

export const ROLE_PERMISSIONS: Record<UserRole, UserPermission[]> = {
  admin: [
    // Full access to everything
    "inventory:view", "inventory:create", "inventory:edit", "inventory:delete",
    "locations:view", "locations:create", "locations:edit", "locations:delete",
    "stock:view", "stock:adjust", "stock:transfer",
    "shipments:view", "shipments:create", "shipments:edit", "shipments:cancel", "shipments:delete",
    "users:view", "users:create", "users:edit", "users:deactivate", "users:delete",
    "reports:view", "reports:export"
  ],
  
  manager: [
    // Can manage operations but not users or delete locations
    "inventory:view", "inventory:create", "inventory:edit",
    "locations:view", "locations:edit", // Can't create/delete locations
    "stock:view", "stock:adjust", "stock:transfer",
    "shipments:view", "shipments:create", "shipments:edit", "shipments:cancel",
    "users:view", // Can view users but not manage them
    "reports:view", "reports:export"
  ],
  
  staff: [
    // Basic operational access, limited editing
    "inventory:view",
    "locations:view",
    "stock:view",
    "shipments:view", "shipments:create", "shipments:edit",
    "reports:view"
  ]
};

// Helper function to check permissions
export const hasPermission = (user: User, permission: UserPermission): boolean => {
  return ROLE_PERMISSIONS[user.role].includes(permission);
};

// Helper to check multiple permissions (all required)
export const hasAllPermissions = (user: User, permissions: UserPermission[]): boolean => {
  return permissions.every(p => hasPermission(user, p));
};

// Helper to check multiple permissions (any one required)
export const hasAnyPermission = (user: User, permissions: UserPermission[]): boolean => {
  return permissions.some(p => hasPermission(user, p));
};