"use client";

import React, { useState } from "react";
import { AppText } from "@/app/components/ui/AppText";
import { AppButton } from "@/app/components/ui/AppButton";
import { AppAvatar } from "@/app/components/ui/AppAvatar";
import { BRAND_NAME } from "@/app/constants";

export const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-40 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold">E</span>
                    </div>
                    <AppText variant="h4" weight="bold">
                        {BRAND_NAME}
                    </AppText>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <nav className="flex gap-6">
                        <a href="#" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50 transition-colors">
                            Dashboard
                        </a>
                        <a href="#" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50 transition-colors">
                            Products
                        </a>
                        <a href="#" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50 transition-colors">
                            Orders
                        </a>
                    </nav>

                    <div className="flex items-center gap-3">
                        <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                            <svg
                                className="w-5 h-5 text-slate-600 dark:text-slate-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                />
                            </svg>
                        </button>
                        <AppAvatar initials="JD" size="md" />
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
                >
                    <svg
                        className="w-6 h-6 text-slate-600 dark:text-slate-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-slate-200 dark:border-slate-800 px-4 py-4 bg-slate-50 dark:bg-slate-800">
                    <nav className="flex flex-col gap-3">
                        <a href="#" className="px-3 py-2 rounded-lg hover:bg-white dark:hover:bg-slate-700">
                            Dashboard
                        </a>
                        <a href="#" className="px-3 py-2 rounded-lg hover:bg-white dark:hover:bg-slate-700">
                            Products
                        </a>
                        <a href="#" className="px-3 py-2 rounded-lg hover:bg-white dark:hover:bg-slate-700">
                            Orders
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
};
