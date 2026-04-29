"use client";

import React from "react";
import { classNames } from "@/app/lib/utils";

interface AppModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
    footer?: React.ReactNode;
    size?: "sm" | "md" | "lg";
}

const sizeStyles: Record<string, string> = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
};

export const AppModal: React.FC<AppModalProps> = ({
    isOpen,
    onClose,
    title,
    children,
    footer,
    size = "md",
}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="flex items-center justify-center min-h-screen px-4 py-6 sm:px-6 lg:px-8">
                <div
                    className={classNames(
                        "bg-white dark:bg-slate-900 rounded-lg shadow-lg relative w-full",
                        sizeStyles[size]
                    )}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    {title && (
                        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800">
                            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                                {title}
                            </h2>
                            <button
                                onClick={onClose}
                                className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    )}

                    {/* Body */}
                    <div className="px-6 py-4">{children}</div>

                    {/* Footer */}
                    {footer && (
                        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-800 rounded-b-lg flex justify-end gap-2">
                            {footer}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
