/**
 * Custom React Hooks for the application
 */

import { useState, useCallback, useEffect } from "react";

/**
 * Hook for managing form state
 */
export function useForm<T extends Record<string, any>>(initialValues: T) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [touched, setTouched] = useState<Record<string, boolean>>({});

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
            const { name, value } = e.target;
            setValues((prev) => ({ ...prev, [name]: value }));
            if (touched[name]) {
                setErrors((prev) => ({ ...prev, [name]: "" }));
            }
        },
        [touched]
    );

    const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
        const { name } = e.target;
        setTouched((prev) => ({ ...prev, [name]: true }));
    }, []);

    const handleSubmit = useCallback(
        (onSubmit: (values: T) => void | Promise<void>) => async (e: React.FormEvent) => {
            e.preventDefault();
            await onSubmit(values);
        },
        [values]
    );

    const resetForm = useCallback(() => {
        setValues(initialValues);
        setErrors({});
        setTouched({});
    }, [initialValues]);

    return {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        resetForm,
        setValues,
        setErrors,
    };
}

/**
 * Hook for API calls with loading state
 */
export function useAsync<T, E = string>(
    asyncFunction: () => Promise<T>,
    immediate = true
) {
    const [status, setStatus] = useState<"idle" | "pending" | "success" | "error">("idle");
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<E | null>(null);

    const execute = useCallback(async () => {
        setStatus("pending");
        setData(null);
        setError(null);

        try {
            const response = await asyncFunction();
            setData(response);
            setStatus("success");
            return response;
        } catch (err) {
            setError(err as E);
            setStatus("error");
        }
    }, [asyncFunction]);

    useEffect(() => {
        if (immediate) {
            execute();
        }
    }, [execute, immediate]);

    return { execute, status, data, error };
}

/**
 * Hook for managing local storage
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const item = typeof window !== "undefined" ? window.localStorage.getItem(key) : null;
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(error);
            return initialValue;
        }
    });

    const setValue = useCallback(
        (value: T | ((val: T) => T)) => {
            try {
                const valueToStore = value instanceof Function ? value(storedValue) : value;
                setStoredValue(valueToStore);
                if (typeof window !== "undefined") {
                    window.localStorage.setItem(key, JSON.stringify(valueToStore));
                }
            } catch (error) {
                console.error(error);
            }
        },
        [key, storedValue]
    );

    return [storedValue, setValue] as const;
}

/**
 * Hook for detecting if component is mounted
 */
export function useIsMounted() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return isMounted;
}

/**
 * Hook for debouncing values
 */
export function useDebounce<T>(value: T, delay: number) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => clearTimeout(handler);
    }, [value, delay]);

    return debouncedValue;
}

/**
 * Hook for managing pagination
 */
export function usePagination<T>(items: T[], itemsPerPage: number) {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(items.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = items.slice(startIndex, endIndex);

    const goToPage = useCallback((page: number) => {
        setCurrentPage(Math.min(Math.max(1, page), totalPages));
    }, [totalPages]);

    return {
        currentPage,
        totalPages,
        currentItems,
        goToPage,
        hasNextPage: currentPage < totalPages,
        hasPreviousPage: currentPage > 1,
    };
}
