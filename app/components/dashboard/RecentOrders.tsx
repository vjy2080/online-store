import React from "react";
import { AppCard } from "@/app/components/ui/AppCard";
import { AppText } from "@/app/components/ui/AppText";
import { AppBadge } from "@/app/components/ui/AppBadge";
import { Order } from "@/app/types";
import { ORDER_STATUSES } from "@/app/constants";
import { formatDate, formatCurrency } from "@/app/lib/utils";

interface RecentOrdersProps {
    orders: Order[];
}

export const RecentOrders: React.FC<RecentOrdersProps> = ({ orders }) => {
    return (
        <AppCard title="Recent Orders" subtitle="Latest transactions from your store">
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-slate-200 dark:border-slate-800">
                            <th className="text-left py-3 px-2 text-sm font-semibold text-slate-600 dark:text-slate-400">
                                Order ID
                            </th>
                            <th className="text-left py-3 px-2 text-sm font-semibold text-slate-600 dark:text-slate-400">
                                Customer
                            </th>
                            <th className="text-left py-3 px-2 text-sm font-semibold text-slate-600 dark:text-slate-400">
                                Date
                            </th>
                            <th className="text-left py-3 px-2 text-sm font-semibold text-slate-600 dark:text-slate-400">
                                Amount
                            </th>
                            <th className="text-left py-3 px-2 text-sm font-semibold text-slate-600 dark:text-slate-400">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => {
                            const statusConfig = ORDER_STATUSES[order.status];
                            return (
                                <tr
                                    key={order.id}
                                    className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                                >
                                    <td className="py-3 px-2 text-sm font-medium text-slate-900 dark:text-slate-50">
                                        #{order.id.toUpperCase().slice(0, 6)}
                                    </td>
                                    <td className="py-3 px-2 text-sm text-slate-600 dark:text-slate-400">
                                        {order.customerName}
                                    </td>
                                    <td className="py-3 px-2 text-sm text-slate-600 dark:text-slate-400">
                                        {formatDate(order.date)}
                                    </td>
                                    <td className="py-3 px-2 text-sm font-semibold text-slate-900 dark:text-slate-50">
                                        {formatCurrency(order.total)}
                                    </td>
                                    <td className="py-3 px-2 text-sm">
                                        <AppBadge
                                            label={statusConfig.label}
                                            variant={
                                                order.status === "delivered"
                                                    ? "success"
                                                    : order.status === "cancelled"
                                                        ? "danger"
                                                        : order.status === "shipped"
                                                            ? "info"
                                                            : "warning"
                                            }
                                            size="sm"
                                        />
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </AppCard>
    );
};
