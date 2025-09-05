import { InputHTMLAttributes, ReactNode } from 'react';

type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
    placeholder?: string;
    error?: boolean;
    disabled?: boolean;
    actionButton?: ReactNode;
    prependIcon?: ReactNode;
    size?: InputSize;
    clearButton?: boolean;
    loading?: boolean;
    onChange?: (value: string) => void;
}
