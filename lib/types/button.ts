import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonColor = 'primary' | 'secondary' | 'error';
type ButtonVariant = 'filled' | 'outlined' | 'ghost';
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type ButtonType = 'button' | 'submit' | 'reset';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    color?: ButtonColor;
    variant?: ButtonVariant;
    disabled?: boolean;
    size?: ButtonSize;
    prependIcon?: ReactNode;
    appendIcon?: ReactNode;
    children: ReactNode;

    loading?: boolean;
    block?: boolean;

    ariaLabel?: string;
    ariaDescribedby?: string;

    type?: ButtonType;
}
