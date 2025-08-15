import './Button.css';
import { Button as BaseButton } from '@headlessui/react';
import { clsx } from 'clsx';
import { forwardRef } from 'react';
import type { ButtonProps } from '../../types/button.ts';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            variant = 'primary',
            status = 'filled',
            size = 'md',
            className,
            children,
            disabled,
            loading = false,
            fullWidth = false,
            leftIcon,
            rightIcon,
            loadingText,
            ...props
        },
        ref,
    ) => {
        const isDisabled = disabled || loading;

        return (
            <BaseButton
                ref={ref}
                className={clsx(
                    'button',
                    `button--${size}`,
                    `button--${variant}`,
                    `button--${status}`,
                    {
                        'w-full': fullWidth,
                    },
                    className,
                )}
                disabled={isDisabled}
                aria-busy={loading}
                aria-label={loading && loadingText ? loadingText : undefined}
                {...props}
            >
                {loading && (
                    <span className="animate-spin" aria-hidden="true">
                        ⏳
                    </span>
                )}
                {!loading && leftIcon && (
                    <span aria-hidden="true">{leftIcon}</span>
                )}
                <span>{children}</span>
                {!loading && rightIcon && (
                    <span aria-hidden="true">{rightIcon}</span>
                )}
            </BaseButton>
        );
    },
);

Button.displayName = 'Button';
