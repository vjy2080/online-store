import React from "react";
import { AppCard } from "@/app/components/ui/AppCard";
import { AppText } from "@/app/components/ui/AppText";
import { formatCurrency } from "@/app/lib/utils";

interface StatCardProps {
    icon: React.ReactNode;
    label: string;
    value: string | number;
    change?: string;
    isPositive?: boolean;
}

export const StatCard: React.FC<StatCardProps> = ({
    icon,
    label,
    value,
    change,
    isPositive = true,
}) => {
    return (
        <AppCard>
            <div className="flex items-start justify-between">
                <div>
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-3">
                        {icon}
                    </div>
                    <AppText variant="caption" color="muted" className="mb-1">
                        {label}
                    </AppText>
                    <AppText variant="h3" weight="bold">
                        {value}
                    </AppText>
                </div>

                {change && (
                    <div
                        className={`px-3 py-1 rounded-lg text-sm font-semibold ${isPositive
                                ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                                : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                            }`}
                    >
                        {isPositive ? "↑" : "↓"} {change}
                    </div>
                )}
            </div>
        </AppCard>
    );
};
