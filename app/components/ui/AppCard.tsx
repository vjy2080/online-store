import React from "react";
import { classNames } from "@/app/lib/utils";
import { CardProps } from "@/app/types";

export const AppCard: React.FC<CardProps> = ({
    children,
    className,
    title,
    subtitle,
    footer,
    hoverable = false,
}) => {
    return (
        <div
            className={classNames(
                "bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm transition-all duration-200",
                hoverable && "hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 cursor-pointer",
                className
            )}
        >
            {title && (
                <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800">
                    <div className="flex flex-col">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                            {title}
                        </h3>
                        {subtitle && (
                            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                                {subtitle}
                            </p>
                        )}
                    </div>
                </div>
            )}

            <div className="px-6 py-4">{children}</div>

            {footer && (
                <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-800">
                    {footer}
                </div>
            )}
        </div>
    );
};
