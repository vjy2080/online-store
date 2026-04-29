/**
 * Application constants
 */

export const BRAND_NAME = "EcoMart";
export const COMPANY_DESCRIPTION = "Your trusted online marketplace";

export const NAV_ITEMS = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Products", href: "/products" },
    { label: "Orders", href: "/orders" },
    { label: "Customers", href: "/customers" },
    { label: "Analytics", href: "/analytics" },
] as const;

export const PRODUCT_CATEGORIES = [
    "Electronics",
    "Clothing",
    "Books",
    "Home & Garden",
    "Sports",
    "Toys",
    "Beauty",
] as const;

export const ORDER_STATUSES = {
    pending: { label: "Pending", color: "bg-yellow-100 text-yellow-800" },
    processing: { label: "Processing", color: "bg-blue-100 text-blue-800" },
    shipped: { label: "Shipped", color: "bg-purple-100 text-purple-800" },
    delivered: { label: "Delivered", color: "bg-green-100 text-green-800" },
    cancelled: { label: "Cancelled", color: "bg-red-100 text-red-800" },
} as const;

export const SORT_OPTIONS = [
    { id: "newest", label: "Newest" },
    { id: "price-low", label: "Price: Low to High" },
    { id: "price-high", label: "Price: High to Low" },
    { id: "rating", label: "Highest Rated" },
] as const;
