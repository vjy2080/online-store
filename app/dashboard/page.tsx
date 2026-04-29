"use client";

import React, { useState } from "react";
import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";
import { StatCard } from "@/app/components/dashboard/StatCard";
import { RecentOrders } from "@/app/components/dashboard/RecentOrders";
import { TopProducts } from "@/app/components/dashboard/TopProducts";
import { AppText } from "@/app/components/ui/AppText";
import { AppButton } from "@/app/components/ui/AppButton";
import { AppCard } from "@/app/components/ui/AppCard";
import { AppDropdown } from "@/app/components/ui/AppDropdown";
import { AppInput } from "@/app/components/ui/AppInput";
import { AppModal } from "@/app/components/ui/AppModal";
import { Order, Product, DropdownItem } from "@/app/types";

// Mock data
const mockOrders: Order[] = [
    {
        id: "ord-001",
        customerName: "John Anderson",
        total: 1250.99,
        status: "delivered",
        date: "2026-04-28",
        itemCount: 3,
    },
    {
        id: "ord-002",
        customerName: "Sarah Williams",
        total: 825.5,
        status: "shipped",
        date: "2026-04-27",
        itemCount: 2,
    },
    {
        id: "ord-003",
        customerName: "Michael Brown",
        total: 2100.0,
        status: "processing",
        date: "2026-04-26",
        itemCount: 5,
    },
    {
        id: "ord-004",
        customerName: "Emma Davis",
        total: 450.25,
        status: "pending",
        date: "2026-04-25",
        itemCount: 1,
    },
    {
        id: "ord-005",
        customerName: "David Miller",
        total: 1800.0,
        status: "delivered",
        date: "2026-04-24",
        itemCount: 4,
    },
];

const mockProducts: Product[] = [
    {
        id: "prod-001",
        name: "Eco-Friendly Water Bottle",
        price: 24.99,
        originalPrice: 34.99,
        image: "/images/product-1.jpg",
        category: "Sports",
        rating: 4.8,
        reviews: 128,
        inStock: true,
    },
    {
        id: "prod-002",
        name: "Sustainable Backpack",
        price: 79.99,
        originalPrice: 99.99,
        image: "/images/product-2.jpg",
        category: "Sports",
        rating: 4.6,
        reviews: 89,
        inStock: true,
    },
    {
        id: "prod-003",
        name: "Organic Cotton T-Shirt",
        price: 19.99,
        image: "/images/product-3.jpg",
        category: "Clothing",
        rating: 4.7,
        reviews: 156,
        inStock: false,
    },
    {
        id: "prod-004",
        name: "Bamboo Cutting Board Set",
        price: 44.99,
        originalPrice: 59.99,
        image: "/images/product-4.jpg",
        category: "Home & Garden",
        rating: 4.9,
        reviews: 201,
        inStock: true,
    },
];

const filterOptions: DropdownItem[] = [
    { id: "all", label: "All Products", value: "all" },
    { id: "in-stock", label: "In Stock", value: "in-stock" },
    { id: "out-stock", label: "Out of Stock", value: "out-stock" },
];

export default function Dashboard() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState<string | number>("all");
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-black">
            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8">
                <div className="max-w-7xl mx-auto">
                    {/* Welcome Section */}
                    <div className="mb-8">
                        <AppText variant="h2" weight="bold" className="mb-2">
                            Welcome back, Admin 👋
                        </AppText>
                        <AppText color="muted">
                            Here's an overview of your store performance
                        </AppText>
                    </div>

                    {/* Filter and Search Bar */}
                    <div className="flex flex-col md:flex-row gap-4 mb-8">
                        <div className="flex-1">
                            <AppInput
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                icon={
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                }
                            />
                        </div>
                        <div className="w-full md:w-48">
                            <AppDropdown
                                items={filterOptions}
                                onSelect={(item) => setSelectedFilter(item.id)}
                                value={selectedFilter}
                                placeholder="Filter by status"
                            />
                        </div>
                        <AppButton onClick={() => setIsModalOpen(true)}>
                            + Add Product
                        </AppButton>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <StatCard
                            icon={
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            }
                            label="Total Sales"
                            value="$28,450.99"
                            change="12.5%"
                            isPositive={true}
                        />
                        <StatCard
                            icon={
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            }
                            label="Orders"
                            value="482"
                            change="8.2%"
                            isPositive={true}
                        />
                        <StatCard
                            icon={
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 20h5v-2a3 3 0 00-5.856-1.487M15 10a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                            }
                            label="Customers"
                            value="1,234"
                            change="5.1%"
                            isPositive={true}
                        />
                        <StatCard
                            icon={
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                    />
                                </svg>
                            }
                            label="Conversion Rate"
                            value="3.24%"
                            change="2.3%"
                            isPositive={false}
                        />
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Recent Orders - Takes 2 columns */}
                        <div className="lg:col-span-2">
                            <RecentOrders orders={mockOrders} />
                        </div>

                        {/* Quick Stats */}
                        <div>
                            <AppCard title="Quick Stats" hoverable>
                                <div className="space-y-4">
                                    <div className="p-4 bg-linear-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg">
                                        <AppText variant="caption" color="muted" className="mb-1">
                                            Average Order Value
                                        </AppText>
                                        <AppText variant="h4" weight="bold" className="text-blue-600 dark:text-blue-400">
                                            $184.75
                                        </AppText>
                                    </div>
                                    <div className="p-4 bg-linear-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg">
                                        <AppText variant="caption" color="muted" className="mb-1">
                                            Inventory Value
                                        </AppText>
                                        <AppText variant="h4" weight="bold" className="text-green-600 dark:text-green-400">
                                            $45,230
                                        </AppText>
                                    </div>
                                    <div className="p-4 bg-linear-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg">
                                        <AppText variant="caption" color="muted" className="mb-1">
                                            Pending Orders
                                        </AppText>
                                        <AppText variant="h4" weight="bold" className="text-purple-600 dark:text-purple-400">
                                            12
                                        </AppText>
                                    </div>
                                </div>
                            </AppCard>
                        </div>
                    </div>

                    {/* Top Products Section */}
                    <div className="mt-6">
                        <TopProducts products={mockProducts} />
                    </div>
                </div>
            </main>

            {/* Add Product Modal */}
            <AppModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Add New Product"
                size="md"
                footer={
                    <>
                        <AppButton variant="secondary" onClick={() => setIsModalOpen(false)}>
                            Cancel
                        </AppButton>
                        <AppButton>Add Product</AppButton>
                    </>
                }
            >
                <div className="space-y-4">
                    <AppInput label="Product Name" placeholder="Enter product name" />
                    <AppInput label="Price" type="number" placeholder="Enter product price" />
                    <AppDropdown
                        items={filterOptions}
                        placeholder="Select category"
                    />
                    <AppInput
                        label="Description"
                        placeholder="Enter product description"
                    />
                </div>
            </AppModal>

            {/* Footer */}
            <Footer />
        </div>
    );
}
