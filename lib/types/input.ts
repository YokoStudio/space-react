import { InputHTMLAttributes, ReactNode } from 'react';

export interface InputProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    placeholder?: string;
    error?: boolean;
    disabled?: boolean;
    size?: 'sm' | 'md' | 'lg';
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    helperText?: string;
    label?: string;
    required?: boolean;
    fullWidth?: boolean;
    clearable?: boolean;
    onClear?: () => void;
}
