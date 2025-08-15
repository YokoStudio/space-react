import {
    Switch as BaseSwitch,
    SwitchProps as BaseSwitchProps,
} from '@headlessui/react';
import { clsx } from 'clsx';
import { forwardRef } from 'react';
import './Switch.css';

export interface SwitchProps extends Omit<BaseSwitchProps, 'size'> {
    label?: string;
    description?: string;
    disabled?: boolean;
    error?: boolean;
    required?: boolean;
    className?: string;
}

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
    (
        {
            label,
            description,
            disabled = false,
            error = false,
            required = false,
            className,
            children,
            ...props
        },
        ref,
    ) => {
        const switchId = `switch-${Math.random().toString(36).substr(2, 9)}`;

        return (
            <div
                className={clsx(
                    'switch-wrapper',
                    {
                        'switch-wrapper--disabled': disabled,
                        'switch-wrapper--error': error,
                    },
                    className,
                )}
            >
                <div className="switch__container">
                    <BaseSwitch
                        ref={ref}
                        className={clsx('switch', {
                            'switch--error': error,
                            'switch--disabled': disabled,
                        })}
                        disabled={disabled}
                        aria-invalid={error}
                        aria-describedby={
                            description ? `${switchId}-description` : undefined
                        }
                        {...props}
                    >
                        <span className="switch__action" />
                    </BaseSwitch>

                    {(label || children) && (
                        <div className="switch__content">
                            {label && (
                                <label
                                    htmlFor={switchId}
                                    className={clsx(
                                        'switch__label',
                                        disabled && 'switch__label--disabled',
                                    )}
                                >
                                    {label}
                                    {required && (
                                        <span
                                            className="switch__required"
                                            aria-label="required"
                                        >
                                            *
                                        </span>
                                    )}
                                </label>
                            )}
                            {typeof children === 'function' ? null : (
                                <div className="switch__children">
                                    {children}
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {description && (
                    <div
                        id={`${switchId}-description`}
                        className={clsx(
                            'switch__description',
                            error && 'switch__description--error',
                        )}
                    >
                        {description}
                    </div>
                )}
            </div>
        );
    },
);

Switch.displayName = 'Switch';
