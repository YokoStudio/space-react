import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    error?: boolean;
    disabled?: boolean;
}
