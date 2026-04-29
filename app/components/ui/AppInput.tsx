import React from "react";
import { classNames } from "@/app/lib/utils";

interface AppInputProps {
    label?: string;
    placeholder?: string;
    type?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    error?: string;
    className?: string;
    icon?: React.ReactNode;
}

export const AppInput: React.FC<AppInputProps> = ({
    label,
    placeholder,
    type = "text",
    value,
    onChange,
    disabled = false,
    error,
    className,
    icon,
}) => {
    return (
        <div className={classNames("w-full", className)}>
            {label && (
                <label className="block text-sm font-semibold text-slate-900 dark:text-slate-50 mb-2">
                    {label}
                </label>
            )}

            <div className="relative">
                {icon && (
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
                        {icon}
                    </div>
                )}

                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                    className={classNames(
                        "w-full px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700",
                        "rounded-lg text-slate-900 dark:text-slate-50 placeholder-slate-500",
                        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                        "transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed",
                        icon ? "pl-10" : "",
                        error && "border-red-500 focus:ring-red-500"
                    )}
                />
            </div>

            {error && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
            )}
        </div>
    );
};
