import { ButtonHTMLAttributes, ReactNode } from 'react';
import { IconProps } from '../components/Icon/Icon';

type ButtonColor = 'primary' | 'secondary' | 'error';
type ButtonVariant = 'filled' | 'outlined' | 'ghost';
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type ButtonType = 'button' | 'submit' | 'reset';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    color?: ButtonColor;
    variant?: ButtonVariant;
    disabled?: boolean;
    size?: ButtonSize;
    prependIcon?: IconProps['name'] | ReactNode;
    appendIcon?: IconProps['name'] | ReactNode;
    children: ReactNode;

    loading?: boolean;
    block?: boolean;

    ariaLabel?: string;
    ariaDescribedby?: string;

    type?: ButtonType;
}
