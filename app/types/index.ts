/**
 * Common type definitions for the application
 */

export interface Product {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    category: string;
    rating: number;
    reviews: number;
    inStock: boolean;
}

export interface Order {
    id: string;
    customerName: string;
    total: number;
    status: OrderStatus;
    date: string;
    itemCount: number;
}

export type OrderStatus = "pending" | "processing" | "shipped" | "delivered" | "cancelled";

export interface DashboardStats {
    totalSales: number;
    totalOrders: number;
    totalCustomers: number;
    conversionRate: number;
}

export interface DropdownItem {
    id: string | number;
    label: string;
    value?: string | number;
    icon?: React.ReactNode;
}

export type ButtonVariant = "primary" | "secondary" | "danger" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps {
    variant?: ButtonVariant;
    size?: ButtonSize;
    disabled?: boolean;
    loading?: boolean;
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

export interface CardProps {
    children: React.ReactNode;
    className?: string;
    title?: string;
    subtitle?: string;
    footer?: React.ReactNode;
    hoverable?: boolean;
}
