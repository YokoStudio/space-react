import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps
    extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
    variant?: 'primary' | 'secondary' | 'error' | 'ghost';
    status?: 'filled' | 'outlined' | 'ghost';
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    loading?: boolean;
    children: ReactNode;
    fullWidth?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    loadingText?: string;
}
