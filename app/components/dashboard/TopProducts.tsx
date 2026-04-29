import React from "react";
import { AppCard } from "@/app/components/ui/AppCard";
import { AppText } from "@/app/components/ui/AppText";
import { Product } from "@/app/types";
import { formatCurrency, calculateDiscount, truncateText } from "@/app/lib/utils";

interface TopProductsProps {
    products: Product[];
}

export const TopProducts: React.FC<TopProductsProps> = ({ products }) => {
    return (
        <AppCard title="Top Products" subtitle="Your best-selling items">
            <div className="grid grid-cols-1 gap-4">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                    >
                        {/* Product Info */}
                        <div className="flex items-center gap-4 flex-1">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex-shrink-0" />
                            <div className="flex-1 min-w-0">
                                <AppText
                                    variant="body"
                                    weight="semibold"
                                    truncate
                                    className="mb-1"
                                >
                                    {product.name}
                                </AppText>
                                <div className="flex items-center gap-2">
                                    <AppText variant="caption" color="muted">
                                        {product.category}
                                    </AppText>
                                    <span className="text-yellow-500">★</span>
                                    <AppText variant="caption" color="muted">
                                        {product.rating} ({product.reviews} reviews)
                                    </AppText>
                                </div>
                            </div>
                        </div>

                        {/* Price & Discount */}
                        <div className="text-right flex-shrink-0 ml-4">
                            <div className="flex items-center gap-2 justify-end mb-1">
                                <AppText variant="body" weight="bold">
                                    {formatCurrency(product.price)}
                                </AppText>
                                {product.originalPrice && (
                                    <>
                                        <AppText
                                            variant="caption"
                                            color="muted"
                                            className="line-through"
                                        >
                                            {formatCurrency(product.originalPrice)}
                                        </AppText>
                                        <span className="text-xs font-semibold text-red-600 dark:text-red-400">
                                            -{calculateDiscount(product.originalPrice, product.price)}%
                                        </span>
                                    </>
                                )}
                            </div>
                            <div className="flex justify-end">
                                {product.inStock ? (
                                    <span className="text-xs px-2 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded">
                                        In Stock
                                    </span>
                                ) : (
                                    <span className="text-xs px-2 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded">
                                        Out of Stock
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </AppCard>
    );
};
