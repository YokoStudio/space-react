import { useState, useCallback, useMemo } from 'react';

export type ValidationRule<T> = (value: T) => string | undefined;
export type ValidationResult = {
    isValid: boolean;
    errors: string[];
    hasErrors: boolean;
};

export interface ValidationConfig<T> {
    rules: ValidationRule<T>[];
    validateOnChange?: boolean;
    validateOnBlur?: boolean;
    validateOnSubmit?: boolean;
}

export const useValidation = <T>(
    initialValue: T,
    config: ValidationConfig<T> = { rules: [] },
) => {
    const [value, setValue] = useState<T>(initialValue);
    const [errors, setErrors] = useState<string[]>([]);
    const [touched, setTouched] = useState(false);
    const [isValidating, setIsValidating] = useState(false);

    const validate = useCallback(
        async (val: T): Promise<ValidationResult> => {
            if (!config.rules.length) {
                return { isValid: true, errors: [], hasErrors: false };
            }

            setIsValidating(true);

            try {
                const validationErrors = await Promise.all(
                    config.rules.map((rule) => rule(val)),
                );

                const filteredErrors = validationErrors.filter(
                    Boolean,
                ) as string[];

                setErrors(filteredErrors);

                return {
                    isValid: filteredErrors.length === 0,
                    errors: filteredErrors,
                    hasErrors: filteredErrors.length > 0,
                };
            } finally {
                setIsValidating(false);
            }
        },
        [config.rules],
    );

    const handleChange = useCallback(
        async (newValue: T) => {
            setValue(newValue);

            if (config.validateOnChange && touched) {
                await validate(newValue);
            }
        },
        [config.validateOnChange, touched, validate],
    );

    const handleBlur = useCallback(async () => {
        setTouched(true);

        if (config.validateOnBlur) {
            await validate(value);
        }
    }, [config.validateOnBlur, validate, value]);

    const handleSubmit = useCallback(async (): Promise<ValidationResult> => {
        setTouched(true);

        if (config.validateOnSubmit) {
            return await validate(value);
        }

        return { isValid: true, errors: [], hasErrors: false };
    }, [config.validateOnSubmit, validate, value]);

    const reset = useCallback(() => {
        setValue(initialValue);
        setErrors([]);
        setTouched(false);
        setIsValidating(false);
    }, [initialValue]);

    const setFieldError = useCallback((error: string) => {
        setErrors([error]);
    }, []);

    const clearErrors = useCallback(() => {
        setErrors([]);
    }, []);

    const validationState = useMemo(
        () => ({
            isValid: errors.length === 0,
            errors,
            hasErrors: errors.length > 0,
            touched,
            isValidating,
        }),
        [errors, touched, isValidating],
    );

    return {
        value,
        setValue,
        handleChange,
        handleBlur,
        handleSubmit,
        reset,
        setFieldError,
        clearErrors,
        ...validationState,
    };
};

// Common validation rules
export const validationRules = {
    required:
        (message = 'This field is required'): ValidationRule<any> =>
        (value) =>
            value === null || value === undefined || value === ''
                ? message
                : undefined,

    minLength:
        (min: number, message?: string): ValidationRule<string> =>
        (value) =>
            value.length < min
                ? message || `Minimum length is ${min} characters`
                : undefined,

    maxLength:
        (max: number, message?: string): ValidationRule<string> =>
        (value) =>
            value.length > max
                ? message || `Maximum length is ${max} characters`
                : undefined,

    email:
        (
            message = 'Please enter a valid email address',
        ): ValidationRule<string> =>
        (value) =>
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? message : undefined,

    pattern:
        (regex: RegExp, message: string): ValidationRule<string> =>
        (value) =>
            !regex.test(value) ? message : undefined,

    min:
        (min: number, message?: string): ValidationRule<number> =>
        (value) =>
            value < min
                ? message || `Value must be at least ${min}`
                : undefined,

    max:
        (max: number, message?: string): ValidationRule<number> =>
        (value) =>
            value > max ? message || `Value must be at most ${max}` : undefined,

    custom:
        <T>(
            validator: (
                value: T,
            ) => boolean | string | Promise<boolean | string>,
            message?: string,
        ): ValidationRule<T> =>
        async (value) => {
            const result = await validator(value);
            if (typeof result === 'string') {
                return result;
            }
            return result ? undefined : message || 'Validation failed';
        },
};
