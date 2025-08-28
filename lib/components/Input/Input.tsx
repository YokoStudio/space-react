import './Input.css';
import { Input as BaseInput } from '@headlessui/react';
import type { InputProps } from '../../types/input.ts';
import { clsx } from 'clsx';

export const Input = ({
    placeholder,
    error = false,
    disabled = false,
    className,
    ...props
}: InputProps) => {
    return (
        <BaseInput
            placeholder={placeholder}
            className={clsx('input', { error: error }, className)}
            disabled={disabled}
            {...props}
        />
    );
};
