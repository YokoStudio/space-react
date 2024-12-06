import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'error';
    status?: 'filled' | 'outlined' | 'ghost';
    disabled?: boolean;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    children: ReactNode;
}
