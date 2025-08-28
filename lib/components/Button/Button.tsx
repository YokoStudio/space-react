import './Button.css';
import { Button as BaseButton } from '@headlessui/react';
import { clsx } from 'clsx';
import type { ButtonProps } from '../../types/button.ts';
import { forwardRef, useMemo } from 'react';
import { Icon } from '../Icon/Icon.tsx';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            color = 'primary',
            variant = 'filled',
            size = 'md',
            className,
            children,
            prependIcon,
            appendIcon,
            loading = false,
            block = false,
            disabled = false,
            type = 'button',
            ariaLabel,
            ariaDescribedby,
            ...props
        }: ButtonProps,
        ref,
    ) => {
        const buttonClasses = useMemo(() => {
            return clsx(
                'button',
                color,
                variant,
                `size-${size}`,
                {
                    'w-full': block,
                },
                className,
            );
        }, [color, variant, size, block, disabled, loading, className]);

        return (
            <BaseButton
                className={buttonClasses}
                disabled={disabled}
                type={type}
                ref={ref}
                aria-label={ariaLabel}
                aria-describedby={ariaDescribedby}
                {...props}
            >
                {
                    loading
                        ? <Icon name="circle-loading" size="md" className="animate-spin" />
                        : <>
                            {prependIcon && (
                                <div className={clsx('prepend-icon')}>
                                    {prependIcon}
                                </div>
                            )}
                            {children}
                            {appendIcon && (
                                <div className="append-icon">
                                    {appendIcon}
                                </div>
                            )}
                        </>
                }
            </BaseButton>
        );
    },
);

Button.displayName = 'Button';
