import './Checkbox.css';
import { Checkbox as BaseCheckbox } from '@headlessui/react';
import { CheckIcon } from './icons/Check.tsx';
import { clsx } from 'clsx';
import { MinusIcon } from './icons/Minus.tsx';
import { forwardRef } from 'react';

export interface CheckboxProps {
    label?: string;
    indeterminate?: boolean;
    checked: boolean;
    disabled?: boolean;
    onChange: (value: boolean) => void;
    id?: string;
    name?: string;
    error?: boolean;
    helperText?: string;
    className?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
    (
        {
            checked,
            onChange,
            disabled = false,
            indeterminate = false,
            label,
            id,
            name,
            error,
            helperText,
            className,
            ...props
        },
        ref,
    ) => {
        const checkboxId =
            id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

        return (
            <div className={clsx('checkbox-wrapper', className)}>
                <div className="checkbox__container">
                    <BaseCheckbox
                        ref={ref}
                        id={checkboxId}
                        indeterminate={indeterminate}
                        className={clsx('checkbox', {
                            'checkbox--error': error,
                            'checkbox--disabled': disabled,
                        })}
                        checked={checked}
                        disabled={disabled}
                        onChange={onChange}
                        name={name}
                        aria-invalid={error}
                        aria-describedby={
                            helperText ? `${checkboxId}-helper` : undefined
                        }
                        {...props}
                    >
                        {indeterminate ? (
                            <MinusIcon />
                        ) : checked ? (
                            <CheckIcon />
                        ) : null}
                    </BaseCheckbox>

                    {label && (
                        <label
                            htmlFor={checkboxId}
                            className={clsx(
                                'checkbox__label',
                                disabled && 'checkbox__label--disabled',
                            )}
                        >
                            {label}
                        </label>
                    )}
                </div>

                {helperText && (
                    <div
                        id={`${checkboxId}-helper`}
                        className={clsx(
                            'checkbox__helper-text',
                            error && 'checkbox__helper-text--error',
                        )}
                    >
                        {helperText}
                    </div>
                )}
            </div>
        );
    },
);

Checkbox.displayName = 'Checkbox';
