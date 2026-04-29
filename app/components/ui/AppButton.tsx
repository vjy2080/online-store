import React from "react";
import { classNames } from "@/app/lib/utils";
import { ButtonProps, ButtonVariant, ButtonSize } from "@/app/types";

const variantStyles: Record<ButtonVariant, string> = {
    primary:
        "bg-blue-600 hover:bg-blue-700 text-white border border-blue-600 hover:border-blue-700",
    secondary:
        "bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-200 hover:border-slate-300",
    danger:
        "bg-red-600 hover:bg-red-700 text-white border border-red-600 hover:border-red-700",
    ghost: "bg-transparent hover:bg-slate-100 text-slate-900 border border-slate-200",
};

const sizeStyles: Record<ButtonSize, string> = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
};

export const AppButton: React.FC<ButtonProps> = ({
    variant = "primary",
    size = "md",
    disabled = false,
    loading = false,
    children,
    onClick,
    className,
}) => {
    const baseStyles =
        "inline-flex items-center justify-center font-semibold rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";
    const variantClass = variantStyles[variant];
    const sizeClass = sizeStyles[size];

    return (
        <button
            className={classNames(baseStyles, variantClass, sizeClass, className)}
            disabled={disabled || loading}
            onClick={onClick}
            type="button"
        >
            {loading ? (
                <>
                    <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4"
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
                    Loading...
                </>
            ) : (
                children
            )}
        </button>
    );
};
