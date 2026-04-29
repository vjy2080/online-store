/**
 * Utility functions
 */

export function classNames(...classes: (string | undefined | boolean)[]): string {
    return classes.filter(Boolean).join(" ");
}

export function formatCurrency(amount: number): string {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(amount);
}

export function formatDate(date: string | Date): string {
    return new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    }).format(typeof date === "string" ? new Date(date) : date);
}

export function truncateText(text: string, length: number): string {
    if (text.length <= length) return text;
    return text.slice(0, length) + "...";
}

export function calculateDiscount(original: number, current: number): number {
    return Math.round(((original - current) / original) * 100);
}
