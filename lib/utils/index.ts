import { clsx, type ClassValue } from 'clsx';

// Class name utilities
export const cn = (...inputs: ClassValue[]) => {
    return clsx(inputs);
};

export const createComponentClassNames = (
    baseClass: string,
    variants: Record<string, string> = {},
    modifiers: Record<string, string> = {},
) => {
    return {
        base: baseClass,
        variants,
        modifiers,
        compose: (variant?: string, modifier?: string, className?: string) => {
            return cn(
                baseClass,
                variant && variants[variant],
                modifier && modifiers[modifier],
                className,
            );
        },
    };
};

// Validation utilities
export const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const isValidUrl = (url: string): boolean => {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
};

export const isNumeric = (value: string): boolean => {
    return !isNaN(Number(value)) && !isNaN(parseFloat(value));
};

export const hasMinLength = (value: string, min: number): boolean => {
    return value.length >= min;
};

export const hasMaxLength = (value: string, max: number): boolean => {
    return value.length <= max;
};

export const isRequired = (value: any): boolean => {
    if (typeof value === 'string') {
        return value.trim().length > 0;
    }
    return value !== null && value !== undefined;
};

// DOM utilities
export const getElementById = (id: string): HTMLElement | null => {
    return document.getElementById(id);
};

export const focusElement = (element: HTMLElement | null): void => {
    if (element) {
        element.focus();
    }
};

export const scrollToElement = (
    element: HTMLElement | null,
    behavior: ScrollBehavior = 'smooth',
): void => {
    if (element) {
        element.scrollIntoView({ behavior });
    }
};

export const isElementInViewport = (element: HTMLElement): boolean => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
            (window.innerWidth || document.documentElement.clientWidth)
    );
};

// Event utilities
export const debounce = <T extends (...args: any[]) => any>(
    func: T,
    wait: number,
): ((...args: Parameters<T>) => void) => {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
};

export const throttle = <T extends (...args: any[]) => any>(
    func: T,
    limit: number,
): ((...args: Parameters<T>) => void) => {
    let inThrottle: boolean;
    return (...args: Parameters<T>) => {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
};

// String utilities
export const capitalize = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export const truncate = (
    str: string,
    length: number,
    suffix: string = '...',
): string => {
    if (str.length <= length) return str;
    return str.substring(0, length) + suffix;
};

export const slugify = (str: string): string => {
    return str
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
};

// Array utilities
export const unique = <T>(array: T[]): T[] => {
    return [...new Set(array)];
};

export const chunk = <T>(array: T[], size: number): T[][] => {
    return Array.from({ length: Math.ceil(array.length / size) }, (_, index) =>
        array.slice(index * size, (index + 1) * size),
    );
};

export const groupBy = <T, K extends keyof any>(
    array: T[],
    key: (item: T) => K,
): Record<K, T[]> => {
    return array.reduce(
        (groups, item) => {
            const group = key(item);
            groups[group] = groups[group] || [];
            groups[group].push(item);
            return groups;
        },
        {} as Record<K, T[]>,
    );
};

// Object utilities
export const pick = <T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> => {
    return keys.reduce(
        (result, key) => {
            if (key in obj) {
                result[key] = obj[key];
            }
            return result;
        },
        {} as Pick<T, K>,
    );
};

export const omit = <T, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> => {
    return Object.keys(obj).reduce(
        (result, key) => {
            if (!keys.includes(key as K)) {
                result[key as keyof Omit<T, K>] = obj[key as keyof T];
            }
            return result;
        },
        {} as Omit<T, K>,
    );
};

// Type utilities
export const isObject = (value: any): value is object => {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
};

export const isFunction = (value: any): value is Function => {
    return typeof value === 'function';
};

export const isString = (value: any): value is string => {
    return typeof value === 'string';
};

export const isNumber = (value: any): value is number => {
    return typeof value === 'number' && !isNaN(value);
};

export const isBoolean = (value: any): value is boolean => {
    return typeof value === 'boolean';
};

// Accessibility utilities
export const generateId = (prefix: string = 'id'): string => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

export const getAriaDescribedBy = (
    id: string,
    helperText?: string,
    errorText?: string,
): string | undefined => {
    const ids = [];
    if (helperText) ids.push(`${id}-helper`);
    if (errorText) ids.push(`${id}-error`);
    return ids.length > 0 ? ids.join(' ') : undefined;
};

// Performance utilities
export const memoize = <T extends (...args: any[]) => any>(fn: T): T => {
    const cache = new Map();
    return ((...args: Parameters<T>) => {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn(...args);
        cache.set(key, result);
        return result;
    }) as T;
};
