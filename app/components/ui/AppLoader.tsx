import React from "react";
import { classNames } from "@/app/lib/utils";

interface AppLoaderProps {
    size?: "sm" | "md" | "lg";
    variant?: "spinner" | "dots" | "pulse";
    className?: string;
    label?: string;
}

const sizeStyles: Record<string, string> = {
    sm: "h-6 w-6",
    md: "h-10 w-10",
    lg: "h-16 w-16",
};

export const AppLoader: React.FC<AppLoaderProps> = ({
    size = "md",
    variant = "spinner",
    className,
    label,
}) => {
    return (
        <div className={classNames("flex flex-col items-center justify-center gap-3", className)}>
            {variant === "spinner" && (
                <svg
                    className={classNames("animate-spin text-blue-600", sizeStyles[size])}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    />
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                </svg>
            )}

            {variant === "dots" && (
                <div className="flex gap-2">
                    {[0, 1, 2].map((i) => (
                        <div
                            key={i}
                            className={classNames(
                                "rounded-full bg-blue-600 animate-bounce",
                                size === "sm" && "h-2 w-2",
                                size === "md" && "h-3 w-3",
                                size === "lg" && "h-4 w-4"
                            )}
                            style={{ animationDelay: `${i * 0.1}s` }}
                        />
                    ))}
                </div>
            )}

            {variant === "pulse" && (
                <div
                    className={classNames("bg-blue-600 rounded-lg animate-pulse", sizeStyles[size])}
                />
            )}

            {label && <p className="text-sm text-slate-600 dark:text-slate-400">{label}</p>}
        </div>
    );
};
