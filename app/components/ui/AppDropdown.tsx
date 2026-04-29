"use client";

import React, { useState } from "react";
import { classNames } from "@/app/lib/utils";
import { DropdownItem } from "@/app/types";

interface AppDropdownProps {
    items: DropdownItem[];
    onSelect?: (item: DropdownItem) => void;
    placeholder?: string;
    value?: string | number;
    className?: string;
    disabled?: boolean;
}

export const AppDropdown: React.FC<AppDropdownProps> = ({
    items,
    onSelect,
    placeholder = "Select an option",
    value,
    className,
    disabled = false,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectedItem = items.find((item) => item.value === value || item.id === value);

    return (
        <div className={classNames("relative w-full", className)}>
            <button
                onClick={() => !disabled && setIsOpen(!isOpen)}
                disabled={disabled}
                className={classNames(
                    "w-full px-4 py-2 text-left bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg",
                    "focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200",
                    "flex items-center justify-between",
                    disabled && "opacity-50 cursor-not-allowed"
                )}
            >
                <span className="text-slate-900 dark:text-slate-50">
                    {selectedItem?.label || placeholder}
                </span>
                <svg
                    className={classNames(
                        "w-5 h-5 text-slate-600 dark:text-slate-400 transition-transform",
                        isOpen && "rotate-180"
                    )}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg z-50">
                    {items.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => {
                                onSelect?.(item);
                                setIsOpen(false);
                            }}
                            className={classNames(
                                "w-full px-4 py-2 text-left hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200",
                                "flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 last:border-b-0",
                                selectedItem?.id === item.id && "bg-blue-50 dark:bg-blue-900/20"
                            )}
                        >
                            {item.icon && <span>{item.icon}</span>}
                            <span className="text-slate-900 dark:text-slate-50">{item.label}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};
