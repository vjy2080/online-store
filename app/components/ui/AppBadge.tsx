import React from "react";
import { classNames } from "@/app/lib/utils";

interface AppBadgeProps {
    label: string;
    variant?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
    size?: "sm" | "md";
    className?: string;
    icon?: React.ReactNode;
}

const variantStyles: Record<string, string> = {
    primary: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    secondary: "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300",
    success: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
    danger: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
    warning: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
    info: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300",
};

const sizeStyles: Record<string, string> = {
    sm: "px-2.5 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
};

export const AppBadge: React.FC<AppBadgeProps> = ({
    label,
    variant = "primary",
    size = "md",
    className,
    icon,
}) => {
    return (
        <span
            className={classNames(
                "inline-flex items-center gap-1.5 font-medium rounded-full transition-colors duration-200",
                variantStyles[variant],
                sizeStyles[size],
                className
            )}
        >
            {icon && <span>{icon}</span>}
            {label}
        </span>
    );
};
