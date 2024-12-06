import './Button.css';
import { Button as BaseButton } from '@headlessui/react';
import { clsx } from 'clsx';
import type { ButtonProps } from '../../types/button.ts';

export const Button = ({
    variant = 'primary',
    status = 'filled',
    size = 'md',
    className,
    children,
    ...props
}: ButtonProps) => {
    return (
        <BaseButton
            className={clsx(
                'button',
                variant,
                status,
                'size-' + size,
                className,
            )}
            {...props}
        >
            {children}
        </BaseButton>
    );
};
