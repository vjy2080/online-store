import React from "react";
import { classNames } from "@/app/lib/utils";

type TextVariant =
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "subtitle"
    | "body"
    | "caption"
    | "small";

interface AppTextProps {
    variant?: TextVariant;
    children: React.ReactNode;
    className?: string;
    color?: "primary" | "secondary" | "muted" | "danger" | "success";
    weight?: "light" | "normal" | "semibold" | "bold";
    align?: "left" | "center" | "right";
    truncate?: boolean;
}

const variantStyles: Record<TextVariant, string> = {
    h1: "text-4xl lg:text-5xl",
    h2: "text-3xl lg:text-4xl",
    h3: "text-2xl lg:text-3xl",
    h4: "text-xl lg:text-2xl",
    subtitle: "text-lg",
    body: "text-base",
    caption: "text-sm",
    small: "text-xs",
};

const colorStyles: Record<string, string> = {
    primary: "text-slate-900 dark:text-slate-50",
    secondary: "text-slate-600 dark:text-slate-400",
    muted: "text-slate-500 dark:text-slate-500",
    danger: "text-red-600 dark:text-red-400",
    success: "text-green-600 dark:text-green-400",
};

const weightStyles: Record<string, string> = {
    light: "font-light",
    normal: "font-normal",
    semibold: "font-semibold",
    bold: "font-bold",
};

const alignStyles: Record<string, string> = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
};

export const AppText: React.FC<AppTextProps> = ({
    variant = "body",
    children,
    className,
    color = "primary",
    weight = "normal",
    align = "left",
    truncate = false,
}) => {
    const baseClass = variantStyles[variant];
    const colorClass = colorStyles[color];
    const weightClass = weightStyles[weight];
    const alignClass = alignStyles[align];

    return (
        <div
            className={classNames(
                baseClass,
                colorClass,
                weightClass,
                alignClass,
                truncate && "truncate",
                className
            )}
        >
            {children}
        </div>
    );
};
