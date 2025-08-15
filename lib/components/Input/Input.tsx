import './Input.css';
import { Input as BaseInput } from '@headlessui/react';
import type { InputProps } from '../../types/input.ts';
import { clsx } from 'clsx';
import { forwardRef, useState } from 'react';

export const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            placeholder,
            error = false,
            disabled = false,
            size = 'md',
            leftIcon,
            rightIcon,
            helperText,
            label,
            required,
            fullWidth = false,
            clearable = false,
            onClear,
            className,
            id,
            ...props
        },
        ref,
    ) => {
        const [inputId] = useState(
            () => id || `input-${Math.random().toString(36).substr(2, 9)}`,
        );

        return (
            <div
                className={clsx('input-wrapper', {
                    'input-wrapper--full-width': fullWidth,
                })}
            >
                {label && (
                    <label htmlFor={inputId} className="input__label">
                        {label}
                        {required && (
                            <span
                                className="input__required"
                                aria-label="required"
                            >
                                *
                            </span>
                        )}
                    </label>
                )}

                <div className="input__container">
                    {leftIcon && (
                        <span
                            className="input__icon input__icon--left"
                            aria-hidden="true"
                        >
                            {leftIcon}
                        </span>
                    )}

                    <BaseInput
                        ref={ref}
                        id={inputId}
                        placeholder={placeholder}
                        className={clsx(
                            'input',
                            `input--${size}`,
                            {
                                'input--error': error,
                                'input--with-left-icon': leftIcon,
                                'input--with-right-icon':
                                    rightIcon || clearable,
                            },
                            className,
                        )}
                        disabled={disabled}
                        aria-invalid={error}
                        aria-describedby={
                            helperText ? `${inputId}-helper` : undefined
                        }
                        {...props}
                    />

                    {clearable && props.value && (
                        <button
                            type="button"
                            className="input__clear-button"
                            onClick={onClear}
                            aria-label="Clear input"
                            disabled={disabled}
                        >
                            <span aria-hidden="true">×</span>
                        </button>
                    )}

                    {rightIcon && (
                        <span
                            className="input__icon input__icon--right"
                            aria-hidden="true"
                        >
                            {rightIcon}
                        </span>
                    )}
                </div>

                {helperText && (
                    <div
                        id={`${inputId}-helper`}
                        className={clsx(
                            'input__helper-text',
                            error && 'input__helper-text--error',
                        )}
                    >
                        {helperText}
                    </div>
                )}
            </div>
        );
    },
);

Input.displayName = 'Input';
